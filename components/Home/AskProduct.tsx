"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CreateData from "@/app/firebase/create-data";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

type Props = {};

function AskProduct({}: Props) {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const AskForProduct = async () => {
    setLoading(true);

    if (name && email && description) {
      const data = {
        name: name,
        email: email,
        description: description,
        date: new Date().toISOString(),
      };
      await CreateData("ask-product", data);
      toast.success("Your request has been sent successfully.");
    } else {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-md p-2">
      <h2 className="text-xl font-bold">Ask Us Anything About Our Products</h2>
      <div>
        Have questions about our products? We&apos;re here to help! Fill out the form
        below to inquire about anything you&apos;d like to know. Our team is eager to
        assist you in finding the perfect solution for your needs
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 sm:space-x-2">
        <div>
          <div className="font-semibold">Enter your name</div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="name"
          />
        </div>
        <div>
          <div className="font-semibold">Enter your Email address</div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <div className="font-semibold">Describe the product you want</div>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the product you want"
        />
      </div>
      <center className="mt-3">
        <Button onClick={AskForProduct} className="w-full">
          Submit
        </Button>
      </center>
    </div>
  );
}

export default AskProduct;
