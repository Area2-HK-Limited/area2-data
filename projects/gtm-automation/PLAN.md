# GTM 自動化開發計劃

**狀態：** 初步構思 🟡
**建立：** 2026-03-14
**負責人：** Eric Tong

---

## 背景

Hostlink / 客戶項目涉及大量 Google Tag Manager (GTM) 設定，例如：
- Click Trigger（PDF 下載、連結點擊）
- 命名規則統一（例如 `6A_clicked_leaflet`）
- 多個客戶 Container 需要重複設定相似嘅 Tags / Triggers / Variables

手動喺 GTM 介面逐個建立費時，希望用 API 自動化。

---

## 目標

用 Google Tag Manager API 自動化建立／更新 GTM 設定，減少重複人手操作。

---

## 已確認 API 能力

- ✅ GTM 有官方 API（Tag Manager API v2）
- ✅ 唔需要特別申請，用 Google 帳號 OAuth 2.0 或 Service Account
- ✅ 可以建立：Tags、Triggers、Variables、發佈 Container

---

## 已分析案例

### Trigger：`6A_clicked_leaflet`
- 類型：Click - Just Links
- 條件：Click URL contains `P1_WCH_Promotional_Leaflet` AND `.pdf` AND `Leaflet`
- ✅ 可用 API `POST .../triggers` 建立

---

## 待定需求（Eric 尚未確認）

- [ ] 批量建立多個類似 Trigger？
- [ ] 從 Google Sheets 同步設定到 GTM？
- [ ] 自動發佈 Container（Submit）？
- [ ] 跨多個客戶 Container 複製設定？

---

## 下一步

等 Eric 確認具體需求後，制定詳細技術方案 + 開始開發
