"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { json } from "stream/consumers";

const AddQuotes = () => {
  const router = useRouter();
  const [quote, setQuote] = useState("");


  const handleClose = () => {
    setQuote("");
    router.push("/dashboard");
  };

  const handleSave = async () => {
    await fetch("/api/quotes/quotesOpp", {
      method: "POST",
      body: JSON.stringify({ description: quote }),
    });
    handleClose();
    router.push("/dashboard");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-orange-400 via-sky-900 to-blue-400 backdrop-blur-sm">
      <div className="bg-white/90 border border-white/40 rounded-2xl shadow-2xl w-full max-w-md p-6 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Add a New Quote
        </h2>

        <textarea
          className="text-black w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Type your quote here..."
          autoFocus
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuotes;
