# PersonAI 營運成本模型 v1.1

*2026-03-19 | 內部參考，唔對外發佈*

---

## 📊 API 成本參考價（市場價，2026年）

### 基礎設施
| 項目 | 費用 | 備註 |
|---|---|---|
| Tencent Cloud Lighthouse 2vCPU/2GB (HK) | USD$6.50/月 ≈ **HK$51/月** | 現有用戶標準定價（無新用戶優惠） |
| 香港電話號碼 SIM 卡（WhatsApp Business） | **HK$14/月** | 1號多機 / 多帳號管理 |
| GitHub Copilot Pro | USD$10/月 ≈ **HK$78/月** | 每個 User |
| GitHub Copilot Pro+ | USD$39/月 ≈ **HK$304/月** | 每個 User，無 volume discount |
| 手動設定人工（1小時，一次性攤分12個月） | ≈ **HK$10/月** | 估算 |

---

### 🔄 AI 模型 API 費率對比：Aiberm vs 直接 API

Aiberm 係統一 AI API 閘道（aiberm.com），支援 70+ 模型，提供**折扣費率**（比原廠便宜 70-80%）。

| 模型 | Aiberm 費率（折扣）| 原廠直接費率 | 節省 |
|---|---|---|---|
| **Claude Sonnet 4.6** | $0.558 in / $2.789 out /M | $3.00 in / $15.00 out /M | **~81% off** |
| **Claude Opus 4.6** | $0.930 in / $4.649 out /M | $15.00 in / $75.00 out /M | **~94% off** |
| **Claude Haiku 4.5** | $0.113 in / $0.563 out /M | $1.00 in / $5.00 out /M | **~89% off** |
| **GPT-5.4** | $0.675 in / $5.403 out /M | $2.00 in / $8.00 out /M | **~66% off** |
| **GPT-5.4-mini** | $0.135 in / $1.081 out /M | $0.40 in / $1.60 out /M | **~66% off** |
| **Gemini 3 Pro** | $0.450 in / $2.702 out /M | $1.25 in / $5.00 out /M | **~64% off** |
| **Gemini 3 Flash** | $0.099 in / $0.792 out /M | $0.10 in / $0.40 out /M | ~similar |
| **DeepSeek V3.2** | $0.203 in / $0.304 out /M | $0.27 in / $1.10 out /M | **~56% off** |
| **MiniMax M2.5** | $0.250 in / $1.038 out /M | $0.80 in / $3.20 out /M | **~68% off** |

> ⚠️ **注意：** Aiberm 係第三方轉售商。使用前需評估：(1) 數據私隱（對話經 Aiberm 中轉）(2) 服務穩定性 (3) 是否符合 PDPO 要求

---

### 媒體生成 API（Nano Banana Pro / MiniMax）

| 服務 | 單價 | HKD | 備註 |
|---|---|---|---|
| **圖片生成 - Nano Banana Pro (Google AI Studio API)** | USD$0.134/張（1K-2K px）| **HK$1.04/張** | Google Vertex AI 官方定價 |
| **圖片生成 - Nano Banana Pro Batch API** | USD$0.067/張（1K-2K px）| **HK$0.52/張** | 異步批量，便宜 50% |
| **圖片生成 - Nano Banana Pro 4K** | USD$0.24/張 | **HK$1.87/張** | 高解析度 |
| **影片生成 - MiniMax Hailuo** (768p 6s) | USD$0.19/條 | **HK$1.48/條** | |
| **音樂生成 - MiniMax Music-2.5** | USD$0.15/首(5分鐘) | **HK$1.17/首** | |
| **TTS - MiniMax 標準** | USD$60/M chars | **HK$0.047/100字** | |
| **TTS - MiniMax HD** | USD$100/M chars | **HK$0.078/100字** | |

---

### 語音 / 視覺分析（DashScope / Alibaba Cloud Model Studio）

**STT：Qwen3-Omni（已確認用此模型）**

| 服務 | 單價 | HKD | 備註 |
|---|---|---|---|
| **STT - Qwen3-Omni Flash（Audio Input）** | USD$2.265/M audio tokens | **HK$0.14/分鐘** | 1分鐘語音 ≈ 800-1000 audio tokens，實測估算 |
| **STT - Qwen3-Omni Flash Realtime** | USD$2.709/M audio tokens | **HK$0.17/分鐘** | 實時轉錄，略貴 |
| **對比：舊 Paraformer fun-asr-realtime** | USD$0.00009/秒 | **HK$0.025/分鐘** | 純 ASR，無理解能力 |

> ⚠️ **Qwen3-Omni vs Paraformer 成本差異：** Qwen3-Omni 約 HK$0.14/分鐘，比純 ASR Paraformer（HK$0.025）貴約 **5.6x**。
> 優勢：Qwen3-Omni 同時提供理解、摘要、多語言，唔只係轉錄。
> **30分鐘 YouTube 影片：** Qwen3-Omni ≈ HK$4.2 vs Paraformer ≈ HK$0.75

**視覺分析：**

| 服務 | 單價 | HKD |
|---|---|---|
| **Qwen Vision 分析圖片** (Qwen-Plus 估算) | USD$0.40/M tokens；1張圖≈500 tokens | **HK$0.0016/張圖** |
| **Qwen-Turbo 文字分析** | USD$0.05 input / $0.20 output /M tokens | **HK$0.002/千字** |
| **Qwen-Plus 複雜分析** | USD$0.40 input / $1.20 output /M tokens | **HK$0.014/千字** |

---

### 搜尋 API（Perplexity）

| 服務 | 單價 | HKD | 備註 |
|---|---|---|---|
| **Perplexity sonar（Search API）** | USD$5/1,000 requests | **HK$0.039/次** | AI 摘要 + 引用來源 |
| **Perplexity sonar-pro（Search API）** | USD$5/1,000 requests | **HK$0.039/次** | 深度搜尋，同價 |
| **Perplexity sonar（Token-based）** | $1 in / $1 out /M tokens | **HK$0.0078/千字** | 文字生成計費 |
| **Perplexity sonar-pro（Token-based）** | $3 in / $15 out /M tokens | **HK$0.023–$0.12/千字** | 深度推理 |

> ⚠️ **Perplexity API 已無免費月度額度（$5/月 free tier 已取消）**。每次搜尋按 $5/1,000 requests 計算。

---

## 🧮 典型用戶月均 API 成本估算

### 假設：一個「一般 Business 用戶」每月活動量

| 任務類型 | 次數/月 | 單次成本 | 月成本 |
|---|---|---|---|
| **AI 對話/分析**（GitHub Copilot 處理） | 600 次 | 包含在 Copilot Pro+ | HK$0 |
| **YouTube 摘要**（Qwen3-Omni，30分鐘影片）| 8 條 | HK$4.20（Qwen3-Omni）| **HK$33.6** |
| **圖片生成**（Nano Banana Pro Standard，1K-2K px）| 20 張 | HK$1.04 | HK$20.8 |
| **圖片生成**（Nano Banana Pro Batch，省 50%）| 5 張 | HK$0.52 | HK$2.6 |
| **TTS 配音**（廣東話，約500字/次） | 5 次 | HK$0.25 | HK$1.25 |
| **影片生成**（MiniMax） | 2 條 | HK$1.48 | HK$2.96 |
| **音樂生成** | 2 首 | HK$1.17 | HK$2.34 |
| **文件分析**（Qwen Vision OCR，20張圖）| 1 批 | HK$0.032 | HK$0.03 |
| **Web 搜尋**（Perplexity API，sonar-pro）| 50 次 | $5/1000 requests = HK$0.039/次 | **HK$1.95** |
| **月均 API 使用成本合計** | | | **≈ HK$83/月** |

> ⚠️ 注意：Nano Banana Pro 圖片生成（HK$1.04/張）同 Qwen3-Omni YouTube 摘要（HK$4.2/條）係主要成本。Perplexity API 無免費額度，按用量計費（$5/1000 requests）。建議用 Batch API 做非即時圖片任務（省 50%）。

---

## 💰 完整每用戶成本結構

### 方案 A：每人獨立 Instance（最安全，最貴）

| 成本項目 | Starter | Business |
|---|---|---|
| Tencent Lighthouse（現有用戶）| HK$51 | HK$51 |
| GitHub Copilot | HK$78 (Pro) | HK$304 (Pro+) |
| 設定人工均攤 | HK$10 | HK$10 |
| API 使用（Qwen3-Omni + Nano Banana Pro）| HK$40 | HK$81 |
| **總成本** | **HK$179/月** | **HK$446/月** |
| **定價** | HK$298 | HK$680 |
| **毛利額** | HK$119 | HK$234 |
| **毛利率** | **40%** | **34%** |

---

### 方案 B：共用 Instance（建議架構 ✅ 已確認）

**實測：1 個 OpenClaw = ~1.5GB RAM**  
**每台 2vCPU/2GB instance = 最多 1 個 OpenClaw（建議）**  
**每人仍需獨立 GitHub Copilot 帳號（避免 ToS 違反）**  
**GitHub Copilot 無 volume discount（已確認）**

| 成本項目 | Starter（1人/instance）| Business（1人/instance）|
|---|---|---|
| Tencent Lighthouse（HK$51，現有用戶）| **HK$51** | **HK$51** |
| WhatsApp Business SIM 卡| **HK$14** | **HK$14** |
| GitHub Copilot（每人，無 volume discount）| HK$78 (Pro) | HK$304 (Pro+) |
| 設定人工均攤 | HK$10 | HK$10 |
| API 使用（Qwen3-Omni + Nano Banana Pro）| HK$40 | HK$81 |
| **總成本** | **HK$193/月** | **HK$460/月** |
| **定價** | **HK$298** | **HK$680** |
| **毛利額** | **HK$105** | **HK$220** |
| **毛利率** | **40%** | **34%** |

### 方案 C：Aiberm API（唔需要 GitHub Copilot）

**假設：每個 AI 任務平均 2,000 input + 500 output tokens**

| 成本項目 | Starter（300次/月）| Business（1500次/月）|
|---|---|---|
| Tencent Lighthouse（現有用戶）| HK$51 | HK$51 |
| **Aiberm — Claude Sonnet 4.6** | $0.558×(300×2k÷1M) + $2.789×(300×0.5k÷1M) = **$0.76 ≈ HK$5.9** | $0.558×(1500×2k÷1M) + $2.789×(1500×0.5k÷1M) = **$3.83 ≈ HK$30** |
| **Aiberm — Claude Opus 4.6（升級任務×10%）** | +$0.20 ≈ HK$1.6 | +$1.00 ≈ HK$7.8 |
| 設定人工均攤 | HK$10 | HK$10 |
| 媒體生成 API（Qwen3-Omni + Nano Banana Pro，同方案B）| HK$40 | HK$81 |
| **總成本（Aiberm 方案）** | **≈ HK$123/月** | **≈ HK$196/月** |
| **定價** | HK$298 | HK$680 |
| **毛利額** | HK$189 | HK$500 |
| **毛利率** | **63%** 🔼 | **74%** 🔼 |

**vs 方案 B（GitHub Copilot）：**

| | Starter 毛利率 | Business 毛利率 |
|---|---|---|
| 方案 B（GitHub Copilot）| 40% | 34% |
| **方案 C（Aiberm API）** | **63%** | **74%** |
| **提升** | **+23%** | **+40%** |

> 💡 **Aiberm 方案大幅改善毛利率**，但需評估數據私隱風險（對話經 Aiberm 中轉）。
> 混合方案可行：低敏感任務用 Aiberm，高敏感任務用 GitHub Copilot 或直接 API。

---

### 方案 D：混合方案（Aiberm + 直接 API）

| 任務類型 | 路由 | 比例 | 原因 |
|---|---|---|---|
| 一般對話/搜尋/分析 | Aiberm Claude Sonnet 4.6 | ~70% | 最便宜，速度快 |
| 長文件/複雜分析 | Aiberm Gemini 3 Pro | ~15% | 長 context 窗口 |
| 企業客戶/敏感內容 | GitHub Copilot（直接 Anthropic）| ~15% | 數據唔經第三方 |

混合方案估算總成本（Business，1500次/月）：≈ **HK$130-150/月**，毛利率 **≈ 78-81%**

---

## 📈 規模效益試算

### 100 個 Business 用戶（方案 B，1人/instance，共100台）

| 項目 | 每月 |
|---|---|
| 收入 | HK$68,000 |
| Tencent Lighthouse × 100 台 | HK$5,100 |
| WhatsApp SIM × 100 個 | HK$1,400 |
| GitHub Copilot Pro+ × 100 個 | HK$30,400 |
| 設定人工均攤 | HK$1,000 |
| API 使用 × 100 人 | HK$2,200 |
| **總支出** | **HK$38,300** |
| **毛利** | **HK$29,700 (44%)** ✅ |

### 300 個 Starter 用戶（方案 B，1人/instance，共300台）

| 項目 | 每月 |
|---|---|
| 收入 | HK$89,400 |
| Tencent Lighthouse × 300 台 | HK$15,300 |
| WhatsApp SIM × 300 個 | HK$4,200 |
| GitHub Copilot Pro × 300 個 | HK$23,400 |
| 設定人工均攤 | HK$3,000 |
| API 使用 × 300 人 | HK$3,000 |
| **總支出** | **HK$43,500** |
| **毛利** | **HK$45,900 (51%)** ✅

---

## 🎯 定價建議總結

| 方案 | 定價 | 成本（Copilot B）| 成本（Aiberm C）| 最高毛利率 |
|---|---|---|---|---|
| Starter | **HK$298** | HK$179 (40%) | HK$109 (63%) | **63% (Aiberm)** ✅ |
| Business | **HK$680** | HK$446 (34%) | HK$180 (74%) | **74% (Aiberm)** ✅ |
| Enterprise | **HK$1,288+** | ~HK$750+ (42%+) | ~HK$250+ (81%+) | **81%+ (Aiberm)** ✅ |

**建議架構：**
- **短期（MVP/試驗）→ Aiberm**：毛利率高，無需採購 GitHub Copilot 授權，上線快
- **長期（Scale/企業）→ 評估混合**：高敏感用直接 Anthropic/OpenAI API，一般任務用 Aiberm
- **PDPO 合規要求高 → GitHub Copilot**：數據唔中轉，符合香港企業要求

---

## ✅ 已確認項目（v1.1 更新）

| 項目 | 確認內容 |
|---|---|
| **圖片生成** | Nano Banana Pro via Google AI Studio API：$0.134/張（1K-2K px）；Batch $0.067/張 |
| **GitHub Copilot volume discount** | 無。Pro $10/月，Pro+ $39/月，每個 user 固定費 |
| **Tencent Cloud Lighthouse** | 現有用戶標準價 USD$6.50/月（無新用戶優惠）|
| **STT 模型** | Qwen3-Omni Flash，Audio input $2.265/M tokens ≈ HK$0.14/分鐘 |

---

*版本 v1.1 | 2026-03-19 | 內部*
