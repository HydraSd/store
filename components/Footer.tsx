import GetData from "@/app/firebase/get-data";
import Link from "next/link";
import React from "react";

type Props = {};

export default async function Footer({}: Props) {
  const automotiveType = (await GetData("automotive-type")).data;
  return (
    <div className="bg-white border-t w-full">
      <div className="mx-auto py-4">
        <div className="mx-5 my-5 grid grid-cols-1 sm:grid-col-2 md:grid-cols-3  sm:space-y-0">
          <center>
            <h2 className="text-lg font-bold">About Dool Motors</h2>
            <p className="font-light">
              Welcome to DOOL Motors, your one-stop destination for all your
              automotive spare part needs! With a commitment to excellence and a
              passion for serving our customers, we offer a comprehensive range
              of high-quality spare parts for various automotive types. From
              engine components to electrical parts, suspension systems to
              braking solutions, we&apos;ve got you covered. Located in the
              heart of Sri Lanka, our shop stands as a beacon of reliability and
              trustworthiness in the automotive spare parts industry. Whether
              you&apos;re a professional mechanic or a car enthusiast, we cater
              to all your requirements with an extensive inventory and
              competitive prices. At DOOL Motors, we believe in delivering not
              just spare parts but also unparalleled customer satisfaction.
              Experience the difference with us today!
            </p>
          </center>
          <center className="pt-5 md:pt-0">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <div className="text-sm font-semibold cursor-pointer hover:underline">
              <Link href="/">Home</Link>
            </div>
            <div className="text-sm font-semibold cursor-pointer hover:underline">
              <Link href="/blog">Blog</Link>
            </div>
            {automotiveType.map((automotive: any) => (
              <div key={automotive.id}>
                <Link href={`/type/${automotive.name}`}>
                  <div className="text-sm font-semibold cursor-pointer hover:underline">
                    {automotive.name}
                  </div>
                </Link>
              </div>
            ))}
          </center>
          <center className="pt-5 md:pt-0">
            <h2 className="text-lg font-bold">Other Links</h2>
            <div className="text-sm font-semibold cursor-pointer hover:underline">
              <Link href="https://www.facebook.com/profile.php?id=61555638695194" target="_blank">
                Facebook
              </Link>
            </div>
          </center>
        </div>
        <p className="text-center text-xs text-black">
          &copy; 2024 DOOL Motors, Inc, All rights reserved
        </p>
      </div>
    </div>
  );
}
