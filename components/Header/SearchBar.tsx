"use client";
import { useState, useRef, useEffect } from "react";
import { Search, Loader2, X, Clock, Trash2 } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

type Props = {};

function SearchBar({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches on mount
  useEffect(() => {
    const storedSearchList = localStorage.getItem("searchList");
    if (storedSearchList) {
      setRecentSearches(JSON.parse(storedSearchList).slice(0, 5));
    }
  }, []);

  // Reset loading when route changes
  useEffect(() => {
    if (loading) setLoading(false);
  }, [pathname]);

  // Filtered dropdown searches
  const filteredSearches = recentSearches.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (highlightIndex >= 0 && highlightIndex < filteredSearches.length) {
        setSearch(filteredSearches[highlightIndex]);
        SearchResult(filteredSearches[highlightIndex]);
      } else {
        SearchResult(search);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev < filteredSearches.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSearches.length - 1
      );
    }
  };

  const saveSearch = (query: string) => {
    const storedSearchList = localStorage.getItem("searchList");
    let searches: string[] = storedSearchList
      ? JSON.parse(storedSearchList)
      : [];

    // Remove duplicates
    searches = searches.filter((s: string) => s !== query);

    // Add new query to front
    searches.unshift(query);

    // Keep only latest 5
    searches = searches.slice(0, 5);

    localStorage.setItem("searchList", JSON.stringify(searches));
    setRecentSearches(searches);
  };

  const SearchResult = (query: string) => {
    if (!query) return;
    setLoading(true);
    saveSearch(query);
    setShowDropdown(false);
    setHighlightIndex(-1);
    router.push(`/search/${query}`);
  };

  const clearSearch = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  const clearAllHistory = () => {
    localStorage.removeItem("searchList");
    setRecentSearches([]);
  };

  return (
    <div className="relative flex w-screen pb-2 sm:py-3 md:w-[500px] lg:w-[600px]">
      {/* Input */}
      <div className="bg-white ml-3 py-2 px-2 w-full border relative flex items-center">
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowDropdown(true);
            setHighlightIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)} // allow click on dropdown
          type="text"
          placeholder="Search product"
          className="outline-none w-full text-gray-600 bg-white pr-8"
          disabled={loading}
        />

        {/* Clear button */}
        {search && !loading && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 text-gray-400 hover:text-black"
          >
            <X size={18} />
          </button>
        )}

        {/* Dropdown history */}
        {showDropdown && filteredSearches.length > 0 && (
          <ul className="absolute top-full left-0 right-0 mt-1 bg-white border rounded shadow-lg z-50 max-h-60 overflow-y-auto">
            {filteredSearches.map((item, i) => (
              <li
                key={i}
                className={`flex items-center gap-2 px-3 py-2 cursor-pointer ${
                  i === highlightIndex
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onMouseEnter={() => setHighlightIndex(i)}
                onClick={() => {
                  setSearch(item); // autofill input
                  setShowDropdown(false);
                }}
              >
                <Clock size={16} className="text-gray-400" />
                {item}
              </li>
            ))}
            {/* Clear All History button */}
            <li
              className="flex items-center gap-2 px-3 py-2 mt-1 border-t hover:bg-red-100 cursor-pointer text-red-600 font-medium"
              onClick={clearAllHistory}
            >
              <Trash2 size={16} />
              Clear All History
            </li>
          </ul>
        )}
      </div>

      {/* Search button */}
      <div
        onClick={() => SearchResult(search)}
        className={`flex items-center mr-3 py-2 px-3 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black cursor-pointer hover:bg-primary/90"
        }`}
      >
        {loading ? (
          <Loader2 size={20} className="text-white animate-spin" />
        ) : (
          <Search size={20} className="text-white" />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
