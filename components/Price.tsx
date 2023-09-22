"use client"
import useCount from '@/hooks/item-count';
import React from 'react'

type Props = {
    price: number;
    style?: string;
    fianlValue: boolean;
}

function Price({ price, style, fianlValue }: Props) {
    const count = useCount((state: any) => state.amount);
    const value = price! * count
  return (
    <div className={style}>
            {fianlValue? price.toLocaleString("en-US", {
              style: "currency",
              currency: "LKR", // Change the currency code as needed
            }) : value?.toLocaleString("en-US", {
              style: "currency",
              currency: "LKR", // Change the currency code as needed
            })}
          </div>
  )
}

export default Price