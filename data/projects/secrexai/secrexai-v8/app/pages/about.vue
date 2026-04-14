<template>
  <div class="about-page">
    <header class="hero">
      <h1>關於 SecrexAI</h1>
      <p>Hostlink × Area2 聯乘 — 為香港 SME 打造的 AI 秘書</p>
    </header>

    <section class="brand-story">
      <h2>品牌故事</h2>
      <div class="story-content">
        <div class="story-text">
          <p>每個人心裡都知道，真正高效的人背後，往往有一位默默運作的秘書。</p>
          <p>佢記得你嘅行程、整理你嘅郵件、追蹤你嘅待辦事項。佢唔需要你解釋背景，因為佢已經了解你嘅工作方式。佢永遠在線，從不請假。</p>
          <p>過去，這種秘書只屬於 CEO。</p>
          <p class="highlight">Secrex，讓每個人都擁有自己的專屬秘書。</p>
        </div>
        <div class="story-name">
          <div class="name-badge">
            <div class="name-main">Secrex</div>
            <div class="name-formula">= Secretary × Executive</div>
            <div class="name-tagline">Your work, handled.</div>
          </div>
        </div>
      </div>
    </section>

    <section class="partnership">
      <h2>合作夥伴</h2>
      <div class="companies">
        <div class="company-card">
          <h3>Hostlink (HK) Limited</h3>
          <p class="tag">技術夥伴</p>
          <p>企業級 IT 基礎設施、系統開發、資訊安全</p>
          <p class="highlight">Tencent Cloud ISO 27001 / SOC 2 / CSA STAR</p>
        </div>
        <div class="company-card">
          <h3>Area2 (HK) Limited</h3>
          <p class="tag">產品及市場夥伴</p>
          <p>AI 數碼營銷、產品設計，品牌策劃</p>
          <p class="highlight">專業數碼營銷團隊，深耕香港市場</p>
        </div>
      </div>
    </section>

    <section class="values">
      <h2>核心價值</h2>
      <div class="grid-3">
        <div class="value-card">
          <span class="icon">🔒</span>
          <h3>數據安全</h3>
          <p>用戶對話記錄儲存亞太區，唔訓練模型，PDPO 合規</p>
        </div>
        <div class="value-card">
          <span class="icon">🌏</span>
          <h3>本地優先</h3>
          <p>廣東話原生，專為香港中小企設計，真正了解香港商業環境</p>
        </div>
        <div class="value-card">
          <span class="icon">🤝</span>
          <h3>真人支援</h3>
          <p>WhatsApp 廣東話技術支援，有問題即時有人幫你</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>準備體驗 SecrexAI？</h2>
      <a href="/subscribe" class="btn-primary">立即免費試用 →</a>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 4rem 2rem;
}
.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}
.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero p {
  font-size: 1.25rem;
  color: var(--text-secondary);
}
section {
  max-width: 1000px;
  margin: 0 auto 4rem;
}
h2 {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  text-align: center;
}

/* Brand Story */
.brand-story {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 3rem;
  margin-bottom: 4rem;
}
.story-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
}
.story-text p {
  color: #94A3B8;
  line-height: 1.9;
  font-size: 1.0625rem;
  margin-bottom: 1.25rem;
}
.story-text .highlight {
  color: #60A5FA;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 1.5rem;
}
.name-badge {
  background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.08));
  border: 1px solid rgba(59,130,246,0.3);
  border-radius: 1.25rem;
  padding: 2rem 2.5rem;
  text-align: center;
  min-width: 220px;
}
.name-main {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.75rem;
}
.name-formula {
  font-size: 0.875rem;
  color: #94A3B8;
  margin-bottom: 0.5rem;
}
.name-tagline {
  font-size: 1rem;
  font-weight: 600;
  color: #60A5FA;
  font-style: italic;
}

/* Partnership */
.partnership .companies {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.company-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
}
.company-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.tag {
  display: inline-block;
  background: var(--blue);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}
.highlight {
  color: var(--blue-bright);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.value-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}
.icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}
.value-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.cta {
  text-align: center;
  padding: 3rem;
  background: var(--bg-secondary);
  border-radius: 1.5rem;
}
.btn-primary {
  display: inline-block;
  background: var(--gradient-cta);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1.5rem;
}
@media (max-width: 768px) {
  .partnership .companies,
  .grid-3 {
    grid-template-columns: 1fr;
  }
  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .name-badge {
    min-width: unset;
  }
}
</style>
