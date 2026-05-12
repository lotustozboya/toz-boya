import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { City, CityRichContent } from "@/lib/data/cities";
import { telLink, whatsappLink, site } from "@/lib/site";

interface Props {
  city: City;
  rich: CityRichContent;
}

export function CityRich({ city, rich }: Props) {
  const inPageNav = [
    { id: "hizmetler", label: "Hizmetler" },
    { id: "neden-biz", label: "Neden biz?" },
    { id: "bolgeler", label: "Bölgeler" },
    { id: "rota", label: "Ulaşım" },
    { id: "referans", label: "Referans" },
    { id: "sss", label: `${city.name} S.S.S.` },
  ];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="absolute inset-0 bg-grid opacity-[0.4]" aria-hidden />
        <Container className="relative pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <span className="eyebrow">
                {city.province} · Yerel Hizmet Bölgesi
              </span>
              <h1 className="h-page text-balance">
                {city.name} Toz Boya — Elektrostatik Toz Boya & Metal Boyama
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl text-pretty">
                {rich.lede}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                <Button asChild size="xl" className="w-full sm:w-auto">
                  <Link href="/teklif-al">
                    {city.name} İçin Ücretsiz Teklif{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="whatsapp"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <a
                    href={whatsappLink(
                      `Merhaba, ${city.name} bölgesinden ${rich.primaryKeyword.toLowerCase()} hizmeti için teklif almak istiyorum.`,
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    WhatsApp ile yaz
                  </a>
                </Button>
                <Button asChild variant="ghost" size="xl">
                  <a href={telLink()}>{site.contact.phoneDisplay}</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <dl className="border border-[var(--color-line-strong)]">
                {city.highlights.map((h, i) => (
                  <div
                    key={h.label}
                    className={`flex items-baseline justify-between gap-4 px-5 py-4 ${
                      i > 0 ? "border-t border-[var(--color-line)]" : ""
                    }`}
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
                      {h.label}
                    </dt>
                    <dd className="font-display text-base font-semibold text-[var(--color-text)] tabular-nums">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── IN-PAGE NAV ─────────────────────────────── */}
      <nav
        aria-label="Sayfa içi gezinti"
        className="sticky top-16 md:top-[72px] z-30 border-b border-[var(--color-line)] bg-[var(--color-bg)]/92 backdrop-blur-md"
      >
        <Container className="overflow-x-auto">
          <ul className="flex items-center gap-1 py-2 min-w-max">
            {inPageNav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="px-3 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* ─── TRUST SIGNALS GRID ──────────────────────── */}
      <Section size="md" id="neden-biz" className="section-tint-recess border-t border-[var(--color-line)]">
        <SectionHeader
          eyebrow={`${city.name} için yerel güven`}
          title={`${city.name}’da neden Lotus Elektrostatik Boya?`}
          description={`${city.name} bölgesindeki üreticilerin tedarikçi seçimini yaparken sorduğu en kritik soruları, somut verilerle yanıtlıyoruz.`}
        />

        <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {rich.trustSignals.map((s, i) => (
            <div
              key={s.label}
              className="p-6 md:p-7 flex flex-col gap-3 border-r border-b border-[var(--color-line)]"
            >
              <span className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-[var(--color-text-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base font-semibold text-[var(--color-text)] mt-1">
                {s.label}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── LONG-FORM SECTIONS + SIDEBAR ────────────── */}
      <Section size="md" id="hizmetler" className="border-t border-[var(--color-line)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <article className="lg:col-span-8 flex flex-col gap-14">
            {rich.sections.map((s, i) => (
              <div key={s.heading} className="flex flex-col gap-4">
                {i === 0 && <span className="eyebrow">Detay</span>}
                <h2 className="h-section text-balance">{s.heading}</h2>
                {s.body.map((p, j) => (
                  <p
                    key={j}
                    className="text-[var(--color-text-muted)] text-base md:text-[17px] leading-relaxed text-pretty"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>

          <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[var(--color-line-strong)] p-6 bg-[var(--color-surface)]">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Hızlı İletişim
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {city.name} içindeki firmalar için ortalama yanıt süremiz mesai
                saatlerinde 30 dakikanın altındadır.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Button asChild size="md">
                  <Link href="/teklif-al">Teklif Al</Link>
                </Button>
                <Button asChild variant="whatsapp" size="md">
                  <a
                    href={whatsappLink(
                      `Merhaba, ${city.name} bölgesinden teklif almak istiyorum.`,
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    WhatsApp ile yaz
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* ─── NEIGHBORHOODS / SUB-ZONES ──────────────── */}
      <Section size="md" id="bolgeler" className="section-tint-recess border-t border-[var(--color-line)]">
        <SectionHeader
          eyebrow={`${city.name} sanayi bölgeleri`}
          title="Hizmet verdiğimiz alt bölgeler"
          description={`${city.name} ilçesi içindeki organize sanayi bölgeleri ve sanayi alt mevkilerine düzenli toplama–teslim seferimiz mevcuttur.`}
        />
        <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {rich.neighborhoods.map((n) => (
            <div
              key={n.name}
              className="p-6 md:p-7 flex flex-col gap-3 border-r border-b border-[var(--color-line)]"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[var(--color-accent)]" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                  {n.name}
                </h3>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {n.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── ROUTE / DRIVE-TIME MATRIX ──────────────── */}
      <Section size="md" id="rota" className="border-t border-[var(--color-line)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Ulaşım & Mesafe"
              title={`${city.name} içinden tesisimize ulaşım süreleri`}
              description={`Tesisimiz ${city.name} OSB içinde konumlanmıştır. Aşağıdaki süreler trafik dışı koşullarda ortalama tek yön süresidir.`}
            />
          </div>
          <div className="lg:col-span-8">
            <ul className="border-t border-[var(--color-line-strong)]">
              {rich.routes.map((r, i) => (
                <li
                  key={r.to}
                  className="grid grid-cols-12 gap-3 md:gap-4 items-baseline border-b border-[var(--color-line)] py-4 md:py-5"
                >
                  <span className="col-span-1 font-mono text-[10px] tabular-nums tracking-[0.16em] text-[var(--color-text-subtle)] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-8 md:col-span-9 flex flex-col gap-1 min-w-0">
                    <span className="text-sm md:text-[15px] font-medium text-[var(--color-text)]">
                      {r.from}{" "}
                      <span className="text-[var(--color-text-subtle)] mx-1">
                        →
                      </span>{" "}
                      {r.to}
                    </span>
                    {r.note && (
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {r.note}
                      </span>
                    )}
                  </div>
                  <span className="col-span-3 md:col-span-2 text-right font-mono text-sm tabular-nums font-semibold text-[var(--color-accent)] whitespace-nowrap">
                    {r.minutes} dk
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ─── SECTORS SERVED ─────────────────────────── */}
      <Section size="sm" className="section-tint-raised border-t border-[var(--color-line)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-baseline">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="eyebrow">Hizmet Verdiğimiz Sektörler</span>
            <h2 className="h-section text-balance">
              {city.name}’daki üreticilerin %80’i bu sektörlerden geliyor
            </h2>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-[var(--color-line)]">
            {rich.sectors.map((s, i) => (
              <li
                key={s}
                className={`flex items-center gap-3 py-3 border-b border-[var(--color-line)] ${
                  i % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"
                }`}
              >
                <span
                  className="font-mono text-[10px] tabular-nums tracking-[0.16em] text-[var(--color-text-subtle)] w-6"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[var(--color-text)]">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ─── LOCAL TESTIMONIAL ─────────────────────── */}
      {rich.testimonial && (
        <Section size="md" id="referans" className="section-tint-recess border-t border-[var(--color-line)]">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="eyebrow">{city.name} Referansı</span>
            </div>
            <div className="lg:col-span-9">
              <blockquote className="text-2xl md:text-[1.9rem] leading-[1.3] tracking-[-0.015em] text-[var(--color-text)] font-display font-semibold text-balance">
                “{rich.testimonial.quote}”
              </blockquote>
              <footer className="mt-8 pt-6 border-t border-[var(--color-line)] flex flex-col gap-1.5">
                <span className="text-base font-semibold text-[var(--color-text)]">
                  {rich.testimonial.role}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {rich.testimonial.sector}
                </span>
              </footer>
            </div>
          </div>
        </Section>
      )}

      {/* ─── LOCAL FAQ ──────────────────────────────── */}
      <Section size="md" id="sss" className="border-t border-[var(--color-line)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow={`${city.name} S.S.S.`}
              title={`${city.name}’da toz boya hakkında sıkça sorulanlar`}
              description={`${city.name} içindeki üreticilerden en sık aldığımız soruları derledik. Aradığınız yanıt yoksa WhatsApp üzerinden iletişime geçebilirsiniz.`}
            />
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {rich.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* ─── CLOSER CTA ─────────────────────────────── */}
      <CtaBanner
        title={`${city.name}’da kaplama ihtiyacınız mı var?`}
        description={`Parça resminizi ya da teknik şartnamenizi WhatsApp üzerinden iletin; ${city.name} içindeki firmalar için aynı gün geri dönüş sağlıyoruz.`}
      />
    </>
  );
}
