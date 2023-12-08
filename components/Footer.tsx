import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-white border-t absolute bottom-0 w-full">
      <div className="mx-auto py-4">
        <p className="text-center text-xs text-black">
          &copy; 2023 RedMix Auto, Inc, All rights reserved
        </p>
      </div>
    </div>
  );
}
