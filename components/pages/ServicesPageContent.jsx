"use client";

import { PageBand } from "@/components/PageBand";
import {
  ServicesSection,
  ApproachSection,
  OperationsSection,
  CtaFinalSection,
} from "@/components/Sections";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesPageContent() {
  const { T } = useLanguage();
  return (
    <>
      <PageBand
        kicker={T.bands.services.kicker}
        title={T.bands.services.title}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=70&auto=format&fit=crop"
      />
      <ServicesSection />
      <ApproachSection />
      <OperationsSection />
      <CtaFinalSection />
    </>
  );
}
