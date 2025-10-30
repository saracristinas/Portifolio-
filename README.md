# 🎨 Portfólio Pessoal — Sara Sales

> Portfólio profissional moderno e responsivo, desenvolvido com Next.js 15, TypeScript e Tailwind CSS, apresentando projetos, habilidades e experiência profissional de forma elegante e acessível.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Sistema de Design](#-sistema-de-design)
- [Internacionalização (i18n)](#-internacionalização-i18n)
- [Formulário de Contato](#-formulário-de-contato)
- [Deploy](#-deploy)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🌟 Sobre o Projeto

Este é um portfólio pessoal desenvolvido para apresentar minha jornada como **Desenvolvedora Full Stack**, destacando:

- **Experiências profissionais** em empresas como DBC Company, MV Sistemas, Ser Educacional e BRK
- **Projetos práticos** desenvolvidos com tecnologias modernas
- **Habilidades técnicas** abrangendo frontend, backend, databases e DevOps
- **Soft skills** como acessibilidade, código limpo e aprendizado contínuo

O projeto foi construído com foco em **performance**, **acessibilidade (A11Y)**, **responsividade** e **internacionalização**, seguindo as melhores práticas de desenvolvimento web.

---

## ✨ Funcionalidades

### 🎯 Principais Features

- ✅ **Design Responsivo** - Adaptado para mobile, tablet e desktop
- 🌓 **Tema Claro/Escuro** - Alternância suave entre temas com persistência em localStorage
- 🌍 **Multilíngue** - Suporte para Português (PT-BR), Inglês (EN) e Espanhol (ES)
- 🎭 **Animações Fluidas** - Utilizando Framer Motion para transições e micro-interações
- 📧 **Formulário de Contato Funcional** - Integrado com Nodemailer para envio de emails
- 🎨 **Sistema de Design Consistente** - Cores, tipografia e componentes padronizados
- ♿ **Acessibilidade** - Semântica HTML, ARIA labels, navegação por teclado
- 🚀 **SEO Otimizado** - Metadata configurada para melhor indexação
- ⚡ **Performance** - Otimizado com Next.js 15 (App Router, Server Components)
- 🎪 **Efeitos Visuais** - Partículas animadas, gradientes dinâmicos, hover effects

### 📄 Seções do Portfólio

1. **Hero** - Apresentação inicial com efeito de digitação e links sociais
2. **Sobre Mim** - Biografia, estatísticas e linha do tempo de experiências profissionais
3. **Skills** - Grid organizado de tecnologias e competências (Frontend, Backend, Databases, DevOps, Conceitos)
4. **Projetos** - Showcase de projetos com tags, descrições e links para GitHub/Demo
5. **Contato** - Formulário funcional para envio de mensagens diretas

---

## 🚀 Tecnologias Utilizadas

### **Core Framework**
- ⚡ **[Next.js 15](https://nextjs.org/)** - Framework React com App Router, Server Components e otimizações automáticas
- ⚛️ **[React 18.2](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- 📘 **[TypeScript 5.5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- 🎨 **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first para estilização rápida

### **UI & Animações**
- ✨ **[Framer Motion 10.0](https://www.framer.com/motion/)** - Biblioteca de animações declarativas para React
- 🎭 **[React Icons 4.10](https://react-icons.github.io/react-icons/)** - Conjunto abrangente de ícones SVG
- 🔤 **[React Type Animation 2.0](https://www.npmjs.com/package/react-type-animation)** - Efeito de digitação animada
- 🎯 **[React Simple Icons](https://www.npmjs.com/package/react-simple-icons)** - Ícones de marcas populares
- 🔔 **[Sonner 2.0](https://sonner.emilkowal.ski/)** - Sistema de notificações/toasts moderno

### **Backend & Utilitários**
- 📧 **[Nodemailer 6.9](https://nodemailer.com/)** - Envio de emails via SMTP
- 🎨 **[clsx 1.2](https://github.com/lukeed/clsx)** - Utilitário para concatenação de classes CSS
- 🌍 **[Country Flag Icons](https://www.npmjs.com/package/country-flag-icons)** - Bandeiras SVG para seleção de idioma

### **DevTools**
- 🔧 **ESLint** - Linter para garantir qualidade de código
- 🎯 **PostCSS** - Processador CSS com autoprefixer
- 📦 **npm** - Gerenciador de pacotes

---

## 📁 Estrutura do Projeto

```
Portifolio/
│
├── 📂 app/                          # Next.js 15 App Router
│   ├── layout.tsx                   # Layout raiz global (metadata, providers)
│   ├── page.tsx                     # Página inicial (Home)
│   │
│   ├── 📂 [lang]/                   # Rotas dinâmicas para i18n
│   │   ├── layout.tsx               # Layout com suporte a múltiplos idiomas
│   │   └── page.tsx                 # Página localizada
│   │
│   └── 📂 api/                      # API Routes
│       └── 📂 contact/
│           └── route.ts             # Endpoint para formulário de contato
│
├── 📂 components/                   # Componentes React reutilizáveis
│   ├── About.tsx                    # ℹ️ Seção "Sobre Mim" (biografia, stats, timeline)
│   ├── Contact.tsx                  # 📧 Formulário de contato com validação
│   ├── Footer.tsx                   # 🦶 Rodapé com links e redes sociais
│   ├── Hero.tsx                     # 🎯 Seção hero com efeito de digitação e partículas
│   ├── LanguageProvider.tsx         # 🌐 Context para gerenciamento de idioma
│   ├── LanguageToggle.tsx           # 🌍 Botão de alternância de idiomas (PT/EN/ES)
│   ├── Navbar.tsx                   # 🧭 Barra de navegação responsiva
│   ├── ProjectCard.tsx              # 🃏 Card individual para exibir projeto
│   ├── Projects.tsx                 # 💼 Grid de projetos em destaque
│   ├── Providers.tsx                # 🔌 Wrapper para Contexts (Tema, Toast, i18n)
│   ├── Skills.tsx                   # 🛠️ Showcase de habilidades técnicas
│   └── ThemeToggle.tsx              # 🌓 Botão dark/light mode
│
├── 📂 locales/                      # Arquivos de tradução (i18n)
│   ├── pt.json                      # Traduções em Português
│   ├── en.json                      # Traduções em Inglês
│   └── es.json                      # Traduções em Espanhol
│
├── 📂 public/                       # Arquivos estáticos
│   ├── sasa.jpeg                    # 🖼️ Foto de perfil
│   └── Curriculo_Sara_FullStack.pdf # 📄 Currículo para download
│
├── 📂 styles/
│   └── globals.css                  # 🎨 Estilos globais, variáveis CSS, animações
│
├── 📄 package.json                  # Dependências e scripts do projeto
├── 📄 tsconfig.json                 # Configuração TypeScript
├── 📄 next.config.js                # Configuração Next.js
├── 📄 tailwind.config.cjs           # Configuração Tailwind CSS
├── 📄 postcss.config.js             # Configuração PostCSS
├── 📄 next-env.d.ts                 # Declarações de tipos do Next.js
├── 📄 LICENSE                       # Licença MIT
└── 📄 README.md                     # Este arquivo (documentação)
```

---

## 🛠️ Instalação e Configuração

### Pré-requisitos

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** ou **yarn** (gerenciador de pacotes)
- Conta de email com SMTP configurado (para formulário de contato)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/saracristinas/Portifolio-.git
   cd Portifolio-
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente:**
   
   Crie um arquivo `.env.local` na raiz do projeto:
   ```env
   # SMTP Configuration (para formulário de contato)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=seu-email@gmail.com
   SMTP_PASS=sua-senha-de-app
   SMTP_FROM=seu-email@gmail.com
   EMAIL_TO=email-destino@gmail.com
   
   # Opcional: mostrar detalhes de erros de email
   SHOW_EMAIL_ERRORS=false
   ```

   > **Nota:** Para Gmail, você precisa gerar uma [senha de app](https://support.google.com/accounts/answer/185833).

4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   ```
   http://localhost:3000
   ```

---

## 📜 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento (localhost:3000)
npm run build    # Gera build otimizado para produção
npm run start    # Inicia servidor de produção (após build)
npm run lint     # Executa ESLint para verificar código
```

---

## 🎨 Sistema de Design

### **Variáveis CSS Personalizadas**

Definidas em `styles/globals.css` para fácil manutenção e consistência:

```css
/* Tema Claro */
--bg-primary: 245 247 250;        /* Fundo principal */
--bg-secondary: 237 242 247;      /* Fundo secundário */
--text-primary: 30 41 59;         /* Texto principal */
--text-secondary: 71 85 105;      /* Texto secundário */
--accent: 20 184 166;             /* Cor de destaque (Teal) */
--border: 203 213 225;            /* Bordas */

/* Tema Escuro */
--bg-primary: 10 10 15;
--bg-secondary: 17 24 39;
--text-primary: 248 250 252;
--accent: 45 212 191;             /* Cyan */
--border: 30 41 59;
```

### **Classes Utilitárias Customizadas**

```css
.section          /* Padding responsivo para seções */
.container        /* Container centralizado (max-width: 1280px) */
.gradient-text    /* Texto com gradiente teal/cyan */
.btn-primary      /* Botão principal com gradiente e sombra */
.btn-secondary    /* Botão secundário com borda */
.card             /* Card com hover effect */
```

### **Animações CSS**

- `gradient-shift` - Gradiente em movimento contínuo
- `float` - Flutuação vertical suave
- `glow` - Efeito de brilho pulsante
- `slide-up` - Entrada deslizante de baixo para cima

### **Efeitos Especiais**

- **Partículas Animadas** - 120 partículas com movimento complexo no Hero
- **Grid Pattern** - Padrão de grade sutil no background
- **Hover Effects** - Escalas, sombras e transições suaves
- **Scrollbar Customizada** - Estilizada com gradiente teal/cyan

---

## 🌍 Internacionalização (i18n)

### Idiomas Suportados

- 🇧🇷 **Português (PT-BR)** - Idioma padrão
- 🇺🇸 **Inglês (EN)**
- 🇪🇸 **Espanhol (ES)**

### Como Funciona

1. **Arquivos de Tradução**: `locales/pt.json`, `locales/en.json`, `locales/es.json`
2. **Context Provider**: `LanguageProvider.tsx` gerencia o idioma ativo
3. **Hook Customizado**: `useI18n()` para acessar traduções
4. **Persistência**: Idioma salvo em `localStorage`

### Estrutura de Tradução

```json
{
  "nav": { "home": "Início", "about": "Sobre", ... },
  "hero": { "title": "Olá, eu sou a ", ... },
  "about": { "titlePrefix": "Sobre", ... },
  "skills": { ... },
  "projects": { ... },
  "contact": { ... }
}
```

### Adicionar Novo Idioma

1. Criar arquivo em `locales/`, ex: `fr.json`
2. Adicionar ao `LanguageProvider.tsx`:
   ```ts
   import fr from '../locales/fr.json';
   const LOCALES = { en, pt, es, fr };
   ```
3. Adicionar botão em `LanguageToggle.tsx`

---

## 📧 Formulário de Contato

### Funcionalidades

- ✅ Validação de campos obrigatórios (Nome, Email, Assunto, Mensagem)
- ✅ Envio via Nodemailer (SMTP)
- ✅ Email de confirmação automático para o remetente
- ✅ Feedback visual com toasts (Sonner)
- ✅ Design responsivo e acessível

### Configuração SMTP

Edite `.env.local` com suas credenciais:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=senha-de-app-gerada
EMAIL_TO=email-destino@gmail.com
```

### Endpoint API

- **Rota**: `/api/contact`
- **Método**: `POST`
- **Corpo**:
  ```json
  {
    "name": "Nome do Remetente",
    "email": "email@exemplo.com",
    "subject": "Assunto",
    "message": "Mensagem completa"
  }
  ```

---

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com/)
3. Importe o repositório
4. Configure variáveis de ambiente (`.env.local`)
5. Deploy automático! 🎉

### Outras Plataformas

- **Netlify**: Suporta Next.js via plugin
- **AWS Amplify**: Integração nativa com Next.js
- **Railway/Render**: Para deploys customizados

---

## 🚀 Como Usar

### **1. Instalar Dependências**
```bash
npm install
```

### **2. Executar em Desenvolvimento**
```bash
npm run dev
```
Acesse: [http://localhost:3000](http://localhost:3000)

### **3. Build para Produção**
```bash
npm run build
npm start
```

### **4. Linting**
```bash
npm run lint
```

---

## 📜 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento (localhost:3000)
npm run build    # Gera build otimizado para produção
npm run start    # Inicia servidor de produção (após build)
npm run lint     # Executa ESLint para verificar código
```

---

## 🎨 Sistema de Design

### **Variáveis CSS Personalizadas**

Definidas em `styles/globals.css` para fácil manutenção e consistência:

```css
/* Tema Claro */
--bg-primary: 245 247 250;        /* Fundo principal */
--bg-secondary: 237 242 247;      /* Fundo secundário */
--text-primary: 30 41 59;         /* Texto principal */
--text-secondary: 71 85 105;      /* Texto secundário */
--accent: 20 184 166;             /* Cor de destaque (Teal) */
--border: 203 213 225;            /* Bordas */

/* Tema Escuro */
--bg-primary: 10 10 15;
--bg-secondary: 17 24 39;
--text-primary: 248 250 252;
--accent: 45 212 191;             /* Cyan */
--border: 30 41 59;
```

### **Classes Utilitárias Customizadas**

```css
.section          /* Padding responsivo para seções */
.container        /* Container centralizado (max-width: 1280px) */
.gradient-text    /* Texto com gradiente teal/cyan */
.btn-primary      /* Botão principal com gradiente e sombra */
.btn-secondary    /* Botão secundário com borda */
.card             /* Card com hover effect */
```

### **Animações CSS**

- `gradient-shift` - Gradiente em movimento contínuo
- `float` - Flutuação vertical suave
- `glow` - Efeito de brilho pulsante
- `slide-up` - Entrada deslizante de baixo para cima

### **Efeitos Especiais**

- **Partículas Animadas** - 120 partículas com movimento complexo no Hero
- **Grid Pattern** - Padrão de grade sutil no background
- **Hover Effects** - Escalas, sombras e transições suaves
- **Scrollbar Customizada** - Estilizada com gradiente teal/cyan

---

## 🌍 Internacionalização (i18n)

### Idiomas Suportados

- 🇧🇷 **Português (PT-BR)** - Idioma padrão
- 🇺🇸 **Inglês (EN)**
- 🇪🇸 **Espanhol (ES)**

### Como Funciona

1. **Arquivos de Tradução**: `locales/pt.json`, `locales/en.json`, `locales/es.json`
2. **Context Provider**: `LanguageProvider.tsx` gerencia o idioma ativo
3. **Hook Customizado**: `useI18n()` para acessar traduções
4. **Persistência**: Idioma salvo em `localStorage`

### Estrutura de Tradução

```json
{
  "nav": { "home": "Início", "about": "Sobre", ... },
  "hero": { "title": "Olá, eu sou a ", ... },
  "about": { "titlePrefix": "Sobre", ... },
  "skills": { ... },
  "projects": { ... },
  "contact": { ... }
}
```

### Adicionar Novo Idioma

1. Criar arquivo em `locales/`, ex: `fr.json`
2. Adicionar ao `LanguageProvider.tsx`:
   ```ts
   import fr from '../locales/fr.json';
   const LOCALES = { en, pt, es, fr };
   ```
3. Adicionar botão em `LanguageToggle.tsx`

---

## 📧 Formulário de Contato

### Funcionalidades

- ✅ Validação de campos obrigatórios (Nome, Email, Assunto, Mensagem)
- ✅ Envio via Nodemailer (SMTP)
- ✅ Email de confirmação automático para o remetente
- ✅ Feedback visual com toasts (Sonner)
- ✅ Design responsivo e acessível

### Configuração SMTP

Edite `.env.local` com suas credenciais:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=senha-de-app-gerada
EMAIL_TO=email-destino@gmail.com
```

### Endpoint API

- **Rota**: `/api/contact`
- **Método**: `POST`
- **Corpo**:
  ```json
  {
    "name": "Nome do Remetente",
    "email": "email@exemplo.com",
    "subject": "Assunto",
    "message": "Mensagem completa"
  }
  ```

---

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com/)
3. Importe o repositório
4. Configure variáveis de ambiente (`.env.local`)
5. Deploy automático! 🎉

### Outras Plataformas

- **Netlify**: Suporta Next.js via plugin
- **AWS Amplify**: Integração nativa com Next.js
- **Railway/Render**: Para deploys customizados

---

## 🎯 Destaques Técnicos

### **Arquitetura e Padrões**

- **App Router (Next.js 15)**: Estrutura moderna com Server Components e layouts aninhados
- **TypeScript Strict Mode**: Tipagem forte para prevenir erros em tempo de desenvolvimento
- **Component-Based Architecture**: Componentes reutilizáveis e modulares
- **Context API**: Gerenciamento de estado global (Tema e Idioma)
- **API Routes**: Backend serverless integrado para formulário de contato

### **Performance e Otimização**

- ✅ **Image Optimization**: Componente `next/image` para carregamento otimizado
- ✅ **Code Splitting**: Carregamento lazy automático de componentes
- ✅ **CSS-in-JS**: Tailwind com purge para CSS mínimo em produção
- ✅ **Font Optimization**: Google Fonts com display swap
- ✅ **Scroll Performance**: Virtual scrolling e intersection observer

### **Acessibilidade (A11Y)**

- ♿ **Semântica HTML5**: Tags apropriadas (`<section>`, `<nav>`, `<article>`)
- ♿ **ARIA Labels**: Atributos descritivos para screen readers
- ♿ **Navegação por Teclado**: Foco visível e ordem lógica de tabulação
- ♿ **Contraste de Cores**: WCAG AA compliant
- ♿ **Texto Alternativo**: Imagens com descrições significativas

### **Responsividade**

- 📱 **Mobile First**: Design otimizado para dispositivos móveis
- 💻 **Breakpoints Tailwind**: Adaptação fluida para tablet/desktop
- 🖥️ **Grid Responsivo**: CSS Grid e Flexbox para layouts flexíveis
- 🎨 **Tipografia Fluida**: Tamanhos de fonte escalonados

---

## 📊 Componentes Principais

### **Hero.tsx**
- Efeito de digitação customizado (sem biblioteca externa)
- 120 partículas animadas com Framer Motion
- Gradientes dinâmicos e padrão de grade
- Links sociais e CTAs

### **About.tsx**
- Grid de estatísticas com ícones animados
- Timeline de experiências profissionais
- Cards de soft skills
- Animações on-scroll com Intersection Observer

### **Skills.tsx**
- Categorização de tecnologias (Frontend, Backend, Databases, Tools, Conceitos)
- Ícones coloridos da biblioteca react-simple-icons
- Grid responsivo com hover effects
- Lista de competências adicionais

### **Projects.tsx**
- Cards de projetos com imagem, descrição e tags
- Identificação de projetos em destaque (featured)
- Links para GitHub e demos
- Gradientes e sombras customizadas

### **Contact.tsx**
- Formulário validado (campos obrigatórios)
- Envio assíncrono com feedback visual (toasts)
- Informações de contato clicáveis
- Integração com Nodemailer (API Route)

### **Navbar.tsx**
- Menu responsivo com drawer mobile
- Links de navegação smooth scroll
- Toggles de tema e idioma
- Indicador de scroll (sombra no navbar)

### **Footer.tsx**
- Links rápidos de navegação
- Ícones sociais (GitHub, LinkedIn, Email)
- Botão de download de CV
- Botão "Voltar ao topo"

---

## 🔧 Configurações Importantes

### **tsconfig.json**
```json
{
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### **next.config.js**
```js
{
  reactStrictMode: true,
  // Adicione otimizações conforme necessário
}
```

### **tailwind.config.cjs**
```js
{
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ]
}
```

---

## 🌐 SEO e Metadata

### Configuração de Metadata (app/layout.tsx)

```tsx
export const metadata = {
  title: 'Sara Sales | Desenvolvedora Full Stack',
  description: 'Portfólio profissional de Sara Sales, desenvolvedora Full Stack especializada em React, Next.js, TypeScript, Java e Spring Boot.',
  keywords: ['desenvolvedor', 'full stack', 'react', 'nextjs', 'typescript', 'java'],
  authors: [{ name: 'Sara Sales' }],
  creator: 'Sara Sales',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-dominio.com',
    siteName: 'Sara Sales Portfolio',
  },
}
```

---

## 🧪 Testes (Futuro)

Recomendações para implementação:

- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright ou Cypress
- **Type Checking**: `tsc --noEmit`
- **Linting**: ESLint com regras customizadas

---

## 🔐 Segurança

### Boas Práticas Implementadas

- ✅ Variáveis de ambiente para credenciais sensíveis
- ✅ Validação de formulário (cliente e servidor)
- ✅ Sanitização de inputs HTML
- ✅ Rate limiting (considerar Vercel Edge Config)
- ✅ HTTPS obrigatório em produção

---

## 📈 Roadmap Futuro

### Funcionalidades Planejadas

- [ ] Blog integrado com MDX
- [ ] Sistema de comentários (Giscus)
- [ ] Analytics (Google Analytics ou Plausible)
- [ ] Modo de contraste alto (acessibilidade)
- [ ] PWA (Progressive Web App)
- [ ] CMS para gerenciar projetos dinamicamente
- [ ] Testes automatizados (Jest + Playwright)
- [ ] Integração com GitHub API para exibir repositórios reais

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adicionar nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Convenções de Commit

Seguindo [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, ponto e vírgula faltando, etc
- `refactor:` Refatoração de código
- `test:` Adicionando testes
- `chore:` Atualização de tarefas de build, configurações, etc

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**Sara Sales** - Desenvolvedora Full Stack

- 💼 **LinkedIn**: [sara-sales-95520618a](https://www.linkedin.com/in/sara-sales-95520618a/)
- 🐙 **GitHub**: [@saracristinas](https://github.com/saracristinas)
- 📧 **Email**: [sarasales17062000@gmail.com](mailto:sarasales17062000@gmail.com)
- 🌐 **Portfólio**: [Em breve no ar!]

---

## 🙏 Agradecimentos

- **Comunidade Next.js** - Framework incrível
- **Vercel** - Plataforma de deploy
- **Tailwind Labs** - Sistema de design
- **Framer** - Biblioteca de animações
- **Todos os desenvolvedores** que compartilham conhecimento open source

---

<div align="center">

**Feito com ❤️ e muito ☕ por Sara Sales**

⭐ Se este projeto te ajudou de alguma forma, considere dar uma estrela!

</div>
