"use client";
import GetUser from "@/app/firebase/get-user";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useTotal from "@/hooks/useTotal";
import Price from "@/components/Price";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import CreateData from "@/app/firebase/create-data";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
  products: any;
};

function OrderButton({ products }: Props) {
  const total = useTotal((state: any) => state.amount);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const user = GetUser();

 
  const PlaceOrder = async () => {
    setLoading(true)
    const productIds: string[] = []
   
    if (user) {
        if(address){
            products.map((product:any) => {
                productIds.push(product.id)
            })

            const data = {
                user: user.email,
                name: user.displayName,
                products: productIds,
                address:address,
                status: "pending",
                date: new Date().toISOString(),
            }
            //@ts-ignore
            await CreateData("orders", data)
            toast.success("Order placed")
            setAddress("");
        } else {
            toast.error("Please enter your address")
        }
    } else {
      router.push("/auth");
    }
    setLoading(false)
  };

  return (
    <div className="mt-5">
      <Dialog>
        <DialogTrigger>
          <Button className="w-full">Place an Order</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order confirmation</DialogTitle>
            <DialogDescription>
              <div>
                {products.map((product: any) => (
                  <div key={product.id}>
                    <div>
                      {product.title} = {product.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="text-lg font-semibold flex justify-around">
            <div className="flex">
              <div>Total =</div>
              <Price style="ml-1" price={total} fianlValue={true} />
            </div>
          </div>
          <div>
            The final price, including delivery fees, will be confirmed via
            email within 48 hours. For any immediate inquiries, please contact
            us at redmixssd@gmail.com. Thank you for choosing us.
          </div>

          <Input 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Your address" />
          <DialogFooter>
    

            <div className="flex justify-around">
              <Button disabled={loading}  onClick={PlaceOrder}>Confirm</Button>
            </div>

          </DialogFooter>
        </DialogContent>
      </Dialog>
    
    </div>
  );
}

export default OrderButton;
