"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import FeaturedProducts from "@/app/firebase/featured-products";

type Props = {};

async function FeaturedSection({}: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  // const featuredProducts = (await FeaturedProducts()).data;
  // Fetch data initially and on a schedule
  const fetchData = async () => {
    try {
      const res = (await FeaturedProducts()).data;
      setFeaturedProducts(res);
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
        {featuredProducts.map((product: Product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
