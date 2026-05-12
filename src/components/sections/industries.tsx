import { Section, SectionHeader } from "@/components/ui/section";
import { industries } from "@/lib/data/industries";

export function Industries() {
  return (
    <Section size="md" className="border-t border-[var(--color-line)]">
      <SectionHeader
        eyebrow="Hizmet Verdiğimiz Sektörler"
        title="Üretimini yıllardır birlikte yürüttüğümüz sanayiler"
        description="Aşağıdaki sektörlerde seri üretim ve tek parça projeler için ölçüm raporlu teslim sağlıyoruz."
        inlineEyebrowOnMobile
      />

      <ol
        aria-label="Hizmet verdiğimiz sektörler"
        className="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--color-line)]"
      >
        {industries.map((it, i) => (
          <li
            key={it.name}
            className="border-r border-b border-[var(--color-line)] px-4 md:px-5 py-3.5 md:py-4 flex items-baseline gap-3"
          >
            <span className="font-mono text-[10px] md:text-[11px] tabular-nums tracking-[0.16em] text-[var(--color-text-subtle)] shrink-0 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[13px] md:text-sm font-medium text-[var(--color-text)] leading-snug">
                {it.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-subtle)] leading-tight truncate">
                {it.detail}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
