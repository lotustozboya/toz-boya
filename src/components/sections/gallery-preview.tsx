import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { gallery } from "@/lib/data/gallery";

export function GalleryPreview() {
  const items = gallery.slice(0, 6);
  return (
    <Section size="md" className="border-t border-[var(--color-line)]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeader
          eyebrow="Projeler"
          title="Sahadaki işlerimiz"
          description="Çorlu, Çerkezköy ve Tekirdağ’daki kurumsal müşterilerimiz için tamamladığımız endüstriyel kaplama uygulamaları."
        />
        <Link
          href="/galeri"
          className="inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          Tüm projeleri gör <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-px bg-[var(--color-line)] border border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <figure
            key={item.title}
            className="group relative aspect-[4/3] overflow-hidden bg-[var(--color-bg)]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority={i < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-90" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] tabular-nums">
                {String(i + 1).padStart(2, "0")} · {item.category}
              </span>
              <h3 className="mt-1.5 font-display text-base font-semibold text-white leading-snug">
                {item.title}
              </h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
