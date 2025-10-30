"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { useI18n } from './LanguageProvider';
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';

const LOCALES: Record<string, any> = { en, pt, es };

const defaultProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de e-commerce com carrinho, checkout e painel administrativo.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.',
    image: '/projects/tasks.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'Social Media Dashboard',
    description: 'Dashboard analítico para gerenciamento de múltiplas redes sociais.',
    image: '/projects/dashboard.jpg',
    tags: ['Next.js', 'Chart.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    title: 'Weather App',
    description: 'Aplicativo de previsão do tempo com geolocalização e mapas interativos.',
    image: '/projects/weather.jpg',
    tags: ['React', 'OpenWeather API', 'Leaflet'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description: 'Plataforma de blog com CMS, markdown support e SEO otimizado.',
    image: '/projects/blog.jpg',
    tags: ['Next.js', 'MDX', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    title: 'Portfolio Generator',
    description: 'Gerador de portfólios personalizados com templates prontos.',
    image: '/projects/portfolio.jpg',
    tags: ['React', 'Styled Components', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { lang, t } = useI18n();
  const L = LOCALES[lang] ?? { projects: defaultProjects };
  // Ensure projects is always an array to avoid runtime errors when locale provides an object
  const projects = Array.isArray(L?.projects) ? L.projects : defaultProjects;

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projetos" className="section bg-white dark:bg-slate-950" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {t('projects.titlePrefix')} <span className="gradient-text">{t('projects.titleSuffix')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="card overflow-hidden p-0 h-full flex flex-col hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-teal-400 to-cyan-500 overflow-hidden">
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold flex items-center gap-1">
                        <FiStar className="w-3 h-3" />
                        Destaque
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[1]" />
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-50">
                      💻
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(Array.isArray(project.tags) ? project.tags : []).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 rounded-full text-teal-600 dark:text-teal-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FiGithub className="w-4 h-4" />
                        Código
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/saracristinas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-teal-500 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-bold hover:bg-teal-500 dark:hover:bg-teal-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <FiGithub className="w-5 h-5" />
              Ver Todos no GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
