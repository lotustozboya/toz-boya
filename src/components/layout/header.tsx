"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navigation, site, telLink, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "section-tint-raised sticky top-0 z-50 w-full border-b border-[var(--color-line-strong)] transition-shadow duration-200",
        scrolled && "shadow-[0_1px_0_0_var(--color-line)]",
      )}
    >
      <Container className="flex h-16 md:h-[72px] items-center justify-between">
        <Logo />

        <nav
          aria-label="Ana menü"
          className="hidden lg:flex items-center gap-1"
        >
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                  active
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href={telLink()} aria-label="Bizi arayın">
              <Phone className="h-4 w-4" />
              <span className="font-medium tabular-nums tracking-tight">
                {site.contact.phoneDisplay}
              </span>
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/teklif-al">Teklif Al</Link>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-1">
          <Button asChild variant="ghost" size="icon" aria-label="Telefon">
            <a href={telLink()}>
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-md text-[var(--color-text)] hover:bg-[var(--color-surface-2)] transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 z-40 origin-top transition-all duration-300 ease-out",
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none",
        )}
      >
        <div className="bg-[var(--color-bg)] border-b border-[var(--color-line)] shadow-2xl">
          <Container className="py-4 flex flex-col gap-1">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-3 px-3 text-[15px] font-medium transition-colors",
                    active
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-accent)]",
                  )}
                >
                  {active && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-[var(--color-accent)]"
                      aria-hidden
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
            <div className="grid grid-cols-2 gap-2 pt-3 mt-2 border-t border-[var(--color-line)]">
              <Button asChild variant="whatsapp" size="md">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="md">
                <Link href="/teklif-al">Teklif Al</Link>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
