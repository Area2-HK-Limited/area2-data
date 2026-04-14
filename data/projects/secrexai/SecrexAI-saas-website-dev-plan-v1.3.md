# PersonAI SaaS 官方網站 — 開發計劃書 v1.3

**產品：** PersonAI — 香港 SME 專屬 WhatsApp AI 助手  
**推出主體：** Hostlink (HK) Limited × Area2 (HK) Limited 聯乘  
**文件類型：** 網站前端開發計劃書  
**版本：** v1.3 — 2026-03-23（誠實性修正：移除不實數據主權聲明；「主動提醒」改為「排程提醒」）  
**撰寫：** A2 (OpenClaw AI Agent)

---

## 1. 背景與目標

### 1.1 項目背景

PersonAI 由 **Hostlink (HK) Limited** 與 **Area2 (HK) Limited** 聯乘推出：

| 公司 | 角色 | 負責範疇 |
|------|------|---------|
| **Hostlink (HK) Limited** | 技術夥伴 | 開發、系統架構、資訊安全、伺服器基礎設施 |
| **Area2 (HK) Limited** | 產品及市場夥伴 | 產品設計、包裝、宣傳、市場推廣 |

**核心優勢：** Hostlink 提供企業級亞太區基礎設施（Tencent Cloud ISO 27001 / SOC 2 / CSA STAR 認證底層，部署於日本地區），Area2 提供精準香港 SME 數碼營銷能力——兩者互補，為香港中小企帶來「信得過、用得順」的 AI 助手解決方案。

### 1.2 核心問題（解決咩痛點）

**SME 嘅真實痛點（基於 LIHKG / XHS / HKGolden 用戶聲音）：**

| 痛點 | 現況 | PersonAI 解決方案 |
|------|------|------------------|
| 想用頂級 AI，但 ChatGPT / Claude 香港封鎖 | 需要 VPN，複雜又有法律風險 | 直接 WhatsApp 廣東話使用 GPT-5.4 + Claude + Gemini |
| AI 每次都唔記得我係誰 | 每次重頭解釋 | 永久記憶，越用越識你 |
| 訂了一堆工具，零散又貴 | 每月 HK$2,000+ 訂閱費 | 一個平台，60+ 技能全包 |
| 怕業務資料外洩，唔敢用 AI | 數據去咗美國，受美國法律管 | 用戶對話記錄儲存亞太區（日本），唔做廣告、唔訓練模型，PDPO 合規 |
| 唔識用，無人問 | 純機器 Chatbot，問完都唔知 | 真人 WhatsApp 廣東話技術支援 |

**目標用戶：** 香港中小企老闆及管理層（餐飲 / 零售 / 地產 / 會計 / 教育 / 美容 / 物流行業為優先）

### 1.3 成功指標（KPIs）

| 指標 | 上線後 3 個月目標 | 上線後 6 個月目標 |
|------|------------------|------------------|
| 網站月獨立訪客 | 2,000 UV/月 | 5,000 UV/月 |
| 訪客轉試用率 | > 3% | > 5% |
| 試用轉付費率 | > 15% | > 20% |
| WhatsApp 查詢量 | > 50 次/月 | > 150 次/月 |
| 頁面平均停留時間 | > 2 分鐘 | > 2.5 分鐘 |
| 移動端 Core Web Vitals LCP | < 2.5s | < 2.0s |
| Google 自然搜尋排名（「香港 AI 助手」） | 前 20 | 前 10 |

---

## 2. 需求摘要

### 2.1 功能需求（按優先級排列）

#### P0 — 必須上線

| # | 功能 | 描述 |
|---|------|------|
| P0-01 | **首頁 Hero Section** | 清晰傳遞「住喺你 WhatsApp 的 AI 助手」核心價值，CTA 指向 WhatsApp |
| P0-02 | **行業痛點互動展示** | 選擇行業 → 展示該行業痛點 → PersonAI 如何解決（非靜態文字） |
| P0-03 | **Role Play 互動 Demo** | 模擬 WhatsApp 對話體驗，用戶選身份後看 PersonAI 如何幫佢 |
| P0-04 | **技能場景展示** | 具體工作/生活情景展示，唔係只列「60+ 技能」 |
| P0-05 | **資訊安全 Section** | 明確回應 SME「數據安全」核心顧慮 |
| P0-06 | **AI 教練 Section** | 真人技術支援服務介紹，HK$1,500/月 |
| P0-07 | **定價方案頁** | Starter / Business / Enterprise / AI 教練 四個方案 |
| P0-08 | **CTA 貫穿全站** | 每個 section 有 WhatsApp CTA（+85296456787）及聯絡表格 |
| P0-09 | **響應式設計** | Desktop / Mobile / Tablet 全覆蓋 |
| P0-10 | **SEO 基礎設定** | Meta tags / OG tags / Sitemap / Robots.txt |

#### P1 — 應該上線

| # | 功能 | 描述 |
|---|------|------|
| P1-01 | **適合用戶 Persona Section** | 清晰展示「適合邊類人」，用 Persona 方式呈現 |
| P1-02 | **Hostlink × Area2 公司介紹** | 建立信任，展示兩間公司的互補優勢 |
| P1-03 | **FAQ Section** | 回應 10-15 個常見問題 |
| P1-04 | **客戶見證預留位置** | 設計框架，上線初期放「誠徵測試用戶」CTA |
| P1-05 | **Blog / 知識庫** | SEO 長尾關鍵詞內容，初期 3-5 篇文章 |
| P1-06 | **聯絡表格** | 表格提交發送至 eric@hostlink.com.hk |
| P1-07 | **Google Analytics 4** | 轉換追蹤設定 |
| P1-08 | **法律頁面** | 私隱政策 + 服務條款 |

#### P2 — 可以稍後上線

| # | 功能 | 描述 |
|---|------|------|
| P2-01 | **A/B Testing 框架** | Hero 標題 / CTA 文字 A/B 測試 |
| P2-02 | **社交分享按鈕** | 文章 / 頁面社交分享 |
| P2-03 | **WhatsApp 浮動按鈕** | 固定在右下角的 WhatsApp 聯絡按鈕 |
| P2-04 | **競品比較表** | 詳細競品對比，展示 PersonAI 優勢 |
| P2-05 | **Case Study Section** | 實際客戶案例（上線 3 個月後加入） |
| P2-06 | **多語言支援** | 繁體中文 + English（Phase 2 考慮） |

### 2.2 非功能需求

| 類別 | 要求 |
|------|------|
| **性能** | LCP < 2.5s（Desktop）< 3.0s（Mobile）；FID < 100ms；CLS < 0.1 |
| **SEO** | 每頁唯一 Title/Meta Description；OG tags；Structured Data（FAQ / Organization）；Sitemap.xml |
| **安全** | HTTPS；內容安全政策 (CSP)；表單 CSRF 防護；聯絡表格 reCAPTCHA v3 |
| **可用性** | WCAG 2.1 AA 基礎合規；鍵盤導航支援 |
| **瀏覽器兼容** | Chrome 100+；Safari 15+；Firefox 100+；Mobile Safari（iOS 15+）；Chrome Mobile |
| **響應式** | Mobile-first；Breakpoints：sm（640）/ md（768）/ lg（1024）/ xl（1280）/ 2xl（1536） |
| **Uptime** | 99.9%（Tencent Lighthouse Cloud 高可用部署） |

### 2.3 明確排除項

- ❌ **唔提 OpenClaw** — 不在任何頁面提及 OpenClaw 作為底層技術
- ❌ 不建用戶登入 / 訂閱系統（跳轉到 Stripe / 外部訂閱頁面）
- ❌ 不建後台 CMS（初期直接維護 Markdown / 代碼）
- ❌ 不建即時 AI 聊天功能（Demo 係模擬靜態對話，唔係真實 AI 連線）

### 2.4 [待確認] 事項

- [ ] **域名：** `personai.hk` / `personai.com.hk` / `person.ai` — Eric 確認使用哪個
- [ ] **Stripe 試用流程連結：** 申請後跳轉到哪裡（外部 Stripe 頁面 or 自建申請表）
- [ ] **Logo / 品牌色板：** 是否已有設計稿？（計劃書建議：淺色系，主色 #2563EB 藍或 Area2 品牌色）
- [ ] **初期 Blog 文章主題：** 需 Eric / Area2 確認優先 SEO 關鍵詞
- [ ] **圖片生成方向：** 呢份計劃書已列出圖片需求清單，需確認生成 vs 採購 stock photo

---

## 3. 網站架構（Sitemap）

```
personai.hk/
├── / (首頁 — Landing Page)
│   ├── Hero Section
│   ├── 三大核心優勢
│   ├── 行業痛點互動展示 (Interactive)
│   ├── Role Play Demo (Interactive)
│   ├── 技能場景展示
│   ├── 適合你嗎？(Persona)
│   ├── 資訊安全承諾
│   ├── AI 教練
│   ├── 定價預覽
│   ├── FAQ 快速答
│   └── CTA / 聯絡
│
├── /features (功能詳情)
│   ├── 60+ 技能分類展示
│   ├── 行業專屬用例
│   └── 技術架構說明（用戶語言）
│
├── /pricing (定價)
│   ├── 方案比較表
│   ├── ROI 計算器（靜態）
│   └── FAQ（定價相關）
│
├── /security (資訊安全)
│   ├── 三大安全承諾
│   ├── Hostlink 基礎設施介紹
│   ├── 認證清單
│   ├── PDPO 合規說明
│   └── 競品安全比較
│
├── /ai-coach (AI 教練)
│   ├── 服務介紹
│   ├── 服務包含內容
│   └── 定價 + CTA
│
├── /about (關於我們)
│   ├── Hostlink × Area2 合作架構
│   ├── 公司介紹
│   └── 聯絡資料
│
├── /blog (知識庫)
│   ├── /blog/香港ai助手推薦
│   ├── /blog/whatsapp-ai工具比較
│   ├── /blog/sme-ai-productivity
│   └── ... (SEO 長尾文章)
│
├── /faq (FAQ 完整版)
│
├── /contact (聯絡我們)
│   ├── 聯絡表格
│   └── WhatsApp CTA
│
├── /privacy (私隱政策)
└── /terms (服務條款)
```

---

## 4. 每頁 Wireframe 描述及設計規範

### 4.1 全站視覺設計規範

**色彩系統：**
| 顏色 | 用途 | HEX |
|------|------|-----|
| 主色（Primary Blue） | CTA 按鈕、重點標題、icon | `#2563EB` |
| 輔助色（Accent Teal） | 行業 tag、badge | `#0891B2` |
| 背景（Background） | 頁面底色（**淺色！**） | `#F8FAFC` |
| 白色 Section | 交替 Section 底色 | `#FFFFFF` |
| 淺藍 Section | 特色 Section 底色 | `#EFF6FF` |
| 文字（Body） | 正文 | `#1E293B` |
| 文字（Muted） | 次要說明 | `#64748B` |
| 成功 / 確認 | 安全承諾 icon | `#16A34A` |
| 強調橙 | 重點數據（如 HK$298）| `#EA580C` |

> ⚠️ **全站淺色背景，禁止深色背景設計。** Section 交替使用 `#F8FAFC` 和 `#FFFFFF`，特色 Section 用淺藍 `#EFF6FF`。

**字體：**
- 標題：`Noto Sans TC` Bold（Google Fonts，支援繁體中文）
- 正文：`Noto Sans TC` Regular
- 英文代碼/數字：`Inter` Regular

**圖片使用規範：**
- 每個主要 Section 都要有相關圖片（右或左交替配圖）
- 圖片風格：**3D Pixar 風格插圖 / 現代扁平設計 / 真實辦公室場景** — 三種混合
- AI 生成圖片用 `skills/image-generation`（Nano Banana Pro）
- 圖片格式：WebP（優先），JPG fallback
- 所有圖片必須有 alt text（SEO + 無障礙）

---

### 4.2 首頁（Landing Page）Wireframe

```
┌─────────────────────────────────────────────────────────┐
│ HEADER: [Logo] [功能] [定價] [安全] [AI教練] [關於] [立即試用→] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  HERO SECTION (淺藍漸層背景 #EFF6FF → #FFFFFF)          │
│  ┌─────────────────────────┐  ┌─────────────────────┐  │
│  │ H1: 住喺你 WhatsApp 的  │  │  [3D 插圖：WhatsApp  │  │
│  │ 24小時全能 AI 助手      │  │  chat 界面，AI 助手  │  │
│  │                         │  │  正在回覆老闆信息]   │  │
│  │ 副標題：廣東話原生・     │  └─────────────────────┘  │
│  │ 永久記憶・60+技能・      │                            │
│  │ 數據存亞太區（日本），    │                            │
│  │ 唔訓練模型・PDPO 合規   │                            │
│  │                         │                            │
│  │ [WhatsApp 免費試用→]    │                            │
│  │ [睇互動示範]             │                            │
│  └─────────────────────────┘                            │
│  信任標誌：Hostlink × Area2 | PDPO 合規 | Tencent Cloud ISO 27001 | 數據記錄存亞太區（日本）│
├─────────────────────────────────────────────────────────┤
│                                                         │
│  痛點共鳴 SECTION (白底)                                 │
│  「你係咪都有呢幾個問題？」                               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │ChatGPT │ │AI唔記  │ │一堆工具│ │怕數據  │           │
│  │香港封鎖│ │得你係誰│ │好散好貴│ │外洩    │           │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
│              ↓ PersonAI 全部解決 ↓                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  行業痛點互動展示 SECTION (淺藍底 #EFF6FF)               │
│  [互動 UI — 詳見 Section 5.1]                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ROLE PLAY DEMO SECTION (白底)                          │
│  [互動 UI — 詳見 Section 5.2]                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  技能場景展示 SECTION (淺藍底)                            │
│  「睇吓 PersonAI 點幫你做嘢」                             │
│  [場景卡片輪播 — 詳見 Section 5.3]                       │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  適合你嗎？PERSONA SECTION (白底)                        │
│  [6個 Persona 卡片 — 詳見 Section 4.9]                  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  資訊安全 SECTION (深藍底 #1E3A5F，白文字)               │
│  [3大安全承諾 + Hostlink 基礎設施]                        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  AI 教練 SECTION (淺藍底)                                │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  定價預覽 SECTION (白底)                                  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  客戶見證 SECTION (淺灰底，初期放「成為早期用戶」CTA)      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FAQ SECTION (白底，Accordion)                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FINAL CTA SECTION (主色藍底 #2563EB)                   │
│  「14 日免費試用，唔需要信用卡」                           │
│  [WhatsApp 立即咨詢] [填寫申請表]                        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ FOOTER: Logo | 快速連結 | 聯絡方式 | 法律連結 | © 2026   │
└─────────────────────────────────────────────────────────┘
```

---

### 4.3 安全頁面（/security）Wireframe

```
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                   │
├─────────────────────────────────────────────────────────┤
│ HERO: 「你的業務資料，只屬於你」                           │
│ 副標：SME 最擔心的 4 個問題，PersonAI 一一回應             │
│ [圖片：香港城市 skyline + 安全鎖 icon 插圖]                │
├─────────────────────────────────────────────────────────┤
│ SME 4大安全顧慮 → PersonAI 解決方案（左右對比）            │
│  ❓ 顧慮：對話數據會唔會被 AI 訓練？                       │
│  ✅ 答案：絕不。底層認證明確承諾數據不用於訓練任何模型      │
│                                                         │
│  ❓ 顧慮：數據存喺邊？                                     │
│  ✅ 答案：用戶對話記錄儲存亞太區（日本），Tencent Cloud 企業級數據中心 │
│           唔訓練模型・唔做廣告・PDPO 合規                   │
│                                                         │
│  ❓ 顧慮：員工對話會唔會洩漏？                              │
│  ✅ 答案：端到端加密 + 每個用戶帳號獨立隔離                 │
│                                                         │
│  ❓ 顧慮：香港法律管唔管到？                                │
│  ✅ 答案：PDPO 合規（香港公司運營），可簽 DPA               │
├─────────────────────────────────────────────────────────┤
│ Tencent Cloud 亞太數據中心（日本）Section                    │
│ [圖片：現代數據中心機架插圖]                               │
│ ISO 27001 | SOC 2 Type 2 | CSA STAR | PDPO | 企業級防火牆│
├─────────────────────────────────────────────────────────┤
│ 競品安全比較表                                             │
├─────────────────────────────────────────────────────────┤
│ CTA: [WhatsApp 詢問安全合規問題]                           │
└─────────────────────────────────────────────────────────┘
```

---

### 4.4 定價頁面（/pricing）Wireframe

```
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                   │
├─────────────────────────────────────────────────────────┤
│ HERO: 「揀啱你嘅方案，即日開始」                           │
│ 副標：所有方案均包含 60+ 技能 + 廣東話優化 + 永久記憶       │
├─────────────────────────────────────────────────────────┤
│ 定價卡片 (3列)                                            │
│ ┌──────────┐  ┌──────────────┐  ┌──────────┐           │
│ │ Starter  │  │ Business ⭐  │  │Enterprise│           │
│ │ HK$298/月│  │  HK$680/月   │  │  按需定制 │           │
│ │ 個人/SOHO│  │  SME 首選    │  │  大型企業 │           │
│ │ [試用]   │  │  [立即試用]  │  │  [查詢]  │           │
│ └──────────┘  └──────────────┘  └──────────┘           │
├─────────────────────────────────────────────────────────┤
│ ROI 說明：HK$298/月 vs 8個工具 HK$2,028/月               │
│ 「一張單就回本」— Business 方案                            │
├─────────────────────────────────────────────────────────┤
│ AI 教練增值服務：HK$1,500/月                               │
├─────────────────────────────────────────────────────────┤
│ 方案詳細比較表（全功能橫向對比）                            │
├─────────────────────────────────────────────────────────┤
│ 早鳥優惠 Banner                                           │
├─────────────────────────────────────────────────────────┤
│ FAQ（定價相關 8 條）                                       │
├─────────────────────────────────────────────────────────┤
│ CTA: [WhatsApp 查詢] [填寫申請表]                          │
└─────────────────────────────────────────────────────────┘
```

---

### 4.5 AI 教練頁面（/ai-coach）Wireframe

```
┌─────────────────────────────────────────────────────────┐
│ HERO: 「唔識用？有人教」                                   │
│ 副標：真人技術團隊，WhatsApp 廣東話全程支援                 │
│ [圖片：友善技術人員在辦公室插圖，非機器人形象]              │
├─────────────────────────────────────────────────────────┤
│ 痛點：「AI 好複雜，唔知點問」                               │
│ 「試過自己玩，問完都唔知應用喺邊」                          │
│ 「唔想浪費錢，想用得好」                                    │
├─────────────────────────────────────────────────────────┤
│ AI 教練服務包含：                                          │
│ ① 調教 AI 個性（30 分鐘 onboarding）                      │
│ ② 避免踩雷（常見錯誤用法預防）                              │
│ ③ 快速上手（掌握 60+ 技能核心用法）                         │
│ ④ 持續優化（每月 1 次 review 跟進）                         │
├─────────────────────────────────────────────────────────┤
│ HK$1,500/月 | 月付，隨時取消                               │
│ 可與任何方案配合使用                                        │
├─────────────────────────────────────────────────────────┤
│ [WhatsApp +85296456787 查詢 AI 教練] [填寫表格]            │
└─────────────────────────────────────────────────────────┘
```

---

### 4.6 關於頁面（/about）Wireframe

```
┌─────────────────────────────────────────────────────────┐
│ HERO: 「由香港人，為香港人打造」                             │
├─────────────────────────────────────────────────────────┤
│ Hostlink × Area2 合作模式                                  │
│ ┌──────────────────┐  +  ┌──────────────────────┐        │
│ │ Hostlink (HK) Ltd│     │ Area2 (HK) Limited   │        │
│ │ 開發・安全・基建  │     │ 產品・設計・推廣      │        │
│ │ 14+ 年IT經驗     │     │ 數碼營銷 + AI 方案    │        │
│ │ Tencent Cloud 亞太│     │ 香港 SME 市場專家     │        │
│ │ 數據中心（日本）  │     └──────────────────────┘        │
│ └──────────────────┘                                      │
├─────────────────────────────────────────────────────────┤
│ 為什麼聯乘？                                               │
│ 「技術底子 × 市場洞察 = 真正用得着的 AI 解決方案」          │
├─────────────────────────────────────────────────────────┤
│ 聯絡方式：WhatsApp +85296456787 | eric@hostlink.com.hk    │
└─────────────────────────────────────────────────────────┘
```

---

### 4.7 Blog / 知識庫（/blog）

**SEO 目標關鍵詞（初期 5 篇）：**

| 文章主題 | 目標關鍵詞 | 預計字數 |
|---------|----------|---------|
| 香港 AI 助手推薦 2026 | 「香港AI助手」「WhatsApp AI」 | 1500 字 |
| ChatGPT 香港用唔到？解決方法 | 「ChatGPT 香港」「香港AI工具」 | 1200 字 |
| 香港中小企 AI 工具比較 | 「SME AI工具」「香港企業AI」 | 2000 字 |
| WhatsApp AI 點揀？2026 完整指南 | 「WhatsApp AI 助手」 | 1800 字 |
| PDPO 合規 AI 工具：香港企業必知 | 「PDPO AI」「香港數據安全AI」 | 1200 字 |

---

### 4.8 FAQ 頁面（/faq）

**FAQ 分類及問題清單：**

**🔰 基本問題**
- PersonAI 係咩？同 ChatGPT 有咩分別？
- 點樣開始使用？要安裝乜嘢 App 嗎？
- 支唔支援廣東話？

**💳 定價相關**
- 有冇免費試用？
- 可以隨時取消嗎？
- 超出用量點算？
- 可以先試後付嗎？

**🔒 資訊安全**
- 我的對話數據會唔會去咗美國？
- PersonAI 會唔會用我的資料訓練 AI？
- 係咪 PDPO 合規？
- 員工用同一個帳號，對話會互相看到嗎？

**⚙️ 技術問題**
- 需要安裝任何軟件嗎？
- 支唔支援 Telegram？
- 可以加入 WhatsApp 群組嗎？

**🏢 企業應用**
- 適合幾多人的公司？
- 可以訂製行業專屬功能嗎？
- 有冇試用版俾我先測試效果？

---

### 4.9 Persona Section（適合你嗎？）

六個 Persona 卡片，每張卡片包含：頭像插圖 + 身份 + 最大痛點 + PersonAI 點幫

| Persona | 身份 | 核心痛點 | PersonAI 方案 |
|---------|------|---------|--------------|
| 🧑‍💼 **中小企老闆陳先生** | 零售店老闆，旺角，3間門市 | 每日 WhatsApp 回覆客人同埋追貨，又要管帳，分身不暇 | AI 自動整理客人查詢 + 追蹤訂單 + 生成週報，一個助手頂兩個兼職 |
| 💅 **美容院老闆娘 Mandy** | 3 名員工美容院，銅鑼灣 | 想做 IG 宣傳，但每次都唔知寫咩、配咩圖，好花時間 | AI 直接生成廣東話文案 + 配圖 + 預約提醒自動化，整個流程一條龍 |
| 🏠 **地產代理 Victor** | 5 年經驗，主攻九龍區租務 | 放盤要中英對照、要 WhatsApp 跟進 + 睇樓提醒，好多繁瑣工作 | AI 自動生成中英放盤文案 + WhatsApp 提醒客人 + 跟進進度 |
| 📊 **會計師 Joyce** | 4 人所，荃灣，主要 SME 客戶 | Chase 客人交單據好費神，每次逐個 WhatsApp，回覆又慢 | AI 自動識別欠交名單，批量個人化 WhatsApp 提醒，回覆率大幅提升 |
| 🍜 **餐廳東主 Benny** | 茶餐廳，深水埗，自己一腳踢 | 手寫今日特別餐單好麻煩，又想試試 IG Story，但唔識設計 | AI 一句話更新餐單 + 即出 IG Story 圖 + 幫你估算食材需求 |
| 📦 **物流公司 Andy** | 7 人快遞公司，葵涌 | 派單要整理 WhatsApp 訊息，客人問單追蹤又要逐條回 | AI 自動整理訂單資料 + 生成派送更新 + 批量回覆客人查詢 |

---

## 5. 互動功能規格（核心需求）

### 5.1 行業痛點互動展示

**設計目標：** 讓用戶選擇自己的行業，即時看到 PersonAI 針對該行業的痛點和解決方案，唔係靜態文字。

**互動流程：**
```
用戶看到 Section → 點擊行業標籤 → 右邊面板即時更新 → 顯示痛點 + 解決方案
```

**UI 設計規格：**
```
┌─────────────────────────────────────────────────────────┐
│  「PersonAI 點幫你？選擇你的行業」                          │
│                                                         │
│  行業選擇（Tab / Pill 形式，水平滾動）：                   │
│  [🍜餐飲] [🛍零售] [🏠地產] [📊會計] [🎓教育] [💅美容] [📦物流] │
│                                                         │
│  ┌──────────────────────────┐ ┌────────────────────────┐│
│  │ 📊 你的痛點              │ │ ✨ PersonAI 如何解決    ││
│  │ (依選擇行業動態更新)      │ │ (依選擇行業動態更新)    ││
│  │                          │ │                        ││
│  │ • 痛點 1                 │ │ → 解決方案 1            ││
│  │ • 痛點 2                 │ │ → 解決方案 2            ││
│  │ • 痛點 3                 │ │ → 解決方案 3            ││
│  │                          │ │                        ││
│  │ [相關場景圖片]            │ │ [示範對話截圖風格圖]    ││
│  └──────────────────────────┘ └────────────────────────┘│
│                                                         │
│  [體驗 PersonAI 幫你解決這些問題 → WhatsApp 試用]         │
└─────────────────────────────────────────────────────────┘
```

**行業數據（7 個行業的痛點 + 解決方案）：**

**🍜 餐飲業（Restaurant）**
- 痛點：訂位、餐牌更新、外賣訂單三頭燒；每日手寫今日特別；IG 宣傳想做但冇時間
- 解決：語音/文字即更新每日餐單 + 自動出 IG Story 圖；整合訂位提醒；分析顧客常問問題

**🛍️ 零售業（Retail）**
- 痛點：WhatsApp 客人查詢答唔完；庫存查詢要找人；促銷文案唔夠吸引
- 解決：AI 整理客人查詢優先級 + 草擬回覆；追蹤庫存關鍵字提醒；生成多版本促銷文案

**🏠 地產業（Property）**
- 痛點：放盤文案要中英對照；睇樓提醒要逐個 WhatsApp；客源跟進記唔住
- 解決：輸入樓盤資料即出中英放盤文案；自動睇樓提醒；記憶客人偏好，下次配對更準

**📊 會計業（Accounting）**
- 痛點：Chase 客人交單據好費時；每月要出一堆報表；英文 email 唔夠專業
- 解決：批量個人化 WhatsApp 提醒欠交客人；自動整理數據出報表；幫你草擬專業英文 email

**🎓 教育業（Education）**
- 痛點：功課批改建議要逐個寫；家長 WhatsApp 查詢回覆慢；教材翻譯耗時
- 解決：AI 生成個人化學生反饋範本；快速分類家長查詢；文件即時翻譯

**💅 美容業（Beauty）**
- 痛點：預約管理混亂；IG 文案想要本地化但出唔到味；產品介紹要一再重複解釋
- 解決：自動整理預約日程 + 提醒客人；生成粵語風格「種草」文案；建立常見問題自動回覆範本

**📦 物流業（Logistics）**
- 痛點：派送更新要逐個 WhatsApp；貨物狀態查詢壓垮客服；司機調度記唔住
- 解決：批量發送派送狀態更新；建立快速查詢回覆系統；自動整理每日任務清單

---

### 5.2 Role Play 互動 Demo

**設計目標：** 讓用戶「親身感受」PersonAI 如何幫助自己，建立情感共鳴。模擬 WhatsApp 聊天介面，唔係真實 AI 連線，係精心設計的靜態模擬對話。

**互動流程：**
```
選擇身份 → 進入模擬對話 → 預設對話自動播放（打字機效果）→ 用戶可選擇「下一步」
```

**UI 設計規格：**
```
┌──────────────────────────────────────────────────────────┐
│  「體驗一下，PersonAI 點幫你？」                             │
│  選擇你的身份：                                             │
│  [👔 中小企老闆] [📣 行銷人員] [📊 會計師] [🎓 教師] [🏠 地產代理] │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  [WhatsApp 風格聊天介面]                            │  │
│  │  ┌──────────────────────────────────────────────┐  │  │
│  │  │  PersonAI                            ● 在線  │  │  │
│  │  ├──────────────────────────────────────────────┤  │  │
│  │  │                                              │  │  │
│  │  │  [用戶氣泡]：你好，我今日有個重要 meeting，   │  │  │
│  │  │  想準備一下                                  │  │  │
│  │  │                                              │  │  │
│  │  │           [AI 氣泡]：好嘅！我幫你：           │  │  │
│  │  │           1. 搜尋相關行業最新新聞              │  │  │
│  │  │           2. 整理你上次嘅備忘（你上週說過...）  │  │  │
│  │  │           3. 準備會議議程模版                  │  │  │
│  │  │           需要我翻譯成英文嗎？                 │  │  │
│  │  │                                              │  │  │
│  │  │  [用戶氣泡]：好啊，順便提醒我 3pm 會議        │  │  │
│  │  │                                              │  │  │
│  │  │           [AI 氣泡]：已設定 3pm 排程提醒 ✓     │  │  │
│  │  │           我會喺 2:45pm 按排程發你議程摘要      │  │  │
│  │  │                                              │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  │  [下一步：睇完整場景] [親身試用 →]                 │  │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

**5 個身份的預設對話場景：**

**👔 中小企老闆：**
- 場景：早上開工，想快速了解昨晚美股同今日相關新聞
- AI 行動：搜尋 SPX 數據 + 摘要相關行業新聞 + 提醒今日待辦事項

**📣 行銷人員：**
- 場景：客戶要求本週五前出 IG campaign，現在係週一
- AI 行動：搜尋競品近期帖文 → 分析痛點 → 生成 3 份廣東話文案 + 配圖建議 → 設定週五前 review 提醒

**📊 會計師：**
- 場景：月底，要 chase 3 個客人補交單據
- AI 行動：搜尋記憶中呢 3 個客人的資料 → 生成個人化廣東話 WhatsApp 提醒訊息 → 發送後追蹤回覆狀態

**🎓 教師：**
- 場景：想為一篇學生作文提供反饋
- AI 行動：分析作文結構 → 提供 3 個改進建議 → 生成學生易明的中文反饋 → 翻譯家長通知英文版

**🏠 地產代理：**
- 場景：剛收到新盤資料，要即刻放落幾個平台
- AI 行動：生成中英放盤文案 → 社媒帖文版 → WhatsApp 廣播版 → 設定跟進提醒

---

### 5.3 技能場景展示

**設計目標：** 用具體情景展示 PersonAI 的技能組合應用，讓客人有「原來可以咁用！」的頓悟感。唔係技能列表，而是有 narrative 的工作故事。

**UI 設計規格：**
```
┌──────────────────────────────────────────────────────────┐
│  「真實工作情景，睇吓 PersonAI 點幫你」                     │
│                                                          │
│  [場景 Tab：< 老闆開會前 | 收到客訴 | 月底結算 | 策劃推廣 >] │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │  📍 場景：老闆開會前                               │   │
│  │  ──────────────────────────────────────────────  │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐          │   │
│  │  │① 搜尋資料│→│② 整理摘要│→│③ 翻譯英文│          │   │
│  │  │[搜尋技能]│  │[文件技能]│  │[翻譯技能]│          │   │
│  │  └─────────┘  └─────────┘  └─────────┘          │   │
│  │       ↘                        ↗                  │   │
│  │         ④ 設定 2:45pm 提醒                        │   │
│  │         [提醒技能]                                 │   │
│  │  ──────────────────────────────────────────────  │   │
│  │  結果：10 分鐘完成原本 1 小時的準備工作              │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

**4 個核心場景：**

**場景 1：老闆開會前**
- 技能組合：即時搜尋 + YouTube 摘要 + 文件翻譯 + 智能提醒
- 流程：搜尋相關行業資料 → 整理成 PPT 摘要格式 → 翻譯成英文版 → 設定會前提醒
- 節省時間：1 小時 → 10 分鐘

**場景 2：收到客戶投訴**
- 技能組合：投訴分析 + 記憶搜尋 + 草擬回覆 + 任務追蹤
- 流程：AI 分析投訴核心問題 → 搵呢個客戶的歷史記錄 → 草擬專業回覆 → 設定 follow-up 提醒
- 節省時間：40 分鐘 → 8 分鐘

**場景 3：月底策劃推廣活動**
- 技能組合：競品研究 + 市場分析 + 文案生成 + 圖片生成 + EDM 製作
- 流程：搜尋競品近期促銷 → SWOT 分析 → 生成 3 個推廣方案 → 出文案 + 配圖 + EDM 範本
- 節省時間：整日 → 2 小時

**場景 4：接到新項目**
- 技能組合：研究 + 計劃書撰寫 + 翻譯 + 提醒
- 流程：搜尋行業背景資料 → 生成開發計劃書草稿 → 翻譯英文版客戶版 → 設定各階段 deadline 提醒
- 節省時間：3 日 → 半日

---

## 6. 圖片需求清單

> 所有 AI 生成圖片使用 `skills/image-generation`（Nano Banana Pro by Google Imagen 3）

| # | 圖片用途 | 風格 | 尺寸 | 生成 Prompt 方向 |
|---|---------|------|------|-----------------|
| 1 | Hero 主圖 | 3D Pixar，溫暖插圖 | 800x600 | 「香港辦公室，老闆用 WhatsApp 同 AI 助手對話，桌面有電腦 + 咖啡，現代感，淺色背景，Pixar 3D 風格」 |
| 2 | 行業插圖 × 7 | 扁平設計，各行業代表性場景 | 400x300 | 各行業（餐廳/零售/地產/會計/教育/美容/物流）現代扁平插圖 |
| 3 | 安全 Section 圖 | 現代科技感，帶亞太元素 | 600x400 | 「數據安全，亞太城市背景，盾牌 + 鎖圖示，藍色調，現代科技感，日本東京天際線」 |
| 4 | AI 教練圖 | 溫暖友善，真人感 | 600x400 | 「友善的技術支援人員在辦公室，用 WhatsApp 協助客人，廣東話對話泡泡，溫暖插圖」 |
| 5 | Tencent Cloud 亞太數據中心 | 科技感，亞太現代 | 600x400 | 「現代伺服器機架，藍色 LED 燈，亞太 Tier 3+ 數據中心，專業企業感」 |
| 6 | 定價 Section 背景 | 輕盈，表格感 | 全寬 | 淺藍漸層，幾何圖案背景紋理 |
| 7 | Persona 頭像 × 6 | Pixar 3D，多元性別 | 100x100 圓形 | 各 persona 人物（老闆/老闆娘/地產代理/會計師/餐廳東主/物流主管），Pixar 3D 風格，多元香港面孔 |
| 8 | Blog 封面 × 5 | 現代商業插圖 | 800x400 | 按文章主題生成 |
| 9 | WhatsApp Demo 截圖風格 | 逼真 WhatsApp UI | 300x600 | 精心設計的 WhatsApp 對話截圖，展示 AI 回覆（手工設計，唔係生成）|
| 10 | OG Image（Social Share） | 品牌感強 | 1200x630 | PersonAI Logo + 標語，藍白色，整齊現代 |
| 11 | Background Texture | 微妙幾何紋理 | Tileable | 淺藍色細小六邊形/點陣紋理，用於 Section 背景裝飾 |

---

## 7. 技術選型

### 7.1 推薦技術棧

**基礎模版：Nuxt UI SaaS Template（官方）**

> 🔗 **Template Repo：** https://github.com/nuxt-ui-templates/saas
> 🔗 **Live Demo：** https://saas-template.nuxt.dev/

```bash
# 一鍵初始化
npm create nuxt@latest -- -t ui/saas
```

**選用理由：**

| 優勢 | 說明 |
|------|------|
| **Landing Page 即用** | 已包含 Hero、Features、Pricing、Testimonials、CTA 等標準 SaaS 區塊 |
| **Blog + Documentation** | 由 Nuxt Content v3 驅動，Markdown 管理，SEO 友好 |
| **Nuxt UI 100+ 組件** | 按鈕、表單、Modal、Data Table、Toast 等全部現成，自帶 Accessibility |
| **Light / Dark Mode** | 內建主題切換，自動偵測系統偏好（我哋鎖定 Light Mode） |
| **TypeScript 支援** | 全 TS，Auto-import，開發體驗極佳 |
| **Tailwind CSS v4** | 原子化 CSS，高度自訂 Design Token |
| **SEO 優化** | SSG 靜態生成、自動 meta tags、sitemap、OG images |
| **Core Web Vitals** | Automatic code splitting、lazy loading、SSG，Lighthouse 近滿分 |
| **i18n Ready** | 內建 50+ 語言支援，繁體中文 ready |
| **Tencent Lighthouse 部署** | SSG 或 SSR 模式，部署於 Lighthouse Japan instance |
**Template 已提供嘅頁面結構（需改造）：**

| Template 原有 | PersonAI 改造為 |
|--------------|-----------------|
| Landing Page (Hero + Features + Pricing + Testimonials) | 首頁（行業痛點互動 + Role Play Demo + 技能場景 + CTA） |
| Pricing Page | 定價頁（三個方案 + AI 教練增值服務） |
| Documentation | 改造為「使用指南」/「知識庫」（SEO 長尾內容） |
| Blog | Blog / 案例分享 |
| — | **新增：** /security（資訊安全專頁） |
| — | **新增：** /ai-coach（AI 教練專頁） |
| — | **新增：** /about（公司介紹 Hostlink × Area2） |
| — | **新增：** /contact（聯絡表格） |
| — | **新增：** /privacy + /terms（法律頁面） |

**相對從零開始嘅優勢：**
- 節省約 **2-3 週**前端開發時間（Landing + Pricing + Blog 骨架已有）
- 設計系統一致性由 Nuxt UI 保證
- Responsiveness（手機/平板/桌面）開箱即用
- 專注精力喺**自訂互動功能**（行業痛點 Tab、Role Play、技能場景）

---

**前端框架（由 Template 決定）：**

| 組件 | 選擇 | 來源 |
|------|------|------|
| 框架 | **Nuxt 3 (SSG Mode)** | Template 內建 |
| UI 組件庫 | **Nuxt UI v3**（100+ 組件） | Template 內建 |
| CSS | **Tailwind CSS v4** | Template 內建 |
| 內容管理 | **Nuxt Content v3** | Template 內建（Blog + Docs） |
| 圖示 | Heroicons + 自定義 SVG | Nuxt UI 內建 |
| 動畫 | GSAP / Vue Transition | **額外安裝**：行業 Tab 切換動畫；Role Play 打字機效果 |

**表單處理：Nuxt Server API + Email（運行於 Tencent Lighthouse）**
- 聯絡表格提交 → Nuxt server API endpoint（跑喺 Lighthouse instance）→ 發送到 eric@hostlink.com.hk
- reCAPTCHA v3 防 spam

**部署：Tencent Lighthouse Cloud（日本地區）**
- Nuxt SSG（靜態生成）或 SSR（視需要），部署至 Tencent Lighthouse Japan instance
- 可選：Cloudflare 做 DNS + CDN 前端加速（唔依賴 Cloudflare Pages 托管）
- 月費約 HK$100-300/月（視 instance 規格）
- 自動 HTTPS（Caddy 或 Nginx + Let's Encrypt）

### 7.2 技術架構圖

```
                    用戶 (Mobile / Desktop)
                           │
              Cloudflare DNS + CDN（前端加速，可選）
                           │
         Tencent Lighthouse Japan（主機）
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    HTML/CSS/JS        Static Assets     Nuxt Content
    (Nuxt SSG/SSR)    (本地或 Tencent    (Blog MD)
                        COS，可選)
         │                 
    Nuxt Server API  ← 聯絡表格提交（Lighthouse 內建）
         │
    Email (eric@hostlink.com.hk)

Analytics:
- Google Analytics 4 (gtag)
- Meta Pixel (Facebook)
- Clarity (Heatmap, 免費)
```

### 7.3 第三方依賴清單

| 服務 | 用途 | 費用 |
|------|------|------|
| Tencent Lighthouse Cloud (Japan) | 網站主機・Nuxt 部署・表單 API | 約 HK$100-300/月 |
| Cloudflare (DNS + CDN) | DNS 管理 + 前端 CDN 加速（可選） | 免費（Cloudflare Free Plan） |
| Google Analytics 4 | 流量分析 | 免費 |
| Google reCAPTCHA v3 | 防表單濫用 | 免費 |
| Meta Pixel | Facebook 廣告追蹤 | 免費 |
| Microsoft Clarity | Heatmap + Session Recording | 免費 |
| Google Fonts (Noto Sans TC) | 字體 | 免費 |
| GSAP (GreenSock) | 動畫效果 | 免費（標準版） |

---

## 8. 分階段 Roadmap

### Phase 0：準備（Week 1-2）

**目標：** 環境搭建，設計確認，內容準備

**Deliverables：**
- [ ] 確認域名 + DNS 設定
- [ ] 用 Nuxt SaaS Template 初始化項目：`npm create nuxt@latest -- -t ui/saas`
- [ ] 熟悉 Template 結構，識別需改造 vs 新增嘅頁面
- [ ] 設定 Tencent Lighthouse Japan instance + SSH 環境
- [ ] 配置 Nginx/Caddy + Let's Encrypt HTTPS
- [ ] 設定 Cloudflare DNS（域名指向 Lighthouse IP）+ 可選 CDN 加速
- [ ] 色彩系統調整：鎖定 Light Mode，設定淺色背景 Design Tokens
- [ ] Logo / 品牌素材確認（由 Area2 提供或生成）
- [ ] 確認 7 個行業的詳細痛點內容（業務內容確認）
- [ ] 確認 Role Play 5 個身份的對話腳本
- [ ] 確認 4 個技能場景內容
- [ ] 生成所有 AI 圖片（約 11 張，用 skills/image-generation）
- [ ] 撰寫初期 5 篇 Blog 文章（SEO 關鍵詞確認）
- [ ] Google Analytics 4 property 建立 + 目標設定

**預估時間：** 2 週  
**驗收標準：** 設計系統確認；所有圖片生成完畢；內容全部 review 通過

---

### Phase 1：MVP（Week 3-5）

**目標：** 上線基礎版本，包含所有 P0 功能

**Deliverables：**
- [ ] 首頁（含所有 P0 Section）
- [ ] 行業痛點互動展示（7 個行業）
- [ ] Role Play Demo（5 個身份）
- [ ] 技能場景展示（4 個場景）
- [ ] 資訊安全 Section（完整）
- [ ] AI 教練 Section
- [ ] 定價頁面
- [ ] 聯絡表格（Nuxt server API 接收 + email，運行於 Lighthouse）
- [ ] 基礎 SEO（每頁 meta / OG tags / sitemap.xml / robots.txt）
- [ ] WhatsApp 浮動 CTA 按鈕（固定右下角）
- [ ] 響應式設計（Desktop / Mobile / Tablet）
- [ ] Google Analytics 4 + 轉換事件追蹤（WhatsApp 點擊 / 表單提交）

**預估時間：** 3 週  
**驗收標準：**
- Core Web Vitals：LCP < 2.5s（Desktop）、< 3.0s（Mobile）
- 所有頁面 Mobile / Desktop 顯示正常
- 表單提交 → eric@hostlink.com.hk 收到通知
- WhatsApp CTA 點擊有 GA4 事件追蹤
- Lighthouse SEO 分數 > 90

---

### Phase 2：完整版（Week 6-8）

**目標：** 補齊 P1 功能，優化性能

**Deliverables：**
- [ ] Blog / 知識庫（5 篇初始文章）
- [ ] FAQ 完整頁面（/faq）
- [ ] About / 公司介紹頁（/about，含 Hostlink × Area2 合作架構）
- [ ] 安全頁面（/security，完整版含認證清單）
- [ ] 法律頁面（私隱政策 + 服務條款）
- [ ] 客戶見證預留位置（初期顯示「成為首批用戶」CTA）
- [ ] OG Tags 優化（每頁獨立 OG Image）
- [ ] Meta Pixel 整合（Facebook 廣告追蹤）
- [ ] Microsoft Clarity 整合（Heatmap）
- [ ] Structured Data JSON-LD（FAQ / Organization / Breadcrumb）
- [ ] 圖片 WebP 優化 + Lazy Loading
- [ ] 404 頁面設計

**預估時間：** 3 週  
**驗收標準：**
- Blog 頁面 Google Search Console 提交 + 已收錄
- Lighthouse 分數：Performance > 85；SEO > 95；Accessibility > 80
- 所有 Structured Data 通過 Google Rich Results Test

---

### Phase 3：上線後優化（Month 3+）

**目標：** 數據驅動優化，A/B 測試，客戶見證擴充

**Deliverables：**
- [ ] A/B 測試框架（VWO / Google Optimize 替代方案，或 Nuxt 自訂 A/B 邏輯）
- [ ] Hero 標題 / CTA 文字 A/B 測試
- [ ] 定價頁 A/B 測試（HK$298 vs HK$198 Starter 測試，如 Eric 決定）
- [ ] 客戶見證 / Case Study Section（上線後 3 個月加入真實案例）
- [ ] Blog 內容持續更新（每月 2 篇）
- [ ] 競品比較頁面（/compare）
- [ ] 多語言考慮（英文版）

**驗收標準：** 依 KPIs 達標（見 Section 1.3）

---

## 9. 風險與 Fallback

| 風險 | 影響 | 概率 | Fallback |
|------|------|------|----------|
| **圖片生成質量唔達標** | 中 | 中 | 用 Unsplash / Pexels stock photo 暫代，後期換回生成圖；關鍵圖片提前 review |
| **行業內容準確性問題** | 高 | 低 | Phase 0 設立內容 review 流程，由 Eric / Area2 逐項確認，不直接上線 |
| **Lighthouse 部署問題** | 中 | 低 | 保留本地 build + 備用 Cloudflare Pages 靜態托管作 fallback |
| **表單郵件送達問題** | 高 | 中 | 主用 Nuxt server API 發送；備用 EmailJS / Resend API |
| **Core Web Vitals 唔達標** | 中 | 中 | Phase 1 完成後立即跑 Lighthouse audit；優先修 LCP（圖片尺寸、preload）|
| **伺服器月費超支** | 低 | 低 | 選最低規格 Lighthouse instance（HK$100-150/月），不足時再升級 |
| **域名 .hk 申請延遲** | 中 | 低 | 先用 Tencent Lighthouse 分配 IP 開發，不阻礙 Phase 1 |
| **Brand 素材未到位** | 低 | 中 | Phase 0 如未有 Logo，用 AI 生成 placeholder logo，Phase 1 前換正式版 |
| **SEO 排名上升慢** | 中 | 高（正常現象）| SEO 係長期工程；Phase 1 先做技術 SEO；Phase 2 加 blog 做長尾關鍵詞；設 3-6 個月預期 |

---

## 10. 驗收標準

### 10.1 功能驗收

- [ ] 行業互動 Tab：每個行業切換後，痛點和解決方案正確更新
- [ ] Role Play Demo：5 個身份各自有獨立對話腳本，打字機效果流暢
- [ ] 技能場景：4 個場景 Tab 切換正常，技能組合說明清晰
- [ ] CTA 按鈕：所有頁面的「WhatsApp」按鈕跳轉至 `https://wa.me/85296456787`
- [ ] 聯絡表格：提交後發送至 eric@hostlink.com.hk，用戶收到確認訊息
- [ ] Blog：文章列表顯示正常，單篇文章 Markdown 渲染正確
- [ ] 404 頁面：訪問不存在 URL 顯示友善 404 頁面
- [ ] 所有外部連結：在新 Tab 打開

### 10.2 性能驗收

| 指標 | Desktop 要求 | Mobile 要求 |
|------|-------------|------------|
| LCP | < 2.5s | < 3.0s |
| FID / INP | < 100ms | < 200ms |
| CLS | < 0.1 | < 0.1 |
| Lighthouse Performance | > 85 | > 75 |
| Lighthouse SEO | > 95 | > 95 |
| Lighthouse Accessibility | > 80 | > 80 |

### 10.3 SEO 驗收

- [ ] 每頁有唯一 Title（< 60 字）
- [ ] 每頁有唯一 Meta Description（< 160 字）
- [ ] 每頁有正確 OG Tags（og:title / og:description / og:image）
- [ ] Sitemap.xml 存在且所有頁面收錄
- [ ] Robots.txt 正確設定（不 block 重要頁面）
- [ ] 所有圖片有 alt text
- [ ] Google Search Console 已驗證並提交 Sitemap
- [ ] Structured Data 通過 Google Rich Results Test

### 10.4 Analytics 驗收

- [ ] GA4 接收 pageview 數據
- [ ] 以下 GA4 Events 正確觸發：
  - `whatsapp_click`（所有 WhatsApp 按鈕）
  - `form_submit`（聯絡表格成功提交）
  - `demo_interaction`（行業 Tab 切換 / Role Play 身份選擇）
  - `pricing_view`（訪問定價頁）
- [ ] Meta Pixel 正確觸發 PageView event

---

## 11. SEO 策略

### 11.1 關鍵詞矩陣

| 關鍵詞 | 搜尋意圖 | 對應頁面 | 優先級 |
|--------|---------|---------|--------|
| 香港 AI 助手 | 資訊 / 商業 | 首頁 | P0 |
| WhatsApp AI 助手 | 商業 | 首頁 | P0 |
| 香港 SME AI 工具 | 商業 | 首頁 / Blog | P0 |
| ChatGPT 香港 | 資訊 | Blog（香港用法指南）| P1 |
| WhatsApp AI 比較 | 商業 | Blog | P1 |
| 香港數據安全 AI | 商業 | /security | P1 |
| PDPO 合規 AI | 商業 | /security | P1 |
| 香港 AI 助手推薦 2026 | 商業 | Blog | P1 |
| 中小企 AI 工具 香港 | 商業 | Blog | P1 |
| 廣東話 AI | 資訊 | 首頁 | P0 |
| AI 月費 香港 | 商業 | /pricing | P1 |

### 11.2 On-Page SEO 規範

每頁必須包含：
```html
<!-- 每頁唯一 Title -->
<title>{頁面標題} | PersonAI — 香港 WhatsApp AI 助手</title>

<!-- Meta Description -->
<meta name="description" content="{唯一描述，包含目標關鍵詞，< 160 字}">

<!-- OG Tags -->
<meta property="og:title" content="{標題}">
<meta property="og:description" content="{描述}">
<meta property="og:image" content="https://personai.hk/og/{頁面專屬圖片}.jpg">
<meta property="og:url" content="https://personai.hk/{路徑}">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">

<!-- Canonical -->
<link rel="canonical" href="https://personai.hk/{路徑}">
```

### 11.3 Structured Data（JSON-LD）

首頁加入 Organization + WebSite：
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PersonAI",
  "url": "https://personai.hk",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+85296456787",
    "contactType": "customer service",
    "areaServed": "HK",
    "availableLanguage": ["Cantonese", "English"]
  }
}
```

FAQ 頁面加入 FAQPage Structured Data（每條 Q&A）。

---

## 12. Analytics / Conversion Tracking 規格

### 12.1 GA4 Events

| Event Name | 觸發條件 | Parameters |
|------------|---------|------------|
| `whatsapp_click` | 任何 WhatsApp CTA 點擊 | `{location: "hero/security/pricing/footer"}` |
| `form_submit` | 聯絡表格成功提交 | `{form_type: "contact"}` |
| `trial_start_click` | 「免費試用」按鈕點擊 | `{plan: "starter/business"}` |
| `demo_industry_select` | 行業痛點 Tab 切換 | `{industry: "restaurant/retail/..."}` |
| `demo_persona_select` | Role Play 身份選擇 | `{persona: "boss/marketer/..."}` |
| `demo_scenario_view` | 技能場景 Tab 切換 | `{scenario: "meeting/complaint/..."}` |
| `pricing_page_view` | 訪問定價頁 | — |
| `faq_expand` | 展開 FAQ 條目 | `{question: "..."}` |
| `scroll_depth` | 滾動深度 | `{depth: 25/50/75/100}` |

### 12.2 Conversion Funnel

```
訪客到達 (100%)
      ↓
Hero 往下滾動 (60-70%)  ← 追蹤 scroll_depth 50
      ↓
行業 Demo 互動 (30-40%)  ← 追蹤 demo_industry_select
      ↓
定價頁瀏覽 (15-25%)  ← 追蹤 pricing_page_view
      ↓
WhatsApp 點擊 / 表單提交 (3-8%)  ← 主要轉換目標
```

---

## 13. A/B Testing 計劃

### Phase 3 A/B Tests

| Test | 變體 A | 變體 B | 成功指標 | 最小樣本 |
|------|--------|--------|---------|---------|
| **Hero 標題** | 「住喺你 WhatsApp 的 24小時全能 AI 助手」 | 「無需 VPN，廣東話直接用 ChatGPT + Claude + Gemini」 | WhatsApp 點擊率 | 500 訪客/變體 |
| **CTA 文字** | 「14 日免費試用 →」 | 「WhatsApp 立即咨詢 →」 | 點擊率 | 500 訪客/變體 |
| **定價位置** | 定價在 Security Section 之後 | 定價在 Role Play Demo 之後 | 定價頁停留時間 | 300 訪客/變體 |
| **Starter 定價** | HK$298/月 | HK$198/月 | 試用轉換率 | 200 訪客/變體 |

---

## 14. 法律頁面要求

### 14.1 私隱政策（/privacy）必須包含

- 收集哪些個人資料（姓名、WhatsApp 號碼、Email、對話內容）
- 如何使用資料（服務提供、技術支援）
- 資料儲存位置（用戶對話記錄儲存於 Tencent Cloud 亞太數據中心，日本地區；LLM inference 由第三方 AI 模型服務商提供）
- 資料保留期限
- 用戶的 PDPO 權利（查閱、更正、刪除）
- Cookie 政策
- 第三方服務（Stripe / Google Analytics / Meta Pixel）
- 聯絡方式：eric@hostlink.com.hk

### 14.2 服務條款（/terms）必須包含

- 服務描述
- 用戶責任（WhatsApp 帳號使用）
- 付款條款（月費、退款政策）
- 服務中止條件
- 免責聲明（AI 輸出準確性）
- 知識產權
- 修改條款權利
- 適用法律：香港特別行政區法律

---

## 15. 響應式設計規範

### 15.1 Breakpoints

| 名稱 | 像素範圍 | 代表設備 |
|------|---------|---------|
| Mobile (xs) | 320 - 639px | iPhone SE, Android |
| Mobile (sm) | 640 - 767px | iPhone 15, 大 Android |
| Tablet (md) | 768 - 1023px | iPad Mini |
| Tablet (lg) | 1024 - 1279px | iPad Air, 小 Laptop |
| Desktop (xl) | 1280 - 1535px | 13" MacBook |
| Desktop (2xl) | 1536px+ | 外接 Monitor |

### 15.2 各 Section 響應規則

| Section | Desktop | Mobile |
|---------|---------|--------|
| Hero | 兩欄（文字左 + 圖片右） | 單欄（文字上 + 圖片下）|
| 行業 Tab | 水平 Tab + 左右兩欄內容 | 垂直 Accordion |
| Role Play Demo | 聊天界面 + 身份選擇並排 | 身份選擇在上，聊天在下 |
| 技能場景 | Tab + 並排內容 | Tab + 垂直排列 |
| Persona Cards | 3 欄 Grid | 1 欄卡片滾動 |
| 安全 Section | 2 欄（文字 + 圖片） | 單欄 |
| 定價 Cards | 3 欄並排 | 1 欄，Business 置頂 |
| FAQ | 2 欄 Accordion | 單欄 Accordion |

### 15.3 移動端必要優化

- WhatsApp 按鈕始終固定在右下角（z-index 最高）
- 行業 Tab 支援左右滑動（Touch/Swipe 手勢）
- 字體大小最小 16px（防止手機自動縮放）
- 所有 CTA 按鈕 Touch Target ≥ 44×44px

---

## 16. 附錄

### 16.1 CTA 規格

**WhatsApp CTA 連結：**
```
https://wa.me/85296456787?text=你好，我想了解 PersonAI
```
所有 WhatsApp 按鈕統一使用此連結（帶預設訊息）。

**聯絡表格 Email：** eric@hostlink.com.hk

**表格欄位：**
- 姓名（必填）
- WhatsApp 號碼（必填）
- Email（選填）
- 公司名稱（選填）
- 感興趣的方案（下拉：Starter / Business / Enterprise / AI 教練）
- 查詢內容（大文字框）
- reCAPTCHA v3（隱藏）

### 16.2 Header Navigation

```
[PersonAI Logo] [功能] [定價] [安全] [AI 教練] [關於] | [🟢 WhatsApp 試用]
```

- 固定在頂部（sticky）
- 滾動後加 shadow
- Mobile：漢堡 Menu
- CTA 按鈕：綠色（WhatsApp 品牌色 #25D366）

### 16.3 Footer 內容

```
PersonAI  |  Hostlink (HK) Limited × Area2 (HK) Limited

[產品]          [公司]          [資源]          [聯絡]
功能            關於我們        Blog / 知識庫   WhatsApp: +85296456787
定價            Hostlink        FAQ             Email: eric@hostlink.com.hk
安全            Area2           私隱政策
AI 教練                         服務條款

© 2026 PersonAI. Hostlink (HK) Limited × Area2 (HK) Limited. 版權所有.
香港特別行政區 | 受 PDPO 保護 | 用戶對話記錄存亞太區（日本）
```

### 16.4 術語表

| 術語 | 說明 |
|------|------|
| SME | Small and Medium Enterprise，中小型企業 |
| PDPO | 個人資料（私隱）條例，香港私隱法規 |
| CTA | Call to Action，行動呼籲按鈕 |
| LCP | Largest Contentful Paint，Core Web Vitals 性能指標 |
| SSG | Static Site Generation，靜態網站生成 |
| OG Tags | Open Graph Tags，社交媒體分享 metadata |

### 16.5 參考資料

- Marketing Research Report v4.6 — `data/projects/personai/personai-market-research-v4.6.md`
- 產品計劃書 v3 — `data/projects/personai/personal-ai-assistant-plan-v3.md`
- Development Plan Writer Skill — `skills/development-plan-writer/SKILL.md`
- Hostlink 官網 — https://www.hostlink.com.hk/
- Area2 官網 — https://www.area2.com/
- Nuxt 3 文檔 — https://nuxt.com/
- **Nuxt UI SaaS Template（指定基礎模版）** — https://github.com/nuxt-ui-templates/saas
- Nuxt UI 組件文檔 — https://ui.nuxt.com
- Nuxt SaaS Template Live Demo — https://saas-template.nuxt.dev/
- Tencent Lighthouse Cloud — https://lighthouse.tencentcloud.com/
- Cloudflare (DNS + CDN) — https://cloudflare.com/

---

## 17. 執行 Checklist（按 Phase）

### Phase 0 Checklist
- [ ] 確認域名（Eric 決定）
- [ ] 確認品牌色板 + Logo（Area2 提供）
- [ ] 確認行業痛點內容（7 個行業，Eric review）
- [ ] 確認 Role Play 5 個對話腳本（Eric / Area2 review）
- [ ] 確認技能場景 4 個（Eric review）
- [ ] 生成所有圖片（`skills/image-generation`）
- [ ] 撰寫 5 篇 Blog 初稿（SEO 關鍵詞 Eric 確認）
- [ ] 建立 GA4 Property + 轉換目標設定
- [ ] GitHub Repo 建立 + Tencent Lighthouse 部署設定

### Phase 1 Checklist
- [ ] 用 `npm create nuxt@latest -- -t ui/saas` 初始化項目
- [ ] 調整 Template Design Tokens（鎖定 Light Mode、淺色背景、品牌配色）
- [ ] 改造 Template Landing Page → 首頁所有 Section
- [ ] 行業互動 UI（Vue component + data-driven）
- [ ] Role Play Demo（Vue component + 腳本 JSON）
- [ ] 技能場景（Vue component）
- [ ] 新增 /security 頁面（資訊安全）
- [ ] 新增 /ai-coach 頁面（AI 教練）
- [ ] 改造 Template Pricing → 定價頁（三方案 + AI 教練）
- [ ] 新增 /contact（聯絡表格 + Nuxt server API，運行於 Lighthouse）
- [ ] 改造 Template Blog → Blog / 案例分享
- [ ] 改造 Template Docs → 使用指南 / 知識庫
- [ ] SEO 基礎（meta / OG / sitemap / robots）
- [ ] WhatsApp 浮動按鈕
- [ ] 響應式測試（iOS Safari / Chrome Android / Desktop）
- [ ] Lighthouse audit + 修復
- [ ] GA4 Events 測試

### Phase 2 Checklist
- [ ] Blog 頁面 + 5 篇文章
- [ ] FAQ 完整頁
- [ ] About / 公司頁
- [ ] 安全完整頁
- [ ] 法律頁面（Privacy / Terms）
- [ ] 客戶見證預留位置
- [ ] Meta Pixel + Clarity 整合
- [ ] Structured Data JSON-LD
- [ ] OG Image 優化（每頁獨立）
- [ ] Google Search Console 提交

---

*PersonAI SaaS 官方網站開發計劃書 v1.2 | 2026-03-22*  
*撰寫：A2 (OpenClaw AI Agent)*  
*基於：Marketing Research Report v4.6 + 產品計劃書 v3*  
*合作主體：Hostlink (HK) Limited × Area2 (HK) Limited*

---

## ⚠️ 修正記錄

### 2026-03-23：v1.2 → v1.3 誠實性修正

**背景：** Eric 指出 v1.2 存在兩個重大誠實性問題，PersonAI 底層使用 GitHub Copilot API，LLM inference 會經美國伺服器，部分聲明與事實不符。

---

#### 修正 1：移除不實的數據主權聲明

**問題：** PersonAI 底層使用 GitHub Copilot API → LLM inference 經美國伺服器，但文件多處聲稱「數據 100% 亞太區」「絕不經美國」「不受 CLOUD Act 管轄」「APPI + PDPO 雙重認證」，構成誤導。

**修改位置及內容：**

| 位置 | 舊文字 | 新文字 |
|------|--------|--------|
| 版本標題 | v1.2 | v1.3 |
| 痛點表格（1.2節） | 「數據存放亞太區（日本），唔受美國 CLOUD Act 管轄」 | 「用戶對話記錄儲存亞太區（日本），唔做廣告、唔訓練模型，PDPO 合規」 |
| Hero 副標題 | 「數據100%亞太區，絕不經美國」 | 「數據存亞太區（日本），唔訓練模型・PDPO 合規」 |
| 信任標誌列 | 「Tencent Cloud 亞太數據中心（日本）」（隱含 100% 亞太） | 「Tencent Cloud ISO 27001 \| 數據記錄存亞太區（日本）」 |
| /security Wireframe | 「100% 亞太區（日本）…唔受 CLOUD Act 管轄」 | 「用戶對話記錄儲存亞太區（日本）…唔訓練模型・PDPO 合規」 |
| /security Wireframe | 「日本 APPI 嚴格保護」 | 移除（改為「PDPO 合規，可簽 DPA」） |
| Tencent Cloud section 認證列 | 「ISO 27001 \| SOC 2 \| CSA STAR \| PDPO \| APPI \| 防火牆」 | 「ISO 27001 \| SOC 2 \| CSA STAR \| PDPO \| 防火牆」（移除 APPI） |
| 私隱政策要求（14.1節） | 「不存放於美國」 | 「LLM inference 由第三方 AI 模型服務商提供」 |
| Footer | 「數據 100% 亞太區，絕不經美國」 | 「用戶對話記錄存亞太區（日本）」 |

**保留的合規聲明：**
- ✅ 用戶對話記錄儲存亞太區（日本）
- ✅ 唔訓練模型
- ✅ 唔做廣告
- ✅ PDPO 合規
- ✅ Tencent Cloud ISO 27001 / SOC 2 / CSA STAR

---

#### 修正 2：「主動提醒/推送」→「排程提醒/定時提醒」

**問題：** PersonAI 需要用戶先設定排程才會提醒，並非「主動」發起。使用「主動」字眼會誤導用戶期望。

**修改位置：**

| 位置 | 舊文字 | 新文字 |
|------|--------|--------|
| Role Play Demo 對話（5.2節） | 「已設定 3pm 提醒 ✓ / 我會在 2:45pm 發你議程摘要」 | 「已設定 3pm 排程提醒 ✓ / 我會喺 2:45pm 按排程發你議程摘要」 |

> **注意：** v1.2 文件中大多數「提醒」描述均為用戶主動設定後的排程觸發（如「設定跟進提醒」「睇樓提醒」），屬正確用法，毋需修改。只有上述 Role Play Demo 中的 AI「主動預告」措辭被修正。
