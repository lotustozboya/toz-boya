import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/data/faq";

export function FaqSection({
  items,
  eyebrow = "S.S.S.",
  title = "Sıkça sorulan sorular",
  description,
  viewAllHref,
  viewAllLabel = "Tüm sorular",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  /** When set, renders a 'view all' link below the accordion. */
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  return (
    <Section size="md" className="border-t border-[var(--color-line)]">
      <div className="grid lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={
              description ??
              "Aklınıza takılanlar için kısa cevaplar. Sorunuzun yanıtını bulamazsanız bizimle WhatsApp üzerinden iletişime geçebilirsiniz."
            }
          />
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {viewAllLabel} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
