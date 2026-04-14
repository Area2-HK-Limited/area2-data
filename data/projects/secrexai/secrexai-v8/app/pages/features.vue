<template>
  <div>
    <Head>
      <title>功能介紹 | SecrexAI — 你做唔切嘅嘢，全部幫你做到</title>
      <meta name="description" content="SecrexAI 擁有永久記憶系統、私人加密存儲、20+ 技能分類。市場調查、QA 測試、計劃書生成、股票分析、AI 圖片生成⋯⋯全部一個平台搞掂。" />
    </Head>

    <!-- Hero -->
    <section class="section features-hero" style="padding-top: 5rem; padding-bottom: 5rem;">
      <div class="glow-orb glow-purple" style="width:600px;height:600px;top:-200px;right:-200px;opacity:0.6;"></div>
      <div class="glow-orb glow-blue" style="width:500px;height:500px;bottom:-100px;left:-150px;opacity:0.5;"></div>
      <div class="container text-center" style="position:relative;z-index:2;">
        <div class="badge badge-blue mb-2" style="display: inline-flex; margin-bottom: 1.25rem;">⚡ 功能介紹</div>
        <h1 style="margin-bottom: 1.25rem; line-height: 1.15;">
          你做唔切嘅嘢，<br>
          <span class="gradient-text">全部幫你做到</span>
        </h1>
        <p style="font-size: 1.125rem; max-width: 600px; margin: 0 auto 2rem; color: #94A3B8; line-height: 1.7;">
          永久記憶你嘅一切、私人加密存儲、越用越個人化。<br>
          唔係普通 AI — 係真正了解你嘅專屬智能秘書。
        </p>
        <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
          <NuxtLink to="/subscribe" class="btn btn-primary btn-lg">🚀 開始 14 日免費試用</NuxtLink>
          <a href="#skill-categories" class="btn btn-outline btn-lg">睇所有技能 ↓</a>
        </div>
        <!-- Hero Stats -->
        <div style="display:flex; gap:2.5rem; justify-content:center; flex-wrap:wrap; margin-top:3rem;">
          <div v-for="stat in heroStats" :key="stat.label" style="text-align:center;">
            <div style="font-size:1.75rem; font-weight:800; background: var(--gradient-brand); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">{{ stat.value }}</div>
            <div style="font-size:0.8125rem; color:#64748B; margin-top:0.25rem;">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skill Categories -->
    <section id="skill-categories" class="section section-alt">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue" style="display:inline-flex; margin-bottom:1rem;">📂 技能分類一覽</div>
          <h2>你嘅 AI，識做你識做同唔識做嘅嘢</h2>
          <p>20+ 技能分類，覆蓋工作、生活、創作、研究全場景</p>
        </div>
        <div class="skill-grid">
          <div
            v-for="cat in skillCats"
            :key="cat.name"
            class="skill-card"
          >
            <div class="skill-icon">{{ cat.icon }}</div>
            <h3 class="skill-name">{{ cat.name }}</h3>
            <p class="skill-desc">{{ cat.desc }}</p>
            <div class="skill-tags">
              <span v-for="skill in cat.skills" :key="skill" class="skill-tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Memory System Deep Dive -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue" style="display:inline-flex; margin-bottom:1rem;">🧩 記憶系統</div>
          <h2>點解 SecrexAI 記憶比其他平台強？</h2>
          <p>唔係 session 記憶，係真正嘅永久個人記憶庫</p>
        </div>

        <!-- Memory vs Others comparison -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; max-width:900px; margin:0 auto 3rem;">
          <div class="card" style="border-color:rgba(239,68,68,0.2); background:rgba(239,68,68,0.03);">
            <div style="font-size:1.25rem; margin-bottom:1rem; color:#F87171;">❌ 其他公開 AI 平台</div>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.625rem;">
              <li v-for="con in memoryCompare.cons" :key="con" style="font-size:0.875rem; color:#94A3B8; display:flex; gap:0.5rem; align-items:flex-start;">
                <span style="color:#F87171; flex-shrink:0; margin-top:0.1em;">✗</span>{{ con }}
              </li>
            </ul>
          </div>
          <div class="card" style="border-color:rgba(59,130,246,0.3); background:rgba(59,130,246,0.04);">
            <div style="font-size:1.25rem; margin-bottom:1rem; color:#60A5FA;">✅ SecrexAI 私人平台</div>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:0.625rem;">
              <li v-for="pro in memoryCompare.pros" :key="pro" style="font-size:0.875rem; color:#94A3B8; display:flex; gap:0.5rem; align-items:flex-start;">
                <span style="color:#4ADE80; flex-shrink:0; margin-top:0.1em;">✓</span>{{ pro }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Memory Tech Features -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1.5rem; max-width:1000px; margin:0 auto;">
          <div v-for="feat in memoryFeats" :key="feat.title" class="card" style="text-align:center;">
            <div style="font-size:2.5rem; margin-bottom:0.75rem;">{{ feat.icon }}</div>
            <h3 style="font-size:1rem; margin-bottom:0.5rem;">{{ feat.title }}</h3>
            <p style="font-size:0.8125rem; color:#64748B;">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Eric's Testimonial -->
    <section class="section section-alt">
      <div class="container" style="max-width:800px;">
        <div class="section-title">
          <div class="badge badge-green" style="display:inline-flex; margin-bottom:1rem; background:rgba(34,197,94,0.1); color:#4ADE80; border-color:rgba(34,197,94,0.2);">💭 用家真實分享</div>
          <h2>親身體驗：私人 AI 嘅分別</h2>
        </div>
        <div class="testimonial-card">
          <div class="quote-mark">"</div>
          <blockquote class="testimonial-text">
            之前用 Perplexity 發現記憶始終差啲 — 最重要嘅係，喺公開 AI 平台透露太多私人背景資料有資安風險，而且資料可能會用於模型訓練，變相將商業機密送咗出去。
            <br><br>
            用咗 SecrexAI 之後，因為係私人加密平台，多重安全機制，我開始放心分享多啲私人背景資料。呢個 AI 慢慢了解到我係邊個、我做咩行業、我嘅客戶係邊類人。
            <br><br>
            之後佢嘅建議同分析，完全係基於我嘅實際情況，唔係流於表面嘅 general knowledge。呢個體驗，之前從來未試過。
          </blockquote>
          <div class="testimonial-author">
            <div class="author-avatar">E</div>
            <div>
              <div class="author-name">Eric Tong</div>
              <div class="author-title">Area2 (HK) Limited 創辦人 · AI 數碼營銷</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Private vs Public Platform -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue" style="display:inline-flex; margin-bottom:1rem;">🔐 私人 vs 公開平台</div>
          <h2>為咩私人平台記憶更準確？</h2>
          <p>你願意告訴 AI 幾多，佢就能幫你幾多</p>
        </div>
        <div class="comparison-scroll-wrapper">
          <div class="privacy-comparison">
            <div v-for="(row, i) in privacyRows" :key="i" class="privacy-row">
              <div class="privacy-label">{{ row.label }}</div>
              <div class="privacy-public">
                <span class="privacy-badge privacy-bad">❌</span>
                <span>{{ row.public }}</span>
              </div>
              <div class="privacy-private">
                <span class="privacy-badge privacy-good">✅</span>
                <span>{{ row.private }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Features Deep Dive -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <div class="badge badge-blue" style="display:inline-flex; margin-bottom:1rem;">⚙️ 核心功能</div>
          <h2>讓你真正用得著的 AI</h2>
        </div>
        <div style="display: flex; flex-direction: column; gap: 3rem; max-width: 900px; margin: 0 auto;">
          <div v-for="(feat, i) in coreFeatures" :key="feat.title" class="core-feat-row">
            <div :class="['core-feat-text', i % 2 === 1 ? 'order-last-desktop' : '']">
              <div class="badge badge-blue" style="margin-bottom: 0.75rem; display: inline-flex;">{{ feat.icon }}</div>
              <h3 style="font-size: 1.375rem; margin-bottom: 0.75rem;">{{ feat.title }}</h3>
              <p style="margin-bottom: 1.25rem; color: #94A3B8;">{{ feat.desc }}</p>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                <li v-for="pt in feat.points" :key="pt" style="font-size: 0.875rem; color: #94A3B8; display: flex; gap: 0.5rem; align-items: flex-start;">
                  <span style="color: #4ADE80; flex-shrink: 0; margin-top: 0.1em;">✓</span> {{ pt }}
                </li>
              </ul>
            </div>
            <div class="card core-feat-visual" :style="i % 2 === 1 ? 'order: -1' : ''">
              <div style="font-size: 4rem; text-align:center; margin-bottom:1rem;">{{ feat.visual }}</div>
              <div v-if="feat.highlights" style="display:flex; flex-direction:column; gap:0.5rem;">
                <div v-for="h in feat.highlights" :key="h" style="font-size:0.8125rem; color:#64748B; padding:0.5rem 0.75rem; background:rgba(255,255,255,0.03); border-radius:0.5rem; border:1px solid rgba(255,255,255,0.05);">{{ h }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="background: linear-gradient(135deg, #1E1B4B 0%, #0F1629 100%); text-align: center;">
      <div class="glow-orb glow-purple" style="width:500px;height:500px;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.4;"></div>
      <div class="container" style="position:relative;z-index:2;">
        <h2 style="margin-bottom: 1rem;">準備好體驗所有功能？</h2>
        <p style="color: #94A3B8; margin-bottom: 2rem; font-size:1.0625rem;">14 日免費試用，免費試用，隨時取消</p>
        <NuxtLink to="/subscribe" class="btn btn-primary btn-lg">🚀 立即免費試用</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const heroStats = [
  { value: '20+', label: '技能分類' },
  { value: '永久', label: '記憶系統' },
  { value: '端到端', label: '加密存儲' },
  { value: '0%', label: '數據用於訓練' },
]

const skillCats = [
  {
    icon: '📊',
    name: '市場調查',
    desc: '用 AI 做競品分析、市場研究，掌握行業動態',
    skills: ['競品分析', '關鍵詞 Research', 'XHS/IG 分析', 'EDM Campaign', '行業報告'],
  },
  {
    icon: '📝',
    name: '計劃書生成',
    desc: '用 AI 寫網站開發計劃書、產品方案，快速出稿',
    skills: ['開發計劃書', '產品 Roadmap', 'Marketing Plan', '商業提案', 'MVP 規劃'],
  },
  {
    icon: '⚗️',
    name: '網站測試 + QA Report',
    desc: '用 AI 試用網站及 CMS，自動生成 QA 測試報告',
    skills: ['UI 測試', '功能測試', '兼容性測試', 'BUG 報告', 'UAT 報告'],
  },
  {
    icon: '📑',
    name: '使用者手冊生成',
    desc: '用 AI 實際操作網站/CMS，生成圖文並茂嘅手冊',
    skills: ['操作手冊', 'CMS 教程', '功能說明書', 'FAQ 生成', 'Onboarding Guide'],
  },
  {
    icon: '🔩',
    name: 'CMS 內容更新',
    desc: '用 AI 登入 CMS 幫你更新頁面內容，解放雙手',
    skills: ['內容更新', '圖片優化', 'SEO 設定', '文章發布', '批量修改'],
  },
  {
    icon: '🛫',
    name: '行程研究',
    desc: '用 AI 檢查旅遊景點網站，搵有名額的日子',
    skills: ['活動預訂追蹤', '景點研究', '行程規劃', '機票比價', '開放日期監察'],
  },
  {
    icon: '📊',
    name: '股票估值分析',
    desc: '用 AI 睇公司年報，搵護城河，做估值模型',
    skills: ['年報分析', '財務比率', '競爭優勢分析', '估值模型', '行業對比'],
  },
  {
    icon: '⚙️',
    name: 'Skill 固化',
    desc: '將成功做到嘅流程叫 AI 固化，建立成可重用技能',
    skills: ['工作流程固化', '自定義技能', '自動化流程', 'SOP 建立', '批量執行'],
  },
  {
    icon: '📃',
    name: '文件處理',
    desc: '處理 PDF、Word、Excel 文件，提取關鍵資訊',
    skills: ['PDF 摘要', '文件翻譯', '表格分析', 'OCR 識字', 'Word 生成'],
  },
  {
    icon: '🎭',
    name: 'AI 圖片生成',
    desc: '用 AI 生成高質素嘅營銷圖片，即時可用',
    skills: ['產品圖', '海報設計', 'EDM 配圖', '社交媒體圖', 'Banner 製作'],
  },
  {
    icon: '💾',
    name: '程式助理',
    desc: '用 AI 幫你寫 code、debug、code review，提速開發',
    skills: ['程式碼生成', 'BUG 修復', 'Code Review', '技術方案', 'API 整合'],
  },
  {
    icon: '👤',
    name: 'HR + 文書',
    desc: '用 AI 做招聘文書、入職流程，節省 HR 時間',
    skills: ['JD 生成', '面試問題', 'Onboarding 文件', 'Contract 摘要', '績效表格'],
  },
  {
    icon: '👨‍👩‍👧',
    name: '親子家庭',
    desc: '用 AI 幫手湊仔功課、規劃家庭活動',
    skills: ['功課輔導', '活動建議', '興趣班比較', '暑假規劃', '繪本推薦'],
  },
  {
    icon: '📮',
    name: '申請代辦',
    desc: '用 AI 幫手填表、整理申請文件，減少繁瑣手續',
    skills: ['簽證申請', '補助申請', '表格填寫', '文件整理', '申請追蹤'],
  },
  {
    icon: '🗓️',
    name: '個人效率',
    desc: '用 AI 做時間管理、生活安排，搞掂每日瑣事',
    skills: ['日程規劃', '任務清單', '優先排序', '生活小幫手', '提醒設定'],
  },
  {
    icon: '🌍',
    name: '翻譯 + 語言',
    desc: '文件翻譯、語言優化，支援廣東話、普通話、英文',
    skills: ['中英翻譯', '廣東話優化', '英文商業書信', '多語言文件', '語言校對'],
  },
  {
    icon: '🎶',
    name: '音樂創作',
    desc: '用 AI 生成音樂，從歌詞到旋律一步完成',
    skills: ['歌詞創作', '背景音樂', '商業音樂', 'Podcast 片頭', '廣告音效'],
  },
  {
    icon: '🎥',
    name: '影片腳本',
    desc: '用 AI 幫手寫影片腳本，提升視頻製作效率',
    skills: ['短片腳本', '推廣影片文案', 'YouTube 描述', 'TikTok 腳本', '旁白文字'],
  },
  {
    icon: '🔎',
    name: '搜尋 + 資訊整合',
    desc: '即時搜尋互聯網，摘要長文，整合多方資訊',
    skills: ['即時搜尋', 'YouTube 摘要', '新聞整合', '深度研究', '來源核實'],
  },
  {
    icon: '🧩',
    name: '記憶 + 個人化',
    desc: '永久記憶你的偏好、工作習慣、客戶資料',
    skills: ['永久記憶', '工作習慣學習', '客戶記錄', '個人化回覆', '歷史追蹤'],
  },
]

const memoryCompare = {
  cons: [
    '每次對話重新開始，冇記憶',
    '唔敢分享太多私人資料',
    '回答係 general，唔係你的情況',
    '資料可能用於訓練模型',
    '無法跨 session 累積了解',
  ],
  pros: [
    '永久記住你的背景、習慣、偏好',
    '私人加密平台，放心分享細節',
    '回答完全基於你的實際情況',
    '資料屬於你，絕不用於訓練',
    '越用越了解你，建議越來越準',
  ],
}

const memoryFeats = [
  {
    icon: '⚡',
    title: 'LanceDB 向量數據庫',
    desc: '業界頂尖向量搜尋引擎，毫秒級檢索你的個人記憶庫',
  },
  {
    icon: '🔁',
    title: '混合式搜尋',
    desc: 'Semantic + Keyword 雙重搜尋，記憶召回更準確更全面',
  },
  {
    icon: '🔐',
    title: '亞太區加密存儲',
    desc: '騰訊雲亞太區私有部署，端到端加密，資料從不離港區',
  },
  {
    icon: '✅',
    title: '永久 vs Session 記憶',
    desc: '唔係 session 完就消失，係真正嘅長期記憶積累',
  },
  {
    icon: '🧼',
    title: '完全數據自主',
    desc: '隨時查閱、修改、刪除你的個人記憶，完全控制',
  },
]

const privacyRows = [
  {
    label: '個人背景資料',
    public: '唔敢講，怕外洩',
    private: '放心分享，私人加密',
  },
  {
    label: '記憶準確度',
    public: '因資料不足，建議 generic',
    private: '基於完整背景，建議精準',
  },
  {
    label: '數據用途',
    public: '可能用於訓練模型',
    private: '100% 只屬於你',
  },
  {
    label: '跨對話記憶',
    public: '每次重新開始',
    private: '永久累積，越用越聰明',
  },
  {
    label: '行業 + 客戶資料',
    public: '唔敢輸入敏感商業資料',
    private: '安全存儲，AI 深度了解業務',
  },
]

const coreFeatures = [
  {
    icon: '🧩',
    visual: '🧩',
    title: '永久記憶系統',
    desc: 'SecrexAI 記住你係誰、你的工作習慣、你的客戶資料。每次對話都比上次更了解你，越用越聰明。',
    points: [
      '記住你的工作偏好同習慣',
      '記錄客戶歷史，下次配對更準',
      '自動連接過往對話脈絡',
      '無需每次重新解釋背景',
    ],
    highlights: ['LanceDB 向量數據庫', 'Semantic + Keyword 混合搜尋', '永久存儲，唔會消失'],
  },
  {
    icon: '🔐',
    visual: '🔐',
    title: '私人加密存儲',
    desc: '所有資料存於亞太區私有雲，端到端加密。你的 AI 只屬於你，唔會訓練任何共用模型。',
    points: [
      '騰訊雲亞太區私有部署',
      '端到端加密，資料唔外洩',
      '絕不用你的資料訓練模型',
      '可隨時刪除所有個人資料',
    ],
    highlights: ['端到端加密', '私有雲部署（JP）', 'GDPR 合規'],
  },
  {
    icon: '💭',
    visual: '💭',
    title: '廣東話原生對話',
    desc: '唔係翻譯腔，係真正嘅香港廣東話。SecrexAI 理解本地語境、俚語、商業表達方式。',
    points: [
      '理解廣東話俚語同本地用語',
      '香港商業環境深度優化',
      '中英夾雜自然對話',
      '回覆符合香港人表達習慣',
    ],
    highlights: ['廣東話原生', '中英夾雜識別', '本地俚語理解'],
  },
]
</script>

<style scoped>
/* ── Hero ── */
.features-hero {
  background: linear-gradient(135deg, #0A0E1A 0%, #0F1629 100%);
  overflow: hidden;
  position: relative;
}

/* ── Skill Grid ── */
.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.1);
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
  color: var(--text-primary);
}

.skill-desc {
  font-size: 0.8125rem;
  color: #64748B;
  margin-bottom: 0.875rem;
  line-height: 1.5;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: 100px;
  font-size: 0.725rem;
  font-weight: 600;
  background: rgba(59, 130, 246, 0.08);
  color: #60A5FA;
  border: 1px solid rgba(59, 130, 246, 0.15);
}

/* ── Testimonial ── */
.testimonial-card {
  background: var(--bg-card);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 1.25rem;
  padding: 2.5rem;
  position: relative;
}

.quote-mark {
  font-size: 5rem;
  color: rgba(59, 130, 246, 0.2);
  line-height: 1;
  font-family: Georgia, serif;
  position: absolute;
  top: 1rem;
  left: 2rem;
  pointer-events: none;
}

.testimonial-text {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #CBD5E1;
  margin-bottom: 1.75rem;
  padding-top: 1.5rem;
  font-style: italic;
  border: none;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--gradient-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.author-name {
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--text-primary);
}

.author-title {
  font-size: 0.8125rem;
  color: #64748B;
  margin-top: 0.1rem;
}

/* ── Privacy Comparison ── */
.comparison-scroll-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  padding-bottom: 0.5rem;
}

.privacy-comparison {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  min-width: max-content;
}

@media (max-width: 768px) {
  .comparison-scroll-wrapper {
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    scroll-snap-type: x mandatory;
  }
  .privacy-comparison {
    margin-left: 0;
    margin-right: 0;
    border-radius: 0.75rem;
    border-left: none;
    border-right: none;
    min-width: 500px;
    /* Ensure scrollbar is visible on mobile */
    scrollbar-width: thin;
    scrollbar-color: rgba(96, 165, 250, 0.3) transparent;
  }
  .privacy-comparison::-webkit-scrollbar {
    height: 4px;
  }
  .privacy-comparison::-webkit-scrollbar-track {
    background: transparent;
  }
  .privacy-comparison::-webkit-scrollbar-thumb {
    background: rgba(96, 165, 250, 0.3);
    border-radius: 2px;
  }
  .privacy-row {
    scroll-snap-align: start;
  }
}

.privacy-row {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 0;
  border-bottom: 1px solid var(--border);
  padding: 0;
}
.privacy-row:last-child {
  border-bottom: none;
}

.privacy-label {
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  border-right: 1px solid var(--border);
  display: flex;
  align-items: center;
}

.privacy-public,
.privacy-private {
  padding: 1rem 1.25rem;
  font-size: 0.8125rem;
  color: #94A3B8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.privacy-public {
  border-right: 1px solid var(--border);
  background: rgba(239, 68, 68, 0.02);
}

.privacy-private {
  background: rgba(59, 130, 246, 0.03);
}

.privacy-badge {
  font-size: 0.875rem;
  flex-shrink: 0;
}

/* ── Core Features ── */
.core-feat-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.core-feat-text {}
.core-feat-visual {
  text-align: center;
  padding: 2rem;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .skill-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .skill-grid {
    grid-template-columns: 1fr;
  }

  .core-feat-row {
    grid-template-columns: 1fr !important;
    gap: 1.5rem;
  }

  .core-feat-visual {
    order: -1 !important;
  }

  .order-last-desktop {
    order: 0 !important;
  }

  .privacy-row {
    grid-template-columns: 1fr;
  }

  .privacy-label {
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .privacy-public {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  div[style*="grid-template-columns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    padding: 1.75rem 1.25rem;
  }
  .quote-mark {
    font-size: 3.5rem;
  }
}
</style>
