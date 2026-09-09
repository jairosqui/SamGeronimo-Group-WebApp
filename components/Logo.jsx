"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const barVariants = {
  hidden: { scaleY: 0.2 },
  show: (i) => ({
    scaleY: 1,
    transition: { duration: 1.3, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] },
  }),
};

// heights follow the approved lockup ratio (26 / 43 / 64) scaled down to the
// header spec: 16 / 27 / 40 px tall, 8px wide, on a shared baseline.
export function LogoMark({ compact = false, light = false }) {
  const heights = compact ? [16, 27, 40] : [26, 43, 64];
  const colors = light
    ? ["#C2BFBA", "#6E6C69", "#FF6B00"]
    : ["#4A4845", "#8C8A87", "#FF6B00"];
  const width = compact ? 8 : 12;
  const gap = width / 2;
  const maxH = heights[2];

  return (
    <div
      className="flex items-end"
      style={{ height: maxH, gap }}
      aria-hidden="true"
    >
      {heights.map((h, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={barVariants}
          initial="hidden"
          animate="show"
          style={{
            display: "block",
            width,
            height: h,
            background: colors[i],
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}

export function Logo({ compact = false, className = "" }) {
  return (
    <Link
      href="/"
      className={`flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded-sm2 ${className}`}
      style={{ gap: compact ? 19 : 24 }}
      aria-label="SamGeronimo Group — Inicio"
    >
      <LogoMark compact={compact} />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-extrabold tracking-tight text-off"
          style={{ fontSize: compact ? 15 : 20, letterSpacing: "-0.02em" }}
        >
          SAMGERONIMO
        </span>
        <span
          className="font-display font-normal text-muted"
          style={{ fontSize: compact ? 10 : 13, letterSpacing: "-0.01em" }}
        >
          GROUP
        </span>
      </span>
    </Link>
  );
}
