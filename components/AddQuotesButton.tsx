"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AddQuotesButton = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-8 right-8">
      <button
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full shadow-xl hover:scale-105 transform transition duration-200"
        onClick={() => {
          router.push("/addQuotes");
        }}
      >
        <span className="text-2xl font-bold">+</span>
      </button>
    </div>
  );
};

export default AddQuotesButton;
