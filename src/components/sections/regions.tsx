import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { cities } from "@/lib/data/cities";

export function Regions() {
  return (
    <Section size="md" className="section-tint-recess">
      <SectionHeader
        eyebrow="Hizmet Bölgeleri"
        title="Trakya ve Marmara bölgesinde 8 bölgeye hizmet"
        description="Çorlu OSB merkezli tesisimizden Çerkezköy, Velimeşe, Ergene, Kapaklı, Tekirdağ, Marmara Ereğlisi ve Silivri’ye düzenli sefer ve teslim hizmeti."
      />

      <div className="mt-8 md:mt-14 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--color-line)]">
        {cities.map((city, i) => (
          <Link
            key={city.slug}
            href={`/bolgeler/${city.slug}`}
            className="group relative flex flex-col gap-3 md:gap-4 p-4 md:p-7 border-r border-b border-[var(--color-line)] hover:bg-[var(--color-surface)] transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] md:text-[11px] tabular-nums tracking-[0.16em] md:tracking-[0.18em] text-[var(--color-text-subtle)]">
                {String(i + 1).padStart(2, "0")} ·{" "}
                <span className="hidden sm:inline">
                  {city.province.toUpperCase()}
                </span>
                <span className="sm:hidden">
                  {city.province.slice(0, 3).toUpperCase()}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 text-[var(--color-text-subtle)] transition-colors duration-200 group-hover:text-[var(--color-accent)]" />
            </div>
            <h3 className="font-display text-lg md:text-2xl font-semibold tracking-[-0.02em] text-[var(--color-text)] mt-0 md:mt-1">
              {city.name}
            </h3>
            <p className="hidden md:block text-sm text-[var(--color-text-muted)] leading-relaxed">
              {city.intro}
            </p>
            <ul className="mt-auto pt-3 md:pt-5 border-t border-[var(--color-line)] flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-subtle)]">
              {city.zones.slice(0, 2).map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </Section>
  );
}
