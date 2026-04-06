# 長文件 QA 截斷問題 — 根因分析 + 解決方案

**日期：** 2026-03-23
**問題：** Sub-agent（Gemini 3 Pro Preview via GitHub Copilot）處理 2,685 行文件，讀咗 58K input tokens 但只輸出 96 tokens

---

## 1. 根因分析

### 🔴 根因確認：`DEFAULT_MAX_TOKENS = 4096`

**OpenClaw source code 確認（`auth-profiles-iXW75sRj.js` Line 421）：**
```javascript
const DEFAULT_MAX_TOKENS = 4096;
```

**GitHub Copilot provider 嘅 model 列表係空嘅（Line ~163790）：**
```javascript
return {
    baseUrl,
    models: []  // ← 空！冇任何 model 帶 maxTokens
};
```

**邏輯鏈：**
1. OpenClaw 啟動時 resolve GitHub Copilot provider → `models: []`
2. 因為冇 model-specific maxTokens → fallback 到 `DEFAULT_MAX_TOKENS = 4096`
3. Gemini 3 Pro 嘅 API call 被設為 `maxTokens: 4096`
4. 但 task prompt + 2,685 行文件已經用咗 ~58K input tokens
5. Gemini 用咗大部分 budget 讀文件，只剩極少 output budget → 96 tokens

**進一步證據：**
- `openclaw.json` 嘅 `models.mode = "merge"` → 用戶 config 同 default merge
- 用戶 config 只為 MiniMax 設咗 maxTokens（8192 / 16384）
- GitHub Copilot 下嘅所有 model（Claude / Gemini / GPT）都冇設 → 全部用 4096 default
- Perplexity search 確認 GitHub Copilot API 唔公開 max_tokens 設定

### 唔係呢啲原因：
- ❌ Context window 唔夠（Gemini 有 1M tokens）
- ❌ Sub-agent timeout（17 秒，遠低於 600s limit）
- ❌ Announce result truncation（result 有內容，只係 model 冇生成更多）
- ❌ GitHub Copilot proxy hard limit（proxy 轉發 model output，唔會截斷）

---

## 2. 解決方案對比

| 方案 | 做法 | 效果 | 成本 | 實施難度 | 推薦 |
|------|------|------|------|---------|------|
| **A. Config 加 maxTokens** | 喺 `openclaw.json` 為 github-copilot models 設 maxTokens | ✅ 根治 | 零 | ⭐ 極簡 | ✅✅✅ |
| **B. Global defaultMaxTokens** | 喺 config 設 `models.defaultMaxTokens: 16384` | ✅ 全局生效 | 零 | ⭐ 極簡 | ✅✅ |
| **C. Shell QA Script** | `scripts/qa-doc-check.sh` 做機械檢查 | ✅ 零 token | 零 | 已完成 | ✅✅ |
| **D. 拆批 QA** | 文件切 4-5 段分批派 AI | ⚠️ 可行但複雜 | 高（多 sub-agent） | 中等 | ⚠️ |
| **E. 換 provider** | 直接用 Google Gemini API | ✅ 全 control | 需另外 API key | 中等 | ⚠️ |
| **F. 寫文件再 announce** | Task 要求先寫文件、再發短 summary | ✅ 繞過 output limit | 零 | 低 | ✅ |

---

## 3. 推薦方案：A + B + F 組合

### 方案 A：為 GitHub Copilot Models 設 maxTokens（一次性設定）

```bash
openclaw gateway config.patch '{
  "models": {
    "defaultMaxTokens": 16384,
    "providers": {
      "github-copilot": {
        "models": [
          {
            "id": "gemini-3-pro-preview",
            "maxTokens": 65536,
            "contextWindow": 1000000
          },
          {
            "id": "claude-opus-4.6",
            "maxTokens": 32768,
            "contextWindow": 200000
          },
          {
            "id": "claude-sonnet-4.6",
            "maxTokens": 16384,
            "contextWindow": 200000
          },
          {
            "id": "gpt-5.4",
            "maxTokens": 32768,
            "contextWindow": 128000
          }
        ]
      }
    }
  }
}'
```

### 方案 F：Sub-agent Task Template 改進

所有長文件 QA task 加入：
```
完成後：
1. 將完整報告寫入 /path/to/report.md
2. message() 發送簡短摘要（<500 字）
（唔好將完整報告放喺 announce result）
```

---

## 4. maxTokens 建議值

| Model | 建議 maxTokens | 原因 |
|-------|---------------|------|
| Gemini 3 Pro Preview | 65536 | Gemini 支持到 8K-65K output，設最大值 |
| Claude Opus 4.6 | 32768 | Anthropic 支持 32K output |
| Claude Sonnet 4.6 | 16384 | 日常開發夠用，控制成本 |
| GPT-5.4 | 32768 | OpenAI 支持 32K+ output |
| MiniMax M2.5 | 8192 | 已設定（保持不變） |
| MiniMax M2.7 | 16384 | 已設定（保持不變） |

---

## 5. 預期效果

修改前：
- Gemini maxTokens = 4096 → 96 tokens output（文件太大搶佔 budget）

修改後：
- Gemini maxTokens = 65536 → 充足 output budget
- 2,685 行 QA 報告預計 ~3,000-5,000 tokens output → 遠低於 65K limit

---

*研究完成：A2 AI Agent | 2026-03-23*
