"use client";

import React from "react";
import { useI18n } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Português"
        title="Português"
        onClick={() => setLang("pt")}
        className={`px-2 py-1 rounded transition-all ${lang === "pt" ? "ring-2 ring-teal-400 scale-110" : "opacity-70 hover:opacity-100"}`}
      >
        <span className="text-lg">🇧🇷</span>
      </button>

      <button
        aria-label="English"
        title="English"
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded transition-all ${lang === "en" ? "ring-2 ring-teal-400 scale-110" : "opacity-70 hover:opacity-100"}`}
      >
        <span className="text-lg">🇺🇸</span>
      </button>

      <button
        aria-label="Español"
        title="Español"
        onClick={() => setLang("es")}
        className={`px-2 py-1 rounded transition-all ${lang === "es" ? "ring-2 ring-teal-400 scale-110" : "opacity-70 hover:opacity-100"}`}
      >
        <span className="text-lg">🇪🇸</span>
      </button>
    </div>
  );
}
