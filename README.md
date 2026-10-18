# Bytek Labs — landing page

Site institucional da Bytek Labs. Next.js 16 (App Router) exportado como site estático e publicado na Cloudflare (Workers com arquivos estáticos).

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
- **Layout de cada seção:** `components/`
- **Estilos:** `app/globals.css`
- **Logo e ícones:** `public/bytek-symbol.png`, `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.jpg`

## Deploy na Cloudflare

O site é publicado como um Worker que serve os arquivos estáticos de `out/` (configuração em `wrangler.toml`).

### Pelo GitHub (deploy automático a cada push na `main`)

1. No Cloudflare: **Workers & Pages → Create → Import a repository** e escolha `Bytek-Labs/landing-page`.
2. Configuração do build:
   - Build command: `pnpm build`
   - Deploy command: `npx wrangler deploy`
3. Variáveis de **build** (Settings → Build → Variables and secrets):
   - `NODE_VERSION` = `24`
   - `PNPM_VERSION` = `12.14.0`
   - `SITE_URL` = domínio final, ex. `https://byteklabs.com.br` (quando tiver)

O `name` em `wrangler.toml` precisa ser igual ao nome do Worker no painel.

### Pela linha de comando

```sh
npx wrangler login     # só na primeira vez
pnpm cf:deploy
```

### Domínio próprio

No Worker: **Settings → Domains & Routes → Add → Custom domain**. Depois defina `SITE_URL` com esse domínio e faça um novo deploy, para que metatags, `sitemap.xml` e `robots.txt` apontem para ele.

### Sobre o `SITE_URL`

Sem `SITE_URL`, o build usa `http://localhost:3000` nas metatags, então defina a variável assim que souber a URL pública (o `*.workers.dev` do Worker serve enquanto não houver domínio).

## O que já está configurado

- `output: "export"`: site 100% estático, sem servidor
- `public/_headers`: cabeçalhos de segurança e cache longo para `/_next/static/*`
- `wrangler.toml`: Worker servindo `out/`, com a página `404.html` para rotas inexistentes
- `robots.txt`, `sitemap.xml`, favicon, ícone Apple e imagem de compartilhamento (Open Graph)
