// @ts-check
import { defineConfig } from 'astro/config';

// Landing estática de marketing — sem integrações runtime, foco em SEO/performance.
// PREVIEW_BASE só é usado nos builds de prévia (ex.: aprovacoes/notazap-preview),
// que ficam numa subpasta do GitHub Pages. Em produção fica vazio e o site
// continua servindo normalmente na raiz de notazap.com.br.
export default defineConfig({
  site: 'https://notazap.com.br',
  base: process.env.PREVIEW_BASE || '/',
});
