import { u as useHead, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, computed, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/hookable/dist/index.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unctx/dist/index.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/defu/dist/defu.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ufo/dist/index.mjs";
import "tailwindcss/colors";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/klona/dist/index.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "PersonAI — 住喺你 WhatsApp 的 24 小時全能 AI 助手 | 香港 SME 首選",
      meta: [
        { name: "description", content: "PersonAI 係香港 SME 專屬 WhatsApp AI 助手。廣東話原生、永久記憶、60+ 技能、數據存亞太區（日本）、唔訓練模型、PDPO 合規。" },
        { property: "og:title", content: "PersonAI — 住喺你 WhatsApp 的 24 小時全能 AI 助手" },
        { property: "og:description", content: "香港 SME 專屬 WhatsApp AI 助手。廣東話原生 · 永久記憶 · 60+ 技能 · PDPO 合規" }
      ]
    });
    const activeIndustry = ref("restaurant");
    const activeRole = ref("boss");
    const activeScene = ref("meeting");
    const openFaq = ref(null);
    const visibleMessages = ref([]);
    const isTyping = ref(false);
    const industries = [
      { id: "restaurant", emoji: "🍜", name: "餐飲", pains: ["訂位、餐牌更新、外賣訂單三頭燒", "每日手寫今日特別餐單好麻煩", "IG 宣傳想做但冇時間"], solutions: ["語音/文字即更新每日餐單", "自動出 IG Story 圖", "分析顧客常問問題，優化出品"] },
      { id: "retail", emoji: "🛍", name: "零售", pains: ["WhatsApp 客人查詢答唔完", "庫存查詢要找人", "促銷文案唔夠吸引"], solutions: ["AI 整理客人查詢優先級 + 草擬回覆", "追蹤庫存關鍵字提醒", "生成多版本促銷文案"] },
      { id: "property", emoji: "🏠", name: "地產", pains: ["放盤文案要中英對照", "睇樓提醒要逐個 WhatsApp", "客源跟進記唔住"], solutions: ["輸入樓盤資料即出中英放盤文案", "自動睇樓提醒", "記憶客人偏好，下次配對更準"] },
      { id: "accounting", emoji: "📊", name: "會計", pains: ["Chase 客人交單據好費時", "每月要出一堆報表", "英文 email 唔夠專業"], solutions: ["批量個人化 WhatsApp 提醒欠交客人", "自動整理數據出報表", "幫你草擬專業英文 email"] },
      { id: "education", emoji: "🎓", name: "教育", pains: ["功課批改建議要逐個寫", "家長 WhatsApp 查詢回覆慢", "教材翻譯耗時"], solutions: ["AI 生成個人化學生反饋範本", "快速分類家長查詢", "文件即時翻譯"] },
      { id: "beauty", emoji: "💅", name: "美容", pains: ["預約管理混亂", "IG 文案想要本地化但出唔到味", "產品介紹要一再重複解釋"], solutions: ["自動整理預約日程 + 提醒客人", "生成粵語風格種草文案", "建立常見問題自動回覆範本"] },
      { id: "logistics", emoji: "📦", name: "物流", pains: ["派送更新要逐個 WhatsApp", "貨物狀態查詢壓垮客服", "司機調度記唔住"], solutions: ["批量發送派送狀態更新", "建立快速查詢回覆系統", "自動整理每日任務清單"] },
      { id: "medical", emoji: "🏥", name: "醫療", pains: ["預約電話接唔完，double booking", "病歷資料分散難整理", "覆診提醒要人手打"], solutions: ["AI 整理預約記錄 + 排程提醒病人覆診", "摘要病人訊息 + 過往來往記錄", "批量發送個人化覆診 WhatsApp 提醒"] },
      { id: "fitness", emoji: "🏋️", name: "健身", pains: ["課堂排表要手動更新", "會員跟進記唔住誰快到期", "社媒推廣做唔夠"], solutions: ["AI 整理課堂時間表 + 提醒缺課會員", "記憶每個會員到期日 + 自動排程提醒續費", "生成健身 IG/Facebook 推廣文案"] },
      { id: "renovation", emoji: "🏗️", name: "裝修", pains: ["報價單每次都要由頭整", "項目多個同時進行進度難追蹤", "客戶跟進靠記性容易漏"], solutions: ["AI 根據工程類型快速生成報價單草稿", "整理多個項目進度成一覽表", "排程客戶跟進提醒"] },
      { id: "design", emoji: "🎨", name: "設計", pains: ["客戶 brief 零散 WhatsApp/email 到處都是", "報價追蹤靠記性容易忘記跟進", "發票提醒要人手送"], solutions: ["AI 整理客戶 brief + 提取關鍵要求成摘要", "記錄每個項目報價狀態 + 排程跟進提醒", "自動生成個人化催收 WhatsApp 訊息"] },
      { id: "ecommerce", emoji: "📱", name: "電商", pains: ["產品描述要一個個寫", "客服查詢量大回覆唔及時", "庫存低位唔知補貨慢"], solutions: ["AI 批量生成中英文產品描述", "整理常見客服問題 + 生成標準回覆範本", "記錄庫存關鍵字 + 低位時排程提醒補貨"] },
      { id: "bakery", emoji: "🍰", name: "烘焙", pains: ["WhatsApp 訂單整理要花大量時間", "IG 宣傳文案唔知點寫", "客戶訂單收咗但唔記得跟進確認"], solutions: ["AI 整理 WhatsApp 訂單資料成清單格式", "生成廣東話 IG 宣傳文案", "排程訂單確認提醒 + 取貨前自動提示"] },
      { id: "legal", emoji: "⚖️", name: "法律", pains: ["合約文件長摘要要花大量時間", "client 跟進多個案件難管理", "法律研究耗時"], solutions: ["AI 快速摘要合約要點 + 標記關鍵條款", "記錄每個 client 案件進度 + 排程跟進提醒", "搜尋整理相關法律資訊輔助研究"] },
      { id: "insurance", emoji: "💼", name: "保險", pains: ["客戶組合資料分散難以快速了解狀況", "產品推薦文案要因應每人不同", "跟進提醒要人手設定容易遺漏"], solutions: ["AI 整理客戶組合資訊 + 生成個人化摘要", "根據客戶需求生成針對性產品推薦文案草稿", "排程各類跟進提醒（保單續期/生日/市況更新）"] }
    ];
    const roles = [
      { id: "boss", emoji: "👔", name: "中小企老闆", messages: [
        { type: "user", text: "幫我搜尋今日香港財經新聞，重點係 AI 科技行業 🔍" },
        { type: "ai", text: "好嘅！我幫你整理今日重點：<br><br>📊 <strong>科技板塊</strong><br>1. 本港 AI 初創融資季增 35%<br>2. 政府宣布 AI 沙盒試驗計劃<br>3. 內地科技股早市反彈<br><br>需要我深入分析某個話題嗎？" },
        { type: "user", text: "幫我提醒 3pm 同客戶開會，準備下議程" },
        { type: "ai", text: "✅ 已設定 3pm 排程提醒！<br><br>我幫你準備議程框架：<br>1. 項目進度更新（10分鐘）<br>2. 問題討論（15分鐘）<br>3. 下一步行動（5分鐘）<br><br>需要翻譯英文版嗎？" }
      ] },
      { id: "marketer", emoji: "📣", name: "行銷人員", messages: [
        { type: "user", text: "客戶要今週五出 IG campaign，幫我搜下競品近期做咗咩" },
        { type: "ai", text: "好！我搜尋緊競品近 30 日 IG 活動...<br><br>📱 <strong>發現 3 個趨勢：</strong><br>1. 短視頻 Reel 係主流<br>2. 用戶生成內容互動率高 3x<br>3. 限時優惠 Story 轉化率最高<br><br>幫你生成 3 份廣東話文案方向？" },
        { type: "user", text: "好！幫我出 3 份訊息主打限時優惠" },
        { type: "ai", text: "📝 <strong>方案 A（緊迫感）：</strong><br>「最後 48 小時！呢個價錢係最後機會...」<br><br>📝 <strong>方案 B（社交證明）：</strong><br>「超過 1,000 個香港人都係用緊...」<br><br>📝 <strong>方案 C（利益導向）：</strong><br>「唔使一頓飯錢，幫你省返幾十個小時...」" }
      ] },
      { id: "accountant", emoji: "📊", name: "會計師", messages: [
        { type: "user", text: "月底喇，要 chase 3 個客人補交單據" },
        { type: "ai", text: "收到！我幫你生成個人化提醒訊息 🎯<br><br>• 老客戶 → 輕鬆友善版<br>• 新客戶 → 專業正式版<br>• 多次遲交 → 有點嚴肅版<br><br>點樣？" },
        { type: "user", text: "好！幫我出晒佢" },
        { type: "ai", text: "✅ 已生成 3 份個人化 WhatsApp 訊息：<br><br>「陳生您好，提醒您月底請記得提交單據...（輕鬆版）」<br>「李小姐您好，提醒您...（正式版）」<br>「王先生您好，再次提醒...（嚴肅版）」<br><br>複製發送即可！需要追蹤回覆狀態？" }
      ] },
      { id: "teacher", emoji: "🎓", name: "教師", messages: [
        { type: "user", text: "幫我分析呢篇學生作文，比下改善建議" },
        { type: "ai", text: "好！分析完畢 📚<br><br><strong>作文優點：</strong><br>• 開頭引題清晰<br>• 論點有一定邏輯性<br><br><strong>改善方向：</strong><br>1. 第 2 段論據不夠具體，建議加例子<br>2. 結尾較倉促<br>3. 句子結構可以更多樣化<br><br>幫你生成學生易明嘅反饋語言？" },
        { type: "user", text: "幫我出家長通知英文版" },
        { type: "ai", text: "✅ 英文家長通知：<br><br>「Dear Parents, We are pleased to inform you that...（完整英文版）」<br><br>已保留原本嘅重點訊息，語氣專業友善 📩" }
      ] },
      { id: "property", emoji: "🏠", name: "地產代理", messages: [
        { type: "user", text: "新盤資料：荃灣2房500呎，月租$12,000，近港鐵，即租" },
        { type: "ai", text: "收到！幫你生成放盤文案 🏠<br><br><strong>WhatsApp 廣播版（中文）：</strong><br>「🔥熱盤推介｜荃灣2房500呎 月租$12,000<br>✅近港鐵 ✅即租 ✅交通便利<br>有意請即回覆！」<br><br><strong>英文版：</strong><br>「Available Now! Tsuen Wan 2BR 500sqft $12,000/mo Near MTR...」" }
      ] }
    ];
    const scenes = [
      { id: "meeting", emoji: "📋", title: "老闆開會前", context: "有重要會議，需要準備資料和議程", steps: [
        { emoji: "🔍", skill: "即時搜尋", action: "搜尋相關行業資料" },
        { emoji: "📝", skill: "文件整理", action: "整理成議程摘要格式" },
        { emoji: "🌐", skill: "翻譯技能", action: "翻譯成英文版" },
        { emoji: "⏰", skill: "排程提醒", action: "設定會前排程提醒" }
      ], timeSaved: "原本 1 小時 → 只需 10 分鐘" },
      { id: "complaint", emoji: "😤", title: "收到客戶投訴", context: "客人不滿意服務，需要快速處理", steps: [
        { emoji: "🧠", skill: "投訴分析", action: "AI 分析核心問題" },
        { emoji: "💾", skill: "記憶搜尋", action: "搜尋客戶歷史記錄" },
        { emoji: "✉️", skill: "草擬回覆", action: "草擬專業道歉回覆" },
        { emoji: "📌", skill: "任務追蹤", action: "設定 follow-up 排程提醒" }
      ], timeSaved: "原本 40 分鐘 → 只需 8 分鐘" },
      { id: "marketing", emoji: "📱", title: "策劃推廣活動", context: "月底要出推廣方案，競爭激烈", steps: [
        { emoji: "🕵️", skill: "競品研究", action: "搜尋競品近期促銷" },
        { emoji: "📊", skill: "市場分析", action: "SWOT 分析" },
        { emoji: "✍️", skill: "文案生成", action: "生成多個推廣方案" },
        { emoji: "🎨", skill: "圖片生成", action: "出配圖建議" }
      ], timeSaved: "原本整日 → 只需 2 小時" },
      { id: "project", emoji: "🚀", title: "接到新項目", context: "新客戶項目，需要快速出計劃書", steps: [
        { emoji: "🔍", skill: "行業研究", action: "搜尋行業背景資料" },
        { emoji: "📄", skill: "計劃書", action: "生成計劃書草稿" },
        { emoji: "🌐", skill: "翻譯", action: "翻譯英文客戶版" },
        { emoji: "📅", skill: "排程提醒", action: "設定各階段 deadline 排程提醒" }
      ], timeSaved: "原本 3 日 → 只需半日" },
      { id: "report", emoji: "📊", title: "月底業績報告", context: "整理 Excel 數據，出月度報告", steps: [
        { emoji: "📁", skill: "數據整合", action: "整合多個 Excel 檔案" },
        { emoji: "📈", skill: "KPI 分析", action: "計算達成率 + MoM 對比" },
        { emoji: "✍️", skill: "報告生成", action: "AI 生成行動建議" },
        { emoji: "📧", skill: "Email 發送", action: "排程發送 PDF 報告" }
      ], timeSaved: "原本 4-6 小時 → 只需 10 分鐘" },
      { id: "meeting-rec", emoji: "🎙️", title: "會議錄音整理", context: "錄音檔轉會議紀錄 + Action Items", steps: [
        { emoji: "🎧", skill: "語音轉文字", action: "STT 處理錄音" },
        { emoji: "📋", skill: "會議摘要", action: "提取決策 + 行動項目" },
        { emoji: "⏰", skill: "排程提醒", action: "設定各 action 截止提醒" },
        { emoji: "📧", skill: "Email 發送", action: "發送會議紀錄給與會者" }
      ], timeSaved: "原本 1-3 小時 → 只需 10 分鐘" },
      { id: "sem-report", emoji: "📈", title: "SEM 表現報告", context: "Google Ads CSV 出每月客戶報告", steps: [
        { emoji: "📂", skill: "CSV 分析", action: "分析各 Campaign 表現" },
        { emoji: "📊", skill: "數據視覺化", action: "生成圖表 + MoM 對比" },
        { emoji: "✍️", skill: "雙語報告", action: "撰寫中英文報告" },
        { emoji: "📧", skill: "Email 發送", action: "排程 email 給客戶" }
      ], timeSaved: "原本 3-5 小時 → 只需 10 分鐘" },
      { id: "edm", emoji: "📨", title: "EDM + 社交媒體", context: "一次過出多渠道文案", steps: [
        { emoji: "📝", skill: "文案生成", action: "生成 EDM/IG/FB 三個渠道" },
        { emoji: "🎨", skill: "圖片生成", action: "Nano Banana Pro 生成配套圖" },
        { emoji: "📨", skill: "排版輸出", action: "EDM HTML 排版" },
        { emoji: "📧", skill: "Email 發送", action: "email 草稿俾 reviewer" }
      ], timeSaved: "原本 3-4 小時 → 只需 15 分鐘" }
    ];
    const personas = [
      { id: 1, emoji: "🧑‍💼", name: "陳先生", role: "零售店老闆 · 旺角 3 間門市", pain: "每日 WhatsApp 回覆客人同埋追貨，又要管帳，分身不暇", solution: "AI 自動整理客人查詢 + 追蹤訂單 + 生成週報，一個助手頂兩個兼職" },
      { id: 2, emoji: "💅", name: "Mandy", role: "美容院老闆娘 · 銅鑼灣", pain: "想做 IG 宣傳，但每次都唔知寫咩、配咩圖，好花時間", solution: "AI 直接生成廣東話文案 + 配圖 + 排程預約提醒，整個流程一條龍" },
      { id: 3, emoji: "🏠", name: "Victor", role: "地產代理 · 九龍區租務", pain: "放盤要中英對照、WhatsApp 跟進 + 睇樓提醒，好多繁瑣工作", solution: "AI 自動生成中英放盤文案 + 排程提醒客人 + 記憶跟進進度" },
      { id: 4, emoji: "📊", name: "Joyce", role: "會計師 · 荃灣 SME 客戶", pain: "Chase 客人交單據好費神，每次逐個 WhatsApp，回覆又慢", solution: "AI 自動識別欠交名單，批量個人化 WhatsApp 排程提醒，回覆率大幅提升" },
      { id: 5, emoji: "🍜", name: "Benny", role: "茶餐廳東主 · 深水埗", pain: "手寫今日特別餐單好麻煩，又想試試 IG Story，但唔識設計", solution: "AI 一句話更新餐單 + 即出 IG Story 圖 + 幫你估算食材需求" },
      { id: 6, emoji: "📦", name: "Andy", role: "快遞公司 · 葵涌 7 人", pain: "派單要整理 WhatsApp 訊息，客人問單追蹤又要逐條回", solution: "AI 自動整理訂單資料 + 生成派送更新 + 批量回覆客人查詢" },
      { id: 7, emoji: "🏥", name: "Dr. Chan", role: "牙科診所 · 沙田", pain: "預約電話接唔完，覆診提醒要人手打，容易漏", solution: "AI 整理預約日程 + 自動批量發送覆診 WhatsApp 提醒，前台輕鬆了" },
      { id: 8, emoji: "🏋️", name: "Grace", role: "瑜珈室老闆 · 西環", pain: "課堂排表改完又改，會員到期唔記得通知，流失率高", solution: "AI 整理課堂時間表 + 排程會員續費提醒 + 生成 IG 文案，節省大量時間" },
      { id: 9, emoji: "🏗️", name: "Simon", role: "裝修公司老闆 · 觀塘", pain: "每份報價單都要重新整，同時跟 5 個項目進度靠記性", solution: "AI 快速生成報價單草稿 + 整理項目進度一覽表 + 排程客戶跟進提醒" },
      { id: 10, emoji: "🎨", name: "Kelly", role: "自由設計師", pain: "客戶 brief 散落 WhatsApp，發票 chase 唔到錢，項目狀態記唔清", solution: "AI 整理客戶 brief 摘要 + 排程報價跟進提醒 + 生成催收訊息" },
      { id: 11, emoji: "⚖️", name: "Kenneth", role: "律師 · 中環", pain: "合約文件長，摘要耗時；多個 client 跟進容易漏", solution: "AI 快速摘要合約要點 + 整理各 client 案件進度 + 排程跟進提醒" },
      { id: 12, emoji: "💼", name: "Michelle", role: "保險顧問 · IFA", pain: "客戶組合分散，推薦文案要因人而異，跟進提醒靠記性容易遺漏", solution: "AI 整理客戶組合摘要 + 生成個人化推薦文案草稿 + 排程保單續期提醒" }
    ];
    const painPoints = [
      { id: 1, emoji: "🔒", title: "ChatGPT 香港封鎖", desc: "需要 VPN，複雜又有法律風險" },
      { id: 2, emoji: "🧠", title: "AI 唔記得我係邊個", desc: "每次都要由頭解釋背景" },
      { id: 3, emoji: "💰", title: "一堆工具，好散好貴", desc: "每月 HK$2,000+ 訂閱費" },
      { id: 4, emoji: "🔐", title: "怕業務資料外洩", desc: "數據去咗美國，受外國法律管" }
    ];
    const securityPromises = [
      { id: 1, emoji: "🇯🇵", title: "數據存亞太區（日本）", desc: "用戶對話記錄儲存於 Tencent Cloud 日本數據中心，唔去美國，受亞太地區法律保護。" },
      { id: 2, emoji: "🔒", title: "絕不訓練模型", desc: "你的業務資料只屬於你。PersonAI 承諾絕不使用客戶對話作任何 AI 模型訓練用途，唔做廣告。" },
      { id: 3, emoji: "🇭🇰", title: "PDPO 合規", desc: "PersonAI 由香港公司運營，完全符合《個人資料（私隱）條例》（PDPO）要求，可提供 DPA。" }
    ];
    const certifications = ["ISO 27001", "SOC 2 Type 2", "CSA STAR", "PDPO 合規", "Tencent Cloud"];
    const coachItems = [
      "30 分鐘 Onboarding：調教 AI 了解你的行業同工作方式",
      "避免踩雷：常見錯誤用法預防，幫你少走彎路",
      "快速上手：掌握 60+ 技能的核心用法",
      "持續優化：每月 1 次 review 跟進，確保持續有效"
    ];
    const pricingPlans = [
      { id: "starter", name: "Starter", target: "個人 / SOHO", price: "HK$298", period: "/月", featured: false, features: ["1 個 WhatsApp 帳號", "60+ 技能全包", "廣東話優化", "永久記憶", "亞太區數據儲存（日本）", "PDPO 合規"] },
      { id: "business", name: "Business", target: "SME 首選", price: "HK$680", period: "/月", featured: true, features: ["最多 5 個帳號", "60+ 技能全包", "廣東話優化", "永久記憶", "亞太區數據儲存（日本）", "PDPO 合規", "優先技術支援", "月度使用報告"] },
      { id: "enterprise", name: "Enterprise", target: "大型企業", price: "按需定制", period: "", featured: false, features: ["無限帳號", "自訂 AI 個性", "專屬行業數據庫", "與現有系統整合", "專屬客戶成功經理", "SLA 保障", "可簽 DPA"] }
    ];
    const faqs = [
      { q: "PersonAI 係咩？同 ChatGPT 有咩分別？", a: "PersonAI 係住喺你 WhatsApp 的 AI 助手，無需安裝任何 App，廣東話原生，有永久記憶功能，數據儲存亞太區（日本）。相比 ChatGPT，香港直接可用，唔需要 VPN，而且永遠記得你係誰。" },
      { q: "有冇免費試用？", a: "有！所有方案提供 14 日免費試用，無需信用卡。完成試用後先決定係咪繼續。" },
      { q: "我的對話數據會唔會去咗美國？", a: "唔會！PersonAI 用戶對話記錄儲存於 Tencent Cloud 日本（亞太區）數據中心，唔會去美國，受亞太地區法律保護。" },
      { q: "PersonAI 會唔會用我的資料訓練 AI？", a: "絕對唔會！我哋的承諾係：你的業務資料只屬於你，絕不用於任何 AI 訓練，亦不做廣告定向。" },
      { q: "點樣開始使用？要安裝乜嘢 App 嗎？", a: "唔需要安裝任何 App！只需要喺 WhatsApp 加 PersonAI 為聯絡人，直接對話就可以。WhatsApp 你本身就有，零學習成本。" },
      { q: "可以隨時取消嗎？", a: "可以！所有方案均係月付，隨時可以取消，無違約金。" }
    ];
    const currentIndustry = computed(() => industries.find((i) => i.id === activeIndustry.value));
    const currentScene = computed(() => scenes.find((s) => s.id === activeScene.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="section-hero grid-texture pt-16 pb-24 relative"><div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="text-center lg:text-left"><div class="badge mb-6 inline-flex">🇭🇰 香港 SME 專屬 · 唔需要 VPN</div><h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"> 住喺你<br><span class="gradient-text">WhatsApp</span> 的<br>24 小時全能 AI 助手 </h1><p class="text-lg text-[#94A3B8] mb-8 leading-relaxed"> 廣東話原生 · 永久記憶 · 60+ 技能 · 數據存亞太區（日本）<br> 唔訓練模型 · PDPO 合規 · 真人 WhatsApp 技術支援 </p><div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "btn-primary text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`🚀 開始 14 日免費試用`);
          } else {
            return [
              createTextVNode("🚀 開始 14 日免費試用")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/features",
        class: "btn-secondary text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`📖 了解功能`);
          } else {
            return [
              createTextVNode("📖 了解功能")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-wrap gap-2 justify-center lg:justify-start"><span class="trust-badge">🏢 Hostlink × Area2</span><span class="trust-badge">🔒 PDPO 合規</span><span class="trust-badge">🇯🇵 數據存日本</span><span class="trust-badge">✅ ISO 27001</span></div></div><div class="flex justify-center"><div class="demo-phone w-full max-w-sm animate-float"><div class="demo-phone-header"><div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xl">🤖</div><div><div class="font-semibold text-sm text-white">PersonAI</div><div class="text-xs text-green-200">● 在線</div></div></div><div class="demo-phone-body"><div class="chat-bubble-user text-sm">幫我搜尋今日香港財經新聞，重點係 AI 科技行業 🔍</div><div class="chat-bubble-ai text-sm"><div class="font-semibold text-blue-400 mb-1">🤖 PersonAI</div> 好嘅！我幫你整理：<br><br>📊 <strong>今日重點</strong><br>1. 阿里巴巴 AI 業務季度增長 28%<br>2. 香港金管局發布 AI 監管指引<br>3. 本地 FinTech 融資創歷史新高<br><br>需要我深入分析某個話題嗎？ </div><div class="chat-bubble-user text-sm">同埋幫我提醒 3pm 同客戶開會</div><div class="chat-bubble-ai text-sm"><div class="font-semibold text-blue-400 mb-1">🤖 PersonAI</div> ✅ 已設定！我會喺 2:45pm 按排程發你提醒，順帶整理議程摘要。 </div></div></div></div></div></div></section><section class="section-darker py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-black mb-4">你係咪都有呢幾個問題？ 🤔</h2><p class="text-[#94A3B8] text-lg">PersonAI 全部幫你解決</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(painPoints, (pain) => {
        _push(`<div class="feature-card text-center"><div class="text-3xl mb-4">${ssrInterpolate(pain.emoji)}</div><h3 class="font-bold text-white mb-2 text-sm">${ssrInterpolate(pain.title)}</h3><p class="text-[#94A3B8] text-xs leading-relaxed">${ssrInterpolate(pain.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-10"><span class="gradient-text font-black text-lg">↓ PersonAI 全部解決 ↓</span></div></div></section><section class="section-blue py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-black mb-4">PersonAI 點幫你？揀你嘅行業 👇</h2><p class="text-[#94A3B8]">睇吓 PersonAI 點為你解決痛點</p></div><div class="flex gap-2 overflow-x-auto pb-4 mb-8"><!--[-->`);
      ssrRenderList(industries, (ind) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeIndustry) === ind.id }, "industry-tab flex-shrink-0"])}">${ssrInterpolate(ind.emoji)} ${ssrInterpolate(ind.name)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (unref(currentIndustry)) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="glass-card p-6"><h3 class="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">📊 你的痛點</h3><ul class="space-y-3"><!--[-->`);
        ssrRenderList(unref(currentIndustry).pains, (pain) => {
          _push(`<li class="flex items-start gap-3"><span class="text-red-400 mt-0.5">✗</span><span class="text-[#E2E8F0] text-sm">${ssrInterpolate(pain)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div class="glass-card p-6"><h3 class="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">✨ PersonAI 如何解決</h3><ul class="space-y-3"><!--[-->`);
        ssrRenderList(unref(currentIndustry).solutions, (sol) => {
          _push(`<li class="flex items-start gap-3"><span class="text-green-400 mt-0.5">✓</span><span class="text-[#E2E8F0] text-sm">${ssrInterpolate(sol)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-center mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`💬 體驗 PersonAI 幫你解決 →`);
          } else {
            return [
              createTextVNode("💬 體驗 PersonAI 幫你解決 →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-darker py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-black mb-4">體驗一下，PersonAI 點幫你？ 🎭</h2><p class="text-[#94A3B8]">選擇你嘅身份，睇模擬對話</p></div><div class="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center flex-wrap"><!--[-->`);
      ssrRenderList(roles, (role) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeRole) === role.id }, "role-btn"])}">${ssrInterpolate(role.emoji)} ${ssrInterpolate(role.name)}</button>`);
      });
      _push(`<!--]--></div><div class="max-w-md mx-auto"><div class="demo-phone"><div class="demo-phone-header"><div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xl">🤖</div><div><div class="font-semibold text-sm text-white">PersonAI</div><div class="text-xs text-green-200">● 在線</div></div></div><div class="demo-phone-body" style="${ssrRenderStyle({ "min-height": "300px" })}"><!--[-->`);
      ssrRenderList(unref(visibleMessages), (msg, idx) => {
        _push(`<div class="${ssrRenderClass([msg.type === "user" ? "chat-bubble-user" : "chat-bubble-ai", "text-sm"])}">`);
        if (msg.type === "ai") {
          _push(`<span class="font-semibold text-blue-400 mb-1 block">🤖 PersonAI</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${msg.text ?? ""}</span></div>`);
      });
      _push(`<!--]-->`);
      if (unref(isTyping)) {
        _push(`<div class="chat-bubble-ai"><div class="typing-dots flex gap-1 items-center py-1"><span></span><span></span><span></span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="text-center mt-6 flex gap-4 justify-center"><button class="btn-secondary text-sm px-6 py-3">🔄 再睇一次</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "btn-whatsapp text-sm px-6 py-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`🚀 親身試用 →`);
          } else {
            return [
              createTextVNode("🚀 親身試用 →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="section-blue py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-black mb-4">真實工作情景，睇吓 PersonAI 點幫你 ⚡</h2><p class="text-[#94A3B8]">一個指令，搞掂多個步驟</p></div><div class="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center flex-wrap"><!--[-->`);
      ssrRenderList(scenes, (scene) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeScene) === scene.id }, "role-btn text-sm"])}">${ssrInterpolate(scene.emoji)} ${ssrInterpolate(scene.title)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (unref(currentScene)) {
        _push(`<div class="glass-card p-8 max-w-3xl mx-auto"><div class="flex items-center gap-3 mb-6"><span class="text-3xl">${ssrInterpolate(unref(currentScene).emoji)}</span><div><h3 class="text-xl font-bold text-white">${ssrInterpolate(unref(currentScene).title)}</h3><p class="text-[#94A3B8] text-sm">${ssrInterpolate(unref(currentScene).context)}</p></div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"><!--[-->`);
        ssrRenderList(unref(currentScene).steps, (step, idx) => {
          _push(`<div class="text-center"><div class="w-12 h-12 rounded-full bg-[#1E293B] border border-[#334155] flex items-center justify-center text-xl mx-auto mb-2">${ssrInterpolate(step.emoji)}</div><div class="text-xs font-bold text-[#94A3B8] mb-1">${ssrInterpolate(step.skill)}</div><div class="text-xs text-[#64748B]">${ssrInterpolate(step.action)}</div></div>`);
        });
        _push(`<!--]--></div><div class="text-center"><span class="badge badge-green">⏱️ ${ssrInterpolate(unref(currentScene).timeSaved)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="section-darker py-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-black mb-4">適合你嗎？ 👤</h2><p class="text-[#94A3B8]">如果你有類似嘅問題，PersonAI 幫到你</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(personas, (p) => {
        _push(`<div class="feature-card"><div class="flex items-start gap-4 mb-4"><div class="text-4xl flex-shrink-0">${ssrInterpolate(p.emoji)}</div><div><h3 class="font-bold text-white text-sm">${ssrInterpolate(p.name)}</h3><p class="text-[#94A3B8] text-xs">${ssrInterpolate(p.role)}</p></div></div><div class="bg-[#0F172A] rounded-lg p-3 mb-3"><div class="text-red-400 text-xs font-bold mb-1">😣 痛點</div><p class="text-[#94A3B8] text-xs leading-relaxed">${ssrInterpolate(p.pain)}</p></div><div class="bg-[#0F172A] rounded-lg p-3"><div class="text-green-400 text-xs font-bold mb-1">✅ PersonAI</div><p class="text-[#94A3B8] text-xs leading-relaxed">${ssrInterpolate(p.solution)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #1E3A5F 0%, #0F172A 100%)" })}"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-black mb-4 text-white">你的業務資料，只屬於你 🔒</h2><p class="text-blue-200 text-lg">SME 最擔心的 4 個問題，PersonAI 一一回應</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><!--[-->`);
      ssrRenderList(securityPromises, (p) => {
        _push(`<div class="security-card"><div class="text-3xl mb-4">${ssrInterpolate(p.emoji)}</div><h3 class="font-bold text-white text-lg mb-3">${ssrInterpolate(p.title)}</h3><p class="text-[#94A3B8] text-sm leading-relaxed">${ssrInterpolate(p.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="text-center mb-8"><div class="inline-flex flex-wrap gap-3 justify-center"><!--[-->`);
      ssrRenderList(certifications, (cert) => {
        _push(`<span class="cert-badge">${ssrInterpolate(cert)}</span>`);
      });
      _push(`<!--]--></div></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/security",
        class: "btn-secondary border-blue-500 text-blue-400 hover:bg-blue-500/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`📖 了解更多安全承諾 →`);
          } else {
            return [
              createTextVNode("📖 了解更多安全承諾 →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-darker py-20"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div><span class="badge mb-4">🎓 AI 教練服務</span><h2 class="text-3xl md:text-4xl font-black mb-4 text-white">唔識用？有人教！</h2><p class="text-[#94A3B8] text-lg mb-6 leading-relaxed">真人技術團隊，WhatsApp 廣東話全程支援。唔係冷冰冰嘅 Chatbot，係真係幫到你嘅 AI 教練。</p><ul class="space-y-3 mb-8"><!--[-->`);
      ssrRenderList(coachItems, (item) => {
        _push(`<li class="flex items-center gap-3 text-[#E2E8F0] text-sm"><span class="text-green-400 font-bold">✓</span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><div class="text-2xl font-black mb-2 gradient-text">HK$1,500/月</div><p class="text-[#64748B] text-sm mb-6">月付，隨時取消 · 可與任何方案配合</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ai-coach",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`了解 AI 教練服務 →`);
          } else {
            return [
              createTextVNode("了解 AI 教練服務 →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-center"><div class="glass-card p-8 inline-block"><div class="text-6xl mb-4">🎓</div><h3 class="text-xl font-bold text-white mb-2">真人 WhatsApp 支援</h3><p class="text-[#94A3B8] text-sm">唔係 AI Chatbot，係真係幫到你嘅教練</p><div class="mt-6 text-sm text-[#64748B]">適合：唔想自己摸索，想快速上手嘅用戶</div></div></div></div></div></section><section class="section-blue py-20"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-black mb-4">揀啱你嘅方案 💰</h2><p class="text-[#94A3B8]">所有方案包含 60+ 技能 + 廣東話優化 + 永久記憶</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><!--[-->`);
      ssrRenderList(pricingPlans, (plan) => {
        _push(`<div class="${ssrRenderClass([{ featured: plan.featured }, "pricing-card"])}"><div class="text-center mb-6"><div class="text-sm font-bold text-[#94A3B8] mb-1">${ssrInterpolate(plan.target)}</div><div class="${ssrRenderClass([plan.featured ? "gradient-text" : "text-white", "text-3xl font-black mb-1"])}">${ssrInterpolate(plan.name)}</div><div class="text-3xl font-black text-[#F97316]">${ssrInterpolate(plan.price)}</div><div class="text-[#64748B] text-sm">${ssrInterpolate(plan.period)}</div></div><ul class="space-y-2 mb-6"><!--[-->`);
        ssrRenderList(plan.features, (feat) => {
          _push(`<li class="flex items-center gap-2 text-[#94A3B8] text-sm"><span class="text-green-400 text-xs">✓</span> ${ssrInterpolate(feat)}</li>`);
        });
        _push(`<!--]--></ul>`);
        if (plan.id !== "enterprise") {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/early-access",
            class: ["block w-full text-center py-3 rounded-xl font-bold text-sm transition-all", plan.featured ? "btn-primary" : "btn-secondary"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` 🚀 開始 14 日免費試用 `);
              } else {
                return [
                  createTextVNode(" 🚀 開始 14 日免費試用 ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<a href="https://wa.me/85296456787?text=你好，我想查詢 Enterprise 方案" target="_blank" class="block w-full text-center py-3 rounded-xl font-bold text-sm border border-[#334155] text-[#94A3B8] hover:border-[#3B82F6] transition-all"> 📱 WhatsApp 查詢 </a>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`睇完整比較表 →`);
          } else {
            return [
              createTextVNode("睇完整比較表 →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-darker py-20"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-black mb-4">常見問題 ❓</h2></div><div class="space-y-3"><!--[-->`);
      ssrRenderList(faqs, (faq, idx) => {
        _push(`<div class="faq-item"><div class="faq-question"><span>${ssrInterpolate(faq.q)}</span><svg class="${ssrRenderClass([{ "rotate-180": unref(openFaq) === idx }, "w-5 h-5 flex-shrink-0 transition-transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div><div class="${ssrRenderClass([{ open: unref(openFaq) === idx }, "faq-answer"])}">${ssrInterpolate(faq.a)}</div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`查看全部 FAQ →`);
          } else {
            return [
              createTextVNode("查看全部 FAQ →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="section-hero py-20"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl md:text-5xl font-black mb-6 text-white"> 14 日免費試用<br><span class="gradient-text">唔需要信用卡</span></h2><p class="text-xl text-[#94A3B8] mb-8">試用期內可以隨時取消，唔會自動扣費</p><div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "btn-primary text-lg px-10 py-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`🚀 立即開始免費試用`);
          } else {
            return [
              createTextVNode("🚀 立即開始免費試用")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://wa.me/85296456787?text=你好，我想了解 PersonAI" target="_blank" class="btn-whatsapp text-lg px-10 py-4">💬 WhatsApp 查詢</a></div><p class="text-[#64748B] text-sm">有問題？直接 WhatsApp 聯絡我哋 📱 +852 9645 6787</p></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CJRNQ53E.js.map
