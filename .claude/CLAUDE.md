# Bytek Labs — landing page

Site institucional da Bytek Labs, consultoria de tecnologia (software sob medida, sites, automação e IA).
Publicado em https://byteklabs.pages.dev · repositório público `Bytek-Labs/landing-page`.

## Stack e estrutura

- Next.js 16 (App Router) + TypeScript estrito, pnpm, Node 24. Sem Tailwind: CSS próprio em `app/globals.css`.
- `output: "export"` + `trailingSlash: true`: site 100% estático em `out/` (páginas viram `<rota>/index.html`).
- `lib/site.ts`: contatos, textos da home, serviços, produtos, FAQ, `site.url` (padrão `https://byteklabs.pages.dev`, sobrescrito por `SITE_URL`).
- `lib/service-pages.ts`: conteúdo das páginas `/servicos/<slug>/` (uma por termo de busca). Página nova entra sozinha no sitemap, rodapé e dados estruturados.
- `components/`: uma seção por arquivo. Cabeçalho, rodapé e efeitos ficam no `app/layout.tsx` (todas as páginas).
- `components/StructuredData.tsx`: JSON-LD (ProfessionalService + WebSite em todas as páginas; FAQPage na home; Service + BreadcrumbList + FAQPage nas de serviço).

Comandos: `pnpm dev` · `pnpm build` · `pnpm typecheck` · `pnpm cf:deploy` (build + `wrangler pages deploy`).
Para testar no celular: `pnpm dev --hostname 0.0.0.0` (IPs da rede local liberados em `allowedDevOrigins`).

## Regras de conteúdo (do posicionamento da marca)

- Comunicar problema → solução → tecnologia, nessa ordem. Nada de lista enorme de frameworks.
- Não inventar clientes, depoimentos, números, cases ou resultados. Não prometer prazos, primeira página no Google ou que IA substitui pessoas.
- Produtos com estágio real: ByMec = "MVP em fase final" (`stage: 2`), Byllio = "Em desenvolvimento" (`stage: 1`); Toninho (assistente WhatsApp do ByMec) é "planejado". As prévias animadas dos produtos são marcadas como "ilustração" e usam dados fictícios.
- Não afirmar estrutura que não existe (equipe, CNPJ, sócios). Tom: consultoria independente, enxuta, contato direto com quem desenvolve. Atende o Brasil todo, remoto.
- Seção "Projetos/cases" foi deixada de fora de propósito até existirem projetos reais (comentário em `app/page.tsx`).

## Identidade visual

Grafite `#111116`, superfície `#24212C`, texto `#F5F3FA`, roxo `#8B5CF6` (destaques, não pintar tudo). Fontes Plus Jakarta Sans + JetBrains Mono (rótulos). Grade sutil, brilhos roxos, animações discretas e desligadas com `prefers-reduced-motion`.
Logos originais (JPEG fundo escuro) ficam em `~/Desktop/Logo Bytek Labs*.jpeg`; o símbolo transparente foi extraído deles.

## Cuidados técnicos já resolvidos (não regredir)

- Elementos `.reveal` só ficam invisíveis com a classe `js`; um script inline remove `js` se o app não hidratar em 3s (evita "quadro cinza" quando o JS falha).
- Cards de produto usam subgrid para alinhar prévia/selo/título/linha do tempo/nota entre si. Prévias têm a mesma estrutura (3 linhas + rodapé).
- Efeitos de hover/inclinação só com mouse (`hover: hover`). Alvos de toque ≥ 44px no contato.
- Formulário de contato envia só pelo WhatsApp (monta a mensagem, sem backend).
- `openGraph` das páginas de serviço repete a imagem, porque substitui o da raiz.
- `trailingSlash` evita ambiguidade entre `servicos/x.html` e a pasta `servicos/x/` no host estático.

## Deploy (Cloudflare Pages)

Projeto `byteklabs` conectado ao GitHub; push na `main` publica. Build: `pnpm build`, saída `out`, variáveis `NODE_VERSION=24`, `PNPM_VERSION=12.14.0`. `wrangler.toml` no formato Pages (`pages_build_output_dir`).
Google Search Console verificado por arquivo: `public/google046bbc40c99d0947.html` — **não remover**. Sitemap enviado.

Histórico detalhado das decisões: `.claude/historico.md`.
