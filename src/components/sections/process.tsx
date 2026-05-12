import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    code: "A",
    title: "Talep & Teklif",
    detail:
      "Parça resmi, miktar ve renk bilgisini iletin; 24 saat içinde detaylı teklif sunalım.",
    spec: "24 sa",
    specFull: "Yanıt süresi · 24 saat",
  },
  {
    code: "B",
    title: "Yüzey Hazırlık",
    detail:
      "5 kademeli yıkama ya da kumlama ile metal yüzeyini ISO standartlarında hazırlıyoruz.",
    spec: "ISO Sa 2.5",
    specFull: "Standart · ISO 8501-1 Sa 2.5",
  },
  {
    code: "C",
    title: "Boya Uygulaması",
    detail:
      "Tam otomatik elektrostatik tabancalar ile homojen film kalınlığında uygulama.",
    spec: "60–120 µm",
    specFull: "Film kalınlığı · 60–120 µm",
  },
  {
    code: "D",
    title: "Polimerizasyon",
    detail:
      "Kontrollü pişirme rampası, fırın çıkışında parlaklık ve aderans testleri.",
    spec: "180–200°C",
    specFull: "Sıcaklık · 180–200°C",
  },
  {
    code: "E",
    title: "Kalite Kontrol",
    detail:
      "Mikron, parlaklık, renk ve aderans ölçümleri raporlanır ve müşteriyle paylaşılır.",
    spec: "Gt0–Gt1",
    specFull: "Aderans · ISO 2409 Gt0–Gt1",
  },
  {
    code: "F",
    title: "Paketleme & Sevkiyat",
    detail:
      "Çorlu, Çerkezköy, Kapaklı ve Tekirdağ bölgesine bölge içi nakliye desteği.",
    spec: "Bölge içi",
    specFull: "Bölge içi · ücretsiz nakliye",
  },
];

export function Process() {
  return (
    <Section size="md" className="border-t border-[var(--color-line)]">
      <SectionHeader
        eyebrow="Üretim Süreci"
        title="Altı aşamada profesyonel kaplama"
        description="Her aşama tek bir tesiste, tek bir ekibin sorumluluğunda yürütülür."
        inlineEyebrowOnMobile
      />

      <ol className="mt-8 md:mt-14 border-t border-[var(--color-line-strong)]">
        {steps.map((s) => (
          <li
            key={s.code}
            className="border-b border-[var(--color-line)] py-4 md:py-7"
          >
            {/* Mobile: 2-row layout (code+title+spec on top, detail below) */}
            <div className="md:hidden flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="font-mono text-xs tabular-nums text-[var(--color-text-subtle)] tracking-[0.1em] shrink-0">
                    {s.code}
                  </span>
                  <h3 className="font-display text-[15px] font-semibold text-[var(--color-text)] tracking-[-0.01em] truncate">
                    {s.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-accent)] tabular-nums shrink-0">
                  {s.spec}
                </span>
              </div>
              <p className="pl-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {s.detail}
              </p>
            </div>

            {/* Desktop: 12-col spec table */}
            <div className="hidden md:grid grid-cols-12 gap-8 items-start">
              <div className="col-span-1 flex items-start">
                <span className="font-mono text-sm tabular-nums text-[var(--color-text-subtle)] tracking-[0.1em]">
                  {s.code}
                </span>
              </div>
              <div className="col-span-3">
                <h3 className="font-display text-xl font-semibold text-[var(--color-text)] tracking-[-0.015em] leading-snug">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-5">
                <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  {s.detail}
                </p>
              </div>
              <div className="col-span-3 text-right">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent)] tabular-nums">
                  {s.specFull}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
