import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactInfo } from "@/components/sections/contact-info";
import { QuoteForm } from "@/components/sections/quote-form";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim · Çorlu Tekirdağ Elektrostatik Toz Boya",
  description:
    "Lotus Boya iletişim bilgileri: adres, telefon, WhatsApp. Hatip Mahallesi, Akasma Sokak — Çorlu / Tekirdağ.",
  alternates: { canonical: "/iletisim" },
};

const mapsEmbed =
  "https://www.google.com/maps?q=Hatip+Mahallesi+Akasma+Sokak+H+Blok+No+4CA+%C3%87orlu+Tekirda%C4%9F&z=15&output=embed";

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/iletisim", label: "İletişim" }]} />

      <PageHero
        eyebrow="İletişim"
        title="Bizimle doğrudan iletişime geçin"
        description="Telefon, WhatsApp veya formdan ulaşabilirsiniz."
      />

      {/* Bilgi + Konum — tek bir bütün blok, yan yana iki kolon */}
      <Section size="md">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] lg:aspect-[5/4] overflow-hidden border border-[var(--color-line-strong)]">
              <iframe
                title={`${site.name} konumu`}
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[35%] contrast-110"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Teklif formu — sayfanın conversion noktası */}
      <Section size="md" className="border-t border-[var(--color-line)]">
        <QuoteForm />
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: site.url },
          { name: "İletişim", url: `${site.url}/iletisim` },
        ])}
      />
    </>
  );
}
