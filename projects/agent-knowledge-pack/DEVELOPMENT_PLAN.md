# Agent Knowledge Pack — 開發計劃書

**版本：** v1.0  
**日期：** 2026-03-17  
**狀態：** Phase 1 — MVP 實作中  
**對象：** Eric / OpenClaw Main Agent  
**用途：** 將現有 OpenClaw agent 內可移植、可重用嘅指示、規則、SOP、skill 使用方法、安全守則抽取成可安裝知識包，畀新安裝 OpenClaw agent 直接套用。

---

## 1. 項目背景

你面對嘅問題：
- agent 長期累積大量 `.md` 工作知識（AGENTS、SOUL、SECURITY、PITFALLS、skills）
- 新安裝 OpenClaw agent 唔會自動識得呢啲內容
- 每次靠人手重新教，成本高、容易漏

### 核心目標

建立 **Agent Knowledge Pack** 系統：
1. 從白名單 `.md` 抽取可移植規則
2. 排除私人資料、secret
3. 標準化、分類、打包
4. 由 **Main Agent 執行安裝**，patch 到目標 agent `.md` 檔案

### 最終效果

新 OpenClaw → 安裝 Knowledge Pack → 即時承接公司工作方式與規範，無需「重新訓練」。

---

## 2. 與 openclaw-setup 的關係

Knowledge Pack 作為 `openclaw-setup` skill 的一個 module：

```
openclaw-setup/
├── modules/
│   ├── memory-milvus-pro/     ✅ 已完成
│   ├── oc-market/             ✅ 已完成
│   └── agent-knowledge-pack/  ← 本 module
│       ├── install.sh         # 安裝腳本（Main Agent 執行）
│       ├── manifest.json      # 知識包清單
│       ├── pack/              # 分類後的知識內容
│       │   ├── policies.md
│       │   ├── workflow-rules.md
│       │   ├── skill-routing.md
│       │   ├── output-conventions.md
│       │   └── operational-notes.md
│       └── scripts/
│           ├── apply_pack.sh  # 將 pack 內容 patch 到目標 .md
│           └── verify_pack.sh # 驗證安裝結果
```

---

## 3. 知識分類（6 類）

### 3.1 Security Rules（`policies.md`）
- 安全守則、資料邊界
- 需人手批准嘅操作
- Prompt injection 防護規則

### 3.2 Workflow Rules（`workflow-rules.md`）
- 收到訊息 workflow（判斷 → 分派 → 監察 → 匯報）
- Sub-agent spawn 規則
- Watchdog 機制
- PM/Orchestrator 角色定位

### 3.3 Skill Routing（`skill-routing.md`）
- 邊類任務用邊個 skill
- Task router 規則
- Model routing 指引

### 3.4 Output Conventions（`output-conventions.md`）
- 報告格式規範
- 檔案命名規則
- Workspace 儲存目錄結構

### 3.5 Operational Notes（`operational-notes.md`）
- 常見坑位（PITFALLS）
- 部署注意事項
- Container 調試經驗

### 3.6 Skill Profile（`skill-profiles.json`）
- 預設 skill 安裝清單（分 profile）
- 從 OC Market registry 下載

---

## 4. Managed Block 機制

### 4.1 更新方式

用 HTML comment 標記 managed block，令安裝可重複執行：

```markdown
<!-- BEGIN KNOWLEDGE_PACK:company-workflow-rules -->
...由 Knowledge Pack 管理的內容...
<!-- END KNOWLEDGE_PACK:company-workflow-rules -->
```

### 4.2 Patch Mode

| Mode | 行為 |
|------|------|
| `replace-block` | 替換指定 managed block 內容 |
| `append-block` | 喺指定標記位置加入新 block（唔存在先加） |
| `copy` | 複製整個檔案到目標 |

### 4.3 目標檔案對應

| Pack 檔案 | 目標 | 模式 | Block ID |
|-----------|------|------|----------|
| `policies.md` | `AGENTS.md` | `append-block` | `knowledge-pack-policies` |
| `workflow-rules.md` | `AGENTS.md` | `append-block` | `knowledge-pack-workflow` |
| `skill-routing.md` | `AGENTS.md` | `append-block` | `knowledge-pack-skill-routing` |
| `output-conventions.md` | `AGENTS.md` | `append-block` | `knowledge-pack-output-conventions` |
| `operational-notes.md` | `PITFALLS.md` | `copy` | — |

---

## 5. manifest.json 結構

```json
{
  "packName": "area2-knowledge-pack",
  "version": "1.0.0",
  "generatedAt": "2026-03-17T00:00:00Z",
  "description": "Area2 standard agent knowledge pack",
  "targets": [
    {
      "source": "pack/policies.md",
      "file": "AGENTS.md",
      "mode": "append-block",
      "blockId": "knowledge-pack-policies"
    },
    {
      "source": "pack/workflow-rules.md",
      "file": "AGENTS.md",
      "mode": "append-block",
      "blockId": "knowledge-pack-workflow"
    },
    {
      "source": "pack/skill-routing.md",
      "file": "AGENTS.md",
      "mode": "append-block",
      "blockId": "knowledge-pack-skill-routing"
    },
    {
      "source": "pack/output-conventions.md",
      "file": "AGENTS.md",
      "mode": "append-block",
      "blockId": "knowledge-pack-output-conventions"
    },
    {
      "source": "pack/operational-notes.md",
      "file": "PITFALLS.md",
      "mode": "copy"
    }
  ],
  "skillProfiles": {
    "default": [
      "oc-market",
      "perplexity-search",
      "development-plan-writer",
      "security-checker"
    ],
    "qa-agent": [
      "oc-market",
      "qa-testing",
      "playwright-browser",
      "web-tester",
      "bug-analyzer",
      "perplexity-search"
    ],
    "content-agent": [
      "oc-market",
      "docx-translator-v2",
      "manual-generator",
      "perplexity-search",
      "web-research-citation"
    ],
    "lightweight": [
      "oc-market"
    ]
  },
  "selectedProfile": "default"
}
```

---

## 6. 安裝流程（Main Agent 執行）

### 6.1 指令格式

Main Agent 收到類似指令：
```
將 agent-knowledge-pack 安裝到新 OpenClaw，用 default profile
```

### 6.2 執行步驟

```
1. Main Agent 讀取 manifest.json
2. 逐項執行 patch：
   a. 搵到目標 .md 檔案
   b. 檢查有冇已存在嘅 managed block
   c. 如有 → 替換 block 內容
   d. 如冇 → append block 到檔案尾
3. 根據 selectedProfile 從 OC Market 下載 skills
4. 執行 verify_pack.sh 驗證
5. 匯報完成
```

### 6.3 apply_pack.sh 邏輯

```bash
# 讀 manifest.json
# 對每個 target:
#   if mode == "replace-block":
#     找 BEGIN/END 標記 → 替換中間內容
#   if mode == "append-block":
#     找 BEGIN/END 標記 → 如有就替換，冇就 append 到檔案尾
#   if mode == "copy":
#     直接複製整個檔案
# 寫入 manifest.lock.json 記錄安裝狀態
```

---

## 7. 白名單與排除

### 7.1 讀取白名單（知識來源）
- `AGENTS.md` — workflow 規則
- `SOUL.md` — 行為原則
- `SECURITY.md` — 安全守則
- `PITFALLS.md` — 常見坑位
- `HEARTBEAT.md` — 定期檢查
- `skills/**/SKILL.md` — skill 定義
- `docs/**/*.md` — 技術文件

### 7.2 排除範圍
- `USER.md` — 個人資料
- `MEMORY.md` — 私人記憶
- `memory/**` — 日記式記錄
- `credentials/**` — 密鑰
- `.env*` — secrets
- `IDENTITY.md` — 個人身份

### 7.3 脫敏規則
- 刪除 API key / token / password
- 遮罩 email / phone / address
- 將具體 IP / host 改為 placeholder

---

## 8. Phase 計劃

### Phase 1 — MVP ✅（當前）

- [x] 手動抽取 5 類知識
- [x] 建立 pack/ 目錄結構
- [x] 寫 manifest.json
- [x] 寫 apply_pack.sh（managed block patch）
- [x] 寫 verify_pack.sh
- [x] 整合到 openclaw-setup skill
- [x] 喺 TC-OC02 做安裝測試

### Phase 2 — 自動化

- [ ] LLM-based extraction pipeline
- [ ] PII/secret auto-detection
- [ ] Contradiction mapping
- [ ] Gap detection
- [ ] Diff-based rebuild

### Phase 3 — 正式版

- [ ] 與 OC Market registry 深度整合
- [ ] 版本化 knowledge pack
- [ ] Review UI / approval flow
- [ ] Multi-agent pack management

---

## 9. 驗收標準（MVP）

1. ✅ knowledge pack 包含至少 4 類結構化知識
2. ✅ 無 PII / secret 洩漏
3. ✅ managed block 可重複執行（idempotent）
4. ✅ 新 OpenClaw agent 安裝後，AGENTS.md 包含工作流程規則
5. ✅ skill profile 可選擇，唔會預設裝晒
6. ✅ 有 verification script 驗證安裝結果
7. ✅ 整合到 openclaw-setup skill module 系統

---

## 10. 一句總結

> 將舊 agent 裡面真正有價值、可移植嘅工作知識抽取成安全、可安裝、可版本化的 Knowledge Pack，由 Main Agent 受控地 patch 到新 agent，令每部新 OpenClaw 即時具備公司工作方式。
