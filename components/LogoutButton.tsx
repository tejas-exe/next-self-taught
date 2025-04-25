"use client";

import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/users/logout");
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white font-medium rounded-full shadow-md hover:bg-red-600 transition duration-200"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 002 2h3a2 2 0 002-2V7a2 2 0 00-2-2h-3a2 2 0 00-2 2v1"
        />
      </svg>
      Log Out
    </button>
  );
};

export default LogoutButton;
