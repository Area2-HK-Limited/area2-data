<template>
  <div class="integrations-page">
    <!-- SEO Head -->
    <Head>
      <Title>平台整合 | SecrexAI — 連接 80+ 熱門商業工具</Title>
      <Meta name="description" content="SecrexAI 整合超過 80 個熱門商業平台，包括 CRM、項目管理、電郵、社交媒體、電商、AI 工具、POS 系統、香港本地品牌等。一個平台管理所有業務工作流程。" />
      <Meta name="keywords" content="SecrexAI 整合, SecrexAI integration, WhatsApp AI, CRM 整合, Salesforce, HubSpot, Slack, Gmail, Shopify, 香港 AI 工具, POS 系統, Lark 飛書" />
      <Meta property="og:title" content="平台整合 | SecrexAI — 連接 80+ 熱門商業工具" />
      <Meta property="og:description" content="SecrexAI 整合超過 80 個熱門商業平台，一個 AI 秘書管理所有業務。" />
    </Head>

    <!-- Hero Section -->
    <section class="integrations-hero">
      <div class="hero-bg-grid"></div>
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
      <div class="container">
        <div class="hero-badge">🔗 80+ 平台整合</div>
        <h1 class="hero-title">無縫連接你嘅工作流程</h1>
        <p class="hero-subtitle">SecrexAI 整合 80+ 熱門平台，一個平台管理所有業務</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">80+</span>
            <span class="stat-label">整合平台</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">15</span>
            <span class="stat-label">平台類別</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">5 分鐘</span>
            <span class="stat-label">快速接入</span>
          </div>
        </div>
        <p class="hero-note">
          <span class="hero-note-icon">💡</span>
          只要目標平台有提供 API，SecrexAI 就能接入——包括公司內部系統、私人 CRM 或自建平台都可以。
          你的 AI 秘書唔再只係幫你回覆訊息，係真正幫你升 Level，提升成個工作流程嘅效率。
        </p>
      </div>
    </section>

    <!-- Search Bar -->
    <section class="search-section">
      <div class="container">
        <div class="search-wrap">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            placeholder="搜尋平台名稱...例如：Salesforce、Shopify、Lark"
          />
          <button v-if="searchQuery" class="search-clear" @click="searchQuery = ''">✕</button>
        </div>
      </div>
    </section>

    <!-- Category Tabs -->
    <section class="category-nav-section">
      <div class="container">
        <div class="tab-scroll-wrap">
          <div class="tabs category-tabs">
            <button
              v-for="cat in categories"
              :key="cat.id"
              type="button"
              class="tab-btn"
              :class="{ active: activeTab === cat.id }"
              @click="activeTab = cat.id"
            >
              <span class="tab-icon">{{ cat.icon }}</span>
              {{ cat.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- All Categories / Search Results -->
    <section class="integrations-body">
      <div class="container">
        <!-- Search Results View -->
        <div v-if="searchQuery.trim() && searchResults">
          <div class="search-results-header">
            <h2 class="search-results-title">
              搜尋結果：{{ searchResults.length }} 個平台
            </h2>
            <button class="btn btn-outline btn-sm" @click="searchQuery = ''">清除搜尋</button>
          </div>
          <div class="platform-grid">
            <div v-for="platform in searchResults" :key="platform.name" class="platform-card">
              <div class="platform-logo-wrap" :class="{ 'has-logo': !!platform.logo, 'logo-wrap-dark': platform.darkLogo }">
                <img
                  v-if="platform.logo"
                  :src="platform.logo"
                  :alt="platform.name + ' logo'"
                  class="platform-logo"
                  :class="{ 'logo-dark': platform.darkLogo }"
                  loading="lazy"
                  @error="(e) => { e.target.style.display='none'; e.target.parentElement.classList.remove('has-logo'); e.target.nextElementSibling.style.display='flex' }"
                />
                <div class="platform-logo-fallback" :style="{ background: platform.color || '#6366f1' }">
                  <span>{{ platform.emoji || platform.name.charAt(0) }}</span>
                </div>
              </div>
              <div class="platform-name">{{ platform.name }}</div>
              <div class="platform-desc">{{ platform.desc }}</div>
            </div>
          </div>
          <div v-if="searchResults.length === 0" class="search-empty">
            <p>找不到符合「{{ searchQuery }}」的平台</p>
            <p class="search-empty-hint">嘗試其他關鍵詞，或聯絡我們查詢特定平台整合</p>
          </div>
        </div>

        <!-- Normal Category View — tab panel -->
        <div v-else>
          <div v-for="cat in [activeCategory]" :key="activeCategory.id" class="category-block">
            <div class="category-header">
              <span class="category-icon">{{ cat.icon }}</span>
              <div>
                <h2 class="category-title">{{ cat.name }}</h2>
                <p class="category-desc">{{ cat.desc }}</p>
              </div>
            </div>
            <div class="platform-grid">
              <div v-for="platform in cat.platforms" :key="platform.name" class="platform-card">
                <div class="platform-logo-wrap" :class="{ 'has-logo': !!platform.logo, 'logo-wrap-dark': platform.darkLogo }">
                <img
                  v-if="platform.logo"
                  :src="platform.logo"
                  :alt="platform.name + ' logo'"
                  class="platform-logo"
                  :class="{ 'logo-dark': platform.darkLogo }"
                  loading="lazy"
                  @error="(e) => { e.target.style.display='none'; e.target.parentElement.classList.remove('has-logo'); e.target.nextElementSibling.style.display='flex' }"
                />
                <div class="platform-logo-fallback" :style="{ background: platform.color || '#6366f1' }">
                  <span>{{ platform.emoji || platform.name.charAt(0) }}</span>
                </div>
              </div>
              <div class="platform-name">{{ platform.name }}</div>
              <div class="platform-desc">{{ platform.desc }}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="integrations-cta">
      <div class="cta-orb"></div>
      <div class="container">
        <h2>準備好接入你嘅平台？</h2>
        <p>立即免費試用 SecrexAI，幾分鐘內完成整合，開始自動化你嘅業務流程。</p>
        <NuxtLink to="/subscribe" class="btn btn-primary btn-lg">免費開始試用</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const activeTab = ref('crm')
const activeCategory = computed(() => categories.find(c => c.id === activeTab.value) || categories[0])
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return null
  const q = searchQuery.value.toLowerCase()
  const results = []
  categories.forEach(cat => {
    cat.platforms.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)) {
        results.push({ ...p, category: cat.name })
      }
    })
  })
  return results
})

const categories = [
  {
    id: 'crm',
    icon: '🤝',
    name: 'CRM 與銷售管理',
    desc: '整合主流 CRM 系統，自動同步客戶資料、跟進記錄及銷售流程',
    platforms: [
      { name: 'Salesforce', logo: '/img/integrations/salesforce.svg', desc: '自動同步客戶資料及銷售流程', color: '#00A1E0' },
      { name: 'HubSpot', logo: '/img/integrations/hubspot.svg', desc: '整合 CRM 聯絡人及交易管道', color: '#FF7A59' },
      { name: 'Zoho CRM', logo: '/img/integrations/zoho-crm.svg', desc: '同步潛在客戶及業務數據', color: '#E42527' },
      { name: 'Pipedrive', logo: '/img/integrations/pipedrive.svg', desc: '自動更新銷售管道及提醒', color: '#2E4057' },
      { name: 'Microsoft Dynamics 365', logo: '/img/integrations/microsoft-dynamics.svg', desc: '企業級 CRM 數據整合', color: '#0078D4', darkLogo: true },
    ]
  },
  {
    id: 'project',
    icon: '📋',
    name: '項目管理與任務',
    desc: '將 WhatsApp 訊息自動轉化為任務，與主流項目管理工具無縫同步',
    platforms: [
      { name: 'Monday.com', logo: '/img/integrations/monday.svg', desc: '自動建立及更新工作板任務', color: '#FF3D57' },
      { name: 'Asana', logo: '/img/integrations/asana.svg', desc: '從對話中自動提取任務', color: '#FC636B' },
      { name: 'ClickUp', logo: '/img/integrations/clickup.svg', desc: '同步任務、評論及截止日期', color: '#7B68EE' },
      { name: 'Notion', logo: '/img/integrations/notion.png', desc: '將資訊自動整理入 Notion 頁面', color: '#000000', darkLogo: true },
      { name: 'Trello', logo: '/img/integrations/trello.svg', desc: '自動建立 Trello 卡片及看板', color: '#0052CC' },
      { name: 'Jira', logo: '/img/integrations/jira.svg', desc: '自動建立及追蹤 Jira Issue', color: '#0052CC' },
      { name: 'Linear', logo: '/img/integrations/linear.svg', desc: '同步工程任務及優先順序', color: '#5E6AD2' },
    ]
  },
  {
    id: 'email',
    icon: '📧',
    name: '電郵與電子營銷',
    desc: '自動撰寫、排程及追蹤電郵，與主流電郵平台雙向同步',
    platforms: [
      { name: 'Gmail', logo: '/img/integrations/gmail.svg', desc: '自動回覆及撰寫電郵草稿', color: '#EA4335' },
      { name: 'Outlook', logo: '/img/integrations/outlook.svg', desc: '整合 Microsoft 365 郵件及日曆', color: '#0078D4' },
      { name: 'Mailchimp', logo: '/img/integrations/mailchimp.svg', desc: '觸發電郵 Campaign 及追蹤', color: '#FFE01B' },
      { name: 'SendGrid', logo: '/img/integrations/sendgrid.svg', desc: '自動化交易型電郵發送', color: '#1A82E2' },
      { name: 'Klaviyo', logo: '/img/integrations/klaviyo.svg', desc: '電商電郵自動化及分眾', color: '#1C1C1C', emoji: 'KL' },
      { name: 'ActiveCampaign', logo: '/img/integrations/activecampaign.svg', desc: '客戶旅程自動化及 CRM', color: '#356AE6', emoji: 'AC' },
      { name: 'E-POST', logo: null, desc: '本地 EDM + SMS 營銷平台，AI Agent CLI 接入', color: '#FF6B00', emoji: 'EP' },
    ]
  },
  {
    id: 'calendar',
    icon: '📅',
    name: '日曆與排程',
    desc: '自動安排會議、提醒約會，讓 AI 秘書幫你管理時間',
    platforms: [
      { name: 'Google Calendar', logo: '/img/integrations/google-calendar.svg', desc: '自動安排及提醒日曆事件', color: '#4285F4' },
      { name: 'Outlook Calendar', logo: '/img/integrations/outlook.svg', desc: '整合 Microsoft 365 日曆排程', color: '#0078D4' },
      { name: 'Calendly', logo: '/img/integrations/calendly.svg', desc: '自動處理會議預約請求', color: '#006BFF', emoji: 'CL' },
    ]
  },
  {
    id: 'accounting',
    icon: '💰',
    name: '發票與財務',
    desc: '自動生成發票、追蹤付款，讓財務流程全自動化',
    platforms: [
      { name: 'Invoice Ninja', logo: '/img/integrations/invoice-ninja.svg', desc: '自動建立及發送發票', color: '#1E88E5', emoji: 'IN' },
      { name: 'Xero', logo: '/img/integrations/xero.svg', desc: '同步財務數據及發票記錄', color: '#13B5EA' },
      { name: 'QuickBooks', logo: '/img/integrations/quickbooks.svg', desc: '整合帳目及財務報表', color: '#2CA01C', emoji: 'QB' },
      { name: 'Wave', logo: '/img/integrations/wave.svg', desc: '免費財務管理整合', color: '#00B0B9', emoji: 'WV' },
      { name: 'FreshBooks', logo: '/img/integrations/freshbooks.svg', desc: '時間追蹤及客戶發票', color: '#1DB368', emoji: 'FB' },
    ]
  },
  {
    id: 'hk-local',
    icon: '🇭🇰',
    name: '香港品牌',
    desc: '香港本地企業軟件，專為香港營商環境設計',
    platforms: [
      { name: 'Info-Tech', logo: null, desc: '本地會計+HRM+薪酬，ISO 27001 認證', color: '#0066CC', emoji: 'IT' },
      { name: 'Odoo', logo: null, desc: '全球熱門開源 ERP，CRM/庫存/項目一體', color: '#714B67', emoji: 'OD' },
      { name: 'OperativeAI', logo: null, desc: '香港一站式 ERP，會計+HR 月費方案', color: '#0066FF', emoji: 'OA' },
      { name: 'ABSS (MYOB)', logo: null, desc: '傳統本地會計品牌，中文介面穩定可靠', color: '#00A651', emoji: 'AB' },
      { name: 'Sage 50', logo: null, desc: '中小企會計，多幣種支援適合貿易公司', color: '#33CC33', emoji: 'SG' },
    ]
  },
  {
    id: 'chat',
    icon: '💬',
    name: '通訊與團隊協作',
    desc: '將 WhatsApp 指令自動同步至團隊溝通工具，保持全團隊對齊',
    platforms: [
      { name: 'Slack', logo: '/img/integrations/slack.svg', desc: '自動發送通知及頻道訊息', color: '#4A154B' },
      { name: 'Microsoft Teams', logo: '/img/integrations/teams.svg', desc: '整合 Teams 頻道及會議', color: '#5059C9' },
      { name: 'Discord', logo: '/img/integrations/discord.svg', desc: '自動發佈訊息至 Discord 伺服器', color: '#5865F2' },
      { name: 'Telegram', logo: '/img/integrations/telegram.svg', desc: '整合 Telegram Bot 及頻道', color: '#229ED9' },
      { name: 'Lark（飛書）', logo: null, desc: '字節跳動企業通訊，日曆、文檔、會議一體化', color: '#4254D8', emoji: 'LK' },
    ]
  },
  {
    id: 'storage',
    icon: '☁️',
    name: '雲端儲存與檔案',
    desc: '自動儲存、整理及分享檔案，與主流雲端平台無縫同步',
    platforms: [
      { name: 'Google Drive', logo: '/img/integrations/google-drive.svg', desc: '自動儲存及分享 Google Drive 檔案', color: '#4285F4' },
      { name: 'OneDrive', logo: '/img/integrations/onedrive.svg', desc: '整合 Microsoft OneDrive 文件', color: '#0078D4' },
      { name: 'Dropbox', logo: '/img/integrations/dropbox.svg', desc: '自動備份及共享 Dropbox 資料夾', color: '#0061FF' },
    ]
  },
  {
    id: 'social',
    icon: '📱',
    name: '社交媒體管理',
    desc: '整合主流社交平台，自動排程發帖、回覆評論及分析數據',
    platforms: [
      { name: 'Facebook Business', logo: '/img/integrations/facebook.svg', desc: '管理 Facebook 專頁及廣告', color: '#1877F2' },
      { name: 'Instagram', logo: '/img/integrations/instagram.svg', desc: '自動排程 Instagram 帖子', color: '#E4405F' },
      { name: 'LinkedIn', logo: '/img/integrations/linkedin.svg', desc: '發布 LinkedIn 專業內容', color: '#0A66C2' },
      { name: 'X (Twitter)', logo: '/img/integrations/x-twitter.svg', desc: '排程及自動回覆 X/Twitter', color: '#000000', darkLogo: true },
      { name: 'TikTok', logo: '/img/integrations/tiktok.svg', desc: '管理 TikTok 內容及數據', color: '#010101', darkLogo: true },
    ]
  },
  {
    id: 'ai',
    icon: '🤖',
    name: 'AI 與生產力工具',
    desc: '與主流 AI 工具整合，進一步提升自動化能力及工作效率',
    platforms: [
      { name: 'ChatGPT', logo: '/img/integrations/chatgpt.svg', desc: '調用 GPT 模型處理複雜任務', color: '#10A37F' },
      { name: 'Claude', logo: '/img/integrations/claude.svg', desc: '整合 Anthropic Claude AI 能力', color: '#D4A76A' },
      { name: 'Perplexity', logo: '/img/integrations/perplexity.svg', desc: 'AI 搜尋及即時資訊查詢', color: '#20B2AA', emoji: 'PP', darkLogo: true },
      { name: 'Otter.ai', logo: null, desc: '自動會議錄音及記錄', color: '#1A73E8', emoji: 'OT' },
      { name: 'ElevenLabs', logo: '/img/integrations/elevenlabs.svg', desc: 'AI 語音合成及播報', color: '#111111', emoji: 'EL', darkLogo: true },
      { name: 'Notion AI', logo: '/img/integrations/notion.png', desc: 'Notion AI 輔助寫作整合', color: '#000000', darkLogo: true },
      { name: 'Gemini', logo: '/img/integrations/gemini.svg', desc: '整合 Google Gemini AI 能力', color: '#4285F4' },
      { name: 'Dify', logo: null, desc: '開源 LLM 應用平台，視覺化 AI workflow', color: '#2563EB', emoji: 'DF' },
    ]
  },
  {
    id: 'ecommerce',
    icon: '🛍️',
    name: '電子商務',
    desc: '整合電商平台，自動處理訂單、客服及支付通知',
    platforms: [
      { name: 'Shopify', logo: '/img/integrations/shopify.svg', desc: '訂單通知及客服自動化', color: '#96BF48' },
      { name: 'WooCommerce', logo: '/img/integrations/woocommerce.svg', desc: 'WordPress 電商整合管理', color: '#7F54B3' },
      { name: 'Stripe', logo: '/img/integrations/stripe.svg', desc: '支付成功及失敗自動通知', color: '#635BFF' },
      { name: 'PayPal', logo: '/img/integrations/paypal.svg', desc: 'PayPal 付款確認及提醒', color: '#003087' },
      { name: 'FPS / PayMe', logo: null, desc: '香港本地支付通知整合', color: '#FF0066', emoji: '🇭🇰' },
    ]
  },
  {
    id: 'seo',
    icon: '📊',
    name: 'SEO 與數據分析',
    desc: '整合分析工具，自動匯報網站表現及行銷數據',
    platforms: [
      { name: 'Google Analytics', logo: '/img/integrations/google-analytics.svg', desc: '自動匯報網站流量及轉換數據', color: '#F9AB00' },
      { name: 'Google Search Console', logo: '/img/integrations/google-search-console.svg', desc: '監測搜尋排名及索引狀態', color: '#458CF5' },
      { name: 'SEMrush', logo: '/img/integrations/semrush.svg', desc: 'SEO 關鍵詞追蹤及競品分析', color: '#FF642D', emoji: 'SM' },
      { name: 'Ahrefs', logo: '/img/integrations/ahrefs.svg', desc: '反向連結及 SEO 健康檢查', color: '#FF8C00', emoji: 'AH' },
      { name: 'Meta Business Suite', logo: '/img/integrations/facebook.svg', desc: 'Facebook/Instagram 廣告數據', color: '#1877F2' },
    ]
  },
  {
    id: 'messaging',
    icon: '💌',
    name: 'WhatsApp 與通訊',
    desc: '整合主流即時通訊平台，統一管理多渠道客戶溝通',
    platforms: [
      { name: 'WhatsApp Business', logo: '/img/integrations/whatsapp.svg', desc: 'WhatsApp Business API 整合', color: '#25D366' },
      { name: 'WeChat', logo: '/img/integrations/wechat.svg', desc: '整合微信公眾號及客服', color: '#07C160' },
    ]
  },
  {
    id: 'pos',
    icon: '🛒',
    name: 'POS 系統',
    desc: '零售及餐飲 POS，一站式庫存、訂單、支付管理',
    platforms: [
      { name: 'Lightspeed POS', logo: null, desc: '零售及餐飲多功能 POS，支援電商一體化', color: '#1E3A5F', emoji: 'LS' },
      { name: 'Square', logo: null, desc: '簡單易用 POS，庫存、會員、報告一網打盡', color: '#000000', emoji: 'SQ' },
      { name: 'Stripe Terminal', logo: '/img/integrations/stripe.svg', desc: '全球支付一體化終端，支援線下收款', color: '#635BFF', emoji: 'ST' },
      { name: 'Clover', logo: null, desc: '美國熱門 POS，App Market 100+ 整合', color: '#1A73E8', emoji: 'CL' },
      { name: 'Toast POS', logo: null, desc: '餐飲業專用 POS，支援外賣、排隊管理', color: '#FF6F20', emoji: 'TP' },
      { name: 'Vend POS', logo: null, desc: '雲端零售 POS，跨門店庫存即時同步', color: '#00A0E9', emoji: 'VD' },
      { name: 'Sontec POS', logo: null, desc: '香港本地零售 ERP，Shopify 實時同步', color: '#FF4444', emoji: 'SN' },
    ]
  },
  {
    id: 'automation',
    icon: '⚡',
    name: '自動化平台 (iPaaS)',
    desc: '透過自動化中介平台，輕鬆連接數千個應用程式',
    platforms: [
      { name: 'Zapier', logo: '/img/integrations/zapier.svg', desc: '無需編碼連接數千個應用', color: '#FF4A00' },
      { name: 'Make (Integromat)', logo: '/img/integrations/make.svg', desc: '視覺化工作流程自動化', color: '#6D00CC', emoji: 'MK' },
      { name: 'n8n', logo: '/img/integrations/n8n.svg', desc: '無代碼工作流程自動化', color: '#EA4B71', emoji: 'N8' },
    ]
  },
]
</script>

<style scoped>
/* ─── Page Base ───────────────────────────── */
.integrations-page {
  background: #0A0E1A;
  min-height: 100vh;
  color: #e2e8f0;
}

/* ─── Hero ────────────────────────────────── */
.integrations-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0A0E1A 0%, #1A0A2E 50%, #0A1628 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(99,102,241,.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(99,102,241,.06) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,.25) 0%, transparent 70%);
  top: -150px; left: -100px;
}
.hero-orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(168,85,247,.2) 0%, transparent 70%);
  bottom: -100px; right: -50px;
}

.hero-badge {
  display: inline-block;
  background: rgba(99,102,241,.15);
  border: 1px solid rgba(99,102,241,.3);
  color: #a5b4fc;
  padding: 0.375rem 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: .05em;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.7;
}

.hero-stats {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 1rem;
  padding: 1.25rem 2.5rem;
  backdrop-filter: blur(10px);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a5b4fc, #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.8125rem;
  color: #64748b;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,.1);
}

.hero-note {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  max-width: 560px;
  margin: 1.5rem auto 0;
  padding: 0.875rem 1.125rem;
  background: rgba(99,102,241,.08);
  border: 1px solid rgba(99,102,241,.2);
  border-radius: 0.75rem;
  font-size: 0.9375rem;
  color: #c7d2fe;
  line-height: 1.6;
  text-align: left;
}

.hero-note-icon {
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-top: 1px;
}

.hero-note strong {
  color: #a5b4fc;
}

/* ─── Search Bar ──────────────────────────── */
.search-section {
  padding: 1.5rem 0 0;
}

.search-wrap {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #64748B;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.875rem 3rem 0.875rem 3rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.05);
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
}

.search-input::placeholder {
  color: #64748B;
}

.search-input:focus {
  border-color: rgba(99,102,241,0.5);
  background: rgba(255,255,255,0.08);
}

.search-clear {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748B;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
}

.search-clear:hover {
  color: #fff;
}

.search-results-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.search-results-title {
  font-size: 1.5rem;
  font-weight: 800;
}

.search-empty {
  text-align: center;
  padding: 3rem;
  color: #64748B;
}

.search-empty p {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.search-empty-hint {
  font-size: 0.875rem !important;
  color: #475569 !important;
}

/* ─── Category Nav ────────────────────────── */
.category-nav-section {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255,255,255,.06);
}

/* Tab scroll container — hide scrollbar */
.tab-scroll-wrap {
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0;
  margin-bottom: 2rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.tab-scroll-wrap::-webkit-scrollbar { display: none; }

.category-tabs {
  display: flex;
  gap: 0.5rem;
  min-width: max-content;
  justify-content: flex-start;
  padding: 0.25rem 0.125rem;
}

.category-tabs .tab-btn {
  position: relative;
  z-index: 3;
  pointer-events: auto;
  user-select: none;
  -webkit-tap-highlight-color: rgba(96,165,250,0.2);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  color: #94a3b8;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all .2s ease;
  cursor: pointer;
}

.category-tabs .tab-btn:hover {
  background: rgba(59,130,246,.2);
  border-color: rgba(59,130,246,.4);
  color: #93c5fd;
}

.category-tabs .tab-btn.active {
  background: rgba(59,130,246,.25);
  border-color: rgba(59,130,246,.5);
  color: #93c5fd;
}

.tab-icon { font-size: 1em; }

/* ─── Integrations Body ───────────────────── */
.integrations-body {
  padding: 4rem 1.5rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

/* ─── Category Block ──────────────────────── */
.category-block {
  margin-bottom: 4rem;
  scroll-margin-top: 120px;
}

.category-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-icon {
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.category-title {
  font-size: 1.625rem;
  font-weight: 700;
  margin: 0 0 0.375rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.category-desc {
  color: #64748b;
  font-size: 0.9375rem;
  margin: 0;
  line-height: 1.6;
}

/* ─── Platform Grid ───────────────────────── */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

/* ─── Platform Card ───────────────────────── */
.platform-card {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.07);
  border-radius: 1rem;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  text-align: center;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
  cursor: default;
}

.platform-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(99,102,241,.2);
  border-color: rgba(99,102,241,.3);
  background: rgba(99,102,241,.07);
}

.platform-logo-wrap {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.platform-logo-wrap.has-logo {
  width: auto;
  min-width: 64px;
  max-width: 108px;
  height: 56px;
  padding: 6px 10px;
  background: #1e293b;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.18);
}

/* Dark logos (black/dark color) need white background to be visible */
.platform-logo-wrap.has-logo.logo-wrap-dark {
  background: #ffffff;
}

.platform-logo {
  max-width: 88px;
  max-height: 42px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

/* Keep dark/black logos in original color when shown on white logo badge */
.platform-logo.logo-dark {
  filter: none;
}

.platform-logo-fallback {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 800;
  color: #fff;
}

.platform-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #e2e8f0;
  line-height: 1.3;
}

.platform-desc {
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.5;
}

/* ─── CTA Section ─────────────────────────── */
.integrations-cta {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0F1A3A 0%, #1A0A2E 100%);
  border-top: 1px solid rgba(255,255,255,.06);
  padding: 6rem 1.5rem;
  text-align: center;
}

.cta-orb {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99,102,241,.2) 0%, transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  filter: blur(40px);
}

.integrations-cta h2 {
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.integrations-cta p {
  font-size: 1.0625rem;
  color: #94a3b8;
  max-width: 520px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.btn-lg {
  font-size: 1.0625rem;
  padding: 0.875rem 2.5rem;
}

/* ─── Responsive ──────────────────────────── */
@media (max-width: 768px) {
  .integrations-hero { padding: 6rem 1.25rem 3.5rem; }
  .hero-stats { gap: 1.25rem; padding: 1rem 1.5rem; flex-wrap: wrap; }
  .stat-divider { display: none; }
  .platform-grid { grid-template-columns: repeat(2, 1fr); }
  .category-nav-section { top: 56px; }
  .category-header { flex-direction: column; }
}

@media (min-width: 640px) {
  .platform-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
}

@media (min-width: 1024px) {
  .platform-grid { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
}
</style>
