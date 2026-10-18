# Bytek Labs — landing page

Site institucional da Bytek Labs. Next.js 16 (App Router) exportado como site estático para o Cloudflare Pages.

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
| `pnpm pages:deploy` | Build + deploy direto no Cloudflare Pages (Wrangler) |

## Onde editar

- **Textos, serviços, produtos, FAQ e contatos:** `lib/site.ts`
- **Estágio dos produtos** (linha do tempo nos cards): campo `stage` em `lib/site.ts`
- **Layout de cada seção:** `components/`
- **Estilos:** `app/globals.css`
- **Logo e ícones:** `public/bytek-symbol.png`, `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.jpg`

## Deploy no Cloudflare Pages

### Opção A — Git (deploy automático a cada push)

1. Suba este projeto para um repositório no GitHub ou GitLab.
2. No Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Configuração do build:
   - Framework preset: **None**
   - Build command: `pnpm build`
   - Build output directory: `out`
4. Variáveis de ambiente (Settings → Variables and Secrets):
   - `NODE_VERSION` = `24`
   - `PNPM_VERSION` = `12.14.0`
   - `SITE_URL` = domínio final, ex. `https://byteklabs.com.br` (quando tiver)
5. **Save and Deploy.**

### Opção B — linha de comando

```sh
npx wrangler login     # só na primeira vez
pnpm pages:deploy      # cria o projeto "bytek-labs" na primeira vez
```

Para usar o domínio próprio nesse modo, rode com `SITE_URL=https://seu-dominio pnpm pages:deploy`.

### Domínio próprio

No projeto do Pages: **Custom domains → Set up a custom domain**. Depois defina `SITE_URL` com esse domínio e faça um novo deploy, para que metatags, `sitemap.xml` e `robots.txt` apontem para ele.

### Sobre o `SITE_URL`

Sem `SITE_URL`, o build usa `CF_PAGES_URL` (a URL do próprio deploy, `*.pages.dev`) e, localmente, `http://localhost:3000`.

## O que já está configurado

- `output: "export"`: site 100% estático, sem servidor
- `public/_headers`: cabeçalhos de segurança e cache longo para `/_next/static/*`
- `404.html` gerado automaticamente (o Pages usa para rotas inexistentes)
- `robots.txt`, `sitemap.xml`, favicon, ícone Apple e imagem de compartilhamento (Open Graph)
