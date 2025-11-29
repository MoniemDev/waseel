"use client";

import { Header, PageContainer, BottomNav } from "@/components/layout";
import { NotificationCard } from "@/components/features";

const notifications = [
  {
    id: "1",
    type: "request" as const,
    title: "طلب دم عاجل",
    message: "مطلوب 3 وحدات O+ في مستشفى الخرطوم التعليمي",
    bloodType: "O+" as const,
    timeAgo: "منذ 5 دقائق",
    isRead: false,
  },
  {
    id: "2",
    type: "match" as const,
    title: "تم قبول تبرعك",
    message: "شكراً لك! تم تأكيد تبرعك لمحمد أحمد",
    timeAgo: "منذ ساعة",
    isRead: false,
  },
  {
    id: "3",
    type: "request" as const,
    title: "طلب دم جديد",
    message: "مطلوب وحدتين A- في مستشفى أم درمان",
    bloodType: "A-" as const,
    timeAgo: "منذ 3 ساعات",
    isRead: true,
  },
  {
    id: "4",
    type: "system" as const,
    title: "تحديث الملف الشخصي",
    message: "يرجى تحديث معلومات التواصل الخاصة بك",
    timeAgo: "منذ يوم",
    isRead: true,
  },
  {
    id: "5",
    type: "match" as const,
    title: "شكراً لتبرعك",
    message: "لقد ساعدت في إنقاذ حياة! حصلت على 50 نقطة",
    timeAgo: "منذ 3 أيام",
    isRead: true,
  },
];

export default function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <PageContainer>
      <Header 
        title="الإشعارات" 
        subtitle={unreadCount > 0 ? `${unreadCount} غير مقروءة` : undefined}
        rightAction={
          unreadCount > 0 && (
            <button className="text-sm text-[var(--primary)]">
              قراءة الكل
            </button>
          )
        }
      />

      <div className="px-4 py-4">
        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <NotificationCard key={notification.id} {...notification} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🔔</span>
            <p className="text-[var(--text-secondary)]">لا توجد إشعارات</p>
          </div>
        )}
      </div>

      <BottomNav />
    </PageContainer>
  );
}
