// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  srcDir: 'app/',
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/features', '/pricing', '/subscribe', '/security', '/ai-coach', '/about', '/faq', '/contact', '/terms', '/privacy', '/disclaimer']
    }
  },
  routeRules: {
    '/early-access': { redirect: '/subscribe' },
    '/**': { prerender: true }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'SecrexAI — 住喺你 WhatsApp 的 24 小時全能 AI 助手',
      meta: [
        { name: 'description', content: '香港 SME 專屬 WhatsApp AI 助手。廣東話原生・永久記憶・60+技能・PDPO 合規。14 日免費試用，免信用卡試用。' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'SecrexAI - Hostlink (HK) Limited × Area2 (HK) Limited' },
        { name: 'keywords', content: 'AI助手, WhatsApp AI, 香港SME, 人工智能, 廣東話AI, 智能助理, AI秘书, PDPO合规' },
        // Open Graph
        { property: 'og:title', content: 'SecrexAI — 住喺你 WhatsApp 的 24 小時全能 AI 助手' },
        { property: 'og:description', content: '香港 SME 專屬 WhatsApp AI 助手。廣東話原生・永久記憶・60+技能・PDPO 合規。14 日免費試用。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://secrex.ai/' },
        { property: 'og:image', content: 'https://secrex.ai/img/secrexai-og-banner.png?v=20260329' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'SecrexAI - 香港 SME 專屬 WhatsApp AI 助手' },
        { property: 'og:site_name', content: 'SecrexAI' },
        { property: 'og:locale', content: 'zh_HK' },
        // Twitter / X Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'SecrexAI — 住喺你 WhatsApp 的 24 小時全能 AI 助手' },
        { name: 'twitter:description', content: '香港 SME 專屬 WhatsApp AI 助手。廣東話原生・永久記憶・60+技能・PDPO 合規。14 日免費試用。' },
        { name: 'twitter:image', content: 'https://secrex.ai/img/secrexai-og-banner.png' },
        { name: 'twitter:site', content: '@SecrexAI_HK' },
        { name: 'theme-color', content: '#0A0E1A' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://secrex.ai/' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'SecrexAI Blog', href: '/feed.xml' },
      ],
      script: [
        {
          innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NGZF3Z86');",
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-2GP1YTNWQC',
          async: true,
        },
        {
          innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2GP1YTNWQC');",
        },
      ],
    },
  },
  css: ['./app/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  runtimeConfig: {
    public: {
      whatsappNumber: '85296456787',
      whatsappUrl: 'https://wa.me/85296456787',
      workerUrl: 'https://form-api.area2hk-sub.workers.dev',
    },
  },
})
