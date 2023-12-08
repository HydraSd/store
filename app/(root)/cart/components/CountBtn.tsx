import React, { useState } from "react";
import Price from "@/components/Price";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/shopping-cart";

type Props = {
  id: string;
  quantity: number;
  price: number;
};

function CountBtn({ id, quantity, price }: Props) {
  const [value, setValue] = useState(quantity);
  const update = useCart((state) => state.updateQuantity);


  const Add = () => {
    const newValue = value + 1;
    setValue(newValue);
    update(id, newValue); // Update the quantity with the new value
  };

  const Minus = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      update(id, newValue); // Update the quantity with the new value
    }
  };

  const total = price * value;

  return (
    <div>
      <Price style="font-medium" price={total} fianlValue={true} />
      <div className="flex items-center">
        <Button variant="secondary" onClick={Add}>
          +1
        </Button>

        <div className="mx-2 font-semibold">{value}</div>

        <Button variant="secondary" onClick={Minus}>
          -1
        </Button>
      </div>
    </div>
  );
}

export default CountBtn;
