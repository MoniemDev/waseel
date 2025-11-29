"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[var(--primary)] to-[#B71C1C)]">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-sm">
          <span className="text-5xl">🩸</span>
        </div>
        <h1 className="text-4xl font-bold mb-3">وصيل</h1>
        <p className="text-lg opacity-90 mb-2">منصة التبرع بالدم السودانية</p>
        <p className="text-sm opacity-75 max-w-xs">
          نوصل المتبرعين بالمحتاجين في نفس المدينة بأسرع وقت
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-8 py-6 text-white">
        <div className="text-center">
          <p className="text-2xl font-bold">+500</p>
          <p className="text-xs opacity-75">متبرع</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">+200</p>
          <p className="text-xs opacity-75">حالة تم إنقاذها</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">15</p>
          <p className="text-xs opacity-75">مدينة</p>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-[var(--surface)] rounded-t-[2rem] p-6 space-y-3 safe-bottom">
        <Link href="/auth/register">
          <Button variant="primary" fullWidth size="lg">
            إنشاء حساب جديد
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button variant="outline" fullWidth size="lg" className="border-[var(--primary)] text-[var(--primary)]">
            تسجيل الدخول
          </Button>
        </Link>
        <p className="text-center text-xs text-[var(--text-tertiary)] pt-2">
          بالمتابعة، أنت توافق على{" "}
          <Link href="/terms" className="text-[var(--primary)]">شروط الاستخدام</Link>
          {" "}و{" "}
          <Link href="/privacy" className="text-[var(--primary)]">سياسة الخصوصية</Link>
        </p>
      </div>
    </div>
  );
}
