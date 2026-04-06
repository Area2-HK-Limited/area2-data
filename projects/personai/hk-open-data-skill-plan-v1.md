# 🇭🇰 香港開放數據技能 (hk-open-data) 開發計劃書

> **PersonAI × data.gov.hk 整合方案**
> 令 PersonAI 成為香港最識本地嘅 AI 助手

---

## 📋 文件資訊

| 項目 | 內容 |
|---|---|
| **技能名稱** | `hk-open-data` |
| **版本** | v1.1 |
| **狀態** | 已確認 |
| **日期** | 2026-03-19 |
| **負責人** | Area2 (HK) Limited |
| **產品** | PersonAI |

---

## 1️⃣ 技能概覽

### 定位

`hk-open-data` 係 PersonAI 嘅**香港本地智能服務核心**。

透過整合 `data.gov.hk` 及各政府部門免費開放 API，PersonAI 可以即時查詢天氣、交通、公司、經濟、人口等香港本地數據，呢啲係 ChatGPT、Claude 等通用 AI 做唔到嘅事。

### 核心優勢

| 優勢 | 說明 |
|---|---|
| 🆓 **免費** | 所有政府 API 零成本，無需付費 |
| ⚡ **即時** | 天氣/交通數據最快每10秒更新 |
| 🎯 **準確** | 官方數據，唔係 AI 估算 |
| 🏠 **本地化** | 針對香港用戶真實需求 |
| 🔒 **差異化** | 其他 AI 無得直接競爭 |

### 目標用戶

- **Starter 方案**：個人用戶（天氣/交通/假期）
- **Business 方案**：中小企業主、PM、HR（公司查詢/薪酬/租金）
- **Enterprise 方案**：大企業（行業 Briefing/競品監察/定制分析）

> 📌 **已確認**：全部三個 Phase 一次過開發，唔分階段。

---

## 2️⃣ 核心 API 清單

### 👔 老闆 / C-Level

| API | 提供者 | 數據內容 | 更新頻率 |
|---|---|---|---|
| 零售業銷貨量 | 統計處 | 各行業零售銷售額、按月變化 | 每月 |
| 消費物價指數 (CPI) | 統計處 | 通脹率、各類別物價指數 | 每月 |
| 本地生產總值 (GDP) | 統計處 | 季度/年度 GDP 增長率 | 每季 |
| 進出口貿易統計 | 統計處 | 進出口總值、主要貿易伙伴 | 每月 |
| 港元匯率 | HKMA | 各主要貨幣對港元匯率 | 每日 |
| 最優惠利率 (Prime Rate) | HKMA | 各銀行 Prime Rate | 按需 |
| 各區人口分布 | 統計處 | 18區人口、年齡組別、潛在客群 | 每年 |

### 📊 項目經理 / 業務開發

| API | 提供者 | 數據內容 | 更新頻率 |
|---|---|---|---|
| Companies Registry Search | 公司註冊處 | 公司名稱/BRN查詢 → 地址、狀態、成立日期 | 每日 |
| 私人物業估值 | 差餉物業估價署 | 物業市值、差餉估值 | 每季 |
| 私人物業租金指數 | 差餉物業估價署 | 各類物業租金指數（按區） | 每月 |
| 地址查詢 | 地政總署 | 地址標準化、地理坐標 | 每日 |
| 各區人口/家庭收入 | 統計處 | 18區詳細人口統計、收入中位數 | 每5年（人口普查） |

### 💻 開發者 / 技術人員

| API | 提供者 | 數據內容 | 更新頻率 |
|---|---|---|---|
| 實時天氣 | 香港天文台 | 氣溫、濕度、降雨量、紫外線 | 每10分鐘 |
| 9天天氣預報 | 香港天文台 | 未來9日天氣預測 | 每天 |
| 颱風/暴雨警告 | 香港天文台 | 颱風信號、暴雨警告級別 | 即時 |
| MTR Next Train ETA | MTR | 各站下一班車到站時間 | 每10秒 |
| Citybus ETA | 城巴 | 各巴士站實時到站時間 | 每分鐘 |
| 綠色小巴實時數據 | 運輸署 | 部分路線實時到站 | 按路線 |
| 公眾假期 | 政府資訊科技辦公室 | 2024-2026年香港公眾假期 | 每年 |

### 👥 HR / 人力資源

| API | 提供者 | 數據內容 | 更新頻率 |
|---|---|---|---|
| 整體失業率 | 統計處 | 季度失業率、就業人口 | 每月 |
| 各行業失業率 | 統計處 | 各行業失業情況分析 | 每季 |
| 職業薪酬中位數 | 統計處 | 各職業月薪中位數 Benchmark | 每年 |
| 各行業就業人數 | 統計處 | 各行業僱員數目、變化趨勢 | 每季 |

### 🏠 地產 / 選址

| API | 提供者 | 數據內容 | 更新頻率 |
|---|---|---|---|
| 私人住宅售價指數 | 差餉物業估價署 | 各類別/各區住宅售價指數 | 每月 |
| 私人非住宅租金 | 差餉物業估價署 | 寫字樓/工廈/商舖租金 | 每月 |
| 土地用途規劃圖則 | 規劃署 | OZP 分區計劃大綱圖 | 按需更新 |
| 地段/業主資料 | 地政總署 | 土地查冊（公開部分） | 每日 |

### 👤 個人用戶（日常使用）

| 功能 | 底層 API | 使用場景 |
|---|---|---|
| 天氣查詢 | 天文台實時天氣 | 「今日天氣點？要唔要帶遮？」 |
| 颱風/暴雨警告 | 天文台警告 API | 自動推送颱風8號、暴雨紅色警告 |
| MTR ETA | MTR API | 「中環站下一班去旺角幾時到？」 |
| 巴士 ETA | Citybus API | 「我去緊巴士站，幾時到？」 |
| 公眾假期 | 假期 API | 「下個月有冇假期？」 |
| 政府公告 | data.gov.hk 新聞 | 最新政府公告推送 |

### 🏭 行業特定 API

| 行業 | API | 數據內容 |
|---|---|---|
| **飲食業** | 食環署食物業牌照 | 持牌食肆數目、類別 |
| **飲食業** | Center for Food Safety | 食物警報、食品安全通知 |
| **教育業** | 教育局學校資料 | 各校資訊、學位、課程 |
| **教育業** | 香港考試及評核局 | 公開考試相關數據 |
| **金融業** | HKMA 銀行統計 | 銀行業存貸款、銀行數目 |
| **金融業** | 港交所（如有開放） | 上市公司基本資料 |
| **零售業** | 統計處零售銷售 | 各類別零售銷售額、按月比較 |
| **物流業** | 民航處航班數據 | 航班統計、旅客數量 |
| **物流業** | 海事處港口資料 | 貨物吞吐量、船隻數目 |

---

## 3️⃣ PersonAI 應用場景（按方案分層）

### 🟢 Starter 方案

> 個人日常生活輔助，免費 API 覆蓋最常見需求

**可用功能：**

| 功能 | 示例對話 | 底層 API |
|---|---|---|
| ☀️ 天氣查詢 | 「今日天氣點？宜唔宜出門？」 | 天文台實時天氣 |
| 🌀 颱風/暴雨提醒 | 自動推送：「⚠️ 8號風球！注意安全」 | 天文台警告 API |
| 🚇 MTR ETA | 「旺角站下一班去紅磡幾時到？」 | MTR API |
| 🚌 巴士 ETA | 「270號車幾時到我嘅站？」 | Citybus API |
| 📅 公眾假期 | 「下個月幾多日假？」 | 假期 API |

### 🔵 Business 方案

> 加入商業實用功能，服務中小企用戶

**Starter 基礎上增加：**

| 功能 | 示例對話 | 底層 API |
|---|---|---|
| 🏢 公司背景調查 | 「幫我查下 XXX 有限公司係咪真嘅」 | Companies Registry |
| 📈 經濟數據簡報 | 「最新 CPI 係幾多？同上月比較點？」 | 統計處 |
| 💰 薪酬 Benchmark | 「香港 IT 工程師月薪中位數係幾多？」 | 統計處職業薪酬 |
| 🏠 物業租金參考 | 「旺角寫字樓租金而家大概係幾錢？」 | 差餉物業估價署 |
| 📊 零售市場數據 | 「上個月零售銷售有冇增長？」 | 統計處零售數據 |

### 🟣 Enterprise 方案

> 按行業定制深度分析，為大企業提供競爭優勢

**Business 基礎上增加：**

| 功能 | 說明 | 底層 API |
|---|---|---|
| 📰 自動行業 Briefing | 每日定時推送行業市況（零售/地產/金融等）| 多個 API 融合 |
| 🔍 競品公司監察 | 定期監察競爭對手公司狀態變化 | Companies Registry |
| 🎯 定制 API 組合 | 按客戶行業揀選最相關嘅數據組合 | 全部 API |
| 🔬 多源數據融合分析 | 將多個 API 數據交叉比對、生成洞察 | AI 分析層 |
| 📋 選址報告生成 | 按地區人口+租金+競爭分析，推薦選址 | 統計處 + 差估署 |

---

## 4️⃣ 技術架構

### API 接入方式

```
統一入口（data.gov.hk）
https://api.data.gov.hk/v2/filter
→ 無需 API Key，支援 JSON/CSV/XML 格式
→ 適用：統計處、差估署、假期等大多數 API

天文台天氣
https://data.weather.gov.hk/weatherAPI/opendata/weather.php
→ 無需 API Key，JSON 格式
→ 參數：dataType=rhrread（實時）/ flw（9天預報）/ warnsum（警告）

公司註冊處
https://data.cr.gov.hk/cr/api/api/v1/api_builder/json/local/search
→ 無需 API Key，JSON 格式
→ 支援公司名稱/BRN 搜尋

MTR Next Train
https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php
→ 無需 API Key，JSON 格式
→ 參數：line（路線）、sta（車站）、lang（語言）

Citybus ETA
https://rt.data.gov.hk/v2/transport/citybus/
→ 無需 API Key，JSON 格式
→ 支援巴士站/路線查詢
```

### 技能目錄結構

```
skills/hk-open-data/
├── SKILL.md                    # 技能說明文件
├── scripts/
│   ├── weather.sh              # 天文台天氣/警告 API
│   ├── transport.sh            # MTR / 巴士 / 小巴 ETA
│   ├── company.sh              # Companies Registry 查詢
│   ├── stats.sh                # 統計處數據（CPI/GDP/失業率/薪酬）
│   └── property.sh             # 差餉物業估價署 / 地政總署
└── data/
    └── api-catalog.json        # 完整 API 目錄（endpoint/params/schema）
```

### 系統整合架構圖

```
用戶 (WhatsApp/Telegram)
        ↓
    PersonAI NLP
    (意圖識別)
        ↓
  hk-open-data skill
        ↓
   ┌────────────────────────────┐
   │  Cache Layer               │
   │  (本地 JSON 檔案)           │
   └────────────────────────────┘
        ↓（Cache Miss 先 call API）
   ┌─────────────────────────────────────────┐
   │            Government APIs              │
   │  天文台  │  MTR  │  統計處  │  差估署   │
   │  公司處  │  地政署 │  HKMA  │  其他     │
   └─────────────────────────────────────────┘
        ↓
   AI 數據格式化（廣東話回覆）
        ↓
    用戶收到答覆
```

---

## 5️⃣ 數據更新頻率與 Cache 策略

| 數據類型 | 政府更新頻率 | 建議 Cache 策略 | 備註 |
|---|---|---|---|
| 🌡️ 天氣（實時） | 每10分鐘 | Cache 10分鐘 | 查詢量最高 |
| 🌀 颱風/暴雨警告 | 即時 | **無 Cache** | 安全優先，唔可以 Cache |
| 🚇 MTR ETA | 每10秒 | Cache 30秒 | 高頻但容許少許延遲 |
| 🚌 巴士 ETA | 每分鐘 | Cache 1分鐘 | 同步更新頻率 |
| 📊 CPI/統計數據 | 每月 | Cache 1天 | 唔需要即時 |
| 🏢 公司資料 | 每日 | Cache 1天 | 每日更新即可 |
| 📅 公眾假期 | 每年 | Cache 30天 | 極少改變 |
| 💰 匯率 | 每日 | Cache 4小時 | 按市場情況 |
| 🏠 物業租金指數 | 每月 | Cache 1天 | 統計數據 |
| 👥 薪酬數據 | 每年 | Cache 7天 | 年度數據 |

**Cache 後端（已確認）：**
- ✅ **本地 JSON 檔案**：MVP 及正式版均使用本地 JSON，唔用 Redis

---

## 6️⃣ 開發優先次序

### 🚀 Phase 1 — MVP（第1-2週，最高優先）

> 目標：最快讓 Starter 用戶感受到差異化功能

| 優先 | 功能 | API | 難度 | 原因 |
|---|---|---|---|---|
| 1️⃣ | 天文台天氣查詢 | `data.weather.gov.hk` | ⭐ 簡單 | 最常用，最簡單 |
| 2️⃣ | 颱風/暴雨警告推送 | `data.weather.gov.hk` | ⭐ 簡單 | 高使用率，安全需求 |
| 3️⃣ | MTR Next Train ETA | `rt.data.gov.hk/mtr` | ⭐⭐ 中等 | 通勤族必備 |
| 4️⃣ | 公眾假期查詢 | `data.gov.hk` | ⭐ 簡單 | 每周都有人問 |

**Phase 1 預期交付：**
- `weather.sh` 完成（實時天氣 + 9天預報 + 警告）
- `transport.sh` 完成（MTR ETA 部分）
- SKILL.md 完成
- PersonAI 指令整合（至少 5 個常用指令）

### 📈 Phase 2（第3-4週，次優先）

> 目標：覆蓋 Business 方案功能，提升升級動力

| 優先 | 功能 | API | 難度 | 原因 |
|---|---|---|---|---|
| 5️⃣ | Citybus ETA | `rt.data.gov.hk/citybus` | ⭐⭐ 中等 | 補全交通查詢 |
| 6️⃣ | Companies Registry | `data.cr.gov.hk` | ⭐⭐⭐ 較難 | Business 方案核心 |
| 7️⃣ | 統計處 CPI + 零售 | `api.data.gov.hk` | ⭐⭐ 中等 | 商業數據需求 |

**Phase 2 預期交付：**
- `transport.sh` 完成（加入 Citybus）
- `company.sh` 完成
- `stats.sh` 部分完成（CPI/零售）
- Business 方案對應指令整合

### 🔬 Phase 3（第5-8週，高級功能）

> 目標：Enterprise 方案功能，定制化數據分析

| 優先 | 功能 | API | 難度 |
|---|---|---|---|
| 8️⃣ | 差餉物業估價署 | `data.gov.hk` 差估署 | ⭐⭐⭐ 較難 |
| 9️⃣ | 統計處薪酬/就業數據 | `api.data.gov.hk` | ⭐⭐ 中等 |
| 🔟 | 行業特定 API 組合 | 多個 API | ⭐⭐⭐⭐ 複雜 |
| 1️⃣1️⃣ | 自動行業 Briefing 生成 | 多個 API + AI | ⭐⭐⭐⭐⭐ 最複雜 |

**Phase 3 預期交付：**
- `property.sh` 完成
- `stats.sh` 完整版
- 行業 Briefing 引擎
- Enterprise 方案全面上線

---

## 7️⃣ 商業價值分析

### 🎯 差異化競爭優勢

| 功能 | ChatGPT | Claude | PersonAI (hk-open-data) |
|---|---|---|---|
| 香港實時天氣 | ❌ 無法即時 | ❌ 無法即時 | ✅ 官方即時數據 |
| 颱風警告自動推送 | ❌ 唔識主動推 | ❌ 唔識主動推 | ✅ 即時推送 |
| MTR/巴士 ETA | ❌ 唔識查 | ❌ 唔識查 | ✅ 官方即時數據 |
| 公司查詢 (BRN) | ⚠️ 只能估 | ⚠️ 只能估 | ✅ 官方公司登記 |
| 香港 CPI/GDP | ⚠️ 可能過時 | ⚠️ 可能過時 | ✅ 統計處最新數據 |
| 薪酬 Benchmark | ⚠️ 不準確 | ⚠️ 不準確 | ✅ 統計處官方數字 |

### 💰 商業影響預測

**Starter → Business 升級動力：**
- 用戶習慣咗天氣/交通功能後，自然想用公司查詢/薪酬數據
- 商業數據係明顯嘅 paywall 功能，升級理由清晰
- 預計每10個 Starter 用戶有2-3個升 Business

**Business → Enterprise 升級動力：**
- 行業 Briefing 功能係大企業嘅明顯需求
- 競品監察係獨特賣點，市場無類似產品
- 預計 SME 用戶中10-15%會考慮 Enterprise

**零邊際成本優勢：**
- 所有 API 免費，唔需要付費服務
- 唯一成本：AI 分析層嘅 token 費用
- 用戶量增加，利潤率提升

---

## 8️⃣ 風險與限制

### ⚠️ 已知風險

| 風險 | 可能性 | 影響 | 緩解方案 |
|---|---|---|---|
| 政府 API 臨時維護/停機 | 中 | 高 | Fallback 提示 + 錯誤處理 |
| API 格式或端點改變 | 低 | 高 | 建 API 版本監控 |
| 部分 API 只有英文數據 | 高 | 中 | AI 翻譯層（自動轉廣東話）|
| 歷史數據查詢複雜 | 高 | 中 | Phase 3 先唔做，或另行方案 |
| 港交所股票數據缺失 | 已確認 | 中 | 需另找第三方 API（Yahoo Finance等）|
| 查詢量太高觸發政府限流 | 低 | 中 | Cache 策略 + 合理請求頻率 |

### 🚧 已知技術限制

- **香港交易所股票數據**：唔喺 `data.gov.hk` 範圍，需要另覓方案（如 Yahoo Finance API、HKEX API）
- **物業業主資料**：只有公開部分，詳細土地查冊需要付費服務
- **實時交通意外/路面情況**：部分數據需要申請特定 API 授權
- **Citybus 以外嘅巴士公司**（如九巴 KMB、新巴 NWFB）：需要分別接入各公司 API

---

## 9️⃣ 行動計劃

### ✅ 已確認決定

| 項目 | 決定 |
|---|---|
| Phase 1 MVP 範圍 | 全部三個 Phase 一次過開發，唔分階段 |
| Cache 後端 | 本地 JSON 檔案（唔用 Redis）|
| 整合方式 | 喺日常對話中按需調用，唔需要特定指令或自動推送 |
| 行業 Briefing | 按需，用戶自行要求時才生成，唔作定時推送 |
| 部署位置 | OpenClaw workspace skills folder（`skills/hk-open-data/`）|
| API 停機處理 | Fallback 調用 Perplexity Search 提供備用資訊，唔靜默失敗 |

### 🚀 開發行動計劃

1. **本週**：建立 `skills/hk-open-data/` 目錄結構（`scripts/` + `data/api-catalog.json`）
2. **第1-2週**：完成 `weather.sh` + `transport.sh`（天氣/MTR ETA/巴士 ETA/假期）
3. **第3-4週**：完成 `company.sh` + `stats.sh`（公司查詢/CPI/零售/薪酬）
4. **第5-8週**：完成 `property.sh` + 行業 Briefing 引擎
5. **整合測試**：將 hk-open-data skill 接入 PersonAI，內部測試
6. **用戶 Beta**：Starter 用戶搶先試用，收集反饋

---

## 🔧 附錄：核心 API 端點參考

```bash
# 天文台實時天氣
curl "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc"

# 天文台9天預報
curl "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc"

# 颱風/暴雨警告
curl "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=tc"

# MTR Next Train（旺角站 荃灣線 往荃灣方向）
curl "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=TML&sta=MKK&lang=TC"

# Citybus 路線列表
curl "https://rt.data.gov.hk/v2/transport/citybus/route/CTB"

# Citybus 到站時間（路線270 方向往紅磡 站002）
curl "https://rt.data.gov.hk/v2/transport/citybus/eta/CTB/002/270"

# 公眾假期
curl "https://www.1823.gov.hk/common/ical/en.json"

# Companies Registry 搜尋（關鍵詞）
curl "https://data.cr.gov.hk/cr/api/api/v1/api_builder/json/local/search?q=Area2"

# data.gov.hk 統計處 CPI
curl "https://api.data.gov.hk/v2/filter?q=%7B%22resource%22%3A%22https%3A%2F%2Fwww.censtatd.gov.hk%2Fen%2Fweb_table_002.html%22%7D"
```

---

## 📌 相關資源

| 資源 | 連結 |
|---|---|
| data.gov.hk 主頁 | https://data.gov.hk |
| 香港天文台開放數據 | https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf |
| MTR Open Data | https://data.gov.hk/en-data/dataset/mtr-data2-nexttrain-data |
| Citybus API 文檔 | https://data.gov.hk/en-data/dataset/ctb-eta-transport-realtime-eta |
| Companies Registry API | https://www.cr.gov.hk/en/e-services/api-services.htm |
| 統計處開放數據 | https://www.censtatd.gov.hk/tc/data/stat_report/product/B1010039/att/B10100392022AN22B0100.pdf |
| PersonAI 產品計劃 | `data/projects/area2-ai/` |

---

## 🔄 版本記錄

| 版本 | 日期 | 狀態 | 變更 |
|---|---|---|---|
| v1.1 | 2026-03-19 | 已確認 | 移除定價、架構決定確認、行動計劃更新 |

---

> **v1.1 | 2026-03-19 | 已確認**
> 作者：A2 (Area2 Virtual AI Company)
> 產品：PersonAI by Area2 (HK) Limited
