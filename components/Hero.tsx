"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Desenvolvedora Full Stack",
    "Engenheira de Software",
    "Criadora de Experiências",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      className="
        relative isolate
        min-h-screen
        flex items-center justify-center
        overflow-hidden
        bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50
        dark:from-slate-950 dark:via-teal-950 dark:to-cyan-950
        pt-20 sm:pt-24 lg:pt-28 xl:pt-32   /* ↑ mais espaço no desktop, sem mexer no mobile */
        pb-28 sm:pb-32
      "
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            flex flex-col lg:flex-row items-center justify-between
            gap-8 sm:gap-12 lg:gap-24       /* ↑ mais “respiro” entre texto e foto no desktop */
          "
        >
          {/* Image - Ordem 1 em mobile, ordem 2 em desktop */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 via-cyan-400 to-emerald-400 animate-gradient p-1">
                  <div className="w-full h-full rounded-full bg-slate-50 dark:bg-slate-900 p-2">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                      <Image
                        src="/sasa.jpeg"
                        alt="Sara"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={itemVariants}
            className="
              flex-1 text-center lg:text-left w-full order-2 lg:order-1
              lg:mt-6 xl:mt-10 2xl:mt-16   /* ↑ empurra o bloco de texto um pouco para baixo só em telas grandes */
            "
          >
            <div className="flex flex-col">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="
                  inline-block mb-4 sm:mb-5 lg:mb-6  /* ↑ mais espaço abaixo do badge no desktop */
                  order-1
                "
              >
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 rounded-full text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-semibold">
                  👋 Bem-vinda ao meu portfólio
                </span>
              </motion.div>

              <div className="order-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  Olá, eu sou{" "}
                  <span className="gradient-text block sm:inline mt-2 sm:mt-0">
                    Sara
                  </span>
                </h1>

                <div className="min-h-[4rem] sm:min-h-[5rem] lg:min-h-[4rem] mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-600 dark:text-slate-300">
                    {text}
                    <span className="animate-pulse">|</span>
                  </h2>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
                  Apaixonada por criar soluções digitais inovadoras e experiências
                  de usuário incríveis. Transformo ideias em código e código em
                  realidade.
                </p>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                >
                  <a
                    href="#projetos"
                    className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    Ver Projetos
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                  <a
                    href="#contato"
                    className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    Entre em Contato
                    <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="/curriculo.pdf"
                    download
                    className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
                  >
                    <FiDownload className="w-4 h-4 sm:w-5 sm:h-5" /> CV
                  </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                  variants={itemVariants}
                  className="flex gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center lg:justify-start"
                >
                  <a
                    href="https://github.com/saracristinas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sara-sales-95520618a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="mailto:sara@exemplo.com"
                    className="p-2.5 sm:p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="
          pointer-events-none
          absolute inset-x-0
          bottom-4 sm:bottom-6 md:bottom-8
          z-50
          flex justify-center
        "
      >
        <motion.button
          type="button"
          aria-label="Rolar para a seção Sobre"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="pointer-events-auto flex flex-col items-center gap-2 cursor-pointer"
          onClick={() =>
            document
              .getElementById("sobre")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Role para baixo
          </span>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
