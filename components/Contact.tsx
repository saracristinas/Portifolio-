"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiSend, FiLinkedin } from 'react-icons/fi';
import { toast } from 'sonner';
import { useI18n } from './LanguageProvider';
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';

const LOCALES: Record<string, any> = { en, pt, es };

const contactInfoBase = [
  {
    icon: FiMail,
    key: 'contact.info.email.title',
    value: 'sarasales17062000@gmail.com',
    link: 'sarasales17062000@gmail.com',
  },
  {
    icon: FiLinkedin,
    key: 'contact.info.linkedin.title',
    value: 'sara-sales-95520618a',
    link: 'https://www.linkedin.com/in/sara-sales-95520618a/',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const { lang, t } = useI18n();
  const L = LOCALES[lang] ?? pt;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) {
        console.error('Contact API error', json);
        throw new Error(json?.error || 'Erro ao enviar mensagem');
      }

      toast.success(t('contact.toasts.success'));
      form.reset();
    } catch (err) {
      console.error('Failed to send contact form', err);
      toast.error(t('contact.toasts.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open Gmail compose in new tab with fallback to mailto
  function openGmailCompose() {
    const subject = 'Interesse em contato';
    const body = `Olá Sara,

    Estou entrando em contato pois tenho interesse no seu trabalho e gostaria de conversar sobre oportunidades.
    Atenciosamente,
    [Seu nome]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      'sarasales17062000@gmail.com'
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const mailtoLink = `mailto:sarasales17062000@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const newWin = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (!newWin) {
      window.location.href = mailtoLink;
    }
  }

  return (
    <section id="contato" className="section bg-slate-50 dark:bg-slate-900" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {t('contact.titlePrefix')} <span className="gradient-text">{t('contact.titleSuffix')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('contact.workWithMeTitle')}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">{t('contact.workWithMeText')}</p>
              </div>
              <div className="space-y-4 flex-1">
                {contactInfoBase.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-500/10 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t(info.key)}</h4>
                        {info.value && info.value.includes('@') ? (
                        <button
                          type="button"
                          onClick={openGmailCompose}
                          className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                          aria-label={`Enviar email para ${info.value}`}
                        >
                          {info.value}
                        </button>
                      ) : info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                          target={info.link && info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link && info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-400">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Disponibilidade (sem botão de agendamento) */}
              <div>
                <h4 className="font-semibold mb-4">{t('contact.availability.title')}</h4>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <p className="font-semibold text-slate-700 dark:text-slate-300">{t('contact.availability.status')}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('contact.availability.description')}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {Array.isArray(L?.contact?.availability?.tags)
                      ? L.contact.availability.tags.map((tag: string, i: number) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm">{tag}</span>
                        ))
                      : typeof t('contact.availability.tags') === 'string'
                      ? t('contact.availability.tags')
                          .split(',')
                          .map((tag: string, i: number) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm">{tag.trim()}</span>
                          ))
                      : null}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="card space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
                  >
                    {t('contact.form.name.label')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
                  >
                    {t('contact.form.email.label')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
                  >
                    {t('contact.form.subject.label')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
                    placeholder={t('contact.form.subject.placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
                  >
                    {t('contact.form.message.label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300 resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
