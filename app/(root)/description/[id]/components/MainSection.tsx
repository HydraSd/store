import React from "react";
import ImageComponent from "./ImageComponent";
import { CheckCircle } from "lucide-react";
import CountButton from "./CountButton";
import { Separator } from "@/components/ui/separator";
import Price from "../../../../../components/Price";
import AddCartBtn from "./button/AddCartBtn";

type Props = {
  id?: string;
  title?: string;
  price?: number;
  diliveryFee?: number;
  diliveryPeriod?: string;
  images?: string[];
  imageLinks?: string;
  img: boolean
  description?: string;
};

function MainSection({
  id,
  title,
  price,
  diliveryFee,
  diliveryPeriod,
  images,
  imageLinks,
  img,
  description,
}: Props) {
  return (
    <div className="bg-white lg:flex p-2">
      <div className="lg:w-[40%]">
        <ImageComponent images={images} imageLinks={imageLinks} img={img}/>
      </div>
      <div className="lg:w-[60%]">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-600 font-light">{description}</p>
        <div className="flex items-center mt-5 space-x-10">
          {
 // @ts-ignore
          <Price price={price} style="text-lg font-semibold" fianlValue={false}/>
          }
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <div>In Stock</div>
          </div>
        </div>
        <div className="mt-5 flex items-center space-x-3">
          <CountButton />
          <AddCartBtn
            data={{
              id: id!,
              title: title!,
              price: price!,
              description: description!,
              diliveryFee: diliveryFee!,
              diliveryPeriod: diliveryPeriod!,
              images: images!,
              img: img!,
              imagesLink: imageLinks!
            }}
          />
        </div>

        <Separator className="mt-5" />
      </div>
    </div>
  );
}

export default MainSection;
