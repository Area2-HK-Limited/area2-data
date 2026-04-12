# Lark HR Integration Research (2026-04-12)

## Lark/Feishu Overview & HR Capabilities

### Platform Overview
Lark (Feishu/飛書) is ByteDance's enterprise collaboration suite, comparable to Microsoft 365 or Google Workspace. It combines messaging, video conferencing, documents, calendars, and — critically for this research — a built-in **Approval** module and **CoreHR** system.

### Lark Approval Module
Lark Approval is a visual, no-code/low-code workflow engine for internal business processes. It serves as a "one-stop approval platform" for organizations and is deeply integrated with Lark's other tools (Messenger, Base, Docs).

**Key capabilities:**
- **Visual workflow builder**: Drag-and-drop interface with conditional branching, no coding required
- **Pre-built HR templates**: Ready-made flows for leave requests, business trips, reimbursements, overtime, equipment requests
- **Chat-based approvals**: Approvers receive push notifications in Lark Messenger and can approve/reject directly in-chat without switching apps
- **Mobile-first**: Full mobile app support for approval actions on the go
- **Lark Base integration**: Approval data auto-syncs to Lark Base (spreadsheet/database hybrid) for real-time analytics and tracking
- **Collaborative comments**: Users can clarify requests via inline comments without losing context

### Lark CoreHR (HR Management)
Lark's CoreHR module covers core HR functions including:
- Employee records management
- Organizational structure management
- Leave and attendance tracking
- Payroll (basic)
- Recruitment (basic)

**CoreHR v2 Process APIs**: Dedicated REST APIs to list and manage HR process instances from both Lark's native HR modules and third-party systems integrated via the HR approval center.

### Lark Open Platform & APIs
Lark exposes a comprehensive REST API via the **Feishu Open Platform** (open.feishu.cn / open.larkoffice.com):

| API Area | What It Does |
|----------|-------------|
| **Approval v4** | Create/query/complete approval instances; open approval pages via protocol links |
| **CoreHR v2** | List HR process instances; manage employee records |
| **Webhook triggers** | Real-time events on approval submissions, approvals, rejections |
| **MCP Server** | Machine-readable protocol for AI agents to interact with Lark data |

**Webhook events enable automation:**
- `approval.instance.submit` — request submitted
- `approval.instance.approve` — request approved
- `approval.instance.reject` — request rejected
- `approval.instance.retract` — request withdrawn

### Integration Methods Available
1. **No-code**: Lark's built-in workflow builder (HR templates, conditional logic, Lark Base sync)
2. **Low-code**: Lark Open Platform APIs + webhooks for custom systems
3. **AI-powered**: Lark MCP Server + third-party AI agents (e.g., SecrexAI) to intercept and process approval events
4. **Third-party middleware**: Make.com, Zapier, n8n for connecting Lark to external CRMs/HR systems

---

## SME HR Workflow Pain Points

Research from 2025 HR publications reveals consistent themes in what burdens SMEs:

### 1. Unclear Task Ownership & Accountability
In resource-constrained SMEs, employees wear multiple hats. Approval tasks frequently become "orphan" tasks — nobody is clearly responsible, leading to delays of days or weeks. Example: interview scheduling where HR assumes operations handles it, and vice versa.

### 2. Inconsistent Processes Across Teams
Teams often develop ad-hoc workflows using spreadsheets, email chains, and informal chat. This creates:
- Document loss during handoffs
- No audit trail
- Difficulty training new employees
- Compliance gaps during audits

### 3. System Silos & Integration Failures
SME HR stacks typically combine separate tools for payroll, attendance, HRIS, and accounting — none of which communicate. This forces:
- Duplicate data entry
- Inconsistent records
- Payroll approval delays when attendance data doesn't sync
- Manual reconciliation errors

### 4. Manual Errors in Paper/Spreadsheet-Based Processes
Spreadsheets for leave tracking or salary calculations are error-prone:
- Salary mismatches and late payments
- Compliance risks (e.g., missed statutory leave entitlements)
- Hours of reconciliation work
- Eroded employee trust

### 5. Lack of Visibility & Approval Bottlenecks
Without real-time dashboards, managers cannot see:
- Which approvals are stalled under a single approver
- Team-wide leave balances at a glance
- Cycle times for common approval types

A single overloaded manager can create a cascade of delays across the organization.

### 6. Regulatory Compliance Burden (2025-Specific)
UK-focused but globally relevant trends:
- **Minimum wage increases and NI changes** (April 2025) require rapid payroll updates
- **Employment Rights Bill reforms** (2025-2026 rollout) demand agile policy workflows
- SMEs without automated alerts miss compliance deadlines

### 7. Digital Transformation Gaps
Many SMEs still rely on paper files or unstructured digital documents, preventing:
- Efficient retrieval during audits
- Standardized onboarding checklists
- Scalable HR workflows as the company grows

---

## AI Automation Opportunities in Lark

### What Lark Natively Offers
Lark has introduced AI features including:
- **Smart compose** in Docs
- **Meeting summarization**
- **Language translation** in chat
- **Polls and Q&A automation**

However, Lark's native AI is focused on collaboration, not deep HR process automation.

### Where SecrexAI Fits: AI Agent Opportunities

#### 1. **Intelligent Approval Routing**
- AI analyzes the content of a request and automatically assigns the correct approver based on policy rules, cost thresholds, or employee attributes
- Reduces bottlenecks caused by wrong initial routing

#### 2. **Natural Language Approval Queries**
- Employees ask SecrexAI (via WhatsApp/Slack/chat) things like "What's the status of my leave request?" or "Who approves expenses over $500?"
- AI queries Lark's API in real-time and responds conversationally

#### 3. **Automated Data Entry from Approvals**
- When a leave request is approved in Lark, SecrexAI can:
  - Automatically update an external HRIS or payroll system
  - Sync to Google Sheets or Airtable via API
  - Send a confirmation WhatsApp message to the employee
- Eliminates manual duplicate entry

#### 4. **Compliance Checking Before Submission**
- Employee submits a request → SecrexAI intercepts, validates against company policy (leave balance, budget, statutory limits) → either auto-approves or flags for human review
- Reduces rejected/returned requests and compliance errors

#### 5. **Proactive Alerts & Reminders**
- AI monitors approval cycle times and sends reminders to overdue approvers via their preferred channel (Lark chat, WhatsApp, SMS)
- Reduces approval stalled bottlenecks

#### 6. **HR Analytics & Reporting**
- SecrexAI queries Lark Base / Lark Analytics and generates natural-language HR reports on demand:
  - "Average approval time for expense claims this quarter"
  - "Leave utilization rate by department"
  - "Top 5 approval bottlenecks"

#### 7. **Employee Self-Service via WhatsApp/SMS**
- Most SME employees are comfortable with WhatsApp but not with Lark's interface
- SecrexAI as a conversational layer on top of Lark: employees query leave balances, submit simple requests, or check approval status via WhatsApp — SecrexAI handles the Lark API integration

#### 8. **Onboarding Workflow Automation**
- When a new employee is added to Lark CoreHR, trigger SecrexAI to:
  - Send welcome WhatsApp message with onboarding documents
  - Create accounts in connected tools
  - Schedule orientation tasks
  - Set probation review reminders

#### 9. **Multi-Language / Cantonese Support**
- Lark's interface is primarily Mandarin Chinese / English
- SecrexAI can provide Cantonese AI coaching for SME employees who prefer local language support
- Particularly relevant for Hong Kong SMEs with frontline workers less comfortable in English or Mandarin

### Market Opportunity
- Business process automation market projected to exceed **$33 billion by 2032**
- 70% of small business owners view AI as mission-critical for success (2025)
- SMEs cite "time constraints" as the primary barrier to adopting automation — exactly the gap a solution like SecrexAI fills

---

## Integration Approach for SecrexAI

### Recommended Architecture

```
Employee (WhatsApp/SMS/Chat)
        ↓
  SecrexAI Agent Layer
        ↓
  Lark Open Platform API
  (Approval v4 + CoreHR v2)
        ↓
  Lark Approval / CoreHR
  (leave, expenses, onboarding, etc.)
```

### Step-by-Step Integration Path

#### Phase 1: Read-Only Integration (Low Risk)
1. **Connect SecrexAI to Lark via OAuth** on the Feishu Open Platform
2. **Use Lark Approval v4 APIs** to:
   - Query approval templates configured in the client's Lark instance
   - Poll or receive webhooks for approval status changes
   - Read employee records from CoreHR v2
3. **Build conversational queries**: "What's my leave balance?", "Who approved my expense claim?"
4. **Deliver via WhatsApp/SMS**: Employees interact with SecrexAI in their preferred channel; SecrexAI reads from Lark

#### Phase 2: Write Integration (Medium Risk)
1. **Enable SecrexAI to create approval instances** via Lark's `POST /approval/v4/instances` API
2. **Employee submits request via SecrexAI** (e.g., "I want to apply for 3 days annual leave on May 12-14") → SecrexAI calls Lark API → creates leave approval in Lark → approver receives Lark notification
3. **Add validation logic** before submission: check leave balance via CoreHR API, validate against company policy
4. **Webhook handlers** to process approval/rejection outcomes and notify employees via WhatsApp

#### Phase 3: Full Automation (Higher Value)
1. **Policy engine**: SecrexAI maintains company-specific approval rules (e.g., "<$100 reimbursement: auto-approve", ">5 days leave: requires 2-level approval")
2. **Auto-routing**: AI determines correct approver chain based on request type, amount, and org structure from CoreHR
3. **Downstream triggers**: On Lark approval completion, automatically update connected systems (payroll, CRM, project management tools)
4. **Analytics dashboard**: Real-time HR metrics from Lark Base data, delivered as natural-language reports to managers

### Technical Considerations

| Concern | Approach |
|---------|----------|
| **Authentication** | OAuth 2.0 via Feishu Open Platform; token refresh handled server-side |
| **Webhook security** | Verify webhook signatures from Lark to prevent spoofing |
| **Rate limits** | Lark API has per-app rate limits; implement request queuing |
| **Multi-tenant** | Each SME client gets their own Lark OAuth app instance |
| **Data privacy (HK)** | Lark stores data in CN/APAC servers; assess PDPO compliance for HK clients |
| **Cantonese support** | SecrexAI's existing Cantonese TTS/stt layer can complement Lark's Mandarin/English interface |

---

## Recommendations

### For SecrexAI Product Strategy

1. **Position as "Lark HR Copilot for SMEs"**
   - Lark's built-in approval is powerful but intimidating for non-technical SME HR staff
   - SecrexAI as the conversational face: employees chat in Cantonese/English; SecrexAI handles Lark complexity in the background

2. **Start with Leave & Expense Approvals**
   - These are universal, high-frequency, and well-supported by Lark's HR templates
   - Quick win that demonstrates ROI to SME decision-makers

3. **Leverage Existing WhatsApp Channel**
   - Most HK SMEs already use WhatsApp; no app install required
   - SecrexAI + Lark = employees get WhatsApp HR experience while company retains Lark as system of record

4. **Target Lark + WhatsApp Dual-User SMEs**
   - Companies already using Lark for internal collaboration but whose frontline workers resist the Lark app
   - Natural fit: SecrexAI bridges the channel gap

5. **Build a Lark Integration Template / Connector**
   - Create a reusable "SecrexAI for Lark" integration package
   - Reduce per-client setup time; aim for <1 day onboarding per SME

6. **Add Cantonese as a Differentiator**
   - Lark is primarily Mandarin/English
   - HK SME employees (especially blue-collar, frontline) will use WhatsApp in Cantonese
   - This is a specific market gap SecrexAI can own

### Specific AI Workflows to Prototype First

| Workflow | Description | Complexity |
|----------|-------------|------------|
| Leave balance query | Employee asks SecrexAI "how many days annual leave do I have?" → SecrexAI reads from Lark CoreHR | Low |
| Leave request submission | Employee submits leave via SecrexAI → creates Lark approval instance → notifies approver | Medium |
| Approval status notification | Lark approval completed → webhook → SecrexAI sends WhatsApp update to employee | Low |
| Manager approval reminder | Pending approval > 48 hours → SecrexAI sends reminder to approver via WhatsApp | Low |
| Expense policy check | Before submitting expense, SecrexAI validates against policy (amount limit, receipt attached, category) | Medium |

### Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Lark API changes breaking integration | Version pinned in API client; automated regression tests |
| SME data privacy concerns (HR data in external AI) | On-premise or private cloud deployment option; clear data processing agreement |
| Multi-tenant Lark OAuth complexity | Build dedicated connector with per-tenant credential storage |
| Employee adoption of new WhatsApp HR flow | Demo first, champion within client company, simple onboarding |

---

## References

- Lark Approval Overview: https://open.larkoffice.com/document/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval-overview
- Lark CoreHR Process APIs: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/process/list
- Lark Open Platform: https://open.feishu.cn
- SME HR Challenges 2025: https://smallbusinesscharter.org/help-to-grow-management/news-and-case-studies/3-big-hr-challenges-for-smes-in-2025
- Payroll & HR Compliance Guide: https://asanify.com/blog/human-resources/payroll-challenges-hr-compliance-guide-2026/
- AI Automation for SMEs: https://leanlytics.ae/ai-automation-sme-2025/
- Lark MCP Server (FlowHunt): https://www.flowhunt.io/mcp-servers/larkfeishu/

---

*Research completed by researcher-lark | Team: secrexai-mrr | 2026-04-12*
