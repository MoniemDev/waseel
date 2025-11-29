"use client";

import { Card } from "@/components/ui";

interface StatsCardProps {
  icon: string;
  value: string | number;
  label: string;
  trend?: { value: number; isPositive: boolean };
}

export function StatsCard({ icon, value, label, trend }: StatsCardProps) {
  return (
    <Card className="text-center">
      <span className="text-3xl mb-2 block">{icon}</span>
      <p className="text-2xl font-bold text-[var(--text-primary)]">{value}</p>
      <p className="text-sm text-[var(--text-secondary)]">{label}</p>
      {trend && (
        <p className={`text-xs mt-1 ${trend.isPositive ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
          {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
        </p>
      )}
    </Card>
  );
}
