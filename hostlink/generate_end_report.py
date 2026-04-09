#!/usr/bin/env python3
"""
Lavish Attic ERP System — Project Completion Report Generator
Generates HTML + PDF
"""

import os
import base64
from pathlib import Path
from PIL import Image
import io

SCREENSHOT_DIR = "/home/openclaw/.openclaw/media/lavish-audit/"
OUTPUT_DIR = "/home/openclaw/.openclaw/workspace/data/hostlink/"
HTML_PATH = OUTPUT_DIR + "Lavish_End_Report.html"
PDF_PATH = OUTPUT_DIR + "Lavish_End_Report.pdf"

screenshot_count = 0

def img_to_base64(filename, max_width=750):
    """Convert screenshot to base64 with resize."""
    global screenshot_count
    path = os.path.join(SCREENSHOT_DIR, filename)
    if not os.path.exists(path):
        return None
    try:
        with Image.open(path) as img:
            # Convert to RGB if needed
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            # Resize if too wide
            w, h = img.size
            if w > max_width:
                ratio = max_width / w
                new_h = int(h * ratio)
                img = img.resize((max_width, new_h), Image.LANCZOS)
            # Save to buffer
            buf = io.BytesIO()
            img.save(buf, format='JPEG', quality=75, optimize=True)
            data = base64.b64encode(buf.getvalue()).decode()
            screenshot_count += 1
            return f'data:image/jpeg;base64,{data}'
    except Exception as e:
        print(f"  Warning: Could not process {filename}: {e}")
        return None

def screenshot_html(filenames, captions=None, max_per_row=1):
    """Generate HTML for screenshots with captions."""
    if isinstance(filenames, str):
        filenames = [filenames]
    if captions is None:
        captions = filenames
    
    html = '<div class="screenshot-grid">'
    for i, fn in enumerate(filenames):
        b64 = img_to_base64(fn)
        if b64:
            cap = captions[i] if i < len(captions) else fn
            html += f'''
            <figure class="screenshot-item">
                <img src="{b64}" alt="{cap}" loading="lazy">
                <figcaption>{cap}</figcaption>
            </figure>'''
    html += '</div>'
    return html

def ss(*filenames):
    """Shorthand: pick up to 3 screenshots, return HTML."""
    valid = []
    for fn in filenames:
        if os.path.exists(os.path.join(SCREENSHOT_DIR, fn)):
            valid.append(fn)
        if len(valid) >= 3:
            break
    if not valid:
        return '<p class="no-screenshot"><em>Screenshot not available</em></p>'
    return screenshot_html(valid)

def ss2(*filenames):
    """Shorthand: pick up to 2 screenshots for additional modules."""
    valid = []
    for fn in filenames:
        if os.path.exists(os.path.join(SCREENSHOT_DIR, fn)):
            valid.append(fn)
        if len(valid) >= 2:
            break
    if not valid:
        return '<p class="no-screenshot"><em>Screenshot not available</em></p>'
    return screenshot_html(valid)

# ─────────────────────────────────────────────
# CSS
# ─────────────────────────────────────────────
CSS = """
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: 'Inter', Arial, sans-serif;
    font-size: 10.5pt;
    color: #1a1a2e;
    background: #fff;
    line-height: 1.6;
}

/* ── PAGE BREAKS ── */
@page {
    size: A4;
    margin: 18mm 15mm 18mm 15mm;
    @top-center {
        content: "CONFIDENTIAL — Lavish Attic ERP System — Project Completion Report";
        font-size: 7pt;
        color: #888;
    }
    @bottom-right {
        content: "Page " counter(page) " of " counter(pages);
        font-size: 8pt;
        color: #888;
    }
}

/* ── COVER PAGE ── */
.cover-page {
    page-break-after: always;
    min-height: 250mm;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(160deg, #0d2137 0%, #1a3a5c 60%, #1e5480 100%);
    color: #fff;
}

.cover-logo-area {
    margin-bottom: 30px;
}

.cover-title {
    font-size: 26pt;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
    line-height: 1.2;
}

.cover-subtitle {
    font-size: 13pt;
    color: #a8c8e8;
    margin-bottom: 40px;
}

.cover-badge {
    display: inline-block;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 6px;
    padding: 4px 14px;
    font-size: 9pt;
    color: #d0e8ff;
    margin-bottom: 50px;
}

.cover-meta-box {
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 24px 40px;
    width: 100%;
    max-width: 420px;
    text-align: left;
    margin-bottom: 30px;
}

.cover-meta-row {
    display: flex;
    margin-bottom: 10px;
    font-size: 9.5pt;
}

.cover-meta-label {
    width: 120px;
    color: #a8c8e8;
    font-weight: 500;
    flex-shrink: 0;
}

.cover-meta-value {
    color: #ffffff;
    font-weight: 400;
}

.cover-divider {
    width: 60px;
    height: 3px;
    background: #4a9fd5;
    margin: 20px auto;
    border-radius: 2px;
}

.cover-confidential {
    margin-top: 30px;
    font-size: 8pt;
    color: #7aabcc;
    max-width: 380px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 6px;
    padding: 10px 16px;
}

/* ── CHAPTER PAGES ── */
.chapter-break { page-break-before: always; }

/* ── HEADINGS ── */
h1.chapter-title {
    font-size: 19pt;
    font-weight: 700;
    color: #1a3a5c;
    padding: 14px 0 10px 0;
    border-bottom: 3px solid #1a3a5c;
    margin-bottom: 20px;
}

h1.chapter-title span.ch-num {
    color: #4a9fd5;
    margin-right: 10px;
}

h2.section-title {
    font-size: 13pt;
    font-weight: 600;
    color: #1a3a5c;
    margin: 24px 0 10px 0;
    padding-left: 10px;
    border-left: 4px solid #4a9fd5;
}

h3.sub-title {
    font-size: 11pt;
    font-weight: 600;
    color: #1e4d7b;
    margin: 18px 0 8px 0;
}

/* ── ITEM CARDS ── */
.item-card {
    border: 1px solid #d0dde8;
    border-radius: 8px;
    margin-bottom: 24px;
    overflow: hidden;
    page-break-inside: avoid;
}

.item-card-header {
    background: #1a3a5c;
    color: #fff;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.item-card-header .item-num {
    background: rgba(255,255,255,0.2);
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 9pt;
    font-weight: 600;
}

.item-card-header .item-name {
    font-size: 11pt;
    font-weight: 600;
    flex: 1;
}

.item-card-header .item-price {
    font-size: 10pt;
    color: #a8d8f0;
    font-weight: 500;
}

.item-card-header .item-status {
    background: #27ae60;
    color: #fff;
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 9pt;
    font-weight: 600;
}

.item-card-body {
    padding: 14px 16px;
}

.item-meta {
    display: flex;
    gap: 16px;
    margin-bottom: 10px;
    flex-wrap: wrap;
}

.item-meta-tag {
    background: #eef4fb;
    border-radius: 4px;
    padding: 3px 10px;
    font-size: 8.5pt;
    color: #2c5f8a;
}

.item-features {
    margin: 8px 0;
    padding-left: 18px;
}

.item-features li {
    font-size: 9.5pt;
    margin-bottom: 3px;
    color: #333;
}

/* ── ADDITIONAL MODULE CARDS ── */
.addon-card {
    border: 1px solid #c8dce8;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
    page-break-inside: avoid;
}

.addon-card-header {
    background: #2c6e9e;
    color: #fff;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.addon-card-header .addon-num {
    font-size: 8.5pt;
    opacity: 0.8;
}

.addon-card-header .addon-name {
    font-size: 10.5pt;
    font-weight: 600;
    flex: 1;
}

.addon-card-header .addon-url {
    font-size: 8.5pt;
    color: #a8d8f0;
    font-family: monospace;
}

.addon-card-header .addon-value {
    font-size: 9pt;
    color: #ffe599;
    font-weight: 600;
}

.addon-card-body {
    padding: 10px 14px;
}

/* ── TABLES ── */
table.report-table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    font-size: 9.5pt;
}

table.report-table th {
    background: #1a3a5c;
    color: #fff;
    padding: 8px 12px;
    text-align: left;
    font-weight: 600;
}

table.report-table td {
    padding: 7px 12px;
    border-bottom: 1px solid #e0e8f0;
}

table.report-table tr:nth-child(even) td {
    background: #f5f9ff;
}

table.report-table tr:last-child td {
    border-bottom: none;
}

table.report-table .total-row td {
    background: #dff0d8;
    font-weight: 700;
    color: #1a3a5c;
    border-top: 2px solid #27ae60;
}

table.report-table .grand-total td {
    background: #1a3a5c;
    color: #fff;
    font-weight: 700;
    font-size: 10pt;
}

/* ── SCREENSHOT GRID ── */
.screenshot-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 12px 0;
}

figure.screenshot-item {
    flex: 1;
    min-width: 280px;
    max-width: 100%;
}

figure.screenshot-item img {
    width: 100%;
    max-width: 720px;
    border: 1px solid #c8d8e8;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    display: block;
}

figure.screenshot-item figcaption {
    font-size: 8pt;
    color: #666;
    text-align: center;
    margin-top: 4px;
    font-style: italic;
}

.no-screenshot {
    color: #999;
    font-style: italic;
    font-size: 9pt;
    padding: 8px 0;
}

/* ── FLOWCHART ── */
.flowchart-container {
    margin: 20px 0;
    padding: 20px;
    background: #f8fafc;
    border-radius: 8px;
    border: 1px solid #d0dde8;
}

.flow-section {
    margin-bottom: 24px;
}

.flow-section-title {
    font-size: 10pt;
    font-weight: 700;
    color: #1a3a5c;
    margin-bottom: 12px;
    padding: 4px 10px;
    border-radius: 4px;
    display: inline-block;
}

.flow-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 8px;
}

.flow-node {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 8.5pt;
    font-weight: 600;
    text-align: center;
    line-height: 1.3;
    min-width: 70px;
}

.flow-node-url {
    display: block;
    font-size: 7pt;
    font-weight: 400;
    opacity: 0.8;
    font-family: monospace;
    margin-top: 2px;
}

.flow-arrow {
    font-size: 14pt;
    color: #666;
    font-weight: 300;
    line-height: 1;
    padding: 0 2px;
}

.flow-label {
    font-size: 7pt;
    color: #888;
    text-align: center;
    display: block;
    margin-top: -6px;
    margin-bottom: 2px;
}

/* Node colour schemes */
.node-sales { background: #dae8fc; border: 1.5px solid #6c8ebf; color: #1a3a5c; }
.node-purchase { background: #d5e8d4; border: 1.5px solid #82b366; color: #1a3a5c; }
.node-repair { background: #ffe6cc; border: 1.5px solid #d6b656; color: #1a3a5c; }
.node-inventory { background: #e1d5e7; border: 1.5px solid #9673a6; color: #1a3a5c; }
.node-complete { background: #d5e8d4; border: 2px solid #27ae60; color: #1a5c2a; font-weight: 700; }

/* ── INFO BOXES ── */
.info-box {
    padding: 12px 16px;
    border-radius: 6px;
    margin: 14px 0;
    font-size: 9.5pt;
}

.info-box.info { background: #eef4fb; border-left: 4px solid #4a9fd5; }
.info-box.warning { background: #fff8e6; border-left: 4px solid #f39c12; }
.info-box.success { background: #eafaf1; border-left: 4px solid #27ae60; }
.info-box.danger { background: #fdecea; border-left: 4px solid #e74c3c; }

/* ── OVERVIEW TABLE ── */
.overview-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin: 16px 0;
}

.overview-cell {
    background: #f5f9ff;
    border-radius: 6px;
    padding: 12px 16px;
    border: 1px solid #d0dde8;
}

.overview-cell .oc-label {
    font-size: 8pt;
    color: #666;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
}

.overview-cell .oc-value {
    font-size: 10pt;
    color: #1a3a5c;
    font-weight: 500;
}

/* ── SUMMARY CARDS ── */
.summary-cards {
    display: flex;
    gap: 16px;
    margin: 20px 0;
}

.summary-card {
    flex: 1;
    background: #1a3a5c;
    color: #fff;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
}

.summary-card .sc-num {
    font-size: 22pt;
    font-weight: 700;
    color: #4fc3f7;
}

.summary-card .sc-label {
    font-size: 8.5pt;
    color: #a8c8e8;
    margin-top: 4px;
}

/* ── COMPLETION BANNER ── */
.completion-banner {
    background: linear-gradient(90deg, #1a3a5c, #2c6e9e);
    color: #fff;
    border-radius: 8px;
    padding: 20px 24px;
    margin: 24px 0;
    text-align: center;
}

.completion-banner h3 {
    font-size: 14pt;
    margin-bottom: 8px;
    color: #fff;
}

.completion-banner p {
    font-size: 9.5pt;
    color: #a8d8f0;
}

.check-list {
    list-style: none;
    padding: 0;
    text-align: left;
    display: inline-block;
    margin-top: 12px;
}

.check-list li {
    padding: 3px 0;
    font-size: 9.5pt;
    color: #d0eeff;
}

.check-list li::before {
    content: "✓ ";
    color: #4ade80;
    font-weight: 700;
}

/* ── LEGAL TABLE ── */
.legal-comparison td:nth-child(2) { color: #27ae60; font-weight: 600; }
.legal-comparison td:nth-child(3) { color: #e74c3c; font-weight: 600; }

/* ── TECH STACK ── */
.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 10px 0;
}

.tech-tag {
    background: #1a3a5c;
    color: #a8d8f0;
    border-radius: 4px;
    padding: 4px 12px;
    font-size: 8.5pt;
    font-family: monospace;
}

/* ── TIMELINE ── */
.timeline {
    position: relative;
    padding-left: 24px;
    margin: 16px 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #d0dde8;
}

.timeline-item {
    position: relative;
    margin-bottom: 14px;
    padding-left: 12px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #4a9fd5;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #4a9fd5;
}

.timeline-date {
    font-size: 8.5pt;
    font-weight: 700;
    color: #4a9fd5;
}

.timeline-text {
    font-size: 9.5pt;
    color: #333;
}

/* ── SIGNATURE BOX ── */
.signature-section {
    margin-top: 40px;
    border-top: 2px solid #1a3a5c;
    padding-top: 20px;
}

.signature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 20px;
}

.sig-box {
    border: 1px solid #d0dde8;
    border-radius: 6px;
    padding: 16px;
}

.sig-box .sig-title {
    font-size: 9pt;
    font-weight: 700;
    color: #1a3a5c;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.sig-line {
    border-bottom: 1px solid #333;
    height: 40px;
    margin-bottom: 6px;
}

.sig-label {
    font-size: 8pt;
    color: #666;
}

p { margin-bottom: 8px; }
strong { color: #1a3a5c; }
"""

# ─────────────────────────────────────────────
# FLOWCHART HTML (pure CSS/HTML — no graphviz)
# ─────────────────────────────────────────────
FLOWCHART_HTML = """
<div class="flowchart-container">

  <!-- A. Sales Flow -->
  <div class="flow-section">
    <div class="flow-section-title" style="background:#dae8fc; color:#1a3a5c;">
      A. Sales Flow（銷售流程）
    </div>
    <div class="flow-row">
      <div class="flow-node node-sales">Client<span class="flow-node-url">/Client</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Create Quotation</span>
      </div>
      <div class="flow-node node-sales">Quotation<span class="flow-node-url">/Quotation</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Mark as Accepted</span>
      </div>
      <div class="flow-node node-sales">Quotation Signed<span class="flow-node-url">/Quotation (Accepted)</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Create Invoice</span>
      </div>
      <div class="flow-node node-sales">Invoice<span class="flow-node-url">/Invoice</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Record Payment</span>
      </div>
      <div class="flow-node node-sales">Payment<span class="flow-node-url">/Payment</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Pickup</span>
      </div>
      <div class="flow-node node-complete">Completed</div>
    </div>
    <div class="flow-row" style="margin-top: 6px; padding-left: 380px;">
      <div class="flow-node node-sales" style="font-size:8pt;">Credit Note<span class="flow-node-url">/CreditNote</span></div>
      <span style="font-size:9pt; color:#888; padding:0 6px;">(if needed)</span>
    </div>
  </div>

  <!-- B. Purchase Flow -->
  <div class="flow-section">
    <div class="flow-section-title" style="background:#d5e8d4; color:#1a5c2a;">
      B. Purchase Flow（採購流程）
    </div>
    <div class="flow-row">
      <div class="flow-node node-purchase">Vendor<span class="flow-node-url">/Vendor</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Create PO</span>
      </div>
      <div class="flow-node node-purchase">Purchase Order<span class="flow-node-url">/PurchaseOrder</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Receive Goods</span>
      </div>
      <div class="flow-node node-purchase">Receive Products<span class="flow-node-url">/PurchaseOrder (Receive)</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Update /Item</span>
      </div>
      <div class="flow-node node-purchase">Stock Update<span class="flow-node-url">/Item + /Product</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">PO Payment</span>
      </div>
      <div class="flow-node node-complete">Payment to Vendor</div>
    </div>
  </div>

  <!-- C. Repair Flow -->
  <div class="flow-section">
    <div class="flow-section-title" style="background:#ffe6cc; color:#5c3a1a;">
      C. Repair Flow（維修流程）
    </div>
    <div class="flow-row">
      <div class="flow-node node-repair">Client<span class="flow-node-url">/Client</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Submit Repair</span>
      </div>
      <div class="flow-node node-repair">Repair Request<span class="flow-node-url">/Repair (add)</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Update State</span>
      </div>
      <div class="flow-node node-repair">In Progress<span class="flow-node-url">/Repair (In Progress)</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Create Quotation</span>
      </div>
      <div class="flow-node node-repair">Repair Quotation<span class="flow-node-url">/Repair/quotation</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Create Invoice</span>
      </div>
      <div class="flow-node node-repair">Invoice<span class="flow-node-url">/Repair/invoice</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Pickup</span>
      </div>
      <div class="flow-node node-complete">Pickup</div>
    </div>
  </div>

  <!-- D. Inventory Flow -->
  <div class="flow-section">
    <div class="flow-section-title" style="background:#e1d5e7; color:#3a1a5c;">
      D. Inventory Flow（庫存流程）
    </div>
    <div class="flow-row">
      <div class="flow-node node-inventory">Product Master<span class="flow-node-url">/Product</span></div>
      <div>
        <span class="flow-arrow">→</span>
        <span class="flow-label">Track by Serial</span>
      </div>
      <div class="flow-node node-inventory">Stock Count<span class="flow-node-url">/Item (514 items)</span></div>
      <div>
        <span class="flow-arrow">↓</span>
      </div>
    </div>
    <div class="flow-row" style="padding-left: 80px;">
      <div class="flow-node node-inventory" style="font-size:8pt;">Invoice (Sold)<span class="flow-node-url">Stock Count ▼</span></div>
      <span style="padding: 0 12px; color:#888;">|</span>
      <div class="flow-node node-inventory" style="font-size:8pt;">PO Receive<span class="flow-node-url">Stock Count ▲</span></div>
    </div>
  </div>

</div>
"""

# ─────────────────────────────────────────────
# HTML BUILDER
# ─────────────────────────────────────────────
def build_html():
    print("Building HTML report...")
    
    # Chapter 3: Contract Items
    items_html = ""
    
    # Item 1
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 1</span>
        <span class="item-name">CMS Platform</span>
        <span class="item-price">HK$10,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: / (Login)</span>
          <span class="item-meta-tag">User Management</span>
          <span class="item-meta-tag">Role-based Access Control</span>
          <span class="item-meta-tag">Event Log</span>
          <span class="item-meta-tag">User Log</span>
        </div>
        <p>The CRM platform foundation includes a secure login system, comprehensive user management module, role-based access control (RBAC), and full audit trail logging (Event Log + User Log). The system currently manages 11+ active users across 4 distinct roles.</p>
        {ss('00_login_page.png', 'r2_User.png', 'r2_Role.png')}
      </div>
    </div>"""

    # Item 2
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 2</span>
        <span class="item-name">Client Module</span>
        <span class="item-price">HK$12,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /Client</span>
          <span class="item-meta-tag">308 Clients</span>
          <span class="item-meta-tag">6 Detail Tabs</span>
          <span class="item-meta-tag">Active/Inactive Status</span>
        </div>
        <p>Full client relationship management with CRUD operations. Each client record includes complete contact information, status management (Active/Inactive), and 6 linked detail tabs: Quotations, Invoices, Payments, Repairs, Credit Notes, and Consignments. The system currently manages 308 client records.</p>
        {ss('r2_Client.png', 'r2_Client_Add.png', 'r3_Client_Detail.png')}
      </div>
    </div>"""

    # Item 3
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 3</span>
        <span class="item-name">Quotation Module</span>
        <span class="item-price">HK$15,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /Quotation</span>
          <span class="item-meta-tag">PDF Print</span>
          <span class="item-meta-tag">Email Delivery</span>
          <span class="item-meta-tag">Status Workflow</span>
          <span class="item-meta-tag">Clone</span>
        </div>
        <p>Complete quotation lifecycle management with status workflow (Draft → Sent → Accepted/Rejected). Features include PDF print, email delivery, deposit amount tracking, deposit remarks, clone functionality, and download capability. Line items support product pre-selection, custom descriptions, and discount calculation.</p>
        {ss('r2_Quotation.png', 'r2_Quotation_Add.png', 'r3a_quotation_detail.png')}
      </div>
    </div>"""

    # Item 4
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 4</span>
        <span class="item-name">Quotation Item Module</span>
        <span class="item-price">HK$8,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">Integrated in /Quotation</span>
          <span class="item-meta-tag">Pre-set Descriptions</span>
          <span class="item-meta-tag">Discount Calculation</span>
          <span class="item-meta-tag">Line Item Management</span>
        </div>
        <p>Quotation line item management is fully integrated within the Quotation module. Features include pre-set product descriptions and pricing, discount calculation per line, multi-currency support with HKD conversion, and full line item CRUD operations. Supports products, services, and custom items.</p>
        {ss('r2_Quotation_Add.png', 'r3_Quotation_Detail.png')}
      </div>
    </div>"""

    # Item 5
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 5</span>
        <span class="item-name">Invoice Module</span>
        <span class="item-price">HK$18,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /Invoice</span>
          <span class="item-meta-tag">422 Invoices</span>
          <span class="item-meta-tag">PDF Print (with Logo)</span>
          <span class="item-meta-tag">Pickup / Forfeit / Order Actions</span>
          <span class="item-meta-tag">4 Detail Tabs</span>
        </div>
        <p>Comprehensive invoice management with full status workflow (Pending / Paid / Partially Paid / Void). Advanced features include PDF printing (standard and with company logo), email delivery, clone, credit note generation, delivery note creation, and three line-item hidden actions: <strong>Pickup</strong> (record item collection), <strong>Forfeit</strong> (record deposit forfeiture), and <strong>Order</strong> (link to Purchase Order). Four detail tabs track Pickups, Documents, Credit Notes, and Delivery Notes.</p>
        {ss('r2_Invoice.png', 'r3_Invoice_Detail.png', 'r3_actions_invoice_line_menu_open.png')}
      </div>
    </div>"""

    # Item 5b - additional invoice screenshots
    items_html += f"""
    <div class="screenshot-grid" style="margin: -10px 0 20px 0;">
      {screenshot_html(['r3_actions_invoice_forfeit.png', 'r3_actions_invoice_pickup.png', 'r3_actions_invoice_tab_credit_notes.png'],
                       ['Forfeit Action Dialog', 'Pickup Action Dialog', 'Credit Notes Tab'])}
    </div>"""

    # Item 6
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 6</span>
        <span class="item-name">Product Module</span>
        <span class="item-price">HK$15,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /Product</span>
          <span class="item-meta-tag">331 Products</span>
          <span class="item-meta-tag">Stock Count Display</span>
          <span class="item-meta-tag">Warehouse Location</span>
          <span class="item-meta-tag">Consignment Marking</span>
        </div>
        <p>Product catalogue management with full CRUD. The product list prominently displays <strong>Stock Count</strong>, <strong>Sold</strong>, and <strong>Unreceived Quantity</strong> columns in real-time. Each product supports category classification, brand association, multi-currency pricing, warehouse location assignment, and consignment ownership marking. Product detail page includes tabs for Invoice Lines, Purchase Order Lines, Documents, Product Image, Items (serial tracking), Stock Adjustment, and Parts.</p>
        {ss('r2_Product.png', 'r2_Product_Add.png', 'r3_stock_01_product_list.png')}
      </div>
    </div>"""

    # Item 7
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 7</span>
        <span class="item-name">Staff Module (User Management)</span>
        <span class="item-price">HK$6,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /User</span>
          <span class="item-meta-tag">11+ Active Users</span>
          <span class="item-meta-tag">4 Roles</span>
          <span class="item-meta-tag">ACTIVE/INACTIVE Tabs</span>
        </div>
        <p>Staff management is implemented as the CMS User Management system at /User. The system supports unlimited user accounts (currently 11+ users) with Active/Inactive status tabs, role assignment, and full CRUD operations. Each user can be assigned one of 4 defined roles with granular permission settings.</p>
        {ss('r2_User.png', 'r2_Role.png')}
      </div>
    </div>"""

    # Item 8
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 8</span>
        <span class="item-name">Product Stock Take</span>
        <span class="item-price">HK$15,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /Product + /Item</span>
          <span class="item-meta-tag">514 Serial Items Tracked</span>
          <span class="item-meta-tag">Stock Count Columns</span>
          <span class="item-meta-tag">Ownership Marking</span>
        </div>
        <p>Stock take functionality is delivered through two integrated components: (1) <strong>/Product</strong> — displays real-time Stock Count, Sold, and Unreceived Quantity for each product, and (2) <strong>/Item</strong> — tracks individual items at serial number level (514 items recorded). Product ownership is clearly marked (owned vs consignment), and warehouse locations are maintained. <em>Note: Per Eric Tong's confirmation, Excel export is not required for this item.</em></p>
        {ss('r3_stock_01_product_list.png', 'r3_stock_03_stock_Item.png', 'r3_stock_02_product_detail.png')}
      </div>
    </div>"""

    # Item 9
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 9</span>
        <span class="item-name">Account Module (Payment Management)</span>
        <span class="item-price">HK$20,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /Payment</span>
          <span class="item-meta-tag">Full CRUD</span>
          <span class="item-meta-tag">Cash / Cheque / Bank Transfer</span>
          <span class="item-meta-tag">Invoice Linking</span>
          <span class="item-meta-tag">AR Tracking</span>
        </div>
        <p>Payment management system covering all financial transactions. Supports multiple payment methods (Cash, Cheque, Bank Transfer, Credit Card), direct linkage to invoices, and account receivable tracking. Each payment record captures date, client, method, invoice reference, currency, and amount. The system provides a complete audit trail of all payments received.</p>
        {ss('r2_Payment.png', 'r2_Payment_Add.png', 'r3_account_payment_list.png')}
      </div>
    </div>"""

    # Item 10
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 10</span>
        <span class="item-name">Dashboard</span>
        <span class="item-price">HK$10,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: / (Dashboard)</span>
          <span class="item-meta-tag">KPI Cards</span>
          <span class="item-meta-tag">Activity Feed</span>
          <span class="item-meta-tag">Client Request: Hidden from Staff</span>
        </div>
        <div class="info-box warning">
          <strong>⚠️ Note:</strong> The Dashboard module was fully developed and delivered. Following client's own request, the dashboard was subsequently hidden from staff access, as Lavish management determined that staff should not have visibility into company revenue figures given the high value of luxury watch transactions. This decision was made by Lavish management and does not affect project completion status.
        </div>
        <p>Delivered features: 3 KPI cards (Total Clients: 308, Total Invoices: 422, Active Quotations), and a Recent Activity Feed displaying the latest system operations in real-time.</p>
        {ss('r2_Dashboard.png', '03_dashboard.png')}
      </div>
    </div>"""

    # Item 11
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 11</span>
        <span class="item-name">Report Module</span>
        <span class="item-price">HK$20,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /Report/brand, /Report/product</span>
          <span class="item-meta-tag">Brand Sales Report</span>
          <span class="item-meta-tag">Product Revenue Report</span>
          <span class="item-meta-tag">CSV Export</span>
          <span class="item-meta-tag">Multi-currency</span>
        </div>
        <p>Two business intelligence reports with monthly date range filtering and CSV export capability. <strong>Brand Revenue Report</strong> (/Report/brand): aggregates sales by brand code, displaying quantity and revenue per currency (HKD/CHF/USD/EUR). <strong>Product Revenue Report</strong> (/Report/product): provides product-level revenue analysis with brand and type classification. Both reports support CSV export and multi-currency display. <em>Client has confirmed acceptance of the current report format as the final version.</em></p>
        {ss('r3_reports_brand_generated_2025.png', 'r3_reports_brand_export_csv_visible.png', 'r3_reports_product_generated.png')}
      </div>
    </div>"""

    # Item 12
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 12</span>
        <span class="item-name">Account Access Levels</span>
        <span class="item-price">HK$18,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">URL: /Role, /User</span>
          <span class="item-meta-tag">4 Roles (exceeds contract's 3)</span>
          <span class="item-meta-tag">Module-level Permissions</span>
          <span class="item-meta-tag">Unlimited Users</span>
        </div>
        <p>Granular role-based access control system. The system delivers 4 defined roles (exceeding the contracted 3 access levels), with permission control at Module → Function → Field level. Currently manages 11+ user accounts with no user limit. Complete audit trails are maintained through System Event Log and User Activity Log.</p>
        {ss('r2_Role.png', 'r2_User.png')}
      </div>
    </div>"""

    # Item 13
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 13</span>
        <span class="item-name">Export Report Function</span>
        <span class="item-price">HK$10,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">CSV Export</span>
          <span class="item-meta-tag">Brand Report Export</span>
          <span class="item-meta-tag">Product Report Export</span>
        </div>
        <p>CSV export functionality is implemented in both the Brand Revenue Report and Product Revenue Report. After generating a report, a prominent green "EXPORT CSV" button appears, allowing users to download the complete report data in CSV format for further analysis in Excel or other tools.</p>
        {ss('r3_reports_brand_export_csv_visible.png')}
      </div>
    </div>"""

    # Item 14
    items_html += f"""
    <div class="item-card">
      <div class="item-card-header">
        <span class="item-num">Item 14</span>
        <span class="item-name">Responsive View</span>
        <span class="item-price">HK$20,000</span>
        <span class="item-status">✓ Completed</span>
      </div>
      <div class="item-card-body">
        <div class="item-meta">
          <span class="item-meta-tag">Quasar Framework</span>
          <span class="item-meta-tag">Mobile / Tablet / Desktop</span>
          <span class="item-meta-tag">Windows / macOS / iOS / Android</span>
          <span class="item-meta-tag">Cross-browser Compatible</span>
        </div>
        <p>The entire CRM system is built on <strong>Quasar Framework</strong> (Vue.js), which provides native responsive design across all device types and screen sizes. The system is fully compatible with major browsers on all platforms: Windows, macOS, iOS, and Android. The responsive layout automatically adapts navigation, tables, and forms for optimal usability on mobile, tablet, and desktop viewports.</p>
        <div class="info-box info">
          <strong>Technical Note:</strong> Quasar Framework is a production-grade Vue.js framework specifically designed for responsive, cross-platform applications, ensuring long-term maintainability and device compatibility without additional development effort.
        </div>
      </div>
    </div>"""

    # Chapter 4: Additional modules
    addon_html = ""
    
    addons = [
        ("1", "Brand Management", "/Brand", "HK$5,000",
         "Centralised management of luxury watch brands. Supports brand codes and names used across the entire system (41 brands tracked). Essential for report categorisation and product organisation.",
         ['r2_Brand.png', 'r2_Brand_Add.png', 'r3_rows_Brand.png']),
        
        ("2", "Vendor Management", "/Vendor",  "HK$8,000",
         "Complete supplier/vendor management with contact details, address, balance tracking, and related Purchase Orders. Supports multi-currency vendor relationships and links to Debit Notes and Shipping Invoices.",
         ['r2_Vendor.png', 'r2_Vendor_Add.png', 'r3_stock_07_vendor_list.png']),
        
        ("3", "Purchase Order Module", "/PurchaseOrder", "HK$15,000",
         "Full procurement workflow: create POs with line items, send to vendors, receive goods (updates /Item stock), record payments, link expenses and debit notes. Tracks Payment Status and Receive Status with full audit trail.",
         ['r2_PurchaseOrder.png', 'r3_PO_Detail.png']),
        
        ("4", "Repair Module", "/Repair", "HK$20,000",
         "Dedicated watch repair management system with full lifecycle tracking. Records watch details (brand, model, serial, case condition, movement status), repair state workflow (In Progress → Wait For Pickup → Finished), linked invoices, expenses, and repair quotations.",
         ['r2_Repair.png', 'r3_Repair_Detail.png']),
        
        ("5", "Credit Note", "/CreditNote", "HK$8,000",
         "Credit note management linked to client accounts and invoices. Supports issuance, balance tracking, and printing. Automatically reflects in client balance and invoice payment records.",
         ['r2_CreditNote.png', 'r3_rows_CreditNote.png']),
        
        ("6", "Debit Note", "/DebitNote", "HK$5,000",
         "Debit note management for vendor purchase adjustments. Links to Purchase Orders and tracks remaining amounts for vendor account management.",
         ['r3_rows_DebitNote.png']),
        
        ("7", "Return Request", "/ReturnRequest", "HK$8,000",
         "Product return management linking returns to original Purchase Orders and Items. Tracks return quantities, received quantities, and return status for vendor returns.",
         ['r2_ReturnRequest.png', 'r3_rows_ReturnRequest.png']),
        
        ("8", "Invoice Line Management", "/InvoiceLine", "HK$5,000",
         "Standalone invoice line item viewer for cross-invoice analysis. Displays all line items with serial numbers, pickup status, forfeit amounts, PO linkages, and HKD equivalents across all invoices.",
         ['r2_InvoiceLine.png', 'r3a_invoice_line_hover.png']),
        
        ("9", "Transaction Records", "/Transaction", "HK$5,000",
         "Financial transaction ledger recording all Purchase Order payments with date, currency, amount, payment method, and reference. Provides a financial audit trail for procurement activities.",
         ['r3_account_transaction_list.png', 'r3_account_transaction_detail.png']),
        
        ("10", "Expense Management", "/Expense", "HK$8,000",
         "General expense tracking with document upload capability. Records date, name, amount, currency, vendor linkage, payment method, and status (Paid/Not Paid). Supports receipt/document attachments for each expense record.",
         ['r2_Expense.png', 'r3_account_expense_list.png']),
        
        ("11", "Service Items", "/Service", "HK$5,000",
         "Pre-defined service catalogue for repair and invoice line items. Supports service name, description, currency pricing, cost tracking, and repair/non-repair classification. Currently 9 service items defined.",
         ['r2_Service.png', 'r2_Service_Add.png']),
        
        ("12", "Currency Management", "/Currency", "HK$3,000",
         "Multi-currency support with exchange rate management. Currently supports 9 currencies (HKD, USD, EUR, CHF, GBP, and others) with configurable exchange rates. All financial modules support currency selection with automatic HKD conversion.",
         ['r2_Currency.png']),
        
        ("13", "File Manager", "/FileManager", "HK$3,000",
         "System-wide file management for documents, images, and attachments. Provides a centralised repository for all uploaded files with name, modification date, and size tracking.",
         ['r2_FileManager.png']),
        
        ("14", "Custom Field", "/CustomField", "HK$5,000",
         "Dynamic custom field configuration allowing administrators to extend any module with additional data fields. Supports multiple field types with validation rules, without requiring code changes.",
         ['r2_CustomField.png']),
        
        ("15", "Multi-currency Support (System-wide)", "All Modules", "HK$10,000",
         "Comprehensive multi-currency architecture across the entire CRM. All financial modules (Invoice, Quotation, Purchase Order, Payment, Expense, Credit Note) support 9 currencies with configurable exchange rates and automatic HKD conversion. Reports aggregate revenue by currency for accurate financial analysis.",
         ['r2_Currency.png']),
    ]
    
    for num, name, url, value, desc, screenshots in addons:
        valid_ss = [f for f in screenshots if os.path.exists(os.path.join(SCREENSHOT_DIR, f))][:2]
        ss_html = screenshot_html(valid_ss) if valid_ss else '<p class="no-screenshot"><em>Screenshot not available</em></p>'
        addon_html += f"""
        <div class="addon-card">
          <div class="addon-card-header">
            <span class="addon-num">#{num}</span>
            <span class="addon-name">{name}</span>
            <span class="addon-url">{url}</span>
            <span class="addon-value">{value}</span>
          </div>
          <div class="addon-card-body">
            <p style="font-size:9.5pt; margin-bottom:10px;">{desc}</p>
            {ss_html}
          </div>
        </div>"""

    # ─── ASSEMBLE FULL HTML ───
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lavish Attic ERP — Project Completion Report</title>
<style>
{CSS}
</style>
</head>
<body>

<!-- ════════════════════════════════════════════════════
     COVER PAGE
════════════════════════════════════════════════════ -->
<div class="cover-page">
  <div class="cover-logo-area">
    <div style="font-size:12pt; font-weight:700; color:#a8c8e8; letter-spacing:3px; text-transform:uppercase;">HOSTLINK (HK) LIMITED</div>
    <div class="cover-divider"></div>
  </div>

  <div class="cover-title">Lavish Attic ERP System</div>
  <div class="cover-subtitle">Project Completion Report</div>
  <div class="cover-badge">CONFIDENTIAL DOCUMENT</div>

  <div class="cover-meta-box">
    <div class="cover-meta-row">
      <div class="cover-meta-label">Client</div>
      <div class="cover-meta-value">The Lavish Attic and Enthrone Luxury Company Limited</div>
    </div>
    <div class="cover-meta-row">
      <div class="cover-meta-label">Developer</div>
      <div class="cover-meta-value">Hostlink (HK) Limited</div>
    </div>
    <div class="cover-meta-row">
      <div class="cover-meta-label">Contract Ref.</div>
      <div class="cover-meta-value">Quotation No. 00008412</div>
    </div>
    <div class="cover-meta-row">
      <div class="cover-meta-label">Contract Date</div>
      <div class="cover-meta-value">4 December 2024</div>
    </div>
    <div class="cover-meta-row">
      <div class="cover-meta-label">Report Date</div>
      <div class="cover-meta-value">12 March 2026</div>
    </div>
    <div class="cover-meta-row">
      <div class="cover-meta-label">Contract Value</div>
      <div class="cover-meta-value" style="color:#ffe599; font-weight:700;">HK$213,220</div>
    </div>
  </div>

  <div class="cover-confidential">
    <strong>CONFIDENTIAL</strong><br>
    This document contains commercially sensitive information. It is intended solely for the use of the named parties. Unauthorised disclosure, copying, or distribution is strictly prohibited.
  </div>
</div>


<!-- ════════════════════════════════════════════════════
     CHAPTER 1: PROJECT OVERVIEW
════════════════════════════════════════════════════ -->
<div class="chapter-break">
<h1 class="chapter-title"><span class="ch-num">Chapter 1</span>Project Overview</h1>

<div class="overview-grid">
  <div class="overview-cell">
    <div class="oc-label">Project Name</div>
    <div class="oc-value">Lavish Attic ERP / CRM System</div>
  </div>
  <div class="overview-cell">
    <div class="oc-label">System URL</div>
    <div class="oc-value" style="font-family:monospace;">https://crm-thelavishattic.hlhk.net</div>
  </div>
  <div class="overview-cell">
    <div class="oc-label">Client</div>
    <div class="oc-value">The Lavish Attic and Enthrone Luxury Company Limited</div>
  </div>
  <div class="overview-cell">
    <div class="oc-label">Developer</div>
    <div class="oc-value">Hostlink (HK) Limited<br><span style="font-size:8.5pt; color:#666;">www.hostlink.com.hk</span></div>
  </div>
  <div class="overview-cell">
    <div class="oc-label">Contract Reference</div>
    <div class="oc-value">Quotation No. 00008412<br><span style="font-size:8.5pt; color:#666;">Signed: 4 December 2024</span></div>
  </div>
  <div class="overview-cell">
    <div class="oc-label">Contract Signatories</div>
    <div class="oc-value">Piano Chow (Lavish)<br>Eric Tong (Hostlink)</div>
  </div>
</div>

<h2 class="section-title">1.1 Project Objectives</h2>
<p>The Lavish Attic ERP System was commissioned to provide a comprehensive Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) platform tailored to the operations of a luxury watch retail business. The system was designed to:</p>
<ul style="padding-left:20px; margin:10px 0 16px 0; font-size:9.5pt; line-height:1.8;">
  <li>Centralise client relationship management for 300+ high-value clients</li>
  <li>Streamline the entire sales cycle from quotation through invoice to payment collection</li>
  <li>Manage complex product inventory with serial number-level tracking across multiple currencies</li>
  <li>Handle watch repair workflow management from intake to delivery</li>
  <li>Provide procurement management for vendor relationships and purchase orders</li>
  <li>Deliver business intelligence through sales and revenue reports with multi-currency support</li>
  <li>Enforce role-based access control suitable for a multi-staff luxury retail environment</li>
</ul>

<h2 class="section-title">1.2 System Technical Architecture</h2>
<div class="tech-stack">
  <span class="tech-tag">Quasar Framework</span>
  <span class="tech-tag">Vue.js</span>
  <span class="tech-tag">RESTful API</span>
  <span class="tech-tag">MySQL Database</span>
  <span class="tech-tag">PHP Backend</span>
  <span class="tech-tag">VPS Hosting</span>
  <span class="tech-tag">SSL Certificate</span>
  <span class="tech-tag">Multi-currency Engine</span>
</div>
<p>The system is built on <strong>Quasar Framework</strong> (Vue.js), a production-grade progressive web application framework providing native responsive design, Material UI components, and cross-platform compatibility. The backend is powered by a RESTful API architecture with MySQL database, ensuring data integrity and scalability. The system is hosted on a dedicated VPS with SSL encryption.</p>

<h2 class="section-title">1.3 Development Timeline</h2>
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">4 December 2024</div>
    <div class="timeline-text">Quotation No. 00008412 signed by both parties (Piano Chow + Eric Tong). Contract value: HK$213,220. Project officially commences.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">Q1–Q4 2025</div>
    <div class="timeline-text">Development phases: Core CRM modules (Client, Quotation, Invoice, Payment), Product &amp; Stock management, Report module, Access control system. All 14 contracted modules delivered progressively.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2025 (Concurrent)</div>
    <div class="timeline-text">Additional modules developed beyond contract scope: Repair Module, Purchase Order, Vendor Management, Credit Note, Expense Management, and 11 further enhancements totalling ~HK$113,000 in added value.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2025–2026</div>
    <div class="timeline-text">System deployed to production. Client confirms acceptance of report module format. System actively used with 308 clients, 422 invoices, and 514 inventory items tracked.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">12 March 2026</div>
    <div class="timeline-text">Project Completion Report issued. All 14/14 contracted deliverables confirmed complete.</div>
  </div>
</div>

<div class="summary-cards">
  <div class="summary-card">
    <div class="sc-num">14/14</div>
    <div class="sc-label">Contract Items Delivered</div>
  </div>
  <div class="summary-card">
    <div class="sc-num">308</div>
    <div class="sc-label">Clients in System</div>
  </div>
  <div class="summary-card">
    <div class="sc-num">422</div>
    <div class="sc-label">Invoices Processed</div>
  </div>
  <div class="summary-card">
    <div class="sc-num">514</div>
    <div class="sc-label">Stock Items Tracked</div>
  </div>
</div>

</div>


<!-- ════════════════════════════════════════════════════
     CHAPTER 2: SYSTEM FLOW CHART
════════════════════════════════════════════════════ -->
<div class="chapter-break">
<h1 class="chapter-title"><span class="ch-num">Chapter 2</span>CRM System Flow Chart</h1>

<p>The following diagrams illustrate the four primary business workflows implemented within the Lavish Attic ERP System. Each node indicates the corresponding system module URL.</p>

{FLOWCHART_HTML}

<h2 class="section-title">2.1 Flow Descriptions</h2>

<h3 class="sub-title">A. Sales Flow</h3>
<p>The sales lifecycle begins with client creation (/Client) and progresses through quotation generation (/Quotation) with deposit tracking. Upon client acceptance, an invoice (/Invoice) is issued. Payments (/Payment) are recorded against the invoice, and individual line items can be marked as Picked Up, Forfeited (deposit confiscation), or linked to a Purchase Order. Credit Notes (/CreditNote) may be issued as needed.</p>

<h3 class="sub-title">B. Purchase Flow</h3>
<p>Procurement starts with vendor setup (/Vendor) followed by Purchase Order creation (/PurchaseOrder). Upon goods receipt, the Receive function updates individual item serial records (/Item) and product stock counts (/Product). Vendor payments are recorded within the PO module, with optional expense and debit note linkage.</p>

<h3 class="sub-title">C. Repair Flow</h3>
<p>Watch repair management begins with client submission (/Repair/add), recording watch details, condition report, and warranty status. The repair progresses through states (In Progress → Wait For Pickup → Finished). Repair quotations (/Repair/quotation) and invoices (/Repair/invoice) are generated directly from the repair record. Expenses (/Repair/expense) track parts and service costs.</p>

<h3 class="sub-title">D. Inventory Flow</h3>
<p>Product records (/Product) maintain aggregate stock counts (Stock Count, Sold, Unreceived). Individual items are tracked at serial number level in /Item (514 records). Stock Count decreases upon invoice completion; stock increases upon Purchase Order receipt. Consignment items are distinctly marked from owned inventory.</p>

</div>


<!-- ════════════════════════════════════════════════════
     CHAPTER 3: CONTRACT SCOPE & DELIVERY
════════════════════════════════════════════════════ -->
<div class="chapter-break">
<h1 class="chapter-title"><span class="ch-num">Chapter 3</span>Contract Scope &amp; Delivery Status</h1>
<p style="color:#666; font-style:italic; margin-bottom:16px;">Quotation No. 00008412 — Development Items</p>

<h2 class="section-title">3.1 Contract Financial Summary</h2>
<table class="report-table">
  <thead><tr><th>Item</th><th>Description</th><th style="text-align:right;">Amount</th></tr></thead>
  <tbody>
    <tr><td>CRM Development</td><td>14 Functional Modules (Items 1–14)</td><td style="text-align:right;">HK$197,000</td></tr>
    <tr><td>VPS Hosting</td><td>12 Months Dedicated Server</td><td style="text-align:right;">HK$5,400</td></tr>
    <tr><td>Software Maintenance</td><td>12 Months Post-delivery Support</td><td style="text-align:right;">HK$18,000</td></tr>
    <tr><td>SSL Certificate</td><td>Annual SSL (Optional)</td><td style="text-align:right;">HK$1,500</td></tr>
    <tr><td>Adjustment</td><td>Quotation rounding / other items</td><td style="text-align:right;">(HK$8,680)</td></tr>
    <tr class="grand-total"><td colspan="2"><strong>Contract Total (Quotation 8412)</strong></td><td style="text-align:right;"><strong>HK$213,220</strong></td></tr>
  </tbody>
</table>

<h2 class="section-title">3.2 Delivery Status — All 14 Items</h2>
<div class="info-box success">
  <strong>✓ 14/14 Contract Items Delivered</strong> — All functional modules specified in Quotation No. 00008412 have been developed, tested, and deployed to production. The system is actively in use.
</div>

{items_html}

</div>


<!-- ════════════════════════════════════════════════════
     CHAPTER 4: ADDITIONAL DEVELOPMENT
════════════════════════════════════════════════════ -->
<div class="chapter-break">
<h1 class="chapter-title"><span class="ch-num">Chapter 4</span>Additional Development</h1>
<p style="color:#666; font-style:italic; margin-bottom:16px;">Features Developed Beyond Contract Scope</p>

<div class="info-box info">
  <strong>About This Chapter:</strong> The following 15 modules were developed by Hostlink above and beyond the scope of Quotation No. 00008412. These enhancements were initiated by Hostlink to better serve Lavish's business operations and are provided at no additional cost to the client under the signed contract. Their combined estimated development value is approximately <strong>HK$113,000</strong>.
</div>

{addon_html}

<h2 class="section-title">4.1 Additional Development Value Summary</h2>
<table class="report-table">
  <thead><tr><th>#</th><th>Module</th><th>URL</th><th style="text-align:right;">Est. Value</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Brand Management</td><td>/Brand</td><td style="text-align:right;">HK$5,000</td></tr>
    <tr><td>2</td><td>Vendor Management</td><td>/Vendor</td><td style="text-align:right;">HK$8,000</td></tr>
    <tr><td>3</td><td>Purchase Order</td><td>/PurchaseOrder</td><td style="text-align:right;">HK$15,000</td></tr>
    <tr><td>4</td><td>Repair Module</td><td>/Repair</td><td style="text-align:right;">HK$20,000</td></tr>
    <tr><td>5</td><td>Credit Note</td><td>/CreditNote</td><td style="text-align:right;">HK$8,000</td></tr>
    <tr><td>6</td><td>Debit Note</td><td>/DebitNote</td><td style="text-align:right;">HK$5,000</td></tr>
    <tr><td>7</td><td>Return Request</td><td>/ReturnRequest</td><td style="text-align:right;">HK$8,000</td></tr>
    <tr><td>8</td><td>Invoice Line Management</td><td>/InvoiceLine</td><td style="text-align:right;">HK$5,000</td></tr>
    <tr><td>9</td><td>Transaction Records</td><td>/Transaction</td><td style="text-align:right;">HK$5,000</td></tr>
    <tr><td>10</td><td>Expense Management</td><td>/Expense</td><td style="text-align:right;">HK$8,000</td></tr>
    <tr><td>11</td><td>Service Items</td><td>/Service</td><td style="text-align:right;">HK$5,000</td></tr>
    <tr><td>12</td><td>Currency Management</td><td>/Currency</td><td style="text-align:right;">HK$3,000</td></tr>
    <tr><td>13</td><td>File Manager</td><td>/FileManager</td><td style="text-align:right;">HK$3,000</td></tr>
    <tr><td>14</td><td>Custom Field</td><td>/CustomField</td><td style="text-align:right;">HK$5,000</td></tr>
    <tr><td>15</td><td>Multi-currency Support (System-wide)</td><td>All Modules</td><td style="text-align:right;">HK$10,000</td></tr>
    <tr class="total-row"><td colspan="3"><strong>Total Additional Development Value</strong></td><td style="text-align:right;"><strong>~HK$113,000</strong></td></tr>
  </tbody>
</table>

</div>


<!-- ════════════════════════════════════════════════════
     CHAPTER 5: FINANCIAL SUMMARY
════════════════════════════════════════════════════ -->
<div class="chapter-break">
<h1 class="chapter-title"><span class="ch-num">Chapter 5</span>Financial Summary</h1>

<h2 class="section-title">5.1 Total Delivery Value Analysis</h2>
<table class="report-table">
  <thead><tr><th>Component</th><th>Description</th><th style="text-align:right;">Value</th></tr></thead>
  <tbody>
    <tr><td>Quotation 8412 (Contracted)</td><td>14 modules + hosting + maintenance + SSL</td><td style="text-align:right;">HK$213,220</td></tr>
    <tr><td>Additional Development</td><td>15 extra modules beyond contract scope</td><td style="text-align:right;">~HK$113,000</td></tr>
    <tr class="grand-total"><td colspan="2"><strong>Total Delivery Value by Hostlink</strong></td><td style="text-align:right;"><strong>~HK$326,220</strong></td></tr>
  </tbody>
</table>

<div class="info-box success">
  <strong>Key Finding:</strong> Hostlink has delivered approximately <strong>HK$326,220</strong> of total value against a contracted amount of HK$213,220 — representing a value premium of ~53% above contract. The additional HK$113,000 in development was provided at no additional charge to the client.
</div>

<h2 class="section-title">5.2 Contract Validity — Quotation 8412 vs 8412.1</h2>
<p>For the avoidance of doubt, the following clarification is provided regarding the two quotation documents:</p>

<table class="report-table legal-comparison">
  <thead><tr><th>Attribute</th><th>Quotation 8412</th><th>Quotation 8412.1</th></tr></thead>
  <tbody>
    <tr><td>Issue Date</td><td>4 December 2024</td><td>31 October 2025</td></tr>
    <tr><td>Contract Amount</td><td>HK$213,220</td><td>HK$143,400</td></tr>
    <tr><td>Signed by Client</td><td>✓ Piano Chow (Lavish)</td><td>✗ Not Signed</td></tr>
    <tr><td>Signed by Developer</td><td>✓ Eric Tong (Hostlink)</td><td>✗ Not Signed</td></tr>
    <tr><td>Legal Status</td><td>✓ Legally Binding Contract</td><td>✗ Draft Only — No Legal Effect</td></tr>
    <tr><td>Governing Document</td><td>✓ YES</td><td>✗ NO</td></tr>
  </tbody>
</table>

<div class="info-box warning">
  <strong>Important Legal Notice:</strong> Quotation No. 00008412.1 (dated 31 October 2025, HK$143,400) is an <strong>unsigned draft document</strong> and does not constitute a valid contract or amendment to the original agreement. It has no legal effect. The sole legally binding contract between Hostlink (HK) Limited and The Lavish Attic and Enthrone Luxury Company Limited is Quotation No. 00008412, signed by both parties on 4 December 2024.
</div>

<h2 class="section-title">5.3 TVP (Technology Voucher Programme) Clarification</h2>
<p>Lavish applied for the Government's Technology Voucher Programme (TVP) to subsidise the CRM system cost. The application was unsuccessful. For the record:</p>
<ul style="padding-left:20px; margin:10px 0; font-size:9.5pt; line-height:1.8;">
  <li>Quotation 8412 Item 24 "Funding Management" — Optional item, <strong>unchecked and not contracted</strong></li>
  <li>Quotation 8412 Item 25 "Audit Fee" — Optional item, <strong>unchecked and not contracted</strong></li>
  <li>Hostlink was <strong>not engaged</strong> for TVP application assistance and received <strong>no payment</strong> for such services</li>
  <li>The outcome of Lavish's TVP application is entirely independent of Hostlink's contractual obligations</li>
  <li><strong>Conclusion:</strong> The TVP rejection provides no basis for any price reduction or compensation claim against Hostlink</li>
</ul>
</div>


<!-- ════════════════════════════════════════════════════
     CHAPTER 6: KNOWN ISSUES & RECOMMENDATIONS
════════════════════════════════════════════════════ -->
<div class="chapter-break">
<h1 class="chapter-title"><span class="ch-num">Chapter 6</span>Known Issues &amp; Recommendations</h1>

<h2 class="section-title">6.1 Pending Bug Fixes</h2>
<p>The following minor bugs have been identified and are pending correction. Hostlink acknowledges these issues and commits to resolving them as part of the post-delivery maintenance obligation.</p>

<table class="report-table">
  <thead><tr><th>#</th><th>Issue Description</th><th>Affected Module</th><th>Severity</th><th>Recommended Action</th></tr></thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Invoice PDF filename format error — generated filename does not follow the expected naming convention</td>
      <td>Invoice (/Invoice)</td>
      <td><span style="color:#f39c12; font-weight:600;">Low</span></td>
      <td>Schedule fix in next maintenance cycle</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Credit Note default status incorrectly set to "Paid by Credit Note" upon creation, when it should default to a pending state</td>
      <td>Credit Note (/CreditNote)</td>
      <td><span style="color:#f39c12; font-weight:600;">Low</span></td>
      <td>Schedule fix in next maintenance cycle</td>
    </tr>
  </tbody>
</table>

<div class="info-box info">
  <strong>Note:</strong> Both issues are cosmetic/workflow bugs with low business impact. Neither issue prevents core system functionality from operating. Hostlink will include these fixes in the upcoming maintenance release.
</div>

<h2 class="section-title">6.2 Out-of-Scope Feature Requests</h2>
<p>The following requests received from Lavish during the project are identified as new features outside the scope of Quotation 8412:</p>

<table class="report-table">
  <thead><tr><th>#</th><th>Request</th><th>Classification</th><th>Recommendation</th></tr></thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Deposit Request Template — a dedicated printable/emailable document for collecting initial deposits from clients</td>
      <td><span style="color:#2c6e9e; font-weight:600;">New Feature</span></td>
      <td>Scope as separate quotation. Estimated development: HK$6,000–HK$10,000 depending on specifications</td>
    </tr>
  </tbody>
</table>

<div class="info-box warning">
  <strong>Important:</strong> The above feature requests are not included within the contracted scope of Quotation 8412. Should Lavish wish to proceed with these enhancements, Hostlink will provide a separate quotation. Implementation is subject to a new agreement.
</div>

<h2 class="section-title">6.3 System Maintenance Recommendations</h2>
<ul style="padding-left:20px; margin:10px 0; font-size:9.5pt; line-height:1.9;">
  <li>Continue with the contracted 12-month software maintenance plan to ensure timely bug fixes and security updates</li>
  <li>Renew VPS hosting and SSL certificate annually to maintain system availability and security</li>
  <li>Consider periodic database optimisation as transaction volumes grow</li>
  <li>Review and update exchange rates in /Currency regularly to maintain accurate multi-currency reporting</li>
  <li>Maintain regular database backups via the System → Database → Backup module</li>
</ul>
</div>


<!-- ════════════════════════════════════════════════════
     CHAPTER 7: CONCLUSION
════════════════════════════════════════════════════ -->
<div class="chapter-break">
<h1 class="chapter-title"><span class="ch-num">Chapter 7</span>Conclusion</h1>

<div class="completion-banner">
  <h3>🏆 Project Successfully Completed</h3>
  <p>Hostlink (HK) Limited has fully fulfilled all contractual obligations under Quotation No. 00008412</p>
  <ul class="check-list">
    <li>14 out of 14 contracted functional modules delivered and operational</li>
    <li>System actively deployed at https://crm-thelavishattic.hlhk.net</li>
    <li>308 clients, 422 invoices, and 514 inventory items actively managed</li>
    <li>15 additional modules developed beyond contract scope (~HK$113,000 added value)</li>
    <li>Multi-currency support for 9 currencies implemented system-wide</li>
    <li>Role-based access control with 4 roles and 11+ staff users</li>
    <li>Complete audit trail and system logging in place</li>
  </ul>
</div>

<h2 class="section-title">7.1 Summary of Deliverables</h2>
<p>The Lavish Attic ERP System represents a comprehensive, purpose-built CRM and ERP solution tailored to the unique requirements of a luxury watch retail business. The system covers the complete business lifecycle from client acquisition through sales, procurement, inventory management, repair services, and financial reporting.</p>

<p>Beyond the 14 contracted modules, Hostlink proactively developed an additional 15 modules — including the Repair Module, Purchase Order system, Vendor Management, Credit Notes, and Multi-currency Support — at no additional cost. This demonstrates Hostlink's commitment to delivering a solution that truly serves Lavish's operational needs.</p>

<h2 class="section-title">7.2 Project Completion Certification</h2>
<div class="info-box success">
  <strong>Hostlink (HK) Limited hereby formally declares</strong> that the Lavish Attic ERP System development project has been completed in full accordance with the specifications and deliverables outlined in Quotation No. 00008412, signed on 4 December 2024. The system is deployed, operational, and actively serving The Lavish Attic and Enthrone Luxury Company Limited's business operations.
</div>

<div class="signature-section">
  <h2 class="section-title">Acknowledgement</h2>
  <p style="font-size:9.5pt; color:#555; margin-bottom:20px;">This report documents the completed delivery of all items specified in Quotation No. 00008412. For questions regarding this report, please contact Hostlink (HK) Limited.</p>
  
  <div class="signature-grid">
    <div class="sig-box">
      <div class="sig-title">Prepared by — Developer</div>
      <div class="sig-line"></div>
      <div class="sig-label">Hostlink (HK) Limited<br>Date: 12 March 2026</div>
    </div>
    <div class="sig-box">
      <div class="sig-title">Acknowledged by — Client</div>
      <div class="sig-line"></div>
      <div class="sig-label">The Lavish Attic and Enthrone Luxury Company Limited<br>Date: _______________</div>
    </div>
  </div>
</div>

<div style="margin-top:40px; padding:16px; background:#f5f9ff; border-radius:6px; border:1px solid #d0dde8; font-size:8.5pt; color:#666; text-align:center;">
  <strong>CONFIDENTIAL</strong> — This document is prepared by Hostlink (HK) Limited for The Lavish Attic and Enthrone Luxury Company Limited.<br>
  Unauthorised reproduction or distribution of this document is strictly prohibited.<br>
  © 2026 Hostlink (HK) Limited. All rights reserved.
</div>

</div>

</body>
</html>"""

    return html


# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────
if __name__ == '__main__':
    print("=== Lavish Attic End Report Generator ===")
    print(f"Screenshot dir: {SCREENSHOT_DIR}")
    
    # Count available screenshots
    available = [f for f in os.listdir(SCREENSHOT_DIR) if f.endswith('.png')]
    print(f"Available screenshots: {len(available)}")
    
    # Build HTML
    html = build_html()
    print(f"Screenshots embedded: {screenshot_count}")
    
    # Write HTML
    with open(HTML_PATH, 'w', encoding='utf-8') as f:
        f.write(html)
    
    html_size = os.path.getsize(HTML_PATH)
    print(f"HTML written: {HTML_PATH} ({html_size / 1024 / 1024:.1f} MB)")
    
    # Generate PDF with WeasyPrint
    print("Generating PDF with WeasyPrint...")
    try:
        from weasyprint import HTML as WP_HTML, CSS
        from weasyprint.text.fonts import FontConfiguration
        
        font_config = FontConfiguration()
        wp = WP_HTML(filename=HTML_PATH)
        wp.write_pdf(PDF_PATH, font_config=font_config)
        
        pdf_size = os.path.getsize(PDF_PATH)
        print(f"PDF generated: {PDF_PATH} ({pdf_size / 1024 / 1024:.1f} MB)")
        print(f"Total screenshots embedded: {screenshot_count}")
        print("=== Done ===")
        
    except Exception as e:
        print(f"WeasyPrint error: {e}")
        import traceback
        traceback.print_exc()
