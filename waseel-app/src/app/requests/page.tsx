"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, PageContainer, BottomNav } from "@/components/layout";
import { Button, Badge } from "@/components/ui";
import { RequestCard } from "@/components/features";

const allRequests = [
  {
    id: "1",
    bloodType: "O+" as const,
    city: "الخرطوم",
    hospital: "مستشفى الخرطوم التعليمي",
    urgency: "عاجل" as const,
    unitsNeeded: 3,
    timeAgo: "منذ 5 دقائق",
  },
  {
    id: "2",
    bloodType: "A-" as const,
    city: "أم درمان",
    hospital: "مستشفى أم درمان",
    urgency: "متوسط" as const,
    unitsNeeded: 2,
    timeAgo: "منذ 15 دقيقة",
  },
  {
    id: "3",
    bloodType: "B+" as const,
    city: "بحري",
    hospital: "مستشفى بحري",
    urgency: "عادي" as const,
    unitsNeeded: 1,
    timeAgo: "منذ ساعة",
  },
  {
    id: "4",
    bloodType: "AB+" as const,
    city: "الخرطوم",
    hospital: "مستشفى سوبا الجامعي",
    urgency: "عاجل" as const,
    unitsNeeded: 4,
    timeAgo: "منذ 30 دقيقة",
  },
  {
    id: "5",
    bloodType: "O-" as const,
    city: "بورتسودان",
    hospital: "مستشفى بورتسودان",
    urgency: "عاجل" as const,
    unitsNeeded: 2,
    timeAgo: "منذ ساعتين",
  },
];

const bloodTypeFilters = ["الكل", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function RequestsPage() {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filteredRequests = activeFilter === "الكل" 
    ? allRequests 
    : allRequests.filter(r => r.bloodType === activeFilter);

  return (
    <PageContainer>
      <Header 
        title="طلبات الدم" 
        rightAction={
          <Link href="/requests/new">
            <Button variant="primary" size="sm">+ طلب جديد</Button>
          </Link>
        }
      />

      <div className="px-4 py-4 space-y-4">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
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

        {/* Results count */}
        <p className="text-sm text-[var(--text-secondary)]">
          {filteredRequests.length} طلب متاح
        </p>

        {/* Requests List */}
        <div className="space-y-3">
          {filteredRequests.map((request) => (
            <Link key={request.id} href={`/requests/${request.id}`}>
              <RequestCard {...request} />
            </Link>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-[var(--text-secondary)]">لا توجد طلبات بهذه الفصيلة</p>
          </div>
        )}
      </div>

      <BottomNav />
    </PageContainer>
  );
}
