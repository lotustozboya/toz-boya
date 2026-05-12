import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CityRich } from "@/components/sections/city-rich";
import { cities, getCity } from "@/lib/data/cities";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  localServiceSchema,
} from "@/components/seo/json-ld";
import { site, whatsappLink } from "@/lib/site";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  // Rich (locally-optimised) cities get a keyword-tuned title pattern.
  if (city.rich) {
    return {
      title: `${city.name} Toz Boya · Elektrostatik Toz Boya & Metal Boyama`,
      description: `${city.name}’da elektrostatik toz boya, fırın boya ve metal boyama. ${city.name} OSB içinde 11+ yıllık tesis, ISO 12944 sertifikalı, 48 saatte acil teslim. Ücretsiz teklif için arayın.`,
      keywords: [
        city.rich.primaryKeyword,
        ...city.rich.secondaryKeywords,
        "toz boya",
        "metal boyama",
        "fırın boya",
      ],
      alternates: { canonical: `/bolgeler/${slug}` },
      openGraph: {
        title: `${city.name} Toz Boya — Lotus Elektrostatik Boya`,
        description: city.rich.lede,
        url: `${site.url}/bolgeler/${slug}`,
        locale: site.locale,
      },
    };
  }

  return {
    title: `${city.name} Elektrostatik Toz Boya & Endüstriyel Kaplama`,
    description: `${city.name} bölgesindeki üreticilere elektrostatik toz boya, fırın boya ve antikorozif kaplama hizmeti. Bölge içi nakliye desteği ve hızlı teslim.`,
    alternates: { canonical: `/bolgeler/${slug}` },
  };
}

export default async function CityPage({ params }: Params) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  // Rich path: render long-form, locally-optimised template.
  if (city.rich) {
    const rich = city.rich;
    return (
      <>
        <Breadcrumbs
          items={[
            { href: "/bolgeler", label: "Bölgeler" },
            { href: `/bolgeler/${slug}`, label: city.name },
          ]}
        />

        <CityRich city={city} rich={rich} />

        <JsonLd
          data={[
            breadcrumbSchema([
              { name: "Anasayfa", url: site.url },
              { name: "Bölgeler", url: `${site.url}/bolgeler` },
              {
                name: city.name,
                url: `${site.url}/bolgeler/${city.slug}`,
              },
            ]),
            localServiceSchema({
              name: `${city.name} Toz Boya & Endüstriyel Kaplama`,
              description: rich.lede,
              url: `${site.url}/bolgeler/${city.slug}`,
              cityName: city.name,
              geo: rich.geo,
              radiusKm: rich.serviceRadiusKm,
              serviceTypes: [
                "Elektrostatik Toz Boya",
                "Fırın Boya",
                "Metal Boyama",
                "Endüstriyel Kaplama",
                "Antikorozif Kaplama",
                "Kumlama",
              ],
            }),
            faqSchema(rich.faq),
          ]}
        />
      </>
    );
  }

  // Fallback: original template for cities without rich content.
  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/bolgeler", label: "Bölgeler" },
          { href: `/bolgeler/${slug}`, label: city.name },
        ]}
      />

      <PageHero
        eyebrow={city.province}
        title={`${city.name} bölgesinde elektrostatik toz boya`}
        description={city.intro}
      >
        <div className="flex flex-wrap gap-3 mt-3">
          <Button asChild size="lg">
            <Link href="/teklif-al">
              Teklif Al <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="whatsapp" size="lg">
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
      </PageHero>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]/40">
        <Container className="py-8 grid grid-cols-3 divide-x divide-[var(--color-line)]">
          {city.highlights.map((h) => (
            <div
              key={h.label}
              className="px-4 first:pl-0 last:pr-0 text-center md:text-left"
            >
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-subtle)]">
                {h.label}
              </div>
              <div className="mt-1 text-lg md:text-xl font-display font-semibold text-[var(--color-text)]">
                {h.value}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <Section size="md">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <SectionHeader
              eyebrow="Bölge Hakkında"
              title={`${city.name}’da neden Lotus?`}
            />
            {city.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed text-pretty"
              >
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-[var(--color-line-strong)] p-6 md:p-7 sticky top-28">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                Hizmet Verdiğimiz Alt Bölgeler
              </h3>
              <ul className="mt-5 border-t border-[var(--color-line)]">
                {city.zones.map((z) => (
                  <li
                    key={z}
                    className="py-3 text-sm text-[var(--color-text)] border-b border-[var(--color-line)] flex items-center gap-3"
                  >
                    <MapPin
                      className="h-3.5 w-3.5 text-[var(--color-accent)]"
                      strokeWidth={1.5}
                    />
                    {z}
                  </li>
                ))}
              </ul>

            </div>
          </aside>
        </div>
      </Section>

      <Section size="md" className="border-t border-[var(--color-line)]">
        <SectionHeader
          eyebrow="Diğer Bölgeler"
          title="Yakındaki bölgelerimiz"
        />
        <div className="mt-10 grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
          {cities
            .filter((c) => c.slug !== slug)
            .map((c, i) => (
              <Link
                key={c.slug}
                href={`/bolgeler/${c.slug}`}
                className="group p-6 md:p-7 border-r border-b border-[var(--color-line)] hover:bg-[var(--color-surface)] transition-colors"
              >
                <span className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-[var(--color-text-subtle)]">
                  {String(i + 1).padStart(2, "0")} ·{" "}
                  {c.province.toUpperCase()}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  {c.name}
                </h3>
              </Link>
            ))}
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", url: site.url },
          { name: "Bölgeler", url: `${site.url}/bolgeler` },
          { name: city.name, url: `${site.url}/bolgeler/${city.slug}` },
        ])}
      />
    </>
  );
}
