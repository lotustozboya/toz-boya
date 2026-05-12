import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/sections/faq-section";
import { services, getService } from "@/lib/data/services";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/seo/json-ld";
import { site, whatsappLink } from "@/lib/site";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.excerpt,
    alternates: { canonical: `/hizmetler/${slug}` },
    openGraph: {
      title: service.title,
      description: service.excerpt,
      url: `${site.url}/hizmetler/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/hizmetler", label: "Hizmetler" },
          { href: `/hizmetler/${slug}`, label: service.shortTitle },
        ]}
      />

      <PageHero
        eyebrow="Hizmet Detayı"
        title={service.title}
        description={service.excerpt}
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
                `Merhaba, ${service.shortTitle} için teklif almak istiyorum.`,
              )}
              target="_blank"
              rel="noopener"
            >
              WhatsApp ile yaz
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Description + features */}
      <Section size="md">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeader
              eyebrow="Açıklama"
              title="Uygulama detayları"
              as="h2"
            />
            <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed">
              {service.description}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mt-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-[var(--color-text)]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-[var(--color-line-strong)] p-6 md:p-7 sticky top-28">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                Uygulama Alanları
              </h3>
              <ul className="mt-5 border-t border-[var(--color-line)]">
                {service.applications.map((app) => (
                  <li
                    key={app}
                    className="py-3 text-sm text-[var(--color-text)] border-b border-[var(--color-line)] flex items-center gap-3"
                  >
                    <span
                      className="h-px w-2.5 bg-[var(--color-accent)]"
                      aria-hidden
                    />
                    {app}
                  </li>
                ))}
              </ul>

              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] mt-8">
                Avantajları
              </h3>
              <ul className="mt-5 border-t border-[var(--color-line)]">
                {service.benefits.map((b) => (
                  <li
                    key={b}
                    className="py-3 text-sm text-[var(--color-text-muted)] border-b border-[var(--color-line)] flex items-start gap-3"
                  >
                    <span
                      className="mt-2 h-px w-2.5 bg-[var(--color-accent)] shrink-0"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* Process */}
      <Section size="md" className="section-tint-recess border-t border-[var(--color-line)]">
        <SectionHeader
          eyebrow="Uygulama Süreci"
          title={`${service.shortTitle} adım adım nasıl yapılır?`}
        />
        <ol className="mt-12 border-t border-l border-[var(--color-line)] grid sm:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step, i) => (
            <li
              key={step.title}
              className="border-r border-b border-[var(--color-line)] p-6 md:p-7 flex flex-col gap-3"
            >
              <span className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-[var(--color-text-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base font-semibold text-[var(--color-text)] mt-1">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <FaqSection
        items={service.faq}
        eyebrow="Hizmete dair"
        title={`${service.shortTitle} hakkında sorular`}
      />

      {/* Related services */}
      <Section size="md" className="border-t border-[var(--color-line)]">
        <SectionHeader
          eyebrow="Diğer Hizmetler"
          title="Beraber sunduğumuz çözümler"
        />
        <div className="mt-12 grid border-t border-l border-[var(--color-line)] sm:grid-cols-3">
          {others.map((o, i) => (
            <Link
              key={o.slug}
              href={`/hizmetler/${o.slug}`}
              className="group relative flex flex-col gap-3 p-6 md:p-7 border-r border-b border-[var(--color-line)] hover:bg-[var(--color-surface)] transition-colors"
            >
              <span className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-[var(--color-text-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold text-[var(--color-text)] mt-1 group-hover:text-[var(--color-accent)] transition-colors">
                {o.shortTitle}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {o.excerpt}
              </p>
              <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] transition-colors">
                Detaya git →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: "Anasayfa", url: site.url },
            { name: "Hizmetler", url: `${site.url}/hizmetler` },
            {
              name: service.shortTitle,
              url: `${site.url}/hizmetler/${service.slug}`,
            },
          ]),
        ]}
      />
    </>
  );
}
