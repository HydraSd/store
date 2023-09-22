import Price from "@/components/Price";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/shopping-cart";
import useTotal from "@/hooks/useTotal";
import { Eye, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useDebugValue, useEffect } from "react";
import CountBtn from "./CountBtn";

type Props = {
  product: any;
};

function Card({ product }: Props) {
  const value = useTotal((state:any) => state.amount)
  const total = product.price * product.quantity;
  const remove = useCart((state:any) => state.removeItem);

  const RemoveFromCart = () => {
    remove(product.id)
  }



  return (
    <center className="my-1 p-2 md:flex md:items-center md:justify-between bg-white shadow-md rounded-md">
      <div className="md:flex">
        <Image height={150} width={150} src={product.images[0]} alt="" />
        <div>{product.title}</div>
      </div>
      <div>
        <div className="flex items-center justify-between space-x-3">
          <CountBtn price={product.price} id={product.id} quantity={product.quantity} />
          <div className="space-x-2">
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
