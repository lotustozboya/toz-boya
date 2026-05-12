import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bleed?: boolean;
  size?: "sm" | "md" | "lg";
  as?: "section" | "div" | "article";
}

// Single source of truth — maps to the section-pad-* utilities in globals.css.
const sizeClasses: Record<NonNullable<SectionProps["size"]>, string> = {
  sm: "section-pad-sm",
  md: "section-pad-md",
  lg: "section-pad-lg",
};

export function Section({
  className,
  bleed,
  size = "md",
  as: Tag = "section",
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(sizeClasses[size], className)} {...props}>
      {bleed ? children : <Container>{children}</Container>}
    </Tag>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  /**
   * Compact mobile layout: eyebrow inlines with the H2 (single row, no stack).
   * Desktop unchanged. Saves ~28px of vertical stack on mobile.
   */
  inlineEyebrowOnMobile?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: TitleTag = "h2",
  inlineEyebrowOnMobile,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3 md:gap-5 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className,
      )}
    >
      {eyebrow && !inlineEyebrowOnMobile && (
        <span className="eyebrow">{eyebrow}</span>
      )}

      {eyebrow && inlineEyebrowOnMobile ? (
        <>
          {/* Mobile: eyebrow + title share a row, separated by a center dot */}
          <div className="flex md:hidden items-baseline gap-3 flex-wrap">
            <span className="eyebrow shrink-0">{eyebrow}</span>
            <span
              className="h-px w-3 bg-[var(--color-line-strong)] self-center"
              aria-hidden
            />
            <TitleTag className="font-display text-[20px] font-semibold tracking-[-0.015em] text-[var(--color-text)] leading-[1.15]">
              {title}
            </TitleTag>
          </div>
          {/* Desktop: standard stacked H2 */}
          <TitleTag className="hidden md:block h-section text-balance">
            {title}
          </TitleTag>
        </>
      ) : (
        <TitleTag className="h-section text-balance">{title}</TitleTag>
      )}

      {description && (
        <p
          className={cn(
            "text-[var(--color-text-muted)] text-sm md:text-lg leading-relaxed text-pretty max-w-2xl",
            inlineEyebrowOnMobile && "hidden md:block",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
