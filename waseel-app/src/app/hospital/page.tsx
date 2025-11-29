"use client";

import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Card, Badge, Button } from "@/components/ui";
import { StatsCard, RequestCard, DonorCard } from "@/components/features";

const recentRequests = [
  {
    id: "1",
    bloodType: "O+" as const,
    city: "الخرطوم",
    hospital: "مستشفى الخرطوم التعليمي",
    urgency: "عاجل" as const,
    unitsNeeded: 3,
    timeAgo: "منذ 5 دقائق",
  },
  {
    id: "2",
    bloodType: "A-" as const,
    city: "الخرطوم",
    hospital: "مستشفى الخرطوم التعليمي",
    urgency: "متوسط" as const,
    unitsNeeded: 2,
    timeAgo: "منذ ساعة",
  },
];

const availableDonors = [
  {
    name: "أحمد محمد",
    bloodType: "O+" as const,
    city: "الخرطوم",
    lastDonation: "منذ 3 أشهر",
    isAvailable: true,
  },
  {
    name: "فاطمة علي",
    bloodType: "A-" as const,
    city: "الخرطوم",
    lastDonation: "منذ 4 أشهر",
    isAvailable: true,
  },
];

export default function HospitalDashboard() {
  return (
    <PageContainer withNav={false}>
      <Header 
        title="لوحة المستشفى" 
        subtitle="مستشفى الخرطوم التعليمي"
        rightAction={
          <button className="w-10 h-10 rounded-full bg-[var(--surface)] flex items-center justify-center">
            <span>⚙️</span>
          </button>
        }
      />

      <div className="px-4 py-4 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatsCard icon="🩸" value={12} label="طلبات نشطة" />
          <StatsCard icon="✅" value={45} label="تم تلبيتها" />
          <StatsCard icon="👥" value={230} label="متبرعين متاحين" />
          <StatsCard icon="📊" value="85%" label="نسبة النجاح" />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/hospital/requests/new">
            <Card className="text-center py-5 bg-[var(--primary)] text-white">
              <span className="text-3xl mb-2 block">🆘</span>
              <p className="font-semibold">طلب دم جديد</p>
            </Card>
          </Link>
          <Link href="/hospital/donors">
            <Card className="text-center py-5">
              <span className="text-3xl mb-2 block">👥</span>
              <p className="font-semibold text-[var(--text-primary)]">قاعدة المتبرعين</p>
            </Card>
          </Link>
        </div>

        {/* Active Requests */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[var(--text-primary)]">الطلبات النشطة</h3>
            <Link href="/hospital/requests" className="text-sm text-[var(--primary)]">
              عرض الكل
            </Link>
          </div>
          <div className="space-y-3">
            {recentRequests.map((request) => (
              <RequestCard key={request.id} {...request} />
            ))}
          </div>
        </div>

        {/* Available Donors */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[var(--text-primary)]">متبرعين متاحين</h3>
            <Link href="/hospital/donors" className="text-sm text-[var(--primary)]">
              عرض الكل
            </Link>
          </div>
          <div className="space-y-3">
            {availableDonors.map((donor, index) => (
              <DonorCard key={index} {...donor} onContact={() => {}} />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
