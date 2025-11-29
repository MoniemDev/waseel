"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header, PageContainer, BottomNav } from "@/components/layout";
import { Card, Button, BloodTypeBadge, Badge } from "@/components/ui";
import { StatsCard, RequestCard } from "@/components/features";
import { useAuth } from "@/context/AuthContext";
import { bloodRequests } from "@/data/mock";

export default function DashboardPage() {
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

  // Filter requests based on user's city
  const nearbyRequests = bloodRequests
    .filter(r => r.status === "open" || r.status === "in_progress")
    .slice(0, 3);

  return (
    <PageContainer>
      <Header 
        title="وصيل" 
        rightAction={
          <Link href="/notifications">
            <button className="w-10 h-10 rounded-full bg-[var(--surface)] flex items-center justify-center relative">
              <span>🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--danger)] rounded-full" />
            </button>
          </Link>
        }
      />

      <div className="px-4 py-4 space-y-6">
        {/* User Card */}
        <Card className="bg-gradient-to-l from-[var(--primary)] to-[var(--primary-light)] text-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <BloodTypeBadge type={user.bloodType} size="md" />
            </div>
            <div className="flex-1">
              <p className="text-sm opacity-80">مرحباً</p>
              <h2 className="text-lg font-bold">{user.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="success" size="sm" className="bg-white/20 text-white">
                  {user.role === "donor" ? "متبرع نشط" : user.role === "recipient" ? "محتاج" : user.role}
                </Badge>
                <span className="text-xs opacity-80">
                  {user.city === "khartoum" ? "الخرطوم" : user.city}
                </span>
              </div>
            </div>
            <button onClick={logout} className="text-white/70 hover:text-white text-sm">
              خروج
            </button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/requests/new">
            <Card className="text-center py-5 hover:shadow-md transition-shadow">
              <span className="text-3xl mb-2 block">🆘</span>
              <p className="font-semibold text-[var(--text-primary)]">طلب دم</p>
              <p className="text-xs text-[var(--text-secondary)]">أحتاج متبرع</p>
            </Card>
          </Link>
          <Link href="/donate">
            <Card className="text-center py-5 hover:shadow-md transition-shadow">
              <span className="text-3xl mb-2 block">💉</span>
              <p className="font-semibold text-[var(--text-primary)]">تبرع الآن</p>
              <p className="text-xs text-[var(--text-secondary)]">ساعد محتاج</p>
            </Card>
          </Link>
        </div>

        {/* Stats */}
        <div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-3">إحصائياتك</h3>
          <div className="grid grid-cols-3 gap-3">
            <StatsCard icon="🩸" value={user.totalDonations} label="تبرعاتك" />
            <StatsCard icon="❤️" value={user.totalDonations * 3} label="أنقذت" />
            <StatsCard icon="⭐" value={user.points} label="نقاطك" />
          </div>
        </div>

        {/* Recent Requests */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[var(--text-primary)]">طلبات قريبة منك</h3>
            <Link href="/requests" className="text-sm text-[var(--primary)]">
              عرض الكل
            </Link>
          </div>
          <div className="space-y-3">
            {nearbyRequests.map((request) => (
              <Link key={request.id} href={`/requests/${request.id}`}>
                <RequestCard 
                  id={request.id}
                  bloodType={request.bloodType}
                  city={request.city === "khartoum" ? "الخرطوم" : request.city === "omdurman" ? "أم درمان" : request.city}
                  hospital={request.hospitalName}
                  urgency={request.urgency}
                  unitsNeeded={request.unitsNeeded}
                  timeAgo={getTimeAgo(request.createdAt)}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </PageContainer>
  );
}

function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  
  if (diffMins < 60) return `منذ ${diffMins} دقيقة`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `منذ ${diffHours} ساعة`;
  const diffDays = Math.floor(diffHours / 24);
  return `منذ ${diffDays} يوم`;
}
