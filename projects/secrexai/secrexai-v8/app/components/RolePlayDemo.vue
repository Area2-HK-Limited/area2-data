<template>
  <div>
    <!-- Scenario selector -->
    <div class="tab-scroll-wrap" style="overflow-x: auto; padding-bottom: 0; margin-bottom: 2rem;">
      <div class="tabs" style="min-width: max-content; justify-content: center;">
        <button
          v-for="(s, i) in scenarios"
          :key="s.id"
          class="tab-btn"
          :class="{ active: activeIdx === i }"
          @click="selectScenario(i)"
        >
          {{ s.label }}
        </button>
      </div>
    </div>

    <!-- Chat display -->
    <div class="demo-split" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 960px; margin: 0 auto; align-items: start;">
      <!-- Info panel -->
      <div>
        <div class="badge badge-blue" style="margin-bottom: 1rem; display: inline-flex;">
          <FaIcon :icon="current.icon" style="font-size:0.75rem;" />
          {{ current.label }}
        </div>
        <h3 style="font-size: 1.375rem; margin-bottom: 0.75rem;">{{ current.title }}</h3>
        <p style="color: #94A3B8; margin-bottom: 1.5rem;">{{ current.desc }}</p>
        <div style="margin-bottom: 1.5rem;">
          <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #60A5FA; margin-bottom: 0.75rem;">使用技能組合</div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span v-for="skill in current.skills" :key="skill" class="badge badge-blue" style="font-size: 0.75rem;">{{ skill }}</span>
          </div>
        </div>
        <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 0.75rem; padding: 1rem; margin-bottom: 1.5rem;">
          <div style="font-size: 0.75rem; font-weight: 700; color: #4ADE80; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.375rem;">節省時間</div>
          <div style="font-size: 0.875rem; color: #94A3B8;">{{ current.timeSave }}</div>
        </div>
        <NuxtLink to="/subscribe" class="btn btn-primary w-full" style="justify-content: center;">
          <FaIcon icon="rocket" style="font-size:0.875rem;" />
          立即試用 SecrexAI
        </NuxtLink>
      </div>
      <!-- Chat panel -->
      <div class="wa-chat roleplay-chat" style="max-width: 100%;">
        <div class="wa-header">
          <div class="wa-avatar"><FaIcon icon="robot" style="font-size:1.1rem;color:#fff;" /></div>
          <div>
            <div class="wa-name">SecrexAI</div>
            <div class="wa-status">● 在線</div>
          </div>
        </div>
        <div class="wa-body roleplay-wa-body" ref="chatBody" style="overflow-y: auto; padding: 0.5rem;">
          <div v-for="(msg, i) in visibleMsgs" :key="i" class="wa-msg" :class="msg.from === 'user' ? 'wa-msg-user' : 'wa-msg-ai'">
            <span style="white-space: pre-wrap;">{{ msg.text }}</span>
            <div class="wa-msg-time">{{ msg.time }}</div>
          </div>
          <div v-if="isTyping" class="wa-msg wa-msg-ai" style="color: #8696A0; font-style: italic; font-size: 0.8125rem;">
            SecrexAI 正在輸入...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const chatBody = ref(null)
const activeIdx = ref(0)
const visibleMsgs = ref([])
const isTyping = ref(false)
let timer = null

const scenarios = [
  {
    id: 'morning', icon: 'sun', label: '晨早 Briefing',
    title: '中小企老闆 — 晨早資訊 Briefing',
    desc: '老闆開工前快速了解美股走勢同今日行業資訊，節省 30 分鐘搜尋時間。',
    skills: ['即時搜尋', '資訊摘要', '排程提醒', '永久記憶'],
    timeSave: '自己搜尋需 30-40 分鐘 → SecrexAI 2 分鐘搞定',
    messages: [
      { from: 'user', text: '早晨！幫我睇吓昨晚美股同今日有冇咩重要新聞', time: '09:01' },
      { from: 'ai', text: '早晨！SPX 收市 5,234 點，升 0.8%，科技股普遍造好。\n\n今日要聞：\n1) 港府宣布新一輪 SME 資助計劃\n2) 香港零售銷售按年升 3.2%\n\n你今日有咩待辦事項需要提醒？', time: '09:01' },
      { from: 'user', text: '好！幫我設提醒，今日下午 3 點要打電話俾陳生', time: '09:02' },
      { from: 'ai', text: '已設定排程提醒：今日下午 2:45 按排程提示你 3pm 致電陳生。\n\n需要我整理一份佢嘅溝通記錄先？', time: '09:02' },
      { from: 'user', text: '好主意！幫我列出上次同佢傾嘅重點', time: '09:03' },
      { from: 'ai', text: '根據記憶系統，你上次（3月15日）同陳生提到：\n\n1. 新門市裝修預算 HK$80萬\n2. 希望 4 月底前完工\n3. 待確認物料供應商\n\n今次電話可以跟進呢 3 點。', time: '09:03' },
    ],
  },
  {
    id: 'report', icon: 'chart-line', label: '業績報告',
    title: '月度業績報告 — Excel → PDF → Email',
    desc: '月底整合多份 Excel 數據，自動生成業績報告 PDF 並 email 給 Director。',
    skills: ['數據分析', '報告生成', 'PDF 輸出', 'Email 發送'],
    timeSave: '人手整理需 4-6 小時 → SecrexAI 5-10 分鐘',
    messages: [
      { from: 'user', text: '幫我整理今個月嘅業績報告，有幾份 Excel 數據表，整合晒出一份 PDF', time: '10:00' },
      { from: 'ai', text: '好嘅！請把 Excel 檔案傳給我，我會幫你：\n\n1. 整合各部門數據\n2. 分析月度趨勢（同上月對比）\n3. 撰寫執行摘要\n4. 生成報告 PDF\n\n需要加入 KPI 達成率分析嗎？', time: '10:00' },
      { from: 'user', text: '係！要有 KPI 達成率，同上月同比，最後加埋行動建議', time: '10:01' },
      { from: 'ai', text: '明白！整合銷售/成本/毛利數據中... 大概 3-5 分鐘完成。', time: '10:01' },
      { from: 'user', text: '完成咗，幫我直接 email 俾 director@company.com', time: '10:06' },
      { from: 'ai', text: '業績報告 PDF 已生成（共 8 頁）。\n\n已按排程寄出 email 至 director@company.com\n主題：「3月業績報告 — SecrexAI 智能匯整」\n\n需要我同時發 WhatsApp 摘要版俾你？', time: '10:07' },
    ],
  },
  {
    id: 'edm', icon: 'envelope-open', label: 'EDM 文案',
    title: 'EDM + Social 文案一條龍',
    desc: '新品發布，一次過生成 EDM、IG、FB 三個渠道文案，並附配套產品圖片。',
    skills: ['多渠道文案', '圖片生成', 'EDM 排版', 'Email 發送'],
    timeSave: '人手撰寫 + 設計需 3-4 小時 → SecrexAI 10-15 分鐘',
    messages: [
      { from: 'user', text: '下週有新品發布，幫我整 EDM、IG post、FB post 嘅文案，全部廣東話', time: '14:30' },
      { from: 'ai', text: '好！幫我知多啲：\n1. 新品係咩？\n2. 目標受眾？\n3. 主訴求（優惠/功能/情感）？', time: '14:30' },
      { from: 'user', text: '係新款香薰蠟燭系列，目標 25-40 歲女性，主打舒壓放鬆，春天主題', time: '14:31' },
      { from: 'ai', text: '明白！生成三個版本中...\n\nEDM 主題行（3 個選項）\nIG Caption（100字，帶 hashtag）\nFB 帖文（150字，帶 CTA）\n\nNano Banana Pro 可同時生成春天主題產品圖，需要嗎？', time: '14:32' },
      { from: 'user', text: '要！幫我生成一張春天主題產品圖', time: '14:33' },
      { from: 'ai', text: '三個渠道文案 + 春天主題產品插圖已完成！\n\n已按排程發 email 至你的信箱，主題：「新品文案 + 配圖草稿（待 Review）」', time: '14:36' },
    ],
  },
  {
    id: 'meeting', icon: 'microphone', label: '會議紀錄',
    title: '會議錄音轉記錄',
    desc: '上傳會議錄音，AI 自動提取 Action Items，設排程提醒，並 email 所有與會者。',
    skills: ['語音轉文字', '會議摘要', 'Action Items', '排程提醒'],
    timeSave: '人手整理需 1-2 小時 → SecrexAI 5-8 分鐘',
    messages: [
      { from: 'user', text: '我開會時錄咗音，幫我整理會議紀錄同跟進列表', time: '16:00' },
      { from: 'ai', text: '已收到錄音，即刻進行語音轉文字...\n\n完成！共 47 分鐘，識別出 4 位講者。\n\n正在整理：\n1. 會議摘要\n2. 決策事項\n3. Action Items（負責人 + deadline）', time: '16:02' },
      { from: 'user', text: '幫我列出所有 action items，要有負責人同期限', time: '16:03' },
      { from: 'ai', text: 'Action Items（共 6 項）：\n\n1. 陳生：提交Q2預算方案 — 截止 3/28\n2. 李小姐：聯絡供應商報價 — 截止 3/25\n3. 你：確認新門市地點 — 截止 3/31\n...\n\n需要為每個 action item 設定排程提醒嗎？', time: '16:03' },
      { from: 'user', text: '好！同時幫我將會議紀錄 email 俾所有與會者', time: '16:04' },
      { from: 'ai', text: '已為 6 個 action items 設定排程提醒。\n\n會議紀錄 PDF 已按排程發送至 4 位與會者\n主題：「[會議紀錄] 3月23日季度策略會議」', time: '16:05' },
    ],
  },
  {
    id: 'complaint', icon: 'headset', label: '客戶投訴',
    title: '客戶投訴分析 + 草擬回覆',
    desc: '收到語音投訴，AI 分析問題，搜尋客戶歷史，草擬有誠意回覆，設跟進提醒。',
    skills: ['語音轉文字', '投訴分析', '永久記憶', '排程提醒'],
    timeSave: '人手處理需 40-60 分鐘 → SecrexAI 5-8 分鐘',
    messages: [
      { from: 'user', text: '[語音訊息] 有個客人 WhatsApp 語音投訴，話上週送嘅貨有問題，好嬲', time: '11:20' },
      { from: 'ai', text: '已完成語音轉文字。\n\n投訴摘要：客戶陳太（上週五下單）收到貨後：\n1. 商品有碰撞痕\n2. 顏色同照片有差異\n3. 包裝不整齊\n\n客戶語氣急躁，要求退換貨。查緊佢嘅歷史記錄...', time: '11:21' },
      { from: 'user', text: '搵吓佢嘅歷史訂單', time: '11:21' },
      { from: 'ai', text: '根據記憶：陳太係第 3 次購買，總消費 HK$4,200，過往 2 次均無投訴。\n\n呢次係新倉庫搬遷後首批訂單，建議同時 check 同期其他訂單。', time: '11:22' },
      { from: 'user', text: '幫我草擬廣東話回覆，要有誠意，同埋設 3 日後跟進提醒', time: '11:22' },
      { from: 'ai', text: '草擬回覆：\n\n「陳太您好，非常抱歉今次帶來唔好嘅體驗！我哋已安排優先退換，同時補送一份小禮物表達誠意。\n\n呢次問題源於倉庫搬遷過渡期，我哋已即時改善包裝流程。感謝您嘅寶貴反饋！」\n\n已設定排程：3 日後提醒跟進退換是否完成。', time: '11:23' },
    ],
  },
  {
    id: 'research', icon: 'magnifying-glass', label: '市場研究',
    title: 'Marketing Research Report',
    desc: '行銷主管需要香港健身行業競品分析報告，Porter\'s Five Forces + SWOT + 用戶聲音。',
    skills: ['網上搜尋', '競品分析', 'MBA 框架', 'PDF 輸出'],
    timeSave: '人手研究需 3-5 工作日 → SecrexAI 20-30 分鐘',
    messages: [
      { from: 'user', text: '幫我做一份香港健身行業嘅市場研究報告，要有競品分析同市場機遇', time: '09:30' },
      { from: 'ai', text: '好！研究方向：\n\n1. 市場規模 + 增長趨勢\n2. 主要競品（Pure/California/本地）分析\n3. 用戶痛點（社媒 + 論壇聲音）\n4. 市場機遇\n\n需要 Porter\'s Five Forces + SWOT？', time: '09:30' },
      { from: 'user', text: '係！要有 Porter\'s Five Forces + SWOT，加埋用戶聲音', time: '09:31' },
      { from: 'ai', text: '正在搜尋最新市場數據、競品資訊、LIHKG/XHS 用戶反饋...\n\n（完成）報告包括：\n- 市場概況\n- Porter\'s Five Forces\n- 主要競品 SWOT\n- 消費者行為分析\n- 4 個市場機遇', time: '09:45' },
      { from: 'user', text: '出 PDF 俾我', time: '09:46' },
      { from: 'ai', text: '《香港健身行業市場研究報告 2026》PDF 已生成（14頁）。\n\n主要發現：市場年複合增長率 8.3%，線上/混合訓練模式有顯著缺口，建議優先進攻 35-50 歲女性群體。', time: '09:52' },
    ],
  },
  {
    id: 'sem', icon: 'chart-column', label: 'SEM 報告',
    title: 'Google Ads SEM Performance Report',
    desc: '上傳 Google Ads CSV，AI 生成雙語 SEM 表現報告（含圖表），自動 email 客戶。',
    skills: ['CSV 分析', '數據視覺化', '雙語報告', 'Email 發送'],
    timeSave: '人手製作需 3-5 小時 → SecrexAI 5-10 分鐘',
    messages: [
      { from: 'user', text: 'Google Ads 呢個月嘅 CSV export，幫我出 SEM performance report，要有圖表 + 雙語', time: '15:00' },
      { from: 'ai', text: '收到 CSV！分析中...\n\n識別到 12 個 campaigns，3 個廣告組。\n主要指標：Impressions / Clicks / CTR / CPC / Conversions / ROAS\n\n需要加埋 MoM 對比？', time: '15:01' },
      { from: 'user', text: '係！要 MoM 對比，同埋加入下月建議', time: '15:01' },
      { from: 'ai', text: '報告結構：\n\n1. Executive Summary（中英）\n2. Campaign 表現對比（圖表）\n3. MoM 變化分析\n4. Top/Bottom Performers\n5. 下月優化建議（3 點）\n\nPDF 生成中...', time: '15:05' },
      { from: 'user', text: '出好咗 email 俾客戶 client@abc.com', time: '15:10' },
      { from: 'ai', text: 'SEM Performance Report（3月）已生成（10頁，含 6 個圖表）。\n\n主要亮點：整體 ROAS +23% MoM，建議下月將預算集中前 3 個 performing campaigns。\n\n已按排程發送至 client@abc.com\n主題：「[SEM Report] 3月廣告表現分析」', time: '15:11' },
    ],
  },
  {
    id: 'onboarding', icon: 'clipboard-list', label: '員工入職',
    title: '新員工 Onboarding Checklist',
    desc: '新同事入職，AI 摘要 SOP 文件，生成 3 日 Onboarding 計劃，排程 email 送達。',
    skills: ['文件摘要', 'Onboarding 計劃', 'PDF 輸出', 'Email 排程'],
    timeSave: '人手整理需 2-3 小時 → SecrexAI 5-10 分鐘',
    messages: [
      { from: 'user', text: '新同事下週一入職，幫我整一份 onboarding checklist，同埋將公司 SOP 摘要俾佢', time: '10:00' },
      { from: 'ai', text: '好！需要知道：\n1. 新同事職位（前線/後台/管理？）\n2. 有冇現有 SOP 文件可以提供？\n3. Checklist 要包括哪些範疇？', time: '10:00' },
      { from: 'user', text: '係客服主任，我有 3 份 SOP PDF，你幫我摘要，checklist 要有第 1-3 日嘅安排', time: '10:01' },
      { from: 'ai', text: '收到 3 份 SOP（客服流程/退換貨政策/CRM 系統）。摘要完成，各約 200 字。\n\nOnboarding 安排：\n\n第 1 日：公司介紹 + IT setup\n第 2 日：SOP 閱讀 + 主管 1v1 輔導\n第 3 日：在監督下處理首批客服查詢', time: '10:03' },
      { from: 'user', text: '好！整成 PDF 發俾新同事 email', time: '10:04' },
      { from: 'ai', text: '《新同事入職指南（客服主任）》PDF 已生成（6頁），包含 3 日 Checklist + SOP 摘要 + 重要聯絡人名單。\n\n已設定排程：週一早上 8:30 送達新同事 email。', time: '10:05' },
    ],
  },
]

const current = computed(() => scenarios[activeIdx.value])

const selectScenario = (i) => {
  activeIdx.value = i
  visibleMsgs.value = []
  isTyping.value = false
  if (timer) clearInterval(timer)
  startPlayback()
}

const startPlayback = () => {
  let idx = 0
  const msgs = current.value.messages
  const next = () => {
    if (idx >= msgs.length) return
    isTyping.value = true
    setTimeout(() => {
      isTyping.value = false
      visibleMsgs.value.push(msgs[idx])
      idx++
      nextTick(() => {
        if (chatBody.value) {
          const el = chatBody.value
          const parent = el.closest('[data-radix-scroll-area-viewport]') || el.parentElement
          if (parent) parent.scrollTop = parent.scrollHeight
        }
      })
    }, msgs[idx].from === 'ai' ? 1200 : 400)
  }
  next()
  timer = setInterval(() => {
    if (idx < msgs.length) next()
    else clearInterval(timer)
  }, 2200)
}

onMounted(() => startPlayback())
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.roleplay-chat {
  display: flex;
  flex-direction: column;
  height: 380px;
}
.roleplay-wa-body {
  flex: 1;
  min-height: 0;
}
@media (max-width: 768px) {
  div[style*="grid-template-columns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
  .roleplay-chat {
    height: 340px;
  }
}
</style>
