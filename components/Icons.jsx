const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export function IconStrategy({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 20V10M12 20V4M20 20v-7" />
      <path d="M4 10l4-3 4 4 8-7" />
    </svg>
  );
}

export function IconProcess({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 7h11a3 3 0 0 1 3 3v1" />
      <path d="M15 8l3-3 3 3" />
      <path d="M20 17H9a3 3 0 0 1-3-3v-1" />
      <path d="M9 16l-3 3-3-3" />
    </svg>
  );
}

export function IconKpi({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12l4-4" />
      <path d="M12 3v2M21 12h-2M12 21v-2M3 12h2" />
    </svg>
  );
}

export function IconCx({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.8-3.4 3-5 5.5-5s4.7 1.6 5.5 5" />
      <circle cx="17.5" cy="7" r="2.2" />
      <path d="M15.5 12.3c2 .2 3.6 1.6 4.3 4.4" />
    </svg>
  );
}

export function IconGrowth({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 18l5-6 4 3 7-9" />
      <path d="M15 6h5v5" />
    </svg>
  );
}

export function IconOperations({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="2.8" />
      <path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l1.9-1.4-2-3.4-2.2.7a7.6 7.6 0 0 0-2.6-1.5L14 2.5h-4l-.5 2.4a7.6 7.6 0 0 0-2.6 1.5l-2.2-.7-2 3.4L4.6 10.5a7.6 7.6 0 0 0 0 3l-1.9 1.4 2 3.4 2.2-.7c.75.66 1.63 1.18 2.6 1.5l.5 2.4h4l.5-2.4a7.6 7.6 0 0 0 2.6-1.5l2.2.7 2-3.4-1.9-1.4Z" />
    </svg>
  );
}

export function IconTarget({ className }) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArrowRight({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12h16" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconMenu({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function IconPlus({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconMail({ className }) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconPhone({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M5 4h3.2l1.4 4.2-2 1.6a12 12 0 0 0 5.6 5.6l1.6-2L19 15v3.2a1.8 1.8 0 0 1-2 1.8A15.8 15.8 0 0 1 3.2 6a1.8 1.8 0 0 1 1.8-2Z" />
    </svg>
  );
}

export function IconPin({ className }) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  );
}

export const ICONS = {
  strategy: IconStrategy,
  process: IconProcess,
  kpi: IconKpi,
  cx: IconCx,
  growth: IconGrowth,
  operations: IconOperations,
  target: IconTarget,
};
