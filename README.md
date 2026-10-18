# Bytek Labs — landing page

Site institucional da Bytek Labs. Next.js 16 (App Router) exportado como site estático e publicado no Cloudflare Pages: https://byteklabs.pages.dev

## Rodando localmente

Requisitos: Node 24 (`.nvmrc`) e pnpm (`corepack enable pnpm`).

```sh
pnpm install
pnpm dev                        # http://localhost:3000
pnpm dev --hostname 0.0.0.0     # para abrir pelo celular na mesma rede
```

| Comando             | O que faz                                           |
| ------------------- | --------------------------------------------------- |
| `pnpm build`        | Gera o site estático em `out/`                      |
| `pnpm preview`      | Serve a pasta `out/` para conferir o build          |
| `pnpm typecheck`    | Checagem de tipos                                   |
| `pnpm cf:deploy`    | Build + deploy direto na Cloudflare (Wrangler)      |

## Onde editar

- **Textos, serviços, produtos, FAQ e contatos:** `lib/site.ts`
- **Estágio dos produtos** (linha do tempo nos cards): campo `stage` em `lib/site.ts`
- **Páginas de serviço** (`/servicos/<slug>/`): conteúdo, título e descrição de cada uma em `lib/service-pages.ts`. Uma página nova entra sozinha no sitemap, no rodapé e nos dados estruturados.
- **Layout de cada seção:** `components/`
- **Estilos:** `app/globals.css`
- **Logo e ícones:** `public/bytek-symbol.png`, `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.jpg`

## Deploy no Cloudflare Pages

Projeto `byteklabs` no Pages (configuração em `wrangler.toml`). Cada push na `main` publica o site.

### Configuração do projeto (feita uma vez no painel)

1. **Workers & Pages → Create → Pages → Import an existing Git repository** e escolha `Bytek-Labs/landing-page`.
2. Project name: `byteklabs` (igual ao `name` do `wrangler.toml`).
3. Build:
   - Framework preset: **None**
   - Build command: `pnpm build`
   - Build output directory: `out`
4. Variáveis de ambiente:
   - `NODE_VERSION` = `24`
   - `PNPM_VERSION` = `12.14.0`
   - `SITE_URL` = `https://byteklabs.pages.dev` (ou o domínio próprio, quando houver)
   - `GOOGLE_SITE_VERIFICATION` = código da verificação por meta tag do Google Search Console (opcional)

### Pela linha de comando

```sh
npx wrangler login     # só na primeira vez
pnpm cf:deploy
```

### Domínio próprio

No projeto do Pages: **Custom domains → Set up a custom domain**. Depois atualize `SITE_URL` e faça um novo deploy, para que metatags, `sitemap.xml` e `robots.txt` apontem para ele.

## O que já está configurado

- `output: "export"`: site 100% estático, sem servidor
- `public/_headers`: cabeçalhos de segurança e cache longo para `/_next/static/*`
- `wrangler.toml`: projeto do Pages publicando `out/`
- `404.html` gerado no build (o Pages usa para rotas inexistentes)
- SEO: título e descrição, URL canônica, `robots.txt`, `sitemap.xml`, imagem de compartilhamento (Open Graph) e dados estruturados schema.org (`components/StructuredData.tsx`)
- Favicon e ícone Apple
