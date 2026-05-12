import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Regions } from "@/components/sections/regions";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { faqs } from "@/lib/data/faq";
import { JsonLd, faqSchema } from "@/components/seo/json-ld";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <Regions />
      <Industries />
      <Testimonials />
      <FaqSection
        items={faqs.slice(0, 4)}
        viewAllHref="/sss"
        viewAllLabel={`${faqs.length} sorunun tamamını görün`}
      />
      <CtaBanner />
      <JsonLd data={faqSchema(faqs.slice(0, 4))} />
    </>
  );
}
