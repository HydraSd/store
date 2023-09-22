"use client"
import useCount from '@/hooks/item-count';
import React from 'react'

type Props = {
    price?: number;
    diliveryFee?: number;
}

function Total({price, diliveryFee}: Props) {
    
    const count = useCount((state: any) => state.amount);
    const value = price! * count
    const total = value! + diliveryFee!
  return (
    <div>
        {total?.toLocaleString("en-US", {
                style: "currency",
                currency: "LKR", // Change the currency code as needed
              })}
    </div>
  )
}

export default Total