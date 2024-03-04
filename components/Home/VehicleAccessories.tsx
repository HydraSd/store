import ProductCard from "@/components/ProductCard";
import GetByType from "@/app/firebase/getBy-part";


type Props = {};

async function VehicleAccessories({}: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const accessories = (await GetByType("Interior and Exterior Accessories", 'products')).results;
  return (
    <div>
      <div className="mt-2 flex overflow-x-auto overflow-y-hidden">
        {accessories.map((product: Product) => (
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
