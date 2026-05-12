import { Section, SectionHeader } from "@/components/ui/section";

const items = [
  {
    quote:
      "Çorlu OSB içindeki imalat hattımızda kullandığımız profillerin tamamını uzun süredir Lotus’a yaptırıyoruz. Renk tutarlılığı ve teslim süresi konusunda hiç sorun yaşamadık.",
    name: "Üretim Müdürü",
    role: "Beyaz Eşya Yan Sanayi · Çorlu",
    since: "2018’den beri müşteri",
  },
  {
    quote:
      "Tank ve basınçlı kap projelerimizde ISO 12944 C5 standardında çoklu kat sistem talep ediyoruz. Lotus, ölçüm raporlarıyla birlikte teslim ediyor — bu bizim için kritik.",
    name: "Kalite Yöneticisi",
    role: "Kimya Sanayi · Çerkezköy",
    since: "2020’den beri müşteri",
  },
  {
    quote:
      "Acil bir projede 48 saat içinde 200 parçayı teslim ettiler. Aynı kalitede, sözleştiğimiz fiyatla. Endüstriyel sektörde böyle bir çevikliği görmek zor.",
    name: "Satınalma Şefi",
    role: "Makine İmalatı · Tekirdağ",
    since: "2022’den beri müşteri",
  },
];

interface Item {
  quote: string;
  name: string;
  role: string;
  since: string;
}

export function Testimonials() {
  return (
    <Section size="md" className="border-t border-[var(--color-line)]">
      <SectionHeader
        eyebrow="Referans Notları"
        title="Bölgenin sanayi devleri ile çalışıyoruz"
        inlineEyebrowOnMobile
      />

      {/* Mobile: swipe scroller */}
      <div className="mt-8 lg:hidden -mr-5 snap-row-fade">
        <ul className="snap-row gap-3 pr-5">
          {items.map((t, i) => (
            <li key={t.name + i} className="w-[88%] min-w-[88%]">
              <Card item={t} />
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)] tabular-nums">
          <span aria-hidden>↔</span>
          <span>{items.length} referans</span>
        </div>
      </div>

      {/* Desktop: hairline split */}
      <div className="hidden lg:block mt-14 border-t border-[var(--color-line-strong)]">
        <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-[var(--color-line)]">
          {items.map((t, i) => (
            <figure
              key={t.name + i}
              className={`flex flex-col gap-6 py-10 lg:px-8 ${
                i === 0 ? "lg:pl-0" : ""
              } ${i === items.length - 1 ? "lg:pr-0" : ""}`}
            >
              <blockquote className="text-[15px] leading-relaxed text-[var(--color-text)] text-pretty">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-5 border-t border-[var(--color-line)] flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-[var(--color-text)]">
                  {t.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {t.role}
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-accent)] tabular-nums uppercase mt-1">
                  {t.since}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Card({ item }: { item: Item }) {
  return (
    <figure className="flex flex-col gap-5 p-6 border border-[var(--color-line)] h-full">
      <blockquote className="text-sm leading-relaxed text-[var(--color-text)] text-pretty">
        {item.quote}
      </blockquote>
      <figcaption className="mt-auto pt-4 border-t border-[var(--color-line)] flex flex-col gap-1">
        <span className="text-sm font-semibold text-[var(--color-text)]">
          {item.name}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          {item.role}
        </span>
        <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-accent)] tabular-nums uppercase mt-0.5">
          {item.since}
        </span>
      </figcaption>
    </figure>
  );
}
