"use client"
import useCart from "@/hooks/shopping-cart";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import useTotal from "@/hooks/useTotal";
import Price from "@/components/Price";
import OrderButton from "./components/OrderButton";

type Props = {};

function CartPage({}: Props) {
  const total = useTotal((state:any) => state.amount);
  const cart = useCart((state: any) => state.items);
  const [isClient, setIsClient] = useState(false);
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  if(!isClient){
    return null
  }

  return (
    <main className="mt-5 mx-2 md:mx-20">
      <div className="md:flex md:items-center md:justify-between">

      <div className="text-2xl font-semibold">Shopping Cart</div>
      <Price style="text-lg font-medium" price={total} fianlValue={true} />
      </div>
      {cart.map((product:any) => (
        <Card key={product.id} product={product}/>
      ))}
      {cart.length > 0 && (

      <OrderButton products={cart} />
      )}
    </main>
  );
}

export default CartPage;
