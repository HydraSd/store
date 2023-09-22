import FeaturedSection from "@/components/Home/FeaturedSection";
import MainSection from "@/components/Home/MainSection";
import ProductCardSkeleton from "@/components/skeletons/productCard-skeleton";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";

export default function Home() {

 
  return (
    <main className="mx-2 md:mx-20">
      <section className="mt-5">
        <MainSection />
      </section>
      <section className="mt-2">
        <div className="flex items-center justify-between text-xl font-semibold">
          <div>Featured Products</div>
          <ArrowRight className="text-gray-500" />
        </div>
        <Suspense
          fallback={
            <div className="flex">
              <ProductCardSkeleton />
            </div>
          }
        >
          <FeaturedSection />
        </Suspense>
        <div>
          {
            
          }
        </div>
      </section>
    </main>
  );
}
