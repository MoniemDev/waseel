"use client";

import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Button, Input, Select, Avatar } from "@/components/ui";

const bloodTypes = [
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
  { value: "khartoum", label: "الخرطوم" },
  { value: "omdurman", label: "أم درمان" },
  { value: "bahri", label: "بحري" },
  { value: "portsudan", label: "بورتسودان" },
  { value: "kassala", label: "كسلا" },
];

export default function EditProfilePage() {
  return (
    <PageContainer withNav={false}>
      <Header 
        title="تعديل الملف الشخصي" 
        leftAction={
          <Link href="/profile" className="text-[var(--primary)] text-sm">إلغاء</Link>
        }
        rightAction={
          <button className="text-[var(--primary)] text-sm font-semibold">حفظ</button>
        }
      />

      <div className="px-4 py-6 space-y-6">
        {/* Avatar */}
        <div className="text-center">
          <div className="relative inline-block">
            <Avatar name="أحمد محمد" size="lg" />
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-sm">
              📷
            </button>
          </div>
          <button className="text-sm text-[var(--primary)] mt-2 block mx-auto">
            تغيير الصورة
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <Input
            label="الاسم الكامل"
            defaultValue="أحمد محمد"
          />

          <Input
            label="رقم الهاتف"
            type="tel"
            defaultValue="09XXXXXXXX"
            dir="ltr"
            className="text-left"
          />

          <Select
            label="فصيلة الدم"
            options={bloodTypes}
            defaultValue="A+"
          />

          <Select
            label="المدينة"
            options={cities}
            defaultValue="khartoum"
          />

          <Input
            label="البريد الإلكتروني (اختياري)"
            type="email"
            placeholder="example@email.com"
            dir="ltr"
            className="text-left"
          />

          <div className="pt-4">
            <Button type="submit" variant="primary" fullWidth size="lg">
              حفظ التغييرات
            </Button>
          </div>
        </form>

        {/* Danger Zone */}
        <div className="pt-6 border-t border-[var(--border)]">
          <h3 className="text-sm font-semibold text-[var(--danger)] mb-3">منطقة الخطر</h3>
          <Button variant="ghost" fullWidth className="text-[var(--danger)] justify-start">
            🗑️ حذف الحساب
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
