<template>
  <div class="legal-page">
    <h1>私隱聲明</h1>
    <p class="updated">最後更新：2026-03-24</p>

    <div class="content">
      <section>
        <h2>1. 收集的資料</h2>
        <p>登記時，本公司收集閣下的姓名、公司名稱、公司電郵地址及 WhatsApp 號碼。<br>使用服務期間，本公司儲存閣下的對話記錄及使用偏好，以提供個人化服務。</p>
      </section>
      <section>
        <h2>2. 資料用途</h2>
        <p>所收集資料僅用於：提供 SecrexAI 服務、改善用戶體驗，以及發送與服務相關的通訊。</p>
      </section>
      <section>
        <h2>3. 資料不會用於以下用途</h2>
        <p>❌ 訓練 AI 模型<br>❌ 投放廣告<br>❌ 出售予第三方</p>
      </section>
      <section>
        <h2>4. 第三方數據處理（重要披露）</h2>
        <p>AI 推理功能由第三方 AI 模型服務商提供（如 OpenAI、Anthropic、Google）。閣下輸入的內容將經由第三方伺服器處理，具體數據處理政策以各服務商條款為準。</p>
      </section>
      <section>
        <h2>5. 資料儲存</h2>
        <p>用戶對話記錄及個人資料儲存於亞太區（騰訊雲亞太數據中心），符合香港個人資料私隱條例（PDPO）。</p>
      </section>
      <section>
        <h2>6. 資料保留</h2>
        <p>帳戶有效期間，本公司保留所有相關數據；帳戶刪除後，本公司將於 30 天內永久刪除所有個人數據。</p>
      </section>
      <section>
        <h2>7. 閣下的權利（PDPO）</h2>
        <p>根據香港個人資料私隱條例，閣下有權：查閱本公司持有的個人資料、更正不準確資料、要求刪除資料，以及反對直接促銷。<br>如欲行使上述權利，請聯絡：privacy@area2.com 或 WhatsApp +852 9565 1459</p>
      </section>
      <section>
        <h2>8. Cookie 政策</h2>
        <p>本網站使用分析性 Cookie（Google Analytics）以改善用戶體驗。閣下可透過瀏覽器設定管理 Cookie 偏好。</p>
      </section>
      <section>
        <h2>9. 政策更新</h2>
        <p>本公司可能不時更新本私隱政策。如有重大變更，將透過 WhatsApp 或電郵通知閣下。</p>
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
</style>
