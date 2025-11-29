"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header, PageContainer, BottomNav } from "@/components/layout";
import { Card, BloodTypeBadge, Badge } from "@/components/ui";
import { RequestCard } from "@/components/features";
import { useAuth } from "@/context/AuthContext";
import { bloodRequests } from "@/data/mock";
import { 
  BloodDropIcon, 
  HeartIcon, 
  StarIcon, 
  EmergencyIcon, 
  SyringeIcon,
  BellIcon 
} from "@/components/icons";

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
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const nearbyRequests = bloodRequests
    .filter(r => r.status === "open" || r.status === "in_progress")
    .slice(0, 3);

  return (
    <PageContainer>
      <Header 
        title="وصيل" 
        rightAction={
          <Link href="/notifications">
            <button className="w-11 h-11 rounded-full bg-[var(--surface)] flex items-center justify-center relative shadow-sm">
              <BellIcon size={22} className="text-[var(--text-secondary)]" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[var(--danger)] rounded-full border-2 border-[var(--surface)]" />
            </button>
          </Link>
        }
      />

      <div className="px-4 py-5 space-y-6">
        {/* User Card */}
        <Card className="relative overflow-hidden bg-gradient-to-l from-[var(--primary)] to-[var(--primary-light)] text-white p-5">
          {/* Background blur decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <BloodTypeBadge type={user.bloodType} size="md" />
            </div>
            <div className="flex-1">
              <p className="text-sm opacity-80">مرحباً</p>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <div className="flex items-center gap-2 mt-1.5">
                <Badge variant="success" size="sm" className="bg-white/20 text-white border-0">
                  {user.role === "donor" ? "متبرع نشط" : user.role === "recipient" ? "محتاج" : user.role}
                </Badge>
                <span className="text-xs opacity-70">
                  {user.city === "khartoum" ? "الخرطوم" : user.city}
                </span>
              </div>
            </div>
            <button onClick={logout} className="text-white/60 hover:text-white text-sm transition-colors">
              خروج
            </button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/requests/new" className="block">
            <Card className="relative overflow-hidden h-[120px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-all group">
              {/* Background blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--danger)]/5 to-transparent" />
              <div className="absolute top-2 left-2 w-16 h-16 bg-[var(--danger)]/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
              
              <div className="relative">
                <div className="w-12 h-12 bg-[var(--danger)]/10 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                  <EmergencyIcon size={24} className="text-[var(--danger)]" />
                </div>
                <p className="font-semibold text-[var(--text-primary)]">طلب دم</p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">أحتاج متبرع</p>
              </div>
            </Card>
          </Link>
          
          <Link href="/donate" className="block">
            <Card className="relative overflow-hidden h-[120px] flex flex-col items-center justify-center text-center hover:shadow-lg transition-all group">
              {/* Background blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)]/5 to-transparent" />
              <div className="absolute top-2 right-2 w-16 h-16 bg-[var(--success)]/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
              
              <div className="relative">
                <div className="w-12 h-12 bg-[var(--success)]/10 rounded-2xl flex items-center justify-center mb-3 mx-auto">
                  <SyringeIcon size={24} className="text-[var(--success)]" />
                </div>
                <p className="font-semibold text-[var(--text-primary)]">تبرع الآن</p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">ساعد محتاج</p>
              </div>
            </Card>
          </Link>
        </div>

        {/* Stats */}
        <div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-4">إحصائياتك</h3>
          <div className="grid grid-cols-3 gap-3">
            <Card className="relative overflow-hidden text-center py-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent" />
              <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--primary)]/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <BloodDropIcon size={20} className="text-[var(--primary)]" />
                </div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{user.totalDonations}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">تبرعاتك</p>
              </div>
            </Card>
            
            <Card className="relative overflow-hidden text-center py-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--danger)]/5 to-transparent" />
              <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--danger)]/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="w-10 h-10 bg-[var(--danger)]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <HeartIcon size={20} className="text-[var(--danger)]" />
                </div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{user.totalDonations * 3}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">أنقذت</p>
              </div>
            </Card>
            
            <Card className="relative overflow-hidden text-center py-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--warning)]/5 to-transparent" />
              <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--warning)]/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="w-10 h-10 bg-[var(--warning)]/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <StarIcon size={20} className="text-[var(--warning)]" />
                </div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">{user.points}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">نقاطك</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Requests */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[var(--text-primary)]">طلبات قريبة منك</h3>
            <Link href="/requests" className="text-sm text-[var(--primary)] font-medium">
              عرض الكل
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {nearbyRequests.map((request) => (
              <Link key={request.id} href={`/requests/${request.id}`} className="block">
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
