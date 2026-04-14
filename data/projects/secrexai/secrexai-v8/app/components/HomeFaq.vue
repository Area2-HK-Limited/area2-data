<template>
  <div>
    <!-- Refresh button -->
    <div style="display: flex; justify-content: flex-end; margin-bottom: 1rem;">
      <button type="button" class="faq-refresh-btn" @click="refreshBatch" :disabled="isRefreshing">
        <FaIcon icon="rotate-right" :style="isRefreshing ? 'animation: spin 0.6s linear infinite;' : ''" />
        換一批問題
      </button>
    </div>

    <!-- Fixed-height container prevents layout jump during transition -->
    <div class="faq-container">
      <transition name="faq-batch" mode="out-in">
        <div :key="batchIdx" class="faq-batch-wrap">
          <div v-for="(faq, i) in currentFaqs" :key="i" class="faq-item" :class="{ open: openIdx === i }">
            <div class="faq-question" @click="toggle(i)">
              <span>{{ faq.q }}</span>
              <div class="faq-toggle-icon">
                <FaIcon :icon="openIdx === i ? 'minus' : 'plus'" style="font-size:0.75rem;" />
              </div>
            </div>
            <div class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
const openIdx = ref(0)
const batchIdx = ref(0)
const isRefreshing = ref(false)

const toggle = (i) => { openIdx.value = openIdx.value === i ? -1 : i }

const allBatches = [
  // Batch 0 — General
  [
    { q: '有冇免費試用？', a: '有！所有方案提供 14 日免費試用。點擊任何「開始免費試用」按鈕，透過安全頁面登記，試用期內可隨時取消，唔會自動扣費。' },
    { q: 'SecrexAI 係咩？同 ChatGPT 有咩分別？', a: 'SecrexAI 係香港 SME 專屬嘅 WhatsApp AI 秘書，唔使安裝任何 App，直接用你現有嘅 WhatsApp 廣東話對話。同 ChatGPT 最大分別係：① 永久記憶（記住你係誰）② 廣東話原生優化 ③ 60+ 整合技能（搜尋/分析/提醒/圖片等）④ PDPO 合規。' },
    { q: '我嘅對話數據安不安全？', a: '你嘅對話記錄儲存喺亞太區雲端（Tencent Cloud 企業級數據中心），唔做廣告、唔訓練 AI 模型、PDPO 合規。AI 推理功能由第三方 AI 服務商提供（如 OpenAI / Anthropic），具體數據處理政策以各服務商條款為準。' },
    { q: '點樣開始使用？需唔需要安裝嘢？', a: '唔需要安裝任何 App！登記後，我哋團隊會喺 1-3 個工作天內以 WhatsApp 聯絡你設定 SecrexAI。之後你直接喺 WhatsApp 廣東話跟 SecrexAI 對話，就係咁簡單。' },
    { q: '可以隨時取消嗎？', a: '可以！所有方案月付制，隨時取消，唔鎖定合約。試用期結束後如唔想續訂，直接通知我哋即可，唔會自動扣費。' },
  ],
  // Batch 1 — Technical
  [
    { q: 'SecrexAI 支援廣東話嗎？', a: '係！SecrexAI 係廣東話原生優化，可以直接用香港口語、粵語詞彙同縮寫溝通，唔使轉換成書面語或普通話。系統亦支援廣東話輸入轉文字，包括發送語音訊息分析。' },
    { q: '永久記憶係點樣工作嘅？', a: 'SecrexAI 會記住你嘅背景資料（公司、客戶、工作習慣），每次對話都喺呢個記憶基礎上回應，唔使每次重新解釋。你可以隨時更新或刪除記憶內容，完全由你控制。' },
    { q: 'SecrexAI 係用邊個 AI 模型？', a: 'SecrexAI 底層整合多個頂尖 AI 模型（包括 GPT-4o、Claude 3.5、Gemini 等），並根據任務類型自動揀選最合適嘅模型。你唔需要選擇，系統會幫你揀最好嘅結果。' },
    { q: '可以幫我生成圖片嗎？', a: '可以！SecrexAI 內建 AI 圖片生成功能，可以幫你生成產品圖、社媒配圖、海報等。只需用文字描述你想要嘅圖片，SecrexAI 即時生成，適合社媒推廣同日常業務需求。' },
    { q: '支援語音訊息嗎？', a: '支援！你可以直接喺 WhatsApp 發送語音訊息俾 SecrexAI，佢會自動轉文字並理解你嘅需求，然後用文字回覆。適合手忙腳亂或者唔想打字嘅時候快速發指令。' },
  ],
  // Batch 2 — Pricing & Business
  [
    { q: 'Starter 同 Business 方案有咩分別？', a: 'Starter（HK$298/月）適合個人、SOHO 或輕度使用者，包含 60+ 技能完整使用 + 永久記憶 + 排程提醒等核心功能。Business（HK$688/月）增加優先技術支援、團隊協作功能、進階數據分析，適合有員工嘅 SME。' },
    { q: 'Enterprise 方案係點架？', a: 'Enterprise 係度身訂造方案，適合 50 人以上企業或有特殊需求嘅公司。包括無限成員使用、自訂 AI 個性設定、專屬客戶經理、企業級 SLA 保證。請 WhatsApp 我哋查詢報價。' },
    { q: '一個帳號可以幾多人用？', a: 'Starter 係個人帳號，綁定一個 WhatsApp 號碼。Business 方案支援團隊協作，可以加入多個成員。Enterprise 方案支援無限成員。如果你有多個員工需要使用，建議考慮 Business 或 Enterprise 方案。' },
    { q: 'AI 教練服務係乜嘢？', a: 'AI 教練係 HK$1,500/月嘅增值服務，提供 30 分鐘個人化 Onboarding、調教 AI 認識你的工作習慣、辦公時間 WhatsApp 無限次廣東話技術支援。適合想快速上手或充分發揮 SecrexAI 價值嘅用戶。' },
    { q: '有冇年付優惠？', a: '有！年付方案可享額外折扣（具體優惠請 WhatsApp 我哋查詢）。年付同月付功能完全相同，只係付款方式不同。我哋建議先試用 14 日，確認適合先決定年付或月付。' },
  ],
  // Batch 3 — Use cases
  [
    { q: '餐廳可以用 SecrexAI 做咩？', a: 'SecrexAI 特別適合餐廳：① 語音/文字即更新每日特別餐單 + 自動生成 IG Story 圖 ② 整合訂位提醒 + 自動確認回覆 ③ 分析顧客常問問題建立自動回覆 ④ 生成廣東話推廣文案。免卻每日重複操作，節省大量人手時間。' },
    { q: '地產代理用 SecrexAI 有咩好處？', a: '地產代理最常用功能：① 輸入樓盤資料即出中英對照放盤文案 ② 自動排程睇樓提醒 + 確認訊息 ③ 記憶客人偏好（地區/預算/類型），下次即時配對 ④ 批量個人化 WhatsApp 跟進訊息。平均每日節省 2-3 小時重複工作。' },
    { q: '我係自由職業者，SecrexAI 適合我嗎？', a: '非常適合！自由職業者最需要嘅係：① 快速生成客戶提案/報價/合約草稿 ② 發票催收自動化 ③ 項目 Deadline 提醒 ④ 多語言翻譯（中英文交流）⑤ 社媒推廣文案。Starter 方案 HK$298/月，性價比極高。' },
    { q: 'SecrexAI 可以幫我寫 email 嗎？', a: '可以！SecrexAI 可以幫你草擬中文、英文或廣東話 email，包括商業往來、客戶跟進、投訴回應、合作洽談等。只需說出 email 目的同主要內容，SecrexAI 即時生成多個版本供你選擇，並可按你喜好調整語氣。' },
    { q: 'SecrexAI 識唔識做 Excel 分析？', a: '識！你可以將 Excel 數據直接傳俾 SecrexAI，佢可以分析銷售趨勢、計算 KPI 達成率、做月度/季度對比，並生成行動建議。結果可以輸出成格式化報告 PDF，直接發送俾管理層或客戶。' },
  ],
]

const currentFaqs = computed(() => allBatches[batchIdx.value])

const refreshBatch = () => {
  if (isRefreshing.value) return
  isRefreshing.value = true
  openIdx.value = -1

  // Pick a different batch
  let next
  do {
    next = Math.floor(Math.random() * allBatches.length)
  } while (next === batchIdx.value && allBatches.length > 1)

  // Update batchIdx triggers out-in transition: old fades out fully FIRST, then new fades in
  batchIdx.value = next

  // Re-enable button after transition completes
  setTimeout(() => {
    isRefreshing.value = false
    openIdx.value = 0
  }, 400)
}
</script>

<style scoped>
/* Container prevents layout jump during transition */
.faq-container {
  position: relative;
  min-height: 0;
}
.faq-batch-wrap {
  width: 100%;
}

.faq-refresh-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.4rem 0.875rem;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: #64748B;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.faq-refresh-btn:hover {
  background: rgba(96,165,250,0.08);
  border-color: rgba(96,165,250,0.25);
  color: #60A5FA;
}
.faq-refresh-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.faq-toggle-icon {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s;
  color: var(--text-secondary);
}
.faq-item.open .faq-toggle-icon {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
  color: #60A5FA;
}

/* Batch transition with mode="out-in":
   Old content FULLY fades out first (leave-active completes),
   then new content fades in (enter-active).
   The leave-active uses position:absolute to prevent height collapse jump. */
.faq-batch-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.faq-batch-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}
.faq-batch-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.faq-batch-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
