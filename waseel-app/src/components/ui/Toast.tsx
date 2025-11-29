"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, type = "info", duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  };

  const colors = {
    success: "bg-[var(--success)]",
    error: "bg-[var(--danger)]",
    info: "bg-[var(--info)]",
    warning: "bg-[var(--warning)]",
  };

  return (
    <div
      className={`fixed top-4 left-4 right-4 z-[200] transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className={`${colors[type]} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 max-w-lg mx-auto`}>
        <span className="text-lg">{icons[type]}</span>
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button onClick={() => setIsVisible(false)} className="opacity-70 hover:opacity-100">
          ✕
        </button>
      </div>
    </div>
  );
}
