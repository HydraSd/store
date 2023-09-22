import React from "react";
import User from "./User";

type Props = {};

function HeaderTop({}: Props) {
  return (
    <div className="items-center px-2 justify-between bg-[#212121] py-2 sm:flex">
      <div className="flex justify-around sm:ml-10 space-x-4 text-white">
        {/* <div className="text-sm cursor-pointer">My Account</div>
        <div className="text-sm cursor-pointer">Wishlist</div>
        <div className="text-sm cursor-pointer">Compare List</div> */}
        <div className="text-sm cursor-pointer">Blog</div>
      </div>
      <User />
    </div>
  );
}

export default HeaderTop;
