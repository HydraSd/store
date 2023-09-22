import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

type Props = {
  automotiveType: categoryType[];
  vehicleModal: categoryType[];
  indutrialType: categoryType[];
  onSelectCategory: (
    minPrice: number,
    maxPrice: number,
    vehicleModal: string[],
    selectedCategories: string[]
  ) => void;
};

function FilterSection({
  automotiveType,
  vehicleModal,
  indutrialType,
  onSelectCategory,
}: Props) {
  const [minPrice, setMinPrice] = useState(""); // State for min price input
  const [maxPrice, setMaxPrice] = useState(""); // State for max price input
  const [selectedVehicleModals, setSelectedVehicleModals] = useState<string[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleFilterClick = () => {
    const minPriceAsNumber = parseInt(minPrice, 10); // Use 10 as the radix for base 10
    const maxPriceAsNumber = parseInt(maxPrice, 10);
    // Call the onSelectCategory function with the selected criteria
    console.log(selectedCategories);
    onSelectCategory(
      minPriceAsNumber,
      maxPriceAsNumber,
      selectedVehicleModals,
      selectedCategories
    );
  };

  return (
    <div className="mx-2">
      <div className="text-lg font-semibold">Filter</div>
      <div className="mt-5 grid grid-cols-2 space-x-2">
        <div>
          <div className="font-medium">Min</div>
          <Input
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            type="number"
          />
        </div>
        <div>
          <div className="font-medium">Max</div>
          <Input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Man"
            type="number"
          />
        </div>
      </div>

      {vehicleModal && vehicleModal.length > 0 && (
        <div>
          <div className="mt-5 font-semibold">Vehicle Modal</div>
          <div>
            {vehicleModal.map((type) => (
              <div
                key={type.id}
                className="flex items-center space-x-1 space-y-1"
              >
                <input
                  type="checkbox"
                  id={type.id}
                  onChange={(e) => {
                    const checked = e.target.checked;

                    if (checked) {
                      setSelectedVehicleModals([
                        ...selectedVehicleModals,
                        type.name,
                      ]);
                    } else {
                      setSelectedVehicleModals(
                        selectedVehicleModals.filter(
                          (value) => value !== type.name
                        )
                      );
                    }
                  }}
                />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {automotiveType && automotiveType.length > 0 && (
        <div>
          <div className="mt-5 font-semibold">Automotive Part</div>
          <div>
            {automotiveType.map((type) => (
              <div
                key={type.id}
                className="flex items-center space-x-1 space-y-1"
              >
                <input
                  type="checkbox"
                  id={type.id}
                  onChange={(e) => {
                    const checked = e.target.checked;

                    if (checked) {
                      console.log(`Adding ${type.name} to auto`);
                      setSelectedCategories([...selectedCategories, type.name]);
                    } else {
                      console.log(`Removing ${type.name} from auto`);
                      setSelectedCategories(
                        selectedCategories.filter(
                          (value) => value !== type.name
                        )
                      );
                    }
                  }}
                />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {indutrialType && indutrialType.length > 0 && (
        <div>
          <div className="mt-5 font-semibold">Industrial Part</div>
          <div>
            {indutrialType.map((type) => (
              <div
                key={type.id}
                className="flex items-center space-x-1 space-y-1"
              >
                <input
                  type="checkbox"
                  id={type.id}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    
                    if (checked) {
                      console.log(`Adding ${type.name} to auto`);
                      setSelectedCategories([...selectedCategories, type.name]);
                    } else {
                      console.log(`Removing ${type.name} from auto`);
                      setSelectedCategories(selectedCategories.filter((value) => value !== type.name));
                    }
                  }}
                  
                />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button onClick={handleFilterClick} className="mt-5 w-full">
        Filter
      </Button>
    </div>
  );
}

export default FilterSection;
