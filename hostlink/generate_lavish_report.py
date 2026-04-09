#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate Lavish Attic ERP Complete Analysis Report PDF
"""

import os
from weasyprint import HTML, CSS

OUTPUT_PATH = "/home/openclaw/.openclaw/workspace/data/hostlink/Lavish_Complete_Report.pdf"

HTML_CONTENT = """<!DOCTYPE html>
<html lang="zh-HK">
<head>
<meta charset="UTF-8">
<title>Lavish Attic ERP — 完整分析報告</title>
<style>
  @font-face {
    font-family: 'NotoSansCJK';
    src: local('Noto Sans CJK HK'), local('Noto Sans CJK TC'), local('Noto Sans CJK SC');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans CJK HK', 'Noto Sans CJK TC', 'Noto Sans CJK SC', sans-serif;
    font-size: 10pt;
    color: #2c2c2c;
    line-height: 1.6;
  }

  /* ====== PAGE SETUP ====== */
  @page {
    size: A4;
    margin: 20mm 18mm 25mm 18mm;
    @top-center {
      content: "Lavish Attic ERP — 完整分析報告";
      font-family: 'Noto Sans CJK HK', 'Noto Sans CJK TC', sans-serif;
      font-size: 8pt;
      color: #666;
      padding-top: 5mm;
    }
    @bottom-center {
      content: "Internal — Hostlink (HK) Limited  ·  第 " counter(page) " 頁 / 共 " counter(pages) " 頁";
      font-family: 'Noto Sans CJK HK', 'Noto Sans CJK TC', sans-serif;
      font-size: 8pt;
      color: #888;
    }
  }

  @page cover {
    margin: 0;
    @top-center { content: ""; }
    @bottom-center { content: ""; }
  }

  /* ====== COVER PAGE ====== */
  .cover-page {
    page: cover;
    page-break-after: always;
    background: linear-gradient(160deg, #1a3a5c 0%, #0d2240 60%, #071828 100%);
    min-height: 297mm;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40mm 20mm;
    position: relative;
  }

  .cover-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8mm;
    background: linear-gradient(90deg, #c8a96e 0%, #e8c97e 50%, #c8a96e 100%);
  }

  .cover-accent-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4mm;
    background: linear-gradient(90deg, #c8a96e 0%, #e8c97e 50%, #c8a96e 100%);
  }

  .cover-logo-area {
    text-align: center;
    margin-bottom: 15mm;
  }

  .cover-logo-text {
    font-size: 11pt;
    color: #c8a96e;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .cover-divider {
    width: 80mm;
    height: 0.5mm;
    background: rgba(200, 169, 110, 0.4);
    margin: 8mm auto;
  }

  .cover-title {
    font-size: 26pt;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    line-height: 1.3;
    margin-bottom: 5mm;
  }

  .cover-subtitle {
    font-size: 12pt;
    color: #c8a96e;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 15mm;
  }

  .cover-meta {
    text-align: center;
    margin-top: 10mm;
  }

  .cover-meta-item {
    font-size: 9pt;
    color: rgba(255,255,255,0.7);
    margin: 3mm 0;
    letter-spacing: 1px;
  }

  .cover-meta-item span {
    color: #c8a96e;
    font-weight: bold;
  }

  .cover-confidential {
    margin-top: 12mm;
    padding: 3mm 8mm;
    border: 1px solid rgba(200, 169, 110, 0.5);
    font-size: 8pt;
    color: rgba(255,255,255,0.6);
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* ====== TOC PAGE ====== */
  .toc-page {
    page-break-after: always;
    padding: 5mm 0;
  }

  .toc-title {
    font-size: 16pt;
    font-weight: bold;
    color: #1a3a5c;
    border-bottom: 2px solid #1a3a5c;
    padding-bottom: 3mm;
    margin-bottom: 8mm;
  }

  .toc-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 3mm 0;
    border-bottom: 1px dotted #ccc;
  }

  .toc-item-main {
    font-weight: bold;
    color: #1a3a5c;
    font-size: 11pt;
  }

  .toc-item-sub {
    color: #555;
    font-size: 9pt;
    padding: 1mm 0 1mm 6mm;
  }

  /* ====== CHAPTER STYLING ====== */
  .chapter {
    page-break-before: always;
    padding-top: 5mm;
  }

  .chapter-header {
    background: #1a3a5c;
    color: white;
    padding: 6mm 8mm;
    margin-bottom: 8mm;
    border-radius: 2px;
  }

  .chapter-number {
    font-size: 9pt;
    color: #c8a96e;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 2mm;
  }

  .chapter-title {
    font-size: 18pt;
    font-weight: bold;
  }

  .section-title {
    font-size: 12pt;
    font-weight: bold;
    color: #1a3a5c;
    margin: 6mm 0 3mm 0;
    padding-left: 3mm;
    border-left: 3px solid #c8a96e;
  }

  /* ====== TABLES ====== */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 4mm 0;
    font-size: 9pt;
  }

  thead tr {
    background: #1a3a5c;
    color: white;
  }

  thead th {
    padding: 4mm 3mm;
    text-align: left;
    font-weight: bold;
  }

  tbody tr:nth-child(odd) {
    background: #f0f4f8;
  }

  tbody tr:nth-child(even) {
    background: #ffffff;
  }

  tbody tr:hover {
    background: #e0e8f0;
  }

  tbody td {
    padding: 3mm 3mm;
    border-bottom: 1px solid #dde5ed;
    vertical-align: top;
  }

  .table-footer {
    background: #1a3a5c !important;
    color: white !important;
    font-weight: bold;
  }

  .table-footer td {
    border-bottom: none !important;
    padding: 4mm 3mm !important;
    color: white;
  }

  /* ====== STATUS BADGES ====== */
  .badge-done {
    background: #22c55e;
    color: white;
    padding: 1mm 3mm;
    border-radius: 3px;
    font-size: 8pt;
    font-weight: bold;
  }

  .badge-warning {
    background: #f59e0b;
    color: white;
    padding: 1mm 3mm;
    border-radius: 3px;
    font-size: 8pt;
    font-weight: bold;
  }

  .badge-danger {
    background: #ef4444;
    color: white;
    padding: 1mm 3mm;
    border-radius: 3px;
    font-size: 8pt;
    font-weight: bold;
  }

  /* ====== ALERT BOXES ====== */
  .alert-red {
    border: 2px solid #ef4444;
    background: #fef2f2;
    padding: 5mm;
    margin: 5mm 0;
    border-radius: 3px;
  }

  .alert-red-title {
    color: #dc2626;
    font-weight: bold;
    font-size: 11pt;
    margin-bottom: 3mm;
  }

  .alert-blue {
    border: 2px solid #1a3a5c;
    background: #f0f4f8;
    padding: 5mm;
    margin: 5mm 0;
    border-radius: 3px;
  }

  .alert-blue-title {
    color: #1a3a5c;
    font-weight: bold;
    font-size: 11pt;
    margin-bottom: 3mm;
  }

  .alert-green {
    border: 2px solid #22c55e;
    background: #f0fdf4;
    padding: 5mm;
    margin: 5mm 0;
    border-radius: 3px;
  }

  .alert-green-title {
    color: #16a34a;
    font-weight: bold;
    font-size: 11pt;
    margin-bottom: 3mm;
  }

  .alert-gold {
    border: 2px solid #c8a96e;
    background: #fffbf0;
    padding: 5mm;
    margin: 5mm 0;
    border-radius: 3px;
  }

  .alert-gold-title {
    color: #92610a;
    font-weight: bold;
    font-size: 11pt;
    margin-bottom: 3mm;
  }

  /* ====== INFO GRID ====== */
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4mm;
    margin: 4mm 0;
  }

  .info-card {
    background: #f0f4f8;
    border-left: 4px solid #1a3a5c;
    padding: 4mm;
  }

  .info-card-label {
    font-size: 8pt;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .info-card-value {
    font-size: 13pt;
    font-weight: bold;
    color: #1a3a5c;
    margin-top: 1mm;
  }

  /* ====== MODULE LIST ====== */
  .module-list {
    list-style: none;
    margin: 3mm 0;
  }

  .module-item {
    padding: 2mm 3mm;
    border-bottom: 1px solid #e5e7eb;
    font-size: 9pt;
  }

  .module-item:nth-child(odd) {
    background: #f9fafb;
  }

  .module-name {
    font-weight: bold;
    color: #1a3a5c;
  }

  .module-url {
    color: #6b7280;
    font-size: 8pt;
  }

  /* ====== SUMMARY CARDS ====== */
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4mm;
    margin: 6mm 0;
  }

  .summary-card {
    background: #1a3a5c;
    color: white;
    padding: 5mm;
    text-align: center;
    border-radius: 3px;
  }

  .summary-card-label {
    font-size: 8pt;
    color: rgba(255,255,255,0.7);
    margin-bottom: 2mm;
  }

  .summary-card-value {
    font-size: 16pt;
    font-weight: bold;
    color: #c8a96e;
  }

  .summary-card-sub {
    font-size: 8pt;
    color: rgba(255,255,255,0.8);
    margin-top: 1mm;
  }

  /* ====== NEGOTIATION POINTS ====== */
  .point-list {
    list-style: none;
    margin: 3mm 0;
  }

  .point-item {
    padding: 3mm 3mm 3mm 8mm;
    position: relative;
    border-bottom: 1px solid #e5e7eb;
    font-size: 9.5pt;
  }

  .point-item:before {
    content: "▶";
    position: absolute;
    left: 1mm;
    color: #c8a96e;
    font-size: 8pt;
  }

  /* ====== PARAGRAPH ====== */
  p {
    margin: 2mm 0;
    font-size: 9.5pt;
  }

  .text-muted {
    color: #6b7280;
    font-size: 8.5pt;
  }

  .highlight {
    background: #fef9c3;
    padding: 0 1mm;
  }

  .text-red {
    color: #dc2626;
    font-weight: bold;
  }

  .text-green {
    color: #16a34a;
    font-weight: bold;
  }

  .text-gold {
    color: #92610a;
    font-weight: bold;
  }

  hr {
    border: none;
    border-top: 1px solid #dde5ed;
    margin: 5mm 0;
  }

  /* ====== APPENDIX ====== */
  .appendix {
    page-break-before: always;
    background: #f8fafc;
    padding: 8mm;
    border: 2px solid #1a3a5c;
    border-radius: 4px;
  }

  .appendix-title {
    font-size: 16pt;
    font-weight: bold;
    color: #1a3a5c;
    margin-bottom: 6mm;
    text-align: center;
  }

  .appendix-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5mm;
  }

  .appendix-item {
    background: white;
    padding: 5mm;
    border-left: 4px solid #c8a96e;
    border-radius: 2px;
  }

  .appendix-label {
    font-size: 9pt;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .appendix-value {
    font-size: 20pt;
    font-weight: bold;
    color: #1a3a5c;
    margin: 1mm 0;
  }

  .appendix-note {
    font-size: 8pt;
    color: #888;
  }

  .total-box {
    background: #1a3a5c;
    color: white;
    padding: 6mm;
    text-align: center;
    border-radius: 4px;
    margin-top: 6mm;
  }

  .total-label {
    font-size: 10pt;
    color: rgba(255,255,255,0.7);
  }

  .total-value {
    font-size: 28pt;
    font-weight: bold;
    color: #c8a96e;
    margin: 2mm 0;
  }

  .total-sub {
    font-size: 9pt;
    color: rgba(255,255,255,0.8);
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5mm;
    margin: 3mm 0;
  }
</style>
</head>
<body>

<!-- ==================== COVER PAGE ==================== -->
<div class="cover-page">
  <div class="cover-accent"></div>

  <div class="cover-logo-area">
    <div class="cover-logo-text">Hostlink (HK) Limited</div>
  </div>

  <div class="cover-divider"></div>

  <div class="cover-title">
    Lavish Attic ERP<br>完整分析報告
  </div>

  <div class="cover-subtitle">
    合約執行 · 功能完成度 · 談判立場
  </div>

  <div class="cover-divider"></div>

  <div class="cover-meta">
    <div class="cover-meta-item"><span>報告日期</span>　2026 年 3 月 12 日</div>
    <div class="cover-meta-item"><span>項目編號</span>　報價單 No. 00008412</div>
    <div class="cover-meta-item"><span>客　　戶</span>　Lavish Attic（名錶店）</div>
    <div class="cover-meta-item"><span>製作單位</span>　A2 AI System, Hostlink (HK) Limited</div>
  </div>

  <div class="cover-confidential">Internal — Confidential</div>

  <div class="cover-accent-bottom"></div>
</div>

<!-- ==================== TABLE OF CONTENTS ==================== -->
<div class="toc-page">
  <div class="toc-title">目　錄</div>

  <div class="toc-item">
    <div>
      <div class="toc-item-main">第一章　事件背景</div>
      <div class="toc-item-sub">項目概覽 · TVP 申請失敗 · 兩份報價單對比 · 法律含義</div>
    </div>
  </div>

  <div class="toc-item">
    <div>
      <div class="toc-item-main">第二章　合約功能完成度（14/14）</div>
      <div class="toc-item-sub">全部 14 項合約功能狀態 · 完成率 100%</div>
    </div>
  </div>

  <div class="toc-item">
    <div>
      <div class="toc-item-main">第三章　額外開發功能（超出合約範圍）</div>
      <div class="toc-item-sub">15 項額外模組 · 估值 ~HK$113,000</div>
    </div>
  </div>

  <div class="toc-item">
    <div>
      <div class="toc-item-main">第四章　系統功能詳細清單</div>
      <div class="toc-item-sub">全部 26 個功能模組說明</div>
    </div>
  </div>

  <div class="toc-item">
    <div>
      <div class="toc-item-main">第五章　TVP 法律聲明</div>
      <div class="toc-item-sub">政府資助申請聲明 · 合約依據</div>
    </div>
  </div>

  <div class="toc-item">
    <div>
      <div class="toc-item-main">第六章　待處理事項</div>
      <div class="toc-item-sub">Bug Fix · Out-of-Scope 要求</div>
    </div>
  </div>

  <div class="toc-item">
    <div>
      <div class="toc-item-main">第七章　談判立場總結</div>
      <div class="toc-item-sub">Hostlink 優勢 · 建議 Meeting 策略</div>
    </div>
  </div>

  <div class="toc-item">
    <div>
      <div class="toc-item-main">附錄　總數摘要</div>
      <div class="toc-item-sub">合約金額 · 完成率 · 總交付價值</div>
    </div>
  </div>
</div>

<!-- ==================== CHAPTER 1: 事件背景 ==================== -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-number">Chapter 1</div>
    <div class="chapter-title">事件背景</div>
  </div>

  <div class="section-title">項目概覽</div>

  <div class="info-grid">
    <div class="info-card">
      <div class="info-card-label">客　戶</div>
      <div class="info-card-value" style="font-size:12pt;">Lavish Attic</div>
    </div>
    <div class="info-card">
      <div class="info-card-label">業務性質</div>
      <div class="info-card-value" style="font-size:12pt;">名錶零售</div>
    </div>
    <div class="info-card">
      <div class="info-card-label">報價單編號</div>
      <div class="info-card-value" style="font-size:12pt;">No. 00008412</div>
    </div>
    <div class="info-card">
      <div class="info-card-label">簽署日期</div>
      <div class="info-card-value" style="font-size:12pt;">2024-12-04</div>
    </div>
    <div class="info-card">
      <div class="info-card-label">合約金額</div>
      <div class="info-card-value">HK$213,220</div>
    </div>
    <div class="info-card">
      <div class="info-card-label">簽署人</div>
      <div class="info-card-value" style="font-size:10pt;">Piano Chow + Eric Tong</div>
    </div>
  </div>

  <div class="section-title">TVP 申請失敗事件經過</div>

  <p>Lavish Attic 在委託 Hostlink 開發 CRM 系統期間，自行向政府申請 <strong>TVP（科技券計劃）</strong> 資助，希望以政府資金補貼 CRM 開發費用。然而，TVP 申請最終遭政府拒絕。</p>

  <p>Lavish 其後向 Hostlink 提出以下要求：</p>

  <ul style="margin: 3mm 0 3mm 8mm;">
    <li style="margin: 1mm 0;">以 TVP 被拒為由，要求 <strong>減低 CRM 費用</strong></li>
    <li style="margin: 1mm 0;">要求 <strong>免費加入新功能</strong>（包括 Deposit Request Template 等）</li>
    <li style="margin: 1mm 0;">要求加入 <strong>Stock List Excel 匯出功能</strong></li>
    <li style="margin: 1mm 0;">Lavish 立場：TVP 被拒係 Hostlink 的責任，應減價補償</li>
  </ul>

  <div class="alert-red">
    <div class="alert-red-title">⚠️ 重要：此立場無任何合約依據</div>
    <p>Hostlink 於原始報價單中，已將 TVP 相關服務（Item 24 Funding Management / Item 25 Audit Fee）列為 <strong>Optional（可選）項目，且均未被客戶選取</strong>。Lavish Attic 從未就此服務付費，TVP 申請結果與 Hostlink 之合約履行義務完全無關。</p>
  </div>

  <div class="section-title">兩份報價單對比</div>

  <table>
    <thead>
      <tr>
        <th style="width:20%;">項目</th>
        <th style="width:40%;">報價單 00008412 ✅</th>
        <th style="width:40%;">報價單 00008412.1 ❌</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>日期</strong></td>
        <td>2024-12-04</td>
        <td>2025-10-31</td>
      </tr>
      <tr>
        <td><strong>金額</strong></td>
        <td>HK$213,220（完整合約）</td>
        <td>HK$143,400（大幅削減）</td>
      </tr>
      <tr>
        <td><strong>內容</strong></td>
        <td>14 個功能模組 + 服務費</td>
        <td>CRM $120K + 年費服務</td>
      </tr>
      <tr>
        <td><strong>簽署狀態</strong></td>
        <td><span class="badge-done">✅ Piano Chow + Eric Tong 雙方已簽名蓋印</span></td>
        <td><span class="badge-danger">❌ Lavish 從未簽署</span></td>
      </tr>
      <tr>
        <td><strong>法律效力</strong></td>
        <td><span class="text-green">✅ 具完整法律效力</span></td>
        <td><span class="text-red">❌ 僅為未簽署草稿，無法律效力</span></td>
      </tr>
    </tbody>
  </table>

  <div class="alert-blue">
    <div class="alert-blue-title">⚖️ 法律含義</div>
    <p><strong>唯一具法律效力的合約係 8412</strong>（雙方已簽名）。報價單 8412.1 係 Hostlink 出於客戶關係考慮草擬的談判文件，<strong>Lavish 從未簽署，不構成任何合約修改</strong>。Lavish 不能以 8412.1 要求按更低價格結算。若 Lavish 在 Meeting 中提及 8412.1，Hostlink 可明確回應：「該文件從未由貴方簽署，不具任何法律效力。」</p>
  </div>
</div>

<!-- ==================== CHAPTER 2: 合約功能完成度 ==================== -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-number">Chapter 2</div>
    <div class="chapter-title">合約功能完成度（14/14）</div>
  </div>

  <div class="alert-green">
    <div class="alert-green-title">✅ 所有合約功能均已完整交付</div>
    <p>報價單 No. 00008412 所列 14 個功能模組，經 Playwright 自動化審查及人工截圖確認（100+ 截圖），<strong>全部 100% 完成交付</strong>。</p>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width:5%;">#</th>
        <th style="width:25%;">功能名稱</th>
        <th style="width:12%;">合約金額</th>
        <th style="width:12%;">完成狀態</th>
        <th style="width:46%;">詳細說明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><strong>CMS Platform</strong></td>
        <td>HK$10,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>CMS 平台、User Module、User Group（Role）、Login System、Security Protection、Event Log、User Log、前端整合</td>
      </tr>
      <tr>
        <td>2</td>
        <td><strong>Client Module</strong></td>
        <td>HK$12,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>完整 CRUD、狀態管理（Active/Inactive）、客戶資料（Name/Alias/Email/Phone/Address/DOB/Interest/Remark/Balance）、Client Detail 6 個 Tabs（QUOTATIONS/INVOICES/PAYMENTS/REPAIRS/CREDIT NOTES/CONSIGNMENTS）</td>
      </tr>
      <tr>
        <td>3</td>
        <td><strong>Quotation Module</strong></td>
        <td>HK$15,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>完整 CRUD、狀態管理（Pending/Signed-back/Rejected）、關聯客戶、T&amp;C 欄位（Rich Text Editor）、Print to PDF、Send Email、額外功能：Clone/Download/Deposit Amount</td>
      </tr>
      <tr>
        <td>4</td>
        <td><strong>Quotation Item Module</strong></td>
        <td>HK$8,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>新增/編輯/刪除報價單項目、預設項目描述及價格、折扣計算、整合在 Quotation 模組內</td>
      </tr>
      <tr>
        <td>5</td>
        <td><strong>Invoice Module</strong></td>
        <td>HK$18,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>完整 CRUD、狀態管理（Pending/Void/Paid/Partial Paid）、Print to PDF（含 Logo 版本）、Send Email、應收賬款/未清金額、Invoice Line ⋮ 隱藏功能（Pickup/Forfeit/Order）、Detail Tabs：PICKUPS/DOCUMENTS/CREDIT NOTES/DELIVERY NOTES</td>
      </tr>
      <tr>
        <td>6</td>
        <td><strong>Product Module</strong></td>
        <td>HK$15,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>完整 CRUD、庫存管理（Stock Count/Sold/Unreceived）直接顯示於列表、Warehouse Location、Consignment Ownership 標記</td>
      </tr>
      <tr>
        <td>7</td>
        <td><strong>Staff Module</strong><br><span class="text-muted">（= /User）</span></td>
        <td>HK$6,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>CMS 用戶管理（/User 頁面）、ACTIVE/INACTIVE Tabs、11+ 用戶（admin/useradmin/Staff1 等）、Role 管理（4 個 Roles）</td>
      </tr>
      <tr>
        <td>8</td>
        <td><strong>Product Stock Take</strong></td>
        <td>HK$15,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>倉庫位置顯示、Consignment Ownership 標記、Stock Count/Sold/Unreceived 顯示、序列號追蹤（/Item 頁面，514 items），Eric 確認 Export 毋需加</td>
      </tr>
      <tr>
        <td>9</td>
        <td><strong>Account Module</strong><br><span class="text-muted">（= /Payment）</span></td>
        <td>HK$20,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>付款管理（/Payment 頁面）、借記/貸記帳目透過 Invoice + PO Payment 記錄實現、付款方式（銀行轉賬/支票/現金）、完整 CRUD</td>
      </tr>
      <tr>
        <td>10</td>
        <td><strong>Dashboard Module</strong></td>
        <td>HK$10,000</td>
        <td><span class="badge-warning">✅ 完成*</span></td>
        <td>已完整開發（3 KPI Cards: Clients/Invoices/Quotations + Recent Activity Feed）。<strong>*客戶主動要求移除</strong>（原因：員工不應看到公司收入數字，名錶金額太大影響心理）。此為客戶自行決定，非 Hostlink 問題。</td>
      </tr>
      <tr>
        <td>11</td>
        <td><strong>Report Module</strong></td>
        <td>HK$20,000</td>
        <td><span class="badge-done">✅ 完成**</span></td>
        <td>Brand Report（按品牌代碼 AW/RSV/CSS 等）、Product Report（產品收入分析）、多貨幣分組（HKD/EUR/CHF/USD）、Monthly Date Filter、CSV Export。<strong>**客戶已接受現有格式為最終版本。</strong></td>
      </tr>
      <tr>
        <td>12</td>
        <td><strong>Account Access Levels</strong></td>
        <td rowspan="2" style="vertical-align:middle;">HK$28,000<br><span class="text-muted">（合併）</span></td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>4 個角色（超出原定 3 個）、無限用戶（11+）、Permission 細至 Module &gt; Function &gt; Field 級別、System Event Log + User Activities Log</td>
      </tr>
      <tr>
        <td>13</td>
        <td><strong>Export Report Function</strong></td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>Brand Report + Product Report 均支援 CSV Export</td>
      </tr>
      <tr>
        <td>14</td>
        <td><strong>Responsive View</strong></td>
        <td>HK$20,000</td>
        <td><span class="badge-done">✅ 完成</span></td>
        <td>Mobile/Tablet/Desktop 全平台響應式（Quasar Framework）、Windows/MacOS/Android/iOS 瀏覽器相容</td>
      </tr>
      <tr class="table-footer">
        <td colspan="2"><strong>合約總金額</strong></td>
        <td><strong>HK$213,220</strong></td>
        <td colspan="2"><strong>完成率：14/14（100%）✅</strong></td>
      </tr>
    </tbody>
  </table>

  <p class="text-muted">* Development 費用：HK$197,000 + 服務費 HK$16,220 = 合約總金額 HK$213,220</p>
</div>

<!-- ==================== CHAPTER 3: 額外開發功能 ==================== -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-number">Chapter 3</div>
    <div class="chapter-title">額外開發功能（超出合約範圍）</div>
  </div>

  <div class="alert-gold">
    <div class="alert-gold-title">💎 Hostlink 主動超額交付</div>
    <p>以下 15 個功能模組均已完整開發交付，<strong>完全超出原始合約範圍</strong>，體現 Hostlink 對 Lavish Attic 業務的深度理解及對客戶關係的高度重視。估計額外開發價值 <strong>~HK$113,000</strong>，遠超合約減價要求金額。</p>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width:20%;">模組名稱</th>
        <th style="width:20%;">系統 URL</th>
        <th style="width:45%;">功能描述</th>
        <th style="width:15%;">估計開發價值</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Brand Management</strong><br>品牌管理</td>
        <td><code>/Brand</code></td>
        <td>品牌 CRUD、Code/Name 管理、41 條品牌記錄，支援 AW/RSV/CSS/FAH/MSL 等多品牌</td>
        <td><strong>~HK$5,000</strong></td>
      </tr>
      <tr>
        <td><strong>Vendor Management</strong><br>供應商管理</td>
        <td><code>/Vendor</code></td>
        <td>供應商完整 CRUD、聯絡人資料、Currency 設定、餘額追蹤、41 條記錄</td>
        <td><strong>~HK$8,000</strong></td>
      </tr>
      <tr>
        <td><strong>Purchase Order</strong><br>採購訂單</td>
        <td><code>/PurchaseOrder</code></td>
        <td>完整採購流程管理、Payment Status/Receive Status 追蹤、多貨幣匯率、Print/Send/Receive/Payment/Debit Note 操作、子表格（產品明細/收貨記錄/付款記錄）</td>
        <td><strong>~HK$15,000</strong></td>
      </tr>
      <tr>
        <td><strong>Repair Module</strong><br>維修管理</td>
        <td><code>/Repair</code></td>
        <td>名錶維修完整流程、序列號追蹤、保養狀態（Warranty）、維修狀態更新、關聯 Invoice/Expense/Quotation、子頁面：Repair Invoice/Repair Expense/Repair Quotation</td>
        <td><strong>~HK$20,000+</strong></td>
      </tr>
      <tr>
        <td><strong>Credit Note</strong><br>信用票據</td>
        <td><code>/CreditNote</code></td>
        <td>客戶信用票據管理、關聯 Invoice、餘額追蹤、13 條記錄</td>
        <td><strong>~HK$8,000</strong></td>
      </tr>
      <tr>
        <td><strong>Debit Note</strong><br>借記票據</td>
        <td><code>/DebitNote</code></td>
        <td>供應商借記票據、關聯 Purchase Order、剩餘金額追蹤</td>
        <td><strong>~HK$5,000</strong></td>
      </tr>
      <tr>
        <td><strong>Return Request</strong><br>退貨請求</td>
        <td><code>/ReturnRequest</code></td>
        <td>客戶退貨管理、關聯 PO 及 Product/Item、收貨數量追蹤、狀態管理、41 條記錄</td>
        <td><strong>~HK$8,000</strong></td>
      </tr>
      <tr>
        <td><strong>Invoice Line 明細</strong></td>
        <td><code>/InvoiceLine</code></td>
        <td>發票產品明細管理、序列號/數量/價格/折扣/小計追蹤、Pickup/Forfeit 狀態、關聯 PO</td>
        <td><strong>~HK$5,000</strong></td>
      </tr>
      <tr>
        <td><strong>Transaction Records</strong><br>交易記錄</td>
        <td><code>/Transaction</code></td>
        <td>全系統交易流水記錄、多貨幣支援、付款方式追蹤、41 條記錄</td>
        <td><strong>~HK$5,000</strong></td>
      </tr>
      <tr>
        <td><strong>Expense Management</strong><br>支出管理</td>
        <td><code>/Expense</code></td>
        <td>支出/費用完整管理、關聯 PO/Invoice、文件上傳、多貨幣、狀態追蹤（含 Due Date）</td>
        <td><strong>~HK$8,000</strong></td>
      </tr>
      <tr>
        <td><strong>Service Items</strong><br>服務項目</td>
        <td><code>/Service</code></td>
        <td>服務項目設定（Name/Price/Cost）、Is Repair 標記、多貨幣、9 條記錄</td>
        <td><strong>~HK$5,000</strong></td>
      </tr>
      <tr>
        <td><strong>Currency Management</strong><br>貨幣管理</td>
        <td><code>/Currency</code></td>
        <td>多貨幣設定（HKD/EUR/CHF/USD/JPY 等）、匯率管理、全系統貨幣轉換、9 種貨幣</td>
        <td><strong>~HK$3,000</strong></td>
      </tr>
      <tr>
        <td><strong>File Manager</strong><br>檔案管理</td>
        <td><code>/FileManager</code></td>
        <td>系統檔案上傳/下載/管理功能</td>
        <td><strong>~HK$3,000</strong></td>
      </tr>
      <tr>
        <td><strong>Custom Field</strong><br>自訂欄位</td>
        <td><code>/CustomField</code></td>
        <td>自訂欄位管理（Name/Model/Type/Validation），可擴展各模組欄位</td>
        <td><strong>~HK$5,000</strong></td>
      </tr>
      <tr>
        <td><strong>Multi-currency Support</strong><br>全系統多貨幣</td>
        <td>全系統整合</td>
        <td>全系統多貨幣支援（HKD/EUR/CHF/USD/JPY）、自動匯率換算至 HKD、適用於 Invoice/PO/Expense/Report 等所有模組</td>
        <td><strong>~HK$10,000</strong></td>
      </tr>
      <tr class="table-footer">
        <td colspan="3"><strong>額外開發總估值</strong></td>
        <td><strong>~HK$113,000+</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="alert-blue" style="margin-top:5mm;">
    <div class="alert-blue-title">📋 正式聲明</div>
    <p>以上 15 項功能模組均已完整交付，並非原始報價單 No. 00008412 所列合約範圍，完全屬於 Hostlink 對客戶業務深度理解之額外投入。此等額外開發之市場價值 <strong>~HK$113,000</strong>，已超出任何減價要求之金額，充分體現 Hostlink 對 Lavish Attic 業務之誠意與承擔。</p>
  </div>
</div>

<!-- ==================== CHAPTER 4: 系統功能詳細清單 ==================== -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-number">Chapter 4</div>
    <div class="chapter-title">系統功能詳細清單</div>
  </div>

  <p>以下為 Lavish Attic ERP 系統全部 26 個功能模組之完整說明，經 Playwright 自動化審查確認。</p>

  <table style="margin-top:5mm;">
    <thead>
      <tr>
        <th style="width:5%;">#</th>
        <th style="width:25%;">模組名稱 (URL)</th>
        <th style="width:15%;">類型</th>
        <th style="width:55%;">功能說明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><strong>Dashboard</strong><br><code>/</code></td>
        <td><span class="badge-warning">已隱藏*</span></td>
        <td>KPI 統計（308 Clients / 422 Invoices / 3 Quotations）、Recent Activity Feed（登入/客戶/付款/發票操作記錄）。*客戶要求移除顯示</td>
      </tr>
      <tr>
        <td>2</td>
        <td><strong>Brand</strong><br><code>/Brand</code></td>
        <td>品牌管理</td>
        <td>品牌 CRUD，Code/Name 管理，41 條記錄，支援 AW/RSV/CSS/FAH/MSL 等</td>
      </tr>
      <tr>
        <td>3</td>
        <td><strong>Product</strong><br><code>/Product</code></td>
        <td>產品管理</td>
        <td>產品存貨管理，列表顯示 Stock Count/Sold/Unreceived，Warehouse Location，Consignment Ownership，41 條記錄</td>
      </tr>
      <tr>
        <td>4</td>
        <td><strong>Vendor</strong><br><code>/Vendor</code></td>
        <td>供應商管理</td>
        <td>供應商 CRUD，Name/Email/Phone/Balance，聯絡人資料，貨幣設定，41 條記錄</td>
      </tr>
      <tr>
        <td>5</td>
        <td><strong>Purchase Order</strong><br><code>/PurchaseOrder</code></td>
        <td>採購管理</td>
        <td>採購訂單完整管理，Status/Payment Status/Receive Status 三重追蹤，多貨幣，Print/Send/Receive/Payment 操作，41 條記錄</td>
      </tr>
      <tr>
        <td>6</td>
        <td><strong>Client</strong><br><code>/Client</code></td>
        <td>客戶管理</td>
        <td>客戶 CRM，完整資料（Title/Name/Alias/DOB/Interest），Detail Tabs：QUOTATIONS/INVOICES/PAYMENTS/REPAIRS/CREDIT NOTES/CONSIGNMENTS，308 條記錄</td>
      </tr>
      <tr>
        <td>7</td>
        <td><strong>Quotation</strong><br><code>/Quotation</code></td>
        <td>報價單</td>
        <td>報價單 CRUD，狀態管理（Pending/Signed-back/Rejected），Print PDF/Send Email，Clone，Mark Accepted/Rejected，T&amp;C Rich Text，7 條記錄</td>
      </tr>
      <tr>
        <td>8</td>
        <td><strong>Invoice</strong><br><code>/Invoice</code></td>
        <td>發票管理</td>
        <td>發票 CRUD，Status/Payment Status/Pickup Status，Print（含 Logo 版）/Send/Download/Clone，Credit Note/Delivery Note 功能，422 條記錄</td>
      </tr>
      <tr>
        <td colspan="4" style="background:#f0f4f8; padding:3mm;">
          <strong style="color:#1a3a5c;">Invoice 特殊功能詳情：</strong><br>
          <span style="color:#555;">▶ Invoice Line ⋮ 三點 Menu 隱藏操作：<strong>Pickup</strong>（取貨記錄）/ <strong>Forfeit（殺訂）</strong>（訂金沒收）/ <strong>Order</strong>（關聯 Purchase Order）</span><br>
          <span style="color:#555;">▶ Invoice Detail Page Tabs：<strong>PICKUPS</strong>（取貨記錄）/ <strong>DOCUMENTS</strong>（文件）/ <strong>CREDIT NOTES</strong>（信用票據）/ <strong>DELIVERY NOTES</strong>（送貨單）</span>
        </td>
      </tr>
      <tr>
        <td>9</td>
        <td><strong>Payment</strong><br><code>/Payment</code></td>
        <td>付款管理</td>
        <td>付款記錄 CRUD，Payment Number/Date/Client/Method/Invoice/Total，關聯發票搜尋，多付款方式</td>
      </tr>
      <tr>
        <td>10</td>
        <td><strong>Expense</strong><br><code>/Expense</code></td>
        <td>支出管理</td>
        <td>支出/費用管理，關聯 PO/Invoice，文件上傳，多貨幣，Due Date 追蹤，41 條記錄</td>
      </tr>
      <tr>
        <td>11</td>
        <td><strong>Repair</strong><br><code>/Repair</code></td>
        <td>維修管理</td>
        <td>名錶維修流程，Serial No 追蹤，Warranty 狀態，Update State Dropdown，子頁面：Repair Invoice/Expense/Quotation，41 條記錄</td>
      </tr>
      <tr>
        <td>12</td>
        <td><strong>Service</strong><br><code>/Service</code></td>
        <td>服務項目</td>
        <td>服務項目設定，Name/Price/Cost，Is Repair 標記，多貨幣，9 條記錄</td>
      </tr>
      <tr>
        <td>13</td>
        <td><strong>Transaction</strong><br><code>/Transaction</code></td>
        <td>交易記錄</td>
        <td>全系統交易流水（唯讀），Date/Currency/Amount/Reference/PO/Payment Method，41 條記錄</td>
      </tr>
      <tr>
        <td>14</td>
        <td><strong>Credit Note</strong><br><code>/CreditNote</code></td>
        <td>信用票據</td>
        <td>客戶信用票據，關聯 Invoice，Balance 追蹤，Created By/Time 記錄，13 條記錄</td>
      </tr>
      <tr>
        <td>15</td>
        <td><strong>Invoice Line</strong><br><code>/InvoiceLine</code></td>
        <td>發票明細</td>
        <td>發票產品明細（唯讀），Serial Number/Qty/Price/Discount/Subtotal HKD，Pickup Qty，Forfeit Amount/Date，關聯 PO</td>
      </tr>
      <tr>
        <td>16</td>
        <td><strong>Debit Note</strong><br><code>/DebitNote</code></td>
        <td>借記票據</td>
        <td>供應商借記票據，關聯 Purchase Order，Remain Amount 追蹤，1 條記錄</td>
      </tr>
      <tr>
        <td>17</td>
        <td><strong>Return Request</strong><br><code>/ReturnRequest</code></td>
        <td>退貨管理</td>
        <td>退貨請求管理，關聯 PO/Product/Item，Quantity/Received Qty 追蹤，狀態管理，41 條記錄</td>
      </tr>
      <tr>
        <td>18</td>
        <td><strong>File Manager</strong><br><code>/FileManager</code></td>
        <td>檔案管理</td>
        <td>系統檔案管理，Name/Last Modified/Size，支援上傳/下載/管理操作</td>
      </tr>
      <tr>
        <td>19</td>
        <td><strong>Currency</strong><br><code>/Currency</code></td>
        <td>貨幣管理</td>
        <td>多貨幣設定，Code/Name/Exchange Rate，全系統 HKD 匯率轉換，9 種貨幣</td>
      </tr>
      <tr>
        <td>20</td>
        <td><strong>Report - Brand</strong><br><code>/Report/brand</code></td>
        <td>報告</td>
        <td>品牌銷售報告，按品牌代碼分組，Quantity + Total Revenue，多貨幣分組（HKD/EUR/CHF/USD），Monthly Filter，CSV Export</td>
      </tr>
      <tr>
        <td>21</td>
        <td><strong>User</strong><br><code>/User</code></td>
        <td>用戶管理</td>
        <td>CMS 用戶管理（=Staff Module），ACTIVE/INACTIVE Tabs，11+ 用戶，2FA 支援，Username/Email/Phone/Role</td>
      </tr>
      <tr>
        <td>22</td>
        <td><strong>Role</strong><br><code>/Role</code></td>
        <td>角色管理</td>
        <td>角色權限管理，4 個 Roles（超出原定 3 個），Children/User Count 顯示</td>
      </tr>
      <tr>
        <td>23</td>
        <td><strong>Permission</strong><br><code>/Permission</code></td>
        <td>權限配置</td>
        <td>細至 Module &gt; Function &gt; Field 級別權限控制，Permission Export 功能，All Permissions 總覽</td>
      </tr>
      <tr>
        <td>24</td>
        <td><strong>Custom Field</strong><br><code>/CustomField</code></td>
        <td>自訂欄位</td>
        <td>自訂欄位配置（Name/Model/Type/Validation），可擴展任何模組欄位，1 條記錄</td>
      </tr>
      <tr>
        <td>25</td>
        <td><strong>System Value</strong><br><code>/SystemValue</code></td>
        <td>系統參數</td>
        <td>系統參數配置，2 條記錄，支援 Edit/Delete</td>
      </tr>
      <tr>
        <td>26</td>
        <td><strong>Setting - Customization</strong><br><code>/Setting/customization</code></td>
        <td>系統設定</td>
        <td>系統自訂選項，Component/Parameter 配置，5 條記錄</td>
      </tr>
    </tbody>
  </table>

  <p class="text-muted" style="margin-top:3mm;">* 調查方法：Playwright 自動化審查 + 人工截圖確認（多輪，100+ 截圖），確認人：Eric Tong（2026-03-11）</p>
</div>

<!-- ==================== CHAPTER 5: TVP 法律聲明 ==================== -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-number">Chapter 5</div>
    <div class="chapter-title">TVP 法律聲明</div>
  </div>

  <div class="alert-red">
    <div class="alert-red-title">🚫 TVP 政府資助申請聲明（重要法律事項）</div>
    <p>本章節就 Lavish Attic 以 TVP（科技券計劃）申請被拒為由提出減價要求，作出正式法律立場聲明。</p>
  </div>

  <div class="section-title">合約相關條款</div>

  <table>
    <thead>
      <tr>
        <th>報價單項目</th>
        <th>項目名稱</th>
        <th>性質</th>
        <th>客戶選取狀態</th>
        <th>付費情況</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item 24</td>
        <td>Funding Management</td>
        <td><span class="badge-warning">Optional（可選）</span></td>
        <td><span class="text-red">❌ checkbox □ 未選取</span></td>
        <td><span class="text-red">從未付費</span></td>
      </tr>
      <tr>
        <td>Item 25</td>
        <td>Audit Fee</td>
        <td><span class="badge-warning">Optional（可選）</span></td>
        <td><span class="text-red">❌ checkbox □ 未選取</span></td>
        <td><span class="text-red">從未付費</span></td>
      </tr>
    </tbody>
  </table>

  <div class="section-title">法律聲明要點</div>

  <ul style="list-style:none; margin:3mm 0;">
    <li style="padding:3mm; border-bottom:1px solid #e5e7eb; background:#fafafa;">
      <strong style="color:#1a3a5c;">① TVP 服務從未選取</strong><br>
      報價單 No. 00008412 中，Item 24「Funding Management」及 Item 25「Audit Fee」均標示為 Optional，客戶 Piano Chow 簽署時上述 checkbox 均未選取。
    </li>
    <li style="padding:3mm; border-bottom:1px solid #e5e7eb;">
      <strong style="color:#1a3a5c;">② Lavish Attic 從未就 TVP 服務付費</strong><br>
      Hostlink 從未就任何 TVP 申請相關服務收取費用，雙方亦未就此訂立任何合約條款。
    </li>
    <li style="padding:3mm; border-bottom:1px solid #e5e7eb; background:#fafafa;">
      <strong style="color:#1a3a5c;">③ TVP 申請結果與 Hostlink 交付質量無關</strong><br>
      Hostlink 之合約責任係開發並交付 CRM 系統功能（14 項，已全部完成）。TVP 資助申請屬 Lavish Attic 與政府之間的事宜，結果不影響 Hostlink 之合約義務或責任。
    </li>
    <li style="padding:3mm; background:#fef2f2;">
      <strong style="color:#dc2626;">④ 結論：Lavish 無任何合約依據要求減價</strong><br>
      基於以上三點，Lavish Attic 以 TVP 被拒為由提出的減價要求，<strong>完全欠缺合約依據</strong>。Hostlink 有充分法律及事實基礎，依據報價單 No. 00008412（已由 Piano Chow 親筆簽名蓋印）拒絕此等要求。
    </li>
  </ul>
</div>

<!-- ==================== CHAPTER 6: 待處理事項 ==================== -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-number">Chapter 6</div>
    <div class="chapter-title">待處理事項</div>
  </div>

  <div class="section-title">Hostlink 責任（Bug Fix）</div>

  <p>以下為 Hostlink 確認屬己方責任需修復的 Bug：</p>

  <table style="margin-top:3mm;">
    <thead>
      <tr>
        <th style="width:15%;">優先級</th>
        <th style="width:35%;">問題描述</th>
        <th style="width:25%;">影響範圍</th>
        <th style="width:25%;">建議行動</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="badge-warning">🔧 需修復</span></td>
        <td><strong>Invoice PDF 檔名錯誤</strong></td>
        <td>Invoice PDF 生成功能</td>
        <td>安排修復，主動告知 Lavish</td>
      </tr>
      <tr>
        <td><span class="badge-warning">🔧 需修復</span></td>
        <td><strong>Credit Note「Paid by Credit Note」預設值錯誤</strong></td>
        <td>Credit Note 模組</td>
        <td>安排修復，主動告知 Lavish</td>
      </tr>
    </tbody>
  </table>

  <div class="alert-blue" style="margin-top:4mm;">
    <div class="alert-blue-title">💡 建議：主動承諾修復</div>
    <p>在 Meeting 中主動承諾修復以上 2 個 Bug，展示 Hostlink 的專業態度及對客戶的負責精神。此舉有助緩和談判氣氛，同時不影響合約義務的法律立場。</p>
  </div>

  <div class="section-title">Out-of-Scope 新功能要求</div>

  <p>以下為 Lavish Attic 提出的要求，經分析均屬超出合約範圍（Out-of-Scope）的新功能，Hostlink 有權拒絕免費提供或另行收費：</p>

  <table style="margin-top:3mm;">
    <thead>
      <tr>
        <th style="width:25%;">要求</th>
        <th style="width:15%;">性質</th>
        <th style="width:35%;">分析</th>
        <th style="width:25%;">建議</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Deposit Request Template</strong></td>
        <td><span class="badge-danger">新功能</span></td>
        <td>原報價單不包含此功能模板，屬全新開發需求</td>
        <td>獨立報價 ~HK$6,000-10,000</td>
      </tr>
      <tr>
        <td><strong>TVP 被拒要求減價</strong></td>
        <td><span class="badge-danger">無合約依據</span></td>
        <td>TVP 服務（Item 24/25）為 Optional 且未選取，Lavish 從未就此付費，無合約依據</td>
        <td>依合約明確拒絕，附已簽署報價單 8412 為佐證</td>
      </tr>
    </tbody>
  </table>

  <div class="alert-red" style="margin-top:4mm;">
    <div class="alert-red-title">⚠️ 合約條款 7 保障</div>
    <p>報價單條款 7 明確授權 Hostlink 就合約範圍以外的修改或新增功能另行收費。Hostlink 有充分合約依據拒絕免費提供任何 Out-of-Scope 功能。</p>
  </div>
</div>

<!-- ==================== CHAPTER 7: 談判立場總結 ==================== -->
<div class="chapter">
  <div class="chapter-header">
    <div class="chapter-number">Chapter 7</div>
    <div class="chapter-title">談判立場總結</div>
  </div>

  <div class="section-title">Hostlink 優勢（極強）</div>

  <ul class="point-list">
    <li class="point-item">
      <strong>優勢 1 — 合約 14 個功能全部完成，截圖存檔為證</strong><br>
      <span class="text-muted">經 Playwright 自動化審查及 100+ 人工截圖確認，報價單 No. 00008412 所列全部 14 個功能模組均已完整交付。Eric Tong 已親自確認最終完成狀態。</span>
    </li>
    <li class="point-item">
      <strong>優勢 2 — 額外開發 ~HK$113,000 功能，遠超合約金額</strong><br>
      <span class="text-muted">Hostlink 主動額外開發 15 個合約範圍以外的功能模組（Repair/PO/Vendor/CreditNote 等），估計市場開發價值約 HK$113,000，充分展示 Hostlink 之誠意及額外投入。</span>
    </li>
    <li class="point-item">
      <strong>優勢 3 — TVP 係 Optional 未選取，Piano 親筆簽名，無法否認</strong><br>
      <span class="text-muted">報價單 Item 24/25 均為 Optional checkbox，Piano Chow 簽署時均未選取。原始簽署文件（2024-12-04）具完整法律效力，Lavish 無任何合約依據以 TVP 被拒要求減價。</span>
    </li>
    <li class="point-item">
      <strong>優勢 4 — 8412.1 Lavish 從未簽署，不構成有效合約修訂</strong><br>
      <span class="text-muted">報價單 8412.1 係 Hostlink 出於客戶關係草擬的談判文件，Lavish 從未簽署。唯一具法律效力的合約係雙方已簽署的 8412。</span>
    </li>
    <li class="point-item">
      <strong>優勢 5 — 報價單條款 7 授權 Hostlink 就 Scope 外改動另行收費</strong><br>
      <span class="text-muted">合約條款 7 明確保護 Hostlink 就任何超出合約範圍的功能要求另行收費，Lavish 提出的 Deposit Template 等新功能要求應作新報價處理。</span>
    </li>
  </ul>

  <div class="section-title">建議 Meeting 策略</div>

  <table>
    <thead>
      <tr>
        <th style="width:20%;">議題</th>
        <th style="width:40%;">建議回應策略</th>
        <th style="width:40%;">關鍵論點</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>開場確認</strong></td>
        <td>確認以報價單 8412（已簽署）為唯一合約基礎，逐項確認完成情況</td>
        <td>展示 14 項功能完成清單及截圖</td>
      </tr>
      <tr>
        <td><strong>TVP 被拒</strong></td>
        <td>出示報價單 Item 24/25 均為 Optional 且未選取，說明 TVP 申請與合約無關</td>
        <td>「Item 24/25 為 Optional，貴方未選取，從未就此付費」</td>
      </tr>
      <tr>
        <td><strong>額外功能展示</strong></td>
        <td>主動展示 15 個額外開發模組，估值 ~HK$113K</td>
        <td>「Hostlink 額外投入超過合約金額一半，展示誠意」</td>
      </tr>
      <tr>
        <td><strong>Bug 修復</strong></td>
        <td>主動承諾修復 2 個 Bug（PDF 檔名 + Credit Note 預設）</td>
        <td>展示專業態度，緩和談判氣氛</td>
      </tr>
      <tr>
        <td><strong>Deposit Template</strong></td>
        <td>定性為新功能，不在合約範圍，提供獨立報價 ~HK$6,000-10,000</td>
        <td>「此功能不在原報價單範圍，我們可以另行報價」</td>
      </tr>
      <tr>
        <td><strong>8412.1 問題</strong></td>
        <td>若 Lavish 提及此文件，明確指出其從未被簽署</td>
        <td>「該文件從未由貴方簽署，不構成任何有效合約修訂」</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- ==================== APPENDIX: 總數摘要 ==================== -->
<div class="appendix">
  <div class="appendix-title">附錄：總數摘要</div>

  <div class="appendix-grid">
    <div class="appendix-item">
      <div class="appendix-label">合約金額</div>
      <div class="appendix-value">HK$213,220</div>
      <div class="appendix-note">報價單 No. 00008412（雙方已簽署）</div>
    </div>
    <div class="appendix-item">
      <div class="appendix-label">完成項目</div>
      <div class="appendix-value">14 / 14</div>
      <div class="appendix-note">完成率：100% ✅（經截圖確認）</div>
    </div>
    <div class="appendix-item">
      <div class="appendix-label">額外開發估值</div>
      <div class="appendix-value">~HK$113,000</div>
      <div class="appendix-note">15 個合約範圍外功能模組</div>
    </div>
    <div class="appendix-item">
      <div class="appendix-label">待修復 Bug</div>
      <div class="appendix-value">2 項</div>
      <div class="appendix-note">Invoice PDF 檔名 + Credit Note 預設</div>
    </div>
  </div>

  <div class="total-box">
    <div class="total-label">總交付價值（合約 + 額外開發）</div>
    <div class="total-value">~HK$326,220</div>
    <div class="total-sub">HK$213,220（合約）+ ~HK$113,000（額外開發）</div>
  </div>

  <div style="margin-top:8mm; text-align:center;">
    <p class="text-muted">本報告由 A2 AI System 生成 | 製作單位：Hostlink (HK) Limited | 日期：2026-03-12</p>
    <p class="text-muted">資料來源：Playwright 自動化審查 + 人工截圖確認（2026-03-11）| 確認人：Eric Tong</p>
    <p class="text-muted" style="margin-top:2mm; color:#dc2626;"><strong>Internal — Confidential — 僅供 Hostlink 內部使用</strong></p>
  </div>
</div>

</body>
</html>"""

def generate_pdf():
    print("Generating PDF...")
    
    # Ensure output directory exists
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    
    # Generate PDF
    html = HTML(string=HTML_CONTENT, base_url="/")
    html.write_pdf(OUTPUT_PATH)
    
    # Verify
    if os.path.exists(OUTPUT_PATH):
        size = os.path.getsize(OUTPUT_PATH)
        print(f"✅ PDF generated successfully!")
        print(f"   Path: {OUTPUT_PATH}")
        print(f"   Size: {size:,} bytes ({size/1024:.1f} KB)")
    else:
        print("❌ PDF generation failed!")

if __name__ == "__main__":
    generate_pdf()
