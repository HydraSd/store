"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import React from "react";
import { useState } from "react";

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

function MobileFilter({
  automotiveType,
  vehicleModal,
  indutrialType,
  onSelectCategory,
}: Props) {
  const [open, setOpen] = useState(false);
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
    onSelectCategory(
      minPriceAsNumber,
      maxPriceAsNumber,
      selectedVehicleModals,
      selectedCategories
    );
  };
  return (
    <div className="m-2 lg:hidden">
      <div className="flex justify-end">
        <div className="p-2 bg-white rounded-full shadow-lg hover:scale-105 transition duration-100">
          <Filter
            onClick={() => setOpen(!open)}
            className="h-5 w-5 cursor-pointer"
          />
        </div>
      </div>
      {open && (
        <div>
          <div className="mt-5 grid grid-cols-2 space-x-2">
            <div>
              <div className="font-medium">Min</div>
              <Input
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min"
                type="number"
              />
            </div>
            <div>
              <div className="font-medium">Max</div>
              <Input
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max"
                type="number"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3">
            {vehicleModal && vehicleModal.length > 0 && (
              <div>
                <h2 className="mt-5 font-semibold">Vehicle Modal</h2>
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
                      />{" "}
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
                <h2 className="mt-5 font-semibold">Automotive Part</h2>
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
                            setSelectedCategories([
                              ...selectedCategories,
                              type.name,
                            ]);
                          } else {
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
                <h2 className="mt-5 font-semibold">Industrial Part</h2>
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
                            setSelectedCategories([
                              ...selectedCategories,
                              type.name,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter(
                                (value) => value !== type.name
                              )
                            );
                          }
                        }}
                      />{" "}
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
          </div>
          <Button className="mt-5 w-full" onClick={handleFilterClick}>
            Filter
          </Button>
        </div>
      )}
    </div>
  );
}

export default MobileFilter;
