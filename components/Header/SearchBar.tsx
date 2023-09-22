"use client";
import { useState } from 'react';
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation';

type Props = {}

function SearchBar({}: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const SearchResult = () => {
    if(search) {
      router.push(`/search/${search}`)
    }
  }

  return (
    <div className='flex  w-screen pb-2 sm:py-3  md:w-[500px] lg:w-[600px]'>
        <div className='bg-white ml-3  py-2 px-2  w-full border  '>
            <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text" 
            placeholder="Search product"
             className='outline-none w-full text-gray-600 bg-white'
            />
        </div>
        <div 
        onClick={SearchResult}
        className='flex items-center mr-3 py-2 px-3 bg-black cursor-pointer hover:bg-primary/90'>
            <Search  size={20} className='text-white'/>
        </div>
  
    </div>
    
  )
}

export default SearchBar