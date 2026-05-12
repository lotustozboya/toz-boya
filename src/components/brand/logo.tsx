import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Lotus Boya — primary brand mark.
 *
 * Variants:
 *   variant="full"  → mark + wordmark stacked horizontally (header use)
 *   variant="mark"  → monogram alone (compact contexts, mobile, favicons)
 */
export function Logo({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "mark";
}) {
  return (
    <Link
      href="/"
      aria-label={site.name}
      className={cn(
        "group inline-flex items-center gap-3",
        className,
      )}
    >
      <Mark className="h-9 w-9 text-[var(--color-text)] shrink-0" />

      {variant === "full" && (
        <>
          <span
            className="hidden sm:block h-7 w-px bg-[var(--color-line-strong)]"
            aria-hidden
          />
          <span className="flex flex-col leading-none">
            <span className="font-display font-semibold tracking-[0.06em] text-[var(--color-text)] text-[15px] uppercase">
              Lotus Boya
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-text-subtle)] mt-1.5">
              Elektrostatik Boya
            </span>
          </span>
        </>
      )}
    </Link>
  );
}

/**
 * LB monogram — orijinal logodan SVG'ye dönüştürülmüş.
 * 200×200 grid, klasik serif L + iki odalı serif B,
 * aralarında 45° interlocking V-notch.
 *
 * Color: currentColor — light/dark her iki ortamda çalışır.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* L harfi — serif stem + foot + sağ alt 45° pah */}
      <path d="
        M 4 14
        L 4 4
        L 50 4
        L 50 14
        L 36 14
        L 36 158
        L 96 158
        L 76 178
        L 76 192
        L 4 192
        L 4 178
        L 18 178
        L 18 14
        Z
      " />

      {/* B harfi — iki odalı serif + sol alt 45° pah */}
      <path d="
        M 84 4
        L 130 4
        Q 158 4 158 48
        Q 158 78 138 90
        L 138 92
        Q 168 100 168 142
        Q 168 192 132 192
        L 104 192
        L 84 172
        Z

        M 116 24
        L 124 24
        Q 142 24 142 50
        Q 142 80 124 80
        L 116 80
        Z

        M 116 116
        L 124 116
        Q 152 116 152 144
        Q 152 172 124 172
        L 116 172
        Z
      " />
    </svg>
  );
}
