<template>
  <div class="min-h-screen bg-[#0A0A0F] text-white">
    <div class="container mx-auto px-4 py-20 max-w-5xl">
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          PersonAI 技能一覽
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          60+ 技能，一個平台，全部幫你搞掂
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="skill in skills" :key="skill.title" class="bg-[#111] border border-[#222] rounded-2xl p-6 hover:border-green-500/50 transition-all">
          <div class="text-3xl mb-3">{{ skill.icon }}</div>
          <h3 class="text-lg font-semibold text-white mb-2">{{ skill.title }}</h3>
          <p class="text-sm text-gray-400">{{ skill.desc }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <a href="/early-access" class="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all">
          立即免費試用 →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { icon: '📧', title: 'Email 助手', desc: '撰寫、回覆、總結電郵' },
  { icon: '📅', title: '行程管理', desc: '排程提醒、會議統籌' },
  { icon: '📊', title: '數據分析', desc: 'Excel/PDF 報告解讀' },
  { icon: '✍️', title: '文案創作', desc: 'EDM、社交媒體、廣告' },
  { icon: '🌐', title: '網頁搜尋', desc: '最新資訊即時查找' },
  { icon: '🖼️', title: '圖片生成', desc: 'Nano Banana Pro 專業圖片' },
  { icon: '🎙️', title: '語音轉文字', desc: '會議錄音自動轉錄' },
  { icon: '📝', title: '會議紀錄', desc: '自動摘要行動項目' },
  { icon: '🤖', title: '代碼助手', desc: '程式開發 debug' },
  { icon: '📦', title: '翻譯助手', desc: '中英粵即時翻譯' },
  { icon: '🔍', title: '市場研究', desc: '競品分析行業趨勢' },
  { icon: '💼', title: '商業策劃', desc: '提案報告策略建議' },
]
</script>
