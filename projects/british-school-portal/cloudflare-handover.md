# BSP - AI Test 網站 交接指南

**項目：** https://bsp-redesign.pages.dev
**托管：** Cloudflare Pages

---

## 📋 交接內容

| 項目 | 詳情 |
|------|------|
| 網站 URL | https://bsp-redesign.pages.dev |
| 備用 URL | https://bsp-redesign-xxxx.pages.dev |
| 項目名稱 | bsp-redesign |
| Git Repo | （需向現有管理者確認）|

---

## 🔧 第一步：邀請 Collaborator（雙方都需要做嘢）

### 現有管理者（轉出方）需要做：

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 進入 **Workers & Pages** → 選擇 **bsp-redesign**
3. 點擊 **Settings** → **General**
4. 向下捲至 **Collaborators** 區域
5. 點 **Invite** → 輸入新帳戶 email 地址
6. 發送邀請

### 新帳戶（接收方，+85295697524）需要做：

1. 登入自己嘅 Cloudflare 帳戶
2. 去 [Collaborators invites 頁面](https://dash.cloudflare.com/account/collaborators)
3. 接受邀請
4. 確認後即有完整訪問權限

---

## 📧 新帳戶需要準備

- ✅ 自己嘅 Cloudflare 帳戶（用邊個 email 註冊就填邊個）
- ✅ 可以登入該帳戶

---

## ❓ 如果遇到問題

**Q: 搵唔到 Collaborators 設定？**
> 可能係帳戶權限問題，需要 Pro 或 Enterprise plan 先有 Collaborator 功能

**Q: 想完全轉移擁有權？**
> 目前 Cloudflare Pages 唔支援直接轉移擁有權
> 建議做法：接收方接受 Collaborator 邀請後，轉出方可以退出

**Q: 如果係另一個係自己控制嘅帳戶？**
> 可以刪除舊帳戶項目 → 新帳戶重新創建並連接同一個 Git Repo
> 舊有部署記錄會消失，但網站內容唔受影響

---

## 📞 需要現有管理者提供

請向現有管理者確認以下資料：

- [ ] Git Repo 連結
- [ ] 係咪已配置 Build 設定（自動部署）
- [ ] 係咪有自訂域名設定

---

## 👤 聯絡方式

如有問題，可以聯絡 BSP 團隊：
- WhatsApp: +447426744222

---

*由 A2 AI Assistant 製作 | 2026-04-10*
