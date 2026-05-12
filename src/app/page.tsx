import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { BeforeAfter } from "@/components/sections/before-after";
import { References } from "@/components/sections/references";
import { Regions } from "@/components/sections/regions";
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
      <WhyUs />
      <Process />
      <BeforeAfter />
      <References />
      <Regions />
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
