<template>
  <main>
    <Head>
      <title>免責聲明 | PersonAI</title>
      <meta name="description" content="PersonAI 免責聲明。" />
    </Head>
    <section class="section-bg py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-black text-gray-900 mb-2">免責聲明</h1>
        <p class="text-gray-400 text-sm mb-8">最後更新：2026 年 3 月</p>
        <div class="space-y-4">
          <div v-for="s in sections" :key="s.title" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 class="font-black text-lg text-gray-900 mb-3">{{ s.title }}</h2>
            <p class="text-gray-600 text-sm leading-relaxed">{{ s.content }}</p>
          </div>
          <div class="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <p class="text-blue-700 text-sm">如有任何問題，請 WhatsApp <strong>+852 9645 6787</strong> 或 Email <strong>eric@hostlink.com.hk</strong> 聯絡我哋。</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const sections = [
  { title: '1. AI 生成內容', content: 'PersonAI 由 AI 技術驅動，生成的內容僅供參考。用戶應自行判斷 AI 生成的建議、資訊或分析是否適用於其具體情況，並在需要時咨詢相關專業人士。' },
  { title: '2. 準確性', content: '雖然我們致力提供準確和最新的資訊，但 PersonAI 不保證其生成的所有內容完全準確、完整或最新。AI 技術有其局限性，可能偶爾產生不準確的回應。' },
  { title: '3. 專業建議', content: '本服務提供的任何資訊不構成法律、財務、醫療、心理或其他專業建議。在做出重要決定前，請諮詢持牌專業人士。' },
  { title: '4. 第三方連結', content: '本網站可能包含第三方網站的連結。PersonAI 對第三方網站的內容、隱私政策或做法不負責任。' },
  { title: '5. 服務變更', content: 'PersonAI 保留隨時修改、暫停或終止服務的權利，但會盡可能提前通知用戶。' },
]
</script>
