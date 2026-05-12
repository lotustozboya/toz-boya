"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site, telLink, whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 bg-grid opacity-[0.4]" aria-hidden />

      <Container className="relative pt-10 pb-12 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-7">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="tech-strip"
            >
              <span>Çorlu OSB · Tekirdağ</span>
              <span>EST. 2014</span>
              <span>ISO 12944</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="h-hero text-balance"
            >
              Endüstriyel toz boya
              <br />
              ve fırın boya çözümleri.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl text-pretty"
            >
              Çorlu, Çerkezköy ve Tekirdağ’daki üreticilere; RAL kataloğundaki
              tüm renklerde, tek parça{" "}
              <strong className="text-[var(--color-text)] font-semibold tabular-nums">
                6 metreye
              </strong>{" "}
              kadar elektrostatik toz boya, kumlama ve ISO 12944 antikorozif
              kaplama hizmeti sunuyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <Button asChild size="xl" className="w-full sm:w-auto">
                <Link href="/teklif-al">
                  Teklif Al <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors group"
              >
                <Phone className="h-4 w-4 text-[var(--color-accent)]" />
                <span className="tabular-nums">
                  {site.contact.phoneDisplay}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)] group-hover:text-[var(--color-accent)] transition-colors">
                  · doğrudan ara
                </span>
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="grid grid-cols-2 md:grid-cols-4 pt-8 mt-1 border-t border-[var(--color-line)] divide-x divide-[var(--color-line)]"
            >
              <Spec value="11+" label="Yıllık tecrübe" first />
              <Spec value="6 m" label="Tek parça fırın" />
              <Spec value="ISO 12944" label="C3–C5 sertifikalı" />
              <Spec value="48 sa" label="Acil teslim" />
            </motion.dl>
          </div>

          {/* Visual column — desktop/tablet only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden md:block lg:col-span-5 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Spec({
  value,
  label,
  first,
}: {
  value: string;
  label: string;
  first?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1.5 py-1 ${first ? "pr-5" : "px-5"}`}>
      <dt className="font-display text-xl md:text-2xl font-semibold text-[var(--color-text)] tabular-nums tracking-[-0.02em] leading-none">
        {value}
      </dt>
      <dd className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
        {label}
      </dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[16/9] sm:aspect-[3/2] lg:aspect-[5/6] w-full">
      <div className="absolute inset-0 overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)]">
        <Image
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"
          alt="Lotus Elektrostatik Boya tesisinde endüstriyel kaplama uygulaması"
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)]/90 via-[var(--color-bg)]/35 to-[var(--color-bg)]/90"
          aria-hidden
        />

        {/* Foreground content — full on lg, simplified below */}
        <div className="relative h-full p-4 md:p-5 lg:p-6 flex flex-col justify-between">
          {/* Plates: lg+ only */}
          <Plate
            className="hidden lg:flex self-end max-w-[230px]"
            label="Aylık kapasite"
            value="25.000"
            sub="m²"
          />

          {/* Big "11+" — visible across breakpoints */}
          <div className="pointer-events-none">
            <div className="font-display tabular-nums leading-none tracking-[-0.04em] text-[var(--color-text)]">
              <span className="block text-[3.5rem] sm:text-[4.5rem] lg:text-[6.5rem] font-semibold">
                11<span className="text-[var(--color-accent)]">+</span>
              </span>
            </div>
            <div className="mt-1.5 lg:mt-2 tech-strip">
              <span>yıllık endüstriyel tecrübe</span>
            </div>
          </div>

          <Plate
            className="hidden lg:flex self-start max-w-[230px]"
            label="Tamamlanan proje"
            value="1.200"
            sub="+"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Industrial "spec plate" — replaces the floating glass card.
 * Reads as a serial plate / nameplate, not a SaaS card.
 */
function Plate({
  label,
  value,
  sub,
  className = "",
}: {
  label: string;
  value: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={`relative border border-[var(--color-line-strong)] bg-[var(--color-bg)]/85 backdrop-blur-md p-3.5 ${className}`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
        {label}
      </div>
      <div className="mt-1.5 flex items-baseline gap-1.5">
        <span className="font-display tabular-nums text-[1.5rem] font-semibold tracking-tight text-[var(--color-text)] leading-none">
          {value}
        </span>
        <span className="text-sm text-[var(--color-accent)] font-medium tabular-nums">
          {sub}
        </span>
      </div>
    </div>
  );
}
