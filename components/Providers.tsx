"use client";

import { ReactNode, useEffect } from 'react';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: ReactNode }) {
  // ensure initial theme is applied on client
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      {children}
      <Toaster position="top-right" />
    </>
  );
}
