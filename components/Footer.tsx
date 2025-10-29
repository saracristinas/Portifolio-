"use client";

import { motion } from "framer-motion";
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin, FiDownload, FiMail } from "react-icons/fi";

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
        <div className="py-10 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Brand */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-xl font-bold gradient-text">Sara</a>
                <p className="hidden sm:block text-slate-400">Desenvolvedora Full Stack — Java, React</p>
              </div>

              {/* Center links */}
              <nav aria-label="Links rápidos" className="order-first sm:order-none">
                <ul className="flex flex-wrap gap-6 items-center justify-center">
                  {[
                    { label: 'Sobre', href: '#sobre' },
                    { label: 'Skills', href: '#skills' },
                    { label: 'Projetos', href: '#projetos' },
                    { label: 'Contato', href: '#contato' },
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Socials */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/saracristinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sara-sales-95520618a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sarasales17062000@gmail.com"
                  aria-label="Enviar email"
                  className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                </a>
                <a
                  href="/Curriculo_Sara_FullStack.pdf"
                  download
                  aria-label="Baixar CV"
                  className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <FiDownload className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <p className="text-slate-400 text-sm text-center w-full">
              © {new Date().getFullYear()} Sara. Feito com <FiHeart className="inline w-4 h-4 text-red-500 mx-1" /> e muita dedicação.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-4 p-3 rounded-full bg-teal-500 hover:bg-teal-600 transition-colors shadow-lg"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
