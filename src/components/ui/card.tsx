import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
}

// Single padding scale: pad-sm = 24px, pad-md = 28px (default), pad-lg = 32px.
// Use the same names everywhere; never hand-roll p-* on cards.
export function CardBody({
  className,
  pad = "md",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  pad?: "sm" | "md" | "lg";
}) {
  const padding = {
    sm: "p-6",
    md: "p-7",
    lg: "p-8",
  }[pad];
  return <div className={cn(padding, className)} {...props} />;
}
