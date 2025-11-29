"use client";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ className = "", variant = "text", width, height }: SkeletonProps) {
  const baseStyles = "bg-[var(--border)] animate-pulse";
  
  const variants = {
    text: "rounded h-4",
    circular: "rounded-full",
    rectangular: "rounded-xl",
  };

  const style = {
    width: width ? (typeof width === "number" ? `${width}px` : width) : undefined,
    height: height ? (typeof height === "number" ? `${height}px` : height) : undefined,
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={style}
    />
  );
}

export function RequestCardSkeleton() {
  return (
    <div className="bg-[var(--surface)] rounded-2xl p-4 flex items-center gap-4">
      <Skeleton variant="circular" width={56} height={56} />
      <div className="flex-1 space-y-2">
        <Skeleton width="60%" height={16} />
        <Skeleton width="80%" height={14} />
        <Skeleton width="40%" height={12} />
      </div>
    </div>
  );
}
