import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { services, type Service } from "@/lib/data/services";

export function ServicesGrid() {
  return (
    <Section id="hizmetler" size="md">
      <SectionHeader
        eyebrow="Hizmetlerimiz"
        title="Endüstriyel kaplama için tek bir tesis"
        description="Yüzey hazırlığından nihai pişirmeye kadar tüm aşamaları kendi tesisimizde tamamlıyoruz."
      />

      {/* Mobile: horizontal swipe scroller (bleeds beyond container right-edge) */}
      <div className="relative mt-8 sm:hidden -mr-5 snap-row-fade">
        <ul className="snap-row gap-3 pr-5">
          {services.map((service, i) => (
            <li
              key={service.slug}
              className="w-[78%] min-w-[78%]"
            >
              <ServiceCard service={service} index={i} />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)] tabular-nums">
          <span aria-hidden>↔</span>
          <span>Kaydırarak {services.length} hizmeti görüntüleyin</span>
        </div>
      </div>

      {/* Desktop: hairline grid */}
      <div className="hidden sm:grid mt-14 border-t border-l border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCard
            key={service.slug}
            service={service}
            index={i}
            variant="grid"
          />
        ))}
      </div>
    </Section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  variant?: "grid" | "scroll";
}

function ServiceCard({ service, index, variant = "scroll" }: ServiceCardProps) {
  const Icon = service.icon;
  const isGrid = variant === "grid";
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className={`group relative flex flex-col gap-4 sm:gap-5 p-5 sm:p-7 transition-colors duration-200 ${
        isGrid
          ? "border-r border-b border-[var(--color-line)] hover:bg-[var(--color-surface)]"
          : "h-full border border-[var(--color-line)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tabular-nums tracking-[0.18em] text-[var(--color-text-subtle)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Icon
            className="h-5 w-5 text-[var(--color-accent)]"
            strokeWidth={1.5}
          />
        </div>
        <ArrowUpRight className="h-4 w-4 text-[var(--color-text-subtle)] transition-colors duration-200 group-hover:text-[var(--color-accent)]" />
      </div>
      <div className="flex flex-col gap-2 sm:gap-2.5 sm:mt-2">
        <h3 className="h-card text-[var(--color-text)]">
          {service.shortTitle}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3 sm:line-clamp-none">
          {service.excerpt}
        </p>
      </div>
      <span className="mt-auto pt-3 sm:pt-5 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] transition-colors">
        Detayları gör →
      </span>
    </Link>
  );
}
