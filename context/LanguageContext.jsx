"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "samgeronimo_lang";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored =
        sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
      if (stored === "es" || stored === "en") setLang(stored);
    } catch (e) {
      /* storage unavailable */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = lang;
    try {
      sessionStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* storage unavailable */
    }
  }, [lang, hydrated]);

  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, T: translations[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
