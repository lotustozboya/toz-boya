import { Container } from "@/components/ui/container";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line-strong)]">
      <div className="absolute inset-0 bg-grid opacity-[0.35]" aria-hidden />
      <Container className="relative pt-14 pb-14 md:pt-20 md:pb-20">
        <div className="max-w-3xl flex flex-col gap-6">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="h-page text-balance">{title}</h1>
          {description && (
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed text-pretty">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
