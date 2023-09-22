"use client"
import Price from "@/components/Price";
import useCart from "@/hooks/shopping-cart";
import useTotal from "@/hooks/useTotal";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


type Props = {};

function CartComponent({}: Props) {
  const cart = useCart((state:any) => state.items)
  const productTotal = useTotal((state:any) => state.amount)
  const [values, setValues] = useState<number[]>([])
  const [total, setTotal] = useState(0)




  const calculateProductSum = () => {
    // Calculate the product sum directly
    const productSum = cart.reduce(
      (accumulator:number, product:any) => accumulator + product.price * product.quantity,
      0
    );
    setTotal(productSum);
  };


  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
    
    calculateProductSum()
    useTotal.setState({ amount: total })
    console.log(productTotal)
  }, [cart, total])

  if(!isClient){
    return null
  }



  return (
    <Link
      href="/cart"
      className="flex items-center cursor-pointer mx-3 relative"
    >
      <div className="mx-1 flex items-center bg-[#FBB71E] px-2 rounded-full absolute -top-1 left-3">
      {cart.length}
      </div>
      <ShoppingCart size={25} />
      <div className="ml-6">
        <div className="text-sm text-gray-600">Shopping cart</div>
        
    <Price price={productTotal} fianlValue={true}/>
      </div>
    </Link>
  );
}

export default CartComponent;
