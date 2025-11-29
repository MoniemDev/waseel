"use client";

import Link from "next/link";
import { Button } from "@/components/ui";
import { BloodDropIcon } from "@/components/icons";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[var(--primary)] to-[#B71C1C]">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center text-white">
        {/* Logo with blur effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white/20 rounded-[2rem] blur-2xl scale-150" />
          <div className="relative w-28 h-28 bg-white/15 backdrop-blur-sm rounded-[2rem] flex items-center justify-center border border-white/20">
            <BloodDropIcon size={56} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 tracking-tight">وصيل</h1>
        <p className="text-xl opacity-90 mb-2 font-medium">منصة التبرع بالدم السودانية</p>
        <p className="text-base opacity-70 max-w-xs leading-relaxed">
          نوصل المتبرعين بالمحتاجين في نفس المدينة بأسرع وقت
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-12 py-8 text-white">
        <div className="text-center">
          <p className="text-3xl font-bold">+500</p>
          <p className="text-sm opacity-70 mt-1">متبرع</p>
        </div>
        <div className="w-px bg-white/20" />
        <div className="text-center">
          <p className="text-3xl font-bold">+200</p>
          <p className="text-sm opacity-70 mt-1">حالة تم إنقاذها</p>
        </div>
        <div className="w-px bg-white/20" />
        <div className="text-center">
          <p className="text-3xl font-bold">15</p>
          <p className="text-sm opacity-70 mt-1">مدينة</p>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-[var(--surface)] rounded-t-[2.5rem] px-6 pt-8 pb-6 safe-bottom shadow-2xl">
        <div className="space-y-4 max-w-sm mx-auto">
          <Link href="/auth/register" className="block">
            <Button variant="primary" fullWidth size="lg">
              إنشاء حساب جديد
            </Button>
          </Link>
          
          <Link href="/auth/login" className="block">
            <Button variant="outline" fullWidth size="lg">
              تسجيل الدخول
            </Button>
          </Link>
        </div>
        
        <p className="text-center text-xs text-[var(--text-tertiary)] pt-6 max-w-xs mx-auto leading-relaxed">
          بالمتابعة، أنت توافق على{" "}
          <Link href="/terms" className="text-[var(--primary)]">شروط الاستخدام</Link>
          {" "}و{" "}
          <Link href="/privacy" className="text-[var(--primary)]">سياسة الخصوصية</Link>
        </p>
      </div>
    </div>
  );
}
