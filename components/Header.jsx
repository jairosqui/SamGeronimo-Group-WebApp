"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { IconMenu, IconClose } from "./Icons";
import { NAV_ITEMS } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { T, lang, toggleLang } = useLanguage();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-line bg-ink/75 backdrop-blur-md">
        <div className="container-content flex items-center justify-between h-20">
          <Logo compact />

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative py-2 font-mono text-xs tracking-widest uppercase text-muted hover:text-off transition-colors"
              >
                {T.nav[item.key]}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-1 font-mono text-xs tracking-widest text-muted hover:text-off transition-colors min-h-[44px] px-2"
              aria-label="Cambiar idioma / Switch language"
            >
              <span className={lang === "es" ? "text-accent" : ""}>ES</span>
              <span>/</span>
              <span className={lang === "en" ? "text-accent" : ""}>EN</span>
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-sm2 bg-accent px-5 py-2.5 font-mono text-xs tracking-widest uppercase text-ink font-medium hover:-translate-y-0.5 transition-transform duration-200"
            >
              {T.nav.cta}
            </Link>

            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 text-off"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
            >
              <IconMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink flex flex-col"
          >
            <div className="container-content flex items-center justify-between h-20">
              <Logo compact />
              <button
                className="flex items-center justify-center w-11 h-11 text-off"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <IconClose className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center container-content gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 font-display font-extrabold text-4xl ${
                      isActive(item.href) ? "text-accent" : "text-off"
                    }`}
                  >
                    {T.nav[item.key]}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                onClick={toggleLang}
                className="mt-6 flex items-center gap-2 font-mono text-sm tracking-widest text-muted min-h-[44px]"
              >
                <span className={lang === "es" ? "text-accent" : ""}>ESPAÑOL</span>
                <span>/</span>
                <span className={lang === "en" ? "text-accent" : ""}>ENGLISH</span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center rounded-sm2 bg-accent px-6 py-3.5 font-mono text-xs tracking-widest uppercase text-ink font-medium"
                >
                  {T.nav.cta}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
