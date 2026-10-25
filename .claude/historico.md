# Histórico do projeto

## 17/10/2026 — criação

- Landing page criada a partir do documento de posicionamento da marca (resumo das regras no `CLAUDE.md`; o documento completo fica em `.claude/brand-brief.md`, fora do Git).
- Primeira versão em HTML/CSS/JS estático; migrada no mesmo dia para Next.js 16 a pedido, mantendo o visual.
- Seções: hero, problemas, serviços, como trabalhamos, produtos próprios, sobre, FAQ, contato.
- Pedidos de ajuste e o que foi feito:
  - Selos de status em posições diferentes nos cards de produto → selo no topo dos dois; depois subgrid para alinhar todas as partes.
  - "Mais dinâmico, principalmente nos produtos" → prévias animadas (ordens de serviço do ByMec, conversão de faturas do Byllio), linha do tempo de estágio, inclinação 3D e brilho no cursor, pacotes de dados no hero, barra de progresso de rolagem.
  - Otimização para celular → testes medidos em 360/375/414px; corrigidos espaçamento dos cards, rótulos da linha do tempo, alvos de toque e hover preso no toque.
  - "Animações não carregam e fica um quadro cinza" no celular → causa: Next bloqueava scripts de dev vindos do IP da rede; liberado `allowedDevOrigins` e criado fallback que mostra o conteúdo se o JS falhar.
  - Contatos reais: WhatsApp 55 13 99108-2474, e-mail golfeto.dev@gmail.com. Formulário passou a enviar só pelo WhatsApp.

## 17–18/10/2026 — publicação

- Repositório público `Bytek-Labs/landing-page` (organização Bytek-Labs no GitHub).
- Primeira tentativa na Cloudflare foi criada como Worker (falhou: wrangler.toml no formato Pages); ajustado para Workers, mas o endereço ficaria `landing-page.<conta>.workers.dev`. O usuário queria endereço sem prefixo → Worker excluído e projeto recriado no **Pages** como `byteklabs` → https://byteklabs.pages.dev.

## 18/10/2026 — SEO

- Metatags, canonical, robots, sitemap, Open Graph, JSON-LD.
- Alvo: Brasil todo (não local). Criadas 4 páginas de serviço com termos de busca: desenvolvimento de sistemas sob medida, criação de sites e aplicações web, automação de processos e IA, integração de sistemas e APIs.
- H1 da home ganhou "Desenvolvimento de software, automação e IA"; rodapé com links internos.
- Search Console: propriedade "Prefixo do URL" (domínio `pages.dev` não permite verificação DNS), verificada por arquivo HTML. Sitemap enviado; primeiro status "Não foi possível buscar" (normal logo após o envio).
- Bug corrigido: sem `SITE_URL`, o build usava `CF_PAGES_URL` (endereço de cada deploy, `<hash>.byteklabs.pages.dev`). Agora o padrão é `https://byteklabs.pages.dev`.

## 20/10/2026 — extras fora do repositório

- Wallpapers da marca em `~/Pictures/Bytek Labs/` (MacBook 2560×1664, monitor 3840×2160, celular 1290×2796).

## Pendências e próximos passos

- Domínio próprio (ex.: byteklabs.com.br) → adicionar no Pages e trocar `site.url`/`SITE_URL`.
- Seção/páginas de cases quando houver projetos reais.
- Acompanhar indexação no Search Console; pedir indexação das 5 URLs.
- Links externos para o site (LinkedIn pessoal e página da empresa, GitHub da organização).
