# GA 10 Xero Invoice Workflow
*Last updated: 2026-04-01*

## 觸發條件
用家喺 WhatsApp 發送收據/invoice 圖片 → 自動入 Xero

## 步驟

### 1. Refresh Token（每次必做）
```bash
bash skills/xero-receipt-importer/scripts/refresh_token.sh
ACCESS_TOKEN=$(python3 -c "import json; print(json.load(open('/tmp/xero_token.json'))['access_token'])")
TENANT_ID="868c24f0-638d-4cd3-9846-2f45b4f5b016"
```

### 2. 儲存圖片
```bash
cp /home/openclaw/.openclaw/media/inbound/<uuid>.jpg /home/openclaw/.openclaw/workspace/data/temp/receipt_new.jpg
```

### 3. Vision AI 讀取收據
```python
python3 -c "
import os, sys
sys.path.insert(0, 'skills/dashscope-vision')
os.environ['DASHSCOPE_API_KEY'] = 'sk-d27e3f1d31504e51bf7d4623e51df5f0'
from vision_main import analyze_images
result = analyze_images(['data/temp/receipt_new.jpg'], 'Extract: supplier name, invoice date, invoice number, due date, every line item with qty/description/unit price/line total/VAT%, subtotal, total.')
print(result)
"
```

### 4. 確認明細後建立 Bill
```bash
curl -s -X POST "https://api.xero.com/api.xro/2.0/Invoices" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "xero-tenant-id: $TENANT_ID" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "Type": "ACCPAY",
    "Contact": {"Name": "<SUPPLIER>"},
    "Date": "<INVOICE_DATE e.g. 2026-03-09>",
    "DueDate": "<DUE_DATE>",
    "InvoiceNumber": "<INVOICE_NO>",
    "Status": "DRAFT",
    "CurrencyCode": "GBP",
    "LineAmountTypes": "Exclusive",
    "LineItems": [...]
  }'
```

### 5. 上傳附件
```bash
curl -s -X PUT "https://api.xero.com/api.xro/2.0/Invoices/<INVOICE_ID>/Attachments/invoice_<NO>.jpg" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "xero-tenant-id: $TENANT_ID" \
  -H "Content-Type: image/jpeg" \
  -H "Accept: application/json" \
  --data-binary @data/temp/receipt_new.jpg
```

## Account Code 規則（GA 10）
| 類別 | Account | VAT |
|------|---------|-----|
| 食品 Food | 310 | No VAT (NONE) |
| 飲品 Drinks | 310 | 20% VAT (INPUT2) |
| 其他 Others（醫藥/消耗品等） | 473 | 20% VAT (INPUT2) |

## Xero 憑證
- **Tenant:** Ga 10 Newark Limited
- **Tenant ID:** 868c24f0-638d-4cd3-9846-2f45b4f5b016
- **Credentials file:** `data/projects/ga10-xero/credentials.json`
- **Token file:** `/tmp/xero_token.json` (auto-refreshed)
- **Period lock date:** 31-Oct-2025 → 日期必須 ≥ 2026-01-01
- **⚠️ 永遠用 invoice 上面嘅原始日期，唔用今日日期**

## 重要注意
- LineAmountTypes: "Exclusive"（唔含 VAT，Xero 自動計）
- 確認明細後先建 Bill（列出所有 line items 問用家 OK）
- 建 Bill 後立即上傳原始圖片作附件
- Re-auth scope 用 `accounting.invoices`（唔係 accounting.transactions）

## 已處理 Invoices
| Date | Supplier | Invoice No | Total | Xero ID |
|------|----------|------------|-------|---------|
| 2025-04-01 | Morrisons | 630004803600701420261118 | £11.97 | 26fe985a-c9da-4649-ab80-fad6043748ff |
| 2026-03-09 | Japan Food Express Ltd | 312366 | £323.72 | 35e6f259-16b1-4cf8-bfce-f323b793685a |
