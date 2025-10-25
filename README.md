# 🎨 Portfólio Pessoal — Next.js 15 + TypeScript

Portfólio profissional moderno construído com as melhores tecnologias do ecossistema React.

---

## 🚀 Tecnologias Utilizadas

### **Core**
- ⚡ **Next.js 15** - Framework React com App Router
- ⚛️ **React 18.2** - Biblioteca para interfaces de usuário
- 📘 **TypeScript 5.5** - JavaScript tipado para maior segurança
- 🎨 **Tailwind CSS 3.4** - Framework CSS utility-first

### **UI & Animações**
- ✨ **Framer Motion 10.0** - Animações fluidas e interativas
- 🎭 **React Icons 4.10** - Biblioteca completa de ícones
- 🔤 **React Type Animation 2.0** - Efeito de digitação animado
- 🎯 **React Simple Icons** - Ícones de marcas e tecnologias
- 🔔 **Sonner 2.0** - Sistema de notificações/toasts elegante

### **Utilitários**
- 🎨 **clsx** - Utilitário para classes condicionais
- 🌍 **Country Flag Icons** - Bandeiras SVG de países

---

## 📁 Estrutura do Projeto

```
Portifolio/
│
├── 📂 app/                          # Next.js App Router
│   ├── layout.tsx                   # Layout raiz com Providers, Navbar e Footer
│   └── page.tsx                     # Página principal (Home)
│
├── 📂 components/                   # Componentes React
│   ├── About.tsx                    # ℹ️ Seção "Sobre Mim"
│   ├── Contact.tsx                  # 📧 Formulário de contato
│   ├── Footer.tsx                   # 🦶 Rodapé do site
│   ├── Hero.tsx                     # 🎯 Seção hero/banner principal
│   ├── Navbar.tsx                   # 🧭 Barra de navegação
│   ├── ProjectCard.tsx              # 🃏 Card individual de projeto
│   ├── Projects.tsx                 # 💼 Seção de projetos
│   ├── Providers.tsx                # 🔌 Context providers (tema, toasts)
│   ├── Skills.tsx                   # 🛠️ Seção de habilidades/tecnologias
│   └── ThemeToggle.tsx              # 🌓 Botão de alternância de tema
│
├── 📂 styles/
│   └── globals.css                  # 🎨 Estilos globais + Tailwind CSS
│
├── 📂 public/                       # Arquivos estáticos
│   └── sasa.jpeg                    # 🖼️ Imagem de perfil
│
├── 📄 package.json                  # Dependências e scripts
├── 📄 package-lock.json             # Lock de dependências
├── 📄 tsconfig.json                 # Configuração TypeScript
├── 📄 next.config.js                # Configuração Next.js
├── 📄 tailwind.config.cjs           # Configuração Tailwind CSS
├── 📄 postcss.config.js             # Configuração PostCSS
├── 📄 next-env.d.ts                 # Tipos do Next.js
├── 📄 .gitignore                    # Arquivos ignorados pelo Git
├── 📄 LICENSE                       # Licença do projeto
└── 📄 README.md                     # Este arquivo
```

---

## 🎨 Sistema de Design

### **Variáveis CSS Customizadas**
```css
/* Tema Claro */
--bg-primary: 255 255 255
--bg-secondary: 248 250 252
--text-primary: 15 23 42
--accent: 20 184 166 (Teal)

/* Tema Escuro */
--bg-primary: 10 10 15
--bg-secondary: 17 24 39
--text-primary: 248 250 252
--accent: 45 212 191 (Cyan)
```

### **Componentes Reutilizáveis**
- `.section` - Seções com padding responsivo
- `.container` - Container centralizado (max-width: 1280px)
- `.gradient-text` - Texto com gradiente teal/cyan
- `.btn-primary` - Botão principal com gradiente e sombra
- `.btn-secondary` - Botão secundário com borda
- `.card` - Card com hover effect

### **Animações CSS**
- `gradient-shift` - Animação de gradiente em movimento
- `float` - Flutuação suave vertical
- `glow` - Efeito de brilho pulsante
- `slide-up` - Entrada deslizante de baixo para cima

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

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção otimizado |
| `npm start` | Inicia servidor de produção |
| `npm run lint` | Executa verificação de código |

---

## 🎯 Funcionalidades

- ✅ **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Dark Mode** - Alternância entre tema claro e escuro
- ✅ **Animações Suaves** - Transições e animações com Framer Motion
- ✅ **SEO Otimizado** - Metadata configurado para melhor indexação
- ✅ **Performance** - Otimizações do Next.js 15 (App Router, Server Components)
- ✅ **TypeScript** - Código 100% tipado para maior segurança
- ✅ **Acessibilidade** - Focus visible, scroll suave, contraste adequado
- ✅ **Scrollbar Customizada** - Design moderno com gradiente
- ✅ **Grid Pattern** - Fundo com padrão de grid sutil

---

## 🎨 Seções do Portfólio

1. **Hero** - Banner principal com nome, título e call-to-action
2. **About** - Informações sobre você e sua trajetória
3. **Skills** - Suas habilidades e tecnologias dominadas
4. **Projects** - Portfólio de projetos com cards interativos
5. **Contact** - Formulário de contato e informações

---

## 📝 Próximos Passos

- [ ] Personalizar conteúdo (nome, bio, projetos)
- [ ] Adicionar imagens dos projetos em `/public`
- [ ] Configurar formulário de contato (backend/API)
- [ ] Adicionar Google Analytics (opcional)
- [ ] Configurar domínio personalizado
- [ ] Deploy na Vercel/Netlify

---


## 👨‍💻 Autor

Desenvolvido com 💙 por Sara Sales

---

## 🤝 Contribuições

Contribuições, issues e feature requests são bem-vindos!

---

**⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!**
