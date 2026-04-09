<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGZF3Z86" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// JSON-LD Structured Data for SEO
useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SecrexAI',
      url: 'https://secrex.ai/',
      logo: 'https://secrex.ai/img/secrexai-logo.png',
      description: '香港 SME 專屬 WhatsApp AI 助手。廣東話原生・永久記憶・60+技能・PDPO 合規',
      sameAs: [
        'https://www.facebook.com/secrexai',
        'https://www.instagram.com/secrexai_hk',
        'https://www.linkedin.com/company/secrexai'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+852-9645-6787',
        contactType: 'Customer Service',
        availableLanguage: ['Cantonese', 'English', 'Mandarin']
      }
    })
  }, {
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'SecrexAI',
      url: 'https://secrex.ai/',
      description: '香港 SME 專屬 WhatsApp AI 助手',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://secrex.ai/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })
  }]
})
</script>
