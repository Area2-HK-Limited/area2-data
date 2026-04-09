<template>
  <div class="faq-page">
    <header class="hero">
      <h1>常見問題</h1>
      <p>如有其他查詢，歡迎透過 WhatsApp 聯絡本公司：<a href="https://wa.me/85296456787" style="color:#60A5FA;">+852 9645 6787</a></p>
    </header>

    <div class="faq-list">
      <details
        v-for="(item, idx) in faqs"
        :key="idx"
        class="faq-details"
      >
        <summary class="faq-summary">
          <span>{{ item.q }}</span>
        </summary>
        <div class="faq-answer">
          <p>{{ item.a }}</p>
        </div>
      </details>
    </div>

    <section class="contact-cta">
      <h2>未能找到所需答案？</h2>
      <p style="color:#64748B;margin-bottom:1.25rem;">我哋樂意解答任何關於 SecrexAI 嘅問題</p>
      <a href="https://wa.me/85296456787" target="_blank" rel="noopener" class="btn-whatsapp">
        WhatsApp 聯絡我哋
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: 'SecrexAI 是什麼？',
    a: 'SecrexAI 是一個透過 WhatsApp 運作的 AI 秘書，以廣東話與用戶溝通，協助處理日常工作及生活事務，涵蓋 Email 撰寫、行程提醒、市場研究、圖片生成等 60 多項功能。',
  },
  {
    q: '14 日免費試用是否真正免費？',
    a: '是的，14 日免費試用期完全免費，試用期內免費。閣下可直接體驗大部分功能，試用期屆滿後方需決定是否訂閱。',
  },
  {
    q: '如何報名參加免費試用？',
    a: '步驟如下：1. 前往本公司網站填寫報名表；2. 選擇合適方案；3. 確認公司電郵地址；4. 等候本公司透過 WhatsApp 聯絡閣下協助開通帳戶。最快可於當日開始使用。',
  },
  {
    q: '數據是否安全？',
    a: '閣下的對話記錄儲存於亞太區的騰訊雲伺服器，符合香港個人資料私隱條例（PDPO）。本公司不會將用戶數據用於訓練 AI 模型，亦不會出售或向第三方披露。',
  },
  {
    q: '數據是否會傳輸至美國？',
    a: 'AI 推理功能由第三方 AI 模型服務商（如 OpenAI、Anthropic、Google）提供，閣下輸入的內容將經由第三方伺服器處理。然而，閣下的對話記錄及個人資料均儲存於亞太區，不會用於模型訓練。',
  },
  {
    q: '是否需要使用 VPN？',
    a: '無需使用 VPN。SecrexAI 直接透過 WhatsApp 運作，香港用戶可直接使用，無需任何 VPN 或特殊工具。',
  },
  {
    q: '支援哪些語言？',
    a: '主要支援廣東話（以香港用戶為優先），同時支援英文及普通話，日常廣東話對話完全可用。',
  },
  {
    q: '如何取消訂閱？',
    a: '閣下可隨時透過 WhatsApp 聯絡本公司辦理取消手續。取消後，服務將於當前計費周期結束後終止，期間服務維持正常，其後不再收取費用。',
  },
  {
    q: 'AI 教練是什麼？是否必須選用？',
    a: 'AI 教練為可選增值服務，提供辦公時間 WhatsApp 無限次技術支援，協助閣下快速上手並持續優化使用效益。大部分用戶可自行摸索，但如希望盡快發揮最大效益，AI 教練是最有效的途徑。',
  },
  {
    q: '哪些人士適合使用 SecrexAI？',
    a: '適合中小企業負責人、餐飲、零售、地產、教育、美容、物流等行業的管理人員，以及需要提升日常工作效能的專業人士。如閣下每週在行政工作上花費大量時間，SecrexAI 可協助節省寶貴時間。',
  },
]
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 4rem 1.5rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-background-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.75rem;
}

.hero p {
  color: #64748B;
  font-size: 1rem;
  line-height: 1.6;
}

.faq-list {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-details {
  border-bottom: 1px solid var(--border);
  background: transparent;
  transition: background 0.2s;
}

.faq-details[open] {
  background: rgba(59, 130, 246, 0.04);
}

.faq-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0.5rem;
  cursor: pointer;
  list-style: none;
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--text-primary);
  gap: 1rem;
  transition: color 0.2s;
  -webkit-user-select: none;
  user-select: none;
}

.faq-summary:hover {
  color: #60A5FA;
}

.faq-summary::-webkit-details-marker { display: none; }
.faq-summary::marker { display: none; }

/* Custom + icon using ::after */
.faq-summary::after {
  content: '+';
  font-size: 1.5rem;
  color: #60A5FA;
  font-weight: 400;
  line-height: 1;
  flex-shrink: 0;
  transition: transform .2s;
}

.faq-details[open] .faq-summary::after {
  content: '−';
}

.faq-answer {
  display: block;
  padding: 0.25rem 0.5rem 1.5rem;
  color: #94A3B8;
  line-height: 1.75;
  font-size: 0.9375rem;
}

.contact-cta {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem 2rem;
  background: var(--bg-card);
  border-radius: 1.5rem;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.contact-cta h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #25D366;
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s, transform 0.2s;
}

.btn-whatsapp:hover {
  background: #20bd5a;
  transform: translateY(-2px);
}
</style>
