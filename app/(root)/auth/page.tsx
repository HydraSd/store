"use client";
import React, { useEffect } from "react";
import GoogleBtn from "./components/GoogleBtn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/firebase";

type Props = {};

function AuthPage({}: Props) {
  const [user, setUser] = useAuthState(auth);

  return (
    <center className="mx-2 md:mx-20 mt-10">
     
      <center className="flex justify-around">
        <GoogleBtn />
      </center>
    </center>
  );
}

export default AuthPage;
