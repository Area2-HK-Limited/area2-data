# Invoice Ninja Inventory Feature Research

*Research Date: 2026-04-12*
*Prepared for: SecrexAI — Invoice Ninja Hidden Features Catalog*

---

## 1. Stock/Inventory Tracking

### What It Does

Invoice Ninja's inventory module provides basic stock-level tracking tied directly to the **Product Library**. When a product with tracked stock is added to an invoice, the system automatically reduces the recorded quantity.

### How to Enable

1. Go to **Settings → Products** (or "Product Settings")
2. Toggle **Track Inventory** to ON
3. Navigate to the **Products** list
4. Use the column selector to reveal **Stock Quantity** and **Notification Threshold** columns
5. Edit individual products to enter current stock levels (e.g., 40 units) and per-product alert thresholds

### How It Works

- When an invoice is created with a tracked product, stock auto-deducts (e.g., invoice 20 surfboards → stock drops from 40 to 20)
- Stock is viewable directly on product detail pages and the product list view
- Export all stock data via **Reports → Product** (CSV download)
- Integrates with the **Purchase Orders** module: receipt of a purchase order increases stock automatically

### Limitations

- No support for purchase orders, supplier management, real-time data syncing, or comprehensive inventory workflows
- Independent reviews score it ~3.0/5 for inventory; considered basic compared to dedicated systems
- Manual workarounds often needed for full inventory control
- No real-time sync with POS or e-commerce platforms without third-party integrations (Zapier, Make)
- Rated as "underdeveloped" for businesses with serious stock management needs

**Source:** [Invoice Ninja Docs](https://invoiceninja.github.io/docs/user-guide/products), [Invoice Ninja Features](https://invoiceninja.com/features/)

---

## 2. Low Stock Alerts and Notifications

### How to Configure

**Account-level (global) threshold:**
- Go to **Settings → Products**
- Set a default low-stock **notification threshold** (e.g., alert when stock hits 10)

**Per-product threshold:**
- Edit the product → set a custom **Notification Threshold** value
- Per-product thresholds override the global default

### How Notifications Work

- When a product's stock falls to or below its threshold, Invoice Ninja sends an **email notification**
- Notifications are sent to the account email address
- Alerts trigger automatically on invoice creation (stock deduction)

### Limitations

- Only email-based notifications; no SMS, Slack, or webhook alerts natively
- No per-user notification rules or team-based alerting
- No escalation logic (e.g., repeated alerts if stock isn't replenished)

**Source:** [Invoice Ninja — Track Inventory Levels](https://invoiceninja.com/invoice-feature/track-inventory-levels/)

---

## 3. Cost Price and COGS Tracking

### Cost Price Field

- Enable **"Show Product Cost"** in **Settings → Product Settings**
- This reveals a **Cost** field on product records
- The cost field populates into invoice item reports, enabling manual profit/margin calculation

### Key Limitations

- **Cost field is NOT editable on invoices** — it shows as 0 for new items created during invoicing
- No automatic COGS calculation — Invoice Ninja does not compute Cost of Goods Sold automatically
- To calculate true gross profit, users must export data to spreadsheets or external accounting tools
- The Expenses module tracks vendor costs separately but is **not linked to products**
- Workarounds: custom fields for editable costs on invoices; external tools for landed costs

### COGS Workaround Approach

1. Set cost per product
2. Export invoice data with cost and selling price
3. Calculate (selling price − cost) manually or in a spreadsheet
4. For true COGS journal entries, integrate with QuickBooks or similar accounting software

**Source:** [Invoice Ninja Forum — Cost Field](https://forum.invoiceninja.com/t/how-to-keep-track-of-cost-and-retail-price-for-product-service/13616), [Invoice Ninja Forum — Invoice Item Cost](https://forum.invoiceninja.com/t/invoice-item-cost-field/7522)

---

## 4. Stock Valuation Methods (FIFO, LIFO, Average Cost)

### Invoice Ninja Does NOT Support Any Stock Valuation Method

Invoice Ninja provides **no built-in inventory valuation** (FIFO, LIFO, or Average Cost). This is a significant gap.

- Stock is tracked by **simple quantity** only
- No cost-layering or weighted average calculation is performed
- No purchase price history per unit tracked per product
- Inventory value on balance sheet must be calculated externally

### Context for Integrations

If FIFO/LIFO/Average Cost is required, businesses must:
- Use dedicated inventory or accounting software (QuickBooks, Xero, Zoho Inventory)
- Use specialist tools like Craftybase which integrate with Invoice Ninja
- Maintain records manually in spreadsheets

**Source:** [Invoice Ninja — Track Inventory Levels](https://invoiceninja.com/invoice-feature/track-inventory-levels/), [Craftybase Blog](https://craftybase.com/blog/fifo-lifo-and-weighted-average-cost-methods)

---

## 5. Product Library vs. Dedicated Inventory Module

### Product Library (Built-in)

The **Product Library** is Invoice Ninja's core product management feature:
- Create products with name, description, price, cost, and stock quantity
- Products appear in a dropdown when creating invoices
- Basic inventory tracking (stock deduction) is part of this module
- Available on both Free and paid plans

### Inventory Module (Enterprise/Pro)

The **dedicated Inventory Module** (called "Inventory" in the sidebar) unlocks with **Pro/Enterprise plans ($180/year)**:
- Adds a separate **Inventory** section alongside Products
- Enables stock adjustment workflows
- Integrates with Purchase Orders for inbound stock receipts
- Adds reporting for stock movement

### Key Distinction

| | Product Library | Dedicated Inventory Module |
|---|---|---|
| **Purpose** | Product catalog + pricing | Stock movement + adjustments |
| **Stock Tracking** | Yes (basic auto-deduct) | Yes (manual adjustments + PO receipts) |
| **Plan Required** | Free plan included | Pro/Enterprise |
| **Stock Adjustments** | No | Yes |
| **Purchase Order Integration** | No | Yes |

**Source:** [Invoice Ninja Pricing](https://invoiceninja.com/pricing-plans/), [Invoice Ninja Docs — Products](https://invoiceninja.github.io/docs/user-guide/products)

---

## 6. How to Enable the Inventory Module in Settings

### Step-by-Step

1. **Enable Track Inventory:**
   - Go to **Settings → Products**
   - Toggle **Track Inventory** ON

2. **Show Product Cost** (optional):
   - In **Settings → Products**, toggle **Show Product Cost** to ON
   - Reveals cost field on products for margin tracking

3. **Set Low Stock Defaults:**
   - In **Settings → Products**, enter a default **Notification Threshold** (e.g., 10 units)

4. **Access Inventory Module:**
   - The **Inventory** sidebar item appears in **Pro/Enterprise plans**
   - Use it for stock adjustments and purchase order receipts

5. **Populate Initial Stock:**
   - Go to **Products** list → column selector → enable **Stock Quantity**
   - Edit each product to set current stock count

**Source:** [Invoice Ninja — Track Inventory Levels](https://invoiceninja.com/invoice-feature/track-inventory-levels/)

---

## 7. Stock Adjustment Features

### What Stock Adjustments Allow

- Manually add or remove stock (corrections, returns, breakages, gifts)
- Adjust stock without creating an invoice
- Record stock adjustments with notes/reasons

### How to Access

- **Inventory → Stock Adjustments** (available in Pro/Enterprise plans)
- Select product → enter adjustment quantity (+/-) → add note → save

### Limitations

- No batch adjustment for multiple products at once
- No reason codes or categories for adjustments by default
- No audit trail with user attribution visible in standard reports
- Adjustments are not automatically linked to expense records

**Source:** [Invoice Ninja Forum](https://forum.invoiceninja.com/), [Merchant Maverick Review](https://www.merchantmaverick.com/reviews/invoice-ninja-review/)

---

## 8. Product Variants (Size, Color, etc.)

### Native Support: NONE

Invoice Ninja has **no native product variants feature**. Specifically:

- No size/color/SKU variant structure per product
- No per-variant stock levels
- No per-variant pricing or cost
- No variant-level reporting

### Workarounds

- Create separate products manually (e.g., "T-Shirt — Red — S", "T-Shirt — Red — M")
- Use naming conventions to distinguish variants
- Use product custom fields for variant attributes (but not for stock tracking per variant)
- Third-party workaround: Arahi AI adds variant support via AI agent layer

### Implication for SecrexAI

This is a major limitation for retail, apparel, and any product with options. It represents a clear **differentiation opportunity** for SecrexAI to offer variant management as an add-on or differentiated feature.

**Source:** [Invoice Ninja Forum — Variant Discussion](https://forum.invoiceninja.com/)

---

## 9. Stock Transfer Between Warehouses/Locations

### Native Support: NONE

Invoice Ninja does **not support** multi-warehouse or stock transfer functionality:

- No concept of multiple warehouse/location records
- No internal transfer workflow between locations
- Stock is tracked at the product level globally, not per location
- No location-based stock reporting

### Integration Approach Required

- Use Zapier/Make to connect Invoice Ninja with dedicated warehouse management systems
- Arahi AI and similar third-party tools claim multi-location sync
- For serious multi-warehouse needs, pair Invoice Ninja with Zoho Inventory or Odoo

**Source:** [Arahi AI — Invoice Ninja Inventory Management](https://arahi.ai/ai-agent/invoice_ninja/inventory-management)

---

## 10. Barcode/Scanner Support

### Native Support: NONE

Invoice Ninja has **no built-in barcode scanner support**:
- No barcode field on products (SKU is text only)
- No scanning interface for stock adjustments
- No barcode lookup during invoice creation
- No QR code or barcode generation on product records/invoices

### Community Request (Active)

A feature request exists on the Invoice Ninja forum titled *"Adding stock to inventory — barcode scanner an idea"* (Thread #14821), indicating ongoing user demand but no official roadmap.

### Integration Path

For barcode scanning, businesses need:
- Third-party POS integration (e.g., Shopify POS syncing via Zapier)
- Odoo or Acumatica for full barcode-based inventory workflows
- Custom development on self-hosted version

**Source:** [Invoice Ninja Forum — Barcode Scanner Thread](https://forum.invoiceninja.com/t/adding-stock-to-inventory-barcode-scanner-an-idea/14821)

---

## 11. Reporting: Stock Reports, Valuation Reports, Low Stock Reports

### Available Reports

| Report | Available? | Notes |
|--------|-----------|-------|
| Product Stock Report | Yes | Export CSV via **Reports → Product** |
| Low Stock Report | Partial | Email alerts only; no dedicated report view |
| Stock Valuation Report | No | No built-in monetary valuation |
| Stock Movement/History Report | No | No transaction log for stock changes |
| COGS/Profit Report | No | Must calculate externally |

### Report Limitations

- No visual dashboard for inventory KPIs
- No stock aged analysis or slow-moving inventory report
- No inventory turnover ratio calculation
- Reports export to CSV only; no native PDF inventory reports
- No drill-down from invoice to stock impact visible in reports

### Practical Reporting Workflow

1. **Stock level check:** Products list → show Stock Quantity column
2. **Export stock data:** Reports → Product → Download CSV
3. **Low stock alerts:** Email notification when stock hits threshold
4. **Profit calculation:** Export invoices with cost field → spreadsheet margin calculation

**Source:** [Invoice Ninja Docs — Products](https://invoiceninja.github.io/docs/user-guide/products)

---

## 12. Self-Hosted vs. Cloud — Inventory Differences

### Feature Parity

**Inventory features are identical** between self-hosted (open-source) and cloud plans:

| Feature | Self-Hosted | Cloud Free | Cloud Pro | Cloud Enterprise |
|---------|-------------|------------|-----------|-----------------|
| Track Inventory | ✅ | ✅ | ✅ | ✅ |
| Stock Deduction on Invoice | ✅ | ✅ | ✅ | ✅ |
| Low Stock Email Alerts | ✅ | ✅ | ✅ | ✅ |
| Cost Field | ✅ | ✅ | ✅ | ✅ |
| Inventory Module (adjustments) | ✅ | ❌ | ✅ | ✅ |
| Purchase Order Integration | ✅ | ❌ | ✅ | ✅ |
| Multi-user / Role-based | ✅ | ❌ (1 user) | Limited | ✅ |

### Key Differences (Non-Inventory)

| Aspect | Self-Hosted | Cloud |
|--------|-------------|-------|
| Cost | Free (+$30/yr white-label) | $0–$180/yr tiered |
| Hosting | User-managed server | Provider-hosted |
| Data Control | Full ownership | Third-party servers |
| Maintenance | User handles updates | Automatic |
| Customization | Full code access | Limited to plan features |
| Support | Community forum | Email support (criticized) |

### Implication for SecrexAI

Self-hosted clients may have more motivation to adopt advanced inventory via custom development (since they control the codebase). This is a potential upsell opportunity for SecrexAI's custom dev services.

**Source:** [Invoice Ninja Forum — Self-Hosted vs Cloud](https://forum.invoiceninja.com/t/compare-features-selfhosted-and-cloud/6194), [Fit Small Business — Invoice Ninja Review](https://fitsmallbusiness.com/invoice-ninja-review/)

---

## 13. SME Use Cases for Inventory

### Retail (Small Retail / Boutique)

**What works:**
- Track stock of finished goods (clothing, electronics, crafts)
- Auto-deduct on point-of-sale invoices
- Low-stock alerts for fast-moving items
- Integration with POS via Zapier/Make

**What doesn't work without add-ons:**
- Product variants (sizes, colors) — requires separate products
- Multi-location/store tracking
- Barcode scanning
- Stock valuation (FIFO/average cost)

**Best for:** Small retailers with <100 SKUs, simple restocking needs

### Restaurant / Food Service

**What works:**
- Track ingredient stock (dry goods, beverages)
- Low-stock alerts to trigger purchasing
- Expense tracking for vendor purchases
- Integration with supplier invoicing via Purchase Orders

**What doesn't work:**
- Per-recipe/bill-of-materials tracking (no BOM feature)
- Expiry date tracking
- Yield/portion control
- Costed recipe sheets

**Best for:** Small cafes/restaurants with simple purchasing workflows, not full kitchen inventory

### Warehouse / Light Manufacturing

**What works:**
- Bulk stock quantity tracking
- Purchase order receipts to increase stock
- Stock reduction on outgoing invoices
- Export stock reports for reordering

**What doesn't work:**
- Multi-warehouse/location tracking
- Serial/lot number tracking
- Stock transfer between locations
- Advanced reporting (turnover, dead stock)

**Best for:** Small warehouses with single location, simple in/out stock flow

### Integration Enhancement (AI/Tools)

Third-party AI tools (e.g., Arahi AI) add:
- Demand forecasting
- Auto-reordering suggestions
- Multi-location sync
- Advanced analytics

This is where SecrexAI could differentiate — positioning as the intelligent layer on top of Invoice Ninja's basic inventory.

**Source:** [Arahi AI — Invoice Ninja Inventory](https://arahi.ai/ai-agent/invoice_ninja/inventory-management), [Invoice Ninja Features](https://invoiceninja.com/features/)

---

## 14. Selling Points and Limitations as a Selling Point for SecrexAI

### Honest Assessment: Invoice Ninja Inventory Limitations

| Limitation | Severity | SecrexAI Opportunity |
|------------|----------|----------------------|
| No product variants | **High** | Add variant management module |
| No stock valuation (FIFO/LIFO/Avg) | **High** | Built-in inventory valuation engine |
| No multi-warehouse/transfer | **High** | Warehouse transfer workflow |
| No barcode/scanner support | **Medium** | Barcode scanning add-on |
| No COGS automation | **Medium** | Auto COGS + profit dashboard |
| No stock movement history/audit | **Medium** | Full audit trail + stock log |
| No low-stock dashboard (email only) | **Low-Medium** | Visual low-stock dashboard |
| No batch stock adjustments | **Low-Medium** | Batch adjustment tool |

### SecrexAI Differentiation Angles

1. **Variant Management:** Invoice Ninja requires manual product duplication for variants. SecrexAI could offer a variant management layer that maps size/color options to a single parent product with sub-SKU stock tracking.

2. **Stock Valuation Engine:** Since Invoice Ninja has zero valuation methods, SecrexAI could provide a FIFO/Average Cost valuation report generator that reads Invoice Ninja's product/purchase order data and produces valuation summaries.

3. **Multi-Warehouse Transfers:** A SecrexAI module for managing stock transfers between locations with approval workflows and audit logs would fill a clear gap.

4. **Barcode Integration:** Adding barcode scanning (via phone camera or USB scanner) for stock lookups and adjustments would be a compelling SME feature.

5. **Low-Stock Dashboard:** Replace email-only alerts with a visual dashboard showing all low-stock items across products, trends, and suggested reorder quantities.

6. **Stock Audit Trail:** Full transaction log showing every stock movement (invoice, adjustment, PO receipt) with timestamps and user attribution.

7. **Self-Hosted Enhancement:** Many Invoice Ninja self-hosted users are technical. SecrexAI could offer a "pro install" package with pre-configured advanced inventory features.

### Positioning Statement for SecrexAI

> "Invoice Ninja is excellent for invoicing, but its inventory module is deliberately basic. SecrexAI closes the gap — adding variant management, stock valuation, multi-warehouse support, and smart reordering alerts — so growing SMEs get real inventory intelligence without switching platforms."

### Competitive Advantages Summary

| Feature | Invoice Ninja Native | SecrexAI Add-on |
|---------|---------------------|-----------------|
| Product Variants | ❌ | ✅ |
| Stock Valuation (FIFO/Avg) | ❌ | ✅ |
| Multi-Warehouse | ❌ | ✅ |
| Barcode Scanning | ❌ | ✅ |
| Stock Audit Trail | ❌ | ✅ |
| Low-Stock Dashboard | ❌ (email only) | ✅ |
| Batch Adjustments | ❌ | ✅ |
| COGS Automation | ❌ | ✅ |

---

## Key Sources

- [Invoice Ninja Official Docs — Products](https://invoiceninja.github.io/docs/user-guide/products)
- [Invoice Ninja — Track Inventory Levels](https://invoiceninja.com/invoice-feature/track-inventory-levels/)
- [Invoice Ninja — Features](https://invoiceninja.com/features/)
- [Invoice Ninja — Pricing Plans](https://invoiceninja.com/pricing-plans/)
- [Invoice Ninja Forum — Cost Field Discussion](https://forum.invoiceninja.com/t/how-to-keep-track-of-cost-and-retail-price-for-product-service/13616)
- [Invoice Ninja Forum — Invoice Item Cost](https://forum.invoiceninja.com/t/invoice-item-cost-field/7522)
- [Invoice Ninja Forum — Barcode Scanner](https://forum.invoiceninja.com/t/adding-stock-to-inventory-barcode-scanner-an-idea/14821)
- [Invoice Ninja Forum — Self-Hosted vs Cloud](https://forum.invoiceninja.com/t/compare-features-selfhosted-and-cloud/6194)
- [Merchant Maverick — Invoice Ninja Review](https://www.merchantmaverick.com/reviews/invoice-ninja-review/)
- [Fit Small Business — Invoice Ninja Review](https://fitsmallbusiness.com/invoice-ninja-review/)
- [Arahi AI — Invoice Ninja Inventory Management](https://arahi.ai/ai-agent/invoice_ninja/inventory-management)
- [Craftybase — FIFO/LIFO/Average Cost Methods](https://craftybase.com/blog/fifo-lifo-and-weighted-average-cost-methods)

---

*[confidence: 0.85]*
*Research is comprehensive for native Invoice Ninja v5 inventory features. Confidence lower for: (1) specific Pro/Enterprise plan feature distinctions (some details vary by exact plan tier), (2) third-party tool capabilities (Arahi AI, etc.) which may change rapidly. Recommend human review of third-party integration claims before SecrexAI product planning.*
