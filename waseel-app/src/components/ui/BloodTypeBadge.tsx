"use client";

type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

interface BloodTypeBadgeProps {
  type: BloodType;
  size?: "sm" | "md" | "lg";
}

export function BloodTypeBadge({ type, size = "md" }: BloodTypeBadgeProps) {
  const colors: Record<string, string> = {
    "A+": "bg-[#FF6B6B]",
    "A-": "bg-[#FF8E8E]",
    "B+": "bg-[#4ECDC4]",
    "B-": "bg-[#7EDDD6]",
    "AB+": "bg-[#9B59B6]",
    "AB-": "bg-[#B07CC6]",
    "O+": "bg-[#3498DB]",
    "O-": "bg-[#5DADE2]",
  };

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
  };

  return (
    <div className={`${colors[type]} ${sizes[size]} rounded-full flex items-center justify-center text-white font-bold shadow-md`}>
      {type}
    </div>
  );
}
