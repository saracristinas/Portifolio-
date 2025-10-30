"use client";

import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "./LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

type Language = {
  code: "pt" | "en" | "es";
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code: "pt" | "en" | "es") => {
    setLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 
          px-3 py-2 
          rounded-lg 
          bg-white dark:bg-slate-800 
          border-2 border-slate-200 dark:border-slate-700
          hover:border-teal-400 dark:hover:border-teal-500
          transition-all duration-300
          shadow-sm hover:shadow-md
        "
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-xl" aria-hidden="true">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-slate-700 dark:text-slate-300">
          {currentLanguage.name}
        </span>
        <FiChevronDown 
          className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              absolute top-full right-0 mt-2
              w-48
              bg-white dark:bg-slate-800
              border-2 border-slate-200 dark:border-slate-700
              rounded-xl
              shadow-xl
              overflow-hidden
              z-50
            "
          >
            <div className="py-1">
              {languages.map((language, index) => (
                <React.Fragment key={language.code}>
                  <button
                    onClick={() => handleLanguageChange(language.code)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3
                      text-left
                      transition-all duration-200
                      ${
                        lang === language.code
                          ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
                          : "hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-300"
                      }
                    `}
                    aria-current={lang === language.code ? "true" : "false"}
                  >
                    <span className="text-2xl" aria-hidden="true">{language.flag}</span>
                    <div className="flex-1">
                      <span className="font-medium">{language.name}</span>
                    </div>
                    {lang === language.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-teal-500"
                      />
                    )}
                  </button>
                  {index < languages.length - 1 && (
                    <div className="h-px bg-slate-200 dark:bg-slate-700 mx-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
