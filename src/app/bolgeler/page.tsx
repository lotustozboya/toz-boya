import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Regions } from "@/components/sections/regions";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri · Çorlu, Çerkezköy, Velimeşe, Ergene, Tekirdağ",
  description:
    "Lotus Boya, Çorlu OSB merkezli tesisinden Çerkezköy, Velimeşe, Ergene, Kapaklı, Tekirdağ, Marmara Ereğlisi ve Silivri’ye endüstriyel kaplama hizmeti sunar.",
  alternates: { canonical: "/bolgeler" },
};

export default function RegionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/bolgeler", label: "Bölgeler" }]} />
      <PageHero
        eyebrow="Hizmet Bölgeleri"
        title="Trakya’nın endüstriyel üretim merkezlerinde yanınızdayız"
        description="Çorlu OSB içindeki tesisimizden bölgenin tüm sanayi noktalarına bölge içi nakliye, planlı sefer ve acil teslim hizmeti."
      />
      <Regions />
      <CtaBanner />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: site.url },
          { name: "Bölgeler", url: `${site.url}/bolgeler` },
        ])}
      />
    </>
  );
}
