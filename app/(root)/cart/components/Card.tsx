import Price from "@/components/Price";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/shopping-cart";
import useTotal from "@/hooks/useTotal";
import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import CountBtn from "./CountBtn";

type Props = {
  product: any;
};

function Card({ product }: Props) {
  const remove = useCart((state:any) => state.removeItem);

  const RemoveFromCart = () => {
    remove(product.id)
  }

  const imagesLinkList = product.imagesLink?.split("||");
  return (
    <center className="my-1 p-2 lg:flex lg:items-center lg:justify-between bg-white shadow-md rounded-md">
      <div className="lg:flex">
        <img height={150} width={150} 
             src={product.img ? product.images[0] : imagesLinkList[0]}
             alt="" />
        <div>{product.title}</div>
      </div>
      <div>
        <div className="flex items-center justify-between space-x-2">
          <CountBtn price={product.price} id={product.id} quantity={product.quantity} />
          <div className="flex space-x-1">
            <Link href={`/description/${product.id}`}>
              <Button>
                <Eye size={20} />
              </Button>
            </Link>
            <Button 
            onClick={RemoveFromCart}
            variant="destructive">
              <Trash2 size={20} />
            </Button>
          </div>
        </div>
        
      </div>
    </center>
  );
}

export default Card;
