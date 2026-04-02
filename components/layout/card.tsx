import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  hoverable = true,
  padding = "md",
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg",
        "shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_16px_40px_rgba(0,0,0,0.2)]",
        hoverable && "transition-transform hover:-translate-y-1",
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
