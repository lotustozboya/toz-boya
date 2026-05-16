import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Process } from "@/components/sections/process";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler · Elektrostatik Toz Boya, Fırın Boya, Jant & Alüminyum Boyama",
  description:
    "Çorlu, Çerkezköy ve Tekirdağ bölgesinde elektrostatik toz boya, fırın boya, vernik kaplama, jant boyama, alüminyum ve paslanmaz çelik boyama ile yüzey ön işleme çözümleri.",
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/hizmetler", label: "Hizmetler" }]} />
      <PageHero
        eyebrow="Hizmetler"
        title="Endüstriyel kaplamada tek çatı altında yedi hizmet"
        description="Elektrostatik toz boya, fırın boya, vernik kaplama, jant boyama, alüminyum ve paslanmaz çelik boyama ile yüzey ön işleme — yüzey hazırlığından kalite kontrolüne kadar tüm aşamaları tek bir tesiste tamamlıyoruz."
      />
      <ServicesGrid />
      <Process />
      <CtaBanner />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: site.url },
          { name: "Hizmetler", url: `${site.url}/hizmetler` },
        ])}
      />
    </>
  );
}
