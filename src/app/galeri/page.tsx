import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { gallery } from "@/lib/data/gallery";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galeri · Endüstriyel Kaplama Projelerimiz",
  description:
    "Çorlu, Çerkezköy ve Tekirdağ’daki kurumsal müşterilerimiz için tamamladığımız elektrostatik toz boya, fırın boya ve vernik kaplama projelerinden örnekler.",
  alternates: { canonical: "/galeri" },
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/galeri", label: "Galeri" }]} />
      <PageHero
        eyebrow="Galeri"
        title="Sahadaki işlerimiz"
        description="Endüstriyel kaplama projelerimizden bir kesit. Her bir görsel, kendi tesisimizde tamamlanmış ve müşteriye teslim edilmiş bir uygulamayı temsil eder."
      />

      <Section size="md">
        <GalleryGrid items={gallery} />
      </Section>

      <CtaBanner />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: site.url },
          { name: "Galeri", url: `${site.url}/galeri` },
        ])}
      />
    </>
  );
}
