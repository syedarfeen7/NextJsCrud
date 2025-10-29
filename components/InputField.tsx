"use client";

import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export default function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  className,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={name}
          className={`text-sm font-semibold text-gray-700 tracking-wide ${className}`}
        >
          {label}
        </label>
      )}

      {type === "file" ? (
        <div>
          <input
            id={name}
            name={name}
            type="file"
            accept="image/*"
            onChange={onChange}
            className={`block w-full text-sm text-gray-700 border border-gray-300 p-2 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      ) : (
        <div>
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`p-2.5 border rounded-lg w-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      )}
    </div>
  );
}
