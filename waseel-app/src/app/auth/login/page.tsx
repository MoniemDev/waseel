"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header, PageContainer } from "@/components/layout";
import { Button, Input, Card } from "@/components/ui";
import { useAuth } from "@/context/AuthContext";
import { demoAccounts } from "@/data/mock";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await login(phone, password);
    
    if (result.success && result.redirect) {
      router.push(result.redirect);
    } else {
      setError(result.error || "حدث خطأ ما");
    }
    
    setIsLoading(false);
  };

  const quickLogin = (accountType: keyof typeof demoAccounts) => {
    const account = demoAccounts[accountType];
    setPhone(account.phone);
    setPassword(account.password);
  };

  return (
    <PageContainer withNav={false}>
      <Header 
        title="تسجيل الدخول" 
        leftAction={
          <Link href="/" className="text-[var(--primary)] text-sm">رجوع</Link>
        }
      />
      
      <div className="px-6 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🩸</span>
          </div>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">مرحباً بعودتك</h2>
          <p className="text-sm text-[var(--text-secondary)]">سجل دخولك للمتابعة</p>
        </div>

        {/* Quick Login Buttons */}
        <Card className="mb-6 bg-[var(--info)]/10 border border-[var(--info)]/20">
          <p className="text-sm font-medium text-[var(--info)] mb-3 text-center">🧪 حسابات تجريبية للاختبار</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => quickLogin("donor")}
              className="px-3 py-2 bg-[var(--surface)] rounded-lg text-xs font-medium hover:bg-[var(--surface-secondary)] transition-colors"
            >
              👤 متبرع
            </button>
            <button
              type="button"
              onClick={() => quickLogin("recipient")}
              className="px-3 py-2 bg-[var(--surface)] rounded-lg text-xs font-medium hover:bg-[var(--surface-secondary)] transition-colors"
            >
              🙋 محتاج
            </button>
            <button
              type="button"
              onClick={() => quickLogin("hospital")}
              className="px-3 py-2 bg-[var(--surface)] rounded-lg text-xs font-medium hover:bg-[var(--surface-secondary)] transition-colors"
            >
              🏥 مستشفى
            </button>
            <button
              type="button"
              onClick={() => quickLogin("admin")}
              className="px-3 py-2 bg-[var(--surface)] rounded-lg text-xs font-medium hover:bg-[var(--surface-secondary)] transition-colors"
            >
              ⚙️ مدير
            </button>
          </div>
        </Card>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-[var(--danger)]/10 border border-[var(--danger)]/20 rounded-xl">
            <p className="text-sm text-[var(--danger)] text-center">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="رقم الهاتف"
            type="tel"
            placeholder="09XXXXXXXX"
            dir="ltr"
            className="text-left"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          
          <Input
            label="كلمة المرور"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex justify-end">
            <Link href="/auth/forgot-password" className="text-sm text-[var(--primary)]">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <Button type="submit" variant="primary" fullWidth size="lg" loading={isLoading}>
            تسجيل الدخول
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[var(--border)]" />
          <span className="text-sm text-[var(--text-tertiary)]">أو</span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-[var(--text-secondary)]">
          ليس لديك حساب؟{" "}
          <Link href="/auth/register" className="text-[var(--primary)] font-semibold">
            إنشاء حساب
          </Link>
        </p>
      </div>
    </PageContainer>
  );
}
