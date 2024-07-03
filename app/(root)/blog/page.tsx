import type { Metadata } from "next";
import BlogCard from "@/components/Blog/Card";

export async function generateMetadata(
): Promise<Metadata> {
  return {
    title: "DOOL Motors blog",
  }
}

async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog`, 
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24 * 2
      }
    }
  )
  const data = await res.json()
  const blogs = data.blogs.data
  return (
    <main className="mt-4 mx-2">
      <h1 className="text-4xl font-bold">Blog</h1>
      {/* <ClientComponent /> */}
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
