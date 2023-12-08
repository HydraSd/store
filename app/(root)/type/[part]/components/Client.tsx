"use client";
import { useState, useEffect } from "react";
import FilterSection from "./FilterSection";
import MobileFilter from "./MobileFilter";
import Card from "./Card";

type Props = {
  initialData: Product[];
  vehicleModal: categoryType[];
  automotiveType: categoryType[];
  industrialType: categoryType[];
};

function Client({
  initialData,
  vehicleModal,
  automotiveType,
  industrialType,
}: Props) {
  const [results, setResults] = useState(initialData);

  const filterResultsByCriteria = (
    minPrice: number,
    maxPrice: number,
    vehcileModal: string[],
    selectedCategories: string[]
  ) => {
    // Filter your results based on minPrice, maxPrice, and selectedCategories
    // You can use these criteria to filter the results from your initialResults

    // Example filtering logic (modify as needed):
    const filteredResults = initialData.filter((result) => {
      const priceInRange =
        (isNaN(minPrice) || result.price >= minPrice) &&
        (isNaN(maxPrice) || result.price <= maxPrice);
      const categoryMatches =
        selectedCategories.length === 0 ||
        selectedCategories.includes(result.type);
      const vehicleModalMatches =
        vehcileModal.length === 0 ||
        vehcileModal.includes(result.vehicle);

      return priceInRange && categoryMatches && vehicleModalMatches;
    });

    setResults(filteredResults);
  };

  return (
    <div className="lg:flex">
      <div className="hidden lg:inline-block pl-2 w-[20%] border  bg-white shadow-md  h-screen">
        <FilterSection
          indutrialType={industrialType}
          vehicleModal={vehicleModal}
          onSelectCategory={filterResultsByCriteria}
        />
      </div>
      <div className=" lg:w-[80%] ">
        <div>
          <MobileFilter
            indutrialType={industrialType}
            vehicleModal={vehicleModal}
            automotiveType={automotiveType}
            onSelectCategory={filterResultsByCriteria}
          />
          {results.length !== 0 ? (
            <div>
              {results.map((result: Product) => (
                <Card key={result.id} product={result} />
              ))}
            </div>
          ) : (
            <p className="mt-10 flex items-center justify-around">
              <div>No Results</div>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Client;
