"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowRight } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { T } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-content grid lg:grid-cols-2 gap-14 items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6">
            {T.hero.kicker}
          </p>
          <h1 className="font-display font-extrabold text-off text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-7">
            {T.hero.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-lg mb-10">
            {T.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm2 bg-accent px-7 py-3.5 font-mono text-xs tracking-widest uppercase text-ink font-medium hover:-translate-y-0.5 transition-transform duration-200"
            >
              {T.hero.ctaPrimary}
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-sm2 border border-off/40 px-7 py-3.5 font-mono text-xs tracking-widest uppercase text-off font-medium hover:border-off hover:-translate-y-0.5 transition-all duration-200"
            >
              {T.hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] rounded-md2 overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1758518729829-162d6bf27b5e?w=1600&q=70&auto=format&fit=crop"
            alt="Equipo empresarial diverso colaborando en una oficina moderna"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
