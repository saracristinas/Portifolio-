"use client";

import { motion } from "framer-motion";
import { FiHeart, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 dark:bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* CONTAINER: centralizado e com padding lateral */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-3 gap-8 border-b border-slate-800">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Sara</h3>
            <p className="text-slate-400 mb-4">
              Desenvolvedora Full Stack apaixonada por criar experiências digitais incríveis.
            </p>
            <div className="flex gap-3">
              {["🐙", "💼", "🐦", "📸"].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-slate-800 hover:bg-teal-500 transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Skills", "Projetos", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-slate-400">
              <li>📧 sarasales17062000@gmail.com</li>
              <li>📱 +55 (11) 99999-9999</li>
              <li>📍 Recife, Brasil</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Sara. Feito com{" "}
            <FiHeart className="inline w-4 h-4 text-red-500" /> e muita dedicação.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-teal-500 hover:bg-teal-600 transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
