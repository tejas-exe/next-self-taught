"use client";
import InputField from "@/components/InputFields";
import { isUserLoggedIn } from "@/lib/auth/clientAuth";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const router = useRouter();
  const handelChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.status == "Success") {
      router.push("/dashboard");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md space-y-6 transition-all duration-500 hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Log Into Your Account
        </h2>

        <InputField
          label={"User Name"}
          name={"userName"}
          type={"text"}
          placeholder={"Enter a unique user name"}
          onChange={handelChange}
          value={formData.userName}
        />

        <InputField
          label={"Password"}
          name={"password"}
          type={"password"}
          placeholder={"Enter your password here"}
          onChange={handelChange}
          value={formData.password}
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Log in ✨
        </button>
      </form>
    </div>
  );
};

export default Login;
