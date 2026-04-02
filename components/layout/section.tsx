import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  innerClassName?: string;
}

export function Section({
  children,
  className,
  spacing = "xl",
  innerClassName,
}: SectionProps) {
  const spacingClasses = {
    sm: "py-16 md:py-20",
    md: "py-20 md:py-24", 
    lg: "py-24 md:py-32",
    xl: "py-32 md:py-40",
  };

  return (
    <section className={cn("w-full", spacingClasses[spacing], className)}>
      <div className={cn("container-shell", innerClassName)}>{children}</div>
    </section>
  );
}
