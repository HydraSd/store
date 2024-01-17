'use client';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";


type Props = {}

Autoplay.globalOptions = { delay: 8000 };


const images = [
  '/banner/banner1.png',
  'https://th.bing.com/th/id/R.e8d6e37567379bf097e5803ef8ca6c7b?rik=9IQANZ1n6%2flsYQ&pid=ImgRaw&r=0&sres=1&sresct=1',
  'https://image.freepik.com/free-vector/banner-car-repair-service-spare-parts-online-store-banner_81522-3012.jpg',
  'https://th.bing.com/th/id/R.e9733e152750955022a43a4aadfdc108?rik=iEvQcGdAUy1tGA&pid=ImgRaw&r=0',
  
]

function CarouselBanner({}: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <div className="overflow-hidden cursor-pointer" ref={emblaRef}>
      <div className="flex">
        {images.map((img) => (
          <div className="flex-[0_0_100%]  h-[300px] md:h-[500px] w-screen min-w-0 relative" key={img}>
            <Image
              key={img}
              src={img}
              alt={img}
              fill
              // width={1920}
              // height={1080}
            />
            {/* <div
              className="hidden md:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20
            h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent
            to-transparent p-10 space-y-5 text-white"
            >
              <h2 className="text-5xl font-bold z-50">test</h2>
              <p className="max-w-xl line-clamp-3">description</p>
            </div> */}
          </div>
        ))}
      </div>
      {/* <div
        className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300
dark:to-[#1A1C29]"
      /> */}
    </div>
  )
}

export default CarouselBanner