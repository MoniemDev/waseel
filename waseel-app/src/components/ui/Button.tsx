"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  icon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-light)]",
    secondary: "bg-[var(--secondary)] text-white hover:opacity-90",
    outline: "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
    ghost: "text-[var(--primary)] hover:bg-[var(--primary)]/10",
    danger: "bg-[var(--danger)] text-white hover:opacity-90",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        <span className="text-xl">{icon}</span>
      ) : null}
      {children}
    </button>
  );
}
