"use client";

import { PageBand } from "@/components/PageBand";
import { KpiSection, CxSection, CtaFinalSection } from "@/components/Sections";
import { useLanguage } from "@/context/LanguageContext";

export function InsightsPageContent() {
  const { T } = useLanguage();
  return (
    <>
      <PageBand
        kicker={T.bands.insights.kicker}
        title={T.bands.insights.title}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=70&auto=format&fit=crop"
      />
      <KpiSection />
      <CxSection />
      <CtaFinalSection />
    </>
  );
}
