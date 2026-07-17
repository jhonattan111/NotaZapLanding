# Painel Admin (`/admin`) — como ativar

Este painel usa o [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (compatível com o
formato de configuração do Decap/Netlify CMS) pra editar, sem mexer em código:

- **Blog** (`src/content/blog/*.md`) — criar, editar e apagar posts.
- **WhatsApp e e-mail** (`src/data/settings.json`).
- **Planos do cliente final** (`src/data/clientPlans.json`).
- **Pacotes do Programa de Parceiros** (`src/data/partnerPlans.json`).

Cada edição salva vira um **commit direto no GitHub**, na branch configurada em
`public/admin/config.yml` (`backend.branch`). O site continua estático — depois de cada
edição ainda é preciso rodar `pnpm build` e publicar de novo (ver seção final).

## O que falta pra funcionar (1 pessoa com acesso ao GitHub precisa fazer isso 1x)

O painel só consegue commitar no repositório depois de um login autenticado via GitHub.
Como o site não está hospedado na Netlify (que resolveria isso sozinha), é preciso um
pequeno "proxy" de OAuth. O próprio time do Sveltia CMS mantém um pronto pra usar, roda de
graça num Cloudflare Worker:

**1. Crie um GitHub OAuth App**
   - Acesse `github.com/settings/developers` → **New OAuth App**.
   - **Homepage URL:** a URL onde o `/admin` vai rodar (produção ou uma prévia).
   - **Authorization callback URL:** `https://<nome-do-worker>.<seu-usuario>.workers.dev/callback`
     (você define o nome do worker no passo 2 — pode voltar aqui depois pra ajustar).
   - Salve o **Client ID** e gere um **Client Secret**.

**2. Publique o proxy de autenticação (Cloudflare Workers, plano grátis)**
   - Siga o guia oficial: <https://github.com/sveltia/sveltia-cms-auth>
   - No `wrangler.toml`/variáveis do Worker, configure `GITHUB_CLIENT_ID` e
     `GITHUB_CLIENT_SECRET` com os valores do passo 1.
   - Publique (`npx wrangler deploy` ou pelo painel da Cloudflare).

**3. Aponte o CMS pro proxy**
   - Em `public/admin/config.yml`, troque `base_url` pela URL do Worker publicado
     (ex.: `https://notazap-cms-auth.seuusuario.workers.dev`).
   - Commit + build + publique o site.

Depois disso, `seu-dominio.com/admin` já loga com uma conta GitHub que tenha acesso de
escrita no repositório.

## Sobre o rebuild

O painel edita arquivos no GitHub, mas **não builda nem publica o site sozinho** — hoje o
deploy é manual (Docker + nginx). Se quiser que uma edição no `/admin` apareça no ar sem
precisar rodar o build à mão, o próximo passo é montar um GitHub Action (ou outro gatilho)
que builda e publica automaticamente a cada commit em `master`. Isso depende de como o
deploy funciona no servidor de vocês — vale alinhar com quem administra o servidor antes de
automatizar essa parte.
