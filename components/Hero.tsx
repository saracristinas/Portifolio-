"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="prose max-w-none">
        <h2 className="text-4xl font-extrabold">Olá, eu sou [Seu Nome]</h2>
        <p className="text-lg">
          <TypeAnimation
            sequence={[
              'Desenvolvedor Front-end',
              1500,
              'Designer de interfaces',
              1500,
              'Criador de experiências digitais',
              1500
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>
      </motion.div>
    </section>
  );
}
