import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "ENGINE OIL",
    description: "SALE UP TO 25% OFF",
    img: "https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2022/09/banner-12.jpg",
  },
  {
    id: 2,
    title: "BREAK PADS",
    description: "Sales up to 25% off",
    img: "https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2023/03/ban-4.jpg",
  },
  {
    id: 3,
    title: "TURBOR CHARGER",
    description: "Top quality low price",
    img: "https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2022/09/banner-14.jpg",
  },
];

function EngineOilSection() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-2">
        {data.map((card) => (
          <div
            key={card.id}
            className="h-[200px] lg:h-[300px] w-full relative rounded-md
            shadow-md cursor-pointer border-2
           "
          >
            <Image
              style={{ objectFit: "cover" }}
              alt={card.title}
              src={card.img}
              fill
              className="rounded-md"
            />
            <div className="absolute  z-10 px-2 h-full w-full  flex flex-col justify-center ">
              <h2 className="text-4xl font-bold z-10">{card.title}</h2>
              <p className="text-sm font-light">{card.description}</p>
              <div
                className="my-2 py-1 px-2 w-[100px] bg-yellow-400 rounded-xl
              font-semibold text-black cursor-pointer hover:scale-105 transition duration-100 ease-out hover:shadow-lg"
              >
                Shop Now
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EngineOilSection;
