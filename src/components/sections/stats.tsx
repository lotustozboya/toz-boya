import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

const items = [
  {
    code: "01",
    value: `${site.stats.yearsActive}+`,
    unit: "yıl",
    label: "Üretimde",
  },
  {
    code: "02",
    value: site.stats.projectsDelivered.toLocaleString("tr-TR"),
    unit: "proje",
    label: "Tamamlandı",
  },
  {
    code: "03",
    value: `${site.stats.industrialClients}+`,
    unit: "firma",
    label: "Kurumsal müşteri",
  },
  {
    code: "04",
    value: site.stats.capacityM2PerMonth.toLocaleString("tr-TR"),
    unit: "m²/ay",
    label: "Kapasite",
  },
];

export function Stats() {
  return (
    <section
      aria-label="Tesis kapasitesi"
      className="border-y border-[var(--color-line-strong)]"
    >
      {/* Mobile: single horizontal-scan row, dense — no per-cell padding stack */}
      <Container className="md:hidden py-5">
        <ul className="grid grid-cols-4 divide-x divide-[var(--color-line)]">
          {items.map((it, i) => (
            <li
              key={it.code}
              className={`flex flex-col gap-1 ${i === 0 ? "pr-2" : "px-2"} ${
                i === items.length - 1 ? "pl-2 pr-0" : ""
              }`}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="font-display tabular-nums text-[15px] font-semibold tracking-[-0.02em] text-[var(--color-text)] leading-none truncate">
                  {it.value}
                </span>
              </div>
              <span className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[var(--color-accent)] tabular-nums leading-none">
                {it.unit}
              </span>
              <span className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] leading-tight mt-0.5 truncate">
                {it.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>

      {/* Desktop: full 4-cell grid with serial codes */}
      <Container className="hidden md:grid py-14 grid-cols-4 lg:divide-x lg:divide-[var(--color-line)]">
        {items.map((it) => (
          <div
            key={it.code}
            className="flex flex-col gap-3 lg:px-8"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--color-text-subtle)] tabular-nums">
              {it.code} / {String(items.length).padStart(2, "0")}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display tabular-nums text-[2.75rem] font-semibold tracking-[-0.035em] text-[var(--color-text)] leading-[0.9]">
                {it.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] tabular-nums">
                {it.unit}
              </span>
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)] font-medium">
              {it.label}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
