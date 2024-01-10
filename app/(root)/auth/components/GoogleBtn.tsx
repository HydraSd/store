"use client";
import React from "react";
import { auth } from "@/app/firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";


type Props = {};

function GoogleBtn({}: Props) {
  // @ts-ignore
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter()
  const loging = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    if(result) {
      router.push('/')
    }
  };
  return (
    <div
      onClick={loging}
      className="p-2 border flex items-center text-lg font-medium shadow-md cursor-pointer"
    >
      <Image width={40} height={30} alt="google_btn" src="/logo/google.png" />

      <div className="ml-10">Loging with Google</div>
    </div>
  );
}

export default GoogleBtn;
