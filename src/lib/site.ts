// SITE.url is the site ORIGIN only (no path). The base path is configured in
// astro.config.mjs and applied at use time via link()/absoluteUrl() in
// src/lib/path.ts. Keep this in sync with the SITE_URL in astro.config.mjs.
export const SITE = {
  url: import.meta.env.SITE ?? 'https://victomteng1997.github.io',
  title: 'Stablecoin Review',
  tagline:
    'Stablecoins reviewed for reserves, liquidity, use cases, and platform risk. / Stablecoins analisadas por reservas, liquidez, casos de uso e risco de plataforma.',
  description:
    'Independent stablecoin reviews covering reserve transparency, redemption paths, DeFi liquidity, issuer risk, peg history, payments, and yield-adjacent use cases. Também publicamos guias em português para leitores que avaliam stablecoins no Brasil, em Portugal e em mercados globais.',
  author: {
    name: 'Gelei',
    aboutPath: '/about',
    email: 'gelei@quantstamp.com',
    sameAs: [] as string[],
  },
  locale: 'pt_BR',
  defaultOgImage: '/og-default.png',
  cloudflareAnalyticsToken: '',
  navLinks: [
    { label: 'Reviews / Análises', href: '/reviews' },
    { label: 'About / Sobre', href: '/about' },
    { label: 'RSS', href: '/rss.xml' },
  ] as const,
} as const;
