// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTA: atualizar `site` para https://nestminds.pt quando o domínio ativar.
export default defineConfig({
  site: 'https://nestminds-website.vercel.app',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: {
      // /pt/ é explícito (não há raiz sem prefixo) — pedido do brief: URLs por idioma.
      prefixDefaultLocale: true,
    },
  },
  // A raiz encaminha para PT (língua base).
  redirects: {
    '/': '/pt/',
  },
  integrations: [sitemap()],
});
