"use client";

import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Card, Badge, BloodTypeBadge, EmptyState } from "@/components/ui";

const donationHistory = [
  {
    id: "1",
    date: "15 نوفمبر 2024",
    bloodType: "A+" as const,
    hospital: "مستشفى الخرطوم التعليمي",
    recipient: "محمد علي",
    status: "completed",
    points: 50,
  },
  {
    id: "2",
    date: "20 أكتوبر 2024",
    bloodType: "A+" as const,
    hospital: "مستشفى سوبا الجامعي",
    recipient: "فاطمة أحمد",
    status: "completed",
    points: 50,
  },
  {
    id: "3",
    date: "5 سبتمبر 2024",
    bloodType: "A+" as const,
    hospital: "مستشفى أم درمان",
    recipient: "عمر حسن",
    status: "completed",
    points: 50,
  },
  {
    id: "4",
    date: "10 أغسطس 2024",
    bloodType: "A+" as const,
    hospital: "مستشفى بحري",
    recipient: "سارة محمد",
    status: "cancelled",
    points: 0,
  },
];

export default function DonationHistoryPage() {
  const completedDonations = donationHistory.filter(d => d.status === "completed");
  const totalPoints = completedDonations.reduce((sum, d) => sum + d.points, 0);

  return (
    <PageContainer withNav={false}>
      <Header 
        title="سجل التبرعات" 
        leftAction={
          <Link href="/profile" className="text-[var(--primary)] text-sm">رجوع</Link>
        }
      />

      <div className="px-4 py-4 space-y-4">
        {/* Summary */}
        <Card className="bg-gradient-to-l from-[var(--primary)] to-[var(--primary-light)] text-white">
          <div className="flex justify-around text-center">
            <div>
              <p className="text-3xl font-bold">{completedDonations.length}</p>
              <p className="text-sm opacity-80">تبرعات ناجحة</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-3xl font-bold">{totalPoints}</p>
              <p className="text-sm opacity-80">نقطة مكتسبة</p>
            </div>
          </div>
        </Card>

        {/* History List */}
        {donationHistory.length > 0 ? (
          <div className="space-y-3">
            {donationHistory.map((donation) => (
              <Card key={donation.id} className="flex items-center gap-4">
                <BloodTypeBadge type={donation.bloodType} size="md" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {donation.hospital}
                    </h3>
                    {donation.status === "completed" ? (
                      <Badge variant="success" size="sm">مكتمل</Badge>
                    ) : (
                      <Badge variant="default" size="sm">ملغي</Badge>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    للمستفيد: {donation.recipient}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-[var(--text-tertiary)]">
                      {donation.date}
                    </p>
                    {donation.points > 0 && (
                      <span className="text-xs text-[var(--success)] font-medium">
                        +{donation.points} نقطة
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="🩸"
            title="لا توجد تبرعات بعد"
            description="ابدأ بالتبرع لمساعدة المحتاجين وكسب النقاط"
            action={{
              label: "ابحث عن طلبات",
              onClick: () => {},
            }}
          />
        )}
      </div>
    </PageContainer>
  );
}
