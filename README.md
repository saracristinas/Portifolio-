# Portfólio — Next.js 15 + TypeScript scaffold

Estrutura inicial para criar seu portfólio usando:

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS (darkMode: 'class')
- Framer Motion (animações + useInView)
- React Icons
- country-flag-icons (bandeiras SVG)
- react-type-animation (texto no Hero)
- sonner (toasts)

Como usar

1. Instale dependências:

```bash
npm install
```

2. Rode em modo desenvolvimento:

```bash
npm run dev
```

Arquivos importantes criados

- `package.json` — scripts e dependências
- `tsconfig.json` — config TypeScript
- `next.config.js` — config Next.js
- `tailwind.config.cjs` e `postcss.config.js` — Tailwind setup
- `styles/globals.css` — estilos globais com diretivas Tailwind
- `app/layout.tsx` — layout raiz que inclui Providers (Toaster + tema)
- `app/page.tsx` — página inicial com o `Hero`
- `components/` — `Providers`, `ThemeToggle`, `Navbar`, `Hero`, `Footer`

Notas e próximos passos

- Rode `npm install` para instalar dependências.
- Ajuste seu nome, links e conteúdo do `Hero` e `Navbar`.
- Se quiser usar `country-flag-icons`, importe os SVGs de acordo com a documentação do pacote (ex.: `import 'country-flag-icons/3x2/BR.svg'` ou utilize o subpath apropriado).
- Considere adicionar lint/format e CI, e rodar `next build` antes de publicar.

# Portifolio-