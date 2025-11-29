"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Button, Input, Select, Card } from "@/components/ui";

const bloodTypes = [
  { value: "", label: "اختر فصيلة الدم المطلوبة" },
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

const cities = [
  { value: "", label: "اختر المدينة" },
  { value: "khartoum", label: "الخرطوم" },
  { value: "omdurman", label: "أم درمان" },
  { value: "bahri", label: "بحري" },
  { value: "portsudan", label: "بورتسودان" },
];

const urgencyLevels = [
  { value: "urgent", label: "🔴 عاجل جداً - خلال ساعات" },
  { value: "medium", label: "🟡 متوسط - خلال يوم" },
  { value: "normal", label: "🟢 عادي - خلال أيام" },
];

export default function NewRequestPage() {
  const [units, setUnits] = useState(1);

  return (
    <PageContainer withNav={false}>
      <Header 
        title="طلب دم جديد" 
        leftAction={
          <Link href="/requests" className="text-[var(--primary)] text-sm">إلغاء</Link>
        }
      />

      <div className="px-4 py-6 space-y-6">
        {/* Alert */}
        <Card className="bg-[var(--danger)]/10 border border-[var(--danger)]/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-semibold text-[var(--danger)]">مهم</p>
              <p className="text-sm text-[var(--text-secondary)]">
                تأكد من صحة المعلومات. سيتم إرسال إشعارات للمتبرعين في مدينتك.
              </p>
            </div>
          </div>
        </Card>

        <form className="space-y-5">
          {/* Blood Type */}
          <Select
            label="فصيلة الدم المطلوبة"
            options={bloodTypes}
          />

          {/* Units Needed */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              عدد الوحدات المطلوبة
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setUnits(Math.max(1, units - 1))}
                className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xl font-bold"
              >
                -
              </button>
              <span className="text-2xl font-bold text-[var(--text-primary)] w-12 text-center">
                {units}
              </span>
              <button
                type="button"
                onClick={() => setUnits(Math.min(10, units + 1))}
                className="w-12 h-12 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xl font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Urgency */}
          <Select
            label="مستوى الاستعجال"
            options={urgencyLevels}
          />

          {/* City */}
          <Select
            label="المدينة"
            options={cities}
          />

          {/* Hospital */}
          <Input
            label="اسم المستشفى"
            placeholder="مثال: مستشفى الخرطوم التعليمي"
          />

          {/* Contact */}
          <Input
            label="رقم التواصل"
            type="tel"
            placeholder="09XXXXXXXX"
            dir="ltr"
            className="text-left"
          />

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              ملاحظات إضافية (اختياري)
            </label>
            <textarea
              placeholder="أي معلومات إضافية للمتبرعين..."
              className="w-full h-24 px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-4 space-y-3">
            <Button type="submit" variant="primary" fullWidth size="lg">
              نشر الطلب
            </Button>
            <p className="text-xs text-center text-[var(--text-tertiary)]">
              سيتم إرسال إشعار لجميع المتبرعين المتاحين في مدينتك
            </p>
          </div>
        </form>
      </div>
    </PageContainer>
  );
}
