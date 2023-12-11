import React from "react";
import Link from "next/link";

type Props = {
  data: Product;
};

function ProductCard({ data }: Props) {
  const imagesLinkList = data.imagesLink?.split("||");
  return (
    <div className="my-2 mx-1 bg-white h-[250px] w-[200px] rounded-lg shadow-md flex flex-col cursor-pointer">
      <Link href={`/description/${data.id}`}>
        <div className="relative h-[150px] w-full">
          <img
            
            src={data.img ? data.images[0] : imagesLinkList[0]}
            alt="img"
            className="object-cover h-[150px] w-full rounded-t-lg"
          />
        </div>
        <div className="mt-2 px-2 flex-1">
          <h1 className="truncate text-lg font-semibold">{data.name}</h1>
          <h3 className="truncate h-[2.5em] text-sm text-gray-600">
            {data.description}
          </h3>
        </div>
        <div className="flex justify-end px-2 pb-2">
          {data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "LKR", // Change the currency code as needed
          })}
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
