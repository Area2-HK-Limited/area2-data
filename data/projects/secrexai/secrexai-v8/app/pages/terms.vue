<template>
  <div class="legal-page">
    <h1>服務條款</h1>
    <p class="updated">最後更新：2026-04-06</p>

    <div class="content">
      <section>
        <h2>1. 服務提供者</h2>
        <p>SecrexAI 服務由 Area2 (HK) Limited（香港註冊公司）提供，地址：香港九龍旺角彌敦道 610 號荷李活商業中心 18 樓 1805-06 室。</p>
      </section>
      <section>
        <h2>2. 服務範圍</h2>
        <p>SecrexAI 是一個 WhatsApp AI 秘書服務，涵蓋文本對話、語音轉文字、圖片生成、排程提醒等功能。服務以「現狀」提供，本公司將盡力確保服務穩定運行，惟不保證服務完全無間斷。</p>
      </section>
      <section>
        <h2>3. 免費試用</h2>
        <p>首批登記用戶享有 14 日免費體驗。免費試用期屆滿後，如閣下選擇不續訂，服務將自動停止，不會自動扣取任何費用。</p>
      </section>
      <section>
        <h2>4. 訂閱與付款</h2>
        <p>訂閱費用按月收取，所有費用以港幣計算。閣下辦理取消訂閱後，服務將於當前計費周期結束後終止。</p>
      </section>
      <section>
        <h2>5. 用戶責任</h2>
        <p>用戶不得使用 SecrexAI 從事任何非法活動、濫用系統資源或嘗試對系統進行逆向工程。閣下須妥善保管本身的 WhatsApp 帳號，因帳號遭未授權使用而產生的任何損失，本公司概不負責。</p>
      </section>
      <section>
        <h2>6. 知識產權</h2>
        <p>SecrexAI 品牌、界面設計及技術架構均屬 Area2 (HK) Limited 所有。AI 為用戶生成的內容，用戶享有相應使用權。</p>
      </section>
      <section>
        <h2>7. 服務變更與終止</h2>
        <p>Area2 (HK) Limited 保留修改、暫停或終止服務的權利。如有重大變更，本公司將提前 14 天透過 WhatsApp 或電郵通知用戶。</p>
      </section>
      <section>
        <h2>8. 第三方 AI 服務</h2>
        <p>SecrexAI 底層調用第三方 AI 模型服務（如 OpenAI、Anthropic、Google 等），服務質素受第三方因素影響。本公司不對第三方服務的表現作出任何保證。</p>
      </section>
      <section>
        <h2>9. 責任限制</h2>
        <p>Area2 (HK) Limited 不對因使用 SecrexAI 而產生的任何直接或間接損失承擔責任，包括但不限於業務損失、數據遺失、利潤損失等。AI 回應內容僅供參考，不構成任何專業建議（包括法律、財務、醫療等範疇）。</p>
      </section>
      <section>
        <h2>10. 適用法律</h2>
        <p>本服務條款受香港特別行政區法律管轄，任何爭議均由香港法院管轄。</p>
      </section>
      <section>
        <h2>11. 年齡限制</h2>
        <p>用戶須年滿 18 歲，或在法定監護人同意下方可使用本服務。</p>
      </section>
      <section>
        <h2>12. 安全與合規</h2>
        <p>SecrexAI 重視用戶資料安全，已採取以下措施：</p>
        <ul>
          <li>資料儲存：用戶對話記錄儲存於 Tencent Cloud 亞太數據中心，享有 ISO 27001、SOC 2 Type 2、CSA STAR 認證。</li>
          <li>個人資料合規：嚴格遵守香港《個人資料（私隱）條例》（PDPO），可簽署 Data Processing Agreement（DPA）。</li>
          <li>AI 模型安全（按計劃）：Business 計劃使用 GitHub Copilot，具備 ISO 27001、SOC 2 認證；Starter 計劃使用 Minimax，目前尚未獲得相關認證。</li>
        </ul>
        <p>詳情請參閱我們的 <a href="/security" style="color: #60A5FA;">《資訊安全》</a>頁面。</p>
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
