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

        {/* <ProductCard
          title="Rover 75 car key"
          description="BEST KEY 2 Buttons Remote Car Key Shell for MG BMW Mini Cooper R53 R50 S for Land Rover 75 Z3 Z4 X3 X5 e46 e39 e36 e34 Blank Key"
          img="https://ae01.alicdn.com/kf/S4f0d1e60741d4ea4b473dadf2d6945b7D/BEST-KEY-2-Buttons-Remote-Car-Key-Shell-for-MG-BMW-Mini-Cooper-R53-R50-S.jpg_220x220.jpg_.webp
          "
          price="Rs.420.00"
        />
        <ProductCard
          title="Engine"
          description="This a test description,To test about the description"
          img="https://th.bing.com/th/id/OIP.SDqJJ3Vlot0yGKMT2P6TdAHaFj?pid=ImgDet&rs=1"
          price="Rs.0.00"
        />
        <ProductCard
          title="Rover 75 car key"
          description="BEST KEY 2 Buttons Remote Car Key Shell for MG BMW Mini Cooper R53 R50 S for Land Rover 75 Z3 Z4 X3 X5 e46 e39 e36 e34 Blank Key"
          img="https://ae01.alicdn.com/kf/S4f0d1e60741d4ea4b473dadf2d6945b7D/BEST-KEY-2-Buttons-Remote-Car-Key-Shell-for-MG-BMW-Mini-Cooper-R53-R50-S.jpg_220x220.jpg_.webp
          "
          price="Rs.420.00"
        />
        <ProductCard
          title="Engine"
          description="This a test description,To test about the description"
          img="https://th.bing.com/th/id/OIP.SDqJJ3Vlot0yGKMT2P6TdAHaFj?pid=ImgDet&rs=1"
          price="Rs.0.00"
        />

        <ProductCard
          title="Rover 75 car key"
          description="BEST KEY 2 Buttons Remote Car Key Shell for MG BMW Mini Cooper R53 R50 S for Land Rover 75 Z3 Z4 X3 X5 e46 e39 e36 e34 Blank Key"
          img="https://ae01.alicdn.com/kf/S4f0d1e60741d4ea4b473dadf2d6945b7D/BEST-KEY-2-Buttons-Remote-Car-Key-Shell-for-MG-BMW-Mini-Cooper-R53-R50-S.jpg_220x220.jpg_.webp
          "
          price="Rs.420.00"
        />
            <ProductCard
          title="Engine"
          description="This a test description,To test about the description"
          img="https://th.bing.com/th/id/OIP.SDqJJ3Vlot0yGKMT2P6TdAHaFj?pid=ImgDet&rs=1"
          price="Rs.0.00"
        />

        <ProductCard
          title="Rover 75 car key"
          description="BEST KEY 2 Buttons Remote Car Key Shell for MG BMW Mini Cooper R53 R50 S for Land Rover 75 Z3 Z4 X3 X5 e46 e39 e36 e34 Blank Key"
          img="https://ae01.alicdn.com/kf/S4f0d1e60741d4ea4b473dadf2d6945b7D/BEST-KEY-2-Buttons-Remote-Car-Key-Shell-for-MG-BMW-Mini-Cooper-R53-R50-S.jpg_220x220.jpg_.webp
          "
          price="Rs.420.00"
        /> */}
      </div>
    </div>
  );
}

export default FeaturedSection;
