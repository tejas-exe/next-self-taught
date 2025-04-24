"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const redirect = useRouter();
  return (
    <button
      onClick={async () => {
        await fetch("/api/users/logout");
        await redirect.push("/login");
      }}
      className="mt-6 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-200"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
