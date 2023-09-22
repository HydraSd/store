import ProductCardSkeleton from '@/components/skeletons/productCard-skeleton'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

function MainSkeleton({}: Props) {
  return (
    <main className="my-5 mx-2 md:mx-20">
    <section className="">
        <Skeleton className='h-[500px]'/>
      {/* <MainSection
        title={product?.name}
        price={product?.price}
        images={product?.images}
        description={product?.description}
      /> */}
    </section>
    <section>
      <Skeleton className='mt-5 h-[300px]'/>
    </section>

    <section className="mt-10">
     
     <div className='flex'>
     <ProductCardSkeleton />
     <ProductCardSkeleton />
     <ProductCardSkeleton />
     </div>
    </section>
  </main>
  )
}

export default MainSkeleton