# SecrexAI 營運成本模型 v2.0

*2026-04-09 | 內部參考，唔對外發佈*

> **基於 MiniMax M2.7-highspeed Token Plan + 完整 API 成本計算（2026-04-09 確認）**

---

## 📊 MiniMax Max-Highspeed 計劃（已確認 Rate Limits）

**官方來源：** https://platform.minimax.io/docs/guides/pricing-token-plan

| 計劃 | 價格 | M2.7-highspeed Requests | Speech 2.8 | image-01 | 其他 |
|------|------|------------------------|-------------|----------|------|
| **Plus-Highspeed** | $40/月 | 4,500 requests / 5小時 | 9,000 chars/day | 100 images/day | — |
| **Max-Highspeed** | $80/月 | **15,000 requests / 5小時** | 19,000 chars/day | 200 images/day | 3 videos/day, 7 songs/day |
| **Ultra-Highspeed** | $150/月 | **30,000 requests / 5小時** | 50,000 chars/day | 800 images/day | 5 videos/day, 15 songs/day |

### Rate Limit 技術細節

| 限額 | Max-Highspeed | Ultra-Highspeed |
|------|---------------|-----------------|
| **5小時滾動窗口** | 15,000 requests | 30,000 requests |
| **RPM（每分鐘）** | 500 RPM | 500 RPM |
| **TPM（每分鐘）** | 20,000,000 TPM | 20,000,000 TPM |
| **平均每小時容量** | 3,000 requests/hr | 6,000 requests/hr |

> ⚠️ **5小時滾動窗口機制：** 系統動態追蹤過去5小時內的請求總量，並非每日/每月配額。

---

## 📋 完整 API 成本參考（來源：v1 + 2026-04 更新）

### 固定費用（每位用戶）

| 項目 | 費用（HKD）| 備註 |
|------|------|------|
| **Tencent Cloud Lighthouse 2vCPU/4GB (Japan)** | **HK$78/月/用戶** | $10 × 7.8 = HK$78，每位用戶一個獨立 instance |
| **香港電話號碼 SIM 卡** | **HK$14/月/用戶** | 每人一個獨立號碼 |
| **GitHub Copilot Pro+** | **HK$304/月（所有用戶共享）** | $39 × 7.8 = HK$304，統一支付，非每人 |
| **MiniMax Max-Highspeed Token Plan** | **HK$624/月（所有用戶共享）** | $80 × 7.8 = HK$624，15,000 requests / 5小時 |

### 固定費用分攤計算（50 用戶）

| 項目 | 總費用/月 | 分攤/用戶 |
|------|----------|----------|
| Tencent Cloud（50 用戶）| HK$78 × 50 = **HK$3,900/月** | HK$78/月 |
| 香港電話號碼 SIM 卡（50 用戶）| HK$14 × 50 = **HK$700/月** | HK$14/月 |
| GitHub Copilot Pro+ | **HK$304/月（不變）** | HK$304 ÷ 50 = **HK$6.08/月** |
| MiniMax Max-Highspeed | **HK$624/月（不變）** | HK$624 ÷ 50 = **HK$12.48/月** |
| **固定費用合計** | **HK$5,528/月** | **HK$110.56/月/用戶** |

---

### 🔄 AI 模型 API 費率

#### MiniMax M2.7-highspeed（主要對話引擎）

| 項目 | 單價 | 備註 |
|------|------|------|
| **Input tokens** | $0.30 / 1M tokens | |
| **Output tokens** | $1.20 / 1M tokens | |
| **Cached** | $0.06 / 1M tokens | |
| **請求配額** | 15,000 requests / 5小時 | Max-Highspeed plan |

> **計算基礎：** 平均每條 user message ≈ 1,000 input + 500 output tokens；每 message 觸發 1-2 次 API call

#### Qwen3-Omni Flash Realtime（STT 語音轉文字）

| 項目 | 單價 | 備註 |
|------|------|------|
| **Audio Input** | USD$2.709 / 1M audio tokens | ≈ **HK$0.17/分鐘** |
| 實測 | 1分鐘語音 ≈ 800-1,000 audio tokens | |

#### Qwen-Plus（複雜分析 / 額外對話）

| 項目 | 單價 | HKD 估算 |
|------|------|----------|
| **Input** | $0.40 / 1M tokens | ≈ HK$0.003/千字 |
| **Output** | $1.20 / 1M tokens | ≈ HK$0.009/千字 |

#### Perplexity Sonar（搜尋）

| 項目 | 單價 | HKD |
|------|------|-----|
| **sonar（Search API）** | $5 / 1,000 requests | **HK$0.039/次** |
| **sonar-pro（Search API）** | $5 / 1,000 requests | **HK$0.039/次** |

#### Nano Banana Pro（圖片生成）

| 項目 | 單價 | HKD |
|------|------|-----|
| **Standard（1K-2K px）** | USD$0.134/張 | **HK$1.04/張** |
| **Batch（1K-2K px，省50%）** | USD$0.067/張 | **HK$0.52/張** |
| **4K** | USD$0.24/張 | **HK$1.87/張** |

#### MiniMax 影片 / 音樂 / TTS（已有 Token Plan）

| 項目 | 單價 | Token Plan 配額 |
|------|------|----------------|
| **影片生成 Hailuo（768p 6s）** | 包含在 Token Plan | Max-Highspeed: 3 videos/day |
| **音樂生成 Music-2.5** | 包含在 Token Plan | Max-Highspeed: 7 songs/day |
| **TTS 配音** | 包含在 Token Plan | Max-Highspeed: 19,000 chars/day |

---

## 🔬 Eric 實際用量分析（b03 session 數據）

**數據來源：** b03 對話記錄分析（2026-03 ~ 2026-04）

| 指標 | 數值 |
|------|------|
| **峰值用戶小時** | 2026-04-03 02:00（16 user messages / 小時）|
| **峰值總 events** | 74 events（包括 tool calls）|
| **平均每活躍小時** | 51.2 events |
| **活躍小時總數** | 68 小時 |
| **總 message 數** | 3,479 user messages |

### 每個 User Message 的 API Calls 估算

```
Peak hour: 16 user messages → 74 total events
每條 user message 約產生：74 ÷ 16 ≈ 4.6 events

估算 API calls：
- 1 user message → 1 API request（M2.7 對話）
- tools（搜尋/記憶讀取）→ ~1-2 API requests

結論：每 user message ≈ 2-3 API requests（保守估算：2 calls）
```

---

## 💰 50 用戶成本計算（完整版）

### 用戶分佈假設

| 計劃 | 用戶數 | 平均 messages/月 | API calls/月/人 |
|------|--------|-----------------|-----------------|
| **Starter** | 35 人 | 30 messages | 60 calls |
| **Business** | 15 人 | 100 messages | 200 calls |

### 每月 API 消耗計算

**MiniMax M2.7-highspeed（主要對話）：**
```
平均每 call 消耗：1,000 input + 500 output tokens

Starter（35 人）：35 × 60 calls × (1,000×$0.30 + 500×$1.20)/1M
= 35 × 60 × $0.0009 ≈ $1.89 ≈ **HK$14.74/月**

Business（15 人）：15 × 200 calls × $0.0009
= 15 × 200 × $0.0009 ≈ $2.70 ≈ **HK$21.06/月**

M2.7 合計：HK$35.80/月
```

**Qwen3-Omni Flash Realtime（STT）：**
假設 20% 用戶使用語音功能，平均每人 10 分鐘語音/月
```
Starter（35 人 × 20%）：7 × 10分鐘 × $2.709/M × 900 tokens/分鐘
= 70 分鐘 × $0.00244/分鐘 ≈ HK$1.33/月

Business（15 人 × 20%）：3 × 10分鐘 × $0.00244/分鐘
= 30 分鐘 × $0.00244/分鐘 ≈ HK$0.55/月

STT 合計：HK$1.87/月
```

**Qwen-Plus（複雜分析）：**
假設每人每月 10 次複雜分析，每次 10K input + 5K output
```
Starter（35 人）：35 × 10 × (10K×$0.40 + 5K×$1.20)/1M
= 350 × $0.01 ≈ $3.50 ≈ **HK$27.30/月**

Business（15 人）：15 × 10 × $0.01 = $1.50/月

Qwen-Plus 合計：HK$39/月
```

**Perplexity Sonar（搜尋）：**
```
Starter（35 人）：35 × 20 searches/月 × $0.005/次
= 700 × $0.005 ≈ $3.50 ≈ **HK$27.30/月**

Business（15 人）：15 × 50 searches/月 × $0.005/次
= 750 × $0.005 ≈ $3.75 ≈ **HK$29.25/月**

Perplexity 合計：HK$56.55/月
```

**Nano Banana Pro（圖片生成）：**
```
Starter（35 人）：35 × 5 images/月 × $0.134
= 175 × $0.134 ≈ $23.45 ≈ **HK$182.91/月**

Business（15 人）：15 × 15 images/月 × $0.134
= 225 × $0.134 ≈ $30.15 ≈ **HK$235.17/月**

圖片生成合計：HK$418.08/月
```

### 50 用戶每月總成本計算

#### 固定成本（已計算）
| 項目 | 月費 |
|------|------|
| Tencent Cloud（50 × $10）| $500/月 |
| WhatsApp SIM（50 × $1.80）| $90/月 |
| GitHub Copilot Pro+ | $39/月 |
| MiniMax Max-Highspeed | $80/月 |
| **固定合計** | **$709/月** |

#### API 消耗成本
| 服務 | 月費 |
|------|------|
| M2.7-highspeed 對話 | HK$35.80/月 |
| Qwen3-Omni STT | HK$1.87/月 |
| Qwen-Plus 分析 | HK$39/月 |
| Perplexity Sonar 搜尋 | HK$56.55/月 |
| Nano Banana Pro 圖片 | HK$418.08/月 |
| **API 消耗合計** | **HK$551.30/月** |

#### 50 用戶每月總成本
```
固定成本：      HK$5,528/月
API 消耗：       HK$551.30/月
員工/維護（估算）：HK$390/月（$50 × 7.8）
─────────────────────
每月總成本：     HK$6,469/月 ≈ HK$6,500/月
每人平均成本：    HK$129/月
```

---

## 📈 定價及利潤分析

### 50 用戶定價結構

| 計劃 | 月費 | 用戶數 | 每月收入 |
|------|------|--------|----------|
| **Starter** | HK$298 | 35 人 | HK$10,430 |
| **Business** | HK$680 | 15 人 | HK$10,200 |
| **總收入** | | **50 人** | **HK$20,630/月** |

### 每用戶成本計算（實際消耗）

| 成本項目 | Starter（每用戶）| Business（每用戶）|
|----------|-----------------|-----------------|
| Tencent Cloud | $10.00 | $10.00 |
| WhatsApp SIM | $1.80 | $1.80 |
| Copilot 分攤 | $0.78 | $0.78 |
| MiniMax 分攤 | $1.60 | $1.60 |
| M2.7 API | $0.05 | $0.18 |
| STT | $0.01 | $0.01 |
| Qwen-Plus | $0.10 | $0.10 |
| Perplexity | $0.10 | $0.25 |
| 圖片生成 | $0.67 | $2.01 |
| **每人每月成本** | **$15.11/月 ≈ HK$118** | **$16.73/月 ≈ HK$131** |
| **定價** | **HK$298** | **HK$680** |
| **毛利** | **HK$180/人** | **HK$549/人** |
| **毛利率** | **60%** | **81%** |

### 50 用戶每月利潤總結

```
每月總收入：   HK$20,630
每月總成本：   $830/月 ≈ HK$6,474
──────────────────
每月總利潤：   HK$14,156
每年總利潤：   HK$169,872
平均毛利率：   69%
每人平均利潤： HK$283/月
```

---

## 📊 規模效益對比

| 用戶數 | 每月收入 | 每月成本 | 每月利潤 | 毛利率 |
|--------|----------|----------|----------|--------|
| **10 用戶** | HK$4,280 | $260 ≈ HK$2,028 | HK$2,252 | 53% |
| **20 用戶** | HK$8,560 | $370 ≈ HK$2,886 | HK$5,674 | 66% |
| **30 用戶** | HK$12,840 | $480 ≈ HK$3,744 | HK$9,096 | 71% |
| **50 用戶** | HK$20,630 | $830 ≈ HK$6,474 | HK$14,156 | 69% |
| **100 用戶** | HK$41,260 | $1,510 ≈ HK$11,778 | HK$29,482 | 71% |
| **200 用戶** | HK$82,520 | $2,910 ≈ HK$22,698 | HK$59,822 | 72% |

> **規模效益：** 毛利率從 10 用戶的 53% 提升至 100+ 用戶的 71%，主要因為固定成本（GitHub Copilot、MiniMax）被更多用戶攤分。

---

## ⚠️ Rate Limit 風險評估

### 50 用戶峰值分析

```
50 用戶同時峰值：
- 每用戶 16 messages/hr × 50 = 800 messages/hr
- 每 message 2 API calls = 1,600 calls/hr

Max-Highspeed capacity：15,000 calls / 5小時

5小時內峰值窗口總消耗：1,600 × 5 = 8,000 calls
8,000 < 15,000 ✅ 峰值安全！

理論可支撐峰值用戶數：
15,000 ÷ (16 × 2) = 468 峰值用戶
```

### 不同用戶場景評估

| 場景 | 用戶數 | 可行性 | 建議計劃 |
|------|--------|--------|----------|
| **10 用戶** | 10 | ✅ 非常安全 | Max-Highspeed |
| **50 用戶** | 50 | ✅ 安全 | Max-Highspeed |
| **100 用戶** | 100 | ✅ 安全 | Max-Highspeed |
| **200 用戶** | 200 | ⚠️ 緊張 | 考慮升級至 Ultra |
| **500 用戶** | 500 | ❌ 需升級 | Ultra-Highspeed 或多帳號 |

---

## 🎯 定價建議（50 用戶版本）

| 計劃 | 定價 | 成本/人 | 毛利 | 毛利率 | 目標客群 |
|------|------|---------|------|--------|----------|
| **Starter** | HK$298 | $15 ≈ HK$118 | HK$180 | **60%** | 個人/小型團隊 |
| **Business** | HK$680 | $17 ≈ HK$131 | HK$549 | **81%** | 中小型企業 |
| **Enterprise** | HK$1,288+ | $30+ ≈ HK$234+ | HK$1,054+ | **82%+** | 大型企業/集團 |

> **建議：** Starter 維持 HK$298 市場競爭力，Business HK$680 提供更高價值服務。毛利率 60-81% 符合 SaaS 行業標準（一般 60-80%）。

---

## ✅ 50 用戶商業模式總結

```
┌─────────────────────────────────────────┐
│        SecrexAI 50 用戶商業模式           │
├─────────────────────────────────────────┤
│ 月收入：        HK$20,630               │
│ 月成本：        HK$6,474 ($830)          │
│ 月利潤：        HK$14,156               │
│ 年利潤：        HK$169,872              │
│ 平均毛利率：     69%                     │
├─────────────────────────────────────────┤
│ 每人平均利潤：   HK$283/月               │
│ 每人平均成本：   HK$130/月               │
│ Scale-up 空間：  200 → 500 用戶         │
└─────────────────────────────────────────┘
```

---

## 📋 版本更新記錄

| 版本 | 日期 | 更新內容 |
|------|------|----------|
| v1.0 | 2026-03-19 | 初始版本（GitHub Copilot 方案）|
| v1.1 | 2026-03-19 | 確認 Aiberm API 節省成本 |
| **v2.0** | **2026-04-09** | **全面更新為 MiniMax M2.7 Token Plan + 完整 API 成本（Tencent Cloud/Qwen/Perplexity/Nano Banana）** |

### v2.0 關鍵更新

1. **固定費用重新計算：** Tencent Cloud $10/月/用戶 + WhatsApp HK$14/月/用戶 + GitHub Copilot $39/月（共享）
2. **API 成本完整計算：** M2.7 + Qwen3-Omni STT + Qwen-Plus + Perplexity + Nano Banana Pro
3. **50 用戶毛利率 69%**（對比 v1.x 的 34-74%）
4. **每月利潤 HK$14,156，每年 HK$169,872**
5. **Rate Limit 安全評估：** Max-Highspeed 可支撐 468 峰值用戶

---

*版本 v2.0 | 2026-04-09 | 內部*
*數據來源：v1 成本文件 + MiniMax 官方文檔 + Eric 確認*
