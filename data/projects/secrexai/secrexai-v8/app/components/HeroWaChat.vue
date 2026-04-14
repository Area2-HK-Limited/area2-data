<template>
  <div class="hero-chat-wrapper">
    <div class="wa-chat hero-wa-chat">
      <div class="wa-header">
        <div class="wa-avatar"><FaIcon icon="robot" style="font-size:1.1rem;color:#fff;" /></div>
        <div style="flex:1; text-align: left;">
          <div class="wa-name" style="text-align: left;">SecrexAI</div>
          <div class="wa-status" style="text-align: left;">● 在線</div>
        </div>
        <!-- Play/Stop button -->
        <button
          class="hero-ctrl-btn"
          :class="isPlaying ? 'hero-ctrl-btn--stop' : 'hero-ctrl-btn--play'"
          @click="togglePlayStop"
          :title="isPlaying ? '暫停自動播放' : '繼續自動播放'"
        >
          <FaIcon :icon="isPlaying ? 'pause' : 'play'" style="font-size:0.7rem;" />
          {{ isPlaying ? '暫停' : '播放' }}
        </button>
        <!-- Refresh button -->
        <button class="hero-refresh-btn" @click="refreshScenario" :disabled="isRefreshing" title="換一個場景">
          <FaIcon icon="rotate-right" :style="isRefreshing ? 'animation: spin 0.6s linear infinite;' : ''" />
          重新整理
        </button>
      </div>
      <div class="wa-body hero-wa-body" ref="chatBody">
        <div v-for="(msg, i) in visibleMessages" :key="`${scenarioIdx}-${i}`" class="wa-msg" :class="msg.from === 'user' ? 'wa-msg-user' : 'wa-msg-ai'">
          <!-- EDM image preview bubble -->
          <template v-if="msg.type === 'image-preview'">
            <div class="wa-msg-image-preview">
              <div class="wa-msg-image-box">
                <div class="wa-img-placeholder">
                  <FaIcon icon="envelope-open-text" style="font-size:1.6rem;color:#60A5FA;margin-bottom:0.3rem;" />
                  <div style="font-size:0.72rem;color:#94A3B8;font-weight:600;">EDM Preview</div>
                  <div style="font-size:0.65rem;color:#475569;margin-top:0.15rem;">SecrexAI 早鳥優惠 🎉</div>
                </div>
              </div>
              <div style="font-size:0.75rem;color:#94A3B8;margin-top:0.25rem;">📎 edm-preview.png</div>
            </div>
          </template>
          <!-- Vibe code website preview bubble -->
          <template v-else-if="msg.type === 'website-preview'">
            <div class="wa-msg-image-preview">
              <div class="wa-msg-image-box wa-msg-image-box--web">
                <div class="wa-img-placeholder">
                  <FaIcon icon="globe" style="font-size:1.6rem;color:#34D399;margin-bottom:0.3rem;" />
                  <div style="font-size:0.72rem;color:#94A3B8;font-weight:600;">Live Website</div>
                  <div style="font-size:0.65rem;color:#34D399;margin-top:0.15rem;">secrexai-demo.pages.dev</div>
                </div>
              </div>
              <div style="font-size:0.75rem;color:#94A3B8;margin-top:0.25rem;">🌐 網站已上線</div>
            </div>
          </template>
          <!-- Normal text bubble -->
          <template v-else>
            <span style="white-space: pre-wrap;">{{ msg.text }}</span>
          </template>
          <div class="wa-msg-time">{{ msg.time }}</div>
        </div>
        <div v-if="isTyping" class="wa-msg wa-msg-ai" style="color: #8696A0; font-style: italic; font-size: 0.8125rem;">
          SecrexAI 正在輸入...
        </div>
      </div>
    </div>
    <div class="hero-scenario-label">
      <FaIcon icon="circle-info" style="font-size:0.7rem;color:#60A5FA;" />
      場景 {{ scenarioIdx + 1 }} / {{ scenarios.length }}：{{ scenarios[scenarioIdx]?.scenarioLabel || '真實對話示範' }}
      <span v-if="!isPlaying" class="hero-paused-badge">⏸ 已暫停</span>
    </div>
  </div>
</template>

<script setup>
const chatBody = ref(null)
const visibleMessages = ref([])
const isTyping = ref(false)
const isRefreshing = ref(false)
let timer = null

const scenarios = [
  {
    scenarioLabel: '跟進客戶',
    messages: [
      { from: 'user', text: '幫我跟進陳生，上週話考慮緊我哋方案', time: '09:15' },
      { from: 'ai', text: '根據記錄，陳生上次（3月18日）話需時考慮。\n建議今日傳一個簡短跟進，我幫你草擬：\n\n「陳生你好，想了解一下你對方案嘅意見，方便聊 15 分鐘嗎？」', time: '09:15' },
      { from: 'user', text: '好，直接幫我發', time: '09:16' },
      { from: 'ai', text: '已為你排程今日下午 2pm 發送跟進訊息。✅', time: '09:16' },
    ],
  },
  {
    scenarioLabel: '會議 Action Items',
    messages: [
      { from: 'user', text: '我剛開完會，幫我整理會議重點', time: '11:42' },
      { from: 'ai', text: '好的！請傳錄音或重點要點。\n我幫你整理成：\n• 決策事項\n• Action Items（負責人 + deadline）\n• 下次會議議程', time: '11:42' },
      { from: 'user', text: '3個action items：財務陳生3/28交預算、我3/31確認地點、李生3/25報價', time: '11:43' },
      { from: 'ai', text: '✅ 已設定 3 個排程提醒：\n• 3/27 提示陳生交預算\n• 3/30 提示你確認地點\n• 3/24 提示李生報價\n\n會議紀錄已整理，需要 email 給與會者嗎？', time: '11:43' },
    ],
  },
  {
    scenarioLabel: '開會前準備',
    messages: [
      { from: 'user', text: '聽日 10am 同 Hiram 開會，幫我提醒', time: '20:05' },
      { from: 'ai', text: '已設定明日 9:45am 提醒你 10am 與 Hiram 開會。\n\n需要我提前準備相關資料摘要嗎？', time: '20:05' },
      { from: 'user', text: '要！Hiram 係 Area2 合夥人，幫我列上次討論重點', time: '20:06' },
      { from: 'ai', text: '根據記憶，你同 Hiram 上次（3月20日）討論：\n1. SecrexAI 新客戶方案定價\n2. 3月底前 onboard 3 個新客\n3. 待定：企業版功能範圍', time: '20:06' },
    ],
  },
  {
    scenarioLabel: '發送錄音俾 AI',
    messages: [
      { from: 'user', text: '[🎙️ 語音訊息 0:47]\n（錄音：客人陳太投訴，話收到貨有碰撞痕，要退換）', time: '14:20' },
      { from: 'ai', text: '已分析你的語音訊息 🎙️\n\n投訴摘要：\n客戶：陳太（第 3 次購買 VIP）\n問題：收貨有碰撞痕 + 顏色差異\n情緒：急躁，要求退換\n\n草擬回覆（廣東話）：\n「陳太您好！非常抱歉今次嘅體驗，我哋即刻為您安排退換，並補送小禮物致歉。」\n\n需要同時設 3 日後跟進提醒嗎？', time: '14:20' },
      { from: 'user', text: '好！設提醒，同發俾佢', time: '14:21' },
      { from: 'ai', text: '✅ 回覆已發送俾陳太\n✅ 3 日後退換跟進提醒已設定', time: '14:21' },
    ],
  },
  {
    scenarioLabel: 'AI 發送 PDF 報告',
    messages: [
      { from: 'user', text: '幫我整理今個月業績，出 PDF 發俾老闆', time: '10:00' },
      { from: 'ai', text: '好！我會幫你：\n1. 整合銷售數據 + KPI 達成率\n2. 加入 MoM 對比分析\n3. AI 生成行動建議\n4. 輸出 PDF 報告\n\n請傳 Excel 數據或列出主要數字。', time: '10:00' },
      { from: 'user', text: '本月銷售 HK$45萬，上月 HK$38萬，目標 HK$42萬', time: '10:01' },
      { from: 'ai', text: '✅ 業績報告 PDF 已生成（共 8 頁）\n\n📊 摘要：\n本月 HK$45萬（超目標 +7.1%，MoM +18.4%）\n建議：複製本月高效策略到 Q2 規劃\n\n📎 已按排程發送至老闆 email\n主題：「3月業績報告 — SecrexAI 智能匯整」', time: '10:04' },
    ],
  },
  {
    scenarioLabel: '月底業績跟進',
    messages: [
      { from: 'user', text: '下週一要同新客Onboard，幫我安排follow-up schedule', time: '17:00' },
      { from: 'ai', text: '明白！建議 Onboarding 跟進安排：\n\n• 下週一：Onboarding 會議（設提醒）\n• +3日：確認帳號設定完成\n• +7日：第一週使用情況跟進\n• +30日：月度 Review\n\n確認後我幫你全部設排程提醒。', time: '17:00' },
      { from: 'user', text: '確認！', time: '17:01' },
      { from: 'ai', text: '✅ 已為 4 個跟進節點設定排程提醒！\n新客 Onboarding 流程啟動完成。', time: '17:01' },
    ],
  },
  {
    scenarioLabel: '廣東話文案生成',
    messages: [
      { from: 'user', text: '幫我草擬廣東話 IG 文案，推廣新款香薰蠟燭，春天主題', time: '16:15' },
      { from: 'ai', text: '好！已生成 3 個版本：\n\n1️⃣ 情感版：\n「春日限定 🌸 係咁，煮好嘅嘢，要喺對嘅時刻享受。今年春天，點一枝屬於你嘅蠟燭。」\n\n2️⃣ 功效版：\n「忙碌一日後，俾自己 5 分鐘。天然精油 + 春日花香，係最好嘅犒賞。」\n\n點解選擇哪一款？', time: '16:16' },
      { from: 'user', text: '用第一版！加埋 hashtag 同 call to action', time: '16:17' },
      { from: 'ai', text: '✅ 完整版：\n「春日限定 🌸 係咁，煮好嘅嘢，要喺對嘅時刻享受。今年春天，點一枝屬於你嘅蠟燭。\n\n→ 主頁連結訂購，或 DM 查詢 🕯️\n\n#香薰蠟燭 #春日生活 #香港手工蠟燭 #selfcare #HKmade」', time: '16:17' },
    ],
  },
  // ── NEW: EDM 生成場景 ──
  {
    scenarioLabel: 'EDM 生成 + Email 預覽',
    messages: [
      { from: 'user', text: '幫我做一個 SecrexAI 早鳥優惠 EDM，今日發俾舊客', time: '10:30' },
      { from: 'ai', text: '好！正在生成 EDM 設計草稿……\n\n主題：SecrexAI 早鳥限時優惠 🎉\n• 標題：WhatsApp 直接用 Claude / GPT，無需 VPN\n• 優惠：月費計劃立減 30%（限前 50 名）\n• CTA：「立即搶先體驗」按鈕\n\n圖片正在生成中，請稍候… ⏳', time: '10:30' },
      { from: 'ai', type: 'image-preview', text: '', time: '10:31' },
      { from: 'ai', text: '✅ EDM 設計完成！以上係 Hero 圖預覽。\n\n現在發送 email 預覽俾你確認？\n（收件人：eric@area2.com）', time: '10:31' },
      { from: 'user', text: '好，發俾我睇', time: '10:32' },
      { from: 'ai', text: '📧 Email 預覽已發送至 eric@area2.com\n\n確認無誤後，我可以一鍵發送俾全部 268 個舊客聯絡人。是否確認發送？', time: '10:32' },
    ],
  },
  // ── NEW: Email 撰寫 ──
  {
    scenarioLabel: 'Email 撰寫回覆',
    messages: [
      { from: 'user', text: '幫我回覆客戶 email，佢投訴交貨延誤，想取消訂單', time: '09:45' },
      { from: 'ai', text: '明白！根據情況建議先道歉再挽留，我幫你草擬：\n\n「Dear Mr. Chan,\nSincerely apologize for the delay. We have expedited your order and it will arrive by Friday. As compensation, we offer a 15% discount on your next order.\nLooking forward to your kind understanding.\nBest regards」\n\n要調整語氣或補充細節嗎？', time: '09:45' },
      { from: 'user', text: '好！加埋中文版發俾我', time: '09:46' },
      { from: 'ai', text: '✅ 已生成中英雙語版本並發送至你嘅 email 草稿箱。\n\n如客戶同意繼續，我可以設定發貨跟進提醒。', time: '09:46' },
    ],
  },
  // ── NEW: WhatsApp 語音訊息分析 ──
  {
    scenarioLabel: 'WhatsApp 語音分析',
    messages: [
      { from: 'user', text: '[🎙️ 語音訊息 1:12]\n（錄音：供應商講話原材料缺貨，要遲兩週才到，價錢仲要加 15%）', time: '11:00' },
      { from: 'ai', text: '已分析供應商語音訊息 🎙️\n\n📋 摘要：\n• 問題：原材料缺貨\n• 延誤：+2 週\n• 加價：+15%\n\n建議行動：\n1. 聯絡備用供應商 B 比價\n2. 通知受影響客戶預期延誤\n3. 重新評估本季採購預算\n\n需要我幫你起草通知客戶嘅訊息嗎？', time: '11:01' },
      { from: 'user', text: '要！幫我通知 3 個主要客戶', time: '11:01' },
      { from: 'ai', text: '✅ 已為 3 個客戶（李生、張小姐、王公司）草擬個人化延誤通知，一鍵確認即可發送。', time: '11:02' },
    ],
  },
  // ── NEW: PDF 報告生成 ──
  {
    scenarioLabel: 'PDF 報告生成',
    messages: [
      { from: 'user', text: '幫我整一個 Q1 銷售報告 PDF，要出俾董事局', time: '16:30' },
      { from: 'ai', text: '好！請提供以下資料：\n1. Q1 各月銷售數字\n2. 主要產品 / 服務分類\n3. 同期目標\n\n或者直接貼 Excel 數據。', time: '16:30' },
      { from: 'user', text: '1月 $32萬，2月 $28萬，3月 $41萬，目標係每月 $35萬', time: '16:31' },
      { from: 'ai', text: '✅ Q1 報告 PDF 已生成（共 12 頁）\n\n📊 董事局摘要：\n• Q1 合計：HK$101萬\n• vs 目標（HK$105萬）：達成 96.2%\n• 最強月份：3月（超目標 +17.1%）\n• 建議：複製 3 月高效銷售策略至 Q2\n\n📎 PDF 已準備好，是否直接發送至 board@company.com？', time: '16:33' },
    ],
  },
  // ── NEW: 會議紀錄總結 ──
  {
    scenarioLabel: '會議紀錄總結',
    messages: [
      { from: 'user', text: '[🎙️ 錄音 47:23] 剛開完 Q2 策略會議', time: '14:55' },
      { from: 'ai', text: '正在分析 47 分鐘會議錄音… ⏳\n\n📋 會議紀錄已整理：\n\n✅ 決策事項（3 項）\n• Q2 主攻電商渠道，預算增 20%\n• 5 月前完成新產品線上架\n• 每月月底舉行回顧會議\n\n📌 Action Items（6 項）：\n• 陳生：Q2 預算方案 → 3/28\n• 李生：電商平台對接 → 4/15\n• 你：發送本次紀錄 → 今日\n\n是否發送紀錄 email 俾 4 位與會者？', time: '14:58' },
      { from: 'user', text: '發！同設定各人 deadline 提醒', time: '14:58' },
      { from: 'ai', text: '✅ 會議紀錄已發送\n✅ 已設定 5 個 Deadline 提醒\n✅ 提前 2 日自動提示相關負責人', time: '14:59' },
    ],
  },
  // ── NEW: SEO 報告分析 ──
  {
    scenarioLabel: 'SEO 報告分析',
    messages: [
      { from: 'user', text: '幫我分析上個月 SEO 表現，附上 GSC 數據：點擊 2,340，曝光 42,000，平均排名 8.3', time: '10:15' },
      { from: 'ai', text: '✅ SEO 分析完成！\n\n📊 表現摘要：\n• CTR：5.57%（行業平均 4.8%，表現佳 ✅）\n• 排名 8.3 → 進入首頁但未達 Top 5\n• 機會點：排名 6-10 的關鍵詞（共 87 個）距 Top 5 僅一步\n\n🎯 建議行動：\n1. 優化排名 6-10 嘅頁面 Title 同 Meta\n2. 增加相關 Internal Links\n3. 目標：下月 CTR 提升至 6.5%\n\n需要出 PDF 報告發俾客戶嗎？', time: '10:16' },
      { from: 'user', text: '要！雙語版本', time: '10:17' },
      { from: 'ai', text: '✅ 雙語 SEO 報告（中英）已生成，共 8 頁含分析圖表。', time: '10:18' },
    ],
  },
  // ── NEW: 客訴處理 ──
  {
    scenarioLabel: '客訴處理流程',
    messages: [
      { from: 'user', text: '緊急！大客陳生投訴貨品質量問題，話要告我哋', time: '15:30' },
      { from: 'ai', text: '⚠️ 高優先處理！\n\n根據陳生客戶記錄：\n• VIP 客戶（12 個月消費 HK$180,000）\n• 本月第 2 次投訴（上次：包裝問題）\n\n建議立即行動：\n1. 🔴 30 分鐘內電話致歉（我幫你準備話術）\n2. 安排明日上門取回問題貨品\n3. 補送同等貨品 + 致歉禮盒\n4. 48 小時跟進確認滿意度\n\n需要我幫你準備電話致歉話術嗎？', time: '15:30' },
      { from: 'user', text: '要！廣東話版本', time: '15:31' },
      { from: 'ai', text: '✅ 廣東話致歉話術已備好：\n\n「陳生您好，我係 X 公司 Eric，非常抱歉今次貨品令您失望，我哋即刻安排取換同跟進，確保問題唔再發生。您覺得聽日上午方便我派人上門嗎？」\n\n✅ 已設定 48 小時滿意度跟進提醒', time: '15:31' },
    ],
  },
  // ── NEW: 庫存管理 ──
  {
    scenarioLabel: '庫存管理問題',
    messages: [
      { from: 'user', text: 'A 款產品快賣完，記唔記得上次訂貨係幾時？要幾耐到貨？', time: '13:00' },
      { from: 'ai', text: '根據記錄查到：\n\n• A 款上次訂貨：3月 1 日\n• 到貨時間：約 14 個工作天\n• 供應商：永興貿易（陳生）\n• 上次訂量：500 件，單價 HK$45\n\n⚠️ 按目前銷售速度（每日約 20 件），預計 8 日後清零！\n\n建議今日下單，最少訂 600 件備緩衝。\n\n需要我幫你起草訂貨訊息發俾陳生嗎？', time: '13:01' },
      { from: 'user', text: '好，訂 700 件，問佢有冇早鳥優惠', time: '13:02' },
      { from: 'ai', text: '✅ 訂貨訊息已草擬並發送俾陳生\n✅ 已設定到貨前 3 日提醒\n✅ 訂貨記錄已更新', time: '13:02' },
    ],
  },
  // ── NEW: 新員工入職流程 ──
  {
    scenarioLabel: '新員工入職安排',
    messages: [
      { from: 'user', text: '下週一新同事 Cathy 入職，幫我安排入職流程', time: '17:30' },
      { from: 'ai', text: '好！為 Cathy 設計入職 Checklist：\n\n📅 入職前（本週五前）：\n□ 準備工作設備 + 帳號\n□ 發送歡迎 email（我幫你草擬）\n□ 通知團隊成員\n\n📅 入職當日（週一）：\n□ 9:30 接待 + 公司介紹\n□ 10:30 IT Setup 時間\n□ 下午：各部門 Walkthrough\n\n📅 第 1 週跟進：\n□ 每日 Check-in（15 分鐘）\n□ 週五 Week 1 Review\n\n是否設定全部提醒並發送歡迎 email？', time: '17:31' },
      { from: 'user', text: '全部設定！', time: '17:32' },
      { from: 'ai', text: '✅ 12 個入職提醒已設定\n✅ 歡迎 email 已發至 cathy@company.com\n✅ Cathy 入職計劃已備份', time: '17:32' },
    ],
  },
  // ── NEW: 財務報表解讀 ──
  {
    scenarioLabel: '財務報表解讀',
    messages: [
      { from: 'user', text: '幫我睇睇呢份月結單，收入 $62萬，支出 $58萬，毛利 $24萬，淨利 $4萬', time: '09:30' },
      { from: 'ai', text: '📊 財務快速分析：\n\n• 毛利率：38.7%（健康水平：>35% ✅）\n• 淨利率：6.5%（偏低，行業標準 10-15%）\n• 警示：支出 HK$58萬 佔收入 93.5%\n\n⚠️ 主要壓力來源建議檢查：\n1. 租金 / 人工比例是否過高？\n2. 有否固定支出可削減？\n3. 收入結構是否過度依賴單一客戶？\n\n需要我生成 3 個月趨勢對比報告嗎？', time: '09:31' },
      { from: 'user', text: '要！同時提醒我下次月結核數', time: '09:32' },
      { from: 'ai', text: '✅ 3 個月趨勢分析報告已生成\n✅ 已設定月底前核數提醒\n✅ 關鍵財務指標監控已開啟', time: '09:32' },
    ],
  },
  // ── NEW: 社媒文案 ──
  {
    scenarioLabel: '多平台文案一鍵生成',
    messages: [
      { from: 'user', text: '新產品上架：有機護膚套裝 HK$280，幫我出 IG、FB 同小紅書文案', time: '11:20' },
      { from: 'ai', text: '🎨 三平台文案已生成！\n\n📱 IG（輕鬆潮流風）：\n「有機護膚，由內到外 🌿 全天然成分，敏感肌親測有效！HK$280 全套，主頁連結訂購 ✨\n#有機護膚 #香港製造 #天然美肌 #selfcare」\n\n📘 FB（詳細介紹）：\n「【新品上架】精選有機成分護膚套裝，適合所有膚質...（250字詳細版）\n\n📕 小紅書（種草筆記）：\n「入手了這套香港有機護膚｜真實用後感...（800字種草版含 emoji）」\n\n哪個版本需要調整？', time: '11:21' },
      { from: 'user', text: '全部好！一鍵排程發布', time: '11:22' },
      { from: 'ai', text: '✅ 已排程：IG 今日 7pm / FB 今日 8pm / 小紅書明日 12pm（最佳互動時間）', time: '11:22' },
    ],
  },
  // ── NEW: Vibe Code 生成網站場景 ──
  {
    scenarioLabel: 'Vibe Code 生成網站',
    messages: [
      { from: 'user', text: '幫我起個活動報名頁，暑假親子工作坊，要靚仔有報名表', time: '15:00' },
      { from: 'ai', text: '明白！我幫你 vibe code 一個完整活動頁：\n\n📋 規劃：\n• Hero：親子插圖 + 活動主題\n• 活動詳情區（日期/地點/費用）\n• 報名表（姓名/電話/子女年齡）\n• 確認 email 自動回覆\n\n正在生成中… ⚡', time: '15:00' },
      { from: 'ai', text: '代碼生成完成 ✅\n\n已使用：\n• Nuxt 3 + Tailwind CSS\n• 響應式設計（手機/桌面）\n• 表單驗證 + 自動確認 email\n\n正在部署到 Cloudflare Pages… 🚀', time: '15:01' },
      { from: 'ai', type: 'website-preview', text: '', time: '15:02' },
      { from: 'ai', text: '🎉 網站已上線！\n\n🔗 https://workshop-signup.pages.dev\n\n功能已測試：\n✅ 報名表正常提交\n✅ 自動確認 email 發送\n✅ 手機版顯示正常\n\n需要將連結加入 IG bio 或 WhatsApp 廣播嗎？', time: '15:02' },
    ],
  },
]

const scenarioIdx = ref(Math.floor(Math.random() * scenarios.length))

// ── Play / Stop logic ──
const isPlaying = ref(true)
let pausedState = null   // stores { messages, idx } when paused mid-playback

const togglePlayStop = () => {
  if (isPlaying.value) {
    // Pause: clear pending timers, save current position
    isPlaying.value = false
    if (timer) { clearTimeout(timer); timer = null }
  } else {
    // Resume: restart from current scenario beginning (simple UX)
    isPlaying.value = true
    startLoop()
  }
}

const pickNextScenario = () => {
  let next
  do {
    next = Math.floor(Math.random() * scenarios.length)
  } while (next === scenarioIdx.value && scenarios.length > 1)
  scenarioIdx.value = next
  return scenarios[scenarioIdx.value].messages
}

const startLoop = (msgs) => {
  visibleMessages.value = []
  isTyping.value = false
  if (timer) clearTimeout(timer)

  const messages = msgs || scenarios[scenarioIdx.value].messages
  let idx = 0

  const showNext = () => {
    // If paused, stop advancing
    if (!isPlaying.value) return

    if (idx >= messages.length) {
      timer = setTimeout(() => {
        if (!isPlaying.value) return
        const next = pickNextScenario()
        startLoop(next)
      }, 2800)
      return
    }
    const msg = messages[idx]
    if (msg.from === 'ai') {
      isTyping.value = true
      timer = setTimeout(() => {
        if (!isPlaying.value) { isTyping.value = false; return }
        isTyping.value = false
        visibleMessages.value.push(msg)
        idx++
        nextTick(() => {
          if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight
        })
        timer = setTimeout(showNext, 1800)
      }, 1100)
    } else {
      visibleMessages.value.push(msg)
      idx++
      nextTick(() => {
        if (chatBody.value) chatBody.value.scrollTop = chatBody.value.scrollHeight
      })
      timer = setTimeout(showNext, 900)
    }
  }

  timer = setTimeout(showNext, 600)
}

const refreshScenario = () => {
  if (isRefreshing.value) return
  isRefreshing.value = true
  if (timer) clearTimeout(timer)
  isTyping.value = false
  const next = pickNextScenario()
  // If currently paused, just update visible messages to new scenario start + auto-resume
  if (!isPlaying.value) {
    isPlaying.value = true
  }
  startLoop(next)
  setTimeout(() => { isRefreshing.value = false }, 800)
}

onMounted(() => { startLoop() })
onUnmounted(() => { if (timer) clearTimeout(timer) })
</script>

<style scoped>
/* ── Full-width stable container ── */
.hero-chat-wrapper {
  width: 100%;
  /* Prevents the chat box from shrinking/growing with message content */
}

.hero-wa-chat {
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;
  /* Prevent bubble content from stretching the overall chat width */
  min-width: 0;
}
.hero-wa-body {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
}

/* AI bubble: always left-align text */
:deep(.wa-msg-ai) {
  text-align: left;
}

/* User bubble: keep right-aligned text */
:deep(.wa-msg-user) {
  text-align: left;
}

/* Ensure message bubbles don't stretch the chat width */
:deep(.wa-msg) {
  /* max-width already set in global CSS, but reinforce here */
  word-break: break-word;
  overflow-wrap: break-word;
}

/* ── Play/Stop button ── */
.hero-ctrl-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.28rem;
  padding: 0.28rem 0.62rem;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.13);
  background: rgba(255,255,255,0.05);
  color: #94A3B8;
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 0.35rem;
}
.hero-ctrl-btn--play:hover {
  background: rgba(52,211,153,0.12);
  border-color: rgba(52,211,153,0.3);
  color: #34D399;
}
.hero-ctrl-btn--stop {
  color: #F59E0B;
  border-color: rgba(245,158,11,0.2);
  background: rgba(245,158,11,0.07);
}
.hero-ctrl-btn--stop:hover {
  background: rgba(245,158,11,0.14);
  border-color: rgba(245,158,11,0.35);
  color: #FBBF24;
}

/* ── Refresh button ── */
.hero-refresh-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.7rem;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.06);
  color: #94A3B8;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  white-space: nowrap;
  flex-shrink: 0;
}
.hero-refresh-btn:hover {
  background: rgba(96,165,250,0.12);
  border-color: rgba(96,165,250,0.3);
  color: #60A5FA;
}
.hero-refresh-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Scenario label ── */
.hero-scenario-label {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: flex-end;
}
.hero-paused-badge {
  background: rgba(245,158,11,0.12);
  color: #F59E0B;
  border-radius: 4px;
  padding: 0.05rem 0.4rem;
  font-size: 0.68rem;
  font-weight: 600;
  margin-left: 0.2rem;
}

/* ── Image / website preview bubble ── */
.wa-msg-image-preview {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.wa-msg-image-box {
  width: 160px;
  height: 100px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1E3A5F 0%, #0F2541 100%);
  border: 1px solid rgba(96,165,250,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.wa-msg-image-box--web {
  background: linear-gradient(135deg, #0F3326 0%, #052018 100%);
  border-color: rgba(52,211,153,0.25);
}
.wa-img-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
