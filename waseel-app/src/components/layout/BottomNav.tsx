"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, BloodDropIcon, BellIcon, UserIcon } from "@/components/icons";

const navItems = [
  { href: "/dashboard", label: "الرئيسية", Icon: HomeIcon },
  { href: "/requests", label: "الطلبات", Icon: BloodDropIcon },
  { href: "/notifications", label: "الإشعارات", Icon: BellIcon },
  { href: "/profile", label: "حسابي", Icon: UserIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--surface)]/80 backdrop-blur-xl border-t border-[var(--border)] safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.Icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-full transition-colors ${
                isActive ? "text-[var(--primary)]" : "text-[var(--text-tertiary)]"
              }`}
            >
              <Icon size={24} className={isActive ? "text-[var(--primary)]" : ""} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
