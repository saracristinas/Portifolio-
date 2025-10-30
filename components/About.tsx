"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiZap, FiTarget, FiLayers } from 'react-icons/fi';
import { useI18n } from './LanguageProvider';
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';

const LOCALES: Record<string, any> = { en, pt, es };

const statsBase = [
  { key: 'about.stats.projects', value: '20+', icon: FiTarget },
  { key: 'about.stats.tech', value: '20+', icon: FiCode },
  { key: 'about.stats.years', value: '2+', icon: FiZap },
  { key: 'about.stats.explored', value: '15+', icon: FiLayers },
];

const timelineBase = ['about.timeline.0', 'about.timeline.1', 'about.timeline.2', 'about.timeline.3'];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { lang, t } = useI18n();
  const L = LOCALES[lang] ?? pt;

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {t('about.titlePrefix')} <span className="gradient-text">{t('about.titleSuffix')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {statsBase.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card text-center group hover:border-teal-500 dark:hover:border-teal-400"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-teal-500 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t(stat.key)}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">
                {t('about.transformTitlePrefix')}{' '}
                <span className="gradient-text">{t('about.transformTitleSuffix')}</span>
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>{t('about.paragraphs.0')}</p>
                <p>{t('about.paragraphs.1')}</p>
                <p>{t('about.paragraphs.2')}</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  'skills.softSkills.accessibility',
                  'skills.softSkills.cleanCode',
                  'skills.softSkills.collaboration',
                  'skills.softSkills.learning',
                  'skills.softSkills.organization',
                  'skills.softSkills.curiosity'
                ].map((key) => (
                  <span
                    key={key}
                    className="px-4 py-2 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 rounded-full text-teal-600 dark:text-teal-400 text-sm font-medium"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">{t('about.experienceTitle')}</h3>
              <div className="space-y-6">
                {timelineBase.map((key, index) => {
                  const item = L?.about?.timeline?.[index] ?? {};
                  return (
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
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
