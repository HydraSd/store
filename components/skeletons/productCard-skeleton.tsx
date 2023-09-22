import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

type Props = {}

function ProductCardSkeleton({}: Props) {
  return (
    <div className="my-2 mx-1 h-[250px] w-[200px] rounded-lg shadow-md flex flex-col">
      
    <Skeleton
      className="h-[150px]  w-full object-cover rounded-t-lg"
    />
    <div className="mt-2 px-2 flex-1">
      <Skeleton className="truncate text-lg font-semibold" />
      <Skeleton className="truncate h-[2.5em] text-sm text-gray-600" />
      
     
    </div>
    <Skeleton className="flex justify-end px-2 pb-2" />
  </div>

  )
}

export default ProductCardSkeleton