import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { QuoteForm } from "@/components/sections/quote-form";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teklif Al · 24 Saatte Detaylı Fiyat",
  description:
    "Elektrostatik toz boya, fırın boya, vernik kaplama veya yüzey ön işleme için ücretsiz teklif alın. 24 saat içinde detaylı geri dönüş.",
  alternates: { canonical: "/teklif-al" },
};

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/teklif-al", label: "Teklif Al" }]} />
      <PageHero
        eyebrow="Teklif Al"
        title="24 saat içinde ücretsiz teklif"
        description="Hızlı yanıt için aşağıdaki formu doldurun. Bilgileriniz WhatsApp üzerinden bize iletilsin; aynı gün içinde detaylı fiyat ve teslim süresi paylaşalım."
      />
      <Section size="md">
        <QuoteForm />
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: site.url },
          { name: "Teklif Al", url: `${site.url}/teklif-al` },
        ])}
      />
    </>
  );
}
