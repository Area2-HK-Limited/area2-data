<template>
  <div>
    <Head>
      <title>資訊安全 | SecrexAI — 對話記錄存亞太區，PDPO 合規</title>
      <meta name="description" content="SecrexAI 資訊安全承諾：用戶對話記錄儲存亞太區，唔訓練模型，PDPO 合規。Tencent Cloud ISO 27001 / SOC 2 認證。" />
    </Head>

    <!-- Hero -->
    <section class="sec-hero section">
      <div class="container text-center">
        <div class="badge badge-green mb-2" style="display: inline-flex;">🔒 資訊安全</div>
        <h1 style="margin-bottom: 1rem;">你的業務資料<br><span class="gradient-text">只屬於你</span></h1>
        <p style="font-size: 1.125rem; max-width: 580px; margin: 0 auto 2rem; color: #94A3B8;">
          我哋明白香港中小企最擔心嘅係：資料去咗邊？安唔安全？<br>SecrexAI 喺設計上從根本回應呢個問題。
        </p>
        <!-- Trust Indicators -->
        <div class="trust-indicators">
          <div class="trust-badge">
            <span class="trust-icon">🔒</span>
            <span>256-bit 加密</span>
          </div>
          <div class="trust-badge">
            <span class="trust-icon">📋</span>
            <span>PDPO 合規</span>
          </div>
          <div class="trust-badge">
            <span class="trust-icon">🌏</span>
            <span>亞太區儲存</span>
          </div>
          <div class="trust-badge">
            <span class="trust-icon">🏆</span>
            <span>ISO 27001</span>
          </div>
          <div class="trust-badge">
            <span class="trust-icon">🚫</span>
            <span>不訓練 AI</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Four Concerns — new two-column layout -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>SME 四大安全顧慮，逐一解答</h2>
        </div>
        <div class="concerns-layout">
          <!-- Left: Q&A cards stack -->
          <div class="concerns-qa-stack">
            <div v-for="(item, i) in concerns" :key="i" class="concern-card card">
              <div class="concern-q">
                <span class="concern-num">Q{{ i + 1 }}</span>
                <h3>{{ item.question }}</h3>
              </div>
              <div class="concern-a">
                <div class="concern-a-header">
                  <span style="font-size: 1.25rem;">{{ item.icon }}</span>
                  <span class="concern-a-title">{{ item.answer }}</span>
                </div>
                <p>{{ item.detail }}</p>
              </div>
            </div>
          </div>
          <!-- Right: Trust Score panel -->
          <div class="trust-score-panel card">
            <div class="trust-score-header">
              <div class="trust-score-circle">
                <div class="trust-score-num">9.8</div>
                <div class="trust-score-label">信任評分</div>
              </div>
              <p style="font-size: 0.875rem; color: #94A3B8; margin-top: 0.75rem;">SecrexAI 安全綜合評分</p>
            </div>
            <div class="trust-score-bars">
              <div v-for="bar in trustBars" :key="bar.label" class="trust-bar-row">
                <div class="trust-bar-label">{{ bar.label }}</div>
                <div class="trust-bar-track">
                  <div class="trust-bar-fill" :style="{ width: bar.score + '%' }"></div>
                </div>
                <div class="trust-bar-score">{{ bar.score }}%</div>
              </div>
            </div>
            <div class="trust-score-certs">
              <div class="cert-chip" v-for="c in certChips" :key="c">{{ c }}</div>
            </div>
            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="https://wa.me/85296456787" target="_blank" rel="noopener" class="btn btn-primary" style="font-size: 0.875rem; padding: 0.625rem 1.25rem;">
                索取安全合規文件
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Center — with data flow visualization -->
    <section class="section">
      <div class="container">
        <div class="dc-layout">
          <div>
            <div class="badge badge-blue mb-2" style="display: inline-flex;">🏢 數據存儲架構</div>
            <h2 style="margin-bottom: 1.25rem;">Tencent Cloud 亞太數據中心</h2>
            <p style="margin-bottom: 1.5rem; color: #94A3B8;">用戶對話記錄及記憶數據儲存於 Tencent Cloud 亞太數據中心，Tier 3+ 企業級基礎設施，享有 ISO 27001、SOC 2 Type 2、CSA STAR 認證。</p>
            <ul class="cert-list">
              <li v-for="cert in certs" :key="cert">
                <span class="cert-check">✓</span> {{ cert }}
              </li>
            </ul>
          </div>
          <!-- Data flow diagram -->
          <div class="data-flow-diagram">
            <div class="df-node df-node-user">
              <div class="df-icon">📱</div>
              <div class="df-title">您的裝置</div>
              <div class="df-sub">WhatsApp</div>
            </div>
            <div class="df-arrow">
              <div class="df-arrow-line"></div>
              <div class="df-arrow-label">🔒 端到端加密</div>
            </div>
            <div class="df-node df-node-dc">
              <div class="df-icon">🗄️</div>
              <div class="df-title">亞太數據中心</div>
              <div class="df-sub">SecrexAI 部署</div>
              <div class="df-badge-row">
                <span class="df-cert-badge">ISO 27001</span>
                <span class="df-cert-badge">SOC 2 Type 2</span>
                <span class="df-cert-badge">CSA STAR</span>
              </div>
            </div>
            <div class="df-arrow">
              <div class="df-arrow-line"></div>
              <div class="df-arrow-label">🔒 加密傳輸</div>
            </div>
            <div class="df-node df-node-dc">
              <div class="df-icon">🤖</div>
              <div class="df-title">AI Model API</div>
              <div class="df-sub" style="color: #22C55E; font-size: 0.75rem;">數據不會用作訓練用途</div>
              <div class="df-badge-row">
                <span class="df-cert-badge">SOC 2 Type 1</span>
                <span class="df-cert-badge">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Badges — 2x2 grid with certified labels -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>安全認證一覽</h2>
          <p style="color: #94A3B8; margin-top: 0.5rem;">SecrexAI 採用 Tencent Cloud 企業基礎設施，所有認證均由第三方機構頒發</p>
        </div>
        <div class="sec-badges-grid">
          <div v-for="badge in secBadges" :key="badge.name" class="sec-badge-card card">
            <div class="sec-badge-top">
              <img :src="badge.img" :alt="badge.name" class="sec-badge-img" />
            </div>
            <h3 class="sec-badge-name">{{ badge.name }}</h3>
            <p class="sec-badge-desc">{{ badge.desc }}</p>
            <div class="sec-badge-issuer">頒發機構：{{ badge.issuer }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="background: linear-gradient(135deg, #1E1B4B 0%, #0F1629 100%); text-align: center;">
      <div class="container">
        <h2 style="margin-bottom: 1rem;">仲有問題？想了解更多？</h2>
        <p style="color: #94A3B8; margin-bottom: 2rem;">我哋樂意解答你嘅安全合規疑問</p>
        <a href="https://wa.me/85296456787" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">WhatsApp 詢問安全合規問題</a>
      </div>
    </section>
  </div>
</template>

<script setup>
const concerns = [
  {
    question: '對話數據會唔會被 AI 訓練？',
    answer: '絕對唔會。',
    detail: '我哋明確承諾：用戶對話唔會用於訓練任何 AI 模型。AI 推理功能由第三方 AI 服務商提供，佢哋嘅使用條款亦有明確限制。',
    icon: '🧠',
  },
  {
    question: '數據存喺邊？',
    answer: '亞太區。',
    detail: '用戶對話記錄儲存於 Tencent Cloud 亞太數據中心。唔做廣告、唔訓練模型，嚴格遵守 PDPO 合規要求。',
    icon: '🌏',
  },
  {
    question: '員工對話會唔會洩漏？',
    answer: '帳號獨立，完全隔離。',
    detail: '每個用戶帳號完全獨立，唔會互相存取。端到端加密傳輸，企業級防火牆保護。',
    icon: '🔐',
  },
  {
    question: '香港法律管唔管到？',
    answer: 'PDPO 合規，可簽 DPA。',
    detail: 'SecrexAI 由香港公司運營，完全受香港個人資料（私隱）條例（PDPO）監管。我哋可簽署 Data Processing Agreement（DPA）。',
    icon: '⚖️',
  },
]

const trustBars = [
  { label: '數據加密', score: 99 },
  { label: '訪問控制', score: 98 },
  { label: '合規認證', score: 97 },
  { label: '資料隔離', score: 99 },
  { label: 'PDPO 合規', score: 100 },
]

const certChips = ['ISO 27001', 'SOC 2 Type 2', 'CSA STAR', 'PDPO']

const certs = [
  'ISO 27001 資訊安全管理認證',
  'SOC 2 Type 2 安全審計報告',
  'CSA STAR 雲端安全認證',
  'PDPO 香港個人資料（私隱）條例合規',
  '企業級防火牆保護',
  '數據嚴格存於亞太區，不作其他用途',
]

const secBadges = [
  { img: '/certs/iso27001.png', name: 'ISO 27001', desc: '資訊安全管理國際標準，覆蓋數據保護、存取控制、風險管理全流程。', issuer: 'BSI / TÜV', year: '2024' },
  { img: '/certs/aicpa.png', name: 'SOC 2 Type 2', desc: '服務組織安全控制獨立審計，每年由第三方會計師行覆核報告。', issuer: 'AICPA', year: '2024' },
  { img: '/certs/csa-star.png', name: 'CSA STAR', desc: '雲端安全聯盟威脅評估，專為雲端服務制定的安全框架。', issuer: 'CSA', year: '2024' },
  { img: '/certs/pdpd.png', name: 'PDPO 合規', desc: '香港個人資料（私隱）條例，受私隱專員公署監管。', issuer: '香港私隱專員公署', year: '2026' },
]
</script>

<style scoped>
/* ── Hero Trust Indicators ── */
.sec-hero {
  background: linear-gradient(135deg, #0A0E1A 0%, #0F1629 100%);
  padding-top: 4rem;
}
.trust-indicators {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}
.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 2rem;
  padding: 0.4rem 0.875rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #4ADE80;
}
.trust-icon {
  font-size: 1rem;
}

/* ── Four Concerns — two-column layout ── */
.concerns-layout {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;
  align-items: start;
}
.concerns-qa-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.concern-card {
  padding: 1.25rem 1.5rem;
}
.concern-q {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.concern-num {
  background: rgba(59, 130, 246, 0.15);
  color: #60A5FA;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.concern-q h3 {
  font-size: 0.9375rem;
  margin: 0;
  line-height: 1.4;
}
.concern-a {
  padding: 0.875rem 1rem;
  background: rgba(34, 197, 94, 0.08);
  border-left: 3px solid #22C55E;
  border-radius: 0 0.5rem 0.5rem 0;
}
.concern-a-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.375rem;
}
.concern-a-title {
  font-weight: 700;
  font-size: 0.9375rem;
  color: #4ADE80;
}
.concern-a p {
  font-size: 0.8125rem;
  color: #94A3B8;
  margin: 0;
  padding-left: 1.75rem;
}

/* ── Trust Score Panel ── */
.trust-score-panel {
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(15, 22, 41, 0.9), rgba(30, 27, 75, 0.6));
  border: 1px solid rgba(59, 130, 246, 0.2);
  position: sticky;
  top: 5rem;
}
.trust-score-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.trust-score-circle {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: conic-gradient(#22C55E 0% 98%, rgba(255,255,255,0.05) 98% 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem;
  position: relative;
}
.trust-score-circle::before {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: #0A0E1A;
}
.trust-score-num {
  font-size: 2rem;
  font-weight: 800;
  color: #4ADE80;
  position: relative;
  z-index: 1;
  line-height: 1;
}
.trust-score-label {
  font-size: 0.625rem;
  color: #94A3B8;
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.trust-score-bars {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.trust-bar-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
}
.trust-bar-label {
  width: 80px;
  flex-shrink: 0;
  color: #94A3B8;
}
.trust-bar-track {
  flex: 1;
  height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 3px;
  overflow: hidden;
}
.trust-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #22C55E, #4ADE80);
  border-radius: 3px;
}
.trust-bar-score {
  width: 36px;
  text-align: right;
  color: #4ADE80;
  font-weight: 600;
  font-size: 0.75rem;
}
.trust-score-certs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.cert-chip {
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: #60A5FA;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.625rem;
  border-radius: 1rem;
}

/* ── Data Center Layout ── */
.dc-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
}
.cert-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.cert-list li {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.9375rem;
  color: #94A3B8;
}
.cert-check {
  color: #4ADE80;
  font-weight: 700;
  flex-shrink: 0;
}

/* ── Data Flow Diagram ── */
.data-flow-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(15, 22, 41, 0.8), rgba(9, 9, 11, 0.9));
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 1rem;
}
.df-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
  width: 100%;
  max-width: 200px;
}
.df-node-user {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
}
.df-node-api {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.25);
}
.df-node-dc {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.25);
}
.df-icon {
  font-size: 2rem;
  margin-bottom: 0.25rem;
}
.df-title {
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.125rem;
}
.df-sub {
  font-size: 0.75rem;
  color: #64748B;
}
.df-badge-row {
  display: flex;
  gap: 0.375rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.df-cert-badge {
  background: rgba(34, 197, 94, 0.15);
  color: #4ADE80;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.15rem 0.4rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(34, 197, 94, 0.3);
}
.df-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0;
}
.df-arrow-line {
  width: 2px;
  height: 28px;
  background: linear-gradient(180deg, rgba(59, 130, 246, 0.4), rgba(34, 197, 94, 0.4));
  position: relative;
}
.df-arrow-line::after {
  content: '▼';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.625rem;
  color: #4ADE80;
}
.df-arrow-label {
  font-size: 0.6875rem;
  color: #94A3B8;
  background: rgba(255,255,255,0.04);
  padding: 0.2rem 0.625rem;
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.08);
  margin-top: 0.75rem;
}

/* ── Security Badges 2x2 grid ── */
.sec-badges-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
}
.sec-badge-card {
  padding: 1.5rem;
  border: 1px solid rgba(59, 130, 246, 0.15);
  transition: border-color 0.2s;
}
.sec-badge-card:hover {
  border-color: rgba(59, 130, 246, 0.35);
}
.sec-badge-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.sec-badge-icon {
  font-size: 2.25rem;
}
.sec-badge-img {
  height: 48px;
  width: auto;
  object-fit: contain;
  background: #ffffff;
  padding: 6px 10px;
  border-radius: 6px;
}
.sec-badge-certified {
  font-size: 0.6875rem;
  font-weight: 700;
  color: #4ADE80;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.25);
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
}
.sec-badge-name {
  font-size: 1.0625rem;
  margin-bottom: 0.375rem;
  color: #E2E8F0;
}
.sec-badge-desc {
  font-size: 0.8125rem;
  color: #64748B;
  margin-bottom: 0.75rem;
  line-height: 1.5;
}
.sec-badge-issuer {
  font-size: 0.75rem;
  color: #475569;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 0.625rem;
}

/* ── Mobile Responsive ── */
@media (max-width: 768px) {
  .concerns-layout {
    grid-template-columns: 1fr;
  }
  .trust-score-panel {
    position: static;
  }
  .dc-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .sec-badges-grid {
    grid-template-columns: 1fr;
  }
  .trust-indicators {
    gap: 0.5rem;
  }
  .data-flow-diagram {
    padding: 1.5rem 1rem;
  }
}
</style>
