"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import GetByType from "@/app/firebase/getBy-part";


type Props = {};

async function VehicleAccessories({}: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const [accessories, setAccessories] = useState<any>([]);

  const fetchData = async () => {
    try {
      const res = (await GetByType("Interior and Exterior Accessories", 'products')).results;
      setAccessories(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Schedule data refresh every 24 hours
    const interval = setInterval(fetchData, 24 * 60 * 60 * 1000);
    // Schedule data refresh every minute (60 seconds)
    // const interval = setInterval(fetchData, 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="mt-2 flex overflow-x-auto overflow-y-hidden">
        {accessories.map((product: Product) => (
          <ProductCard
          key={product.id}
            data={product}
          />
        ))}

      </div>
    </div>
  );
}

export default VehicleAccessories;
