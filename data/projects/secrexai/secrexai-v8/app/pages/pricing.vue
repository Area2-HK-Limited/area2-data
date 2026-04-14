<template>
  <div>
    <Head>
      <title>定價方案 | SecrexAI — 14 日免費試用</title>
      <meta name="description" content="SecrexAI 定價方案：Starter、Business、Enterprise，所有方案 14 日免費試用，免費試用，隨時取消。點擊了解詳細方案。" />
    </Head>

    <!-- Hero -->
    <section class="section" style="background: linear-gradient(135deg, #0A0E1A 0%, #0F1629 100%); padding-top: 4rem;">
      <div class="container text-center">
        <div class="badge badge-blue mb-2" style="display: inline-flex;">💰 定價方案</div>
        <h1 style="margin-bottom: 1rem;">揀啱你嘅方案<br><span class="gradient-text">即日開始</span></h1>
        <p style="font-size: 1.125rem; max-width: 520px; margin: 0 auto; color: #94A3B8;">
          所有方案均包含 60+ 技能 + 廣東話優化 + 永久記憶<br>14 日免費試用，免費試用，隨時取消
        </p>
      </div>
    </section>

    <!-- Plan Cards -->
    <section class="section">
      <div class="container">
        <PricingPlans :show-toggle="true" />
      </div>
    </section>

    <!-- ================================================
         任務一：期望管理 Section — AI 放大人
         ================================================ -->
    <section class="section" style="background: linear-gradient(135deg, #080C18 0%, #0F1A2E 100%);">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-purple mb-2" style="display: inline-flex; background: rgba(139,92,246,0.15); color: #A78BFA; border: 1px solid rgba(139,92,246,0.3);">🚀 正確理解 AI</div>
          <h2 style="margin-top: 0.75rem;">AI 唔係取代人<br class="mobile-br"><span class="gradient-text">而係放大人</span></h2>
          <p style="color: #94A3B8; margin-top: 0.75rem; font-size: 1rem; max-width: 560px; margin-left: auto; margin-right: auto;">
            好多人問：「HK$298/月咁貴，唔係話 AI 可以取代員工咩？」<br>
            呢個係最常見的誤解——我哋幫你釐清。
          </p>
        </div>

        <!-- 3-column mindset cards -->
        <div class="amplifier-grid">
          <div v-for="card in amplifierCards" :key="card.title" class="amplifier-card">
            <div class="amplifier-icon">{{ card.icon }}</div>
            <h4 class="amplifier-title">{{ card.title }}</h4>
            <p class="amplifier-body">{{ card.body }}</p>
          </div>
        </div>

        <!-- Comparison: with vs without AI (with images) -->
        <div class="ai-compare-wrap" style="margin-top: 2.5rem;">
          <div class="ai-compare-box ai-compare-without" style="flex: 1; min-width: 260px;">
            <div class="ai-compare-label">❌ 唔用 SecrexAI 嘅老闆</div>
            <img src="/img/no-secrexai-boss.png" alt="唔用 SecrexAI 嘅老闆" style="width: 100%; border-radius: 0.75rem; margin-bottom: 1rem; display: block;" />
            <ul class="ai-compare-list">
              <li>重複工作每日佔用 3–4 小時</li>
              <li>文案 / 報告 / 翻譯要一件件做</li>
              <li>跟唔上 AI 時代嘅競爭對手</li>
              <li>員工産能上限 = 工時上限</li>
            </ul>
          </div>
          <div class="ai-compare-arrow" style="align-self: center; font-size: 2rem; color: #60A5FA; padding: 0 1rem;">→</div>
          <div class="ai-compare-box ai-compare-with" style="flex: 1; min-width: 260px;">
            <div class="ai-compare-label">✅ 用 SecrexAI 嘅老闆</div>
            <img src="/img/with-secrexai-boss.png" alt="用 SecrexAI 嘅老闆" style="width: 100%; border-radius: 0.75rem; margin-bottom: 1rem; display: block;" />
            <ul class="ai-compare-list">
              <li>AI 24/7 處理重複任務，你聚焦高值工作</li>
              <li>1 個人做到 3 個員工嘅工作量</li>
              <li>用 AI 嘅老闆，差距越拉越大</li>
              <li>HK$298/月 = 能力放大，非替代品</li>
            </ul>
          </div>
        </div>

        <!-- ROI framing callout -->
        <div class="roi-framing-callout">
          <div class="roi-framing-title">💡 點樣正確計算你嘅 ROI</div>
          <div class="roi-framing-grid">
            <div class="roi-framing-item roi-framing-wrong">
              <div class="roi-framing-tag">❌ 錯誤計法</div>
              <div class="roi-framing-text">「AI 可以取代幾多個員工？」<br><span style="font-size: 0.8125rem; color: #94A3B8;">員工係人，AI 係工具，唔能直接替換</span></div>
            </div>
            <div class="roi-framing-arrow">→</div>
            <div class="roi-framing-item roi-framing-right">
              <div class="roi-framing-tag">✅ 正確計法</div>
              <div class="roi-framing-text">「我多咗幾多產能 / 節省幾多時間？」<br><span style="font-size: 0.8125rem; color: #94A3B8;">每月慳 10 小時 = HK$298 ÷ 10 = HK$30/小時</span></div>
            </div>
          </div>
          <div class="roi-framing-bottom">
            HK$298/月 = 請唔到任何人，但請到一個 <strong style="color: #60A5FA;">24/7 唔會病唔會攰</strong> 嘅智能秘書
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================
         任務二：ROI Calculator — 11 個工具
         ================================================ -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-orange mb-2" style="display: inline-flex;">💡 ROI 計算機</div>
          <h2 style="margin-top: 0.75rem;">一個 SecrexAI 取代 16 個訂閱</h2>
          <p style="color: #94A3B8; margin-top: 0.5rem; font-size: 1rem;">試算你每月為幾個 AI 工具付幾多錢</p>
        </div>

        <!-- Interactive ROI Calculator -->
        <div class="roi-calculator-wrap">
          <div class="roi-calculator-inner">
            <div class="roi-grid">
              <!-- Left: Tool selection -->
              <div class="roi-tools-col">
                <h3 class="roi-tools-heading">剔你目前訂閱緊既工具</h3>
                <div class="roi-tools-list" style="max-height: 500px; overflow-y: auto; padding-right: 0.5rem;">
                  <div
                    v-for="tool in roiTools"
                    :key="tool.id"
                    class="roi-tool-item"
                    :class="{ selected: tool.selected }"
                    @click="tool.selected = !tool.selected"
                  >
                    <div class="roi-tool-left">
                      <div class="roi-checkbox" :class="{ checked: tool.selected }">
                        <span v-if="tool.selected" class="roi-checkbox-tick">✓</span>
                      </div>
                      <div>
                        <div class="roi-tool-name">{{ tool.name }}</div>
                        <div class="roi-tool-desc">{{ tool.desc }}</div>
                      </div>
                    </div>
                    <div class="roi-tool-price">{{ tool.displayPrice }}</div>
                  </div>
                </div>
              </div>

              <!-- Right: Result panel -->
              <div class="roi-result-col">
                <div class="roi-result-current">
                  <div class="roi-result-label">你目前每月訂閱</div>
                  <div class="roi-result-amount roi-amount-red">{{ totalCurrentDisplay }}/月</div>
                  <div class="roi-result-sub">{{ selectedCount }} 個工具</div>
                </div>

                <div class="roi-arrow-row">
                  <div class="roi-arrow-text">↓ 改用 SecrexAI ↓</div>
                </div>

                <div class="roi-result-secrexai">
                  <div class="roi-result-label">SecrexAI Starter 每月</div>
                  <div class="roi-result-amount roi-amount-green">HK${{ PERSONAI_PRICE }}</div>
                  <div class="roi-result-sub">60+ 技能 · 永久記憶 · 1 個訂閱</div>
                </div>

                <div v-if="selectedCount > 0" class="roi-result-savings">
                  <div class="roi-result-label">每月節省</div>
                  <div class="roi-result-amount roi-amount-blue">慳 HK${{ savingsAmount }}/月</div>
                  <div class="roi-savings-pct">{{ savingsPct }} 慳咗</div>
                  <div class="roi-savings-year">
                    <div style="font-size: 0.875rem; color: #94A3B8;">每年節省</div>
                    <div style="font-size: 1.125rem; font-weight: 700; color: #4ADE80;">HK${{ savingsAmount * 12 }}/年</div>
                  </div>
                </div>
                <div v-else class="roi-result-empty">
                  <div style="font-size: 0.875rem; color: #64748B;">剔選你正在用嘅工具，睇吓可以慳幾多</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Static summary: all 11 tools -->
        <div class="roi-summary-wrap">
          <p class="roi-summary-intro">如果你訂閱以下全部 {{ ALL_TOOLS.length }} 個工具：</p>
          <div class="roi-summary-grid">
            <div v-for="tool in ALL_TOOLS" :key="tool.id" class="roi-summary-card">
              <div class="roi-summary-icon">{{ tool.icon }}</div>
              <div class="roi-summary-name">{{ tool.name }}</div>
              <div class="roi-summary-price">HK${{ tool.price }}</div>
            </div>
          </div>
          <div class="roi-summary-footer">
            <div class="roi-summary-total-box">
              <div class="roi-summary-label">{{ ALL_TOOLS.length }} 個工具</div>
              <div class="roi-summary-total-price roi-amount-red">HK${{ totalAllTools }}/月</div>
            </div>
            <div class="roi-summary-vs">→</div>
            <div class="roi-summary-total-box">
              <div class="roi-summary-label">SecrexAI</div>
              <div class="roi-summary-total-price roi-amount-green">HK${{ PERSONAI_PRICE }}/月</div>
            </div>
            <div class="roi-summary-pct-box">
              <div class="roi-summary-label">慳幾多？</div>
              <div class="roi-summary-total-price roi-amount-green">{{ Math.round(((totalAllTools - PERSONAI_PRICE) / totalAllTools) * 100) }}%</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Coach Add-on -->
    <section class="section">
      <div class="container">
        <div class="card coach-card" style="max-width: 800px; margin: 0 auto; padding: 2.5rem; background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.04)); border-color: rgba(139, 92, 246, 0.3);">
          <div class="coach-grid">
            <div>
              <div class="badge badge-blue mb-2" style="display: inline-flex;">🎓 增值服務</div>
              <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem; margin-top: 0.5rem;">AI 教練服務</h3>
              <p style="color: #94A3B8; margin-bottom: 1.25rem;">唔識用？有人教！真人技術團隊，WhatsApp 廣東話全程支援，確保你真正用到 SecrexAI 嘅全部價值。</p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
                <li v-for="f in coachFeats" :key="f" style="font-size: 0.875rem; color: #94A3B8; display: flex; gap: 0.5rem;">
                  <span style="color: #4ADE80; flex-shrink: 0;">✓</span> {{ f }}
                </li>
              </ul>
              <NuxtLink to="/ai-coach" class="btn btn-outline">了解 AI 教練 →</NuxtLink>
            </div>
            <div style="text-align: center; min-width: 160px;">
              <div style="color: #64748B; font-size: 0.8125rem; margin-bottom: 0.5rem;">可與任何方案配合</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Comparison Table -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>方案詳細對比</h2>
          <p style="color: #94A3B8; margin-top: 0.5rem;">一目了然，邊個方案啱你</p>
        </div>
        <div class="comparison-table-wrap">
          <div class="comparison-table-scroll">
            <div class="comparison-table-container">
              <table class="comparison-table" style="width: 100%; min-width: 600px; border-collapse: collapse;">
                <thead>
                  <tr style="background: rgba(15,22,41,0.95);">
                    <th style="padding: 1rem 1.25rem; text-align: left; font-size: 0.8125rem; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,255,255,0.08); min-width: 160px;">功能</th>
                    <th style="padding: 1rem; text-align: center; font-size: 0.875rem; font-weight: 700; color: #E2E8F0; border-bottom: 1px solid rgba(255,255,255,0.08); min-width: 110px;">Starter<br><span style="font-size: 0.75rem; font-weight: 400; color: #64748B;">個人版</span></th>
                    <th style="padding: 1rem; text-align: center; font-size: 0.875rem; font-weight: 700; color: #60A5FA; border-bottom: 1px solid rgba(59,130,246,0.3); background: rgba(59,130,246,0.05); min-width: 110px;">Business<br><span style="font-size: 0.75rem; font-weight: 400; color: #64748B;">商務版</span></th>
                    <th style="padding: 1rem; text-align: center; font-size: 0.875rem; font-weight: 700; color: #E2E8F0; border-bottom: 1px solid rgba(255,255,255,0.08); min-width: 110px;">Enterprise<br><span style="font-size: 0.75rem; font-weight: 400; color: #64748B;">企業版</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, ri) in compRows" :key="row.feature" :style="ri % 2 === 0 ? 'background: rgba(15,22,41,0.5);' : 'background: rgba(255,255,255,0.02);'">
                    <td style="padding: 0.9375rem 1.25rem; font-size: 0.9375rem; font-weight: 500; color: #E2E8F0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                      <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: #60A5FA; font-size: 0.75rem;">{{ row.icon }}</span>
                        {{ row.feature }}
                      </div>
                    </td>
                    <td v-for="val in [row.starter, row.business, row.enterprise]" :key="val" style="padding: 0.9375rem 1rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
                      <span v-if="val === true" style="display: inline-flex; align-items: center; justify-content: center; width: 1.5rem; height: 1.5rem; background: rgba(74,222,128,0.12); border-radius: 50%; color: #4ADE80; font-size: 0.875rem;">✓</span>
                      <span v-else-if="val === false" style="color: #475569; font-size: 1rem;">—</span>
                      <span v-else-if="val === 'highlight'" style="color: #60A5FA; font-weight: 700; font-size: 0.9375rem;">{{ row.highlight }}</span>
                      <span v-else style="color: #94A3B8; font-size: 0.875rem;">{{ val }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue">❓ 定價相關問題</div>
          <h2 style="margin-top: 0.75rem;">常見問答</h2>
        </div>
        <div style="max-width: 780px; margin: 0 auto;">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openIdx === i }">
            <div class="faq-question" @click="toggle(i)">
              <span>{{ faq.q }}</span>
              <div class="faq-icon">+</div>
            </div>
            <div class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="background: linear-gradient(135deg, #1E1B4B 0%, #0F1629 100%); text-align: center;">
      <div class="container">
        <h2 style="margin-bottom: 1rem;">準備好開始？</h2>
        <p style="color: #94A3B8; margin-bottom: 2rem; max-width: 480px; margin-left: auto; margin-right: auto;">14 日免費試用，免費試用。試用期內可隨時取消。</p>
        <div class="cta-btn-group">
          <NuxtLink to="/subscribe" class="btn btn-primary btn-lg">🚀 開始免費試用</NuxtLink>
          <a href="https://wa.me/85296456787" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">WhatsApp 查詢 Enterprise</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const openIdx = ref(0)
const toggle = (i) => { openIdx.value = openIdx.value === i ? -1 : i }

// ─── Static price constants (single source of truth) ───────────────────
const PERSONAI_PRICE = 298

// 14 tools with full data (from market research + SecrexAI features)
const ALL_TOOLS = [
  { id: 'chatgpt',    icon: '🤖', name: 'ChatGPT Plus',        desc: 'AI 對話 + 搜尋',    price: 156 },
  { id: 'claude',     icon: '🧠', name: 'Claude Pro',           desc: '進階 AI 推理',      price: 156 },
  { id: 'perplexity', icon: '🔍', name: 'Perplexity Pro',      desc: 'AI 搜尋引擎',       price: 156 },
  { id: 'gemini',     icon: '✨', name: 'Gemini Advanced',      desc: 'Google AI 秘書',    price: 156 },
  { id: 'nanobanana', icon: '🖼️', name: 'Nano Banana Pro',     desc: 'AI 圖片生成',       price: 156 },
  { id: 'suno',       icon: '🎵', name: 'Suno Pro',            desc: 'AI 音樂生成',       price: 78  },
  { id: 'midjourney', icon: '🎨', name: 'Midjourney Standard',  desc: 'AI 圖片生成',       price: 234 },
  { id: 'runway',     icon: '🎬', name: 'Runway Standard',     desc: 'AI 影片生成',       price: 94  },
  { id: 'deepl',      icon: '🌐', name: 'DeepL Pro',           desc: '專業翻譯',          price: 228 },
  { id: 'semrush',    icon: '📈', name: 'SEMrush',             desc: 'SEO 分析工具',       price: 360 },
  { id: 'notion',     icon: '📋', name: 'Notion AI',           desc: '文檔 + AI',         price: 200 },
  { id: 'canva',      icon: '🖥️', name: 'Canva Pro',           desc: '設計 + 圖片',       price: 130 },
  { id: 'plaud',      icon: '🎤', name: 'Plaud Note',         desc: '語音備忘 + 錄音',   price: 130 },
  { id: 'youtube',    icon: '📺', name: 'NoteGPT',             desc: 'YouTube 影片摘要',     price: 23  },
  { id: 'stt',        icon: '🎙️', name: 'Otter.ai',             desc: '會議錄音 AI 轉文字',  price: 106 },
  { id: 'tts',        icon: '🔊', name: 'ElevenLabs Creator',   desc: 'AI 配音 (粵/普/英)', price: 172 },
]

const totalAllTools = ALL_TOOLS.reduce((s, t) => s + t.price, 0) // 2347

// ─── Reactive tool list for ROI calculator ─────────────────────────────
const roiTools = ref(
  ALL_TOOLS.map(t => ({
    ...t,
    displayPrice: `HK$${t.price}/月`,
    selected: false,
  }))
)

const selectedCount = computed(() => roiTools.value.filter(t => t.selected).length)

const totalCurrentRaw = computed(() =>
  roiTools.value.reduce((sum, t) => sum + (t.selected ? t.price : 0), 0)
)

const totalCurrentDisplay = computed(() => `HK$${totalCurrentRaw.value}`)

const savingsAmount = computed(() => Math.max(0, totalCurrentRaw.value - PERSONAI_PRICE))

const savingsPct = computed(() => {
  if (totalCurrentRaw.value === 0) return '0%'
  return Math.round(((totalCurrentRaw.value - PERSONAI_PRICE) / totalCurrentRaw.value) * 100) + '%'
})

// ─── Amplifier cards (期望管理 section) ────────────────────────────────
const amplifierCards = [
  {
    icon: '🔋',
    title: 'AI 係你嘅能力放大器',
    body: 'SecrexAI 唔係取代員工，係放大你每個員工嘅產能。一個善用 AI 嘅人，等於多咗一個全天候高效秘書隨時待命。',
  },
  {
    icon: '📈',
    title: '一個人做多 3 倍工作',
    body: '一個善用 AI 嘅老闆，可以做到 3 個普通員工嘅工作量。你嘅競爭對手正在用 AI——你唔用，差距只會越拉越大。',
  },
  {
    icon: '💸',
    title: 'HK$298 = 24/7 智能秘書',
    body: '請一個兼職最少 HK$60/小時。SecrexAI 每月 HK$298，唔會遲到、唔會病、唔會攰，全年無休為你服務。',
  },
]

// ─── Feature comparison ────────────────────────────────────────────────
const compRows = [
  { feature: '60+ 技能使用', icon: '⚡', starter: true, business: true, enterprise: true },
  { feature: '廣東話原生對話', icon: '💬', starter: true, business: true, enterprise: true },
  { feature: '永久記憶系統', icon: '🧠', starter: true, business: true, enterprise: true },
  { feature: '排程提醒', icon: '⏰', starter: true, business: true, enterprise: true },
  { feature: 'AI 圖片生成', icon: '🖼️', starter: true, business: true, enterprise: true },
  { feature: 'WhatsApp 語音訊息', icon: '🎙️', starter: true, business: true, enterprise: true },
  { feature: '會議錄音轉錄', icon: '📋', starter: true, business: true, enterprise: true },
  { feature: '使用量', icon: '📦', starter: '個人用量', business: '5倍商業用量', enterprise: '度身訂造' },
  { feature: 'ISO 27001 / SOC 2 數據安全認證', icon: '🔐', starter: false, business: true, enterprise: true },
  
  { feature: '技術支援', icon: '🎧', starter: '基本', business: '優先', enterprise: '專屬' },
  { feature: '自訂 AI 個性', icon: '🎨', starter: true, business: true, enterprise: true },
  { feature: '白標 / 品牌設定', icon: '🏷️', starter: true, business: true, enterprise: true },
  { feature: '企業級 SLA', icon: '🛡️', starter: false, business: false, enterprise: true },
  { feature: '專屬客戶經理', icon: '🙋', starter: false, business: false, enterprise: true },
]

const coachFeats = ['30 分鐘個人化 Onboarding', '調教 AI 認識你嘅工作習慣', 'WhatsApp 廣東話技術支援', '辦公時間 WhatsApp 無限次支援']

const faqs = [
  { q: '免費試用期結束後會自動扣款嗎？', a: '唔會！試用期結束前 3 日我哋會提醒你。你需要主動確認續訂先會收費。唔想繼續只需通知我哋，唔會有任何費用。' },
  { q: '可以中途升級方案嗎？', a: '可以！隨時升級，費用按比例計算。WhatsApp 聯絡我哋即可安排。' },
  { q: '付款方式有哪些？', a: '支援信用卡（Visa / MasterCard）、轉數快、銀行轉賬。所有付款透過 Stripe 安全處理。' },
  { q: '如果超出使用量點算？', a: '我哋會提前通知你。Starter 適合個人日常使用，Business 適合 SME 日常業務量。如有特別需求可聯絡我哋調整。' },
  { q: 'Enterprise 方案需要簽合約嗎？', a: 'Enterprise 一般簽 12 個月合約，享有更優惠嘅月費。具體方案可按需調整，WhatsApp 聯絡我哋詳談。' },
  { q: 'AI 教練服務可以同任何方案一起用嗎？', a: '可以！AI 教練係獨立增值服務，可以配合任何方案使用。歡迎聯絡我哋查詢詳情。' },
  { q: '有冇學生/非牟利機構優惠？', a: '有！請 WhatsApp 聯絡我哋，提供相關證明文件後可申請特別優惠。' },
  { q: '退款政策係點？', a: '免費試用期內取消完全免費。正式付費後如有任何問題，請喺 7 日內聯絡我哋，我哋會公平處理。' },
]
</script>

<style scoped>
/* ─── Amplifier Section (期望管理) ────────────────────────────── */
.amplifier-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto 2.5rem;
}

.amplifier-card {
  background: rgba(15, 22, 41, 0.8);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 1.25rem;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: border-color 0.2s;
}
.amplifier-card:hover {
  border-color: rgba(139, 92, 246, 0.5);
}
.amplifier-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.amplifier-title {
  font-size: 1.0625rem;
  font-weight: 700;
  color: #E2E8F0;
  margin-bottom: 0.75rem;
}
.amplifier-body {
  font-size: 0.875rem;
  color: #94A3B8;
  line-height: 1.65;
}

/* with vs without comparison */
.ai-compare-wrap {
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  max-width: 860px;
  margin: 0 auto 2.5rem;
}
.ai-compare-box {
  flex: 1;
  border-radius: 1.25rem;
  padding: 1.75rem;
}
.ai-compare-without {
  background: rgba(248, 113, 113, 0.06);
  border: 1px solid rgba(248, 113, 113, 0.2);
}
.ai-compare-with {
  background: rgba(74, 222, 128, 0.06);
  border: 1px solid rgba(74, 222, 128, 0.2);
}
.ai-compare-label {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #E2E8F0;
  margin-bottom: 1rem;
}
.ai-compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}
.ai-compare-list li {
  font-size: 0.875rem;
  color: #94A3B8;
  padding-left: 1rem;
  position: relative;
}
.ai-compare-list li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: #60A5FA;
}
.ai-compare-arrow {
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #60A5FA;
  flex-shrink: 0;
}

/* ROI framing callout */
.roi-framing-callout {
  max-width: 820px;
  margin: 0 auto;
  background: rgba(15, 22, 41, 0.9);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 1.5rem;
  padding: 2rem 2.5rem;
}
.roi-framing-title {
  font-size: 1.0625rem;
  font-weight: 700;
  color: #E2E8F0;
  margin-bottom: 1.25rem;
  text-align: center;
}
.roi-framing-grid {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.roi-framing-item {
  flex: 1;
  border-radius: 1rem;
  padding: 1.25rem;
}
.roi-framing-wrong {
  background: rgba(248, 113, 113, 0.07);
  border: 1px solid rgba(248, 113, 113, 0.2);
}
.roi-framing-right {
  background: rgba(74, 222, 128, 0.07);
  border: 1px solid rgba(74, 222, 128, 0.2);
}
.roi-framing-tag {
  font-size: 0.8125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #E2E8F0;
}
.roi-framing-text {
  font-size: 0.9rem;
  color: #E2E8F0;
  line-height: 1.6;
}
.roi-framing-arrow {
  font-size: 1.75rem;
  color: #60A5FA;
  flex-shrink: 0;
}
.roi-framing-bottom {
  text-align: center;
  font-size: 0.9375rem;
  color: #94A3B8;
  border-top: 1px solid rgba(59, 130, 246, 0.15);
  padding-top: 1rem;
  line-height: 1.6;
}

/* ─── ROI Calculator ────────────────────────────────────────────── */
.roi-calculator-wrap {
  max-width: 980px;
  margin: 0 auto 2.5rem;
}
.roi-calculator-inner {
  background: rgba(15, 22, 41, 0.9);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 1.5rem;
  padding: 2.5rem;
}
.roi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Tools column */
.roi-tools-col {}
.roi-tools-heading {
  font-size: 1rem;
  font-weight: 600;
  color: #E2E8F0;
  margin-bottom: 1.25rem;
}
.roi-tools-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-right: 0.5rem;
}
.roi-tool-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 44px;
}
.roi-tool-item.selected {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}
.roi-tool-left {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}
.roi-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  border: 1.5px solid #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.roi-checkbox.checked {
  border-color: #60A5FA;
  background: rgba(59, 130, 246, 0.2);
}
.roi-checkbox-tick {
  color: #60A5FA;
  font-size: 0.75rem;
  font-weight: 700;
}
.roi-tool-name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #E2E8F0;
}
.roi-tool-desc {
  font-size: 0.75rem;
  color: #64748B;
  margin-top: 0.125rem;
}
.roi-tool-price {
  font-size: 1rem;
  font-weight: 700;
  color: #F87171;
  white-space: nowrap;
  margin-left: 0.5rem;
}

/* Result column */
.roi-result-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.roi-result-current {
  background: rgba(248, 113, 113, 0.06);
  border: 1px solid rgba(248, 113, 113, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}
.roi-result-secrexai {
  background: rgba(74, 222, 128, 0.07);
  border: 1px solid rgba(74, 222, 128, 0.25);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}
.roi-result-savings {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.08));
  border: 1px solid rgba(59, 130, 246, 0.35);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}
.roi-result-empty {
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}
.roi-result-label {
  font-size: 0.8125rem;
  color: #94A3B8;
  margin-bottom: 0.5rem;
}
.roi-result-amount {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1;
}
.roi-result-sub {
  font-size: 0.8125rem;
  color: #64748B;
  margin-top: 0.5rem;
}
.roi-amount-red   { color: #F87171; }
.roi-amount-green { color: #4ADE80; }
.roi-amount-blue  { color: #60A5FA; }
.roi-arrow-row {
  text-align: center;
}
.roi-arrow-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #60A5FA;
  font-size: 1.5rem;
  font-weight: 300;
}
.roi-savings-pct {
  font-size: 1rem;
  font-weight: 600;
  color: #4ADE80;
  margin-top: 0.5rem;
}
.roi-savings-year {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
}

/* ROI Summary (11 tools grid) */
.roi-summary-wrap {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}
.roi-summary-intro {
  font-size: 0.875rem;
  color: #64748B;
  margin-bottom: 1.25rem;
}
.roi-summary-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.roi-summary-card {
  background: rgba(15, 22, 41, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.875rem;
  padding: 0.875rem 0.5rem;
  text-align: center;
}
.roi-summary-icon {
  font-size: 1.5rem;
  margin-bottom: 0.375rem;
}
.roi-summary-name {
  font-size: 0.6875rem;
  color: #94A3B8;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}
.roi-summary-price {
  font-size: 0.875rem;
  font-weight: 700;
  color: #F87171;
}
.roi-summary-footer {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(139, 92, 246, 0.06));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 1.25rem;
  padding: 1.5rem 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.roi-summary-total-box {
  text-align: center;
}
.roi-summary-label {
  font-size: 0.75rem;
  color: #64748B;
  margin-bottom: 0.25rem;
}
.roi-summary-total-price {
  font-size: 1.375rem;
  font-weight: 800;
}
.roi-summary-vs {
  font-size: 2rem;
  color: #60A5FA;
}
.roi-summary-pct-box {
  text-align: center;
  padding-left: 1.5rem;
  border-left: 1px solid rgba(59, 130, 246, 0.2);
}

/* ─── Coach card ──────────────────────────────────────────────── */
.coach-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

/* ─── Comparison Table ─────────────────────────────────────────── */
.comparison-table-wrap {
  max-width: 900px;
  margin: 0 auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.comparison-table-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  /* ensures horizontal scroll on mobile */
}
.comparison-table-container {
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  /* overflow hidden removed so scroll works */
  min-width: 600px;
}

/* ─── CTA buttons ──────────────────────────────────────────────── */
.cta-btn-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.cta-btn-group .btn {
  min-height: 44px;
}

/* ─── Mobile-first responsive ──────────────────────────────────── */
.mobile-br { display: none; }

@media (max-width: 1023px) {
  /* ROI summary: 6→4 on tablet */
  .roi-summary-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  /* Amplifier: 3→2 on tablet */
  .amplifier-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .mobile-br { display: block; }

  /* ── Plan cards: 1 col on mobile ── */
  /* ── Amplifier cards: 1 col on mobile ── */
  .amplifier-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  /* ── AI compare: stack on mobile ── */
  .ai-compare-wrap {
    flex-direction: column;
    gap: 1rem;
  }
  .ai-compare-arrow {
    justify-content: center;
    font-size: 1.5rem;
  }

  /* ── ROI framing: stack grid ── */
  .roi-framing-callout {
    padding: 1.5rem 1.25rem;
  }
  .roi-framing-grid {
    flex-direction: column;
  }
  .roi-framing-arrow {
    align-self: center;
  }

  /* ── ROI Calculator: 1 col ── */
  .roi-calculator-inner {
    padding: 1.5rem 1.25rem;
  }
  .roi-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .roi-result-col {
    /* result panel drops below tool list */
  }
  .roi-result-amount {
    font-size: 2.25rem;
  }
  .roi-tool-item {
    min-height: 52px;
  }

  /* ── ROI Summary grid: 2 col on mobile ── */
  .roi-summary-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .roi-summary-footer {
    padding: 1.25rem 1rem;
    gap: 1rem;
  }
  .roi-summary-total-price {
    font-size: 1.125rem;
  }
  .roi-summary-pct-box {
    padding-left: 0;
    border-left: none;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(59, 130, 246, 0.2);
    width: 100%;
  }

  /* ── Comparison table: horizontal scroll on mobile ── */
  .comparison-table-wrap {
    /* allow scroll */
  }
  .comparison-table-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .comparison-table {
    min-width: 560px;
  }

  /* ── Coach card: 1 col ── */
  .coach-grid {
    grid-template-columns: 1fr;
  }

  /* ── CTA buttons: stack ── */
  .cta-btn-group {
    flex-direction: column;
    align-items: center;
  }
  .cta-btn-group .btn {
    width: 100%;
    max-width: 360px;
    min-height: 52px;
    font-size: 1rem;
  }

  /* ── General spacing ── */
  .section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

/* ── FAQ question left padding fix ── */
.faq-question {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}
</style>
