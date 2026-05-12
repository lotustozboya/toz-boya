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

// Google Maps embed URL — pinned to the actual Lotus Elektrostatik Boya
// place ID, sourced from Google Maps "Embed a map" share dialog.
const mapsEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24034.29043856892!2d27.7347543743164!3d41.1501036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4e7f082f4717f%3A0x4c95d621e7c6a068!2sLotus%20Elektrostatik%20Boya!5e0!3m2!1str!2str!4v1778618832888!5m2!1str!2str";

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
      <Section size="md" className="section-tint-recess border-t border-[var(--color-line)]">
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
