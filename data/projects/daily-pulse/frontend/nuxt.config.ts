// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/ui-pro'
  ],

  ui: {
    icons: ['heroicons', 'lucide']
  },

  colorMode: {
    preference: 'dark'
  },

  runtimeConfig: {
    // Server-side only
    zaiApiKey: process.env.NUXT_ZAI_API_KEY,
    
    // Public (client-side)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001',
      // Loaded from SERVICE_CATALOG.json -> .env
      yfinanceApi: process.env.NUXT_PUBLIC_YFINANCE_API || '',
      yfinanceKey: process.env.NUXT_PUBLIC_YFINANCE_KEY || ''
    }
  },

  app: {
    head: {
      title: 'Daily Pulse',
      meta: [
        { name: 'description', content: 'Your AI-powered morning briefing dashboard' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  compatibilityDate: '2024-09-01'
})
