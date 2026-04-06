# Discuss.com.hk + Uwants 爬蟲開發計劃書

**版本：** v1.0  
**日期：** 2026-03-20  
**作者：** A2 (OpenClaw B03)  
**狀態：** 🟡 技術研究完成，等待住宅 IP tunnel 建立

---

## 背景

本文記錄 2026-03-20 對兩個香港主要討論區的爬取可行性研究結果及後續實施計劃。

---

## 目標平台

| 平台 | URL | 類型 |
|---|---|---|
| Discuss.com.hk | https://www.discuss.com.hk | 香港綜合討論區 |
| Uwants | https://www.uwants.com | 香港綜合討論區 |

---

## 技術研究結果（2026-03-20）

### Discuss.com.hk — Cloudflare Bot Fight Mode（最高等級）

| 測試方法 | 結果 | 原因 |
|---|---|---|
| curl 直連 | ❌ 403 | CF Challenge |
| WireGuard 7 個地區（全部）| ❌ 403 | Datacenter IP 全被封 |
| CF Proxy（辦公室 IP）| ❌ 403 | 仍觸發 CF Challenge |
| curl_cffi Chrome TLS | ❌ 403 | 需要完整瀏覽器環境 |
| Playwright + stealth.min.js | ❌ 403 | CF 要求 Sec-CH-UA Client Hints |
| 住宅 IP（屋企）| ⏳ 未測試 | **預計可行** |

**Root Cause：** CF `Sec-CH-UA` Client Hints 瀏覽器指紋驗證 + Bot Management 識別 DC IP。

關鍵 response headers：
```
cf-mitigated: challenge
accept-ch: Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version,
           Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA...
critical-ch: [same]
cross-origin-embedder-policy: require-corp
```

---

### Uwants — Cloudflare JA3 Fingerprint Block

| 測試方法 | 結果 | 備注 |
|---|---|---|
| curl Homepage | ✅ 200 | 但只有 4KB 頁面，無內容 |
| curl Forum Pages | ❌ 403 | CF JA3 block |
| WireGuard（7 地區）| ❌ 403 | DC IP 全封 |
| CF Proxy（辦公室 IP）| ❌ 403 | 仍 403 |
| curl_cffi Chrome TLS | ❌ 403 | JA3 模擬不完整 |
| Playwright + stealth | ❌ 403 | JA3 fingerprint 問題 |
| RSS Feed（/rss.php）| ✅ HTTP 200 但空 | 格式問題或需 session |
| 住宅 IP（屋企）| ⏳ 未測試 | **預計可行** |

**Root Cause：** CF JA3 TLS fingerprint。curl/Playwright 的 TLS handshake 特徵與真實 Chrome 不同，住宅 IP + 真實 Chrome TLS 才可通過。

---

## 解決方案

### 方案 A（推薦）：屋企住宅 IP WireGuard Tunnel

**架構：**
```
OpenClaw Server → WireGuard tunnel → 屋企路由器 → 住宅寬頻 IP
```

**設置：**
1. 屋企路由器或 Raspberry Pi 安裝 WireGuard
2. OpenClaw server 新增 peer
3. 加入 proxy pool：`http://wireguard-home:8888`
4. Selective routing：只有目標域名走住宅 IP

**優點：** 最穩定，住宅 IP 長期有效，無需手動 export cookies  
**前提：** Eric 建立屋企 tunnel（計劃明天 2026-03-21）

---

### 方案 B：住宅 IP + cf_clearance Cookie Import

**流程：**
```
Eric（屋企/手機熱點住宅 IP）用真實 Chrome 打開網站
    ↓
CF Challenge 通過 → 產生 cf_clearance cookie（有效期數小時）
    ↓
Eric export cookies（用 Cookie-Editor 擴展）
    ↓
A2 import 入 Playwright persistent profile
    ↓
帶住 cf_clearance 做爬取（CF 唔再 challenge）
```

**工具（Eric 端）：**
- Chrome 擴展：Cookie-Editor（https://cookie-editor.com）
- 或 Chrome DevTools → Application → Cookies → Export

**限制：** cf_clearance 有效期短，需定期更新，不適合 24/7 自動化

---

### 方案 C：第三方 Scraping API（快速但付費）

| 服務 | 費用 | CF 成功率 |
|---|---|---|
| ScraperAPI | $49/月（25萬 req）| 90%+ |
| WebScrapingAPI | 按量 | 85% |
| ScrapeOps | 免費 tier | 80% |

---

## 爬蟲腳本設計（方案 A/B 成功後實施）

### discuss.py（Discuz! 結構）

```
Forum URL: /forum.php?mod=forumdisplay&fid={fid}
Thread URL: /forum.php?mod=viewthread&tid={tid}
Title: class="xst"（同 Baby Kingdom）
Posts: id="postmessage_{id}"
```

**主要板塊：**
- fid=65：時事台（最活躍）
- fid=4：娛樂台
- fid=55：財經台（需確認）

### uwants.py（Discuz! 結構）

```
Forum URL: /forumdisplay.php?fid={fid}
Thread URL: /viewthread.php?tid={tid}
Title: class="xst"
Posts: id="postmessage_{id}"
```

**主要板塊：**
- fid=547：時事（需確認全部 fid）

---

## crawl.sh 整合（Phase 4）

```bash
bash scripts/crawl.sh search --platform discuss --keywords "AI" --fid 65
bash scripts/crawl.sh search --platform uwants --keywords "ChatGPT" --fid 547
bash scripts/crawl.sh thread --platform discuss --id 12345678
```

---

## Action Items

- [ ] **Eric（明天）** 建立屋企 WireGuard tunnel → `wireguard-home:8888`
- [ ] **A2** 測試住宅 IP 對 Discuss/Uwants 可達性
- [ ] **如通過** → 建立 discuss.py + uwants.py + crawl.sh routing + SKILL.md
- [ ] **如仍封** → Eric export cf_clearance cookies，A2 import Playwright profile 再測
- [ ] **最後手段** → ScraperAPI $49/月

---

## 相關資源

- `skills/social-scraper/scripts/babykingdom.py` — 同為 Discuz! 結構，可參考
- `skills/social-scraper/scripts/lihkg.py` — proxy rotation 參考
- `skills/social-scraper/scripts/hkgolden.py` — proxy rotation 參考
- `skills/vpn-proxy/SKILL.md` — WireGuard 7 region proxy 文檔

---

*A2 根據 2026-03-20 01:00-01:30 實際測試結果生成*
