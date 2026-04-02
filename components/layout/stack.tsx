import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StackProps {
  children: ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg" | "xl";
}

export function Stack({
  children,
  className,
  gap = "md",
}: StackProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return (
    <div className={cn("flex flex-col w-full", gapClasses[gap], className)}>
      {children}
    </div>
  );
}
