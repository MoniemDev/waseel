"use client";

import { Card, Avatar, BloodTypeBadge, Badge, Button } from "@/components/ui";

interface DonorCardProps {
  name: string;
  bloodType: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  city: string;
  lastDonation?: string;
  isAvailable: boolean;
  onContact?: () => void;
}

export function DonorCard({
  name,
  bloodType,
  city,
  lastDonation,
  isAvailable,
  onContact,
}: DonorCardProps) {
  return (
    <Card className="flex items-center gap-4">
      <div className="relative">
        <Avatar name={name} size="lg" />
        <div className="absolute -bottom-1 -left-1">
          <BloodTypeBadge type={bloodType} size="sm" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-[var(--text-primary)]">{name}</h3>
          <Badge variant={isAvailable ? "success" : "default"} size="sm">
            {isAvailable ? "متاح" : "غير متاح"}
          </Badge>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">{city}</p>
        {lastDonation && (
          <p className="text-xs text-[var(--text-tertiary)] mt-1">
            آخر تبرع: {lastDonation}
          </p>
        )}
      </div>
      {isAvailable && onContact && (
        <Button variant="primary" size="sm" onClick={onContact}>
          تواصل
        </Button>
      )}
    </Card>
  );
}
