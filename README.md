# 🌿 Singular Pharma - Landing Page

![Project Preview](.github/preview.png)

> **Deploy (Demo):** [https://singular-desafio.vercel.app](https://singular-desafio.vercel.app)

## Sobre o Projeto

Este projeto foi desenvolvido como solução para o **Desafio Técnico Frontend Júnior**. O objetivo foi transformar um layout Figma de alta fidelidade em uma aplicação funcional, performática e responsiva.

Embora o foco do desafio fosse UI/UX, utilizei minha bagagem Fullstack para aplicar conceitos de **Arquitetura de Software** e **Clean Code**, garantindo que o projeto não seja apenas "uma tela bonita", mas uma base de código escalável, organizada e pronta para manutenção.

## Funcionalidades & Diferenciais

Além dos requisitos obrigatórios, implementei funcionalidades avançadas para melhorar a experiência do usuário e a qualidade técnica:

*   **Internacionalização (i18n):** Sistema robusto de tradução (PT-BR / ES) utilizando Roteamento Dinâmico e Dicionários JSON, garantindo performance estática (SSG).
*   **Validação de Formulário:** Implementação profissional com **Zod** e **React Hook Form**, incluindo tratamento de erros e feedback visual.
*   **Performance Core Vitals:** Otimização de imagens (Next/Image com `sizes` e `priority` para LCP) e fontes otimizadas.
*   **Micro-interações:** Animações suaves com **Framer Motion** (Fade-in, Carrossel de Depoimentos auto-play, Hover effects).
*   **UX Avançada:** Lista de produtos com funcionalidade **"Drag-to-Scroll"** (arrastar com o mouse) no Desktop e suporte a toque no Mobile.
*   **Responsividade Total:** Layout fluido que se adapta de 360px a monitores Ultrawide.

## Tech Stack

*   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **UI Kit:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
*   **Animação:** [Framer Motion](https://www.framer.com/motion/)
*   **Ícones:** [Lucide React](https://lucide.dev/)
*   **Code Quality:** ESLint, Prettier e Conventional Commits.

## Decisões de Arquitetura

Para garantir um código limpo e desacoplado, tomei as seguintes decisões técnicas:

### 1. Padrão de Dicionários para i18n
Optei por não usar bibliotecas pesadas de tradução. Criei um sistema leve de dicionários locais (`src/dictionaries/*.json`) carregados no Server Side.
*   **Motivo:** Melhora drástica na performance (Zero Client-Side JS para carregar textos) e simplifica a manutenção dos textos pelo time.

### 2. Componentização Híbrida
*   **Shadcn UI:** Utilizado para componentes lógicos e interativos (Inputs, Botões, Toast), garantindo acessibilidade (A11y) nativa.
*   **Tailwind Puro:** Utilizado para layouts customizados (Hero, Grid de Produtos) onde a fidelidade ao Figma exigia precisão de pixel.

### 3. Estrutura de Pastas
O projeto segue uma separação clara de responsabilidades:

```text
src/
├── app/[lang]/       # Rotas dinâmicas (ex: /pt, /es)
├── components/
│   ├── ui/           # Componentes base (Botões, Inputs)
│   ├── sections/     # Blocos da Landing Page (Hero, About, Footer)
│   └── ...
├── dictionaries/     # Arquivos de tradução (JSON)
├── lib/              # Utilitários (Funções de Scroll, Configs)
└── middleware.ts     # Gerenciamento de redirecionamento de idioma
```

## Mocking e Simulação
Como o backend estava fora do escopo, simulei o comportamento de uma API real:

- **Upload de Arquivos:** Interface visual de Drag & Drop simulada.
- **Envio de Orçamentos:** Uso de setTimeout para simular latência de rede, com feedback de "Loading" e Toast de Sucesso/Erro ao final.

## Como Rodar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/Rafael19722/desafio-frontend-singular.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador: http://localhost:3000

## Autor
**Rafael Silva Rangel de Almeida**
- Fullstack Developer & Estudante de Ciência da Computação
- [LinkedIn](https://www.linkedin.com/in/rafael-rangel1/)
- [Portifólio](https://rafaelrangel.vercel.app/)