import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export function Grid({
  children,
  className,
  cols = 2,
  gap = "md",
}: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-4 md:gap-6",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
  };

  return (
    <div className={cn("grid w-full", colClasses[cols], gapClasses[gap], className)}>
      {children}
    </div>
  );
}
