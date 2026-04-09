import json
import os
from datetime import datetime

# Paths
DATA_DIR = "/home/openclaw/.openclaw/workspace/data/projects/green-tea-sem"
JSON_PATH = os.path.join(DATA_DIR, "analysis_data.json")
HTML_PATH = os.path.join(DATA_DIR, "Green_Tea_SEM_Report_v6.html")

# Load Data
with open(JSON_PATH, 'r') as f:
    data = json.load(f)

# Helper Functions
def format_currency(val):
    if val is None: return "-"
    return f"HK${val:,.2f}"

def format_number(val):
    if val is None: return "-"
    return f"{val:,}"

def format_percent(val):
    if val is None: return "-"
    return f"{val:.2f}%"

# HTML Template Parts
css = """
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
    
    @page {
        size: A4;
        margin: 1.5cm 2cm;
        @bottom-center {
            content: "Page " counter(page);
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 10px;
            color: #666;
        }
    }
    
    body {
        font-family: 'Noto Sans TC', sans-serif;
        color: #333;
        line-height: 1.5;
        font-size: 12px; /* Base font size for A4 readability */
        margin: 0;
        background-color: #ffffff; /* White bg for print/pdf */
    }

    /* Colors */
    :root {
        --primary: #1A4F8A;
        --success: #2E7D32;
        --warning: #E65100;
        --bg: #F5F7FA;
        --stripe: #EBF3FF;
    }

    h1, h2, h3 { color: var(--primary); margin-top: 20px; margin-bottom: 10px; }
    h1 { font-size: 24px; font-weight: 700; }
    h2 { font-size: 18px; border-bottom: 2px solid var(--primary); padding-bottom: 5px; margin-top: 30px; }
    h3 { font-size: 14px; color: #555; font-weight: 700; margin-top: 15px; }

    /* Cover Page */
    .cover {
        height: 250mm; /* A4 height approx minus margins, but we make it fill */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: linear-gradient(135deg, #1A4F8A 0%, #0D2B4D 100%);
        color: white;
        margin: -1.5cm -2cm; /* Break out of page margins for full bleed feel if supported, otherwise just a box */
        padding: 2cm;
        page-break-after: always;
    }
    .cover h1 { color: white; font-size: 32px; border: none; margin-bottom: 10px; }
    .cover .subtitle { font-size: 16px; opacity: 0.9; margin-bottom: 40px; }
    .cover .logo { font-size: 14px; font-weight: 700; margin-bottom: 60px; letter-spacing: 2px; }
    .cover .meta { margin-top: auto; font-size: 12px; opacity: 0.8; }

    /* Tables */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 15px;
        font-size: 10px;
    }
    th {
        background-color: var(--primary);
        color: white;
        padding: 8px;
        text-align: left;
        font-weight: 500;
    }
    td {
        padding: 6px 8px;
        border-bottom: 1px solid #ddd;
    }
    tr:nth-child(even) { background-color: var(--stripe); }
    
    /* KPI Grid */
    .kpi-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 30px;
    }
    .kpi-card {
        flex: 1 1 22%; /* 4 per row */
        background: white;
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        text-align: center;
    }
    .kpi-card.success { border-top: 3px solid var(--success); }
    .kpi-card.warning { border-top: 3px solid var(--warning); }
    .kpi-value { font-size: 18px; font-weight: 700; color: var(--primary); display: block; margin-bottom: 4px; }
    .kpi-label { font-size: 10px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; }

    /* Charts (Pure CSS) */
    .chart-container {
        margin: 20px 0;
        padding: 15px;
        background: var(--bg);
        border-radius: 8px;
    }
    .bar-row {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-size: 11px;
    }
    .bar-label { width: 120px; flex-shrink: 0; font-weight: 500; }
    .bar-track { flex-grow: 1; background: #e0e0e0; height: 16px; border-radius: 3px; overflow: hidden; margin: 0 10px; }
    .bar-fill { height: 100%; background: var(--primary); display: flex; align-items: center; padding-left: 5px; color: white; font-size: 9px; }
    .bar-value { width: 40px; text-align: right; font-weight: 700; }

    /* Highlights */
    .highlight-gold { background-color: #FFF8E1 !important; border-left: 3px solid #FFC107; }
    
    /* Recommendations */
    .rec-item {
        margin-bottom: 15px;
        background: white;
        border: 1px solid #eee;
        padding: 15px;
        border-radius: 4px;
        page-break-inside: avoid;
    }
    .rec-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
    .rec-title { font-weight: 700; color: var(--primary); font-size: 13px; }
    .rec-tag { 
        font-size: 9px; padding: 2px 6px; border-radius: 3px; color: white; font-weight: 700;
    }
    .tag-1 { background: #D32F2F; } /* High Priority */
    .tag-2, .tag-3 { background: #F57C00; }
    .tag-4, .tag-5 { background: #1976D2; }

    .rec-content p { margin: 3px 0; font-size: 11px; }
    .rec-label { font-weight: 700; color: #555; }

    /* Footer */
    .footer-section {
        margin-top: 50px;
        padding-top: 20px;
        border-top: 1px solid #eee;
        font-size: 9px;
        color: #777;
        text-align: center;
    }
    
    .page-break { page-break-after: always; }
    
    /* Specific for CNY table colors */
    .tr-pre-cny td { border-left: 3px solid #90CAF9; }
    .tr-cny td { border-left: 3px solid #EF9A9A; background-color: #FFEBEE !important; }
    .tr-post-cny td { border-left: 3px solid #A5D6A7; }
</style>
"""

# 1. KPI Data
s = data['summary']
kpis = [
    {"label": "總費用", "value": format_currency(s['total_spend']), "type": "neutral"},
    {"label": "總點擊", "value": format_number(s['total_clicks']), "type": "success"},
    {"label": "總展示", "value": format_number(s['total_impressions']), "type": "neutral"},
    {"label": "整體 CTR", "value": format_percent(s['ctr']), "type": "success"},
    {"label": "平均 CPC", "value": format_currency(s['avg_cpc']), "type": "success"},
    {"label": "總轉換", "value": format_number(s['total_conversions']), "type": "success"},
    {"label": "HK CPA", "value": format_currency(46.11), "type": "success"}, # Hardcoded from HK campaign data
    {"label": "JP CTR", "value": format_percent(3.05), "type": "warning"}, # High CTR but no tracking
]

kpi_html = '<div class="kpi-grid">'
for k in kpis:
    kpi_html += f"""
    <div class="kpi-card {k['type']}">
        <span class="kpi-value">{k['value']}</span>
        <span class="kpi-label">{k['label']}</span>
    </div>
    """
kpi_html += '</div>'

# 2. Campaign Table
c_html = """
<table>
    <thead>
        <tr>
            <th>指標</th>
            <th>Green Tea - HK</th>
            <th>Green Tea - JP</th>
            <th>合計/平均</th>
        </tr>
    </thead>
    <tbody>
"""
# Mapping fields for the table
fields = [
    ("地區", "region", "region", "-"),
    ("廣告費用", "spend", "spend", "total_spend", format_currency),
    ("點擊次數", "clicks", "clicks", "total_clicks", format_number),
    ("展示次數", "impressions", "impressions", "total_impressions", format_number),
    ("點擊率 (CTR)", "ctr", "ctr", "ctr", format_percent),
    ("平均 CPC", "avg_cpc", "avg_cpc", "avg_cpc", format_currency),
    ("轉換次數", "conversions", "conversions", "total_conversions", format_number),
    ("CPA", "cpa", "cpa", "cpa", format_currency),
]

hk = data['campaigns'][0]
jp = data['campaigns'][1]

for label, k1, k2, k_total, *fmt in fields:
    f = fmt[0] if fmt else lambda x: x
    
    # Handle direct value or simple string
    v1 = hk.get(k1)
    v2 = jp.get(k2)
    vt = s.get(k_total) if k_total != "-" else "-"
    
    # Special handling for CPA to match report logic
    if label == "CPA":
        vt = 59.47 # Weighted avg from text
        v2 = "-" # JP has no CPA
    
    c_html += f"""
    <tr>
        <td>{label}</td>
        <td>{f(v1) if v1 != "-" else "-"}</td>
        <td>{f(v2) if v2 != "-" else "-"}</td>
        <td>{f(vt) if vt != "-" else "-"}</td>
    </tr>
    """
c_html += "</tbody></table>"

# 3. CNY Analysis
cny = data['cny_analysis']
cny_html = """
<table>
    <thead>
        <tr>
            <th>時段</th>
            <th>日期</th>
            <th>費用</th>
            <th>日均點擊</th>
            <th>日均展示</th>
            <th>CTR</th>
            <th>CPC</th>
        </tr>
    </thead>
    <tbody>
"""
# Order: pre, cny, post
for key, row_cls in [('pre_cny', 'tr-pre-cny'), ('cny', 'tr-cny'), ('post_cny', 'tr-post-cny')]:
    item = cny[key]
    cny_html += f"""
    <tr class="{row_cls}">
        <td>{item['label'].split('（')[0]}</td>
        <td>{item['start_date'][5:]} - {item['end_date'][5:]}</td>
        <td>{format_currency(item['total_spend'])}</td>
        <td>{item['avg_daily_clicks']:.1f}</td>
        <td>{item['avg_daily_impressions']:.0f}</td>
        <td>{format_percent(item['ctr'])}</td>
        <td>{format_currency(item['avg_cpc'])}</td>
    </tr>
    """
cny_html += "</tbody></table>"

# 4. Placement Chart
placements = [
    {"label": "流動應用軟件", "pct": 52.1},
    {"label": "YouTube 影片", "pct": 29.4},
    {"label": "網站", "pct": 21.4},
    {"label": "Google 產品", "pct": 0.5} # <1%
]
chart_html = '<div class="chart-container"><h3>廣告展示位置分佈</h3>'
for p in placements:
    chart_html += f"""
    <div class="bar-row">
        <div class="bar-label">{p['label']}</div>
        <div class="bar-track">
            <div class="bar-fill" style="width: {p['pct']}%"></div>
        </div>
        <div class="bar-value">{p['pct']}%</div>
    </div>
    """
chart_html += '</div>'

# 5. Best Times
bt_html = """
<table>
    <thead>
        <tr>
            <th>排名</th>
            <th>時段</th>
            <th>點擊</th>
            <th>CTR</th>
            <th>費用</th>
            <th>轉換</th>
            <th>CPA</th>
        </tr>
    </thead>
    <tbody>
"""
for t in data['best_timeslots']:
    row_class = "highlight-gold" if t['rank'] == 1 else ""
    bt_html += f"""
    <tr class="{row_class}">
        <td>#{t['rank']}</td>
        <td>{t['weekday']} {t['time_range']}</td>
        <td>{t['clicks']}</td>
        <td>{format_percent(t['ctr'])}</td>
        <td>{format_currency(t['spend'])}</td>
        <td>{t['conversions']}</td>
        <td>{format_currency(t['cpa'])}</td>
    </tr>
    """
bt_html += "</tbody></table>"

# 6. Daily Trend
dt_html = """
<table>
    <thead>
        <tr>
            <th>日期</th>
            <th>星期</th>
            <th>費用</th>
            <th>點擊</th>
            <th>展示</th>
            <th>CTR</th>
            <th>CPC</th>
        </tr>
    </thead>
    <tbody>
"""
for d in data['daily_trend']:
    dt_html += f"""
    <tr>
        <td>{d['date']}</td>
        <td>{d['weekday']}</td>
        <td>{format_currency(d['spend'])}</td>
        <td>{d['clicks']}</td>
        <td>{d['impressions']}</td>
        <td>{format_percent(d['ctr'])}</td>
        <td>{format_currency(d['cpc'])}</td>
    </tr>
    """
dt_html += "</tbody></table>"

# 7. Recommendations
rec_html = '<div class="recommendations">'
for r in data['insights']['recommendations']:
    rec_html += f"""
    <div class="rec-item">
        <div class="rec-header">
            <span class="rec-title">#{r['priority']} {r['title']}</span>
            <span class="rec-tag tag-{r['priority']}">P{r['priority']}</span>
        </div>
        <div class="rec-content">
            <p><span class="rec-label">建議行動：</span>{r['action']}</p>
            <p><span class="rec-label">預期成效：</span>{r['expected_outcome']}</p>
        </div>
    </div>
    """
rec_html += '</div>'

# Assemble Full HTML
html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Green Tea SEM Report</title>
    {css}
</head>
<body>

    <!-- Cover Page -->
    <div class="cover">
        <div class="logo">Area2 ● DIGITAL MARKETING SOLUTIONS</div>
        <h1>Green Tea</h1>
        <div class="subtitle">Google Ads 成效分析報告</div>
        <div style="width: 50px; height: 2px; background: white; margin: 20px 0;"></div>
        <p>報告期間：{data['period']}</p>
        <p>客戶帳號：{data['account_id']}</p>
        
        <div class="meta">
            <p>製作：Area2 (HK) Limited 廣告顧問團隊</p>
            <p>日期：{data['generated_at']}</p>
        </div>
    </div>

    <!-- Page 1: Overview & Campaigns -->
    <h2>管理層摘要 & 關鍵指標</h2>
    <p style="margin-bottom: 20px;">本期投入 <b>{format_currency(s['total_spend'])}</b>，獲得 <b>{s['total_clicks']}</b> 次點擊。香港市場轉換表現穩定（CPA {format_currency(46.11)}），日本市場點擊率優異但需完善追蹤。</p>
    
    {kpi_html}
    
    <h3>Campaign 詳細數據</h3>
    {c_html}

    <h3>農曆新年特別分析</h3>
    <p>假期期間流量明顯下跌，但節後反彈強勁。</p>
    {cny_html}

    <div class="page-break"></div>

    <!-- Page 2: Analysis -->
    <h2>投放成效深度分析</h2>
    
    <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
            {chart_html}
            <p style="font-size: 10px; color: #666; margin-top: 5px;">* 流動應用程式佔比較高，建議優化排除名單以提升流量質素。</p>
        </div>
        <div style="flex: 1;">
            <h3>最佳投放時段</h3>
            {bt_html}
            <p style="font-size: 10px; color: #666; margin-top: 5px;">* 星期六上午為轉換黃金時段。</p>
        </div>
    </div>

    <h3>每日數據趨勢 (32天)</h3>
    {dt_html}

    <div class="page-break"></div>

    <!-- Page 3: Recommendations -->
    <h2>五大優化建議</h2>
    {rec_html}

    <!-- Footer -->
    <div class="footer-section">
        <p><b>免責聲明：</b>本報告基於 Google Ads 官方數據製作。所有建議僅供參考，實際成效受市場波動影響。</p>
        <p>Area2 (HK) Limited | 旺角彌敦道 610 號荷李活商業中心 18 樓 1805-06 室 | info@area2.com</p>
    </div>

</body>
</html>
"""

with open(HTML_PATH, 'w') as f:
    f.write(html_content)

print(f"HTML generated at: {HTML_PATH}")
