import ProductCard from "@/components/ProductCard";
import FeaturedProducts from "@/app/firebase/featured-products";

type Props = {
    products?: Product[]
};

async function ProductSection({products}: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <div>
  
        {products ? 
      <div className="mt-2 flex overflow-x-auto overflow-y-hidden">
        {products.map((product: Product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div> : <div></div> 
      }
        
      
    </div>
  );
}

export default ProductSection;
