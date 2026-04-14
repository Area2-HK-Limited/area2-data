# BSP Demo School 資料填充自動化筆記

*記錄日期：2026-03-31*

---

## 關鍵發現：GraphQL API 直接寫入

BSP 網站後端係 **GraphQL API**，endpoint：
```
https://www.britishschoolportal.co.uk/api/v1
POST application/json
```

### 認證方式
- 用 Playwright 開瀏覽器登入（email + password）
- 拿 `PHPSESSID` cookie
- 之後用 Node.js `https` module 直接 call GraphQL，帶 Cookie header

### ⚠️ 不能用 `page.evaluate()` 內 `fetch()`
- 會出 CORS 錯誤 (`TypeError: Failed to fetch`)
- 必須用 Node.js 原生 `https.request()` + 瀏覽器 cookies

---

## Mutations

### UpdateSchool — 更新學校資料
```graphql
mutation { UpdateSchool(School: { <field>: "<value>" }) }
```
- 返回 `Boolean`，**唔可以加 sub-selection**（`{ school_id }` 會出錯）
- 支援 `InputSchool` 所有 fields（見下方）

### 重要 InputSchool Fields
| Field | 類型 | 用途 |
|-------|------|------|
| `term` | String (JSON) | Term Dates（JSON stringify） |
| `fee` | String (JSON) | Fee Setting（JSON stringify） |
| `vac` | String (JSON) | Vacancies |
| `head` | String | Head of School |
| `postcode` | String | Post Code |
| `address` | String | Address |
| `display_email` | String | Display Email |
| `phone` | String | Phone |

---

## Term Dates 格式
```json
{
  "2025": {
    "autumn": ["2025-09-03", "2025-12-12", "2025-10-27", "2025-10-31"],
    "spring": ["2026-01-07", "2026-03-27", "2026-02-16", "2026-02-20"],
    "summer": ["2026-04-17", "2026-07-10", "2026-05-25", "2026-05-29"]
  },
  "2026": { ... },
  "2027": { ... }
}
```
- 每個 year key 係起始年份（`"2025"` = 2025/2026 學年）
- 每個 season 係 array：`[start, end, halfTermStart, halfTermEnd]`
- 日期格式：`"YYYY-MM-DD"`

## Fee 格式
```json
{
  "Day": { "0": { "Year 1 (Age 5-6)": "", ..., "null": "" }, ... },
  "Term": { "0": { ..., "null": "5500" }, ... },
  "Annual": { "0": { ..., "null": "16500" }, ... },
  "Misc": {
    "Sibling": false,
    "AnnualDiscount": false,
    "AnnualDiscountDesc": "",
    "AppFee": "150",
    "AppFeeRefundable": false,
    "LocalDeposit": "1000",
    "OverSeaDeposit": "2000"
  }
}
```
- `Term[i]["null"]` = 每學期學費
- `Annual[i]["null"]` = 全年學費
- `Misc.AppFee` = 報名費
- `Misc.LocalDeposit` / `Misc.OverSeaDeposit` = 本地/海外保證金

---

## 呼叫範例（Node.js）

```javascript
const https = require('https');

function gqlRequest(cookie, query) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query });
    const options = {
      hostname: 'www.britishschoolportal.co.uk',
      path: '/api/v1',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        'Cookie': cookie,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Origin': 'https://www.britishschoolportal.co.uk',
        'Referer': 'https://www.britishschoolportal.co.uk/en/profile/school'
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// Escape JSON for GraphQL string
const jsonEscaped = jsonString.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const mutation = `mutation { UpdateSchool(School: { term: "${jsonEscaped}" }) }`;
const result = await gqlRequest(cookieStr, mutation);
```

---

## Demo School 帳號
| 帳號 | 密碼 | 學校名 |
|------|------|--------|
| `demo_school_01@britishschoolportal.co.uk` | `hschoolport` | Demo School 01 |
| `demo_school_02@britishschoolportal.co.uk` | `ishschoolport` | Demo School 02 |
| `demo_school@britishschoolportal.co.uk` | `24cTFqxesd` | BS Portal Demo School |

## Consultant / Student 帳號
| 帳號 | 密碼 | 角色 |
|------|------|------|
| `educationalconsultant@britishschoolportal.co.uk` | `AsdQwe!23` | Consultant |
| `b.lee@britishschoolportal.co.uk` | `sdvserwe#d5%` | Student |

---

## 已填入資料摘要（2026-03-31）

| 項目 | School 01 | School 02 | BS Portal Demo |
|------|-----------|-----------|---------------|
| Profile | ✅ | ✅ | ✅ |
| Term Dates（3年）| ✅ | ✅ | ✅ |
| Fee Setting | ✅ | ✅ | ✅ |
| Photos / Logo | ❌ | ❌ | ❌ |
| FAQ | ❌ | ❌ | ❌ |
| Admission Enable | ❌ | ❌ | ❌ |

---

## UI 操作陷阱（唔好再踩）

1. **Accept 按鈕係 `<button class="btn btn-sm btn-success">`**，唔係 `button:has-text("SAVE")`
2. **Edit 係 `<a class="inline-link">`**，唔係 button
3. **Year tabs 係 `<div class="tab">`**，唔係 `<a>` 或 `<li>`
4. **Element UI datepicker 係 readonly**，Vue `$set` 可以設置前端值但無法觸發後端 save
5. **直接 call GraphQL API 係最可靠方法**，繞過所有 UI 問題

---

## 📋 補充資料（2026-03-31 第二次更新）

### Term Dates 實際數據（已填入）

#### 2025/2026 學年
| 學期 | 開始 | 結束 | 半學期開始 | 半學期結束 |
|------|------|------|-----------|-----------|
| Autumn | 2025-09-03 | 2025-12-12 | 2025-10-27 | 2025-10-31 |
| Spring | 2026-01-07 | 2026-03-27 | 2026-02-16 | 2026-02-20 |
| Summer | 2026-04-17 | 2026-07-10 | 2026-05-25 | 2026-05-29 |

#### 2026/2027 學年
| 學期 | 開始 | 結束 | 半學期開始 | 半學期結束 |
|------|------|------|-----------|-----------|
| Autumn | 2026-09-02 | 2026-12-11 | 2026-10-26 | 2026-10-30 |
| Spring | 2027-01-06 | 2027-03-26 | 2027-02-15 | 2027-02-19 |
| Summer | 2027-04-16 | 2027-07-09 | 2027-05-31 | 2027-06-04 |

#### 2027/2028 學年
| 學期 | 開始 | 結束 | 半學期開始 | 半學期結束 |
|------|------|------|-----------|-----------|
| Autumn | 2027-09-01 | 2027-12-10 | 2027-10-25 | 2027-10-29 |
| Spring | 2028-01-05 | 2028-03-24 | 2028-02-14 | 2028-02-18 |
| Summer | 2028-04-14 | 2028-07-07 | 2028-05-29 | 2028-06-02 |

*(三間學校使用相同 Term Dates)*

---

### Fee Setting 實際數據（已填入）

| 學校 | Per Term Local | Per Term Overseas | Annual Local | Annual Overseas | Reg Fee | Local Deposit | Overseas Deposit |
|------|---------------|------------------|-------------|----------------|---------|--------------|----------------|
| School 01 | £5,500 | £8,000 | £16,500 | £24,000 | £150 | £1,000 | £2,000 |
| School 02 | £4,800 | £7,500 | £14,400 | £22,500 | £100 | £800 | £1,500 |
| BS Portal Demo | £6,200 | £9,500 | £18,600 | £28,500 | £200 | £1,200 | £2,500 |

---

### Profile 資料（已填入）

#### School 01 (`demo_school_01@britishschoolportal.co.uk`)
- Display Email: `info@demoschool01.co.uk`
- Tel: `02071230001`
- Head of School: Dr. James Harrison
- PostCode: `SW1A 1AA`
- Address: 1 Demo Academy Road, London
- Tier 4 Sponsor: `DEMO01-TIER4-2024`
- Exams: GCSE, A Level, IB
- Contact 1: Sarah Thompson
- Contact 2: Michael Chen

#### School 02 (`demo_school_02@britishschoolportal.co.uk`)
- Display Email: `info@demoschool02.co.uk`
- Tel: `01865120002`
- Head of School: Prof. Eleanor Wright
- PostCode: `OX1 2AB`
- Address: 2 Greenfield Lane, Oxford
- Tier 4 Sponsor: `DEMO02-TIER4-2024`
- Exams: GCSE, IGCSE, A Level
- Contact 1: Robert Davies
- Contact 2: Amanda Foster

#### BS Portal Demo School (`demo_school@britishschoolportal.co.uk`)
- Display Email: `info@bspdemoschool.co.uk`
- Tel: `01133450003`
- Head of School: Dr. William Foster
- PostCode: `LS1 3AB`
- Address: 3 Parkview Avenue, Leeds
- Gender: Boys only
- Exams: GCSE, A Level, Pre-U, IB
- Contact 1: Catherine Blake
- Contact 2: Jonathan Mills

---

### 仍未完成項目（待辦）
- [ ] School Photos（每間學校上傳示範相片）
- [ ] School Logo（每間學校上傳 logo）
- [ ] FAQ（填寫常見問題）
- [ ] Admission Enable（將 Enable 設為 true）
- [ ] School 02 帳號驗證問題（Account under verification，前台不可見）

---

### GraphQL Query — 讀取現有資料（Verification 用）
```graphql
# 讀取 Term Dates
query { me { School { getTerm } } }

# 讀取 Fee
query { me { School { fee } } }

# 讀取 Profile
query { me { School { name head phone postcode address display_email } } }
```

