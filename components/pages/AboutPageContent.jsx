"use client";

import { PageBand } from "@/components/PageBand";
import {
  AboutSection,
  IndustriesSection,
  WhySection,
  CtaFinalSection,
} from "@/components/Sections";
import { useLanguage } from "@/context/LanguageContext";

export function AboutPageContent() {
  const { T } = useLanguage();
  return (
    <>
      <PageBand
        kicker={T.bands.about.kicker}
        title={T.bands.about.title}
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=70&auto=format&fit=crop"
      />
      <AboutSection />
      <IndustriesSection />
      <WhySection />
      <CtaFinalSection />
    </>
  );
}
