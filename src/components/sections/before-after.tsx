"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeftRight, X } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { beforeAfter, type BeforeAfterItem } from "@/lib/data/gallery";

export function BeforeAfter() {
  const total = beforeAfter.length;
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);

  const openModal = React.useCallback((idx: number) => {
    setActiveIdx(idx);
  }, []);

  const closeModal = React.useCallback(() => {
    setActiveIdx(null);
  }, []);

  // Lock scroll + close on Escape while modal is open
  React.useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIdx, closeModal]);

  return (
    <Section size="md" className="border-t border-[var(--color-line)]">
      <SectionHeader
        eyebrow="Saha Kayıtları"
        title="Kaplama öncesi ve sonrası — aynı parça"
        description="Sürgüyü kaydırarak işlem öncesi ile teslim arası farkı karşılaştırın."
        inlineEyebrowOnMobile
      />

      {/* Mobile: tap-to-compare cards in a horizontal scroller */}
      <div className="mt-6 lg:hidden -mx-5">
        <ul className="snap-row gap-3 px-5">
          {beforeAfter.map((item, i) => (
            <li key={item.title} className="w-[80%] min-w-[80%]">
              <MobileCard
                item={item}
                idx={i}
                total={total}
                onOpen={() => openModal(i)}
              />
            </li>
          ))}
        </ul>
        <div className="mt-3 px-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)] tabular-nums">
          <span aria-hidden>↔</span>
          <span>Karşılaştırma için karta dokunun</span>
        </div>
      </div>

      {/* Desktop: 3-column inline sliders */}
      <div className="hidden lg:grid mt-14 gap-10 lg:grid-cols-3">
        {beforeAfter.map((item, i) => (
          <DesktopSlider key={item.title} item={item} idx={i} total={total} />
        ))}
      </div>

      {/* Mobile fullscreen modal compare */}
      {activeIdx !== null && (
        <CompareModal
          item={beforeAfter[activeIdx]}
          idx={activeIdx}
          total={total}
          onClose={closeModal}
        />
      )}
    </Section>
  );
}

/* ─── Mobile card (tap-to-open) ───────────────────────────────── */
function MobileCard({
  item,
  idx,
  total,
  onOpen,
}: {
  item: BeforeAfterItem;
  idx: number;
  total: number;
  onOpen: () => void;
}) {
  return (
    <figure className="flex flex-col gap-3 h-full">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${item.title} öncesi ve sonrası karşılaştır`}
        className="group relative aspect-[3/4] w-full overflow-hidden border border-[var(--color-line-strong)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
      >
        <Image
          src={item.after}
          alt={item.afterAlt}
          fill
          sizes="80vw"
          className="object-cover"
        />
        {/* Top labels */}
        <span className="absolute top-3 left-3 z-10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] bg-[#0a0a0b]/85 text-white tabular-nums backdrop-blur-sm">
          {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="absolute top-3 right-3 z-10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] bg-[var(--color-accent)] text-[var(--color-on-accent)]">
          Teslim
        </span>

        {/* Tap-to-compare affordance */}
        <span className="absolute inset-x-0 bottom-0 px-3 py-2.5 bg-gradient-to-t from-[#0a0a0b]/90 to-transparent flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">
            Karşılaştır
          </span>
          <span className="grid h-7 w-7 place-items-center bg-white/95 text-[#0a0a0b] group-active:scale-95 transition-transform">
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </span>
        </span>
      </button>

      <figcaption className="flex flex-col gap-1.5 pt-0.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] tabular-nums">
          {item.category}
        </span>
        <h3 className="font-display text-[15px] font-semibold text-[var(--color-text)] tracking-[-0.01em] leading-snug">
          {item.title}
        </h3>
        <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
          {item.detail}
        </p>
      </figcaption>
    </figure>
  );
}

/* ─── Mobile compare modal ───────────────────────────────── */
function CompareModal({
  item,
  idx,
  total,
  onClose,
}: {
  item: BeforeAfterItem;
  idx: number;
  total: number;
  onClose: () => void;
}) {
  const [pos, setPos] = React.useState(50);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} öncesi ve sonrası`}
      className="fixed inset-0 z-[60] bg-[var(--color-bg)] flex flex-col"
    >
      {/* Modal header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-line)]">
        <div className="flex flex-col leading-tight">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] tabular-nums">
            {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} ·{" "}
            {item.category}
          </span>
          <span className="text-[13px] font-semibold text-[var(--color-text)] mt-0.5 truncate">
            {item.title}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="grid h-10 w-10 place-items-center text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </header>

      {/* Compare surface */}
      <div className="flex-1 relative bg-black overflow-hidden" style={{ touchAction: "none" }}>
        <Image
          src={item.after}
          alt={item.afterAlt}
          fill
          sizes="100vw"
          priority
          className="object-contain"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden
        >
          <Image
            src={item.before}
            alt={item.beforeAlt}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <span className="absolute top-3 left-3 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] bg-[#0a0a0b]/85 text-white">
          Önişlem
        </span>
        <span className="absolute top-3 right-3 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] bg-[var(--color-accent)] text-[var(--color-on-accent)]">
          Teslim
        </span>

        <div
          className="absolute inset-y-0 w-px bg-white/80 pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white text-[#0a0a0b] shadow-[0_4px_16px_rgba(0,0,0,0.5)] ring-2 ring-[var(--color-accent)]">
            <ArrowLeftRight className="h-5 w-5" />
          </div>
        </div>

        <label className="absolute inset-0 cursor-ew-resize">
          <span className="sr-only">
            {item.title} öncesi ve sonrası karşılaştırma
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={`${item.title} karşılaştırma`}
            className="w-full h-full appearance-none bg-transparent cursor-ew-resize [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:w-12 [&::-webkit-slider-thumb]:bg-transparent [&::-webkit-slider-thumb]:cursor-ew-resize [&::-moz-range-thumb]:h-full [&::-moz-range-thumb]:w-12 [&::-moz-range-thumb]:bg-transparent [&::-moz-range-thumb]:border-0 focus-visible:outline-none"
          />
        </label>
      </div>

      {/* Modal footer with detail */}
      <footer className="px-4 py-4 border-t border-[var(--color-line)]">
        <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
          {item.detail}
        </p>
      </footer>
    </div>
  );
}

/* ─── Desktop slider (unchanged inline drag-to-compare) ─────────── */
function DesktopSlider({
  item,
  idx,
  total,
}: {
  item: BeforeAfterItem;
  idx: number;
  total: number;
}) {
  const [pos, setPos] = React.useState(50);

  return (
    <figure className="group flex flex-col gap-3 h-full">
      <div
        className="relative aspect-[4/5] overflow-hidden border border-[var(--color-line-strong)] select-none"
        style={{ touchAction: "none" }}
      >
        <Image
          src={item.after}
          alt={item.afterAlt}
          fill
          sizes="33vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden
        >
          <Image
            src={item.before}
            alt={item.beforeAlt}
            fill
            sizes="33vw"
            className="object-cover"
          />
        </div>

        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] bg-[#0a0a0b]/85 text-white backdrop-blur-sm">
          Önişlem
        </span>
        <span className="absolute top-3 right-3 z-10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] bg-[var(--color-accent)] text-[var(--color-on-accent)]">
          Teslim
        </span>

        <div
          className="absolute inset-y-0 w-px bg-white/80 z-10 pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white text-[#0a0a0b] shadow-[0_4px_16px_rgba(0,0,0,0.4)] ring-2 ring-[var(--color-accent)]">
            <ArrowLeftRight className="h-4 w-4" />
          </div>
        </div>

        <label className="absolute inset-0 z-20 cursor-ew-resize">
          <span className="sr-only">
            {item.title} öncesi ve sonrası karşılaştırma
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={`${item.title} karşılaştırma`}
            className="w-full h-full appearance-none bg-transparent cursor-ew-resize [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:w-10 [&::-webkit-slider-thumb]:bg-transparent [&::-webkit-slider-thumb]:cursor-ew-resize [&::-moz-range-thumb]:h-full [&::-moz-range-thumb]:w-10 [&::-moz-range-thumb]:bg-transparent [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-ew-resize focus-visible:outline-none"
          />
        </label>
      </div>

      <figcaption className="flex flex-col gap-1.5 pt-1">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] tabular-nums">
          <span className="text-[var(--color-accent)]">{item.category}</span>
          <span className="text-[var(--color-text-subtle)]">
            REF · {String(idx + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="h-card text-[var(--color-text)] mt-0.5">{item.title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
          {item.detail}
        </p>
      </figcaption>
    </figure>
  );
}
