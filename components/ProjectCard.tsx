"use client";

import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description?: string;
  countryCode?: string; 
} & Omit<
  HTMLAttributes<HTMLDivElement>,
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationCancel'
  | 'onAnimationIteration'
>;

function countryCodeToEmoji(code?: string) {
  if (!code) return '🏳️';
  // Convert 'BR' => 🇧🇷
  const upper = code.toUpperCase();
  return upper
    .split('')
    .map(c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join('');
}

export default function ProjectCard({ title, description, countryCode, ...rest }: Props) {
  return (
    <motion.div
      className="border rounded-lg p-4 card-bg shadow-sm hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      {...(rest as any)}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{countryCodeToEmoji(countryCode)}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          {description && <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
}
