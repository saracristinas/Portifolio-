import '../../styles/globals.css';
import type { ReactNode } from 'react';
import Providers from '../../components/Providers';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

const LANG_TO_HTML_LANG: Record<string, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

export default async function LocaleLayout({ children, params }: Props) {
  const { lang: langParam } = await params;
  const lang = ['pt', 'en', 'es'].includes(langParam) ? (langParam as 'pt' | 'en' | 'es') : 'pt';
  const htmlLang = LANG_TO_HTML_LANG[lang] ?? 'pt-BR';

  return (
    <html lang={htmlLang}>
      <body>
        {/* Pass initialLang to Providers so the client picks the correct locale on first render */}
        <Providers initialLang={lang}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
