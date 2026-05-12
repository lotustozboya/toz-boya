import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "border border-[var(--color-line)] text-[var(--color-text-muted)]",
  outline:
    "border border-[var(--color-line-strong)] text-[var(--color-text)]",
  accent:
    "border border-[var(--color-line-strong)] text-[var(--color-accent)]",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] tabular-nums",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
