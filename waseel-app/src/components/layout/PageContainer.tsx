"use client";

import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  withNav?: boolean;
  className?: string;
}

export function PageContainer({ children, withNav = true, className = "" }: PageContainerProps) {
  return (
    <main className={`min-h-screen ${withNav ? "pb-20" : ""} ${className}`}>
      {children}
    </main>
  );
}
