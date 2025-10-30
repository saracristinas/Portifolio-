"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "../locales/en.json";
import pt from "../locales/pt.json";
import es from "../locales/es.json";

type Locale = "en" | "pt" | "es";

type Translations = typeof en;

const LOCALES: Record<Locale, Translations> = {
  en,
  pt,
  es,
};

type I18nContextValue = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: (key: string, fallback?: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function LanguageProvider({ children, initialLang }: { children: React.ReactNode; initialLang?: Locale }) {
  const [lang, setLangState] = useState<Locale>(initialLang ?? "pt");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "en" || stored === "pt" || stored === "es") {
      setLangState(stored as Locale);
    }
  }, []);

  const setLang = (l: Locale) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string, fallback = "") => {
    const parts = key.split(".");
    let cur: any = LOCALES[lang];
    for (const p of parts) {
      if (!cur) return fallback || key;
      cur = cur[p];
    }
    return typeof cur === "string" ? cur : fallback || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

export default LanguageProvider;
