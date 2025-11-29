"use client";

import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Card, Badge } from "@/components/ui";
import { 
  UserIcon, 
  HospitalIcon, 
  BloodDropIcon, 
  BellIcon,
  SettingsIcon,
  CheckIcon
} from "@/components/icons";

const menuItems = [
  { icon: UserIcon, label: "إدارة المستخدمين", href: "/admin/users", count: 1250, color: "info" },
  { icon: HospitalIcon, label: "إدارة المستشفيات", href: "/admin/hospitals", count: 45, color: "success" },
  { icon: BloodDropIcon, label: "إدارة الطلبات", href: "/admin/requests", count: 89, color: "danger" },
  { icon: BellIcon, label: "إدارة الإشعارات", href: "/admin/notifications", count: null, color: "warning" },
  { icon: SettingsIcon, label: "إعدادات النظام", href: "/admin/settings", count: null, color: "secondary" },
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
          <button className="w-11 h-11 rounded-full bg-[var(--surface)] flex items-center justify-center shadow-sm relative">
            <BellIcon size={22} className="text-[var(--text-secondary)]" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[var(--danger)] rounded-full border-2 border-[var(--surface)]" />
          </button>
        }
      />

      <div className="px-4 py-5 space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="relative overflow-hidden py-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--info)]/5 to-transparent" />
            <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--info)]/10 rounded-full blur-xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-[var(--info)]/10 rounded-xl flex items-center justify-center">
                  <UserIcon size={20} className="text-[var(--info)]" />
                </div>
                <Badge variant="success" size="sm">+12%</Badge>
              </div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">1,250</p>
              <p className="text-xs text-[var(--text-secondary)]">إجمالي المستخدمين</p>
            </div>
          </Card>
          
          <Card className="relative overflow-hidden py-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--danger)]/5 to-transparent" />
            <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--danger)]/10 rounded-full blur-xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-[var(--danger)]/10 rounded-xl flex items-center justify-center">
                  <BloodDropIcon size={20} className="text-[var(--danger)]" />
                </div>
                <Badge variant="danger" size="sm">-5%</Badge>
              </div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">89</p>
              <p className="text-xs text-[var(--text-secondary)]">طلبات نشطة</p>
            </div>
          </Card>
          
          <Card className="relative overflow-hidden py-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--success)]/5 to-transparent" />
            <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--success)]/10 rounded-full blur-xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-[var(--success)]/10 rounded-xl flex items-center justify-center">
                  <CheckIcon size={20} className="text-[var(--success)]" />
                </div>
                <Badge variant="success" size="sm">+23%</Badge>
              </div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">456</p>
              <p className="text-xs text-[var(--text-secondary)]">تبرعات ناجحة</p>
            </div>
          </Card>
          
          <Card className="relative overflow-hidden py-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--warning)]/5 to-transparent" />
            <div className="absolute top-1 right-1 w-12 h-12 bg-[var(--warning)]/10 rounded-full blur-xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-[var(--warning)]/10 rounded-xl flex items-center justify-center">
                  <HospitalIcon size={20} className="text-[var(--warning)]" />
                </div>
                <Badge variant="success" size="sm">+8%</Badge>
              </div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">45</p>
              <p className="text-xs text-[var(--text-secondary)]">مستشفى مسجل</p>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card padding="none">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-4 hover:bg-[var(--surface-secondary)] transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <div className={`w-10 h-10 bg-[var(--${item.color})]/10 rounded-xl flex items-center justify-center`}>
                  <Icon size={20} className={`text-[var(--${item.color})]`} />
                </div>
                <span className="flex-1 font-medium text-[var(--text-primary)]">{item.label}</span>
                {item.count !== null && (
                  <Badge variant="default">{item.count}</Badge>
                )}
                <span className="text-[var(--text-tertiary)]">←</span>
              </Link>
            );
          })}
        </Card>

        {/* Recent Activity */}
        <div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-4">النشاط الأخير</h3>
          <Card padding="none">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3.5 ${
                  index !== recentActivity.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
                <div className="flex-1">
                  <p className="text-sm text-[var(--text-primary)]">{activity.message}</p>
                  <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <h3 className="font-semibold text-[var(--text-primary)] mb-4">حالة النظام</h3>
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
