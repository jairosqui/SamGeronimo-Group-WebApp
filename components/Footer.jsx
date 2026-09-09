"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { IconMail, IconPhone, IconPin } from "./Icons";
import { NAV_ITEMS } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { T } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-content py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Logo compact />
          <p className="mt-5 font-mono text-[11px] tracking-[0.15em] text-accent uppercase">
            {T.footer.descriptor}
          </p>
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
            {T.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-widest uppercase text-off mb-5">
            {T.footer.explore}
          </h3>
          <ul className="space-y-3">
            {NAV_ITEMS.filter((i) => i.key !== "contact").map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  {T.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-widest uppercase text-off mb-5">
            {T.footer.servicesTitle}
          </h3>
          <ul className="space-y-3">
            {T.services.items.map((s) => (
              <li key={s.name} className="text-sm text-muted">
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-widest uppercase text-off mb-5">
            {T.footer.contactTitle}
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-muted">
              <IconPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>{T.contact.address}</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted">
              <IconPhone className="w-4 h-4 text-accent shrink-0" />
              <a href={`tel:${T.contact.phone.replace(/[^\d+]/g, "")}`} className="hover:text-accent transition-colors">
                {T.contact.phone}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-sm2 bg-accent px-5 py-2.5 font-mono text-xs tracking-widest uppercase text-ink font-medium hover:-translate-y-0.5 transition-transform duration-200"
              >
                {T.nav.cta}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-content py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {year} {T.contact.companyName}. {T.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted">{T.footer.privacy}</span>
            <span className="text-xs text-muted">{T.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
