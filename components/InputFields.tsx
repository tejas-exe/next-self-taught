"use client";
import React, { useState, useEffect } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  onChange,
  value,
  name,
}) => {
  const [iptType, setIptType] = useState("password");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // ensures hydration safety
  }, []);

  const isPassword = type === "password";
  const inputType = label.toLowerCase() === "password" ? iptType : type;

  return (
    <div className="input-field space-y-1 relative">
      <label className="block text-sm font-semibold text-black">{label}</label>
      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 pr-16"
      />

      {isPassword && hydrated && (
        <button
          className="absolute right-4 top-9 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
          type="button"
          onClick={() =>
            setIptType((prev) => (prev === "text" ? "password" : "text"))
          }
        >
          Show
        </button>
      )}
    </div>
  );
};

export default InputField;
