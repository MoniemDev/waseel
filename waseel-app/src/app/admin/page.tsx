"use client";

import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Card, Badge } from "@/components/ui";
import { StatsCard } from "@/components/features";

const menuItems = [
  { icon: "👥", label: "إدارة المستخدمين", href: "/admin/users", count: 1250 },
  { icon: "🏥", label: "إدارة المستشفيات", href: "/admin/hospitals", count: 45 },
  { icon: "🩸", label: "إدارة الطلبات", href: "/admin/requests", count: 89 },
  { icon: "🔔", label: "إدارة الإشعارات", href: "/admin/notifications", count: null },
  { icon: "📊", label: "التقارير والإحصائيات", href: "/admin/reports", count: null },
  { icon: "⚙️", label: "إعدادات النظام", href: "/admin/settings", count: null },
];

const recentActivity = [
  { type: "user", message: "مستخدم جديد: أحمد محمد", time: "منذ 5 دقائق" },
  { type: "request", message: "طلب دم جديد في الخرطوم", time: "منذ 15 دقيقة" },
  { type: "donation", message: "تم تأكيد تبرع بنجاح", time: "منذ 30 دقيقة" },
  { type: "hospital", message: "مستشفى جديد: مستشفى سوبا", time: "منذ ساعة" },
];

export default function AdminDashboard() {
  return (
    <PageContainer withNav={false}>
      <Header 
        title="لوحة الإدارة" 
        subtitle="مرحباً، المدير"
        rightAction={
          <button className="w-10 h-10 rounded-full bg-[var(--surface)] flex items-center justify-center">
            <span>🔔</span>
          </button>
        }
      />

      <div className="px-4 py-4 space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatsCard 
            icon="👥" 
            value="1,250" 
            label="إجمالي المستخدمين" 
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard 
            icon="🩸" 
            value="89" 
            label="طلبات نشطة" 
            trend={{ value: 5, isPositive: false }}
          />
          <StatsCard 
            icon="✅" 
            value="456" 
            label="تبرعات ناجحة" 
            trend={{ value: 23, isPositive: true }}
          />
          <StatsCard 
            icon="🏥" 
            value="45" 
            label="مستشفى مسجل" 
            trend={{ value: 8, isPositive: true }}
          />
        </div>

        {/* Quick Actions */}
        <Card padding="none">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-4 hover:bg-[var(--surface-secondary)] transition-colors ${
                index !== menuItems.length - 1 ? "border-b border-[var(--border)]" : ""
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="flex-1 font-medium text-[var(--text-primary)]">{item.label}</span>
              {item.count !== null && (
                <Badge variant="default">{item.count}</Badge>
              )}
              <span className="text-[var(--text-tertiary)]">←</span>
            </Link>
          ))}
        </Card>

        {/* Recent Activity */}
        <div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-3">النشاط الأخير</h3>
          <Card padding="none">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 ${
                  index !== recentActivity.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[var(--success)]" />
                <div className="flex-1">
                  <p className="text-sm text-[var(--text-primary)]">{activity.message}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">{activity.time}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <h3 className="font-semibold text-[var(--text-primary)] mb-3">حالة النظام</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--text-secondary)]">الخادم</span>
              <Badge variant="success">يعمل</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--text-secondary)]">قاعدة البيانات</span>
              <Badge variant="success">متصل</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--text-secondary)]">الإشعارات</span>
              <Badge variant="success">نشط</Badge>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
