"use client";

import { ReactNode, useEffect } from 'react';
import { Toaster } from 'sonner';
import LanguageProvider from './LanguageProvider';

export default function Providers({ children, initialLang }: { children: ReactNode; initialLang?: 'pt' | 'en' | 'es' }) {
  // ensure initial theme is applied on client
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') document.documentElement.classList.add('dark');
  }, []);

  return (
    <LanguageProvider initialLang={initialLang}>
      {children}
      <Toaster position="top-right" />
    </LanguageProvider>
  );
}
