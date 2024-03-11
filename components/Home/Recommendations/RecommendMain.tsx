"use client";
import ProductCardSkeleton from "@/components/skeletons/productCard-skeleton";
import { ArrowRight } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";
import recommended from "./recommended";
import ProductSection from "./ProductSection";

type Props = {};

const list = true;

function RecommendMain({}: Props) {
  const [recommend, setRecommmend] = useState();
  const [searchList, setSearchList] = useState<string[]>();

  useEffect(() => {
    const savedSearchList = localStorage.getItem("searchList");
    const savedSearches: string[] = savedSearchList
      ? JSON.parse(savedSearchList)
      : [];
    setSearchList(savedSearches);
    const data = async () => {
      const r = await recommended(savedSearches);
      setRecommmend(r);
    };
    data();
  }, []);

  // const recommend = await recommended(searchList);

  return (
    searchList?.length !== 0 && (
      <section className="mt-10 mx-2">
        <div className="flex items-center justify-between text-xl font-semibold">
          <div>Recommended for you</div>
          <ArrowRight className="text-gray-500" />
        </div>
        <Suspense
          fallback={
            <div className="flex">
              <ProductCardSkeleton />
            </div>
          }
        >
          <ProductSection products={recommend} />
        </Suspense>
      </section>
    )
  );
}

export default RecommendMain;
