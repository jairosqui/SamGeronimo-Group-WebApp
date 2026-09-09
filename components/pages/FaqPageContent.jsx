"use client";

import { PageBand } from "@/components/PageBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaFinalSection } from "@/components/Sections";
import { useLanguage } from "@/context/LanguageContext";

export function FaqPageContent() {
  const { T } = useLanguage();
  return (
    <>
      <PageBand kicker={T.bands.faq.kicker} title={T.bands.faq.title} />
      <section className="py-24 md:py-32">
        <div className="container-content">
          <FaqAccordion items={T.faq.items} />
        </div>
      </section>
      <CtaFinalSection />
    </>
  );
}
