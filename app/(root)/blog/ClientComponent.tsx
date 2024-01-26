"use client";
import GetData from "@/app/firebase/get-data";
import BlogCard from "@/components/Blog/Card";
import { useState, useEffect } from "react";
import type { Metadata } from "next";

type Props = {};

function ClientComponent({}: Props) {
  const [data, setData] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogs = await GetData("blogs");
        return blogs.data; // Return the data inside the promise
      } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return empty array in case of error
      }
    };
    fetchData().then((result) => setData(result));
  }, []);
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-2">
      {data.map((blog: Blogs) => (
        <div key={blog.id}>
          <BlogCard
            title={blog.name}
            description={blog.name}
            img={blog.imagesLink}
            link={blog.id}
          />
        </div>
      ))}
    </div>
  );
}

export default ClientComponent;
