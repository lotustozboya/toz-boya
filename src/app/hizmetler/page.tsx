import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Process } from "@/components/sections/process";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetler · Elektrostatik Toz Boya & Endüstriyel Kaplama",
  description:
    "Çorlu, Çerkezköy ve Tekirdağ bölgesindeki üreticilere elektrostatik toz boya, fırın boya, vernik kaplama ve yüzey ön işleme çözümleri.",
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/hizmetler", label: "Hizmetler" }]} />
      <PageHero
        eyebrow="Hizmetler"
        title="Endüstriyel kaplamada tek çatı altında dört hizmet"
        description="Yüzey hazırlığından polimerizasyona, vernik kaplamadan kalite kontrolüne kadar tüm aşamaları tek bir tesiste tamamlıyoruz."
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
