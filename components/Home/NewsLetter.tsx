"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import CreateData from "@/app/firebase/create-data";
import toast from "react-hot-toast";

type Props = {};

function NewsLetter({}: Props) {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submit = async () => {
    setLoading(true);
    if (emailRegex.test(email)) {
      const data = {
        email: email,
        date: new Date().toISOString(),
      };
      await CreateData("emails", data);
      toast.success("Your request has been sent successfully.");
    } else {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  return (
    <center className="bg-white px-2 py-4">
      <div className="text-xl font-bold">GET 10% DISCOUNT</div>
      <div className="font-light">
        Subscribe our newsletter and get 10% discount for your first order
      </div>
      <div className="sm:flex items-center">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <center
          onClick={submit}
          className="mt-2 sm:mt-0 font-semibold p-2 bg-yellow-400 rounded-md shadow-lg w-[100px]
        sm:ml-5 cursor-pointer hover:scale-105 transition duration-100 ease-out"
        >
          Subscribe
        </center>
      </div>
    </center>
  );
}

export default NewsLetter;
