import FeaturedSection from "@/components/Home/FeaturedSection";
import ProductCardSkeleton from "@/components/skeletons/productCard-skeleton";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";
import AutomotiveTypes from "@/components/Home/AutomotiveTypes";
import AskProduct from "@/components/Home/AskProduct";
import Footer from "@/components/Footer";
import CaurouselBanner from "@/components/Home/CarouselBanner";
import Categories from "@/components/Home/Categories";
import EngineOilSection from "@/components/Home/EngineOilSection";

export default function Home() {
  return (
    <main className="">
      <div>
        {/* <CarouselBanner /> */}
        {/* <div className="relative h-[300px] md:h-[500px] w-screen">
          <Image
            style={{
              objectFit: "cover",
            }}
            fill
            src="https://th.bing.com/th/id/R.e8d6e37567379bf097e5803ef8ca6c7b?rik=9IQANZ1n6%2flsYQ&pid=ImgRaw&r=0&sres=1&sresct=1"
            alt="banner"
          />
        </div> */}
        <section className="py-5 px-2">
          <center className="bg-yellow-400 py-5 px-2 rounded-md shadow-lg">
          <h2 className="text-xl font-bold">
            Revitalize Your Ride with DOOL Motors: Your Premier Destination for
            Genuine, Affordable Vehicle Spare Parts in Sri Lanka!
          </h2>
    
          <h3 className="text-sm font-light">
            Welcome to DOOL Motors, Sri Lanka&apos;s one-stop shop for high-quality
            vehicle spare parts. We can help you whether you&apos;re a skilled
            technician, an enthusiast about cars, or the owner of a vehicle that
            needs new components. Browse our huge inventory of genuine and
            reasonably priced spare parts for all major makes and models. We
            provide a seamless online shopping experience, quick delivery, and
            great customer service as part of our dedication to excellence. You
            can rely on us to maintain your cars operating properly. Explore our
            extensive selection of automotive solutions now!
          </h3>

          
          </center>
        
        </section>
      </div>
      <section className="mt-10 mx-2">
        <Categories />
      </section>
      <section className="mt-10 mx-2">
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
      </section>
      <section className="mt-5 mx-2 mb-10">
        <div className="flex items-center justify-between text-xl font-semibold">
          <h1>Automotive Parts</h1>
        </div>

        <AutomotiveTypes />
      </section>
      <section className="mt-10 mx-2">
        <EngineOilSection />
      </section>

      <section className="mt-10 mx-2">
        <AskProduct />
      </section>

      <section className="mt-10">
        <Footer />
      </section>
    </main>
  );
}
