import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Lotus Elektrostatik Boya web sitesi gizlilik politikası ve çerez kullanımı bilgilendirmesi.",
  alternates: { canonical: "/gizlilik" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/gizlilik", label: "Gizlilik" }]} />
      <PageHero
        eyebrow="Gizlilik"
        title="Gizlilik Politikası"
        description={`${site.shortName} web sitesi üzerinden toplanan bilgilerin nasıl kullanıldığını açıklayan gizlilik politikası.`}
      />
      <Section size="md">
        <div className="max-w-3xl flex flex-col gap-6 text-[var(--color-text-muted)] leading-relaxed">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Toplanan Bilgiler
          </h2>
          <p>
            Web sitemiz, formlar aracılığıyla yalnızca sizin gönüllü olarak
            paylaştığınız bilgileri toplar. Bu bilgiler hizmet teklifi sunmak
            amacıyla kullanılır.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Çerezler
          </h2>
          <p>
            Site performansını iyileştirmek için temel teknik çerezler
            kullanılır. Üçüncü taraf reklam çerezleri kullanılmaz.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            İletişim
          </h2>
          <p>
            Gizlilik politikası ile ilgili sorularınız için{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-[var(--color-accent)] hover:underline"
            >
              {site.contact.email}
            </a>{" "}
            adresine yazabilirsiniz.
          </p>
        </div>
      </Section>
    </>
  );
}
