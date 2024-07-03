import type { Metadata } from "next";
import BlogCard from "@/components/Blog/Card";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "DOOL Motors blog",
  };
}

async function BlogPage() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog`, {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24 * 2,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const data = await res.json();

    // Check if data.blogs and data.blogs.data exist before accessing
    const blogs = data.blogs?.data || [];

    return (
      <main className="mt-4 mx-2">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-2">
          {blogs.map((blog:any) => (
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
  } catch (error) {
    console.error("Error fetching blog data:", error);
    // Handle error state or show an error message
    return <div>Error fetching blog data. Please try again later.</div>;
  }
}

export default BlogPage;
