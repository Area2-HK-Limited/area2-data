# Promoter Analytics Platform — 開發計劃書 v1.0

**項目代號：** PromoLens  
**版本：** v1.0  
**撰寫日期：** 2026-03-27  
**撰寫人：** A2 (SecrexAI)  
**狀態：** 草稿，待 Eric 確認

---

## 1. 背景與目標

### 項目背景
洗樓王等推廣公司每次舉辦 Roadshow / 街頭攤位活動，均缺乏客觀數據支撐效果報告。現時靠推廣員手估人流、人手填寫報告，數據不準確、不可信，難以向品牌客戶證明活動 ROI。

### 核心問題
- 攤位前人流有幾多？ → 無數據
- 有幾多人停留同推廣員溝通？ → 靠估
- 受眾係男係女、年齡層係咩？ → 完全唔知
- 活動報告靠人手寫 → 耗時、不客觀

### 成功指標（KPI）
- POC 完成：成功分析一條 3-5 分鐘攤位影片，輸出含人流/互動/性別分佈嘅 PDF 報告
- 正式版：用戶可上載影片或提供連結，5 分鐘內生成完整分析報告
- 報告準確度：人流計數誤差 < 15%，性別分類準確率 > 80%
- 客戶滿意度：洗樓王可直接用報告作客戶交付物

---

## 2. 需求摘要

### 功能需求（優先級）

**P0 — MVP 必須有：**
- [ ] 影片上載功能（本地上載）
- [ ] AI 影片分析：人流計數（路過人數）
- [ ] AI 影片分析：停留互動人數（同推廣員溝通）
- [ ] AI 影片分析：性別分類（男/女）
- [ ] 自動生成分析報告（PDF）
- [ ] 基本 Web Dashboard 顯示結果

**P1 — 正式版：**
- [ ] 影片連結上載（URL，如 Vimeo / YouTube）
- [ ] Cloudflare Stream 整合（影片 CDN + 儲存）
- [ ] Vimeo API 整合（可拉取 Vimeo 影片分析）
- [ ] 年齡層估算（青年/中年/長者）
- [ ] 時間軸分析（哪個時段人流最旺）
- [ ] 多個影片對比報告（同一活動不同角度）
- [ ] 用戶帳號系統（登入 / 管理歷史報告）

**P2 — 未來考慮：**
- [ ] 實時攝像頭接入（Live CCTV 分析）
- [ ] 情緒分析（快樂 / 中性 / 不悅）
- [ ] 品牌曝光率（Logo 出現次數 / 時長）
- [ ] 數字人整合
- [ ] 小紅書 / 抖音格式報告輸出

### 非功能需求
- 性能：影片分析 < 5 分鐘（每 10 分鐘影片）
- 安全：影片數據唔可外洩，分析完可刪除原始影片
- 合規：PDPO 合規（香港）、不儲存人臉識別數據
- 兼容：支援 MP4、MOV、AVI 格式；解析度 720p 以上

### 明確排除項（此版本唔做）
- 實時 CCTV 接入（需要現場硬件，留 P2）
- 人臉識別 / 個人身份識別
- 手機 App（純 Web Platform）

### [待確認] 事項
1. **影片上載部份技術問題的具體描述** — Eric 提到有技術疑問，需了解係咩問題（檔案大小限制？格式轉換？儲存費用？）
2. **分析報告收費模式** — 按次收費？月費訂閱？
3. **目標用戶** — 只係洗樓王內部用？定係對外商業化 SaaS？
4. **攝影機部署問題** — 係固定攝像頭定手持？影片角度有冇標準要求？
5. **PDPO 合規要求** — 分析完係咪要刪除影片？報告係咪可以保留？

---

## 3. 系統架構

### 推薦架構：Cloud-Native Serverless

```
┌─────────────────────────────────────────────────────┐
│                    Frontend (Web)                    │
│         Next.js / Nuxt 3 + Cloudflare Pages         │
└──────────────────┬──────────────────────────────────┘
                   │ HTTPS
┌──────────────────▼──────────────────────────────────┐
│                  API Layer                           │
│         Node.js (Hono) + Cloudflare Workers         │
└────┬──────────────┬──────────────┬──────────────────┘
     │              │              │
┌────▼────┐  ┌──────▼──────┐ ┌───▼──────────────────┐
│  Video  │  │  Analysis   │ │  Report Generator     │
│ Storage │  │  Queue      │ │  (PDF + Dashboard)    │
│CF Stream│  │  (Cloudflare│ │                       │
│/ Vimeo  │  │  Queues)    │ │                       │
└─────────┘  └──────┬──────┘ └───────────────────────┘
                    │
         ┌──────────▼──────────┐
         │  AI Vision Engine   │
         │  Python Worker      │
         │  YOLOv8 + DeepSORT  │
         │  (Tencent Cloud /   │
         │   自家伺服器)        │
         └─────────────────────┘
```

### 技術選型

| 層次 | 推薦方案 | 原因 |
|------|----------|------|
| Frontend | Nuxt 3 | 同 Area2 現有技術棧一致 |
| API Layer | Node.js (Hono) + Cloudflare Workers | 輕量、部署簡單、免費 tier 夠用 |
| 影片儲存 | **Cloudflare Stream**（主）| 按分鐘計費（$5/1,000分鐘儲存）、免轉碼費、API 完整 |
| 影片連結 | Vimeo API | 支援 pull 上載、有 SDK、生態成熟 |
| AI 分析 | Python + YOLOv8 + DeepSORT | 開源、人流計數成熟方案、本地部署避免數據外洩 |
| 性別分類 | YOLOv8 + 自訓練 attribute classifier | 冇現成 API 支援，需自行訓練或用 fine-tuned model |
| 報告生成 | WeasyPrint / Puppeteer | 已在 ATM 項目用過，成熟可靠 |
| 資料庫 | PostgreSQL (Supabase) | 快速開發、免運維 |
| 任務隊列 | Cloudflare Queues | 影片分析異步處理 |

### 影片上載流程詳解

#### 方案 A：Cloudflare Stream（推薦）
```
用戶選擇影片
    ↓
前端呼叫 CF Stream API 獲取 Upload URL（TUS protocol）
    ↓
直接從瀏覽器上載到 Cloudflare（繞過自家伺服器）
    ↓
CF Stream 自動轉碼 + 生成 Video ID
    ↓
後端 API 收到 Video ID → 放入分析隊列
    ↓
Python Worker 下載影片 → AI 分析 → 上傳結果
    ↓
刪除原始影片（PDPO 合規）
```

**優點：** 免費上傳帶寬、自動 CDN、簡單 API
**費用：** $5/1,000分鐘儲存 + $1/1,000分鐘播放

#### 方案 B：Vimeo API
```
用戶提供 Vimeo 影片 URL
    ↓
後端呼叫 Vimeo API pull 下載影片
    ↓
→ 同 A 方案後續流程
```

**優點：** 適合已有 Vimeo 影片嘅用戶
**限制：** 需 Vimeo Pro+ plan 支援 API 下載

---

## 4. 數據設計

### 核心 Tables

```sql
-- 項目（每個活動 = 一個 Project）
projects (
  id, name, client_name, event_date, location,
  status, created_by, created_at
)

-- 影片（一個 Project 可以有多條影片）
videos (
  id, project_id, original_filename,
  cf_stream_id, vimeo_url,
  duration_sec, resolution,
  upload_status, analysis_status,
  created_at
)

-- 分析結果
analysis_results (
  id, video_id,
  total_passerby_count,    -- 路過人數
  total_interaction_count, -- 停留互動人數
  male_count, female_count,
  peak_time_start, peak_time_end, -- 人流高峰時段
  timeline_data,           -- JSONB: 每分鐘人流數據
  confidence_score,        -- 整體置信度
  analyzed_at
)

-- 報告
reports (
  id, project_id,
  pdf_url, generated_at,
  version
)
```

### API 端點清單

| Method | Path | 描述 |
|--------|------|------|
| POST | `/api/projects` | 建立新活動項目 |
| GET | `/api/projects` | 列出所有項目 |
| POST | `/api/videos/upload-url` | 獲取 CF Stream 上載 URL |
| POST | `/api/videos/from-url` | 從 Vimeo/URL 上載 |
| GET | `/api/videos/{id}/status` | 查詢分析進度 |
| GET | `/api/projects/{id}/report` | 獲取 PDF 報告 |
| POST | `/api/analysis/{video_id}/start` | 手動觸發分析 |

---

## 5. 分階段 Roadmap

### Phase 0 — 技術 Spike / 環境準備（1 週）

**目標：** 驗證核心技術可行性，排除風險
**Deliverables：**
- [ ] 環境搭建（dev server + Python 環境）
- [ ] YOLOv8 人流計數 POC：用一條 5 分鐘影片測試，確認準確度
- [ ] 性別分類測試：用 pre-trained model 測試效果
- [ ] Cloudflare Stream API 測試上載 + 下載
- [ ] Vimeo API 測試 pull 下載

**驗收：** POC 影片分析結果出爐，確認準確度達 80%+ 先繼續

**預估時間：** 3-5 日

---

### Phase 1 — MVP（3 週）

**目標：** 可用版本，洗樓王可實際使用
**包含功能（P0 全部）：**
- 影片上載（本地 + CF Stream）
- AI 分析：人流計數 + 互動人數 + 性別分類
- 簡單 Web Dashboard（上載 → 等待 → 睇結果）
- PDF 報告生成（含圖表）

**Deliverables：**
- [ ] Web Frontend（上載頁 + 結果頁）
- [ ] API Server（上載 + 分析觸發 + 結果查詢）
- [ ] Python AI Worker（YOLOv8 pipeline）
- [ ] PDF 報告模板
- [ ] 基本部署（Cloudflare Pages + 自家 API server）

**驗收標準：**
- 上載一條 5 分鐘 MP4，5 分鐘內完成分析
- PDF 報告包含：總人流、互動人數、男女比例、時間軸圖表
- 人流計數誤差 < 15%

**預估時間：** 3 週

---

### Phase 2 — 正式版（3 週）

**目標：** 商業化可用，支援 URL 上載、更多分析維度
**新增功能（P1）：**
- Vimeo URL 上載
- 年齡層估算
- 時間軸分析圖（每分鐘人流）
- 用戶帳號系統
- 多影片對比報告

**Deliverables：**
- [ ] 用戶登入系統（Supabase Auth）
- [ ] Vimeo API 整合
- [ ] 年齡層模型整合
- [ ] 報告美化（品牌化 PDF）
- [ ] 歷史報告管理頁

**預估時間：** 3 週

---

### Phase 3 — 上線與商業化（1 週）

**目標：** 正式交付洗樓王使用，考慮對外商業化
**Deliverables：**
- [ ] Production 部署
- [ ] 收費系統整合（Stripe / 其他）
- [ ] 用戶文檔
- [ ] 監控 + 告警設定

**預估時間：** 1 週

---

## 6. 風險與 Fallback

| 風險 | 影響 | 概率 | Fallback |
|------|------|------|----------|
| **性別分類準確率不達標**（< 80%）| 高 | 中 | 改用 AWS Rekognition Demographics API（有性別 + 年齡，但有費用 + 數據隱私問題）；或報告中標注「估算值，僅供參考」降低期望 |
| **攤位影片角度問題**（俯角/側角/遮擋）| 高 | 高 | Phase 0 Spike 測試不同角度效果；製作「最佳拍攝指引」PDF 提供攝影員參考 |
| **影片體積太大**（1小時影片 > 10GB）| 中 | 中 | 前端自動壓縮（FFmpeg WASM）至 1080p 30fps 再上載；或只分析前 30 分鐘 |
| **Cloudflare Stream 費用超預算** | 中 | 低 | Fallback 用 Backblaze B2 + 自行轉碼（成本降 80%，但架構複雜） |
| **Vimeo API 下載限制**（需 Pro+ plan）| 低 | 高 | 改為用戶自行下載後再上載，文檔說明步驟；或支援 YouTube URL（用 yt-dlp） |
| **PDPO 合規風險**（人臉數據儲存）| 高 | 低 | 分析用 de-identified bounding box，唔儲存人臉圖片；分析完 24 小時自動刪除原始影片 |

---

## 7. 驗收標準

### Phase 1 MVP 驗收

**功能驗收：**
- [ ] 可上載 MP4 影片（最大 500MB）
- [ ] 上載後自動觸發分析，毋需手動操作
- [ ] 分析進度有 loading 狀態顯示
- [ ] 結果頁顯示：總人流、互動人數、男女比例
- [ ] 可下載 PDF 報告

**性能驗收：**
- 5 分鐘影片：分析時間 < 5 分鐘
- Web 頁面首次載入 < 3 秒
- PDF 生成 < 30 秒

**準確度驗收：**
- 人流計數：誤差 < 15%（以人手計數作對照）
- 性別分類：準確率 > 80%（以人手標注作對照）

---

## 8. 附錄

### 影片分析 AI 技術方案詳情

**人流計數 + 追蹤：**
- 框架：YOLOv8（物件偵測）+ DeepSORT（多目標追蹤）
- 開源：https://github.com/ultralytics/ultralytics
- 功能：計算唯一個體數量（避免同一人重複計算）

**互動判定邏輯：**
- 定義：在攤位前停留 > 3 秒 = 視為互動
- 方法：追蹤個體在 ROI（Region of Interest，攤位區域）內嘅停留時間

**性別分類：**
- 現成方案：DeepFace / InsightFace（本地運行，唔送 API）
- 輸入：人體 bounding box → 分類 Male/Female
- ⚠️ 注意：性別分類有倫理爭議，報告中應標明「外觀性別估算，非認定性別」

### 參考資料
- Cloudflare Stream 文檔：https://developers.cloudflare.com/stream/
- Vimeo API 文檔：https://developer.vimeo.com/api
- YOLOv8 文檔：https://docs.ultralytics.com/
- Crowd Analyzer (開源參考)：https://github.com/pozapas/Crowd-Analyzer
- WeasyPrint PDF 生成：https://weasyprint.org/

### 會議記錄
- 2026-03-27：洗樓王 × Area2 初次拜訪，Tracy 提出 POC 想法
- 計劃書由 A2 (SecrexAI) 根據對話整理，未與洗樓王正式確認需求

---

*計劃書版本：v1.0 | 下一步：Eric 確認 [待確認] 事項後出 v1.1*
