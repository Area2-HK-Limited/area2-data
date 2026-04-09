# PersonAI SaaS 官方網站 — 開發計劃書 v1.5

**產品：** PersonAI — 香港 SME 專屬 WhatsApp AI 助手  
**推出主體：** Hostlink (HK) Limited × Area2 (HK) Limited 聯乘  
**文件類型：** 網站前端開發計劃書  
**版本：** v1.5 — 2026-03-23（新增 Chapter 19 AI 模型開發分工方案）  
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
├── /early-access (優先登記 — 免費試用 Landing Page) ⭐ 新增 v1.4
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

> 所有 AI 生成圖片使用 `skills/image-generation`（Nano Banana Pro via Google AI Studio API）

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

> 💡 **AI 模型開發分工：** 本項目採用三模型協作策略 — GPT-5.4（架構 + UX）、Claude Sonnet 4.6（代碼開發 + 修正）、Gemini 3 Pro（全站 QA）。詳細分工見 **Chapter 19**。

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
- [ ] **⭐ 優先：`/early-access` 優先登記頁面**（見 Chapter 18，Lead Generation 核心工具，需最先上線）
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

## 18. Early Access 優先登記頁面（/early-access）⭐ v1.4 新增

### 18.1 頁面定位與目標

| 項目 | 詳情 |
|------|------|
| **URL** | `/early-access` |
| **定位** | Lead Generation + 市場需求驗證工具 |
| **核心目標** | 收集首 50 名潛在用戶 Email / WhatsApp，建立 Waitlist |
| **行銷用途** | 測試市場回響（validate demand），預熱正式上線 |
| **設計優先級** | ⭐ Phase 1 最優先開發項 — 在主站其他頁面完成前先上線此頁 |

**核心賣點（頁面主訴求）：**
- ✅ 免費試用 2 個月（唔使俾錢）
- ✅ 免信用卡登記（零風險）
- ✅ 名額有限：只限首 50 名
- ✅ 優先體驗 PersonAI 全功能

---

### 18.2 頁面 Wireframe

```
┌─────────────────────────────────────────────────────────┐
│ HEADER: [PersonAI Logo]                  [了解更多 PersonAI →] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  HERO SECTION（淺藍漸層 #EFF6FF → #FFFFFF，全螢幕高）    │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  🏷️ 限時優惠 · 首 50 名                          │   │
│  │                                                  │   │
│  │  H1：免費試用 PersonAI                            │   │
│  │      你嘅 WhatsApp AI 助手                        │   │
│  │                                                  │   │
│  │  副標題：首 50 名登記用戶，免費體驗 2 個月           │   │
│  │          免信用卡 · 隨時取消 · 零風險               │   │
│  │                                                  │   │
│  │  📊 名額進度條                                    │   │
│  │  ▓▓▓▓▓▓░░░░░░░░░░░░  已登記 XX / 50 名           │   │
│  │  「仲剩 XX 個名額，額滿即止」                      │   │
│  │                                                  │   │
│  │  [⬇ 立即登記（跳至表單）]                         │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  核心功能簡介 SECTION（白底，4 欄 Grid）                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │💬 WhatsApp│ │⚡ 60+  │ │🧠 永久 │ │⏰ 排程  │          │
│  │原生AI助手│ │技能整合│ │記憶系統│ │+自動化  │          │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
│  [了解 PersonAI 全部功能 →]                              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  登記表單 SECTION（淺藍底 #EFF6FF）                       │
│  ┌──────────────────────────────────────────────────┐   │
│  │  🎯 搶先登記 — 名額有限，額滿即止                  │   │
│  │                                                  │   │
│  │  [姓名 *]                [WhatsApp 號碼 *]        │   │
│  │  [公司 Email *]          [公司名稱 *]             │   │
│  │  [你最想 AI 幫你做咩？ — 多選 + 其他自填]          │   │
│  │                                                  │   │
│  │  ☐ 我已閱讀並同意《免責聲明》《服務條款》《私隱聲明》│   │
│  │                                                  │   │
│  │  ┌────────────────────────────────────────────┐  │   │
│  │  │           🚀 搶先登記（免費）               │  │   │
│  │  └────────────────────────────────────────────┘  │   │
│  │  🔒 我哋唔會 spam 你，唔會用你嘅數據訓練 AI 模型   │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Social Proof / Trust SECTION（白底）                    │
│  「由 Hostlink 技術團隊 × Area2 數碼行銷打造」            │
│  Tencent Cloud ISO 27001 | PDPO 合規 | 唔訓練 AI 模型    │
│                                                         │
│  FAQ 小區塊（3-4 條最常問）                              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ FOOTER: © PersonAI | 免責聲明 | 服務條款 | 私隱聲明     │
└─────────────────────────────────────────────────────────┘
```

---

### 18.3 各 Section 詳細規格

#### 18.3.1 Hero Section

| 元素 | 內容 |
|------|------|
| **Badge** | 🏷️「限時優惠 · 首 50 名」（橙色 Badge） |
| **H1 主標題** | 免費試用 PersonAI — 你嘅 WhatsApp AI 助手 |
| **副標題** | 首 50 名登記用戶免費體驗 2 個月，免信用卡 |
| **名額進度條** | 動態顯示「已登記 X / 50 名」（連接後端 API 或靜態設定） |
| **剩餘名額文字** | 「仲剩 **{N}** 個名額，額滿即止」（數字橙色加粗） |
| **主 CTA** | 「⬇ 立即登記（跳至表單）」— 綠色大按鈕，anchor 到 `#register-form` |
| **背景** | 淺藍漸層 `#EFF6FF → #FFFFFF`，加入微細幾何紋理 |
| **配圖** | 3D Pixar 風格插圖：WhatsApp 對話界面 + AI 助手小人，輕鬆感 |

> ⚠️ 名額進度條實際數字需後端 API 提供（見 18.4.1 技術方案），初期可暫以靜態數字（如「12/50」）展示

---

#### 18.3.2 核心功能簡介 Section

4 個重點功能卡片（唔需要詳細，目的係引導用戶對 PersonAI 建立基本認知，詳情指向主站）：

| Icon | 標題 | 描述（1 句話）|
|------|------|-------------|
| 💬 | **WhatsApp 原生 AI 助手** | 唔使轉 App，WhatsApp 廣東話直接用 |
| ⚡ | **60+ 技能一站整合** | 搜尋、翻譯、文案、排程、分析，全部有 |
| 🧠 | **永久記憶系統** | AI 記住你係誰，越用越識你的工作習慣 |
| ⏰ | **排程提醒 + 自動化執行** | 設定一次，AI 按排程幫你執行重複任務 |

底部：「[了解 PersonAI 全部功能 →]」連結到主站 `/features`

---

#### 18.3.3 登記表單 Section

**表單 ID：** `register-form`（Hero CTA 的 anchor 目標）

**必填欄位：**
| 欄位 | 類型 | 驗証 |
|------|------|------|
| 姓名 | Text | 必填，最少 2 字 |
| 公司 Email | Email | 必填，格式驗証 + **禁止免費 Email 域名**（見下方規則）|
| WhatsApp 號碼 | Tel | 必填，格式驗証（香港：8位數字）|
| 公司名稱 | Text | 必填，最少 2 字 |

> ⚠️ **Email 禁用免費域名規則（Target: SME）**
> 禁止以下 domain 登記：`gmail.com`、`yahoo.com`、`hotmail.com`、`outlook.com`、`icloud.com`、`163.com`、`qq.com`、`126.com` 等
> 驗証失敗提示：「請使用公司 Email 登記（例如 name@yourcompany.com）」
> 原因：PersonAI 目標客戶係 SME，免費 Email 無法驗証公司身份，亦過濾非目標用戶

**選填欄位：**
| 欄位 | 類型 | 選項 |
|------|------|------|
| 你最想 AI 幫你做咩？ | **Multi-select checkboxes** + 自由填寫 | ☐ 文案創作 / ☐ 排程提醒 / ☐ 資料搜尋分析 / ☐ 翻譯（多語言）/ ☐ 會議紀錄 / 語音轉文字 / ☐ 客戶管理 (CRM) / ☐ 社交媒體管理 / ☐ 圖片生成 / ☐ 自動化工作流程 / ☐ 其他（請填寫：[___________]）|

> 多選欄位可一次選多個，方便分析最受歡迎需求。「其他」欄位開放自由填寫，捕捉未預設嘅需求。

**同意條款 checkbox（必填，提交前必須勾選）：**
```
☐ 我已閱讀並同意《免責聲明》、《服務條款》及《私隱聲明》 *
```
- 三個連結各自開新分頁顯示完整內容
- 未勾選時「搶先登記」按鈕 disabled（灰色）
- 勾選後按鈕變為綠色可點擊

**提交按鈕：** 「🚀 搶先登記（免費）」— 大號綠色按鈕，全寬（未勾選同意條款時 disabled）

**免責聲明（按鈕下方）：**
> 🔒 我哋唔會 spam 你，你嘅資料只用於 PersonAI 試用安排，唔會用你嘅數據訓練 AI 模型

**提交後體驗（感謝頁面 / Inline 確認）：**
```
🎉 多謝你嘅支持！你係第 XX 位登記者

因反應熱烈，我哋需要逐一處理登記，
預計 1-3 個工作天內，會有專人以 WhatsApp 聯絡你跟進。

請留意你嘅 WhatsApp 訊息 📱

分享畀朋友：[WhatsApp 分享] [複製連結]
了解更多：[回到 PersonAI 主站]
```

---

#### 18.3.4 Social Proof / Trust Section

**信任標誌列：**
- 由 Hostlink 技術團隊 × Area2 數碼行銷打造
- Tencent Cloud ISO 27001
- PDPO 合規
- 唔會用你嘅數據訓練 AI 模型

**FAQ 小區塊（Accordion，3-4 條）：**

| 問題 | 答案 |
|------|------|
| 免費試用係真係免費嗎？ | 係！首 50 名登記用戶可以免費體驗 PersonAI 全功能 2 個月，唔需要信用卡，唔會自動扣費。 |
| 免費試用之後點算？ | 免費期完結後，你可以自行決定係咪繼續訂閱付費方案，唔會強制。我哋會提前通知你試用期到期日。 |
| 我嘅 WhatsApp 號碼安全嗎？ | 你嘅資料只用於 PersonAI 試用安排，唔會做廣告用途，唔會訓練 AI 模型，PDPO 合規。 |
| 幾時可以開始使用？ | PersonAI 現正準備開放，你登記後會係第一批收到通知嘅用戶，我哋目標係首 50 名登記者優先開放。 |

---

### 18.4 技術規格

#### 18.4.1 表單數據儲存方案

**推薦方案：Airtable（Phase 1 首選）**

| 考慮因素 | Airtable | Google Sheets | 自建 API |
|---------|---------|---------------|---------|
| 設定難度 | ✅ 低 | ✅ 低 | ❌ 高 |
| 即時查看 | ✅ 直接 Airtable 介面 | ✅ Google Sheets 介面 | — |
| API 整合 | ✅ REST API，穩定 | ⚠️ 需 Apps Script | ✅ 靈活 |
| 自動化（Email 觸發）| ✅ Airtable Automations 內建 | ⚠️ 需 Apps Script | — |
| 費用 | 免費（1,000 records/base）| 免費 | 開發時間 |
| 名額計算 | ✅ 直接 Count records | ✅ COUNTA 公式 | ✅ DB query |

**Airtable 實施方案：**
1. 建立 Airtable Base：`PersonAI-Early-Access-Waitlist`
2. 欄位：姓名、公司 Email、WhatsApp、公司名稱、最想 AI 做咩（多選陣列）、其他需求（自填）、登記時間、UTM Source、UTM Medium、UTM Campaign、序號（Auto-number）、同意條款時間
3. Nuxt server API endpoint：`POST /api/early-access/register` → 寫入 Airtable via REST API
4. 名額進度條：`GET /api/early-access/count` → 讀取 Airtable records 數量（可加 cache，每 5 分鐘更新）
5. Airtable Automation：新 record 建立 → 自動發送確認 Email 給用戶

**Fallback 方案：**
- 如 Airtable API 失敗 → fallback 發送 Email 到 eric@hostlink.com.hk + ai-agent@area2.com（確保唔漏登記）

---

#### 18.4.2 Email 確認機制

**確認 Email（自動發送給登記用戶）：**
- 發件人：PersonAI `noreply@personai.hk` 或暫用 `ai-agent@area2.com`
- 主旨：「🎉 你已成功登記 PersonAI 早期試用！」
- 內容：
  - 確認登記序號（「你係第 XX 位」）
  - 預計通知時間
  - 分享連結（鼓勵轉介）
  - PersonAI 簡介 + 主站連結

> Phase 1 暫時唔做 Double Opt-In（避免增加登記摩擦）。Phase 2 如有 EDM 需求再評估是否加入。

---

#### 18.4.3 WhatsApp 自動回覆確認

**Phase 1 暫不實施**（需 WhatsApp Business API，增加複雜度）

**Phase 2 可選擴展：**
- 登記後，自動通過 WhatsApp Business API 發送確認訊息到用戶 WhatsApp 號碼
- 內容：「你好 {姓名}！你已成功登記 PersonAI 早期試用，你係第 {XX} 位 🎉」
- 條件：需要用戶先在 WhatsApp 發訊息給 PersonAI 號碼，或獲取 opt-in 授權

---

#### 18.4.4 頁面性能要求

| 指標 | 要求 |
|------|------|
| **頁面載入速度** | LCP < 2.0s（Desktop），< 2.5s（Mobile）— 比主站更嚴 |
| **First Input Delay** | < 100ms |
| **CLS** | < 0.1 |
| **設計優先** | Mobile-first — 因大量訪客來自 WhatsApp / Social Media 分享 |
| **Lighthouse Performance** | > 90 |

---

### 18.5 行銷整合規格

#### 18.5.1 UTM 追蹤（渠道來源分析）

所有推廣連結必須帶 UTM 參數，儲存至 Airtable 每筆登記記錄：

| 渠道 | UTM 示例連結 |
|------|-------------|
| WhatsApp 廣播 | `personai.hk/early-access?utm_source=whatsapp&utm_medium=broadcast&utm_campaign=early-access-q2` |
| Facebook 廣告 | `personai.hk/early-access?utm_source=facebook&utm_medium=paid&utm_campaign=early-access-q2` |
| Instagram Stories | `personai.hk/early-access?utm_source=instagram&utm_medium=organic&utm_campaign=story` |
| Email EDM | `personai.hk/early-access?utm_source=email&utm_medium=edm&utm_campaign=early-access-q2` |
| 口碑轉介 | `personai.hk/early-access?utm_source=referral&utm_medium=word-of-mouth` |

**Nuxt 前端實施：** 讀取 URL `?utm_*` 參數 → 存入 localStorage → 表單提交時一併傳送到後端 API

---

#### 18.5.2 GA4 事件追蹤

| Event | 觸發條件 | Parameters |
|-------|---------|------------|
| `early_access_page_view` | 頁面載入 | `{utm_source, utm_medium, utm_campaign}` |
| `early_access_hero_cta_click` | 點擊「立即登記」按鈕 | `{remaining_slots: N}` |
| `early_access_form_start` | 開始填寫表單（任何欄位 focus）| — |
| `early_access_form_submit` | 表單成功提交 | `{utm_source, ai_use_case: "..."}` |
| `early_access_share_click` | 點擊「分享畀朋友」| `{share_method: "whatsapp/copy"}` |
| `early_access_main_site_click` | 點擊「了解更多 PersonAI」| `{from: "features/footer"}` |

---

#### 18.5.3 Facebook Pixel 事件

| Pixel Event | 觸發條件 |
|-------------|---------|
| `PageView` | 頁面載入 |
| `Lead` | 表單成功提交（主要轉換目標）|
| `ViewContent` | 頁面停留 > 30 秒 |

> **Facebook CAPI（Conversions API）可選：**
> Phase 2 加入 Facebook CAPI，讓 Server-side 直接向 Facebook 報告 `Lead` 事件，提升廣告歸因準確性（尤其 iOS 14+ 後 Pixel 準確率下降）。實施需 Nuxt server API 整合 Facebook CAPI SDK。

---

### 18.6 市場驗證指標（Eric 想睇嘅數據）

| 指標 | 追蹤方式 | 目標 |
|------|---------|------|
| **登記轉換率** | GA4：`early_access_page_view` → `early_access_form_submit` | > 5%（Social 渠道）|
| **渠道來源分佈** | Airtable UTM 欄位 + GA4 Source/Medium | 了解哪個渠道效果最好 |
| **「最想 AI 幫你做咩」** | Airtable 回應分析 | 指導 PersonAI 功能優先級 |
| **50 個名額填滿時間** | Airtable 登記日期 + 序號 | 評估市場需求強度 |
| **分享率** | GA4：`early_access_share_click` | 評估用戶意願傳播度 |
| **表單棄填率** | GA4：`early_access_form_start` vs `early_access_form_submit` | 識別表單摩擦點 |

---

### 18.7 響應式設計規格

| Section | Desktop | Mobile |
|---------|---------|--------|
| Hero | 左文字 + 右插圖，兩欄 | 單欄，圖片在下 |
| 功能卡片 | 4 欄 Grid | 2×2 Grid（再小為 1 欄）|
| 登記表單 | 兩欄佈局（姓名+WhatsApp, Email+公司名）| 單欄，全寬 |
| Trust Section | 3 欄 | 單欄 |
| FAQ | 全寬 Accordion | 全寬 Accordion |

**Mobile 特別要求：**
- Hero 名額進度條文字清晰可讀（字體 ≥ 16px）
- 表單欄位足夠大（Touch Target ≥ 44px 高）
- 提交按鈕全寬、顯眼（高度 ≥ 56px）
- 感謝頁「分享」按鈕優先顯示 WhatsApp 分享（最常用）

---

### 18.8 頁面推廣策略

| 渠道 | 內容 | 執行時間 |
|------|------|---------|
| **WhatsApp 廣播** | 個人化訊息 + 早鳥優惠連結 | 頁面上線即發送 |
| **Hostlink 客戶 Email** | Eric 現有客戶 EDM | 頁面上線後 D+1 |
| **Area2 社交媒體** | Facebook / Instagram 有機帖文 | 頁面上線即發 |
| **Facebook 廣告** | 精準定向：香港 SME 老闆 | 視預算，Phase 1 後期 |
| **LinkedIn** | Hiram / Eric 個人帖文 | 頁面上線後 D+2 |
| **口碑轉介** | 感謝頁加入「分享畀朋友」功能 | 整合至感謝頁 |

---

### 18.9 開發 Checklist（/early-access 專項）

#### Phase 0 前置工作
- [ ] 確認 Airtable Base 建立 + API Key
- [ ] 確認感謝頁面文字（Eric / Area2 review）
- [ ] 確認「你最想 AI 幫你做咩」多選選項（業務確認）
- [ ] 確認 Email 確認信設計（由 Area2 EDM 團隊提供或 A2 生成）
- [ ] 確認名額初始顯示數字（靜態 or 真實 API）
- [ ] **免責聲明、服務條款、私隱聲明 文稿確認**（法律 review）
- [ ] **免費 Email 域名黑名單確認**（gmail.com / yahoo.com / hotmail.com 等）

#### Phase 1 開發
- [ ] 建立 `/early-access` Nuxt 頁面
- [ ] Hero Section：名額進度條 + 動態剩餘名額
- [ ] 功能簡介 4 欄 Grid
- [ ] 登記表單（Nuxt Form + validation + **公司 Email 域名驗証** + **同意條款 checkbox**）
- [ ] 「最想 AI 做咩」改為 **multi-select checkboxes + 其他自填**
- [ ] Nuxt server API：`POST /api/early-access/register` → Airtable
- [ ] Nuxt server API：`GET /api/early-access/count`（帶 5 分鐘 cache）
- [ ] UTM 參數讀取 + 傳送
- [ ] 感謝頁面（「多謝支持 + 1-3 工作天 WhatsApp 聯絡跟進」）
- [ ] Email 確認自動發送（Airtable Automation 或 Resend API）
- [ ] GA4 Events 全部實施
- [ ] **建立 `/disclaimer`、`/terms`、`/privacy` 三個法律文件頁面**
- [ ] Facebook Pixel Lead 事件
- [ ] 響應式設計（Mobile-first）
- [ ] SEO：meta title / description / OG tags
- [ ] Lighthouse audit（目標 Performance > 90）

---

### 18.10 法律文件頁面（新增 v1.4）

Early Access 登記表單必須配備完整法律文件，保障雙方利益。以下三個頁面為 **Phase 1 必須**，與 `/early-access` 同步上線。

#### 18.10.1 免責聲明 `/disclaimer`

**涵蓋要點：**
- PersonAI 目前為**早期體驗版 (Early Access)**，功能可能隨時更改或調整
- AI 回應僅供參考，不構成專業建議（法律 / 財務 / 醫療等）
- AI 可能產生不準確或過時嘅資訊（幻覺問題），用戶應自行驗証重要資訊
- PersonAI 底層調用第三方 AI 模型服務（如 OpenAI、Anthropic、Google 等），服務質素受第三方影響
- Area2 (HK) Limited 不對因使用 PersonAI 產生嘅任何直接或間接損失承擔責任
- 服務可用性不保證 100% uptime，可能有計劃維護或意外中斷
- 免費試用期間 Area2 保留隨時修改試用條款嘅權利

#### 18.10.2 服務條款 `/terms`

**涵蓋要點：**
- **服務提供者：** Area2 (HK) Limited（香港註冊公司）
- **服務範圍：** PersonAI WhatsApp AI 助手服務，包括但不限於文本對話、語音轉文字、圖片生成、排程提醒等功能
- **免費試用條款：** 首 50 名登記用戶享有 2 個月免費體驗，免費期後如不續訂將自動停止服務（唔會自動扣費）
- **用戶責任：** 不得用於非法用途、不得濫用系統資源、不得嘗試逆向工程
- **帳戶安全：** 用戶須保管好自己嘅 WhatsApp 帳號，PersonAI 不對因帳戶被盜用導致嘅損失負責
- **知識產權：** PersonAI 品牌、界面設計、技術架構屬 Area2 所有；AI 為用戶生成嘅內容，用戶享有使用權
- **服務變更與終止：** Area2 保留修改、暫停或終止服務嘅權利，會提前 14 天通知
- **爭議解決：** 適用香港特別行政區法律，由香港法院管轄
- **年齡限制：** 用戶須年滿 18 歲或獲得法定監護人同意

#### 18.10.3 私隱聲明 `/privacy`

**涵蓋要點：**
- **收集嘅資料：** 登記時收集姓名、公司 Email、WhatsApp 號碼、公司名稱；使用時收集對話記錄、使用偏好
- **資料用途：** 僅用於提供 PersonAI 服務、改善用戶體驗、發送服務相關通訊
- **資料唔會用嚟：** 訓練 AI 模型、投放廣告、出售予第三方
- **第三方數據處理（誠實披露）：** AI 推理功能由第三方 AI 模型服務商提供（如 OpenAI / Anthropic / Google），用戶輸入內容會經第三方伺服器處理；具體數據處理政策以各服務商條款為準
- **資料儲存：** 用戶對話記錄及記憶數據儲存於亞太區伺服器（Tencent Cloud Japan）
- **資料保留：** 帳戶活躍期間保留所有數據；帳戶刪除後 30 天內永久刪除所有個人數據
- **用戶權利（PDPO 合規）：** 查閱權、更正權、刪除權、反對直銷權 — 聯絡 privacy@area2.com 或 WhatsApp +852 9565 1459
- **Cookie 政策：** 網站使用分析 Cookie（GA4）及功能性 Cookie，用戶可透過瀏覽器設定管理
- **數據保護主任：** Area2 (HK) Limited，地址：旺角彌敦道 610 號荷李活商業中心 18 樓 1805-06 室

#### 18.10.4 法律文件技術實施

| 項目 | 規格 |
|------|------|
| **路由** | `/disclaimer`、`/terms`、`/privacy` — 靜態 Nuxt 頁面 |
| **設計** | 簡潔文字頁面，左側導航目錄（長文用 anchor scroll） |
| **語言** | 繁體中文為主，關鍵法律術語加英文註解 |
| **更新日期** | 頁面頂部顯示「最後更新：YYYY-MM-DD」 |
| **版本控制** | Git 管理，每次修改有 commit 記錄 |
| **表單整合** | 登記表單 checkbox 連結直接開呢三個頁面（新分頁） |
| **SEO** | `noindex`（法律文件唔需要被搜尋引擎索引） |

---

*PersonAI SaaS 官方網站開發計劃書 v1.5 | 2026-03-23*  
*撰寫：A2 (OpenClaw AI Agent)*  
*基於：Marketing Research Report v4.6 + 產品計劃書 v3*  
*合作主體：Hostlink (HK) Limited × Area2 (HK) Limited*

---

## Chapter 19：AI 模型開發分工方案（Development Workflow with Multi-Model AI）

### 19.1 三模型角色定位

PersonAI 網站開發採用三個 AI 模型各司其職嘅分工策略，按模型專長分配唔同階段嘅工作：

| 模型 | 專長 | 角色 | 一句話 |
|------|------|------|--------|
| **GPT-5.4** | 系統思維、Agentic 規劃、用戶心理、創意文案 | 🏗️ 架構師 + 🎨 UX 顧問 | 「佢識諗大局，企用戶角度」 |
| **Claude Sonnet 4.6** | 代碼生成最準、框架理解深、指令跟從度高、精準修改 | ⌨️ 主力開發 + 🔧 修正 | 「佢寫 code 最準，改得最精準」 |
| **Gemini 3 Pro** | 超長 context (1M tokens)、全局分析、系統性找 bug | 🔍 QA 總監 | 「佢一眼睇晒成個 project」 |

### 19.2 六階段開發流程

#### Phase 1：架構規劃 → GPT-5.4
- 定義 Nuxt 目錄結構、組件拆分策略
- API 路由設計（`/api/early-access/register` 等）
- 數據流規劃（Airtable ↔ Nuxt Server API ↔ Frontend）
- 技術選型決策（SSR vs SSG vs CSR 每頁分配）
- 環境變數規劃（API keys、Airtable token 等）

#### Phase 2：核心開發 → Sonnet 4.6
- Nuxt 頁面開發（`/early-access`、`/terms`、`/privacy`、`/disclaimer` 等全部頁面）
- Vue 組件編寫（表單驗証、名額進度條、多選 checkbox、同意條款 checkbox）
- Nuxt Server API endpoints（register → Airtable、count cache）
- Tailwind CSS / Nuxt UI 樣式實現
- TypeScript 類型定義
- 公司 Email 域名黑名單驗証邏輯
- GA4 事件追蹤代碼
- Facebook Pixel + CAPI 整合

**⚠️ 開發時必須將完整 dev plan 作為 context 輸入 → 確保輸出與規格一致**

#### Phase 3：UX 優化 + 文案 → GPT-5.4
- CTA 文案 A/B 版本（「搶先登記」vs「立即體驗」vs「免費開始」）
- 表單 UX 流程優化（減少摩擦、提升完成率）
- 感謝頁面情感設計（「多謝支持」+ 期望管理）
- Micro-copy 全套：
  - 表單欄位 placeholder 文字
  - 驗証錯誤提示（「請使用公司 Email」等）
  - Loading 狀態文字
  - 空狀態 / 名額已滿狀態
- Mobile 互動體驗建議
- 色彩心理學微調（CTA 按鈕顏色、urgency 元素）

#### Phase 4：全站 QA → Gemini 3 Pro
- 一次過讀晒整個 codebase（利用 Gemini 3 Pro 1M token context window）
- 跨頁面一致性檢查（styling / 用詞 / 連結 / meta tags）
- 響應式設計驗証（Desktop 1920/1440/1366 + Mobile 390/360 + Tablet 820）
- SEO meta 檢查（title / description / OG tags / canonical）
- Accessibility audit（WCAG 2.1 AA 基本合規）
- 安全漏洞掃描（CSRF / XSS / input validation / rate limiting）
- 法律文件內容 vs 實際功能一致性（Privacy 頁面描述 vs 實際數據處理）
- 表單驗証邊界測試（最大長度 / 特殊字符 / SQL injection）
- Performance audit（Lighthouse > 90 目標）

**⚠️ QA 時必須將整個 `src/` 目錄 + `nuxt.config.ts` 一次過提供 → 全局 bug 捕獲率最高**

#### Phase 5：Bug 修正 → Sonnet 4.6
- 逐一修 Gemini 搵到嘅 bug（按優先級排序）
- 精準 edit（唔會 over-engineer 或改多咗無關嘅嘢）
- Performance 優化（Code splitting / Image optimization / Font loading）
- Lighthouse 分數提升至 > 90

#### Phase 6：最終驗收 → 三模型交叉驗証

| 步驟 | 模型 | 驗收範圍 |
|------|------|---------|
| 1 | GPT-5.4 | 完整用戶旅程 walkthrough（首頁 → 了解功能 → Early Access 登記 → 感謝頁面） |
| 2 | Gemini 3 Pro | 最終全量 code review + 安全掃描 |
| 3 | Sonnet 4.6 | Last-mile 修正（如有） |

### 19.3 反模式（Anti-patterns）— 唔建議嘅做法

| ❌ 反模式 | 原因 | ✅ 正確做法 |
|---------|------|----------|
| 用 Gemini 寫 code | 容易 over-generate、格式唔一致、夾雜不必要嘅重構 | Sonnet 寫 code，Gemini 只做 review |
| 用 Sonnet 做 UX 決策 | 太 literal，缺乏創意跳躍，唔識「感覺」 | GPT 做 UX 決策，Sonnet 負責實現 |
| 用 GPT 做 QA | 容易漏 bug，唔夠 systematic，傾向「looks good」 | Gemini 做 QA（超長 context + systematic） |
| 一個模型做晒全部 | 浪費各模型專長，結果平庸 | 按階段分工，各展所長 |

### 19.4 開發效率 Tips

1. **Sonnet 開發時** → 俾佢完整 dev plan + wireframe 做 context → 輸出一致性大幅提升
2. **Gemini QA 時** → 俾佢整個 `src/` 目錄 + config files → 全局 bug 捕獲率最高
3. **GPT UX review 時** → 俾佢實際截圖 + wireframe 對比 → 建議最 actionable
4. **每個階段交接** → 產出一份結構化報告（Markdown），下一階段模型直接讀取
5. **版本控制** → 每個 Phase 完成後 git commit + tag，方便回滾

### 19.5 預估開發時間線

| Phase | 工作 | 模型 | 預估時間 |
|-------|------|------|---------|
| 1 | 架構規劃 | GPT-5.4 | 1-2 小時 |
| 2 | 核心開發 | Sonnet 4.6 | 2-3 天 |
| 3 | UX 優化 | GPT-5.4 | 半天 |
| 4 | 全站 QA | Gemini 3 Pro | 半天 |
| 5 | Bug 修正 | Sonnet 4.6 | 1 天 |
| 6 | 最終驗收 | 三模型 | 半天 |
| **總計** | | | **約 5-6 天** |

> 以上預估假設 Eric 可以即時 review 每個 Phase 產出。如需等待反饋，實際時間會相應延長。

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

---

### 2026-03-23：v1.3 → v1.4 新增 Early Access 優先登記頁面

**背景：** Eric 決定喺 PersonAI 正式上線前，先推出「優先登記免費試用」Landing Page，作為 lead generation + 市場驗證工具。

**新增內容：**

| 位置 | 新增內容 |
|------|---------|
| 版本標題 | v1.3 → v1.4 |
| Sitemap（Chapter 3） | 加入 `/early-access` 節點（標記 v1.4 新增）|
| Phase 1 Roadmap（Chapter 8） | 加入「⭐ 優先：`/early-access`」為 Phase 1 最優先 deliverable |
| **Chapter 18（全新）** | Early Access 優先登記頁面完整規格，包括：Wireframe、各 Section 詳細規格、技術規格（Airtable / Email 確認）、行銷整合（UTM / GA4 / Facebook Pixel）、市場驗證指標、響應式設計規格、開發 Checklist |

**遵守誠實性原則（沿用 v1.3 修正）：**
- ✅ 唔用「數據唔去美國」
- ✅ 唔用「主動提醒」，改用「排程提醒」「自動化執行」
- ✅ Trust Section 聲明：「唔會用你嘅數據訓練 AI 模型」

---

### 2026-03-23：v1.4 → v1.4a Eric 修正（Early Access 表單 + 法律文件）

**Eric 指示 5 項修正：**

1. **「最想 AI 做咩」改為多選 checkbox + 其他自填**
   - 舊：下拉選擇 + 自由填寫（單選）
   - 新：Multi-select checkboxes（10 個預設選項 + 「其他」自由填寫欄位）

2. **Email 必須用公司 Email（禁止免費域名）**
   - Target 係 SME，免費 Email 無法驗証公司身份
   - 禁止：gmail.com / yahoo.com / hotmail.com / outlook.com / icloud.com / 163.com / qq.com / 126.com
   - 錯誤提示：「請使用公司 Email 登記」
   - 公司名稱改為必填

3. **提交後文字改為「多謝支持 + 1-3 工作天 WhatsApp 聯絡跟進」**
   - 舊：「登記成功！我哋會喺 PersonAI 開放試用時優先通知你」
   - 新：「多謝你嘅支持！因反應熱烈，需要逐一處理，預計 1-3 工作天內有專人以 WhatsApp 聯絡跟進」

4. **表單需「同意條款」checkbox，未勾選不可提交**
   - 連結：免責聲明、服務條款、私隱聲明（各開新分頁）
   - 未勾選 → 提交按鈕 disabled

5. **新增三個法律文件頁面（Section 18.10）**
   - `/disclaimer` — 免責聲明
   - `/terms` — 服務條款
   - `/privacy` — 私隱聲明
   - 保障雙方利益，PDPO 合規，誠實披露第三方 AI 模型使用

6. **Nano Banana Pro 技術描述修正**
   - 舊：「Nano Banana Pro by Google Imagen 3」
   - 新：「Nano Banana Pro via Google AI Studio API」

---

### 2026-03-23：v1.4 → v1.5 新增 Chapter 19 三模型開發分工方案

**背景：** Eric 確認要將 GPT-5.4 / Sonnet 4.6 / Gemini 3 Pro 三模型開發分工方案整合入網站開發計劃書。

**新增內容：**

| 位置 | 新增內容 |
|------|---------|
| 版本標題 | v1.4 → v1.5 |
| Chapter 8（Phase Roadmap）| 加入模型分工 reference 提示（指向 Chapter 19）|
| **Chapter 19（全新）** | AI 模型開發分工方案完整規格，包括：三模型角色定位表、六階段開發流程（GPT-5.4 架構規劃 → Sonnet 4.6 核心開發 → GPT-5.4 UX 優化 → Gemini 3 Pro 全站 QA → Sonnet 4.6 Bug 修正 → 三模型最終驗收）、反模式表、開發效率 Tips、預估時間線（約 5-6 天）|

**分工原則（核心）：**
- ✅ GPT-5.4 → 架構師 + UX 顧問（大局思維、用戶心理）
- ✅ Sonnet 4.6 → 主力開發 + Bug 修正（代碼最準、精準 edit）
- ✅ Gemini 3 Pro → QA 總監（1M token context window，一次過讀晒成個 codebase）
- ✅ 遵守誠實性原則（沿用 v1.3+ 修正措辭）
- ✅ Nano Banana Pro via Google AI Studio API
