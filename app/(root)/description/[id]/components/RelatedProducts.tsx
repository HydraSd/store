import GetRelatedProducts from "@/app/firebase/get-related-products";
import ProductCard from "@/components/ProductCard";
import React from "react";

type Props = {
  vehcile?: string;
};

async function RelatedProducts({ vehcile }: Props) {
  const products = (await GetRelatedProducts(vehcile!)).data;

  return (
    <div>
      <div className="mt-2 flex overflow-x-auto overflow-y-hidden">
        {products.map((product: Product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
