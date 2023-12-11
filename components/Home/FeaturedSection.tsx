import ProductCard from "@/components/ProductCard";
import FeaturedProducts from "@/app/firebase/featured-products";

type Props = {};

async function FeaturedSection({}: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const featuredProducts = (await FeaturedProducts()).data;
  return (
    <div>
      <div className="mt-2 flex overflow-x-auto overflow-y-hidden">
        {featuredProducts.map((product: Product) => (
          <ProductCard
          key={product.id}
            data={product}
          />
        ))}

      </div>
    </div>
  );
}

export default FeaturedSection;
