import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-white border-t w-full">
      <div className="mx-auto py-4">
        <p className="text-center text-xs text-black">
          &copy; 2024 DOOL Motors, Inc, All rights reserved
        </p>
      </div>
    </div>
  );
}
