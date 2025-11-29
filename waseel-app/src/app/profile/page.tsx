"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header, PageContainer, BottomNav } from "@/components/layout";
import { Card, Avatar, BloodTypeBadge, Badge, Button } from "@/components/ui";
import { useAuth } from "@/context/AuthContext";

const menuItems = [
  { icon: "👤", label: "تعديل الملف الشخصي", href: "/profile/edit" },
  { icon: "📍", label: "تغيير المدينة", href: "/profile/location" },
  { icon: "🔔", label: "إعدادات الإشعارات", href: "/profile/notifications" },
  { icon: "📊", label: "سجل التبرعات", href: "/profile/history" },
  { icon: "⭐", label: "نقاطي ومكافآتي", href: "/profile/points" },
  { icon: "❓", label: "المساعدة والدعم", href: "/help" },
  { icon: "📜", label: "الشروط والأحكام", href: "/terms" },
];

const cityNames: Record<string, string> = {
  khartoum: "الخرطوم",
  omdurman: "أم درمان",
  bahri: "بحري",
  portsudan: "بورتسودان",
  kassala: "كسلا",
  madani: "ود مدني",
};

export default function ProfilePage() {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <PageContainer>
      <Header title="حسابي" />

      <div className="px-4 py-4 space-y-4">
        {/* Profile Card */}
        <Card className="text-center py-6">
          <div className="relative inline-block">
            <Avatar name={user.name} size="lg" />
            <div className="absolute -bottom-1 -left-1">
              <BloodTypeBadge type={user.bloodType} size="sm" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mt-4">{user.name}</h2>
          <p className="text-sm text-[var(--text-secondary)]">{user.phone}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Badge variant="success">
              {user.role === "donor" ? "متبرع نشط" : user.role === "recipient" ? "محتاج" : user.role}
            </Badge>
            <span className="text-sm text-[var(--text-tertiary)]">• {cityNames[user.city] || user.city}</span>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center py-4">
            <p className="text-2xl font-bold text-[var(--primary)]">{user.totalDonations}</p>
            <p className="text-xs text-[var(--text-secondary)]">تبرعات</p>
          </Card>
          <Card className="text-center py-4">
            <p className="text-2xl font-bold text-[var(--primary)]">{user.totalDonations * 3}</p>
            <p className="text-xs text-[var(--text-secondary)]">أنقذت</p>
          </Card>
          <Card className="text-center py-4">
            <p className="text-2xl font-bold text-[var(--primary)]">{user.points}</p>
            <p className="text-xs text-[var(--text-secondary)]">نقطة</p>
          </Card>
        </div>

        {/* Availability Toggle */}
        {user.role === "donor" && (
          <Card className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-[var(--text-primary)]">متاح للتبرع</p>
              <p className="text-sm text-[var(--text-secondary)]">سيتم إشعارك بالطلبات القريبة</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={user.isAvailable} className="sr-only peer" />
              <div className="w-11 h-6 bg-[var(--border)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:-translate-x-full rtl:peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--success)]"></div>
            </label>
          </Card>
        )}

        {/* Menu */}
        <Card padding="none">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-4 hover:bg-[var(--surface-secondary)] transition-colors ${
                index !== menuItems.length - 1 ? "border-b border-[var(--border)]" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="flex-1 text-[var(--text-primary)]">{item.label}</span>
              <span className="text-[var(--text-tertiary)]">←</span>
            </Link>
          ))}
        </Card>

        {/* Logout */}
        <Button variant="ghost" fullWidth className="text-[var(--danger)]" onClick={logout}>
          تسجيل الخروج
        </Button>

        {/* Version */}
        <p className="text-center text-xs text-[var(--text-tertiary)]">
          وصيل v1.0.0
        </p>
      </div>

      <BottomNav />
    </PageContainer>
  );
}
