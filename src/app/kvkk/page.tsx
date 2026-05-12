import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Lotus Elektrostatik Boya KVKK kapsamında kişisel verilerin korunması ve işlenmesi hakkında aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/kvkk", label: "KVKK" }]} />
      <PageHero
        eyebrow="KVKK"
        title="Kişisel Verilerin Korunması Aydınlatma Metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metnidir."
      />
      <Section size="md">
        <div className="prose-content max-w-3xl flex flex-col gap-6 text-[var(--color-text-muted)] leading-relaxed">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Veri Sorumlusu
          </h2>
          <p>
            {site.legalName} olarak ({site.address.street}, {site.address.district}/
            {site.address.city}) veri sorumlusu sıfatıyla, web sitemiz
            üzerinden ilettiğiniz bilgileri yalnızca teklif ve hizmet süreçleri
            kapsamında işlemekteyiz.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            İşlenen Veriler
          </h2>
          <p>
            Ad–soyad, telefon, e-posta, firma bilgisi ve hizmet talebine ilişkin
            açıklamalar formlar üzerinden tarafımıza iletilmektedir.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            İşleme Amacı
          </h2>
          <p>
            Kişisel verileriniz, talep ettiğiniz hizmete uygun teklif
            hazırlanması, iletişimin sürdürülmesi ve yasal yükümlülüklerin
            yerine getirilmesi amaçlarıyla işlenir.
          </p>

          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            Haklarınız
          </h2>
          <p>
            KVKK 11. madde kapsamında verilerinize erişme, düzeltme, silme veya
            işlenmesine itiraz etme haklarına sahipsiniz. Talepleriniz için{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-[var(--color-accent)] hover:underline"
            >
              {site.contact.email}
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </Section>
    </>
  );
}
