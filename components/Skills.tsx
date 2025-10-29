"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiNextdotjs, SiTypescript,
  SiDocker,
  SiGit, SiVercel, SiPython, SiNodedotjs,
  SiSpringboot,
  SiJavascript, SiAmazonaws, SiTailwindcss,
  SiHtml5, SiCss3, SiSass, SiBootstrap, SiAngular,
  SiMongodb, SiPostgresql, SiMysql, SiJira
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FiCode } from 'react-icons/fi';
import {  MdAccessibility } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';
import { FaObjectGroup, FaShieldAlt, FaCogs } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Front-end',
    skills: [
      { name: 'React', icon: SiReact, level: 95, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, level: 92, color: '#f7df1e' },
      { name: 'HTML', icon: SiHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, level: 92, color: '#1572B6' },
      { name: 'Angular', icon: SiAngular, level: 60, color: '#DD0031' },
    ],
  },
  {
    title: 'Bibliotecas & UI',
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#06B6D4' },
      { name: 'Sass Modules', icon: SiSass, level: 80, color: '#CC6699' },
      { name: 'Material UI (MUI)', icon: FiCode, level: 78, color: '#0081CB' },
      { name: 'Bootstrap', icon: SiBootstrap, level: 75, color: '#563D7C' },
    ],
  },
  {
    title: 'Backend',
    skills: [
  { name: 'Java', icon: DiJava, level: 85, color: '#0077C8' },
  { name: 'SpringBoot', icon: SiSpringboot, level: 82, color: '#47A248' },
  { name: 'Python', icon: SiPython, level: 80, color: '#306998' },
  { name: 'Node.js', icon: SiNodedotjs, level: 78, color: '#8CC84B' },
    ],
  },
  {
    title: 'Bancos de Dados',
    skills: [
        { name: 'MySQL', icon: SiMysql, level: 75, color: '#00758F' },
      { name: 'MongoDB', icon: SiMongodb, level: 82, color: '#3FA037' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 78, color: '#336791' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
  { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, level: 75, color: '#2496ED' },
  { name: 'AWS', icon: SiAmazonaws, level: 85, color: '#FF9900' },
  { name: 'Vercel', icon: SiVercel, level: 88, color: '#000000' },
    ],
  },
  {
    title: 'Conceitos & Metodologias',
    skills: [
  { name: 'Lógica de Programação', icon: GiBrain, level: 90, color: '#8B5CF6' },
  { name: 'POO', icon: FaObjectGroup, level: 85, color: '#0EA5A4' },
  { name: 'Acessibilidade (A11Y)', icon: MdAccessibility, level: 80, color: '#059669' },
  { name: 'Segurança da Informação & Cibersegurança', icon: FaShieldAlt, level: 70, color: '#EF4444' },
  { name: 'Metodologias Ágeis (Scrum, Kanban)', icon: SiJira, level: 85, color: '#0052CC' },
  { name: 'Engenharia de Software', icon: FaCogs, level: 88, color: '#2563EB' },
    ],
  },
];

export default function Skills() {
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
    <section id="skills" className="section bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Minhas <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções incríveis
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300"
                        aria-label={`${skill.name}`}
                      >
                        {(() => {
                          const Icon = skill.icon ?? FiCode;
                          return <Icon className="w-5 h-5" style={{ color: skill.color }} aria-hidden="true" />;
                        })()}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Outras Competências
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST APIs',
                'Clean Code',
                'CI/CD',
                'Agile / Scrum',
                'Microservices',
                'Database Design (SQL)',
                'Performance Optimization',
                'Desenvolvimento Web Responsivo'
              ]
                .map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-5 py-2.5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 font-medium shadow-sm hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
