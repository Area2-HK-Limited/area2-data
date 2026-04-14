<template>
  <div>
    <Head>
      <title>Early Access 優先登記 | SecrexAI — 首 20 名免費試用 1 個月</title>
      <meta name="description" content="搶先登記 SecrexAI Early Access，首 20 名享免費體驗 1 個月。公司 Email 登記，PDPO 合規。" />
    </Head>

    <!-- Hero -->
    <section class="section" style="background: linear-gradient(135deg, #0A0E1A 0%, #0F1629 50%, #1A0A2E 100%); position: relative; overflow: hidden; padding-top: 4rem;">
      <div class="glow-orb glow-blue" style="width:500px;height:500px;top:-100px;left:-200px;opacity:0.15;"></div>
      <div class="glow-orb glow-purple" style="width:400px;height:400px;top:50px;right:-100px;opacity:0.12;"></div>
      <div class="container" style="max-width: 800px; text-align: center; position: relative; z-index: 1;">
        <div class="badge badge-orange mb-2" style="display: inline-flex;">🔥 名額有限 · 20名</div>
        <h1 style="margin-bottom: 1.25rem; margin-top: 0.75rem;">
          免費試用 SecrexAI<br>
          <span class="gradient-text">你嘅 WhatsApp AI 秘書</span>
        </h1>
        <p style="font-size: 1.125rem; color: #94A3B8; margin-bottom: 2rem;">
          首 20 名登記用戶，<strong style="color: #F0F4FF;">免費體驗 1 個月</strong><br>
          隨時取消 · 零風險
        </p>

        <!-- Progress bar -->
        <div style="max-width: 480px; margin: 0 auto 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-size: 0.875rem; color: #94A3B8;">已登記</span>
            <span style="font-size: 0.875rem; font-weight: 700; color: #F97316;">{{ registered }} / 20 名</span>
          </div>
          <div style="background: rgba(249,115,22,0.15); border-radius: 999px; height: 12px; overflow: hidden; border: 1px solid rgba(249,115,22,0.3); position: relative;">
            <div :style="{ width: Math.min(registered / 20 * 100, 100) + '%', height: '100%', background: 'linear-gradient(90deg, #F97316, #FB923C, #FDBA74)', borderRadius: '999px', transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative', overflow: 'hidden' }">
              <!-- Shimmer effect -->
              <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent); animation: shimmer 2s infinite;"></div>
            </div>
          </div>
          <div style="margin-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
            <span v-if="registered < 20" style="color: #F97316; font-weight: 600; font-size: 0.8125rem;">🔥 仲剩 {{ 20 - registered }} 個名額</span>
            <span v-else style="color: #F97316; font-weight: 600; font-size: 0.8125rem;">名額已滿！你可以加入等候名單</span>
            <span style="color: #64748B; font-size: 0.75rem;">{{ Math.round(registered / 20 * 100) }}%</span>
          </div>
        </div>

        <a href="#register-form" class="btn btn-primary btn-lg" style="margin-bottom: 1.5rem; display: inline-flex; align-items: center; gap: 0.5rem;">
          立即登記
          <FaIcon icon="chevron-down" />
        </a>
      </div>
    </section>

    <!-- Features mini -->
    <section class="section section-alt">
      <div class="container">
        <div class="grid-4" style="gap: 1.25rem; max-width: 900px; margin: 0 auto;">
          <div v-for="f in miniFeatures" :key="f.title" class="card" style="text-align: center; padding: 1.5rem;">
            <div style="font-size: 2.25rem; margin-bottom: 0.75rem;">{{ f.icon }}</div>
            <h3 style="font-size: 0.9375rem; margin-bottom: 0.375rem;">{{ f.title }}</h3>
            <p style="font-size: 0.8125rem; color: #64748B;">{{ f.desc }}</p>
          </div>
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/features" class="btn btn-outline">了解 SecrexAI 全部功能 →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Registration Form -->
    <section id="register-form" class="section" style="background: linear-gradient(135deg, #0F1629 0%, #0A0E1A 100%);">
      <div class="container" style="max-width: 640px;">
        <div class="text-center" style="margin-bottom: 2.5rem;">
          <div class="badge badge-orange mb-2" style="display: inline-flex;">🎯 搶先登記 — 名額有限，額滿即止</div>
          <h2 style="margin-top: 0.75rem;">{{ registered < 20 ? '立即登記使用' : '加入等候名單' }}</h2>
        </div>

        <!-- Canceled notice -->
        <div v-if="stripeStatus === 'canceled'" class="card" style="text-align: center; padding: 3rem; border-color: rgba(251, 191, 36, 0.3);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">😅</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem;">取消咗？</h3>
          <p style="color: #94A3B8; margin-bottom: 1.5rem;">
            放心！你嘅資料已經保存。<br>
            如果改變主意，隨時可以再試。
          </p>
          <button @click="stripeStatus = ''; submitted = false" class="btn btn-primary">
            重新登記
          </button>
        </div>

        <!-- Success Card -->
        <div v-else-if="submitted" class="card" style="text-align: center; padding: 3rem; border-color: rgba(34, 197, 94, 0.3);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem;">
            {{ stripeStatus === 'success' ? '試用已啟動！' : '報名成功！' }}
          </h3>
          <p style="color: #94A3B8; margin-bottom: 1.5rem;">
            {{ stripeStatus === 'success' 
              ? '恭喜！你已成功開始 14 日免費試用。' 
              : '你已成功報名！' }}<br>
            {{ registered < 51 ? '你係第 ' + registerNum + ' 位登記者！' : '你已加入等候名單（第 ' + registerNum + ' 位）。' }}<br>
            預計 1-3 個工作天內，會有專人以 WhatsApp 聯絡你設定 SecrexAI。<br><br>
            請留意你嘅 WhatsApp 訊息 📱
          </p>
          <NuxtLink to="/" class="btn btn-outline">← 了解更多 SecrexAI</NuxtLink>
        </div>

        <form v-else class="card" @submit.prevent="submitForm" style="padding: 2rem; border-color: rgba(59, 130, 246, 0.2);">
          <div class="grid-2" style="gap: 1rem; margin-bottom: 1.25rem;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label">姓名 <span style="color: #F87171;">*</span></label>
              <input v-model="form.name" type="text" class="form-input" placeholder="你嘅名字" required minlength="2" />
              <div v-if="errors.name" class="form-error">{{ errors.name }}</div>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label">WhatsApp 號碼 <span style="color: #F87171;">*</span></label>
              <input v-model="form.whatsapp" type="tel" class="form-input" placeholder="例：91234567" required />
              <div v-if="errors.whatsapp" class="form-error">{{ errors.whatsapp }}</div>
            </div>
          </div>
          <div class="grid-2" style="gap: 1rem; margin-bottom: 1.25rem; margin-top: 1rem;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label">公司 Email <span style="color: #F87171;">*</span></label>
              <input v-model="form.email" type="email" class="form-input" placeholder="name@yourcompany.com" required />
              <div v-if="errors.email" class="form-error">{{ errors.email }}</div>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label">公司名稱 <span style="color: #F87171;">*</span></label>
              <input v-model="form.company" type="text" class="form-input" placeholder="你嘅公司名" required minlength="2" />
              <div v-if="errors.company" class="form-error">{{ errors.company }}</div>
            </div>
          </div>

          <!-- Plan Selection -->
          <div class="form-group" style="margin-top: 1.5rem;">
            <p style="font-size: 0.8125rem; color: #94A3B8; margin-bottom: 0.75rem;">資料用作真人AI教練（技術人員）對你支援及跟進，請填上真實資料</p>
            <label class="form-label">你想試用邊個計劃？<span style="color: #F87171;">*</span></label>

            <!-- Billing Cycle Selector -->
            <div style="margin-top: 0.75rem; margin-bottom: 1rem;">
              <div style="font-size: 0.8125rem; color: #94A3B8; margin-bottom: 0.5rem;">付款週期</div>
              <div class="cycle-toggle-wrap">
                <button
                  type="button"
                  class="cycle-toggle"
                  :class="{ active: billingCycle === 'monthly' }"
                  @click="billingCycle = 'monthly'"
                >月費</button>
                <button
                  type="button"
                  class="cycle-toggle"
                  :class="{ active: billingCycle === 'semi' }"
                  @click="billingCycle = 'semi'"
                >半年 <span class="cycle-badge">慳 8%</span></button>
                <button
                  type="button"
                  class="cycle-toggle"
                  :class="{ active: billingCycle === 'annual' }"
                  @click="billingCycle = 'annual'"
                >年費 <span class="cycle-badge">慳 2 個月</span></button>
              </div>
            </div>

            <div class="plan-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.5rem;">
              <div
                :class="['plan-card', selectedPlan === 'starter' ? 'plan-selected' : '']"
                @click="selectedPlan = 'starter'"
                style="border: 2px solid; border-color: rgba(59,130,246,0.3); border-radius: 0.75rem; padding: 1rem; cursor: pointer; transition: all 0.2s;"
                :style="selectedPlan === 'starter' ? 'border-color: #60A5FA; background: rgba(96,165,250,0.1);' : ''"
              >
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <strong>Starter</strong>
                  <div style="text-align: right;">
                    <span v-if="billingCycle === 'monthly'" style="font-size: 0.875rem; color: #60A5FA;">HK$298/月</span>
                    <span v-else-if="billingCycle === 'semi'" style="font-size: 0.875rem; color: #60A5FA;">
                      HK${{ Math.round(298 * 0.92) }}/月<br>
                      <span style="font-size: 0.75rem; color: #64748B; text-decoration: line-through;">HK$298/月</span>
                    </span>
                    <span v-else style="font-size: 0.875rem; color: #60A5FA;">
                      HK${{ Math.round(298 * 10 / 12) }}/月<br>
                      <span style="font-size: 0.75rem; color: #64748B; text-decoration: line-through;">HK$298/月</span>
                    </span>
                  </div>
                </div>
                <p style="font-size: 0.75rem; color: #94A3B8; margin: 0;">基本用量 · 基本功能</p>
                <p v-if="billingCycle === 'semi'" style="font-size: 0.7rem; color: #4ADE80; margin: 0.35rem 0 0;">半年 HK${{ Math.round(298 * 0.92 * 6) }}（慳 HK${{ Math.round(298 * 6 - 298 * 0.92 * 6) }}）</p>
                <p v-if="billingCycle === 'annual'" style="font-size: 0.7rem; color: #4ADE80; margin: 0.35rem 0 0;">年費 HK${{ 298 * 10 }}（送 2 個月）</p>
              </div>
              <div
                :class="['plan-card', selectedPlan === 'business' ? 'plan-selected' : '']"
                @click="selectedPlan = 'business'"
                style="border: 2px solid; border-color: rgba(251,191,36,0.3); border-radius: 0.75rem; padding: 1rem; cursor: pointer; transition: all 0.2s;"
                :style="selectedPlan === 'business' ? 'border-color: #FBBF24; background: rgba(251,191,36,0.1);' : ''"
              >
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <strong>Business</strong>
                  <div style="text-align: right;">
                    <span v-if="billingCycle === 'monthly'" style="font-size: 0.875rem; color: #FBBF24;">HK$688/月</span>
                    <span v-else-if="billingCycle === 'semi'" style="font-size: 0.875rem; color: #FBBF24;">
                      HK${{ Math.round(688 * 0.92) }}/月<br>
                      <span style="font-size: 0.75rem; color: #64748B; text-decoration: line-through;">HK$688/月</span>
                    </span>
                    <span v-else style="font-size: 0.875rem; color: #FBBF24;">
                      HK${{ Math.round(688 * 10 / 12) }}/月<br>
                      <span style="font-size: 0.75rem; color: #64748B; text-decoration: line-through;">HK$688/月</span>
                    </span>
                  </div>
                </div>
                <p style="font-size: 0.75rem; color: #94A3B8; margin: 0;">5倍商業用量 · 進階功能</p>
                <p v-if="billingCycle === 'semi'" style="font-size: 0.7rem; color: #4ADE80; margin: 0.35rem 0 0;">半年 HK${{ Math.round(688 * 0.92 * 6) }}（慳 HK${{ Math.round(688 * 6 - 688 * 0.92 * 6) }}）</p>
                <p v-if="billingCycle === 'annual'" style="font-size: 0.7rem; color: #4ADE80; margin: 0.35rem 0 0;">年費 HK${{ 688 * 10 }}（送 2 個月）</p>
              </div>
            </div>
          </div>

          <!-- AI Use Cases -->
          <div class="form-group" style="margin-top: 1.5rem;">
            <label class="form-label">你最想 AI 幫你做咩？（可多選）</label>
            <div class="checkbox-grid">
              <label v-for="opt in useCaseOptions" :key="opt" class="checkbox-item">
                <input type="checkbox" :value="opt" v-model="form.useCases" />
                <span>{{ opt }}</span>
              </label>
            </div>
            <div style="margin-top: 0.75rem;">
              <input v-model="form.otherUse" type="text" class="form-input" placeholder="其他（請填寫）" />
            </div>
          </div>

          <!-- Terms -->
          <div class="form-group" style="margin-top: 1.5rem;">
            <label class="form-checkbox" style="align-items: flex-start;">
              <input type="checkbox" v-model="form.agreeTerms" required style="margin-top: 3px;" />
              <span style="font-size: 0.875rem; color: #94A3B8; line-height: 1.5;">
                我已閱讀並同意
                <NuxtLink to="/disclaimer" target="_blank" style="color: #60A5FA;">《免責聲明》</NuxtLink>、
                <NuxtLink to="/terms" target="_blank" style="color: #60A5FA;">《服務條款》</NuxtLink>
                及
                <NuxtLink to="/privacy" target="_blank" style="color: #60A5FA;">《私隱聲明》</NuxtLink>
                <span style="color: #F87171;"> *</span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            class="btn w-full btn-lg"
            :class="form.agreeTerms && !loading ? (registered < 20 ? 'btn-primary' : 'btn-orange') : 'btn-outline'"
            :disabled="!form.agreeTerms || loading"
            style="justify-content: center; font-size: 1rem; margin-top: 1rem;"
          >
            <span v-if="loading">提交中...</span>
            <span v-else-if="registered < 20">🚀 搶先登記・開始免費試用</span>
            <span v-else>📋 加入等候名單・搶先體驗</span>
          </button>

          <p v-if="errors.submit" style="color: #F87171; text-align: center; margin-top: 0.5rem;">{{ errors.submit }}</p>

          <p style="text-align: center; font-size: 0.8125rem; color: #475569; margin-top: 1rem;">
            🔒 你嘅資料只用於 SecrexAI 使用安排同支援，唔會用你嘅數據訓練 AI 模型
          </p>
        </form>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="section section-alt">
      <div class="container text-center" style="max-width: 700px;">
        <h3 style="margin-bottom: 1rem;">由 Hostlink 技術團隊 × Area2 數碼行銷打造</h3>
        <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
          <span v-for="trust in trustBadges" :key="trust" style="font-size: 0.8125rem; color: #4ADE80; display: flex; align-items: center; gap: 0.375rem;">
            <span>✓</span> {{ trust }}
          </span>
        </div>

        <!-- Mini FAQ -->
        <div style="text-align: left;">
          <div v-for="(faq, i) in miniQA" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <div class="faq-question" @click="openFaq = openFaq === i ? -1 : i">
              <span>{{ faq.q }}</span>
              <div class="faq-icon">+</div>
            </div>
            <div class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const registered = ref(0) // fetched from D1, starts at 0
const submitted = ref(false)
const registerNum = computed(() => registered.value) // user's position in queue (matches D1 count)
const loading = ref(false)
const openFaq = ref(-1)

// Billing cycle state: 'monthly' | 'semi' | 'annual'
const billingCycle = ref('monthly')

// Reactive selected plan (separate from form.plan to allow cycle info injection on submit)
const selectedPlan = ref('starter')

async function fetchStats() {
  try {
    const res = await fetch(`${useRuntimeConfig().public.workerUrl}?type=stats`)
    const data = await res.json()
    if (data.success) {
      registered.value = data.count || 7
    }
  } catch (e) {
    console.error('Failed to fetch stats:', e)
  }
}

// Handle Stripe return status
const stripeStatus = ref('') // 'success' | 'canceled' | ''

// Watch for query param changes (handles page return from Stripe)
watch(() => route.query, (query) => {
  if (query.success === 'true') {
    stripeStatus.value = 'success'
    submitted.value = true
    fetchStats() // refresh count after successful trial
  } else if (query.canceled === 'true') {
    stripeStatus.value = 'canceled'
  }
}, { immediate: true })

onMounted(() => {
  fetchStats()
  // Parse URL params directly (more reliable in SSG)
  const urlParams = new URLSearchParams(window.location.search)
  const planParam = urlParams.get('plan')
  const cycleParam = urlParams.get('cycle')
  if (planParam === 'starter' || planParam === 'business') {
    selectedPlan.value = planParam
  }
  if (cycleParam === 'monthly' || cycleParam === 'semi' || cycleParam === 'annual') {
    billingCycle.value = cycleParam
  }
  // Scroll to form if coming from Pricing with a plan selected
  if (planParam || cycleParam) {
    setTimeout(() => {
      const el = document.getElementById('register-form')
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 600)
  }
})

const form = reactive({
  name: '',
  whatsapp: '',
  email: '',
  company: '',
  useCases: [],
  otherUse: '',
  agreeTerms: false,
  plan: 'starter', // will be set to e.g. 'starter_monthly' on submit
})

const errors = reactive({
  name: '', email: '', whatsapp: '', company: '', submit: ''
})

const blockedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', '163.com', 'qq.com', '126.com', 'yahoo.com.hk', 'yahoo.com.tw']

const validate = () => {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.whatsapp = ''
  errors.company = ''
  if (!form.name || form.name.length < 2) { errors.name = '請輸入至少 2 個字的名字'; valid = false }
  if (!form.email) { errors.email = '請輸入 Email'; valid = false }
  else {
    const domain = form.email.split('@')[1]?.toLowerCase()
    if (blockedDomains.includes(domain)) {
      errors.email = '請使用公司 Email 登記（例如 name@yourcompany.com）'
      valid = false
    }
  }
  if (!form.whatsapp || !/^\d{8}$/.test(form.whatsapp.replace(/\s|-/g, ''))) {
    errors.whatsapp = '請輸入有效嘅 8 位香港手機號碼'
    valid = false
  }
  if (!form.company || form.company.length < 2) { errors.company = '請輸入公司名稱'; valid = false }
  return valid
}

const submitForm = async () => {
  if (!validate()) return
  loading.value = true
  try {
    // Compose plan key with cycle info, e.g. 'starter_monthly', 'business_annual'
    const planWithCycle = `${selectedPlan.value}_${billingCycle.value}`

    const res = await fetch(useRuntimeConfig().public.workerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'subscription',
        data: {
          sub_type: 'early-access',
          name: form.name,
          email: form.email,
          phone: form.whatsapp,
          company: form.company,
          use_case: form.useCases.join(', ') + (form.otherUse ? ', ' + form.otherUse : ''),
          plan: selectedPlan.value,
          billingCycle: billingCycle.value,
          planKey: planWithCycle,
        }
      })
    })
    const json = await res.json()
    if (json.success && json.checkoutUrl) {
      // Redirect to Stripe Checkout
      window.location.href = json.checkoutUrl
    } else if (json.success) {
      // Fallback if Stripe fails - show success anyway
      submitted.value = true
      fetchStats() // update registered count via API
    } else {
      errors.submit = json.error || '提交失敗，請稍後再試'
    }
  } catch (e) {
    errors.submit = '網絡錯誤，請稍後再試'
  } finally {
    loading.value = false
  }
}

const useCaseOptions = [
  '文案創作', '排程提醒', '資料搜尋分析', '翻譯（多語言）',
  '會議紀錄 / 語音轉文字', '客戶管理 (CRM)', '社交媒體管理', '圖片生成',
  '自動化工作流程', '報告生成',
]

const miniFeatures = [
  { icon: '💬', title: 'WhatsApp 原生', desc: '唔使轉 App，直接用' },
  { icon: '⚡', title: '60+ 技能整合', desc: '搜尋/文案/排程全包' },
  { icon: '🧠', title: '永久記憶', desc: '越用越識你的習慣' },
  { icon: '⏰', title: '排程 + 自動化', desc: '設定一次，自動執行' },
]

const trustBadges = ['Tencent Cloud ISO 27001', 'PDPO 合規', '唔訓練 AI 模型', '對話記錄存亞太區']

const miniQA = [
  { q: '免費試用係真係免費嗎？', a: '係！試用期完全免費，免費試用。試用期內可隨時取消，唔會強制扣費。' },
  { q: '免費試用之後點算？', a: '試用期結束前 3 日我哋會提醒你。你可以自行決定係咪續訂，唔會強制扣費。' },
  { q: '我嘅 WhatsApp 號碼安全嗎？', a: '你嘅資料只用於 SecrexAI 試用安排，唔做廣告用途，唔訓練 AI 模型，PDPO 合規。' },
  { q: '名額滿咗仲可以登記嗎？', a: '可以！等候名單用戶一樣可以開始 14 日免費試用，只係後續正式開放嘅排隊順序不同。' },
  { q: '幾時可以開始使用？', a: '登記完成後，預計 1-3 個工作天內有專人 WhatsApp 聯絡你設定 SecrexAI。' },
]
</script>

<style scoped>
@media (max-width: 768px) {
  .grid-2[style*="gap: 1rem"] {
    grid-template-columns: 1fr !important;
  }
}

/* Shimmer animation for progress bar */
@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Billing cycle toggle in form */
.cycle-toggle-wrap {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.cycle-toggle {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.15);
  background: transparent;
  color: #64748B;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.cycle-toggle.active {
  background: rgba(99,102,241,0.15);
  border-color: rgba(99,102,241,0.5);
  color: #a5b4fc;
}

.cycle-badge {
  background: #4ADE80;
  color: #052e16;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
}
</style>
