"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Button, Input, Select, Card } from "@/components/ui";

const bloodTypes = [
  { value: "", label: "اختر فصيلة الدم" },
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
  { value: "kassala", label: "كسلا" },
  { value: "madani", label: "ود مدني" },
  { value: "nyala", label: "نيالا" },
  { value: "elfasher", label: "الفاشر" },
];

type UserType = "donor" | "recipient" | null;

export default function RegisterPage() {
  const [userType, setUserType] = useState<UserType>(null);
  const [step, setStep] = useState(1);

  return (
    <PageContainer withNav={false}>
      <Header 
        title="إنشاء حساب" 
        subtitle={`الخطوة ${step} من 2`}
        leftAction={
          <button 
            onClick={() => step > 1 ? setStep(step - 1) : null}
            className="text-[var(--primary)] text-sm"
          >
            {step > 1 ? "رجوع" : <Link href="/">رجوع</Link>}
          </button>
        }
      />
      
      <div className="px-6 py-6">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-[var(--text-primary)]">أنت...</h2>
              <p className="text-sm text-[var(--text-secondary)]">اختر نوع حسابك</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card 
                onClick={() => setUserType("donor")}
                className={`text-center py-8 border-2 transition-all ${
                  userType === "donor" 
                    ? "border-[var(--primary)] bg-[var(--primary)]/5" 
                    : "border-transparent"
                }`}
              >
                <span className="text-5xl mb-3 block">🤲</span>
                <h3 className="font-semibold text-[var(--text-primary)]">متبرع</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">أريد التبرع بالدم</p>
              </Card>

              <Card 
                onClick={() => setUserType("recipient")}
                className={`text-center py-8 border-2 transition-all ${
                  userType === "recipient" 
                    ? "border-[var(--primary)] bg-[var(--primary)]/5" 
                    : "border-transparent"
                }`}
              >
                <span className="text-5xl mb-3 block">🏥</span>
                <h3 className="font-semibold text-[var(--text-primary)]">محتاج</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">أحتاج متبرع بالدم</p>
              </Card>
            </div>

            <Button 
              variant="primary" 
              fullWidth 
              size="lg"
              disabled={!userType}
              onClick={() => setStep(2)}
            >
              متابعة
            </Button>
          </div>
        )}

        {step === 2 && (
          <form className="space-y-4">
            <Input
              label="الاسم الكامل"
              placeholder="أدخل اسمك"
            />

            <Input
              label="رقم الهاتف"
              type="tel"
              placeholder="09XXXXXXXX"
              dir="ltr"
              className="text-left"
            />

            <Select
              label="فصيلة الدم"
              options={bloodTypes}
            />

            <Select
              label="المدينة"
              options={cities}
            />

            <Input
              label="كلمة المرور"
              type="password"
              placeholder="••••••••"
            />

            <Input
              label="تأكيد كلمة المرور"
              type="password"
              placeholder="••••••••"
            />

            <div className="pt-4">
              <Button type="submit" variant="primary" fullWidth size="lg">
                إنشاء الحساب
              </Button>
            </div>

            <p className="text-center text-sm text-[var(--text-secondary)]">
              لديك حساب؟{" "}
              <Link href="/auth/login" className="text-[var(--primary)] font-semibold">
                تسجيل الدخول
              </Link>
            </p>
          </form>
        )}
      </div>
    </PageContainer>
  );
}
