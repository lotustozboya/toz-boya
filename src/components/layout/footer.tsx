import Link from "next/link";
import { Mail, MapPin, Phone, Clock, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { site, telLink, whatsappLink } from "@/lib/site";
import { services } from "@/lib/data/services";
import { cities } from "@/lib/data/cities";

const certifications = [
  "ISO 12944 · C3–C5",
  "ISO 8501-1 · Sa 2.5",
  "ISO 2360 · Mikron Ölçüm",
  "ISO 2409 · Aderans",
  "RAL · Pantone · NCS",
];

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-line-strong)] bg-[var(--color-bg)] mt-24"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site bilgileri
      </h2>

      {/* Certifications strip — top of footer, fully horizontal */}
      <div className="border-b border-[var(--color-line)]">
        <Container className="py-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Standart & Sertifikasyon
          </span>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-muted)] tabular-nums">
            {certifications.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span
                  className="h-px w-3 bg-[var(--color-line-strong)]"
                  aria-hidden
                />
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Logo />
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-sm">
              {site.description}
            </p>
            <div className="flex items-center gap-px mt-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center border border-[var(--color-line)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center border border-[var(--color-line)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Hizmetler</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <FooterLink href={`/hizmetler/${s.slug}`}>
                    {s.shortTitle}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <FooterHeading>Bölgeler</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {cities.map((c) => (
                <li key={c.slug}>
                  <FooterLink href={`/bolgeler/${c.slug}`}>
                    {c.name}
                  </FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/bolgeler">Tüm bölgeler →</FooterLink>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <FooterHeading>İletişim</FooterHeading>
            <ul className="flex flex-col gap-3.5 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-start gap-3">
                <MapPin
                  className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0"
                  strokeWidth={1.5}
                />
                <span className="leading-relaxed">
                  {site.address.street}, {site.address.district} /{" "}
                  {site.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href={telLink()}
                  className="hover:text-[var(--color-text)] transition-colors tabular-nums"
                >
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="h-4 w-4 mt-0.5 text-[var(--color-accent)] shrink-0"
                  strokeWidth={1.5}
                />
                <span className="leading-relaxed">
                  Pzt–Cum {site.hours.weekday}
                  <br />
                  Cmt {site.hours.saturday} · Paz {site.hours.sunday}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link href="/teklif-al">Teklif Al</Link>
              </Button>
              <Button asChild variant="whatsapp" size="sm">
                <a href={whatsappLink()} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[var(--color-line)]">
        <Container className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)] tabular-nums">
            © {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
            <Link
              href="/gizlilik"
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Gizlilik
            </Link>
            <span aria-hidden>·</span>
            <Link
              href="/kvkk"
              className="hover:text-[var(--color-text)] transition-colors"
            >
              KVKK
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text)] mb-5">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
    >
      {children}
    </Link>
  );
}
