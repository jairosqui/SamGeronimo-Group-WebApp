"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function StaticBars() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="14" width="4" height="7" fill="#4A4845" />
      <rect x="10" y="8" width="4" height="13" fill="#8C8A87" />
      <rect x="17" y="3" width="4" height="18" fill="#FF6B00" />
    </svg>
  );
}

export function Marquee() {
  const { T } = useLanguage();
  const items = T.marquee;
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="border-y border-line bg-charcoal overflow-hidden">
      <motion.div
        className="flex items-center gap-12 py-5 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-4 shrink-0">
            <StaticBars />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted whitespace-nowrap">
              {item}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
