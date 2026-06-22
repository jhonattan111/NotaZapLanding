# syntax=docker/dockerfile:1

# ---------- build: gera o site estático com Astro + pnpm ----------
FROM node:22-alpine AS build
WORKDIR /app

# corepack ativa o pnpm na versão pinada em package.json (packageManager)
RUN corepack enable

# instala dependências primeiro (camada cacheável)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# build estático -> /app/dist
COPY . .
RUN pnpm build

# ---------- runtime: serve os arquivos estáticos com nginx ----------
FROM nginx:1.27-alpine AS runtime

# config própria (clean URLs, cache de assets, gzip)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# saída estática do Astro
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# healthcheck simples na raiz
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
