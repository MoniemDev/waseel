"use client";

import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Button, Card, Badge, BloodTypeBadge, Avatar } from "@/components/ui";

export default function RequestDetailPage() {
  return (
    <PageContainer withNav={false}>
      <Header 
        title="تفاصيل الطلب" 
        leftAction={
          <Link href="/requests" className="text-[var(--primary)] text-sm">رجوع</Link>
        }
      />

      <div className="px-4 py-4 space-y-4">
        {/* Main Info Card */}
        <Card className="text-center py-6">
          <BloodTypeBadge type="O+" size="lg" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-4">
            مطلوب 3 وحدات
          </h2>
          <Badge variant="danger" className="mt-2">عاجل</Badge>
          <p className="text-sm text-[var(--text-secondary)] mt-3">
            منذ 5 دقائق
          </p>
        </Card>

        {/* Details */}
        <Card>
          <h3 className="font-semibold text-[var(--text-primary)] mb-4">معلومات الطلب</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">المستشفى</span>
              <span className="font-medium">مستشفى الخرطوم التعليمي</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">المدينة</span>
              <span className="font-medium">الخرطوم</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">فصيلة الدم</span>
              <span className="font-medium">O+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">الوحدات المطلوبة</span>
              <span className="font-medium">3 وحدات</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-secondary)]">الحالة</span>
              <Badge variant="warning">قيد البحث</Badge>
            </div>
          </div>
        </Card>

        {/* Requester Info */}
        <Card>
          <h3 className="font-semibold text-[var(--text-primary)] mb-4">معلومات الطالب</h3>
          <div className="flex items-center gap-4">
            <Avatar name="محمد أحمد" size="lg" />
            <div className="flex-1">
              <p className="font-semibold">محمد أحمد</p>
              <p className="text-sm text-[var(--text-secondary)]">09XXXXXXXX</p>
            </div>
            <Button variant="primary" size="sm">
              📞 اتصال
            </Button>
          </div>
        </Card>

        {/* Notes */}
        <Card>
          <h3 className="font-semibold text-[var(--text-primary)] mb-2">ملاحظات</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            الحالة حرجة وتحتاج نقل دم عاجل. يرجى التواصل في أقرب وقت.
          </p>
        </Card>

        {/* Actions */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--surface)] border-t border-[var(--border)] safe-bottom">
          <div className="flex gap-3 max-w-lg mx-auto">
            <Button variant="outline" fullWidth>
              مشاركة
            </Button>
            <Button variant="primary" fullWidth>
              أريد التبرع
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
