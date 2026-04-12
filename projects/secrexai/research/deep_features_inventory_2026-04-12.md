# SecrexAI 深度功能調查報告：Invoice Ninja & Lark — 2026-04-12

*針對 Eric 要求：深入調查需手動開啟的功能、hidden features，這些都可作為賣點*

---

## 一、Invoice Ninja v5 深度功能分析

### 1.1 必須手動開啟的功能（Hidden Gems）

以下功能預設可能關閉，需要管理員在 Settings 中手動啟用：

#### 💰 發票追蹤（Invoice View Tracking）
- **位置**：Settings → Client Portal → 開啟 "Track invoice views"
- **功能**：客戶開啟 PDF 發票時，系統會發 alert
- **價值**：判斷客戶是否已看發票，決定是否需要重發
- **銷售話術**：「你知道客戶幾時睇咗你張 invoice 嗎？」

#### 🔁 自动填充（Fill Products / Update Products）
- **位置**：Settings → Products → 開啟 Fill Products、Update Products
- **Fill Products**：建立 invoice 時自動填充產品描述同價錢
- **Update Products**：Invoice 改了，產品列表自動同步更新
- **價值**：減少重複輸入，適合有多個固定產品/服務嘅 SME
- **銷售話術**：「唔使再複製貼上，產品資料一次輸入，全部 invoice 自動跟新」

#### 📐 自訂欄位（Custom Fields — 最多 4 個）
- **位置**：Settings → Custom Fields
- **可加到**：Client、Invoice、Quote、Product 各最多 4 個
- **類型**：單行文字、日期選擇器、段落、下拉選單
- **價值**：SME 可以自訂發票上需要嘅特別欄位（如 project code、department）
- **銷售話術**：「你的 invoice 可以有你公司的專屬欄位，不需要改 template」

#### 🏷️ 發票附加費用（Surcharge Field）
- **位置**：Invoice 編輯頁面 → Surcharge
- **功能**：可以加自訂名目的附加費（如 "Handling fee", "Fuel surcharge"）
- **可設定**：是否計算稅項、是否免稅
- **價值**：餐飲、物流、行業經常用到

#### 📧 自訂 email 提醒（Custom Reminders）
- **位置**：Settings → Templates → Reminder Emails
- **功能**：可設定第一、第二、第三、無限次提醒
- **時間**：自訂距離到期日幾多天發送
- **價值**：每個客戶可以有不同的催款策略
- **銷售話術**：「唔使記住幾時要催款，系統自動按時發送」

#### 📎 電子簽名（Client E-Signatures）
- **位置**：Settings → Client Portal → 開啟 require signature
- **功能**：客戶可以在 portal 內直接簽署報價單（Quote）
- **價值**：不用列印、簽名、掃描，適合快速確認
- **適用場景**：服務報價、合同確認

#### 👁️ 客戶 Portal（Branded Client Portal）
- **位置**：Settings → Client Portal
- **功能**：客戶有自己的登入頁面，可以查看歷史發票、即時付款
- **Subdomain**：Pro plan 可用自訂 subdomain（yourbrand.invoiceninja.com）
- **價值**：提升品牌形象，客戶無需 email 附件即可付款
- **銷售話術**：「給客戶一個專業的品牌 portal，不再是雜亂的 email 附件」

#### 🔗 嵌入發票到網站（Embed Invoice in Website）
- **位置**：Invoice → Actions → Embed
- **功能**：用 iframe 把 invoice 嵌入到你網站
- **價值**：B2B 公司可以讓客戶在網站直接查看 + 付款
- **適用場景**：網上服務、訂閱制

#### 💳 自動收款（Auto-Bill / Token Billing）
- **位置**：Settings → Online Payments → Token Billing
- **功能**：Stripe 等 gateway 可以儲存 card token，到期自動扣款
- **價值**：月費、訂閱制公司必備，減少追數工作
- **銷售話術**：「每個月自動收款，客戶準時，你不需追數」

#### 🔁 循環發票（Recurring Invoices）
- **位置**：Invoice → Recurring → 設定 schedule
- **功能**：每日/每週/每月/每年自動生成並發送發票
- **價值**：月費服務、租金、固定客戶必備
- **銷售話術**：「月費客戶自動開單，唔使每月人手處理」

---

### 1.2 Invoice Ninja 各 Plan 功能對比（2025-2026）

| 功能 | Free | Pro ($20/mo) | Enterprise ($40/mo) |
|------|------|-------------|-------------------|
| 客戶數量 | 5 個上限 | 無限 | 無限 |
| 發票數量 | 無限 | 無限 | 無限 |
| Custom Fields | ❌ | ✅（最多4個/section） | ✅ |
| 自訂提醒 | ❌ | ✅ | ✅ |
| Client Portal | 基本 | ✅ + subdomain | ✅ + 白標 |
| Recurring Invoices | ❌ | ✅ | ✅ |
| Auto-Bill（Token） | ❌ | ✅ | ✅ |
| E-signatures（DocuNinja） | ❌ | ❌ | ✅ |
| API 訪問 | ❌ | ✅ | ✅ |
| Zapier/Make 整合 | ❌ | ✅ | ✅ |
| PEPPOL 電子發票 | ❌ | ❌ | ✅ |
| 自託管（Self-hosted） | ✅ | ✅ | ✅ |

**Area2 目前應該係 Pro 或 Enterprise plan**（因為已有 API key）

---

### 1.3 最強 Hidden Feature 組合（作為 SecrexAI 賣點）

**Invoice Ninja → SecrexAI 的價值疊加：**

| Invoice Ninja 功能 | + SecrexAI AI 層 | = 殺手級場景 |
|-----------------|-----------------|-------------|
| Invoice View Tracking | + AI 分析客戶行為 | = 「客戶睇咗 3 次張 invoice，但仲未付款，要催嗎？」 |
| Custom Reminders | + AI 判斷最佳催款時機 | = 「今日係最佳發提醒日，根據歷史數據這位客戶習慣星期三付款」 |
| Auto-Bill | + AI 監控失敗原因 | = 「上次自動扣款失敗，AI 已通知客戶並提供其他付款方式」 |
| Recurring Invoice | + AI 自然語言生成 | = 「告訴 SecrexAI '下個月繼續這個 plan'，自動生成 recurring invoice」 |
| Client Portal | + WhatsApp 通知 | = 「張 invoice 已到期，WhatsApp 推送連結，1-click 付款」 |
| E-Signature | + AI 追蹤簽署進度 | = 「報價單發出後，AI 通知並在對方簽署後立即確認」 |

---

## 二、Lark（飛書）深度功能分析

### 2.1 HR 相關功能（需要 Admin 手動配置）

#### 📋 審批範本（Approval Templates — HR 系列）
Lark 有大量預設 HR 範本，需要管理員在 Admin Console 啟用並客製化：

| 範本 | 用途 | SME 價值 |
|------|------|---------|
| **請假申請** | 年假、病假、婚假等 | 最常用，打卡自動同步 |
| **費用報銷** | 差旅、應酬、辦公用品 | 拍照上傳，AI 自動分類 |
| **加班申請** | OT 時數記錄 | 對接薪資計算 |
| **採購審批** | 超過金額需上級批准 | 預算控制 |
| **出差申請** | 機票、酒店、補助 | 一站式審批 |
| **設備申請** | 電腦、显示器等 | IT 管理 |
| **入職審批** | 新人入職審批鏈 | HR + 直屬上司 |
| **離職審批** | 離職手續、工作交接 | HR + IT + Finance |
| **試用期評估** | 試用期結束評估 | 直屬上司 → HR |
| **調崗申請** | 內部調動 | HR + 新舊部門上司 |

#### 🔧 自訂審批表單（Custom Fields in Forms）
- **位置**：Admin Console → Approval → Create/Edit Template → Add Fields
- **可加入的欄位類型**：
  - 單行/多行文字
  - 日期/日期區間
  - 數字（自動計算合計）
  - 下拉選單（如費用類型）
  - 附件（如 receipt 照片）
  - 部門/匯報線（自動帶入申請人資料）
- **價值**：每個 SME 可以完全自訂自己的審批流程
- **AI 機會**：上傳 receipt 照片 → AI 自動填寫金額、類別、日期

#### 🔀 條件分支（Conditional Logic / Branching）
- **位置**：Admin Console → Approval → Add Branch
- **功能**：根據申請內容自動選擇不同的審批路線
- **範例**：
  - 金額 < $500 → 主管直接批准
  - 金額 $500-2000 → 主管 → 經理
  - 金額 > $2000 → 主管 → 經理 → 總監
- **價值**：減少小金額的審批瓶頸，加快流程
- **AI 機會**：SecrexAI 可以自動告知申請人「根據你的金額，審批鏈是這樣的」

#### ⏰ 自動提醒與升級（Auto Reminders & Escalation）
- **位置**：Approval Template → Settings → Reminder Rules
- **功能**：
  - 審批超時自動提醒審批人
  - 可設定 escalation（如 48 小時未批 → 自動升級給上級）
- **價值**：消滅「卡在某人」的審批瓶頸
- **AI 機會**：結合 WhatsApp 提醒，「陳總，記得你有 1 個 expense claim 已經 pending 3 日了」

#### 🔄 抄送與通知規則（CC Rules）
- **位置**：Approval Template → CC Settings
- **功能**：
  - 審批完成後自動通知相關人（如 HR、Finance）
  - 可以 CC 整個部門或特定崗位
- **價值**：確保相關團隊即時知道結果

#### 📊 審批數據同步到 Lark Base
- **位置**：Approval Template → Sync to Base
- **功能**：審批結果自動寫入 Lark Base（spreadsheet）作分析
- **價值**：實時 HR 數據儀表板，例如何部門請假最多、平均審批時間
- **AI 機會**：結合 SecrexAI，「給我過去一個月的請假分析」

---

### 2.2 Lark 的 Less Obvious 強大功能

#### 🤖 Lark Bot 與 Webhook 自動化
- **Bot 類型**：自訂機器人、Webhook 機器人
- **可用場景**：
  - 當有新的審批提交 → Lark Bot 自動通知相關人
  - 當審批被批准 → 自動更新 Lark Base 數據
  - 當有新員工入職 → Bot 自動發送入職指南
- **價值**：把 Lark 打造成 HR 自動化的中樞
- **SecrexAI 整合**：SecrexAI 可以作為 Lark 的 AI layer，處理自然語言查詢

#### 📱 手機優先設計（Mobile-First Approvals）
- Lark 的審批功能原生支持移動端
- 審批人可在手機 Lark app 直接批准/拒絕
- **價值**：香港 SME 的管理者常常不在電腦前
- **SecrexAI 整合**：WhatsApp 通知 + 快速回覆，適合更輕量的互動

#### 🌐 多語言支持（但缺乏粵語）
- Lark 界面支持：簡體中文、繁體中文、英文、日文、韓文等
- **問題**：沒有 Cantonese（粵語）AI 界面
- **SecrexAI 機會**：WhatsApp 粵語介面填補這個空白

#### 🔗 Lark Open Platform API（Approval v4）
- **Webhooks 可訂閱的事件**：
  ```
  approval.instance.submit    — 提交申請
  approval.instance.approve  — 批准
  approval.instance.reject    — 拒絕
  approval.instance.retract   — 撤回
  approval.comment.create    — 審批留言
  ```
- **可用 API做的事**：
  - 創建審批實例（代申請人提交）
  - 查詢審批狀態
  - 批量批准/拒絕
  - 轉發審批（forward to another approver）
  - 獲取審批歷史統計
- **價值**：所有審批功能都可以通過 API 程序化，SecrexAI 可以完全控制

---

### 2.3 Lark HR 功能完整清單（Admin 視角）

需要管理員在 Admin Console 設定的功能（並非開箱即用）：

| 功能 | 默認狀態 | 設定位置 | 複雜度 |
|------|---------|---------|--------|
| 請假類型設定 | 需配置 | Admin → Leave → Leave Types | ⭐ |
| 審批流程設計 | 需從零建 | Admin → Approval → Templates | ⭐⭐⭐ |
| 部門/匯報線 | 需手動建立 | Admin → Organization | ⭐⭐ |
| 加班規則 | 需配置 | Admin → Attendance → Overtime Rules | ⭐⭐ |
| 費用政策 | 需配置 | Admin → Expenses → Policies | ⭐⭐ |
| 新員工入職流程 | 需配置 | Admin → Onboarding | ⭐⭐ |
| 試用期評估 | 需配置 | Admin → Performance → Reviews | ⭐⭐ |
| 自動提醒規則 | 需配置 | Approval Template → Reminders | ⭐⭐ |
| 條件分支邏輯 | 需配置 | Approval Template → Branch | ⭐⭐⭐ |
| 審批數據 → Base 同步 | 需配置 | Approval Template → Sync | ⭐⭐ |
| Webhook / API 接入 | 需配置 | Open Platform → App Settings | ⭐⭐⭐ |

---

### 2.4 最強 Lark + SecrexAI 場景組合

| Lark 功能 | + SecrexAI AI 層 | = 殺手級場景 |
|-----------|-----------------|-------------|
| 請假審批 | + WhatsApp 粵語申請 | = 「幫我申請下周三到周五假」→ AI 自動遞交並通知上司 |
| 費用報銷 + Receipt 照片 | + AI OCR + 分類 | = 上傳 photo → AI 自動填表 → 自動路由審批人 |
| 審批超時提醒 | + WhatsApp 提醒審批人 | = 「陳總，有 1 個 expense claim 已 pending 2 日」 |
| 審批狀態查詢 | + 自然語言 WhatsApp 回覆 | = 「我的請假申請通過了嗎？」 |
| 新員工入職 | + WhatsApp 入職 welcome | = 「歡迎加入！這是你的入職文件」 |
| 加班記錄 | + AI 分析 OT 模式 | = 「你這個月平均每週 OT 12 小時，是否需要關注？」 |
| 請假餘額 | + WhatsApp 即時查詢 | = 「我還有多少天年假？」 |

---

## 三、銷售話術建議（針對 SME decision-maker）

### Invoice Ninja + SecrexAI

**痛點切入**：「你每個月處理幾多張 invoice？係咪有時催完款客戶話未收到？你知道客戶幾時開咗張 invoice 但係唔覆嗎？」

**功能亮點**（按說服力排序）：
1. 🔁 **自動催款**：「月費客戶自動開單，唔使再記住每個月要叫人付款」
2. 📧 **Custom Reminders**：「設定好就自動催，唔使你記住邊張到期」
3. 💳 **Auto-Bill**：「Stripe 直接扣數，遲付機會大幅減少」
4. 👁️ **View Tracking**：「客户打開 invoice 通知你，唔使靠估」
5. 📱 **WhatsApp 通知**：「所有狀態更新喺 WhatsApp 收到，唔使 login portal」

### Lark + SecrexAI

**痛點切入**：「HR 最費時係咪批假、報銷審批？有冇試過員工話 submitted 但係唔知邊個批緊？」

**功能亮點**（按說服力排序）：
1. 📋 **WhatsApp 請假**：「員工直接喺 WhatsApp 話『我要請假』，AI 自動填表、通知上司」
2. 📷 **Receipt OCR**：「拍照上傳 receipt，AI 自動填金額、類別，5 秒完成報銷」
3. ⏰ **自動提醒**：「審批卡住超過 2 日自動催，唔使 admin 成日 follow up」
4. 📊 **HR 數據儀表板**：「老闆問請假率，一句話得出答案」
5. 🌐 **Cantonese 介面**：「同事唔使迫住用 English 或者 Mandarin Lark，直接用廣東話」

---

## 四、Immediate Action Items for SecrexAI Team

### Invoice Ninja 整合（Area2 現有 Pro Plan）
- [ ] 確認 Area2 Invoice Ninja plan（API token 已存在）
- [ ] 測試現有 API 功能（讀取 invoice 狀態、client list）
- [ ] 優先實現：Invoice status query + Overdue reminder via WhatsApp
- [ ] Custom reminder 規則測試（可不可以按客戶設置不同策略？）

### Lark 整合（需客戶提供 Lark OAuth）
- [ ] 申請 Lark Open Platform 開發者帳號（如果 Area2 自己有 Lark）
- [ ] 研究 Lark CoreHR v2 API 是否支持 Area2 現有員工結構
- [ ] 測試審批 webhook 是否可以實時推送給 SecrexAI
- [ ] 確認 Lark 的數據中心的 PDPO 合規性（香港客戶資料存邊？）

### SME 推廣角度
- [ ] 這兩個整合都可以用「5 分鐘 setup」做 demo
- [ ] 建議 Demo 流程：WhatsApp 創建 invoice → 客戶收到 email → 客户打開 → 你收到通知 → 自動催款

---

*Compiled by A2 | Sources: Invoice Ninja official docs, Lark/Feishu Open Platform docs, web search 2026-04-12*
