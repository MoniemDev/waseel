"use client";

import { Card, Badge, BloodTypeBadge } from "@/components/ui";

interface RequestCardProps {
  id: string;
  bloodType: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  city: string;
  hospital: string;
  urgency: "عاجل" | "متوسط" | "عادي";
  unitsNeeded: number;
  timeAgo: string;
  onClick?: () => void;
}

export function RequestCard({
  bloodType,
  city,
  hospital,
  urgency,
  unitsNeeded,
  timeAgo,
  onClick,
}: RequestCardProps) {
  const urgencyVariant = {
    "عاجل": "danger",
    "متوسط": "warning",
    "عادي": "info",
  } as const;

  return (
    <Card onClick={onClick} className="flex items-center gap-4">
      <BloodTypeBadge type={bloodType} size="lg" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-[var(--text-primary)]">
            مطلوب {unitsNeeded} وحدة
          </h3>
          <Badge variant={urgencyVariant[urgency]} size="sm">
            {urgency}
          </Badge>
        </div>
        <p className="text-sm text-[var(--text-secondary)] truncate">
          {hospital} • {city}
        </p>
        <p className="text-xs text-[var(--text-tertiary)] mt-1">
          {timeAgo}
        </p>
      </div>
      <span className="text-[var(--text-tertiary)] text-xl">←</span>
    </Card>
  );
}
