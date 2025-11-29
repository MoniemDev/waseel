"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Input, Card } from "@/components/ui";
import { DonorCard } from "@/components/features";

const allDonors = [
  { name: "أحمد محمد", bloodType: "O+" as const, city: "الخرطوم", lastDonation: "منذ 3 أشهر", isAvailable: true },
  { name: "فاطمة علي", bloodType: "A-" as const, city: "الخرطوم", lastDonation: "منذ 4 أشهر", isAvailable: true },
  { name: "محمد إبراهيم", bloodType: "B+" as const, city: "الخرطوم", lastDonation: "منذ شهر", isAvailable: false },
  { name: "سارة أحمد", bloodType: "AB+" as const, city: "الخرطوم", lastDonation: "منذ 5 أشهر", isAvailable: true },
  { name: "عمر حسن", bloodType: "O-" as const, city: "الخرطوم", lastDonation: "منذ 6 أشهر", isAvailable: true },
  { name: "نورا محمد", bloodType: "A+" as const, city: "الخرطوم", lastDonation: "منذ 2 أشهر", isAvailable: false },
];

const bloodTypeFilters = ["الكل", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function HospitalDonorsPage() {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDonors = allDonors.filter(donor => {
    const matchesBloodType = activeFilter === "الكل" || donor.bloodType === activeFilter;
    const matchesSearch = donor.name.includes(searchQuery);
    return matchesBloodType && matchesSearch;
  });

  return (
    <PageContainer withNav={false}>
      <Header 
        title="قاعدة المتبرعين" 
        leftAction={
          <Link href="/hospital" className="text-[var(--primary)] text-sm">رجوع</Link>
        }
      />

      <div className="px-4 py-4 space-y-4">
        {/* Search */}
        <Input
          placeholder="بحث بالاسم..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<span>🔍</span>}
        />

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {bloodTypeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--surface)] text-[var(--text-secondary)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Stats */}
        <Card className="flex justify-around py-3">
          <div className="text-center">
            <p className="text-lg font-bold text-[var(--success)]">{allDonors.filter(d => d.isAvailable).length}</p>
            <p className="text-xs text-[var(--text-secondary)]">متاح</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-[var(--text-tertiary)]">{allDonors.filter(d => !d.isAvailable).length}</p>
            <p className="text-xs text-[var(--text-secondary)]">غير متاح</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-[var(--text-primary)]">{allDonors.length}</p>
            <p className="text-xs text-[var(--text-secondary)]">الإجمالي</p>
          </div>
        </Card>

        {/* Results */}
        <p className="text-sm text-[var(--text-secondary)]">
          {filteredDonors.length} متبرع
        </p>

        {/* Donors List */}
        <div className="space-y-3">
          {filteredDonors.map((donor, index) => (
            <DonorCard key={index} {...donor} onContact={() => {}} />
          ))}
        </div>

        {filteredDonors.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl mb-4 block">👥</span>
            <p className="text-[var(--text-secondary)]">لا يوجد متبرعين بهذه المواصفات</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
