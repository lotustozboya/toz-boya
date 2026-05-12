import { Section, SectionHeader } from "@/components/ui/section";

const items = [
  {
    code: "01",
    title: "ISO 12944 Sertifikalı",
    detail:
      "Antikorozif sistemlerimiz uluslararası standartta dökümante edilmiştir.",
    spec: "C3 / C4 / C5",
  },
  {
    code: "02",
    title: "6 m Pişirme Fırını",
    detail:
      "Tek parça 6 metreye kadar gabarili konstrüksiyonları tek seferde işliyoruz.",
    spec: "6.000 × 2.200 mm",
  },
  {
    code: "03",
    title: "Ölçüm & Raporlama",
    detail:
      "Her teslimde mikron, parlaklık ve aderans ölçüm raporu sağlıyoruz.",
    spec: "ISO 2360 / 2409",
  },
  {
    code: "04",
    title: "Bölgesel Nakliye",
    detail:
      "Çorlu, Çerkezköy, Kapaklı ve Tekirdağ’a planlı toplama–teslim servisi.",
    spec: "Haftada 6 gün",
  },
  {
    code: "05",
    title: "Hızlı Teslim",
    detail:
      "Standart işlerde 3–5 gün, acil işlerde 48 saat içinde teslim seçeneği.",
    spec: "48 sa / 3–5 gün",
  },
  {
    code: "06",
    title: "Tek Muhatap",
    detail:
      "Teklif, üretim ve teslim aşamalarında tek bir proje sorumlusu ile çalışırsınız.",
    spec: "Aynı ekip",
  },
];

export function WhyUs() {
  return (
    <Section size="md" className="border-t border-[var(--color-line)]">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Teknik Donanım"
            title="Tutarlı kalite, ölçülebilir performans"
            description="Endüstriyel kaplamada en büyük risk, parça parça değişen kalitedir. Kendi tesisimizde uçtan uca süreç sahibi olmamız bu riski sıfıra indirir."
            inlineEyebrowOnMobile
          />
        </div>

        {/* Mobile: 2-col compact card grid (visually distinguishes from Process spec list) */}
        <ul className="lg:hidden grid grid-cols-2 border-t border-l border-[var(--color-line)] mt-2">
          {items.map((it) => (
            <li
              key={it.code}
              className="border-r border-b border-[var(--color-line)] p-4 flex flex-col gap-2"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tabular-nums tracking-[0.18em] text-[var(--color-text-subtle)]">
                  {it.code}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-accent)] tabular-nums truncate ml-2">
                  {it.spec}
                </span>
              </div>
              <h3 className="font-display text-[14px] font-semibold text-[var(--color-text)] tracking-[-0.01em] leading-snug mt-0.5">
                {it.title}
              </h3>
              <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                {it.detail}
              </p>
            </li>
          ))}
        </ul>

        {/* Desktop: original 12-col spec row list */}
        <ul className="hidden lg:block lg:col-span-8 border-t border-[var(--color-line-strong)]">
          {items.map((it) => (
            <li
              key={it.code}
              className="border-b border-[var(--color-line)] py-6"
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-1">
                  <span className="font-mono text-xs tabular-nums tracking-[0.16em] text-[var(--color-text-subtle)]">
                    {it.code}
                  </span>
                </div>
                <div className="col-span-7 flex flex-col gap-2">
                  <h3 className="font-display text-[17px] font-semibold text-[var(--color-text)] tracking-[-0.01em]">
                    {it.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {it.detail}
                  </p>
                </div>
                <div className="col-span-4 text-right">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent)] tabular-nums">
                    {it.spec}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
