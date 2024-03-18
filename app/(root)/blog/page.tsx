// 'use client';
// import GetData from "@/app/firebase/get-data";
// import BlogCard from "@/components/Blog/Card";
// import {useState, useEffect} from "react";
import type { Metadata } from "next";
import ClientComponent from "./ClientComponent";


export async function generateMetadata(
): Promise<Metadata> {
  return {
    title: "DOOL Motors blog",
  }
}

async function BlogPage() {
  // const [data, setData] = useState<Blogs[]>([])

  // useEffect(()  => {
  //   const fetchData = async () => {
  //     try {
  //       const blogs = await GetData("blogs");
  //       return blogs.data; // Return the data inside the promise
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       return []; // Return empty array in case of error
  //     }
  //   };
  //   fetchData().then((result) => setData(result));
  // },[])
  return (
    <main className="mt-4 mx-2">
      <h1 className="text-4xl font-bold">Blog</h1>
      <ClientComponent />
    </main>
  );
}

export default BlogPage;
