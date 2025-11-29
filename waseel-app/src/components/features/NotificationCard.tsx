"use client";

import { Card, BloodTypeBadge } from "@/components/ui";

interface NotificationCardProps {
  type: "request" | "match" | "system";
  title: string;
  message: string;
  bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  timeAgo: string;
  isRead: boolean;
  onClick?: () => void;
}

export function NotificationCard({
  type,
  title,
  message,
  bloodType,
  timeAgo,
  isRead,
  onClick,
}: NotificationCardProps) {
  const icons = {
    request: "🩸",
    match: "✅",
    system: "ℹ️",
  };

  return (
    <Card 
      onClick={onClick} 
      className={`flex items-start gap-3 ${!isRead ? "border-r-4 border-[var(--primary)]" : ""}`}
    >
      {bloodType ? (
        <BloodTypeBadge type={bloodType} size="sm" />
      ) : (
        <span className="w-8 h-8 rounded-full bg-[var(--surface-secondary)] flex items-center justify-center text-lg">
          {icons[type]}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <h3 className={`font-semibold ${!isRead ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
          {title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mt-0.5">
          {message}
        </p>
        <p className="text-xs text-[var(--text-tertiary)] mt-1">
          {timeAgo}
        </p>
      </div>
      {!isRead && (
        <span className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2" />
      )}
    </Card>
  );
}
