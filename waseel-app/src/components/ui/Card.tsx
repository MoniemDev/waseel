"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({ children, className = "", onClick, padding = "md" }: CardProps) {
  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-[var(--surface)] rounded-2xl shadow-[var(--shadow-sm)]
        ${onClick ? "cursor-pointer active:scale-[0.99] transition-transform" : ""}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
