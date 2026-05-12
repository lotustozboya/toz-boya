import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stats } from "@/components/sections/stats";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda · 11+ Yıllık Endüstriyel Boya Tecrübesi",
  description:
    "Lotus Elektrostatik Boya, Çorlu OSB merkezli tesisinde elektrostatik toz boya ve fırın boya çözümleri sunan, 11+ yıllık tecrübeye sahip endüstriyel kaplama firmasıdır.",
  alternates: { canonical: "/hakkimizda" },
};

const values = [
  {
    title: "Kalitede tutarlılık",
    detail:
      "İlk parçadan binincisine kadar aynı film kalınlığı, aynı renk, aynı dayanım. Süreç standartları ile garanti altına alınmıştır.",
  },
  {
    title: "Şeffaf raporlama",
    detail:
      "Her teslimle birlikte mikron, parlaklık, aderans ölçüm raporu paylaşırız. Müşteri kalite kontrol süreçlerinin parçası oluruz.",
  },
  {
    title: "Bölgesel sorumluluk",
    detail:
      "Çorlu, Çerkezköy ve Tekirdağ’da uzun vadeli ortaklık ilişkileri kurarız. İhtiyaç anında saha ekibimiz yanınızdadır.",
  },
  {
    title: "Mühendislik desteği",
    detail:
      "Standart RAL renklerinin ötesinde, müşterinin uygulama koşuluna özel reçete önerisi geliştiriyoruz.",
  },
];

const milestones = [
  { year: "2014", text: "Çorlu OSB’de tesis kuruluşu" },
  { year: "2017", text: "5 kademeli ön işlem hattının devreye alınması" },
  { year: "2019", text: "6m konveyörlü pişirme fırını yatırımı" },
  { year: "2022", text: "ISO 12944 antikorozif sistem sertifikasyonu" },
  { year: "2024", text: "Aylık kapasite 25.000 m²’ye ulaştı" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/hakkimizda", label: "Hakkımızda" }]} />
      <PageHero
        eyebrow="Hakkımızda"
        title="Trakya’nın endüstriyel kaplama çözüm ortağı"
        description={`${site.shortName}, 2014’ten bu yana Çorlu Organize Sanayi Bölgesi’nde elektrostatik toz boya, fırın boya ve antikorozif kaplama hizmeti sunuyor. Bölgenin önde gelen üreticileriyle uzun vadeli ortaklıklar kurduk.`}
      />

      <Stats />

      <Section size="md" className="border-t border-[var(--color-line)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Misyon"
              title="Üreticinin yanında, kaliteli kaplamanın garantisi"
              description="Endüstriyel üretimde kaplama, ürünün dış dünyaya açılan ilk yüzüdür. Görünüş, dayanım ve marka algısı doğrudan kaplama kalitesine bağlıdır."
            />
          </div>
          <div className="lg:col-span-8 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="p-6 md:p-7 flex flex-col gap-3 border-r border-b border-[var(--color-line)]"
              >
                <span className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-[var(--color-text-subtle)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold text-[var(--color-text)] mt-1">
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {v.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section size="md" className="border-t border-[var(--color-line)]">
        <SectionHeader
          eyebrow="Yolculuğumuz"
          title="11 yıllık üretim hattı"
        />
        <ol className="mt-14 border-t border-[var(--color-line-strong)]">
          {milestones.map((m, i) => (
            <li
              key={m.year}
              className="grid grid-cols-12 gap-4 md:gap-8 items-baseline border-b border-[var(--color-line)] py-6"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-[10px] tabular-nums tracking-[0.16em] text-[var(--color-text-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-3 md:col-span-2 font-display tabular-nums text-xl md:text-2xl font-semibold text-[var(--color-text)] tracking-[-0.02em]">
                {m.year}
              </span>
              <p className="col-span-12 md:col-span-9 col-start-3 md:col-start-auto text-base md:text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                {m.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBanner />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: site.url },
          { name: "Hakkımızda", url: `${site.url}/hakkimizda` },
        ])}
      />
    </>
  );
}
