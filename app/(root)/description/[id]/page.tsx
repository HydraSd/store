import GetDocument from "@/app/firebase/get-document";
import React from "react";
import MainSection from "./components/MainSection";
import SummaryTable from "./components/SummaryTable";
import RelatedProducts from "./components/RelatedProducts";

type Props = {
  params: {
    id: string;
  };
};

async function DescriptionPage({ params }: Props) {
//  await new Promise((resolve) => setTimeout(resolve, 10000));
  const product = await GetDocument("products", decodeURI(params.id));

  return (
    <main className="my-5 mx-2 md:mx-20">
      <section className="">
        <MainSection
          id = {product?.id}
          title={product?.name}
          price={product?.price}
          images={product?.images}
          description={product?.description}
        />
      </section>
      <section>
        <SummaryTable 
         title={product?.name}
         category={product?.category}
         type={product?.type}
         price={product?.price}
         diliveryFee={product?.diliveryPrice}
         diliveryPeriod={product?.diliveryTime}
        />
      </section>

      <section className="mt-10">
        <div className="text-2xl font-semibold">Related Products</div>
        <RelatedProducts vehcile={product?.vehicle} />
      </section>
    </main>
  );
}

export default DescriptionPage;
