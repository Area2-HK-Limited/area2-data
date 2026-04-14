# BSP 介面改進清單
*整理日期：2026-03-25（完整版，涵蓋三帳戶所有頁面）*
*基於：三帳戶實際測試（學校 / 顧問 / 學生）*

---

## 背景：已確認嘅流程邏輯

```
學生申請 → 學校決定：
  (A) 學校自己做面試
  (B) 指派夥伴顧問做前期面試評估
       → 顧問填寫評估 → 學校批核
       → 批核後學生+學校直接溝通（站內 message）
       → 顧問可旁觀全程紀錄（但學校↔學生私訊唔畀顧問睇，設計如此）
       → 最終決定喺學校
學生同顧問可同時睇到最新進度
```

**結論：流程邏輯係通嘅，系統都有支援。問題係介面冇話俾用戶知「依家要做咩、去邊度做」。**

---

## 三帳戶頁面清單

### 🏫 學校帳戶（14個頁面）
| # | 頁面 | Route |
|---|------|-------|
| 1 | Profile | `#/profile` |
| 2 | Photo Upload | `#/school_photo` |
| 3 | Change Password | `#/change_password` |
| 4 | FAQ List | `#/faq` |
| 5 | Enquiry List | `#/enquiry` |
| 6 | School Admission List | `#/school_admission_list` |
| 7 | School Admission Setting | `#/school_admission_setting` |
| 8 | Partnership Application | `#/partnership_applies` |
| 9 | Partnered List | `#/partnered` |
| 10 | Report | `#/report` |
| 11 | Membership & Transaction | `#/transaction` |
| 12 | Fee Setting | `#/fee` |
| 13 | Term Dates Setting | `#/term` |
| 14 | Schools Vacancies Setting | `#/vacancies` |

**Dashboard：** 登入後跳去公開主頁（`/en/?msg=login-success`），唔係 school management 頁面。需要自己點右上角 dropdown 先進入管理介面。

### 🧑‍💼 顧問帳戶（10個頁面）
| # | 頁面 | Route |
|---|------|-------|
| 1 | Profile | `#/profile` |
| 2 | Consultant Photo | `#/photo` |
| 3 | Change Password | `#/password` |
| 4 | FAQ List | `#/faq` |
| 5 | Enquiry List | `#/enquiry` |
| 6 | School Admission List | `#/school_admission_list` |
| 7 | School Partnership Application | `#/partner_applies` |
| 8 | Partnered School | `#/partner` |
| 9 | Report | `#/report` |
| 10 | Membership & Transaction | `#/transaction` |

**Dashboard：** 登入後直接顯示 Profile Edit form，冇獨立 Dashboard 首頁。

### 🎓 學生帳戶（6個頁面）
| # | 頁面 | Route |
|---|------|-------|
| 1 | Profile | `#/profile` |
| 2 | Change Password | `#/change_password` |
| 3 | Enquiry List | `#/enquiry` |
| 4 | School Place Applicant Details | `#/applicant` |
| 5 | School Admission List | `#/school_admission_list` |
| 6 | Bookmarked School | `#/bookmark` |

**Dashboard：** 登入後直接顯示 Profile（只有 First name / Surname / Email），冇引導或 onboarding。

---

## 🟢 低難度（Code 小改動）

### L1. 顧問 Phase 連結 URL Bug【最緊急】
- **問題：** 顧問 Admission List 嘅 Phase 連結係 `#/phase/45`（root-relative），點擊後跳去首頁
- **改法：** 改為 `/en/profile/consultant#/phase/45`（absolute path）
- **影響：** 顧問完全無法查看任何申請詳情，核心功能損壞

### L2. 頁面標題錯別字
- **問題：** "SCHOOL PLACE APPLICAT DETAILS"（少咗個 N）
- **改法：** 改為 "Your Application Profile" 或 "School Application Details"

### L3. "Contact Education Consultant" 按鈕冇指派時靜默消失
- **問題：** 學校冇指派顧問時，呢個按鈕完全消失，唔知發生咩事
- **改法：** 改為灰色 disabled 狀態，加 tooltip："No consultant assigned. Assign one above."

### L4. School Admission List 加狀態 Filter
- **問題：** 所有申請平排顯示，難以找到「需要處理」嘅申請
- **改法：** 加 Tab 或 Filter → `All | Pending Review | Interview Stage | Completed | Rejected`

### L5. Sidebar 同 Header Dropdown 命名不一致（學校）
- **問題：** Sidebar 叫「Photo Upload」，Header dropdown 叫「School Photo」— 同一功能兩個名
- **改法：** 統一用「School Photo」或「Photo Upload」

### L6. Header Dropdown 全大寫問題（學校）
- **問題：** "SCHOOL ADMISSION SETTING" 全大寫，其他連結係 Title Case，inconsistent
- **改法：** 改為 "School Admission Setting"

### L7. 地址欄位顯示資料庫 ID（學校 + 顧問）
- **問題：** Profile / Partnered List / Report 入面地址顯示為數字（如 `169, 172, 173`），唔係可讀文字
- **改法：** 修復 foreign key lookup，resolve 成正確地址文字

### L8. 顧問 FAQ 示範內容唔相關
- **問題：** FAQ List 預設示範內容係 BSP 自己嘅系統說明（如「去 britishschoolportal.co.uk 登記」），顧問以為係系統內容，實際上係佢哋自己嘅 Q&A 空間
- **改法：** 改成更通用嘅示範（如「問：你哋服務係咩？答：[你嘅回答]」），或加 placeholder 提示

### L9. Cookie Banner 遮擋 UI
- **問題：** 三個帳戶登入後 cookie consent banner 持續顯示，遮擋底部內容
- **改法：** 登入後自動 dismiss，或改細 banner 位置

---

## 🟡 中難度（需要 UI 設計改動）

### M1. 學校指派顧問流程唔透明【最重要】
- **問題：** 學校唔知點指派顧問，指派機制埋藏在 Phase 3 入面
- **改法：** 喺每個申請 detail 頁頂部加明顯嘅 "Assign to Consultant" dropdown，選好後 Confirm

### M2. 學生唔知點開始申請【新用戶體驗】
- **問題：** 學生登入後直接去 Profile，"No Apply"，冇任何引導
- **改法：** 加 Onboarding banner：Step 1 填 Applicant Profile → Step 2 搵學校 → Step 3 點 Apply

### M3. 顧問 Phase Detail 介面混亂
- **問題：** Phase detail 同時顯示整份學生表格（readonly）+ Interview 填寫欄位，極度混亂
- **改法：** 預設只顯示 Interview section，學生表格 collapsed，加 "View Student Full Details ▼"

### M4. 學生睇唔到「已分派顧問」資訊
- **問題：** 學生唔知係學校自己做面試定係有顧問跟進
- **改法：** 喺學生 Admission Phase 加 "Your application is being handled by: [顧問名]"

### M5. 顧問睇唔到完整 Phase 進度
- **問題：** 顧問只見 Phase 3，唔知整個 9-Phase 流程全局
- **改法：** 加 read-only Phase indicator：`Phase 1 ✅ | Phase 2 ✅ | Phase 3 ⏳ (You) | Phase 4-9 (School)`

### M6. 三個帳戶都冇專屬 Dashboard 首頁
- **問題：** 登入後直接去 Profile Edit form，冇 overview、冇待辦事項、冇統計數字
- **改法：** 加 Dashboard 首頁，各角色顯示對應摘要：
  - 學校：待處理申請數、最新 Partnership 通知
  - 顧問：待填 Interview 評估數、最新申請
  - 學生：申請進度、下一步行動

### M7. 顧問 Enquiry List 唔可點擊
- **問題：** Enquiry 列表項目冇 Detail button/link，但 School Admission List 有 — 行為不一致
- **改法：** 加 "View" 或點擊整行進入 enquiry detail

### M8. 顧問 Enquiry List 冇顯示 Subject
- **問題：** 只顯示 sender 名稱同日期，冇 subject/標題，需要點入先知內容
- **改法：** 列表加 Subject 欄位

### M9. 顧問 School Partnership Application 空白冇 CTA
- **問題：** 頁面顯示 "No Partnership Application"，冇引導如何申請新合作
- **改法：** 加 "Find Schools to Partner" 按鈕，連去學校搜尋頁

### M10. 顧問 Membership & Transaction 頁完全空白
- **問題：** 頁面連 title 都冇，只有 cookie banner，係最嚴重嘅空頁問題
- **改法：** 最少加 empty state："No active membership. View plans →" 或顯示基本帳戶資訊

### M11. 顧問 Report 數據不可讀
- **問題：** Country 顯示 `--Please Select: 4`，Applied Curriculum 顯示 `: 4`，Date picker 冇 widget
- **改法：** 修復 dropdown value resolve；加 date picker component

### M12. 學生 Profile 頁面 header icon 冇 label
- **問題：** Header 右側有兩個 icon（chat bubble、building），冇 tooltip/label，唔知點用
- **改法：** 加 tooltip 或 label

### M13. 學生 Sidebar menu item 文字過長
- **問題：** "School Place Applicant Details" 喺 sidebar 換行顯示，視覺上awkward
- **改法：** 縮短為 "Application Profile" 或 "Applicant Details"

---

## 🔴 已確認暫緩（優化期後再改）

- Report 統計數字錯誤（Success Rate 0% bug）
- 夥伴關係「Processing Student」數字唔一致
- Membership 過期超過 1 年功能仍正常（冇 Renewal 提示）
- 申請人名稱顯示「Editor @BSP」問題
- 語言切換 UI（只有「繁」冇「EN」並排）
- Business Registration Image broken link（顧問 Profile）

---

## 進度追蹤

| # | 改動 | 難度 | 狀態 |
|---|------|------|------|
| L1 | 顧問 Phase URL Bug | 🟢 低 | ⏳ 待開發 |
| L2 | 頁面標題錯別字 | 🟢 低 | ⏳ 待開發 |
| L3 | Contact Consultant 按鈕灰色提示 | 🟢 低 | ⏳ 待開發 |
| L4 | Admission List 狀態 Filter | 🟢 低 | ⏳ 待開發 |
| L5 | Sidebar/Header 命名統一 | 🟢 低 | ⏳ 待開發 |
| L6 | Header Dropdown 大小寫統一 | 🟢 低 | ⏳ 待開發 |
| L7 | 地址欄位 ID → 可讀文字 | 🟢 低 | ⏳ 待開發 |
| L8 | 顧問 FAQ 示範內容 | 🟢 低 | ⏳ 待開發 |
| L9 | Cookie Banner 處理 | 🟢 低 | ⏳ 待開發 |
| M1 | 學校指派顧問流程 | 🟡 中 | ⏳ 待開發 |
| M2 | 學生申請入口引導 | 🟡 中 | ⏳ 待開發 |
| M3 | 顧問 Phase Detail 折疊 | 🟡 中 | ⏳ 待開發 |
| M4 | 學生顯示已指派顧問 | 🟡 中 | ⏳ 待開發 |
| M5 | 顧問 Phase 進度 indicator | 🟡 中 | ⏳ 待開發 |
| M6 | 三帳戶 Dashboard 首頁 | 🟡 中 | ⏳ 待開發 |
| M7 | 顧問 Enquiry 可點擊 | 🟡 中 | ⏳ 待開發 |
| M8 | 顧問 Enquiry 加 Subject | 🟡 中 | ⏳ 待開發 |
| M9 | 顧問 Partnership 加 CTA | 🟡 中 | ⏳ 待開發 |
| M10 | 顧問 Membership 空頁修復 | 🟡 中 | ⏳ 待開發 |
| M11 | 顧問 Report 數據修復 | 🟡 中 | ⏳ 待開發 |
| M12 | 學生 Header icon label | 🟡 中 | ⏳ 待開發 |
| M13 | 學生 Sidebar 文字縮短 | 🟢 低 | ⏳ 待開發 |
