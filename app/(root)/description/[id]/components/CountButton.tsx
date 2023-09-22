"use client";
import { Button } from "@/components/ui/button";
import useCount from "@/hooks/item-count";
import { useState, useEffect } from "react";

type Props = {

};

function CountButton({}: Props) {
  const count = useCount((state: any) => state.amount);
  const Add = useCount((state: any) => state.increase);
  const Minus = useCount((state: any) => state.decrease);


  useEffect(() => {
    useCount.setState({ amount: 1 });
  }, []);


  return (
    <div className="flex items-center">
      <Button variant="secondary" onClick={Add}>
        +1
      </Button>

      <div className="mx-2 font-semibold">{count}</div>

      <Button variant="secondary" onClick={Minus}>
        -1
      </Button>
    </div>
  );
}

export default CountButton;
