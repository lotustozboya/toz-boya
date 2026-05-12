import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-32 md:py-40 flex flex-col items-center text-center gap-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] tabular-nums">
        ERR · 404 / not found
      </span>
      <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance max-w-xl">
        Aradığınız sayfa bulunamadı
      </h1>
      <p className="text-[var(--color-text-muted)] max-w-md text-pretty">
        Adresi kontrol edin veya anasayfaya dönerek size uygun hizmeti
        bulabilirsiniz.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        <Button asChild size="lg">
          <Link href="/">Anasayfa</Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/hizmetler">Hizmetler</Link>
        </Button>
      </div>
    </Container>
  );
}
