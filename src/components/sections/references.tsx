import { Container } from "@/components/ui/container";
import { references, referenceSectors } from "@/lib/data/references";

export function References() {
  return (
    <section
      aria-labelledby="references-heading"
      className="border-y border-[var(--color-line-strong)]"
    >
      <Container className="py-10 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-4 flex flex-col gap-3 md:gap-5">
            <div className="flex md:hidden items-baseline gap-3 flex-wrap">
              <span className="eyebrow shrink-0">Referanslar</span>
              <span
                className="h-px w-3 bg-[var(--color-line-strong)] self-center"
                aria-hidden
              />
              <h2
                id="references-heading"
                className="font-display text-[20px] font-semibold tracking-[-0.015em] text-[var(--color-text)] leading-[1.15]"
              >
                Trakya sanayisinin tedarik halkasındayız
              </h2>
            </div>
            <span className="hidden md:block eyebrow">Referanslar</span>
            <h2 className="hidden md:block h-section text-balance">
              Trakya sanayisinin tedarik halkasındayız
            </h2>
            <p className="hidden md:block text-sm text-[var(--color-text-muted)] leading-relaxed">
              Sektörlere yayılmış 180+ kurumsal müşteriyle düzenli üretim
              ortaklığı sürdürüyoruz. Referans firmalarımızın isimleri,
              kendileri tarafından açıklandığında paylaşılmaktadır.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[var(--color-line)]">
              {references.map((ref, i) => (
                <li
                  key={ref.initials}
                  className={`border-r border-b border-[var(--color-line)] ${
                    i >= 8 ? "hidden sm:block" : ""
                  }`}
                >
                  <div className="aspect-square sm:aspect-[5/3] flex flex-col items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-3 py-2 sm:py-4 text-center">
                    <span
                      className="font-display text-base sm:text-2xl font-semibold tracking-[-0.02em] text-[var(--color-text-muted)]"
                      aria-hidden
                    >
                      {ref.initials}
                    </span>
                    <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-subtle)] leading-tight">
                      {ref.sector}
                    </span>
                    <span className="sr-only">{ref.name}</span>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2">
              {referenceSectors.map((sector, i) => (
                <li
                  key={sector}
                  className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-muted)] items-center gap-2 ${
                    i < 4 ? "flex" : "hidden sm:flex"
                  }`}
                >
                  <span
                    className="h-px w-3 bg-[var(--color-accent)]"
                    aria-hidden
                  />
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
