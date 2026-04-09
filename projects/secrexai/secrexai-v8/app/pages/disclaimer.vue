<template>
  <div class="legal-page">
    <h1>免責聲明</h1>
    <p class="updated">最後更新：2026-04-06</p>

    <div class="content">
      <section>
        <h2>1. 早期體驗版</h2>
        <p>SecrexAI 目前為早期體驗版（Early Access），相關功能可能隨時更改或調整，恕不另行通知。</p>
      </section>
      <section>
        <h2>2. AI 回應僅供參考</h2>
        <p>AI 回應內容僅供參考，不構成任何專業建議。用戶應自行判斷相關內容的準確性，尤其涉及法律、財務、醫療等專業範疇時，應諮詢相關專業人士意見。</p>
      </section>
      <section>
        <h2>3. 資訊準確性</h2>
        <p>AI 可能產生不準確或過時的資訊（即「幻覺」問題）。用戶應自行核實重要資訊，不應完全依賴 AI 回應作出重大決策。</p>
      </section>
      <section>
        <h2>4. 第三方 AI 服務與安全認證</h2>
        <p>SecrexAI 底層調用第三方 AI 模型服務，不同計劃使用的 AI 模型及其安全認證情況如下：</p>
        <ul>
          <li>Starter 計劃：使用 Minimax AI 模型。Minimax 目前無公開的 ISO 27001、SOC 2 或同等國際資訊安全認證標章，但提供安全審計報告供企業客戶在保密協議下查閱。</li>
          <li>Business 計劃：使用 GitHub Copilot AI 模型，已取得 ISO/IEC 27001:2013 認證及 SOC 2 Type 1 合規。</li>
        </ul>
        <p>服務質素受第三方因素影響。本公司不對第三方 AI 服務的表現及安全認證狀態作出任何保證。如對資訊安全有特定要求，請考慮選用 Business 計劃。</p>
      </section>
      <section>
        <h2>5. 間接損失</h2>
        <p>Area2 (HK) Limited 不對因使用 SecrexAI 而產生的任何直接或間接損失承擔責任，包括但不限於業務損失、數據遺失、利潤損失及機會損失等。</p>
      </section>
      <section>
        <h2>6. 服務可用性</h2>
        <p>本公司不保證服務達到 100% 的持續可用性。服務可能因計劃性維護或意外情況而暫時中斷。</p>
      </section>
      <section>
        <h2>7. 免費試用條款</h2>
        <p>免費試用期間，Area2 (HK) Limited 保留隨時修改試用條款的權利，包括但不限於調整試用期限及功能限制等。</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 4rem 2rem;
  max-width: 700px;
  margin: 0 auto;
}
h1 {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}
.updated {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-bottom: 2rem;
}
section {
  margin-bottom: 1.5rem;
}
h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--blue-bright);
  margin-bottom: 0.5rem;
}
p {
  color: var(--text-secondary);
  line-height: 1.7;
}
li {
  color: var(--text-secondary);
  line-height: 1.7;
}
</style>
