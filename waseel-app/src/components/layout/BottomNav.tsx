"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "الرئيسية", icon: "🏠" },
  { href: "/requests", label: "الطلبات", icon: "🩸" },
  { href: "/notifications", label: "الإشعارات", icon: "🔔" },
  { href: "/profile", label: "حسابي", icon: "👤" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 blur-bg border-t border-[var(--border)] safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${
                isActive ? "text-[var(--primary)]" : "text-[var(--text-tertiary)]"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
