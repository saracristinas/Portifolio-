"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiZap, FiHeart, FiTarget } from 'react-icons/fi';

const stats = [
  { label: 'Projetos Concluídos', value: '50+', icon: FiTarget },
  { label: 'Tecnologias', value: '20+', icon: FiCode },
  { label: 'Anos de Experiência', value: '3+', icon: FiZap },
  { label: 'Clientes Satisfeitos', value: '30+', icon: FiHeart },
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Developer',
    company: 'Tech Company',
    description: 'Liderando equipe de desenvolvimento e arquitetura de soluções.',
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Startup Inovadora',
    description: 'Desenvolvimento de aplicações web modernas com React e Node.js.',
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    company: 'Agência Digital',
    description: 'Criação de interfaces responsivas e experiências interativas.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="sobre" className="section bg-white dark:bg-slate-950" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Conheça minha jornada e o que me move como desenvolvedora
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card text-center group hover:border-teal-500 dark:hover:border-teal-400"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-teal-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">
                Transformando Ideias em{' '}
                <span className="gradient-text">Realidade Digital</span>
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Olá! Sou Sara, uma desenvolvedora apaixonada por criar experiências 
                  digitais que fazem a diferença. Com formação em Ciência da Computação 
                  e anos de experiência prática, especializei-me em desenvolver soluções 
                  web modernas e escaláveis.
                </p>
                <p>
                  Minha jornada no desenvolvimento começou com curiosidade e evoluiu 
                  para uma paixão genuína por resolver problemas complexos através do 
                  código. Acredito que a melhor tecnologia é aquela que melhora a vida 
                  das pessoas de forma intuitiva e elegante.
                </p>
                <p>
                  Quando não estou programando, você pode me encontrar explorando novas 
                  tecnologias, contribuindo para projetos open source, ou compartilhando 
                  conhecimento com a comunidade de desenvolvimento.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 rounded-full text-teal-600 dark:text-teal-400 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Experiência Profissional</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="relative pl-8 border-l-2 border-teal-500 dark:border-teal-400 pb-6 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-500 dark:bg-teal-400 ring-4 ring-white dark:ring-slate-950" />
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 rounded-full text-teal-600 dark:text-teal-400 text-xs font-semibold mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-teal-600 dark:text-teal-400 font-medium">
                        {item.company}
                      </p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
