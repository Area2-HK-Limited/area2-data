# Ga 10 Newark Limited — Xero Integration

## 設定完成日期
2026-03-26

## Xero App 資料
- **App Name:** Receipt App
- **Company:** Ga 10 Newark Limited (GaSushi)
- **Developer Portal:** https://developer.xero.com/app/manage
- **Client ID:** 7017A9BE4CDE4B57997BF29988923767
- **Client Secret:** RBFA9qxle3EAuEtK5QDpR9Bwwk789SgLVGEZiOZUDaqj4T7x
- **Redirect URI:** https://developer.xero.com/callback
- **Scopes:** openid profile email offline_access accounting.invoices accounting.payments accounting.attachments

## Xero Organization
- **Tenant Name:** Ga 10 Newark Limited
- **Tenant ID:** 868c24f0-638d-4cd3-9846-2f45b4f5b016

## Credentials 檔案
`/home/openclaw/.openclaw/workspace/data/projects/ga10-xero/credentials.json`
(包含最新 refresh_token)

## 重新授權步驟（如 token 過期）
1. 用瀏覽器開：
   https://login.xero.com/identity/connect/authorize?response_type=code&client_id=7017A9BE4CDE4B57997BF29988923767&redirect_uri=https%3A%2F%2Fdeveloper.xero.com%2Fcallback&scope=openid+profile+email+offline_access+accounting.invoices+accounting.payments+accounting.attachments&state=ga10
2. 登入 Xero → 選 Ga 10 Newark Limited → Allow
3. 將 callback URL 發俾 AI
4. AI 會自動完成 token 交換

## 工作流程
1. 用戶發收據/發票（PDF 或圖片）俾 AI
2. AI OCR 提取：供應商、日期、金額、VAT
3. 確認資料
4. 用戶批准後自動入 Xero Draft Bill
5. 用戶喺 Xero 審核後 Approve

## 預設 Account Code
- **473** — Catering Supplies（Ga 10 主要用途）

## Token 刷新指令
```bash
curl -s -X POST https://identity.xero.com/connect/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -u "7017A9BE4CDE4B57997BF29988923767:RBFA9qxle3EAuEtK5QDpR9Bwwk789SgLVGEZiOZUDaqj4T7x" \
  -d "grant_type=refresh_token&refresh_token=$(cat /home/openclaw/.openclaw/workspace/data/projects/ga10-xero/credentials.json | python3 -c "import json,sys; print(json.load(sys.stdin)['refresh_token'])")" \
  > /tmp/xero_token.json
```

## 相關聯絡
- **Xero 帳號 Email:** gatennewark@gmail.com
- **帳號持有人:** KAR LEE
- **WhatsApp:** British School Portal (+447426744222)
