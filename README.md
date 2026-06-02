# José Henrique | Portfólio

Meu portfólio pessoal construído com Next.js, TypeScript e TailwindCSS.

## Tecnologias Utilizadas

- **Framework**: Next.js (App Router)
- **Linguagem**: TypeScript
- **Estilização**: TailwindCSS & Shadcn/ui
- **Animações**: Motion (Framer Motion)
- **Ícones**: Lucide React & React Icons

## Recursos do Projeto

- **Navegação Inteligente**: Rolagem suave programática para contornar o bloqueio de scroll dos modais.
- **Estrutura Modular**: Seções organizadas para Apresentação, Sobre, Projetos (Carrossel), Habilidades, Certificados e Contato.
- **Configuração Centralizada**: Arquivo de configurações (`app/social.config.ts`) para gerenciar links de redes sociais e e-mail.
- **Mídia Dinâmica**: Favicon e Banner OpenGraph (OG) gerados via código usando a API de ImageResponse do Next.js.
- **Otimização SEO**: Configuração automatizada de Sitemap, Robots e Metatags completas para indexação.
- **Tratamento de Erros**: Telas de 404 (Não Encontrado) e Erro Geral integradas ao design do portfólio.

## Como Rodar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Compile e verifique a build de produção:
   ```bash
   npm run build
   ```
