<template>
  <div class="pricing-plans">
    <!-- Billing Cycle Toggle (3 options) -->
    <div v-if="showToggle" class="billing-toggle-wrap">
      <button
        class="billing-toggle"
        :class="{ active: billingCycle === 'monthly' }"
        @click="billingCycle = 'monthly'"
      >
        月費
      </button>
      <button
        class="billing-toggle"
        :class="{ active: billingCycle === 'semi' }"
        @click="billingCycle = 'semi'"
      >
        半年
        <span class="toggle-badge">慳 8%</span>
      </button>
      <button
        class="billing-toggle"
        :class="{ active: billingCycle === 'annual' }"
        @click="billingCycle = 'annual'"
      >
        年費
        <span class="toggle-badge">慳 2 個月</span>
      </button>
    </div>

    <!-- Plans Grid -->
    <div class="plans-grid">
      <div
        v-for="plan in displayPlans"
        :key="plan.name"
        class="pricing-card"
        :class="{ featured: plan.featured }"
      >
        <div v-if="plan.featured" class="featured-ring"></div>
        <div class="pricing-card-inner">
          <div class="plan-tag">{{ plan.tag }}</div>
          <h3 class="plan-name">{{ plan.name }}</h3>
          <p class="plan-desc">{{ plan.desc }}</p>

          <!-- Price display -->
          <div class="plan-price-wrap">
            <template v-if="plan.monthlyPrice">
              <!-- Monthly: show original price -->
              <template v-if="billingCycle === 'monthly'">
                <div class="plan-price">
                  <span class="price-currency">HK$</span>
                  <span class="price-amount">{{ plan.monthlyPrice }}</span>
                </div>
                <div class="price-period">/月</div>
              </template>
              <!-- Semi-annual: show discounted price with strikethrough -->
              <template v-else-if="billingCycle === 'semi'">
                <div class="plan-price">
                  <span class="price-currency">HK$</span>
                  <span class="price-amount">{{ Math.round(plan.monthlyPrice * SEMI_DISCOUNT) }}</span>
                </div>
                <div class="price-period">/月 avg</div>
                <div class="price-original-wrap">
                  <span class="price-original">原價 HK${{ plan.monthlyPrice }}/月</span>
                </div>
                <div class="price-annual-note">半年 HK${{ Math.round(plan.monthlyPrice * SEMI_DISCOUNT * 6) }}，慳 HK${{ Math.round(plan.monthlyPrice * 6 - plan.monthlyPrice * SEMI_DISCOUNT * 6) }}</div>
              </template>
              <!-- Annual: show discounted price with strikethrough -->
              <template v-else>
                <div class="plan-price">
                  <span class="price-currency">HK$</span>
                  <span class="price-amount">{{ Math.round(plan.monthlyPrice * ANNUAL_DISCOUNT / 12) }}</span>
                </div>
                <div class="price-period">/月 avg</div>
                <div class="price-original-wrap">
                  <span class="price-original">原價 HK${{ plan.monthlyPrice }}/月</span>
                </div>
                <div class="price-annual-note">年費 HK${{ plan.monthlyPrice * ANNUAL_DISCOUNT }}，送 2 個月</div>
                <div v-if="plan.featured" class="savings-badge">
                  年費慳 HK${{ Math.round(plan.monthlyPrice * (12 - ANNUAL_DISCOUNT)) }}
                </div>
              </template>
            </template>
            <template v-else>
              <div class="plan-price custom-price">{{ plan.customPrice || '聯絡我們' }}</div>
            </template>
          </div>

          <!-- Features -->
          <ul class="plan-features">
            <li v-for="f in plan.features" :key="f">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ f }}
            </li>
          </ul>

          <!-- CTA -->
          <NuxtLink
            :to="plan.ctaLink"
            class="btn w-full plan-cta-btn"
            :class="plan.featured ? 'btn-primary' : 'btn-outline'"
            :target="plan.cta.external ? '_blank' : '_self'"
            :rel="plan.cta.external ? 'noopener' : undefined"
          >
            {{ plan.cta.text }}
          </NuxtLink>

          <p v-if="plan.note" class="plan-note">{{ plan.note }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  showToggle: {
    type: Boolean,
    default: false,
  },
  initialMode: {
    type: String,
    default: 'monthly', // 'monthly' | 'semi' | 'annual'
  },
})

const billingCycle = ref(props.initialMode === 'annual' ? 'annual' : props.initialMode === 'semi' ? 'semi' : 'monthly')
const SEMI_DISCOUNT = 0.92  // 8% off per month for semi-annual (6 months)
const ANNUAL_DISCOUNT = 10  // pay 10 months get 12

const plans = [
  {
    tag: 'STARTER',
    name: 'Starter 個人版',
    desc: '個人 / SOHO 用戶',
    monthlyPrice: 298,
    featured: false,
    features: [
      '基本用量',
      '60+ 技能完整使用',
      '廣東話原生對話',
      '永久記憶系統',
      '排程提醒功能',
      'WhatsApp 原生使用',
      '基本技術支援',
    ],
    cta: { text: '開始 14 日免費試用', link: '/subscribe?plan=starter' },
    note: '14 日免費試用',
  },
  {
    tag: '最受歡迎',
    name: 'Business 商務版',
    desc: '香港 SME 首選',
    monthlyPrice: 688,
    featured: true,
    features: [
      'Starter 所有功能',
      '5倍商業用量',
      'ISO 27001 / SOC 2 數據安全認證',
      'SecrexAI 加入 WhatsApp 群組',
      '優先技術支援',
    ],
    cta: { text: '開始 14 日免費試用', link: '/subscribe?plan=business' },
    note: '14 日免費試用',
  },
  {
    tag: 'Enterprise',
    name: 'Enterprise 企業版',
    desc: '大型企業按需定制',
    monthlyPrice: null,
    customPrice: '度身訂造',
    featured: false,
    features: [
      'Business 所有功能',
      '無限成員使用',
      '自訂 AI 個性設定',
      '專屬客戶經理',
      '企業級 SLA 保證',
      '定制開發支援',
      '優先新功能體驗',
    ],
    cta: { text: 'WhatsApp 查詢', link: 'https://wa.me/85296456787', external: true },
    note: '聯絡我哋獲取報價',
  },
]

// Compute dynamic CTA links with cycle param
const displayPlans = computed(() =>
  plans.map(plan => ({
    ...plan,
    ctaLink: plan.cta.external
      ? plan.cta.link
      : `${plan.cta.link}&cycle=${billingCycle.value}`,
  }))
)
</script>

<style scoped>
/* Billing toggle */
.billing-toggle-wrap {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.billing-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.15);
  background: transparent;
  color: #64748B;
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.billing-toggle.active {
  background: rgba(99,102,241,0.15);
  border-color: rgba(99,102,241,0.5);
  color: #a5b4fc;
}

.toggle-badge {
  background: #4ADE80;
  color: #052e16;
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
}

/* Plans grid */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .plans-grid {
    grid-template-columns: 1fr;
  }
  .billing-toggle-wrap {
    gap: 0.375rem;
  }
  .billing-toggle {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

/* Pricing card */
.pricing-card {
  position: relative;
  background: var(--bg-card, rgba(255,255,255,0.04));
  border: 1px solid var(--border, rgba(255,255,255,0.08));
  border-radius: 1.25rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.pricing-card.featured {
  border-color: rgba(99,102,241,0.6);
  background: linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.03) 100%);
}

.featured-ring {
  display: none;
}

.pricing-card-inner {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.plan-tag {
  display: inline-block;
  background: transparent;
  color: #64748B;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.15);
  margin-bottom: 0.75rem;
}

.pricing-card.featured .plan-tag {
  background: transparent;
  color: #a5b4fc;
  border-color: rgba(99,102,241,0.5);
  border-radius: 4px;
}

.plan-name {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.plan-desc {
  font-size: 0.875rem;
  color: #64748B;
  margin-bottom: 1.25rem;
}

/* Price */
.plan-price-wrap {
  margin-bottom: 1.5rem;
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 0.125rem;
  margin-bottom: 0.25rem;
}

.price-currency {
  font-size: 1rem;
  font-weight: 700;
  color: #94A3B8;
}

.price-amount {
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #94A3B8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.price-period {
  font-size: 0.8125rem;
  color: #64748B;
}

.price-original-wrap {
  margin-top: 0.25rem;
}

.price-original {
  font-size: 0.8125rem;
  color: #64748B;
  text-decoration: line-through;
}

.price-annual-note {
  font-size: 0.75rem;
  color: #64748B;
  margin-top: 0.25rem;
}

.custom-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}

.savings-badge {
  display: inline-block;
  background: rgba(34,197,94,0.15);
  color: #4ADE80;
  border: 1px solid rgba(34,197,94,0.3);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-top: 0.5rem;
}

/* Features */
.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  flex: 1;
}

.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #94A3B8;
  padding: 0.375rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-features li svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.plan-cta-btn {
  margin-top: auto;
  justify-content: center;
}

.plan-note {
  text-align: center;
  font-size: 0.75rem;
  color: #64748B;
  margin-top: 0.75rem;
}
</style>
