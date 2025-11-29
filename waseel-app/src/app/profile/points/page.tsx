"use client";

import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Card, Badge, Button } from "@/components/ui";

const rewards = [
  { id: "1", name: "خصم 10% في صيدلية الشفاء", points: 100, icon: "💊" },
  { id: "2", name: "فحص طبي مجاني", points: 200, icon: "🩺" },
  { id: "3", name: "قسيمة مطعم", points: 150, icon: "🍽️" },
  { id: "4", name: "شحن رصيد 50 جنيه", points: 250, icon: "📱" },
];

const pointsHistory = [
  { action: "تبرع بالدم", points: 50, date: "15 نوفمبر 2024", type: "earned" },
  { action: "استبدال مكافأة", points: -100, date: "10 نوفمبر 2024", type: "spent" },
  { action: "تبرع بالدم", points: 50, date: "20 أكتوبر 2024", type: "earned" },
  { action: "مكافأة التسجيل", points: 20, date: "1 أكتوبر 2024", type: "earned" },
];

export default function PointsPage() {
  const totalPoints = 150;

  return (
    <PageContainer withNav={false}>
      <Header 
        title="نقاطي ومكافآتي" 
        leftAction={
          <Link href="/profile" className="text-[var(--primary)] text-sm">رجوع</Link>
        }
      />

      <div className="px-4 py-4 space-y-6">
        {/* Points Balance */}
        <Card className="bg-gradient-to-l from-[var(--primary)] to-[var(--primary-light)] text-white text-center py-8">
          <p className="text-sm opacity-80 mb-2">رصيد النقاط</p>
          <p className="text-5xl font-bold mb-2">{totalPoints}</p>
          <p className="text-sm opacity-80">نقطة</p>
        </Card>

        {/* How to Earn */}
        <Card>
          <h3 className="font-semibold text-[var(--text-primary)] mb-3">كيف تكسب النقاط؟</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">🩸</span>
                <span className="text-sm">كل تبرع بالدم</span>
              </div>
              <Badge variant="success">+50 نقطة</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">👥</span>
                <span className="text-sm">دعوة صديق</span>
              </div>
              <Badge variant="success">+20 نقطة</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">⭐</span>
                <span className="text-sm">إكمال الملف الشخصي</span>
              </div>
              <Badge variant="success">+10 نقاط</Badge>
            </div>
          </div>
        </Card>

        {/* Available Rewards */}
        <div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-3">المكافآت المتاحة</h3>
          <div className="grid grid-cols-2 gap-3">
            {rewards.map((reward) => (
              <Card key={reward.id} className="text-center">
                <span className="text-3xl mb-2 block">{reward.icon}</span>
                <p className="text-sm font-medium text-[var(--text-primary)] mb-1">
                  {reward.name}
                </p>
                <Badge variant={totalPoints >= reward.points ? "success" : "default"}>
                  {reward.points} نقطة
                </Badge>
                <Button 
                  variant={totalPoints >= reward.points ? "primary" : "ghost"}
                  size="sm" 
                  fullWidth 
                  className="mt-3"
                  disabled={totalPoints < reward.points}
                >
                  استبدال
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Points History */}
        <div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-3">سجل النقاط</h3>
          <Card padding="none">
            {pointsHistory.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-3 ${
                  index !== pointsHistory.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{item.action}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">{item.date}</p>
                </div>
                <span className={`font-semibold ${
                  item.type === "earned" ? "text-[var(--success)]" : "text-[var(--danger)]"
                }`}>
                  {item.type === "earned" ? "+" : ""}{item.points}
                </span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
