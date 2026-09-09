"use client";

import { PageBand } from "@/components/PageBand";
import { ContactForm } from "@/components/ContactForm";
import { IconPhone, IconPin } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";

export function ContactPageContent() {
  const { T } = useLanguage();
  return (
    <>
      <PageBand
        kicker={T.bands.contact.kicker}
        title={T.bands.contact.title}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=70&auto=format&fit=crop"
      />
      <section className="py-24 md:py-32">
        <div className="container-content grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
              {T.contact.companyName}
            </p>
            <p className="text-muted mb-8">{T.contact.companyTagline}</p>
            <p className="text-off text-lg leading-relaxed mb-10">{T.contact.text}</p>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <IconPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                <span className="text-off">{T.contact.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <IconPhone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`tel:${T.contact.phone.replace(/[^\d+]/g, "")}`}
                  className="text-off hover:text-accent transition-colors"
                >
                  {T.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 bg-charcoal border border-line rounded-md2 p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
