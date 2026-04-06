# Hostlink.com.hk 網站重建 — 完整開發計劃書 v3.0
# 版本：3.0 | 日期：2026-03-01
# 規模：中大型網站（20 Pages + 42 Portfolio = ~62 頁）

==================================================
## ⚠️ v3.0 重大改動說明
==================================================

v2.x 事故根因（已於 2026-03-01 事後分析）：

1. **組件命名錯誤（最根本 Bug）**：Nuxt 4 把 `components/layout/AppHeader.vue`
   自動命名為 `<LayoutAppHeader>`，唔係 `<AppHeader>`。計劃書冇指明，Agent 寫咗
   `<AppHeader>` 全部靜默失敗，頁面完全無 Header / Footer。

2. **截圖無人「睇」**：截圖流程係「拍 → 發送 → 完成」，冇對照 Checklist 驗證，
   連 Header 消失呢個最明顯問題都冇發現。

3. **Build 成功 ≠ 網站正常**：`npm run build` 通過就宣告完成，
   但 Vue warn 只在 console 出現，Build 唔中斷。

4. **Phase 無 QA Gate**：每個 Phase 完成直接 spawn 下一個，
   錯誤從 Phase 2 一直累積到 Phase 7 才被用戶發現。

v3.0 針對性修復：
- 明確指定組件命名規則（`pathPrefix: false`）
- 每個 Phase 末尾強制：截圖 → 逐項 Checklist → 全 PASS 才可繼續
- Phase 4 每個子任務都有對應 Visual QA Checklist
- 新增「Test Plan」作為獨立章節

==================================================
## 零、關鍵技術規則（必須在開始前全部理解）
==================================================

### ❗ 規則 0：Nuxt 4 組件命名（最重要）

**Nuxt 4 預設行為：子目錄名稱會成為組件名稱前綴！**

```
❌ 錯誤（默認行為）：
  components/layout/AppHeader.vue → 必須用 <LayoutAppHeader>
  components/sections/HeroSection.vue → 必須用 <SectionsHeroSection>

✅ 正確方案（v3.0 採用）：
  在 nuxt.config.ts 設定 pathPrefix: false
  → components/layout/AppHeader.vue 仍可用 <AppHeader>
  → components/sections/HeroSection.vue 仍可用 <HeroSection>
```

**nuxt.config.ts 必須加入：**
```typescript
components: [
  { path: '~/components', pathPrefix: false }
]
```

**⚠️ 若唔加此設定，所有 <AppHeader>、<HeroSection>、<AppFooter> 等在 template
中會靜默失敗（渲染成空白），Build 唔報錯，極難 debug。**

---

### ❗ 規則 1：Nuxt 4 目錄結構

本專案使用 `future.compatibilityVersion: 4`，**srcDir 係 `app/`**：

```
hostlink-rebuild/
├── app/                    ← srcDir（所有 Vue 程式碼放這裡）
│   ├── components/         ← 組件
│   ├── layouts/            ← Layout
│   ├── pages/              ← 頁面
│   ├── composables/        ← Composables
│   └── app.vue
├── content/                ← @nuxt/content 數據（放 root，唔係 app/）
├── locales/                ← i18n 語言檔（放 root）
├── public/                 ← 靜態資源（放 root）
├── server/                 ← Server API（放 root）
├── types/                  ← TypeScript types（放 root）
├── assets/                 ← CSS/SCSS（放 root，或 app/assets/）
└── nuxt.config.ts
```

**~ alias 在 Nuxt 4 中指向 srcDir（`app/`）：**
- `~/components/` = `app/components/`
- `~/composables/` = `app/composables/`
- `~/pages/` = `app/pages/`

**nuxt.config 中的路徑要用相對 root 的路徑：**
```typescript
i18n: {
  langDir: '../locales/',   // 相對 srcDir(app/)，即 root/locales/
}
css: ['~/assets/css/main.css'],  // ~ = app/，即 app/assets/css/main.css
```

---

### ❗ 規則 2：截圖必須用 Checklist 驗證

每次截圖後，**必須逐項對照 Checklist**，全部 ✅ 才算通過。

截圖只係工具，驗證才係目的。**拍完截圖唔睇 = 廢紙。**

---

### ❗ 規則 3：Build 成功 ≠ 網站正常

`npm run build` 通過只代表沒有語法錯誤。
必須同時：
1. 啟動 server
2. 截圖
3. 對照 Checklist

三步都通過才算完成。

---

### ❗ 規則 4：Phase QA Gate — 每個 Phase 末尾必須執行

```
Phase N 工作 → 截圖 → Checklist → 全 PASS → spawn Phase N+1
                                 ↓ 有 FAIL
                              修復問題 → 重新截圖 → 再 Check
```

**任何 Phase 有 Checklist 項目 FAIL，絕對唔可以 spawn 下一個 Phase。**
必須修復後重新驗證。

---

### ❗ 規則 5：Context 控制（防止 Overflow）

- 唔好 `cat` 大檔案（>100行）→ 用 `head`/`grep`/`wc` 代替
- 結果即寫入檔案，唔好存喺 context
- 每個 subagent 只做一個 Phase
- 每個 Phase 完成後即退出，由下一個 agent 接棒

==================================================
## 一、專案概覽 (Project Overview)
==================================================

**專案名稱：** Hostlink Website Rebuild
**目標網站：** https://www.hostlink.com.hk
**輸出目錄：** ~/.openclaw/workspace/hostlink-rebuild/
**技術棧：** Nuxt 4 + vue-i18n + TailwindCSS + TypeScript
**語言：** 繁體中文（預設）、簡體中文、English（三語）

### 1.1 原站規模（已確認）

| 類別 | 數量 | 路由模式 |
|------|------|---------|
| 主要頁面 | ~10 頁 | 獨立 .vue 頁面 |
| 服務頁面 | 5 頁 | 獨立 .vue 頁面 |
| Portfolio 作品集 | 42 頁 | 動態路由 [slug].vue |
| Blog 文章 | 0（預留架構）| 動態路由 [slug].vue |
| 法律頁面 | 3 頁 | 獨立 .vue 頁面 |
| **合計** | **~62 頁** | |

**已確認頁面清單：**
- 主要：`/`、`/about-us/`、`/contact-us/`、`/blog/`、`/support/`、`/technical-support/`、`/software-development/`
- 服務：`/ai-solution/`、`/cloud-service/`、`/creative-design/`、`/domain-hosting/`、`/other-services/`
- 法律：`/terms-and-conditions/`、`/privacy-policy/`、`/disclaimer/`
- 作品集：`/portfolio/` + 42 個 `/portfolio/[slug]/`

### 1.2 重建目標

- **還原方針：** 非像素級 1:1 還原，允許現代化改良
  - 保留原站所有內容、結構、品牌色彩
  - 可改良視覺呈現（更現代排版、動畫）
  - 不可刪減原站任何功能或服務資訊
- **功能範圍：**
  - 所有靜態展示頁面
  - 42 個 Portfolio 作品集頁面（動態路由 + 靜態生成）
  - Blog 架構（現時 0 篇，預留 Markdown 擴展）
  - 聯絡表單（完整功能）
  - 三語切換（繁中 / 簡中 / 英文）
  - 完整 SEO

### 1.3 整體完成標準 (Definition of Done)

- [ ] 所有原站頁面已重建
- [ ] Portfolio 42 頁動態路由正確渲染
- [ ] 所有圖片本地化
- [ ] 所有文字通過 i18n（無 hardcode）
- [ ] 三語切換正常
- [ ] 聯絡表單可實際提交
- [ ] URL 結構與原站完全一致
- [ ] `npm run generate` 成功
- [ ] Lighthouse Performance > 85，Accessibility > 90
- [ ] **每個主要頁面截圖對比原站已完成並通過 Checklist**
- [ ] README.md 已撰寫
- [ ] Git commit 記錄完整

==================================================
## 一A、Visual QA Test Plan（每個 Phase 必須執行）
==================================================

### 📋 全站基礎 Checklist（每次截圖後必查）

截圖後，把以下 Checklist 逐項標記 ✅ / ❌，記入 PROGRESS.md：

#### Header
- [ ] Logo 可見（左上角）
- [ ] Navigation 有至少 5 個主選單項目可見
- [ ] 語言切換器可見（繁/簡/EN）
- [ ] Mobile 版：漢堡選單可見

#### Footer
- [ ] Footer 存在於頁面底部
- [ ] 公司名稱可見
- [ ] 聯絡資料可見
- [ ] Copyright 可見

#### 頁面內容
- [ ] 頁面有 Hero / 主要標題
- [ ] 內容區域有實際文字（唔係空白）
- [ ] 圖片正常載入（唔係灰色佔位符）
- [ ] CTA 按鈕可見

#### 整體
- [ ] 無白屏（空白頁面）
- [ ] 無 console.error（從 server log 確認）
- [ ] 整頁佈局正常（唔係只有部分內容）

**❌ 任何一項 FAIL → 停止，修復，重新截圖驗證，唔可以繼續。**

---

### 📋 首頁專用 Checklist

- [ ] Header 有 Logo + Nav + 語言切換
- [ ] Hero Banner 有深藍色背景 + 大標題
- [ ] Services 服務 Grid 有至少 4 個服務卡片
- [ ] About 區域有公司介紹文字
- [ ] Portfolio Preview 有作品縮略圖
- [ ] Client Logos 有客戶 logo
- [ ] CTA Banner 有聯絡按鈕
- [ ] Footer 完整

---

### 📋 Portfolio 頁面 Checklist

**列表頁（/portfolio/）：**
- [ ] Header + Footer 存在
- [ ] 頁面標題「作品集」可見
- [ ] 分類篩選器可見
- [ ] 至少有 6 個作品卡片
- [ ] 每個卡片有圖片 + 標題

**作品詳情頁（/portfolio/[slug]/）：**
- [ ] Header + Footer 存在
- [ ] Breadcrumb 可見
- [ ] 作品標題可見
- [ ] 至少一張作品圖片
- [ ] 客戶、年份、服務等資料可見
- [ ] 上一個/下一個導航可見

---

### 📋 截圖程序（每個 Phase 末尾）

```bash
# 啟動 server
node .output/server/index.mjs &
sleep 3

# 截圖（用 playwright）
npx playwright screenshot --browser chromium --full-page http://localhost:3000 \
  /tmp/openclaw/hostlink-qa/phase-X-home.jpg

npx playwright screenshot --browser chromium --full-page http://localhost:3000/portfolio \
  /tmp/openclaw/hostlink-qa/phase-X-portfolio.jpg

# 同時截原站作對比
npx playwright screenshot --browser chromium --full-page https://www.hostlink.com.hk \
  /tmp/openclaw/hostlink-qa/original-home.jpg
```

**截圖後必須：**
1. 用 `read` tool 讀取截圖
2. 對照 Checklist 逐項確認
3. 把結果記入 PROGRESS.md
4. FAIL 項目必須修復

==================================================
## 二、重要架構決策
==================================================

### 2.1 組件目錄結構（v3.0 修正）

```
app/components/
├── layout/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── MobileMenu.vue
│   └── LanguageSwitcher.vue
├── sections/
│   ├── HeroSection.vue
│   ├── ServiceGrid.vue
│   ├── PortfolioGrid.vue
│   ├── PortfolioCard.vue
│   ├── BlogCard.vue
│   ├── CtaBanner.vue
│   ├── StatsBar.vue
│   ├── TestimonialSlider.vue
│   ├── ContactForm.vue
│   └── FaqAccordion.vue
└── ui/
    ├── BaseButton.vue
    ├── BaseCard.vue
    ├── BaseInput.vue
    ├── BaseSelect.vue
    ├── BaseTextarea.vue
    ├── BaseBadge.vue
    ├── Pagination.vue
    ├── Breadcrumb.vue
    ├── TagList.vue
    └── ImageGallery.vue
```

**⚠️ 使用 `pathPrefix: false` 後，以上組件在 template 中的用法：**
- `<AppHeader />` ✅（唔係 `<LayoutAppHeader>`）
- `<HeroSection />` ✅（唔係 `<SectionsHeroSection>`）
- `<BaseButton />` ✅（唔係 `<UiBaseButton>`）

### 2.2 Portfolio 42 頁架構

**動態路由 + 靜態 JSON 數據：**

```
app/pages/portfolio/
  index.vue           ← Portfolio 列表頁
  [slug].vue          ← 單個作品頁（動態路由）

content/portfolio/    ← 放 root，唔係 app/
  128waterloo.json
  ... (42 個 JSON)
```

**每個 Portfolio JSON 結構：**
```json
{
  "slug": "128waterloo",
  "title": { "zh-HK": "...", "zh-CN": "...", "en": "..." },
  "client": "...",
  "category": ["web-design"],
  "year": 2023,
  "description": { "zh-HK": "...", "zh-CN": "...", "en": "..." },
  "services": ["Website Design"],
  "url": "https://www.128waterloo.com",
  "thumbnail": "/images/portfolio/128waterloo/thumb.jpg",
  "images": ["/images/portfolio/128waterloo/img1.jpg"],
  "tags": ["Property"],
  "featured": false,
  "seo": {
    "title": { "zh-HK": "...", "en": "..." },
    "description": { "zh-HK": "...", "en": "..." }
  }
}
```

### 2.3 Blog 架構（本地 Markdown + @nuxt/content）

原站 Blog 文章 = 0，預留架構用本地 Markdown：

```
content/blog/          ← 放 root
  welcome.md           ← 示範文章
```

### 2.4 三語 i18n 架構（SEO 關鍵）

| URL | 語言 |
|-----|------|
| `/` | 繁體中文（預設，無前綴） |
| `/zh-hans/` | 簡體中文（**必須 zh-hans，唔係 zh-cn**）|
| `/en/` | English |

```
locales/              ← 放 root，唔係 app/
  zh-HK.json
  zh-CN.json
  en.json
```

### 2.5 Trailing Slash

原站所有 URL 都有尾斜線，必須保留（SEO）：
```typescript
experimental: {
  trailingSlash: true
}
```

==================================================
## 三、nuxt.config.ts 完整規範
==================================================

```typescript
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,   // srcDir = app/
  },

  // ⚠️ 關鍵：禁用 pathPrefix，確保 <AppHeader> 可正常解析
  components: [
    { path: '~/components', pathPrefix: false }
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content',
  ],

  // 三語 i18n
  i18n: {
    locales: [
      { code: 'zh-HK',   iso: 'zh-HK', name: '繁體中文', file: 'zh-HK.json' },
      { code: 'zh-hans', iso: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
      { code: 'en',      iso: 'en-US', name: 'English',  file: 'en.json'   },
    ],
    defaultLocale: 'zh-HK',
    langDir: '../locales/',     // ⚠️ 相對 srcDir(app/)，所以係 root/locales/
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'zh-HK',
    },
    vueI18n: './i18n.config.ts',
  },

  // TailwindCSS（路徑相對 root）
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/main.css',  // ~ = app/
  },

  // 圖片優化
  image: {
    quality: 85,
    formats: ['webp', 'jpg'],
    screens: { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 },
  },

  // @nuxt/content
  content: {
    highlight: { theme: 'github-light' },
  },

  // Trailing slash（SEO）
  experimental: {
    trailingSlash: true,
  },

  // CSS（~ = app/）
  css: ['~/assets/css/main.css'],

  // 環境變數
  runtimeConfig: {
    emailUser:        process.env.EMAIL_USER,
    emailPass:        process.env.EMAIL_PASS,
    contactFormTo:    process.env.CONTACT_FORM_TO || 'cs@hostlink.com.hk',
    emailSmtpHost:    process.env.EMAIL_SMTP_HOST || 'smtp.gmail.com',
    emailSmtpPort:    process.env.EMAIL_SMTP_PORT || '587',
    public: {
      siteUrl:  process.env.SITE_URL || 'https://www.hostlink.com.hk',
      siteName: 'Hostlink (HK) Limited',
    },
  },

  // 靜態生成
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/', '/about-us', '/contact-us', '/support', '/technical-support',
        '/software-development', '/ai-solution', '/cloud-service',
        '/creative-design', '/domain-hosting', '/other-services',
        '/portfolio', '/blog',
        '/terms-and-conditions', '/privacy-policy', '/disclaimer',
        // 42 Portfolio slugs × 3 語言
        ...[
          '128waterloo','acices-visa-reg-system','antonhill','apollo','ask-super-outlet',
          'british','china-base','crawford-house','diamonds-gallery','e-post',
          'give-a-day','gregory','harriman','hkneo','hugotech','jackel-porter',
          'koko-reserve','ladder-mission','life-buddies','livebook','manga',
          'megaman','montbell','nicsang','otic','panda-box','pearson','potak',
          'sea-global-line','slim-beauty','st-james-settlement','st-james',
          'sun-lawyers','terisa','the-orchards','the-overlander','the-travel-advisers',
          'west-park','wheelock-living','wharf-art-competition-2019-20',
          'wharf-art-competition-2020-21','your-internet-solution-partner',
        ].flatMap(s => [
          `/portfolio/${s}`,
          `/zh-hans/portfolio/${s}`,
          `/en/portfolio/${s}`,
        ]),
      ],
    },
  },

  // Head 預設
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;700&display=swap',
        },
      ],
    },
  },
})
```

==================================================
## 四、Git 版本控制策略
==================================================

```bash
cd ~/.openclaw/workspace
rm -rf hostlink-rebuild    # 清除舊版本
git init hostlink-rebuild
cd hostlink-rebuild
```

**Commit 規範：**
```
[Phase X] 簡短描述
- 完成項目
- 遇到問題及解決方案
- QA 結果：PASS / FAIL + 修復記錄
```

**每個 Phase commit 前必須：**
1. 截圖並通過 Checklist
2. 記錄 QA 結果於 commit message

==================================================
## 五、Phase 0 — 環境準備
==================================================

### Definition of Done
- [ ] Node 20+ 確認
- [ ] Playwright 可成功截圖 hostlink.com.hk
- [ ] 目錄結構建立完成
- [ ] **QA：原站首頁截圖成功（作為後續對比基準）**

### 步驟

```bash
node --version    # 需要 20+
npm --version
git --version

# 安裝 Playwright
npx playwright install chromium

# 建立分析目錄
mkdir -p ~/.openclaw/workspace/hostlink-analysis/{pages,portfolio,scripts}
mkdir -p /tmp/openclaw/hostlink-qa
mkdir -p /tmp/openclaw/hostlink-screenshots/{zh-HK,zh-hans,en}

# 截圖原站作為基準（後續每個 Phase 都要對比）
npx playwright screenshot --browser chromium --full-page \
  https://www.hostlink.com.hk \
  /tmp/openclaw/hostlink-qa/original-home.jpg

npx playwright screenshot --browser chromium --full-page \
  https://www.hostlink.com.hk/portfolio/ \
  /tmp/openclaw/hostlink-qa/original-portfolio.jpg

npx playwright screenshot --browser chromium --full-page \
  https://www.hostlink.com.hk/about-us/ \
  /tmp/openclaw/hostlink-qa/original-about.jpg
```

### Phase 0 QA Gate
- [ ] `original-home.jpg` 存在且可見（有 Header + Hero）
- [ ] 原站 Header 明顯可見，作為後續版本對比基準

**Commit：** `[Phase 0] 環境準備完成，原站截圖基準已建立`

==================================================
## 六、Phase 1 — WP REST API 分析 + 資源下載
==================================================

### Definition of Done
- [ ] 20 個 Pages API 數據已提取（三語）
- [ ] 42 個 Portfolio 數據已提取（含特色圖片）
- [ ] Yoast SEO 數據已提取
- [ ] 所有主要頁面截圖完成（三語）
- [ ] 所有圖片資源已下載至本地
- [ ] 設計 Token 已提取
- [ ] **QA：assets-map.json 存在，圖片下載成功率 > 80%**

### 1.1 WP REST API

原站 API 完全公開：
- Base: `https://www.hostlink.com.hk/wp-json/wp/v2`
- Portfolio: `GET /droow-portfolio?per_page=100&lang={lang}&_embed`
- Pages: `GET /pages?per_page=100&lang={lang}&_fields=id,slug,title,link,yoast_head_json`
- SEO: `GET /wp-json/yoast/v1/get_head?url={page_url}`

**WPML 語言參數：** `?lang=zh-hans`（簡中）、`?lang=en`（英文）、無參數（繁中預設）

**已確認 42 個 Portfolio Slugs：**
```
128waterloo, acices-visa-reg-system, antonhill, apollo, ask-super-outlet,
british, china-base, crawford-house, diamonds-gallery, e-post,
give-a-day, gregory, harriman, hkneo, hugotech, jackel-porter,
koko-reserve, ladder-mission, life-buddies, livebook, manga,
megaman, montbell, nicsang, otic, panda-box, pearson, potak,
sea-global-line, slim-beauty, st-james-settlement, st-james,
sun-lawyers, terisa, the-orchards, the-overlander, the-travel-advisers,
west-park, wheelock-living, wharf-art-competition-2019-20,
wharf-art-competition-2020-21, your-internet-solution-partner
```

### 1.2 Playwright 截圖（視覺參考）

截圖三語主要頁面（每頁 waitUntil: 'networkidle'，等 Elementor 渲染）：
```typescript
// 存至 /tmp/openclaw/hostlink-screenshots/{lang}/{slug}.jpg
// 三語 × ~20 主要頁面
```

### 1.3 圖片資源下載

分類下載至 `public/images/`：
```
public/images/
  logo/      ← 公司 logo（SVG + PNG）
  banners/   ← Hero Banner 大圖
  services/  ← 各服務頁圖片
  portfolio/
    [slug]/  ← 每個作品的圖片（thumbnail + screenshots）
  blog/      ← Blog 預留
  misc/      ← 其他圖片
```

已確認：`logo.svg` 在 `/wp-content/uploads/2020/12/logo.svg`

### 1.4 設計 Token 提取

用 Playwright 執行 JS 提取，存至 `analysis/design-tokens.json`：
- 品牌色（已知：Navy `#002D5E`，Light Blue `#6EC1E4`）
- 字型（Montserrat, Noto Sans TC）
- 間距、圓角、陰影

**Commit：** `[Phase 1] 完成原站分析及所有資源下載`

==================================================
## 七、Phase 2 — 建立 Nuxt 4 專案
==================================================

### Definition of Done
- [ ] `npm run dev` 可正常啟動（localhost:3000 返回 200）
- [ ] nuxt.config.ts 包含 `components: [{ path: '~/components', pathPrefix: false }]`
- [ ] i18n 三語路由正常（`/`、`/zh-hans/`、`/en/`）
- [ ] TailwindCSS 設定完成
- [ ] 目錄結構符合規範
- [ ] **QA Gate（截圖 + Checklist）**

### 2.1 初始化

```bash
cd ~/.openclaw/workspace
# 清除舊版本
rm -rf hostlink-rebuild

npx nuxi@latest init hostlink-rebuild
cd hostlink-rebuild
npm install

# 安裝依賴
npm install @nuxtjs/i18n @nuxtjs/tailwindcss @nuxt/image @nuxt/content
npm install @vueuse/core lucide-vue-next
npm install nodemailer zod
npm install -D @types/nodemailer typescript
```

### 2.2 建立完整目錄結構

```bash
mkdir -p app/components/{layout,sections,ui}
mkdir -p app/layouts app/pages/{portfolio,blog} app/composables
mkdir -p content/{portfolio,blog,services}
mkdir -p locales server/api types assets/css
mkdir -p public/images/{logo,banners,services,portfolio,blog,misc}
```

### 2.3 nuxt.config.ts

完全按照「第三章 nuxt.config.ts 完整規範」建立。
**⚠️ 必須包含 `components: [{ path: '~/components', pathPrefix: false }]`**

### 2.4 tailwind.config.ts

```typescript
export default {
  content: [
    './app/components/**/*.{vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/composables/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy':       '#002D5E',
        'brand-light-blue': '#6EC1E4',
        'brand-green':      '#61CE70',
        'brand-gray':       '#54595F',
        'brand-text-gray':  '#7A7A7A',
        'brand-muted-gray': '#ABABAB',
        accent:             '#6EC1E4',
      },
      fontFamily: {
        sans:    ['Noto Sans TC', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        nav:          '0 2px 20px rgba(0,0,0,0.08)',
        card:         '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.15)',
      },
    },
  },
}
```

### 2.5 app/assets/css/main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .container     { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
  .section       { @apply py-16 lg:py-24; }
  .section-sm    { @apply py-10 lg:py-14; }
  .section-title { @apply text-3xl lg:text-4xl font-bold text-brand-navy font-heading mb-4; }
  .section-label { @apply text-sm font-semibold uppercase tracking-wider text-accent mb-2 block; }
  .btn-primary   { @apply inline-flex items-center px-6 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200; }
  .btn-secondary { @apply inline-flex items-center px-6 py-3 bg-white text-brand-navy font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200; }
  .btn-outline   { @apply inline-flex items-center px-6 py-3 border-2 border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-all duration-200; }
  .nav-link      { @apply text-brand-gray hover:text-brand-navy font-medium transition-colors duration-200; }
  .card          { @apply bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300; }
  .form-input    { @apply w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-light-blue focus:border-transparent outline-none transition-all duration-200; }
  .bg-gradient-primary { @apply bg-gradient-to-r from-brand-navy to-blue-800; }
}
```

### 2.6 i18n.config.ts（放 root）

```typescript
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh-HK',
  fallbackLocale: 'zh-HK',
  missingWarn: false,
  fallbackWarn: false,
}))
```

### 2.7 app/app.vue

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: chunk => chunk ? `${chunk} | Hostlink (HK) Limited` : 'Hostlink (HK) Limited',
})
</script>
```

### 2.8 app/layouts/default.vue

```vue
<template>
  <div>
    <AppHeader />
    <main id="main-content"><slot /></main>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
</script>
```

### Phase 2 QA Gate

**執行：**
```bash
npm run dev &
sleep 5
npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000 /tmp/openclaw/hostlink-qa/phase2-home.jpg
```

**讀取截圖並確認：**
- [ ] 頁面返回 200（唔係 404 / 500）
- [ ] 無報錯（server log 無 error）
- [ ] TailwindCSS 已載入（唔係無樣式）

*注意：Phase 2 尚未建組件，Header/Footer 未出現係正常。但不能有 500 error。*

**Commit：** `[Phase 2] 專案初始化及設定完成`

==================================================
## 八、Phase 3 — 數據層及 i18n
==================================================

### Definition of Done
- [ ] 42 個 Portfolio JSON 建立完成（content/portfolio/）
- [ ] 5 個 Services JSON 建立完成（content/services/）
- [ ] Blog 示範文章建立（content/blog/welcome.md）
- [ ] locales/zh-HK.json、zh-CN.json、en.json 完整
- [ ] TypeScript types 定義完整（types/portfolio.ts、types/blog.ts、types/index.ts）
- [ ] 所有 composables 建立完成
- [ ] **QA：無任何 TypeScript error（`npx tsc --noEmit`）**

### 3.1 TypeScript Types

**types/index.ts：**
```typescript
export interface LocaleString {
  'zh-HK': string
  'zh-CN': string
  en: string
}
export interface NavItem {
  key: string
  label: string
  path: string
  children?: NavItem[]
}
export interface ServiceItem {
  slug: string
  icon: string
  title: LocaleString
  description: LocaleString
  features: Array<{ icon: string; title: LocaleString; desc: LocaleString }>
}
export interface ContactFormData {
  name: string; email: string; phone?: string; subject: string; message: string
}
```

**types/portfolio.ts：**
```typescript
import type { LocaleString } from './index'
export interface PortfolioItem {
  slug: string
  title: LocaleString
  client: string
  category: string[]
  year: number
  description: LocaleString
  services: string[]
  url?: string
  thumbnail: string
  images: string[]
  tags: string[]
  featured: boolean
  seo: { title: LocaleString; description: LocaleString }
}
export interface PortfolioListItem {
  slug: string
  title: LocaleString
  client: string
  category: string[]
  year: number
  thumbnail: string
  tags: string[]
  featured: boolean
}
```

**types/blog.ts：**
```typescript
import type { LocaleString } from './index'
export interface BlogPost {
  slug: string
  title: LocaleString
  date: string
  author: string
  category: string
  tags: string[]
  excerpt: LocaleString
  thumbnail?: string
  seo: { title: LocaleString; description: LocaleString }
}
```

### 3.2 Composables

**app/composables/usePortfolio.ts：**
```typescript
// 從 content/portfolio/ JSON 讀取（靜態 import 或 $fetch）
// getAllPortfolio(): PortfolioListItem[]
// getPortfolioBySlug(slug): PortfolioItem | null
// getPortfolioByCategory(category): PortfolioListItem[]
// getFeaturedPortfolio(): PortfolioListItem[]
// getAdjacentSlugs(slug): { prev: string, next: string }
// getLocalizedField(field, locale): string — 從 LocaleString 取當前語言
```

**app/composables/useBlog.ts：**
```typescript
// 用 queryContent('blog') API
// getPosts(): MaybeRef<BlogPost[]>
// getPostBySlug(slug): MaybeRef<BlogPost | null>
// getCategories(): string[]
// 所有錯誤都 catch，返回 null 而唔係 throw
```

**app/composables/useNavigation.ts：**
```typescript
// mainNavItems: computed NavItem[]（用 useI18n().t 取標籤）
// footerServiceLinks: computed NavItem[]
// footerQuickLinks: computed NavItem[]
// legalLinks: computed NavItem[]
// 所有 path 用 localePath() 生成（確保三語正確）
```

**app/composables/useContactForm.ts：**
```typescript
// 表單狀態：formData, errors, submitting, submitted, submitError
// validate(): boolean — Zod client-side 驗證
// submit(): Promise<void> — POST /api/contact
// reset(): void
```

### 3.3 i18n 語言檔（關鍵 keys）

`locales/zh-HK.json`（繁體，主要語言）需包含以下所有 key：

```json
{
  "common": { "site_name": "Hostlink (HK) Limited", "tagline": "...",
    "cta_contact": "聯絡我們", "cta_learn_more": "了解更多",
    "cta_view_work": "查看作品", "read_more": "閱讀更多" },
  "nav": { "home": "首頁", "services": "服務", "portfolio": "作品集",
    "blog": "部落格", "about": "關於我們", "contact": "聯絡我們",
    "support": "支援",
    "services_items": {
      "ai_solution": "AI 解決方案", "cloud_service": "雲端服務",
      "creative_design": "創意設計", "domain_hosting": "域名及網絡",
      "software_development": "軟件開發", "technical_support": "技術支援",
      "other_services": "其他服務"
    }
  },
  "seo": {
    "home": { "title": "網頁設計 | 雲端服務 | AI 解決方案 | Hostlink (HK) Limited",
      "description": "Hostlink (HK) Limited 自 1998 年..." },
    "about":    { "title": "關於我們 | Hostlink (HK) Limited", "description": "..." },
    "portfolio":{ "title": "作品集 | Hostlink (HK) Limited", "description": "..." },
    "contact":  { "title": "聯絡我們 | Hostlink (HK) Limited", "description": "..." },
    "blog":     { "title": "部落格 | Hostlink (HK) Limited", "description": "..." }
  },
  "home": {
    "hero": { "title": "專業互聯網服務", "subtitle": "自 1998 年起",
      "description": "...", "cta_primary": "了解更多", "cta_secondary": "查看作品" },
    "services": { "title": "我們的服務", "subtitle": "SERVICES" },
    "about_preview": { "label": "ABOUT US", "title": "超過 25 年豐富經驗",
      "description": "...",
      "stats": { "years": "25+", "years_label": "行業經驗",
        "projects": "500+", "projects_label": "完成項目",
        "clients": "200+", "clients_label": "滿意客戶" }
    },
    "portfolio": { "title": "精選作品", "subtitle": "PORTFOLIO" },
    "clients": { "subtitle": "信任我們的企業" },
    "cta": { "title": "立即開始您的項目", "description": "...", "button": "聯絡我們" }
  },
  "portfolio": {
    "title": "作品集", "subtitle": "PORTFOLIO",
    "filter_all": "全部", "filter_web": "網頁設計", "filter_app": "App 設計",
    "filter_creative": "創意設計", "filter_branding": "品牌設計",
    "filter_system": "系統開發", "filter_ecommerce": "電子商務",
    "client": "客戶", "year": "年份", "services_provided": "提供服務",
    "visit_site": "瀏覽網站", "prev_project": "上一個作品", "next_project": "下一個作品"
  },
  "blog": { "title": "部落格", "no_posts": "暫無文章", "read_more": "閱讀更多" },
  "contact": {
    "title": "聯絡我們", "subtitle": "CONTACT",
    "address": "香港九龍觀塘成業街10號裕成工業大廈19樓A室",
    "phone": "+852 2382 2382", "email": "cs@hostlink.com.hk",
    "form": {
      "name": "姓名", "name_placeholder": "您的姓名",
      "email": "電郵地址", "email_placeholder": "your@email.com",
      "phone": "電話（選填）", "phone_placeholder": "+852 XXXX XXXX",
      "subject": "主題",
      "subjects": ["一般查詢", "技術支援", "報價查詢", "其他"],
      "message": "訊息", "message_placeholder": "請輸入您的訊息...",
      "submit": "提交查詢", "submitting": "提交中...",
      "success_title": "感謝您的訊息！",
      "success_message": "我們將於 1-2 個工作天內回覆您。",
      "error_message": "提交失敗，請稍後再試。"
    },
    "validation": {
      "name_required": "請輸入姓名",
      "email_required": "請輸入電郵地址", "email_invalid": "請輸入有效的電郵地址",
      "message_required": "請輸入訊息", "message_min": "訊息至少需要 10 個字"
    }
  },
  "footer": {
    "copyright": "© {year} Hostlink (HK) Limited. All rights reserved.",
    "company_desc": "Hostlink (HK) Limited 自 1998 年起提供專業互聯網服務。",
    "links": { "terms": "服務條款", "privacy": "私隱政策", "disclaimer": "免責聲明" }
  },
  "errors": {
    "404": { "title": "頁面不存在", "description": "抱歉，找不到您要瀏覽的頁面。", "cta": "返回首頁" },
    "500": { "title": "伺服器錯誤", "description": "暫時出現技術問題，請稍後再試。" }
  },
  "aria": {
    "main_nav": "主要導航", "logo": "Hostlink 標誌",
    "open_menu": "開啟選單", "close_menu": "關閉選單",
    "lang_switcher": "切換語言", "back_to_top": "返回頁頂"
  }
}
```

`locales/zh-CN.json`（簡體，繁→簡轉換）
`locales/en.json`（英文翻譯）

**關鍵術語：**
- 網站 → 网站（簡）/ Website（英）
- 軟件 → 软件（簡）/ Software（英）
- 電郵 → 电邮（簡）/ Email（英）

**Commit：** `[Phase 3] 完成數據層及三語 i18n 語言檔`

==================================================
## 九、Phase 4a — Layout 組件 + 首頁 + QA
==================================================

### Definition of Done
- [ ] AppHeader（含 Desktop Nav + Mobile Menu + 語言切換）
- [ ] AppFooter（含多列鏈接 + 聯絡資料 + Copyright）
- [ ] MobileMenu（抽屜式）
- [ ] LanguageSwitcher（繁/簡/EN toggle）
- [ ] 首頁（index.vue）全部 section 完成
- [ ] **QA Gate：截圖通過全站基礎 Checklist + 首頁專用 Checklist**

---

### AppHeader 規範

```vue
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-nav">
    <div class="container">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')">
          <img src="/images/logo/logo.svg" :alt="t('aria.logo')" class="h-10 w-auto" />
        </NuxtLink>

        <!-- Desktop Nav（hidden md:flex） -->
        <ul class="hidden lg:flex items-center space-x-1">
          <li v-for="item in mainNavItems" :key="item.key">
            <!-- dropdown 或 普通 link -->
          </li>
        </ul>

        <!-- 右側：語言切換 + Mobile Toggle -->
        <div class="flex items-center gap-3">
          <LanguageSwitcher class="hidden sm:block" />
          <button class="lg:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
            <!-- 漢堡 icon -->
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
  </header>

  <!-- Header 佔位（因 fixed 定位） -->
  <div class="h-16" />
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { mainNavItems } = useNavigation()
const mobileMenuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { mobileMenuOpen.value = false })
</script>
```

**⚠️ Header 佔位 div 必須有（`<div class="h-16" />`），否則 fixed header 會遮住 content 頂部。**

---

### 首頁 Sections 順序

```
1. HeroSection    — 深藍背景 banner，大標題 + 2 個 CTA 按鈕
2. ServiceGrid    — 6 個服務卡片（icon + 標題 + 簡介）
3. About Preview  — 左文字右圖片，公司簡介 + 3 個統計數字
4. PortfolioGrid  — 8 個作品縮略圖（精選）
5. Client Logos   — 客戶 logo 列
6. CtaBanner      — 聯絡 CTA
```

---

### Phase 4a QA Gate（最重要）

```bash
npm run build
node .output/server/index.mjs &
sleep 3

# 截圖首頁
npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000 /tmp/openclaw/hostlink-qa/phase4a-home.jpg

# 截圖原站作對比
npx playwright screenshot --browser chromium --full-page \
  https://www.hostlink.com.hk /tmp/openclaw/hostlink-qa/original-home.jpg
```

**讀取截圖（用 read tool），逐項確認：**

全站基礎 Checklist：
- [ ] Logo 可見
- [ ] Navigation 有至少 5 個選單項目
- [ ] 語言切換器可見
- [ ] Footer 存在
- [ ] Footer 有公司聯絡資料
- [ ] Footer 有 Copyright

首頁專用 Checklist：
- [ ] Hero Banner 有深藍色背景
- [ ] Hero 有大標題文字
- [ ] Services Grid 有至少 4 個服務卡片
- [ ] About Preview section 可見
- [ ] Portfolio 縮略圖可見
- [ ] CtaBanner 可見

**❌ 任何一項 FAIL → 停止，修復，重新截圖，全 PASS 後才 spawn Phase 4b。**

**Commit：** `[Phase 4a] Header/Footer + 首頁完成，QA PASS`

==================================================
## 十、Phase 4b — 服務頁面 + QA
==================================================

### Definition of Done
- [ ] ai-solution.vue
- [ ] cloud-service.vue
- [ ] creative-design.vue
- [ ] domain-hosting.vue
- [ ] software-development.vue
- [ ] other-services.vue
- [ ] support.vue
- [ ] technical-support.vue
- [ ] **QA Gate：截圖 /ai-solution 通過 Checklist**

### 服務頁面結構（每頁一致）

```
1. Hero section（頁面標題 + 副標題，深藍背景或白底）
2. Features Grid（3-6 個特點，icon + 標題 + 描述）
3. About/Process section（如有）
4. CtaBanner（聯絡 CTA）
```

**每頁必須：**
- `<script setup lang="ts">` + `const { t } = useI18n()`
- `useSeoMeta({ title: t('seo.[page].title'), ... })`
- `useHead({ link: [hreflang × 3] })`
- 所有文字從 i18n 取（無 hardcode）
- `<NuxtImg>` 取代 `<img>`

### Phase 4b QA Gate

```bash
npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000/ai-solution /tmp/openclaw/hostlink-qa/phase4b-ai-solution.jpg
```

確認：
- [ ] Header（Logo + Nav）可見
- [ ] 頁面有標題「AI 解決方案」或類似
- [ ] 有至少一個 Feature/服務 section
- [ ] Footer 可見

**Commit：** `[Phase 4b] 服務頁面完成，QA PASS`

==================================================
## 十一、Phase 4c — Portfolio 頁面 + QA
==================================================

### Definition of Done
- [ ] portfolio/index.vue（列表頁）
- [ ] portfolio/[slug].vue（動態詳情頁）
- [ ] 從 content/portfolio/ JSON 正確讀取數據
- [ ] 分類篩選器正常
- [ ] 3 個已知 slug 截圖正常
- [ ] **QA Gate：截圖通過 Portfolio Checklist**

### portfolio/[slug].vue 邏輯

```typescript
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const { getPortfolioBySlug, getAdjacentSlugs, getLocalizedField } = usePortfolio()

const portfolio = computed(() => getPortfolioBySlug(slug.value))
if (!portfolio.value) throw createError({ statusCode: 404, statusMessage: 'Portfolio not found' })

const { prev, next } = getAdjacentSlugs(slug.value)
const { locale } = useI18n()
const title = computed(() => getLocalizedField(portfolio.value?.title, locale.value))
```

### Phase 4c QA Gate

```bash
npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000/portfolio /tmp/openclaw/hostlink-qa/phase4c-portfolio-list.jpg

npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000/portfolio/megaman /tmp/openclaw/hostlink-qa/phase4c-portfolio-megaman.jpg

npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000/portfolio/wheelock-living /tmp/openclaw/hostlink-qa/phase4c-portfolio-wheelock.jpg
```

Portfolio 列表頁 Checklist：
- [ ] Header + Footer 可見
- [ ] 頁面標題「作品集」可見
- [ ] 分類篩選器可見
- [ ] 至少 6 個作品卡片可見（有圖片 + 標題）

Portfolio 詳情頁 Checklist：
- [ ] Header + Footer 可見
- [ ] 作品標題可見
- [ ] 至少一張作品圖片
- [ ] 客戶、年份、服務等資料可見
- [ ] 上一個/下一個導航可見

**Commit：** `[Phase 4c] Portfolio 頁面完成，QA PASS`

==================================================
## 十二、Phase 4d — Blog + 聯絡 + 法律 + Error + QA
==================================================

### Definition of Done
- [ ] blog/index.vue + blog/[slug].vue
- [ ] about-us.vue
- [ ] contact-us.vue + server/api/contact.post.ts
- [ ] terms-and-conditions.vue
- [ ] privacy-policy.vue
- [ ] disclaimer.vue
- [ ] error.vue（404/500）
- [ ] **QA Gate：截圖 /about-us 及 /contact-us 通過 Checklist**
- [ ] **QA Gate：`npm run generate` 成功**

### 聯絡表單後端（server/api/contact.post.ts）

```typescript
import { z } from 'zod'
import nodemailer from 'nodemailer'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const data = schema.parse(body)

  const config = useRuntimeConfig()
  const transporter = nodemailer.createTransport({
    host: config.emailSmtpHost,
    port: Number(config.emailSmtpPort),
    auth: { user: config.emailUser, pass: config.emailPass },
  })

  await transporter.sendMail({
    from: config.emailUser,
    to: config.contactFormTo,
    replyTo: data.email,
    subject: `[網站查詢] ${data.subject} - 來自 ${data.name}`,
    html: `<p>姓名：${data.name}</p><p>電郵：${data.email}</p>
           <p>電話：${data.phone || '未填'}</p>
           <p>訊息：<br>${data.message.replace(/\n/g, '<br>')}</p>`,
  })

  return { success: true }
})
```

### Phase 4d QA Gate

```bash
# Build test
npm run generate 2>&1 | tail -5

# Screenshots
npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000/about-us /tmp/openclaw/hostlink-qa/phase4d-about.jpg

npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000/contact-us /tmp/openclaw/hostlink-qa/phase4d-contact.jpg
```

確認：
- [ ] `/about-us` Header + Footer + 頁面內容可見
- [ ] `/contact-us` 有聯絡表單（姓名、電郵、訊息欄位可見）
- [ ] `/contact-us` 有公司地址、電話、電郵
- [ ] `npm run generate` 成功，無 error

**Commit：** `[Phase 4d] 所有頁面完成，generate 成功，QA PASS`

==================================================
## 十三、Phase 5 — 三語測試
==================================================

### Definition of Done
- [ ] 所有語言版本主要頁面截圖完成並對比
- [ ] 無 `[missing translation]` 警告
- [ ] 語言切換功能在所有頁面正常
- [ ] **QA Gate：三語截圖通過 Checklist**

### 三語截圖

```bash
# 繁中（預設）
npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000 /tmp/openclaw/hostlink-qa/phase5-home-zh-HK.jpg

# 簡中
npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000/zh-hans/ /tmp/openclaw/hostlink-qa/phase5-home-zh-hans.jpg

# 英文
npx playwright screenshot --browser chromium --full-page \
  http://localhost:3000/en/ /tmp/openclaw/hostlink-qa/phase5-home-en.jpg
```

三語 Checklist：
- [ ] 繁中首頁：「首頁」、「服務」、「作品集」等中文可見
- [ ] 簡中首頁：「首页」、「服务」等簡體字可見
- [ ] 英文首頁：「Home」、「Services」、「Portfolio」等英文可見
- [ ] 三語 URL 正確（`/`、`/zh-hans/`、`/en/`）
- [ ] 無 `[missing translation]` 字眼出現

**Commit：** `[Phase 5] 三語測試完成，QA PASS`

==================================================
## 十四、Phase 6 — 性能優化 + Lighthouse
==================================================

### Definition of Done
- [ ] 所有圖片用 `<NuxtImg>` + lazy loading
- [ ] Hero 圖片有 `loading="eager"` + `fetchpriority="high"`
- [ ] Lighthouse Performance > 85
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 95

```bash
npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-home.html
```

**Commit：** `[Phase 6] 性能優化完成，Lighthouse 報告已生成`

==================================================
## 十五、Phase 7 — 最終交付
==================================================

### Definition of Done
- [ ] `npm run generate` 最終通過
- [ ] README.md 完整
- [ ] KNOWN_ISSUES.md 完整
- [ ] Git 所有 commit 完整
- [ ] WhatsApp 通知用戶

### README.md 內容

- 專案簡介
- 技術棧（Nuxt 4 + vue-i18n + TailwindCSS + TypeScript）
- 本地開發：`npm install` → `.env` 設定 → `npm run dev`
- 靜態生成：`npm run generate`
- 新增 Portfolio 作品：新增 `content/portfolio/[slug].json` + 圖片至 `public/images/portfolio/[slug]/`
- 新增 Blog 文章：新增 `content/blog/[slug].md`
- 部署建議：Vercel / Netlify

### 最終 WhatsApp 通知

```
✅ Hostlink 網站重建完成！

📄 完成頁面：~62 頁（三語）
🌐 語言：繁中 / 簡中 / 英文
📊 Lighthouse：Performance XX / Accessibility XX / SEO XX
📦 位置：~/.openclaw/workspace/hostlink-rebuild/
⚠️ 已知問題：[從 KNOWN_ISSUES.md 摘要]
```

**Commit：** `[Phase 7] 最終交付 🎉`

==================================================
## 十六、Phase Chain 指引（每個 subagent 必讀）
==================================================

### 接棒規則

每個 Phase Agent 完成後：

1. 執行截圖 + Checklist（見本章節 Visual QA Test Plan）
2. 把 QA 結果記入 PROGRESS.md 和 REBUILD_STATE.json
3. **全部 PASS 才 spawn 下一個 Phase**
4. 有 FAIL 必須修復 + 重新截圖，通過後才繼續
5. spawn 下一個 Phase 用：
   ```
   sessions_spawn(agentId="b03", runtime="subagent", mode="run", runTimeoutSeconds=0,
     label="hostlink-phase-X", task="...")
   ```

### REBUILD_STATE.json 更新格式

```json
{
  "currentPhase": "4b",
  "status": "in_progress",
  "qaResults": {
    "4a": {
      "status": "PASS",
      "checklist": {
        "logo_visible": true,
        "nav_visible": true,
        "footer_visible": true,
        "hero_visible": true
      },
      "screenshotPath": "/tmp/openclaw/hostlink-qa/phase4a-home.jpg",
      "completedAt": "2026-03-01T15:00:00"
    }
  }
}
```

==================================================
## 附錄一：42 個 Portfolio Slug（WP API 確認）
==================================================

```
128waterloo, acices-visa-reg-system, antonhill, apollo,
ask-super-outlet, british, china-base, crawford-house,
diamonds-gallery, e-post, give-a-day, gregory,
harriman, hkneo, hugotech, jackel-porter, koko-reserve,
ladder-mission, life-buddies, livebook, manga,
megaman, montbell, nicsang, otic, panda-box,
pearson, potak, sea-global-line, slim-beauty,
st-james-settlement, st-james, sun-lawyers, terisa,
the-orchards, the-overlander, the-travel-advisers,
west-park, wheelock-living, wharf-art-competition-2019-20,
wharf-art-competition-2020-21, your-internet-solution-partner
```

==================================================
## 附錄二：Phase 概覽
==================================================

| Phase | 內容 | QA Gate |
|-------|------|---------|
| 0 | 環境準備 + 原站截圖基準 | 原站截圖成功 |
| 1 | WP API 分析 + 資源下載 | assets-map.json 完整 |
| 2 | Nuxt 4 初始化 | npm run dev 成功，無 500 |
| 3 | 數據層 + i18n | tsc --noEmit 無 error |
| 4a | Layout + 首頁 | 截圖通過全站 + 首頁 Checklist |
| 4b | 服務頁面 × 8 | 截圖通過服務頁 Checklist |
| 4c | Portfolio 列表 + 詳情 | 截圖通過 Portfolio Checklist |
| 4d | Blog + 聯絡 + 法律 + generate | generate 成功 + 截圖通過 |
| 5 | 三語測試 | 三語截圖全 PASS |
| 6 | 性能優化 + Lighthouse | Perf > 85, A11y > 90 |
| 7 | 最終交付 + README | WhatsApp 通知 |

==================================================
## 附錄三：中途問題處理方針
==================================================

| 情況 | 處理方式 |
|------|---------|
| 爬取失敗（timeout）| 重試 3 次，記錄至 errors.json，跳過 |
| 圖片下載失敗 | 用灰色 placeholder，記錄 |
| 語言版本缺失 | 用繁中填充，記錄 |
| Build error | **必須修復後才繼續，唔可以跳過** |
| 截圖 Checklist FAIL | **必須修復後重新截圖，唔可以繼續下一 Phase** |
| 功能無法還原 | 記錄至 KNOWN_ISSUES.md |
| 卡住超過 30 分鐘 | 記錄問題，停止並報告 |
