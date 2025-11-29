"use client";

import Link from "next/link";
import { Header, PageContainer, BottomNav } from "@/components/layout";
import { Card, Badge, BloodTypeBadge, Button } from "@/components/ui";
import { RequestCard } from "@/components/features";

const nearbyRequests = [
  {
    id: "1",
    bloodType: "O+" as const,
    city: "الخرطوم",
    hospital: "مستشفى الخرطوم التعليمي",
    urgency: "عاجل" as const,
    unitsNeeded: 3,
    timeAgo: "منذ 5 دقائق",
    distance: "2.5 كم",
  },
  {
    id: "2",
    bloodType: "A+" as const,
    city: "الخرطوم",
    hospital: "مستشفى سوبا الجامعي",
    urgency: "متوسط" as const,
    unitsNeeded: 2,
    timeAgo: "منذ 30 دقيقة",
    distance: "4.2 كم",
  },
  {
    id: "3",
    bloodType: "A+" as const,
    city: "الخرطوم",
    hospital: "مستشفى الشرطة",
    urgency: "عادي" as const,
    unitsNeeded: 1,
    timeAgo: "منذ ساعة",
    distance: "5.8 كم",
  },
];

const bloodCenters = [
  { name: "بنك الدم المركزي", address: "الخرطوم - شارع النيل", distance: "1.2 كم" },
  { name: "مركز التبرع بالدم", address: "الخرطوم - المقرن", distance: "3.5 كم" },
];

export default function DonatePage() {
  return (
    <PageContainer>
      <Header title="تبرع الآن" />

      <div className="px-4 py-4 space-y-6">
        {/* Eligibility Check */}
        <Card className="bg-[var(--success)]/10 border border-[var(--success)]/20">
          <div className="flex items-center gap-3">
            <span className="text-3xl">✅</span>
            <div>
              <p className="font-semibold text-[var(--success)]">أنت مؤهل للتبرع</p>
              <p className="text-sm text-[var(--text-secondary)]">
                آخر تبرع: منذ 4 أشهر
              </p>
            </div>
          </div>
        </Card>

        {/* Your Blood Type */}
        <Card className="flex items-center gap-4">
          <BloodTypeBadge type="A+" size="lg" />
          <div>
            <p className="text-sm text-[var(--text-secondary)]">فصيلة دمك</p>
            <p className="font-semibold text-[var(--text-primary)]">A+ موجب</p>
            <p className="text-xs text-[var(--text-tertiary)]">
              يمكنك التبرع لـ A+, AB+
            </p>
          </div>
        </Card>

        {/* Matching Requests */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[var(--text-primary)]">طلبات تناسب فصيلتك</h3>
            <Badge variant="danger">{nearbyRequests.length} طلب</Badge>
          </div>
          <div className="space-y-3">
            {nearbyRequests.map((request) => (
              <Link key={request.id} href={`/requests/${request.id}`}>
                <RequestCard {...request} />
              </Link>
            ))}
          </div>
        </div>

        {/* Blood Centers */}
        <div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-3">مراكز التبرع القريبة</h3>
          <div className="space-y-3">
            {bloodCenters.map((center, index) => (
              <Card key={index} className="flex items-center gap-4">
                <span className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center text-2xl">
                  🏥
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-[var(--text-primary)]">{center.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{center.address}</p>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-[var(--primary)]">{center.distance}</p>
                  <Button variant="ghost" size="sm" className="text-xs p-0">
                    الاتجاهات →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips */}
        <Card>
          <h3 className="font-semibold text-[var(--text-primary)] mb-3">نصائح قبل التبرع</h3>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <span>💧</span>
              <span>اشرب كمية كافية من الماء</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🍎</span>
              <span>تناول وجبة خفيفة قبل التبرع</span>
            </li>
            <li className="flex items-start gap-2">
              <span>😴</span>
              <span>احصل على قسط كافٍ من النوم</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🆔</span>
              <span>أحضر بطاقة الهوية معك</span>
            </li>
          </ul>
        </Card>
      </div>

      <BottomNav />
    </PageContainer>
  );
}
