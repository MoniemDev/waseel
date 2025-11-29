"use client";

interface AvatarProps {
  name: string;
  image?: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ name, image, size = "md" }: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-lg",
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`${sizes[size]} rounded-full object-cover`}
      />
    );
  }

  return (
    <div className={`${sizes[size]} rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-semibold flex items-center justify-center`}>
      {initials}
    </div>
  );
}
