# Invoice Ninja Integration Research (2026-04-12)

> Researcher: researcher-invoice | Team: secrexai-mrr

---

## Invoice Ninja Overview & API Capabilities

### Platform Overview
Invoice Ninja is an open-source invoicing and billing platform (invoice-ninja.com) available in self-hosted (v4) and cloud (v5) versions. The cloud version is hosted at `invoice.area2.com` (already in use by Area2). It supports invoicing, payments, expenses, projects, tasks, and vendor management.

### API Capabilities (v5 — current)

**Authentication:**
- API token generated from **Settings → Account Management → Integrations → API Tokens**
- Header: `X-API-TOKEN: <token>` (v5) or `X-Ninja-Token: <token>` (v4)

**Core REST Endpoints:**
| Resource | Key Actions |
|---|---|
| `clients` | list, create, update, find by email/ID |
| `invoices` | create, list, find, mark sent, email, auto-bill, mark paid |
| `payments` | create, list, match to invoices |
| `products` | create, list |
| `tasks` | create, list (for time tracking) |
| `expenses` | create, list |

**Advanced v5 Features:**
- **E-invoicing**: PEPPOL / EN16931 format support (Pro/Enterprise)
- **Auto-bill**: Automatically charge client payment methods on due date
- **Custom fields**: Flexible client/invoice metadata
- **Client portal**: Branded self-service portal for clients
- **Recurring invoices**: Schedule-based recurring billing
- **Documents**: Attach files to invoices, clients, etc.

**Client Libraries:**
- PHP SDK (GitHub: invoiceninja/sdk-php)
- Go SDK available
- Direct REST API for all other languages

**Plan Requirements:**
- REST API access requires **Pro or Enterprise plan**

### Integrations Ecosystem
Invoice Ninja integrates with **1,000+ apps** via:
- **Zapier** (8,000+ app connections — Pro+ plans)
- **Make / Integromat** (visual workflow automation)
- **n8n** (open-source workflow automation, 1,000+ integrations)
- **SyncSpider**, **Integrately**
- **Native integrations**: Stripe, PayPal, Shopify (US merchants)
- **Accounting sync**: QuickBooks Online, Xero (via Zapier/Make)

---

## SME Invoicing Pain Points

Based on 2025 research data:

### 1. Manual, Error-Prone Data Entry
- 4–6% error rate in transaction categorization
- Duplicate/misplaced invoices, fake invoice fraud risk
- Cost: **$12–$15 per invoice** manually vs **$2.36–$2.75** with automation

### 2. Slow Approval & Payment Cycles
- Invoice journeys take **10–16 days** on average, up to **45 days** in complex cases
- 61% of SMEs report delays from manual routing
- **15–20% late payment rate** due to poor visibility

### 3. Labour Intensity
- Multiple stages: data entry → approvals → documentation → reconciliation
- 79% of SMEs cite inefficient workflows as a major bottleneck
- Staff time consumed by repetitive admin tasks

### 4. Growing Invoice Volumes
- 95% of companies report increasing invoice volumes
- Only 39% have upgraded their systems
- Scalability struggles as the business grows

### 5. Integration Gaps
- Connecting invoicing with ERP, accounting, CRM is complex and costly
- Legacy tools lack end-to-end PO → receipt → invoice matching
- 40% exception rate in three-way matching workflows

### 6. Unstructured Data
- Invoices arrive in varied formats, languages, layouts, half-scanned PDFs
- Basic OCR fails; advanced OCR needed to reach 98% accuracy
- Creates manual fixing bottlenecks

### 7. Security & Compliance
- Sensitive financial data handling raises breach concerns
- PDPO (Hong Kong) compliance adds complexity for data handling
- E-invoicing regulations (e.g., PEPPOL) require specific formats

---

## How AI / SecrexAI Can Help

### Invoice Generation & Sending
- **AI auto-generates** invoices from conversation or form data (e.g., "create invoice for ABC Ltd, $5,000 for marketing services")
- **Smart reminders**: AI determines optimal send time and follow-up cadence
- Auto-populate line items from product catalog or past invoices

### Data Extraction & OCR
- Extract invoice data from unstructured or half-scanned PDFs using LLM/OCR
- Validate against purchase orders or receipts (three-way matching)
- Reduce manual entry errors by 90%

### Accounts Receivable & Collections
- Predict which invoices are at risk of late payment
- Auto-send personalized follow-up messages in Cantonese/English/ Mandarin
- AI analyzes payment patterns to optimize payment terms

### Expense & Cost Categorization
- Auto-categorize expenses from vendor invoices
- Flag unusual or potentially fraudulent invoices
- Generate spending analytics and forecasts

### Customer Communication (Cantonese AI)
- Respond to client queries about invoice status, corrections, disputes
- Handle billing questions 24/7 via WhatsApp/chat interface
- Reduce admin back-and-forth via intelligent FAQ responses

### Workflow Automation
- Trigger invoice generation from project milestones or task completions
- Auto-match payments to invoices when bank data syncs
- Approval routing with AI-escalation for anomalies

---

## Integration Approach for SecrexAI

### Architecture Options

**Option A — Direct REST API (Recommended for SecrexAI)**
```
SecrexAI (WhatsApp AI) → Invoice Ninja REST API v5
                           ↓
                    invoice.area2.com/api/v5
```
- Use API token from Invoice Ninja Pro account
- Direct HTTP calls for create/read/update invoices, clients, payments
- Suitable for: auto-invoice generation from chat, status queries, reminder triggers

**Option B — n8n Workflow Middleware**
```
SecrexAI → n8n webhooks → Invoice Ninja API
```
- n8n handles complex multi-step workflows
- Good for: approval workflows, multi-system triggers
- Additional latency but more flexibility

**Option C — Zapier/Make (No-code)**
- Lower technical barrier but higher monthly cost
- Good for simple triggers (e.g., new Stripe payment → create invoice)
- Limited AI-native control

### Recommended Integration Stack for SecrexAI

| Function | Method |
|---|---|
| Create invoice from chat | Direct REST API (POST /invoices) |
| Query invoice status | Direct REST API (GET /invoices/{id}) |
| List client invoices | Direct REST API (GET /invoices?client_id=X) |
| Send invoice by email | POST /emails/invoice |
| Payment recording | POST /payments |
| Auto-reminder on overdue | Cron job → API check → send message |
| Invoice data extraction (scanned PDF) | LLM + OCR before API create |

### Key API Endpoints to Implement

```bash
# Auth
POST   /api/v5/clients          # Create client
GET    /api/v5/clients          # List/search clients
GET    /api/v5/invoices         # List invoices (filter by client, status)
POST   /api/v5/invoices         # Create invoice
GET    /api/v5/invoices/{id}    # Get invoice details
POST   /api/v5/invoices/{id}/mark_sent      # Mark & email
POST   /api/v5/invoices/{id}/mark_paid      # Record payment
POST   /api/v5/payments                        # Record payment
```

### SecrexAI-Specific Use Cases

1. **"Send my latest invoice to ABC Co"** → Look up client → fetch invoice → send via API
2. **"Create invoice for job #123"** → Pull job details from SecrexAI memory → POST to Invoice Ninja
3. **"Has Client X paid?"** → Query Invoice Ninja payment status → respond naturally
4. **"Overdue invoice reminder"** → Daily cron checks overdue invoices → sends WhatsApp reminder
5. **"Process this invoice PDF"** → OCR + LLM extraction → create invoice via API

---

## Recommendations

### Immediate (Quick Wins)
1. **Start with Invoice Ninja API v5** using the existing Area2 Pro account (invoice.area2.com)
2. **Implement read-only status queries** first (no financial liability): invoice status, payment history, client list
3. **Build a "create invoice from prompt"** action — natural language → Invoice Ninja API call
4. **Add auto-reminder for overdue invoices** via daily cron check + WhatsApp notification

### Medium-Term
5. **LLM-powered OCR pipeline** for processing unstructured/incoming invoices (scanned PDFs, emails)
6. **Three-way matching** assistant: match invoice → PO → receipt using AI
7. **Expense categorization bot**: extract vendor, amount, category from invoice image

### Differentiators for SecrexAI
- **Cantonese/English bilingual** invoice communication — Invoice Ninja itself is monolingual
- **WhatsApp-native** experience — no need to open portal or login
- **Contextual memory**: AI remembers client history, past disputes, payment habits
- **PDPO-compliant** data handling built into SecrexAI's existing compliance architecture

### Risks & Mitigations
| Risk | Mitigation |
|---|---|
| API token exposure | Use api-key-proxy / secrets management; never log tokens |
| Incorrect invoice amounts | Require human approval for first invoice per client (trust building) |
| Rate limits | Batch reads, avoid polling; use webhooks where possible |
| Plan requirement | Ensure Area2 Pro/Enterprise plan includes full API access |

### Next Steps
1. Obtain Invoice Ninja API token from invoice.area2.com (Settings → Integrations → API Tokens)
2. Test connectivity: `curl -H "X-API-TOKEN: <token>" https://invoice.area2.com/api/v5/invoices`
3. Map SecrexAI intents to Invoice Ninja API actions
4. Build MVP: "Create invoice" + "Check invoice status" + "Send reminder"

---

*Research completed by researcher-invoice | Team: secrexai-mrr | 2026-04-12*
