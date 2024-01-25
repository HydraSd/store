import GetData from "@/app/firebase/get-data";
import BlogCard from "@/components/Blog/Card";
import React from "react";

async function BlogPage() {
  const blogs = (await GetData("blogs")).data
  return (
    <main className="mt-4 mx-2">
      <h1 className="text-4xl font-bold">Blogs</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-2">
       {blogs.map((blog: Blogs) => (
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
    </main>
  );
}

export default BlogPage;
