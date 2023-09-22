"use client"
import { Button } from "@/components/ui/button";
import useCount from "@/hooks/item-count";
import useCart from "@/hooks/shopping-cart";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


type Props = {
  data: CartProduct;
};

function AddCartBtn({ data }: Props) {
  const router = useRouter();
  const Add = useCart((state:any) => state.addItem)
  const [loading, setLoading] = useState(false)


  const quantity = useCount((state: any) => state.amount);

  const AddToCart = () => {
    setLoading(true)
    Add(data, quantity)
    setLoading(false)
  }



  return (
    <Button 
    disabled={loading}
    onClick={AddToCart}
    className="w-full">
      <ShoppingCart className="mr-4 h-5 w-5" />
      <div>Add to cart</div>
    </Button>
  );
}

export default AddCartBtn;
