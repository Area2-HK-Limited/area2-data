#!/usr/bin/env python3
"""
Send EDM preview emails to Eric
"""
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

# Email settings from TOOLS.md
SMTP_SERVER = "mail.area2.com"
SMTP_PORT = 587
USERNAME = "oc-master@area2.com"
PASSWORD = "sujtyz-wumvUk-1xuccu"
FROM_EMAIL = "ai-agent@area2.com"
TO_EMAIL = "eric@area2.com"

# HTML files and their subjects
edm_files = [
    {
        'file': '/home/openclaw/.openclaw/workspace/data/projects/area2/edm-responsive-v1-corporate-20260316.html',
        'subject': '[Preview A] 企業財務合規方案 - 2026稅務審計EDM',
        'name': 'Version A - Corporate Pillar'
    },
    {
        'file': '/home/openclaw/.openclaw/workspace/data/projects/area2/edm-responsive-v2-advisor-20260316.html',
        'subject': '[Preview B] 專業稅務顧問服務 - 2026稅務審計EDM',
        'name': 'Version B - Human Advisor'
    },
    {
        'file': '/home/openclaw/.openclaw/workspace/data/projects/area2/edm-responsive-v3-urgency-20260316.html',
        'subject': '[Preview C] 限期優惠最後機會 - 2026稅務審計EDM',
        'name': 'Version C - Urgency/Scarcity'
    },
    {
        'file': '/home/openclaw/.openclaw/workspace/data/projects/area2/edm-responsive-v4-minimal-20260316.html',
        'subject': '[Preview D] 精簡高效方案 - 2026稅務審計EDM',
        'name': 'Version D - Minimal Executive'
    },
]

def send_email(subject, html_content, to_email):
    """Send HTML email via SMTP"""
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = f"Area2 AI <{FROM_EMAIL}>"
    msg['To'] = to_email
    
    # Plain text fallback
    text_content = f"""Hi Eric,

呢封郵件包含 {subject} 既HTML preview。

請用既 email client 或 browser 打開 html 附件查看 responsive 效果。

---
Area2 (HK) Limited
"""
    
    # Attach both text and HTML
    msg.attach(MIMEText(text_content, 'plain'))
    msg.attach(MIMEText(html_content, 'html'))
    
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(USERNAME, PASSWORD)
        server.sendmail(FROM_EMAIL, to_email, msg.as_string())
        server.quit()
        print(f"✅ Sent: {subject}")
        return True
    except Exception as e:
        print(f"❌ Failed: {subject} - {e}")
        return False

# Send all 4 emails
print("=" * 60)
print("Sending EDM Preview Emails to Eric")
print("=" * 60)

success_count = 0
for edm in edm_files:
    try:
        with open(edm['file'], 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        if send_email(edm['subject'], html_content, TO_EMAIL):
            success_count += 1
    except Exception as e:
        print(f"❌ Error reading {edm['file']}: {e}")

print("=" * 60)
print(f"Result: {success_count}/{len(edm_files)} emails sent successfully")
print("=" * 60)
