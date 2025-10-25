"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiPostgresql, SiDocker,
  SiGit, SiFigma, SiVercel, SiPython
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 95, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
      { name: 'Python', icon: SiPython, level: 80, color: '#3776AB' },
      { name: 'MongoDB', icon: SiMongodb, level: 82, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 78, color: '#4169E1' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, level: 75, color: '#2496ED' },
      { name: 'Figma', icon: SiFigma, level: 85, color: '#F24E1E' },
      { name: 'Vercel', icon: SiVercel, level: 88, color: '#000000' },
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
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon
                            className="w-6 h-6"
                            style={{ color: skill.color }}
                          />
                          <span className="font-semibold text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                          style={{
                            boxShadow: `0 0 10px ${skill.color}40`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
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
                'Responsive Design',
                'REST APIs',
                'GraphQL',
                'CI/CD',
                'Agile/Scrum',
                'Testing (Jest, Vitest)',
                'Performance Optimization',
                'SEO',
                'Accessibility (a11y)',
                'UI/UX Design',
              ].map((skill) => (
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
