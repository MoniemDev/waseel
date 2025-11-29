"use client";

import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Card, Badge } from "@/components/ui";
import { RequestCard, DonorCard } from "@/components/features";
import { 
  BloodDropIcon, 
  CheckIcon, 
  UserIcon, 
  EmergencyIcon,
  SettingsIcon 
} from "@/components/icons";

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
          <button className="w-11 h-11 rounded-full bg-[var(--surface)] flex items-center justify-center shadow-sm">
            <SettingsIcon size={22} className="text-[var(--text-secondary)]" />
          </button>
        }
      />

      <div className="px-4 py-5 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="relative overflow-hidden py-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent" />
            <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--primary)]/10 rounded-full blur-xl" />
            <div className="relative flex items-center gap-3">
              <div className="w-11 h-11 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                <BloodDropIcon size={22} className="text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">12</p>
                <p className="text-xs text-[var(--text-secondary)]">طلبات نشطة</p>
              </div>
            </div>
          </Card>
          
          <Card className="relative overflow-hidden py-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)]/5 to-transparent" />
            <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--success)]/10 rounded-full blur-xl" />
            <div className="relative flex items-center gap-3">
              <div className="w-11 h-11 bg-[var(--success)]/10 rounded-xl flex items-center justify-center">
                <CheckIcon size={22} className="text-[var(--success)]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">45</p>
                <p className="text-xs text-[var(--text-secondary)]">تم تلبيتها</p>
              </div>
            </div>
          </Card>
          
          <Card className="relative overflow-hidden py-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--info)]/5 to-transparent" />
            <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--info)]/10 rounded-full blur-xl" />
            <div className="relative flex items-center gap-3">
              <div className="w-11 h-11 bg-[var(--info)]/10 rounded-xl flex items-center justify-center">
                <UserIcon size={22} className="text-[var(--info)]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">230</p>
                <p className="text-xs text-[var(--text-secondary)]">متبرعين متاحين</p>
              </div>
            </div>
          </Card>
          
          <Card className="relative overflow-hidden py-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--warning)]/5 to-transparent" />
            <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--warning)]/10 rounded-full blur-xl" />
            <div className="relative flex items-center gap-3">
              <div className="w-11 h-11 bg-[var(--warning)]/10 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-[var(--warning)]">%</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">85%</p>
                <p className="text-xs text-[var(--text-secondary)]">نسبة النجاح</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/hospital/requests/new">
            <Card className="relative overflow-hidden h-[100px] flex flex-col items-center justify-center text-center bg-[var(--primary)] text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute top-2 left-2 w-16 h-16 bg-white/10 rounded-full blur-xl" />
              <div className="relative">
                <EmergencyIcon size={28} className="mx-auto mb-2" />
                <p className="font-semibold">طلب دم جديد</p>
              </div>
            </Card>
          </Link>
          <Link href="/hospital/donors">
            <Card className="relative overflow-hidden h-[100px] flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--info)]/5 to-transparent" />
              <div className="absolute top-2 right-2 w-16 h-16 bg-[var(--info)]/10 rounded-full blur-xl" />
              <div className="relative">
                <UserIcon size={28} className="mx-auto mb-2 text-[var(--info)]" />
                <p className="font-semibold text-[var(--text-primary)]">قاعدة المتبرعين</p>
              </div>
            </Card>
          </Link>
        </div>

        {/* Active Requests */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[var(--text-primary)]">الطلبات النشطة</h3>
            <Link href="/hospital/requests" className="text-sm text-[var(--primary)] font-medium">
              عرض الكل
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {recentRequests.map((request) => (
              <RequestCard key={request.id} {...request} />
            ))}
          </div>
        </div>

        {/* Available Donors */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[var(--text-primary)]">متبرعين متاحين</h3>
            <Link href="/hospital/donors" className="text-sm text-[var(--primary)] font-medium">
              عرض الكل
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {availableDonors.map((donor, index) => (
              <DonorCard key={index} {...donor} onContact={() => {}} />
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
