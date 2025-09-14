import React from "react";
import SearchBar from "./SearchBar";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CartComponent from "./CartComponent";

type Props = {};

function Header({}: Props) {
  return (
    <div
      className="sticky top-0 z-20 flex flex-col border bg-white space-y-3 items-center justify-center 
     md:flex-row md:justify-around md:space-y-0"
    >
      <Link href="/" className="py-2 flex items-center text-3xl font-bold">
        <h2 className="text-red-600">DOOL</h2>
        <h2>Motors</h2>
      </Link>
      <div className="hidden md:inline-block">
        <SearchBar />
      </div>

      <CartComponent />

      <div className="md:hidden">
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
