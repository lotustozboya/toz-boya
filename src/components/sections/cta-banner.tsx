import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Projeniz için ücretsiz teklif alın",
  description = "Parça resminizi veya numunenizi WhatsApp üzerinden iletin; 24 saat içinde detaylı fiyat ve teslim süresi ile geri dönelim.",
}: CtaBannerProps) {
  return (
    <section className="section-tint-recess section-pad-md border-t border-[var(--color-line)]">
      <Container>
        <div className="border border-[var(--color-line-strong)] bg-[var(--color-surface)] grid lg:grid-cols-12">
          <div className="lg:col-span-8 p-5 md:p-10 flex flex-col gap-4 md:gap-5 border-b lg:border-b-0 lg:border-r border-[var(--color-line)]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] tabular-nums">
                01 / Teklif İste
              </span>
              <span
                className="h-px flex-1 bg-[var(--color-line)] max-w-[60px]"
                aria-hidden
              />
            </div>
            <h2 className="h-section text-balance">{title}</h2>
            <p className="text-[var(--color-text-muted)] text-sm md:text-lg leading-relaxed max-w-2xl text-pretty">
              {description}
            </p>
          </div>
          <div className="lg:col-span-4 p-5 md:p-8 grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 justify-center items-center">
            <Button asChild size="lg" className="w-full">
              <Link href="/teklif-al">
                <span className="hidden sm:inline">Teklif Formu</span>
                <span className="sm:hidden">Teklif</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="w-full">
              <a href={whatsappLink()} target="_blank" rel="noopener">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Yaz</span>
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
