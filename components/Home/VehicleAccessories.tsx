import ProductCard from "@/components/ProductCard";

type Props = {};

async function VehicleAccessories({}: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const response = await fetch(`${baseUrl}/api/accessories`, {
        next: {
            revalidate: 60 * 60 * 24 // 24 hours
        }
  })
  const  data = await response.json()
  
  return (
    <div>
      <div className="mt-2 flex overflow-x-auto overflow-y-hidden">
        {data.map((product: Product) => (
          <ProductCard
          key={product.id}
            data={product}
          />
        ))}

      </div>
    </div>
  );
}

export default VehicleAccessories;