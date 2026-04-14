# Invoice Ninja v5 — Inventory & Stock Management API Research

**Research Date:** 2026-04-12
**Focus:** SecrexAI SaaS product improvement — how Invoice Ninja's API can serve inventory/stock management for startups & SMBs

---

## 1. API Endpoints for Products (Stock Quantity Fields)

Invoice Ninja does **not** have a dedicated `/api/v1/inventory` or `/api/v1/stock` endpoint. Inventory is handled as **attributes on the Product object**.

### Product Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/api/v1/products` | List all products (includes stock fields) |
| `GET` | `/api/v1/products/{id}` | Get single product |
| `POST` | `/api/v1/products` | Create product |
| `PUT` | `/api/v1/products/{id}` | Update product |
| `DELETE` | `/api/v1/products/{id}` | Archive/delete product |

### Key Inventory Fields on Product Object

| Field | Type | Description |
|-------|------|-------------|
| `track_inventory` | boolean | Enable stock tracking (`true` / `false`) |
| `current_qty` | integer | Current stock quantity |
| `inventory_notification_threshold` | integer | Low-stock alert threshold |
| `stock_notification` | boolean | Enable email alerts when threshold is hit |
| `product_key` | string | SKU / product identifier |
| `cost` | decimal | Unit cost |
| `quantity` | decimal | Default quantity (used on invoices) |

### Example: Create Product with Inventory Tracking

```json
POST /api/v1/products
Content-Type: application/json
X-API-TOKEN: your_api_token_here

{
  "product_key": "WIDGET-001",
  "notes": "Standard widget",
  "cost": 25.00,
  "price": 59.99,
  "track_inventory": true,
  "current_qty": 400,
  "inventory_notification_threshold": 50,
  "stock_notification": true
}
```

### Example: Update Stock Quantity

```json
PUT /api/v1/products/{product_id}
X-API-TOKEN: your_api_token_here

{
  "current_qty": 320
}
```

### Listing Products (with stock data)

```bash
curl -X GET "https://app.invoiceninja.com/api/v1/products?per_page=100" \
  -H "X-API-TOKEN: your_api_token_here" \
  -H "Content-Type: application/json"
```

Response includes all products with their `current_qty`, `track_inventory`, etc.

---

## 2. How Invoices Affect Stock

When invoicing products with inventory tracking enabled:

1. Stock (`current_qty`) is **automatically reduced** when an invoice is **marked as sent** or **paid** (depending on settings).
2. If `qty` on the invoice exceeds available `current_qty`, Invoice Ninja will either:
   - Warn the user, or
   - Block the invoice (configurable per product)
3. The invoice line items reference products by `product_key`, and the system auto-populates cost/notes from the product catalog.

**Automatic stock deduction flow:**
```
Invoice created → marked sent → current_qty decreases by line item qty
```

**Stock restoration:** If an invoice is deleted, voided, or credited, stock is typically restored automatically (behaviour varies — test in sandbox).

### Enabling Inventory at Company Level

In Company Settings → Inventory:
- `track_inventory` → globally enable tracking
- `inventory_notification_threshold` → default threshold
- `stock_notification` → default alert enable

Per-product settings override the company defaults.

---

## 3. Webhooks for Stock Changes

### Current State (as of April 2026)

**Invoice Ninja does NOT currently have dedicated webhook events for stock/inventory changes.**

Supported webhook event types include:
- `create_client`, `update_client`, `delete_client`
- `create_invoice`, `update_invoice`, `delete_invoice`, `archive_invoice`, `restore_invoice`, **sent_invoice**
- `create_payment`, `update_payment`, `delete_payment`
- `create_project`, `update_project`, `delete_project`

**Notable Gap:** There is an **open GitHub issue (#11509, Dec 2025)** requesting additional webhook event types including inventory/stock events — but it remains unresolved.

### Workaround: Polling

Since there are no stock-specific webhooks:
- Poll `GET /api/v1/products?updated_at=<timestamp>` periodically
- Compare `current_qty` against previous values
- Trigger alerts or actions when changes are detected

### Workaround: Invoice Webhooks

Since stock changes are triggered by invoice events:
- Listen for `sent_invoice` and `paid_invoice` webhooks
- Fetch the invoice details including line items
- Calculate expected stock changes
- This is more efficient than polling all products

### Integration Platforms

| Platform | Approach |
|----------|----------|
| **n8n** | HTTP Request node to poll products or handle invoice webhooks |
| **Zapier/Make** | Invoice Ninja triggers (sent invoice, payment) → filter → external action |
| **Pabbly/Integrately** | Same pattern as Zapier |
| **Pipedream** | Serverless code watching Invoice Ninja events |

---

## 4. How to Update Stock Quantity via API

There are **two approaches**:

### Approach A: Direct Product Update (Manual Adjustment)

```python
import requests

base_url = "https://app.invoiceninja.com/api/v1"
token = "your_api_token"
headers = {
    "X-API-TOKEN": token,
    "Content-Type": "application/json"
}

product_id = 123

data = {
    "current_qty": 500  # Set absolute stock level
}

response = requests.put(
    f"{base_url}/products/{product_id}",
    json=data,
    headers=headers
)
print(response.json())
```

### Approach B: Purchase Order Receipt (Inbound Stock)

Purchase Orders (`/api/v1/purchase_orders`) work analogously to invoices but for incoming stock:
- Create a PO for supplier → mark as received/accepted → stock increases

```json
POST /api/v1/purchase_orders
{
  "vendor_id": "hashed_vendor_id",
  "date": "2026-04-12",
  "line_items": [
    {
      "product_key": "WIDGET-001",
      "quantity": 200,
      "cost": 15.00
    }
  ]
}
```

Mark PO as "received" → `current_qty` for WIDGET-001 increases by 200.

### PHP Example (cURL)

```php
<?php
$base_url = "https://app.invoiceninja.com/api/v1";
$token = "your_api_token";
$product_id = 123;

$data = ['current_qty' => 500];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "$base_url/products/$product_id");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-API-TOKEN: $token",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "HTTP $http_code: $response";
?>
```

---

## 5. Limitations of the Inventory API

| Limitation | Detail |
|------------|--------|
| **No dedicated stock endpoints** | All inventory operations go through `/products`; no `/inventory` or `/stock` resource |
| **No stock-specific webhooks** | Must poll or derive stock changes from invoice events |
| **No partial stock deduction** | Cannot selectively deduct stock without creating an invoice or manually setting `current_qty` |
| **No batch stock update** | Each product must be updated individually via PUT `/products/{id}` |
| **No stock location/warehouse** | Single stock figure per product; no multi-location support |
| **Rate limits not publicly documented** | Must contact support for Enterprise plan limits; 429 responses on overuse |
| **No real-time consistency guarantee** | Self-hosted deployments may have lag between invoice sent and stock update |
| **Pagination default 20** | Use `?per_page=50` or `?per_page=100` to reduce calls |
| **Webhook reliability** | Community reports intermittent webhook delivery; some events (e.g. delete) not always firing |

### Invoice Ninja Feature Roadmap Gaps

- No native **low stock → auto-PO** generation
- No native **multi-warehouse** or **batch tracking**
- No native **serial/lot number** tracking
- No native **stock valuation** (FIFO, AVCO) via API

---

## 6. Code Examples for Stock Management

### Full Python: Get Low-Stock Products

```python
import requests

INVOICE_NINJA_URL = "https://app.invoiceninja.com/api/v1"
TOKEN = "your_api_token"
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json",
    "X-API-TOKEN": TOKEN,
}

def get_products_with_low_stock(threshold=50):
    """Fetch all products and filter by low stock."""
    page = 1
    low_stock = []
    
    while True:
        resp = requests.get(
            f"{INVOICE_NINJA_URL}/products",
            headers=HEADERS,
            params={"per_page": 100, "page": page}
        )
        data = resp.json()
        products = data.get('data', [])
        
        if not products:
            break
            
        for p in products:
            if p.get('track_inventory') and p.get('current_qty', 999) <= p.get('inventory_notification_threshold', threshold):
                low_stock.append({
                    'id': p['id'],
                    'product_key': p.get('product_key'),
                    'current_qty': p.get('current_qty'),
                    'threshold': p.get('inventory_notification_threshold')
                })
        
        meta = data.get('meta', {})
        if page >= meta.get('pagination', {}).get('total_pages', 1):
            break
        page += 1
    
    return low_stock

low = get_products_with_low_stock(threshold=50)
for item in low:
    print(f"{item['product_key']}: {item['current_qty']} remaining (threshold: {item['threshold']})")
```

### Full Python: Update Stock After Manual Adjustment

```python
def adjust_stock(product_id, new_qty, reason="manual_adjustment"):
    """Directly set current_qty for a product."""
    resp = requests.put(
        f"{INVOICE_NINJA_URL}/products/{product_id}",
        headers=HEADERS,
        json={"current_qty": new_qty}
    )
    if resp.status_code == 200:
        print(f"Stock updated to {new_qty} for product {product_id}")
    else:
        print(f"Failed: {resp.status_code} - {resp.text}")
    return resp.json()
```

### Full Python: Create Purchase Order (Restock)

```python
def create_purchase_order(vendor_id, product_key, qty, cost):
    """Create a PO to restock inventory."""
    payload = {
        "vendor_id": vendor_id,
        "date": "2026-04-12",
        "line_items": [{
            "product_key": product_key,
            "quantity": qty,
            "cost": cost
        }]
    }
    resp = requests.post(
        f"{INVOICE_NINJA_URL}/purchase_orders",
        headers=HEADERS,
        json=payload
    )
    print(resp.status_code, resp.json())
    return resp.json()
```

### Node.js Example

```javascript
// Using fetch / axios
const axios = require('axios');

const ninjaApi = axios.create({
  baseURL: 'https://app.invoiceninja.com/api/v1',
  headers: {
    'X-API-TOKEN': process.env.INVOICE_NINJA_TOKEN,
    'Content-Type': 'application/json'
  }
});

async function getLowStockProducts(threshold = 50) {
  const resp = await ninjaApi.get('/products', { params: { per_page: 100 } });
  return resp.data.data.filter(p => 
    p.track_inventory && p.current_qty <= p.inventory_notification_threshold
  );
}

async function updateStock(productId, newQty) {
  const resp = await ninjaApi.put(`/products/${productId}`, { current_qty: newQty });
  return resp.data;
}
```

---

## 7. Rate Limits

| Item | Detail |
|------|--------|
| **429 responses** | Yes, Invoice Ninja returns HTTP 429 when rate limit exceeded |
| **Specific numbers** | Not publicly documented; must email support@getninja.com for hosted Enterprise limits |
| **Default pagination** | 20 records per page; use `?per_page=50` or `?per_page=100` |
| **Self-hosted** | No built-in rate limiting (configurable at web server level) |
| **Recommended retry** | Third-party SDKs include built-in retry with exponential backoff |
| **Best practice** | Add `X-Rate-Limit-remaining` header checking and back off accordingly |

---

## 8. How SecrexAI Can Use the Inventory API

### 8a. Low Stock WhatsApp Alerts

**Architecture:**
1. SecrexAI schedules a **cron job** (e.g., every 6 hours) that calls `GET /api/v1/products`
2. Filters products where `track_inventory=true` AND `current_qty <= inventory_notification_threshold`
3. For each low-stock item, generates a formatted alert
4. Sends via **WhatsApp** (via OpenClaw's WhatsApp channel) to the business owner

**Prompt template for AI:**
```
Check Invoice Ninja stock levels. Alert if any product has current_qty <= inventory_notification_threshold.
Format: ⚠️ Low Stock: [product_key] — [current_qty] remaining (threshold: [threshold])
```

**Enhancement opportunity for SecrexAI:**
- Add **custom threshold logic** (e.g., lead time aware — if lead time is 5 days and daily usage is 10 units, alert when stock < 50)
- **Categorise alerts** by urgency (critical / warning / watch)

---

### 8b. Automatic PO Generation

**Architecture:**
1. Cron job detects low-stock condition
2. SecrexAI AI agent looks up the product's **default vendor** (if stored in Invoice Ninja vendor_id or product notes)
3. Drafts a Purchase Order via `POST /api/v1/purchase_orders`
4. Sends PO for human approval (via WhatsApp / email)
5. On approval, marks PO as sent to vendor

**Enhanced flow (AI-powered):**
- Analysing past PO history to recommend order quantity (e.g., average 30-day usage × 1.5 safety stock)
- Suggest alternative vendors if preferred vendor is out of stock
- Draft email/WhatsApp message to vendor with PO details

**Prompt template:**
```
Product [X] is low on stock (qty: [N]). Draft a purchase order for [Y] units 
at approximately [cost]. Check vendor [name] as primary supplier. 
Confirm before sending to vendor.
```

---

### 8c. Stock Queries via Chat (Conversational AI)

**Use cases:**
- "What's our current stock for SKU-123?"
- "Which products are below threshold?"
- "Restock WIDGET-001 to 500 units"
- "Show me the stock report for the last 30 days"

**Implementation:**
1. User sends query via WhatsApp / Discord / web chat
2. SecrexAI intercepts, parses intent
3. Calls Invoice Ninja API:
   - `GET /api/v1/products?product_key=SKU-123` → returns `current_qty`
   - `GET /api/v1/products` (paginated, filtered) → returns low-stock list
   - `PUT /api/v1/products/{id}` → updates stock on command
4. Formats response in natural language

**Example conversation:**
```
User: 邊個 product 庫存低過 20？
SecrexAI: ⚠️ Low stock report:
• WIDGET-001: 12 remaining (threshold: 20)
• GADGET-A: 8 remaining (threshold: 15)
要我幫你自動生成採購單嗎？
```

---

## 9. Integration Architecture Recommendations for SecrexAI

```
SecrexAI Platform
├── Invoice Ninja API (GET/PUT products, POST purchase_orders)
├── WhatsApp Channel (low stock alerts, PO approvals)
├── Lark System (HR approvals for PO above $X limit)
└── AI Brain (natural language → API calls)
```

### Key Design Decisions

| Decision | Recommendation |
|----------|----------------|
| **No stock webhooks** | Use polling + invoice event webhooks as workaround |
| **Polling frequency** | Every 4–6 hours for alerts; on-demand for chat queries |
| **Caching** | Cache product list; invalidate on stock-relevant events |
| **Approval flow** | PO above threshold → Lark approval → auto-send on approve |
| **Error handling** | If API unreachable, queue alerts and retry; notify user of delays |
| **Multi-tenant** | Each SecrexAI customer connects their own Invoice Ninja API token |

---

## 10. Summary Table: API Capabilities vs. SecrexAI Use Cases

| Use Case | Supported? | Method |
|----------|-----------|--------|
| List all products with stock | ✅ Yes | `GET /api/v1/products` |
| Get single product stock | ✅ Yes | `GET /api/v1/products/{id}` |
| Update stock quantity | ✅ Yes | `PUT /api/v1/products/{id}` |
| Auto-deduct on invoice sent | ✅ Yes | Built-in (enable per product) |
| Webhook on stock change | ❌ No | Use invoice webhooks + polling |
| Create Purchase Order | ✅ Yes | `POST /api/v1/purchase_orders` |
| Low stock email alerts | ✅ Yes | Built-in (Invoice Ninja email) |
| Low stock WhatsApp alerts | ✅ Via SecrexAI | Polling + WhatsApp channel |
| Auto PO on low stock | ⚠️ Partial | PO creation works; approval flow needed |
| Multi-warehouse | ❌ No | Single stock figure only |
| Rate limit docs | ⚠️ Undocumented | Contact support |

---

## Sources

- Invoice Ninja User Guide — Products & Inventory: https://invoiceninja.github.io/docs/user-guide/products
- Invoice Ninja API Reference (v5): https://api-docs.invoiceninja.co
- Invoice Ninja GitHub — Feature Request #11509 (webhook events): https://github.com/invoiceninja/invoiceninja/labels/feature%20request
- Invoice Ninja Forum — API Rate Limits: https://forum.invoiceninja.com/t/api-rate-limits-hosted-enterprise/21128
- Invoice Ninja v4 API Docs (for reference): https://invoice-ninja.readthedocs.io/en/latest/api.html
- SwaggerHub v5 API Spec: https://app.swaggerhub.com/apis/invoiceninja/invoiceninja/
- Community Threads on Stock Webhooks: https://forum.invoiceninja.com/t/request-for-additional-api-webhook-event-types/22905
- PHP SDK: https://github.com/invoiceninja/sdk-php
- Go SDK: https://github.com/AshkanYarmoradi/go-invoice-ninja
- n8n Integration: https://n8n.io/integrations/invoice-ninja/and/offalerts/

---

*Research compiled by researcher-2 (secrexai-inventory team) — 2026-04-12*
*Confidence: 0.85 — API fundamentals well-sourced; specific v5 field names confirmed across multiple sources; webhook limitations and rate limits based on community reports subject to change.*
