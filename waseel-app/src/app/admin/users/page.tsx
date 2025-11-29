"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, PageContainer } from "@/components/layout";
import { Input, Card, Badge, Avatar, BloodTypeBadge, Button } from "@/components/ui";

const users = [
  { id: "1", name: "أحمد محمد", phone: "09XXXXXXX1", bloodType: "O+" as const, city: "الخرطوم", role: "donor", status: "active", joinDate: "2024-01-15" },
  { id: "2", name: "فاطمة علي", phone: "09XXXXXXX2", bloodType: "A-" as const, city: "أم درمان", role: "recipient", status: "active", joinDate: "2024-02-20" },
  { id: "3", name: "محمد إبراهيم", phone: "09XXXXXXX3", bloodType: "B+" as const, city: "بحري", role: "donor", status: "inactive", joinDate: "2024-03-10" },
  { id: "4", name: "سارة أحمد", phone: "09XXXXXXX4", bloodType: "AB+" as const, city: "الخرطوم", role: "donor", status: "active", joinDate: "2024-04-05" },
  { id: "5", name: "عمر حسن", phone: "09XXXXXXX5", bloodType: "O-" as const, city: "بورتسودان", role: "recipient", status: "suspended", joinDate: "2024-05-12" },
];

const filters = ["الكل", "متبرعين", "محتاجين", "نشط", "موقوف"];

export default function AdminUsersPage() {
  const [activeFilter, setActiveFilter] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.includes(searchQuery) || user.phone.includes(searchQuery);
    if (activeFilter === "الكل") return matchesSearch;
    if (activeFilter === "متبرعين") return matchesSearch && user.role === "donor";
    if (activeFilter === "محتاجين") return matchesSearch && user.role === "recipient";
    if (activeFilter === "نشط") return matchesSearch && user.status === "active";
    if (activeFilter === "موقوف") return matchesSearch && user.status === "suspended";
    return matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active": return <Badge variant="success">نشط</Badge>;
      case "inactive": return <Badge variant="default">غير نشط</Badge>;
      case "suspended": return <Badge variant="danger">موقوف</Badge>;
      default: return null;
    }
  };

  const getRoleBadge = (role: string) => {
    return role === "donor" 
      ? <Badge variant="info">متبرع</Badge>
      : <Badge variant="warning">محتاج</Badge>;
  };

  return (
    <PageContainer withNav={false}>
      <Header 
        title="إدارة المستخدمين" 
        subtitle={`${users.length} مستخدم`}
        leftAction={
          <Link href="/admin" className="text-[var(--primary)] text-sm">رجوع</Link>
        }
      />

      <div className="px-4 py-4 space-y-4">
        {/* Search */}
        <Input
          placeholder="بحث بالاسم أو رقم الهاتف..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<span>🔍</span>}
        />

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {filters.map((filter) => (
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

        {/* Users List */}
        <div className="space-y-3">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="flex items-center gap-3">
              <div className="relative">
                <Avatar name={user.name} size="md" />
                <div className="absolute -bottom-1 -left-1">
                  <BloodTypeBadge type={user.bloodType} size="sm" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-[var(--text-primary)] truncate">{user.name}</h3>
                  {getRoleBadge(user.role)}
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{user.phone}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-[var(--text-tertiary)]">{user.city}</span>
                  {getStatusBadge(user.status)}
                </div>
              </div>
              <Button variant="ghost" size="sm">
                ⋮
              </Button>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl mb-4 block">👥</span>
            <p className="text-[var(--text-secondary)]">لا يوجد مستخدمين</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
