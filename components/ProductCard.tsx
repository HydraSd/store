import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  data: Product;
};

function ProductCard({ data }: Props) {
  return (
    <div className="my-2 mx-1 bg-white h-[250px] w-[200px] rounded-lg shadow-md flex flex-col cursor-pointer">
      <Link href={`/description/${data.id}`}>
        <div className="relative h-[150px] w-full">
          <Image
            fill
            src={data.images[0]}
            alt="img"
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="mt-2 px-2 flex-1">
          <div className="truncate text-lg font-semibold">{data.name}</div>
          <div className="truncate h-[2.5em] text-sm text-gray-600">
            {data.description}
          </div>
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
