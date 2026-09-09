import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import {
  AboutSection,
  ServicesSection,
  WhySection,
  CtaFinalSection,
} from "@/components/Sections";

export const metadata = {
  title: "SamGeronimo Group LLC | Business Strategy & Operations Consulting",
  description:
    "SamGeronimo Group LLC helps organizations improve performance through strategy, process optimization, KPI development, customer experience and operational excellence.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <CtaFinalSection />
    </>
  );
}
