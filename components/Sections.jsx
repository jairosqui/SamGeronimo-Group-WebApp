"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { ICONS, IconArrowRight } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { T } = useLanguage();
  return (
    <section className="py-24 md:py-36">
      <div className="container-content grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-md2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=70&auto=format&fit=crop"
              alt="Equipo de consultoría analizando estrategia de negocio en una sala de reuniones"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/40" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {T.about.kicker}
          </p>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight mb-6">
            {T.about.title}
          </h2>
          <p className="text-muted text-lg leading-relaxed">{T.about.text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const { T } = useLanguage();
  return (
    <section className="py-24 md:py-36 border-t border-line">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {T.services.kicker}
          </p>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight">
            {T.services.title}
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {T.services.items.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <StaggerItem key={s.name}>
                <div className="group h-full bg-charcoal border border-line rounded-md2 p-8 hover:border-accent hover:-translate-y-1.5 transition-all duration-300">
                  <Icon className="w-8 h-8 text-accent mb-6" />
                  <h3 className="font-display font-bold text-off text-lg mb-3">
                    {s.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function ApproachSection() {
  const { T } = useLanguage();
  return (
    <section className="py-24 md:py-36 border-t border-line">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {T.approach.kicker}
          </p>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight">
            {T.approach.title}
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {T.approach.steps.map((step) => (
            <StaggerItem key={step.n}>
              <p className="font-mono text-3xl text-accent mb-4">{step.n}</p>
              <h3 className="font-display font-bold text-off text-xl mb-3">
                {step.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function KpiSection() {
  const { T } = useLanguage();
  return (
    <section className="py-24 md:py-36 border-t border-line">
      <div className="container-content grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {T.kpi.kicker}
          </p>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight mb-6">
            {T.kpi.title}
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">{T.kpi.text}</p>

          <StaggerGroup className="grid grid-cols-2 gap-5">
            {T.kpi.items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <StaggerItem key={item.name}>
                  <div className="flex items-center gap-3 bg-charcoal border border-line rounded-sm2 px-4 py-3.5">
                    <Icon className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-off text-sm font-medium">{item.name}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] rounded-md2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=70&auto=format&fit=crop"
              alt="Panel de indicadores y desempeño de negocio en una pantalla"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CxSection() {
  const { T } = useLanguage();
  return (
    <section className="py-24 md:py-36 border-t border-line">
      <div className="container-content grid md:grid-cols-2 gap-14 items-center">
        <Reveal className="order-2 md:order-1">
          <div className="relative aspect-[4/5] rounded-md2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=70&auto=format&fit=crop"
              alt="Equipo de servicio al cliente colaborando en una oficina"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/40" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {T.cx.kicker}
          </p>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight mb-8">
            {T.cx.title}
          </h2>
          <StaggerGroup className="grid grid-cols-2 gap-y-4 gap-x-6">
            {T.cx.items.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-off text-sm">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}

export function OperationsSection() {
  const { T } = useLanguage();
  return (
    <section className="relative py-24 md:py-36 border-t border-line overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=70&auto=format&fit=crop"
        alt="Vista de operaciones y flujo de trabajo en un entorno empresarial"
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
      <div className="container-content relative max-w-2xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {T.operations.kicker}
          </p>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight mb-6">
            {T.operations.title}
          </h2>
          <p className="text-muted text-lg leading-relaxed">{T.operations.text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  const { T } = useLanguage();
  return (
    <section className="py-24 md:py-36 border-t border-line">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {T.industries.kicker}
          </p>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight">
            {T.industries.title}
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {T.industries.items.map((item) => (
            <StaggerItem key={item}>
              <div className="h-full bg-charcoal border border-line rounded-md2 p-7 hover:border-accent hover:-translate-y-1.5 transition-all duration-300">
                <p className="text-off font-display font-bold leading-snug">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function WhySection() {
  const { T } = useLanguage();
  return (
    <section className="py-24 md:py-36 border-t border-line">
      <div className="container-content">
        <Reveal className="max-w-2xl mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            {T.why.kicker}
          </p>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight">
            {T.why.title}
          </h2>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {T.why.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <StaggerItem key={item.name}>
                <Icon className="w-8 h-8 text-accent mb-5" />
                <h3 className="font-display font-bold text-off text-lg mb-3">
                  {item.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function CtaFinalSection() {
  const { T } = useLanguage();
  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="container-content text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-display font-extrabold text-off text-3xl md:text-5xl leading-tight mb-6">
            {T.ctaFinal.title}
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">{T.ctaFinal.text}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm2 bg-accent px-8 py-4 font-mono text-xs tracking-widest uppercase text-ink font-medium hover:-translate-y-0.5 transition-transform duration-200"
          >
            {T.ctaFinal.button}
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
