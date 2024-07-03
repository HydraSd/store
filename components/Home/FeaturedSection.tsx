import ProductCard from "@/components/ProductCard";
import next from "next";
// import FeaturedProducts from "@/app/firebase/featured-products";

type Props = {};


async function FeaturedSection({}: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  // const featuredProducts = (await FeaturedProducts()).data;
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/featured`, 
      {
        method: "GET",
        next: {
          revalidate: 60 * 60 * 24 * 2
        }
      }
    )
    const data = await res.json()
    // console.log(data.featuredProducts)
    const featuredProducts = data.featuredProducts
    return (
      <div>
        
        <div className="mt-2 flex overflow-x-auto overflow-y-hidden">
          {featuredProducts.map((product: Product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
  } catch(e) {
    console.error("Error fetching blog data:", e);
    return (
     <div>Error fetching blog data. Please try again later.</div>
    )
  }
}

export default FeaturedSection;
