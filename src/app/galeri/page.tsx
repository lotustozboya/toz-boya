import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { gallery } from "@/lib/data/gallery";
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
        <div className="grid gap-px bg-[var(--color-line)] border border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <figure
              key={item.title + i}
              className="group relative aspect-[4/3] overflow-hidden bg-[var(--color-bg)]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] tabular-nums">
                  {String(i + 1).padStart(2, "0")} · {item.category}
                </span>
                <h2 className="mt-1.5 font-display text-base font-semibold text-white leading-snug">
                  {item.title}
                </h2>
              </figcaption>
            </figure>
          ))}
        </div>
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
