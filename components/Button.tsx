"use client";
import React from "react";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  label,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
  className,
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold transition-colors duration-200";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {label}
    </button>
  );
}
