// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxt/ui',
  ],

  // SSG for Cloudflare Pages
  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/',
        '/features',
        '/pricing',
        '/early-access',
        '/security',
        '/ai-coach',
        '/about',
        '/faq',
        '/contact',
        '/terms',
        '/privacy',
        '/disclaimer',
      ]
    }
  },

  routeRules: {
    '/**': { prerender: true }
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'zh-TW', class: 'dark' },
      meta: [
        { name: 'theme-color', content: '#0A0A0F' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'PersonAI' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&family=Inter:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  }
})
