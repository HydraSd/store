import Image from "next/image";
import Link from "next/link";


const data = [
  {
    id: 1,
    name: "BODY PARTS",
    img: "/icons/exterior.png",
    path: "Interior and Exterior Accessories"
  },
  {
    id: 2,
    name: "ENGINE PARTS",
    img: "/icons/engine.png",
    path: "Engine Components"
  },
  {
    id: 3,
    name: "FURNITURE PARTS",
    img: "/icons/seat.png",
    path: "Interior and Exterior Accessories"

  },
  {
    id: 4,
    name: "LIGHTING PARTS",
    img: "/icons/beam.png",
    path: "Electrical components"
  },
  {
    id: 5,
    name: "OIL & LUBRICANTS",
    img: "/icons/engine-oil.png",
  },
];

function Categories() {

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex py-1 gap-2">
        {data.map((category) => (
          <Link
          href={`/type/${category.path}`}
            key={category.id}
            className="flex-none bg-white py-5 px-4 shadow-lg rounded-md w-full sm:w-1/2 md:w-1/3 lg:w-1/5
             cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="text-md font-bold">{category.name}</div>
              <Image
                key={category.id}
                src={category.img}
                alt={category.name}
                height={50}
                width={50}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
