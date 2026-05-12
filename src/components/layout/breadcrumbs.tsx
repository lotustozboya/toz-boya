import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";

interface Crumb {
  href: string;
  label: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Sayfa konumu"
      className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/30"
    >
      <Container className="py-4 flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] overflow-x-auto">
        <Link
          href="/"
          className="hover:text-[var(--color-accent)] whitespace-nowrap"
        >
          Anasayfa
        </Link>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <span key={c.href} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-[var(--color-text-subtle)]" />
              {last ? (
                <span
                  aria-current="page"
                  className="text-[var(--color-text)] font-medium whitespace-nowrap"
                >
                  {c.label}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className="hover:text-[var(--color-accent)] whitespace-nowrap"
                >
                  {c.label}
                </Link>
              )}
            </span>
          );
        })}
      </Container>
    </nav>
  );
}
