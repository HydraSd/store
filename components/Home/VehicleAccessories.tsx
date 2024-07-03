import ProductCard from "@/components/ProductCard";
// import GetByType from "@/app/firebase/getBy-part";

type Props = {};

async function VehicleAccessories({}: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  // const accessories = (
  //   await GetByType("Interior and Exterior Accessories", "products")
  // ).results;
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accessories`, 
      {
        method: "GET",
        next: {
          revalidate: 60 * 60 * 24 * 2
        }
      }
    )
    const data = await res.json()
    const accessories = data.accessories
    return (
      <div>
        <div className="mt-2 flex overflow-x-auto overflow-y-hidden">
          {accessories.map((product: Product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
  } catch(e){ 
    console.error("Error fetching blog data:", e);
    // Handle error state or show an error message
    return <div>Error fetching blog data. Please try again later.</div>;
  }
}

export default VehicleAccessories;
