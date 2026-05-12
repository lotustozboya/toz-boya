import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { faqs } from "@/lib/data/faq";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular · Elektrostatik Toz Boya",
  description:
    "Elektrostatik toz boya, fırın boya, kumlama, teslim süresi, garanti ve sipariş süreçleri ile ilgili en sık sorulan soruların cevapları.",
  alternates: { canonical: "/sss" },
};

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/sss", label: "S.S.S." }]} />
      <PageHero
        eyebrow="S.S.S."
        title="Sıkça sorulan sorular"
        description="Elektrostatik toz boya, fırın boya ve endüstriyel kaplama hizmetlerimize dair en sık aldığımız soruları derledik."
      />
      <FaqSection items={faqs} />

      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Anasayfa", url: site.url },
            { name: "S.S.S.", url: `${site.url}/sss` },
          ]),
        ]}
      />
    </>
  );
}
