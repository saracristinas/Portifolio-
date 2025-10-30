"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "./LanguageProvider";

// navLinks will be rendered using translations

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-800"
            : "bg-transparent"
        }`}
      >
        {/* container com padding lateral para não colar nas bordas */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo — estilo "tag de código": </ Sara > */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center font-mono text-xl sm:text-2xl font-bold tracking-wide"
              aria-label={t('nav.home')}
            >
              <span className="gradient-text flex items-center">
                <span
                  className="
                    text-teal-400/90 dark:text-teal-300/90
                    transition-transform duration-300
                    group-hover:-translate-x-0.5
                  "
                >
                  &lt;/&nbsp;
                </span>
                <span className="mx-0.5">Sara</span>
                <span
                  className="
                    text-teal-400/90 dark:text-teal-300/90
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  &nbsp;&gt;
                </span>
              </span>
            </motion.a>

            {/* Navegação desktop */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { key: "nav.home", href: "/" },
                { key: "nav.about", href: "#sobre" },
                { key: "nav.skills", href: "#skills" },
                { key: "nav.projects", href: "#projetos" },
                { key: "nav.contact", href: "#contato" },
              ].map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors relative group"
                >
                  {t(link.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>

            {/* Botão menu mobile */}
            <div className="flex md:hidden items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-16 sm:top-20 right-0 bottom-0 w-64 bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-40 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {[
                { key: "nav.home", href: "/" },
                { key: "nav.about", href: "#sobre" },
                { key: "nav.skills", href: "#skills" },
                { key: "nav.projects", href: "#projetos" },
                { key: "nav.contact", href: "#contato" },
              ].map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 py-3 border-b border-slate-200 dark:border-slate-800 transition-colors"
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
