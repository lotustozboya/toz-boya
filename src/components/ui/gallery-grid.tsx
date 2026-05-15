"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/data/gallery";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((p) => (p! + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((p) => (p! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  return (
    <>
      <div className="grid gap-px bg-[var(--color-line)] border border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <figure
            key={item.title + i}
            className="group relative aspect-[4/3] overflow-hidden bg-[var(--color-bg)] cursor-zoom-in"
            onClick={() => setActive(i)}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={i < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] tabular-nums">
                {String(i + 1).padStart(2, "0")} · {item.category}
              </span>
              <h2 className="mt-1.5 font-display text-base font-semibold text-white leading-snug">
                {item.title}
              </h2>
            </figcaption>
          </figure>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setActive(null)}
            aria-label="Kapat"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            className="absolute left-4 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setActive((p) => (p! - 1 + items.length) % items.length); }}
            aria-label="Önceki"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[active].image}
              alt={items[active].alt}
              className="object-contain max-h-[90vh] max-w-[90vw] w-auto h-auto"
            />
            <p className="absolute bottom-0 inset-x-0 text-center text-sm text-white/70 py-2 bg-black/40">
              {items[active].title} — {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
          </div>

          <button
            className="absolute right-4 text-white/70 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setActive((p) => (p! + 1) % items.length); }}
            aria-label="Sonraki"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
}
