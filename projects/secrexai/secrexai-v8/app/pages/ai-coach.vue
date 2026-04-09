<template>
  <div class="ai-coach-page">
    <header class="hero">
      <span class="badge">可選增值服務</span>
      <h1>AI 教練服務</h1>
      <p>真人技術團隊，WhatsApp 廣東話支援<br>HK$1,500/月，幫你快速發揮 SecrexAI 價值</p>
    </header>

    <section class="value-prop">
      <h2>你係咪遇到呢啲情況？</h2>
      <div class="pain-grid">
        <div class="pain">🤷 唔知點開始，試咗幾次就放棄</div>
        <div class="pain">📱 用幾日就冇打開過，嘥咗錢</div>
        <div class="pain">⚙️ 有啲功能用到，但仲有好多未發掘</div>
        <div class="pain">💬 有問題想問，但網上資料幫唔到你</div>
      </div>
    </section>

    <section class="included">
      <h2>AI 教練包含啲咩？</h2>
      <div class="features">
        <div class="feature">
          <span class="icon">📱</span>
          <h3>30 分鐘個人化 Onboarding</h3>
          <p>新用戶專屬，一對一 WhatsApp 廣東話，幫你設定目標、調教 AI 認識你工作習慣</p>
        </div>
        <div class="feature">
          <span class="icon">⚡</span>
          <h3>辦公時間 WhatsApp 無限次支援</h3>
          <p>工作日早上 9 點至下午 6 點，有問題即時 WhatsApp 查詢，唔使等 email</p>
        </div>
        <div class="feature">
          <span class="icon">💡</span>
          <h3>個人化使用建議</h3>
          <p>根據你嘅工作流程，建議點樣善用 SecrexAI 提升效率</p>
        </div>
        <div class="feature">
          <span class="icon">📊</span>
          <h3>每月使用報告</h3>
          <p>分析你嘅使用情況，識別未善用功能，提供優化建議</p>
        </div>
      </div>
    </section>

    <section class="pricing-section">
      <h2>AI 教練收費</h2>
      <div class="price-card">
        <div class="price">HK$1,500<span>/月</span></div>
        <p class="desc">可隨時終止，唔使綁約</p>
        <a href="/contact" class="btn-primary">聯絡我們報名</a>
        <p class="note">或先體驗 14 日免費試用 → <a href="/subscribe">立即登記</a></p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ai-coach-page {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 4rem 2rem;
}
.hero {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}
.badge {
  display: inline-block;
  background: var(--purple);
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 1rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}
.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
}
section {
  max-width: 900px;
  margin: 0 auto 4rem;
}
h2 {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
}
.pain-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.pain {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
}
.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.feature {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
}
.feature .icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}
.feature h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.price-card {
  background: var(--bg-card);
  border: 2px solid var(--blue);
  border-radius: 1.5rem;
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}
.price {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.price span {
  font-size: 1.5rem;
  font-weight: 400;
}
.desc {
  color: var(--text-secondary);
  margin: 0.5rem 0 2rem;
}
.btn-primary {
  display: inline-block;
  background: var(--gradient-cta);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
}
.note {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}
.note a {
  color: var(--blue-bright);
}
@media (max-width: 768px) {
  .pain-grid, .features {
    grid-template-columns: 1fr;
  }
}
</style>
