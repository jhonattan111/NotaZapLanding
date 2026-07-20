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

## Como logar (método atual: Personal Access Token)

O painel está configurado para o método de login mais simples do Sveltia CMS, pensado pra
quando só gente técnica (time Verbo) usa o `/admin` — sem precisar montar nenhum servidor
extra:

1. Abra `seu-dominio.com/admin`.
2. Clique em **"Sign In with Token"**.
3. O próprio painel abre um link do GitHub já com as permissões certas pré-marcadas — gere
   o token ali e cole de volta no painel.
4. O token fica salvo só no navegador (local storage). Cada pessoa que for editar gera o
   seu próprio, uma vez.

Quem gerar o token precisa ter permissão de escrita no repositório `NotaZapLanding`.

## Se um dia o cliente for editar sozinho

O método acima exige que a pessoa saiba gerar um token no GitHub — ok pra equipe técnica,
mas ruim pra alguém não-técnico (ex.: o cliente NotaZap). Nesse caso, vale trocar para o
fluxo de **login com botão "Entrar com GitHub"**, que exige um proxy de OAuth próprio
(porque o site não está na Netlify, que resolveria isso sozinha):

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
   - Em `public/admin/config.yml`, adicione `base_url` apontando pro Worker publicado
     (ex.: `https://notazap-cms-auth.seuusuario.workers.dev`) dentro de `backend`.
   - Commit + build + publique o site.

Depois disso, `seu-dominio.com/admin` loga com o botão do GitHub, sem token manual.

## Sobre o rebuild

O painel edita arquivos no GitHub, mas **não builda nem publica o site sozinho** — hoje o
deploy é manual (Docker + nginx). Se quiser que uma edição no `/admin` apareça no ar sem
precisar rodar o build à mão, o próximo passo é montar um GitHub Action (ou outro gatilho)
que builda e publica automaticamente a cada commit em `master`. Isso depende de como o
deploy funciona no servidor de vocês — vale alinhar com quem administra o servidor antes de
automatizar essa parte.
