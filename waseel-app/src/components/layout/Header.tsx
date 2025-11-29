"use client";

import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  leftAction?: ReactNode;
  rightAction?: ReactNode;
  transparent?: boolean;
}

export function Header({ title, subtitle, leftAction, rightAction, transparent = false }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 safe-top ${transparent ? "" : "blur-bg border-b border-[var(--border)]"}`}>
      <div className="flex items-center justify-between h-14 px-4">
        <div className="w-12 flex justify-start">
          {leftAction}
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h1>
          {subtitle && (
            <p className="text-xs text-[var(--text-secondary)]">{subtitle}</p>
          )}
        </div>
        <div className="w-12 flex justify-end">
          {rightAction}
        </div>
      </div>
    </header>
  );
}
