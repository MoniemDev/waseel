"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            className={`
              w-full h-12 px-4 ${icon ? "pr-12" : ""} 
              bg-[var(--surface)] border border-[var(--border)] 
              rounded-xl text-[var(--text-primary)]
              placeholder:text-[var(--text-tertiary)]
              focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20
              transition-all
              ${error ? "border-[var(--danger)]" : ""}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-[var(--danger)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
