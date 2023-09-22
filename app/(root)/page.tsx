import FeaturedSection from "@/components/Home/FeaturedSection";
import MainSection from "@/components/Home/MainSection";
import ProductCardSkeleton from "@/components/skeletons/productCard-skeleton";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <div className="relative h-[300px] md:h-[500px] w-screen">
          <Image fill src={"/banner1.jpg"} alt="" />
        </div>
        <center className="mt-5">
        <div className="text-sm">Welcome to RedMix, your one-stop destination for high-quality vehicle spare parts in Sri Lanka. Whether you&apos;re a car enthusiast, a professional mechanic, or a vehicle owner in need of replacement parts, we&apos;ve got you covered. Browse through our extensive catalog of genuine and affordable spare parts for all major makes and models. With a commitment to excellence, we offer a seamless online shopping experience, speedy delivery, and exceptional customer service. Trust us to keep your vehicles running smoothly. Start exploring our wide range of automotive solutions today!</div>

        </center>
   
      </div>
      <section className="mt-5 mx-2">
        <MainSection />
      </section>
      <section className="mt-2 mx-2">
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
        <div>{}</div>
      </section>
    </main>
  );
}
