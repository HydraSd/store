import React from "react";
import Link from "next/link";

type Props = {};

function Categories({}: Props) {
  const categories = [
    {
      id: 0,
      name: "Automotive Parts",
      document: "automotive",
    },
    {
      id: 2,
      name: "Industrial Equipment Parts",
      document: "industrials",
    },
    {
      id: 3,
      name: "Construction Equipment Parts",
      document: "constructions",
    },
    {
      id: 4,
      name: "Bicycle and Motorcycle Parts",
      document: "bicycles",
    },
  ];
  return (
    <div className="">
      {/* <div className="flex overflow-x-scroll sm:hidden w-screen">
        {categories.map((category) => (
          <Link
            key={category.document}
            href={`categories/${category.document}`}
            className="px-2 my-3 mx-2 font-semibold py-3 bg-white shadow-md cursor-pointer
          hover:bg-black hover:text-white transition duration-150"
          >
            {category.name}
          </Link>
        ))}
      </div> */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {categories.map((category) => (
          <Link
            key={category.document}
            href={`categories/${category.document}`}
            className="px-2 my-1 mx-2 font-semibold py-3 bg-white shadow-md cursor-pointer
            hover:bg-black hover:text-white transition duration-150"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
