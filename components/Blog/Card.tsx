import Image from "next/image";
import Link from "next/link";

Image;

type Props = {
    title: string;
    description: string;
    img: string;
    link: string;
};

function BlogCard({title, description, img, link}: Props) {
  return (
    <div>
      <div
        className="h-[200px] lg:h-[300px] w-full relative rounded-md
            shadow-md cursor-pointer border-2
           "
      >
        <Image
          style={{ objectFit: "cover" }}
          alt="test"
          src={img}
          fill
          className="rounded-md"
        />
        <div className="absolute text-white bottom-0  z-10 px-2  w-full backdrop-filter backdrop-blur-md">
          <div className="flex space-x-2 items-center justify-between">
            <p className="text-sm font-light line-clamp-2">
              {description}
            </p>
            <Link
              href={`/blog/${link}`}
              className="my-2 py-2 px-3  bg-yellow-400 rounded-md
              font-semibold text-black cursor-pointer hover:scale-105 transition duration-100 ease-out hover:shadow-lg"
            >
              <center>Read</center>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
