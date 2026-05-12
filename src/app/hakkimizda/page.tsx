import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda · 11+ Yıllık Endüstriyel Boya Tecrübesi",
  description:
    "Lotus Boya, Çorlu OSB merkezli tesisinde elektrostatik toz boya, fırın boya ve vernik kaplama hizmeti sunan, 11+ yıllık tecrübeye sahip endüstriyel kaplama firmasıdır.",
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
      "RAL kataloğu ve Jotun renk kodlarını destekliyor, müşterinin uygulama koşuluna özel reçete önerisi geliştiriyoruz.",
  },
];

const facts = [
  { label: "Faaliyette", value: `${site.stats.yearsActive}+ yıl` },
  {
    label: "Proje",
    value: site.stats.projectsDelivered.toLocaleString("tr-TR"),
  },
  {
    label: "Kurumsal müşteri",
    value: `${site.stats.industrialClients}+`,
  },
  { label: "Fırın hattı", value: site.stats.ovenDimensions },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/hakkimizda", label: "Hakkımızda" }]} />
      <PageHero
        eyebrow="Hakkımızda"
        title="Trakya’nın endüstriyel kaplama çözüm ortağı"
        description={`${site.shortName}, 2014’ten bu yana Çorlu Organize Sanayi Bölgesi’nde elektrostatik toz boya, fırın boya ve vernik kaplama hizmeti sunuyor. Bölgenin önde gelen üreticileriyle uzun vadeli ortaklıklar kurduk.`}
      />

      {/* Künye — kompakt teknik şerit */}
      <section
        aria-label="Tesis künyesi"
        className="section-tint-recess border-b border-[var(--color-line-strong)]"
      >
        <Container className="py-8 md:py-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-line)]">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col gap-1.5 ${
                  i === 0 ? "pr-4 md:pl-0 md:pr-6" : "px-4 md:px-6"
                } ${i === facts.length - 1 ? "pl-4 md:pr-0" : ""} ${
                  i >= 2 ? "pt-6 mt-6 md:mt-0 md:pt-0 border-t md:border-t-0 border-[var(--color-line)]" : ""
                }`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
                  {f.label}
                </dt>
                <dd
                  className={`font-display font-semibold tracking-[-0.02em] text-[var(--color-text)] tabular-nums leading-none ${
                    f.value.length > 6 ? "text-[1.05rem] md:text-[1.25rem]" : "text-[1.4rem] md:text-[1.75rem]"
                  }`}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Değerler — endüstriyel hairline grid */}
      <Section size="md">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Çalışma Prensibi"
              title="Üreticinin yanında, kaliteli kaplamanın garantisi"
              description="Kaplama, üretilen parçanın dış dünyaya açılan ilk yüzüdür. Dayanım, görsel kalite ve teslim disipliniyle bu yüzü garanti altına alıyoruz."
              inlineEyebrowOnMobile
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

      <CtaBanner
        title="Tesisimizi yakından görmek ister misiniz?"
        description="Çorlu OSB içindeki fabrikamıza ziyaret talebinizi WhatsApp veya telefon üzerinden iletebilirsiniz."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: site.url },
          { name: "Hakkımızda", url: `${site.url}/hakkimizda` },
        ])}
      />
    </>
  );
}
