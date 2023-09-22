"use client";
import useCount from '@/hooks/item-count';
import React from 'react'

type Props = {}

function Quantity({}: Props) {
    const count = useCount((state: any) => state.amount);
  return (
    <div>{count}</div>
  )
}

export default Quantity