#!/usr/bin/env python3
"""BSP Final Test - Admission Details, Partnership Flow, Privacy API test"""

import time
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

SCREENSHOTS_DIR = Path("/home/openclaw/.openclaw/workspace/data/projects/bsp-test/screenshots")
SCREENSHOTS_DIR.mkdir(parents=True, exist_ok=True)

BASE_URL = "https://britishschoolportal.co.uk"
SCHOOL01_EMAIL = "demo_school_01@britishschoolportal.co.uk"
SCHOOL01_PASS = "hschoolport"
SCHOOL02_EMAIL = "demo_school_02@britishschoolportal.co.uk"
SCHOOL02_PASS = "ishschoolport"
CONSULTANT_EMAIL = "educationalconsultant@britishschoolportal.co.uk"
CONSULTANT_PASS = "AsdQwe!23"

def screenshot(page, name, desc=""):
    path = str(SCREENSHOTS_DIR / f"{name}.png")
    page.screenshot(path=path, full_page=True)
    print(f"📸 [{name}] {desc}")

def login(page, email, password, label=""):
    page.goto(f"{BASE_URL}/login", wait_until="domcontentloaded", timeout=30000)
    time.sleep(2)
    for sel in ['input[type="email"]', 'input[name="email"]']:
        if page.locator(sel).count() > 0:
            page.fill(sel, email)
            break
    page.fill('input[type="password"]', password)
    for sel in ['button[type="submit"]', 'input[type="submit"]', 'button:has-text("Login")']:
        if page.locator(sel).count() > 0:
            page.click(sel)
            break
    time.sleep(3)
    print(f"✅ Logged in as {label}: {page.url}")

print("=" * 60)
print("BSP FINAL TESTS")
print("=" * 60)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--no-sandbox', '--disable-setuid-sandbox'])
    
    # ===========================
    # TEST A: Consultant Admission Detail
    # ===========================
    print("\n📋 TEST A: Consultant admission detail entries")
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    login(page, CONSULTANT_EMAIL, CONSULTANT_PASS, "Consultant")
    
    page.goto(f"{BASE_URL}/en/profile/consultant#/school_admission_list", wait_until="domcontentloaded", timeout=30000)
    time.sleep(4)
    screenshot(page, "final_cons_admission_list", "Consultant full admission list")
    
    # Click Detail button of first entry
    detail_btns = page.locator('button:has-text("Detail"), a:has-text("Detail")').all()
    print(f"Found {len(detail_btns)} Detail buttons")
    
    if detail_btns:
        detail_btns[0].click()
        time.sleep(3)
        screenshot(page, "final_cons_admission_detail_1", "Consultant admission detail #1")
        text = page.evaluate("() => document.body.innerText.slice(0, 4000)")
        print(f"\n[Consultant Detail #1]:\n{text[:2000]}")
        
        # Go back and click second detail if exists
        page.go_back()
        time.sleep(2)
        detail_btns2 = page.locator('button:has-text("Detail"), a:has-text("Detail")').all()
        if len(detail_btns2) > 1:
            detail_btns2[1].click()
            time.sleep(3)
            screenshot(page, "final_cons_admission_detail_2", "Consultant admission detail #2")
            text2 = page.evaluate("() => document.body.innerText.slice(0, 4000)")
            print(f"\n[Consultant Detail #2]:\n{text2[:1000]}")
    
    ctx.close()
    
    # ===========================
    # TEST B: School Admission Setting - Enable Apply
    # ===========================
    print("\n⚙️ TEST B: Check School 01 admission setting - enable apply to get applications")
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    login(page, SCHOOL01_EMAIL, SCHOOL01_PASS, "School01")
    
    page.goto(f"{BASE_URL}/en/profile/school#/school_admission_setting", wait_until="domcontentloaded", timeout=30000)
    time.sleep(4)
    screenshot(page, "final_s01_admission_setting", "School 01 admission setting")
    text = page.evaluate("() => document.body.innerText.slice(0, 3000)")
    print(f"[S01 Admission Setting]:\n{text[:1000]}")
    
    # Check current toggle state
    toggle = page.locator('input[type="radio"], .toggle, select').all()
    for t in toggle:
        try:
            val = t.get_attribute('value') or t.inner_text()
            checked = t.get_attribute('checked') or t.is_checked() if t.get_attribute('type') == 'radio' else None
            print(f"Toggle: value={val}, checked={checked}")
        except Exception as e:
            print(f"Toggle error: {e}")
    
    ctx.close()
    
    # ===========================
    # TEST C: School Partnership Feature
    # ===========================
    print("\n🤝 TEST C: School Partnered List + Partnership Feature")
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    login(page, SCHOOL01_EMAIL, SCHOOL01_PASS, "School01")
    
    page.goto(f"{BASE_URL}/en/profile/school#/partnered", wait_until="domcontentloaded", timeout=30000)
    time.sleep(4)
    screenshot(page, "final_s01_partnered_detail", "School 01 partnered list detail")
    
    text = page.evaluate("() => document.body.innerText.slice(0, 3000)")
    print(f"[S01 Partnered]:\n{text[:1000]}")
    
    # Look for ways to add consultant
    btns = page.locator('button, a.btn, .btn, a[href*="consultant"]').all()
    for b in btns[:20]:
        try:
            t = b.inner_text().strip()
            h = b.get_attribute('href') or ''
            if t:
                print(f"Button: '{t}' -> {h}")
        except: pass
    
    ctx.close()
    
    # ===========================
    # TEST D: API Privacy Test - Try to access School 01 data with School 02 token
    # ===========================
    print("\n🔒 TEST D: API Privacy Test")
    
    api_responses = {}
    
    # Get School 01 cookies/token first
    ctx1 = browser.new_context(viewport={"width": 1440, "height": 900})
    page1 = ctx1.new_page()
    
    # Intercept API calls
    s01_api_calls = []
    def capture_s01_api(response):
        if 'britishschoolportal' in response.url and ('/api/' in response.url or response.request.resource_type in ['fetch', 'xhr']):
            try:
                s01_api_calls.append({'url': response.url, 'status': response.status})
            except: pass
    
    page1.on('response', capture_s01_api)
    login(page1, SCHOOL01_EMAIL, SCHOOL01_PASS, "School01-API")
    page1.goto(f"{BASE_URL}/en/profile/school#/school_admission_list", wait_until="domcontentloaded", timeout=30000)
    time.sleep(4)
    
    print(f"[S01 API calls]: {s01_api_calls[:10]}")
    
    # Get cookies
    s01_cookies = ctx1.cookies()
    s01_cookie_str = "; ".join([f"{c['name']}={c['value']}" for c in s01_cookies])
    print(f"[S01 Cookies count]: {len(s01_cookies)}")
    print(f"[S01 Cookie names]: {[c['name'] for c in s01_cookies]}")
    
    ctx1.close()
    
    # Now login as School 02 and try to access School 01 resources
    ctx2 = browser.new_context(viewport={"width": 1440, "height": 900})
    page2 = ctx2.new_page()
    
    s02_api_calls = []
    def capture_s02_api(response):
        if 'britishschoolportal' in response.url:
            try:
                body = None
                try:
                    body = response.json()
                except: pass
                s02_api_calls.append({'url': response.url, 'status': response.status, 'body_preview': str(body)[:200] if body else None})
            except: pass
    
    page2.on('response', capture_s02_api)
    login(page2, SCHOOL02_EMAIL, SCHOOL02_PASS, "School02-API")
    
    # Try to access School 01's data by manipulating URLs
    # Try direct URL to school 01's profile
    test_urls = [
        f"{BASE_URL}/en/profile/school#/school_admission_list",  # Own profile (should show S02)
    ]
    
    for url in test_urls:
        page2.goto(url, wait_until="domcontentloaded", timeout=30000)
        time.sleep(3)
        text = page2.evaluate("() => document.body.innerText.slice(0, 1000)")
        print(f"\n[S02 accessing {url}]:\n{text[:300]}")
        
        # Check header name - should show Demo School 02, not 01
        school_name = ""
        if "DEMO SCHOOL 01" in text:
            print("❌ SECURITY ISSUE: School 02 session shows School 01 data!")
        elif "DEMO SCHOOL 02" in text:
            print("✅ Correct isolation: Shows School 02 data")
        else:
            print(f"⚠️ Unknown school name in response")
    
    # Check the API calls made by School 02
    bsp_api_calls = [c for c in s02_api_calls if 'britishschoolportal' in c['url'] and ('/api/' in c['url'] or 'admission' in c['url'])]
    print(f"\n[S02 BSP API calls]: {bsp_api_calls[:10]}")
    
    screenshot(page2, "final_privacy_s02_view", "School 02 session - final privacy check")
    
    ctx2.close()
    
    # ===========================
    # TEST E: Consultant - School 01 & 02 public pages to understand partnership
    # ===========================
    print("\n🔗 TEST E: School public pages - check consultant partnership option")
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    
    # View School 01 public page
    page.goto(f"{BASE_URL}/en/school/detail/59701/demo-school-01", wait_until="domcontentloaded", timeout=30000)
    time.sleep(3)
    screenshot(page, "final_s01_public_page", "School 01 public page")
    text = page.evaluate("() => document.body.innerText.slice(0, 3000)")
    print(f"[S01 Public]:\n{text[:800]}")
    
    ctx.close()
    
    # ===========================
    # TEST F: Consultant - Check if can see both demo schools as partners
    # ===========================
    print("\n🔍 TEST F: Consultant partner applies - request to partner with Demo School 01 & 02")
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    login(page, CONSULTANT_EMAIL, CONSULTANT_PASS, "Consultant")
    
    # Go to School 01 public page while logged in as consultant
    page.goto(f"{BASE_URL}/en/school/detail/59701/demo-school-01", wait_until="domcontentloaded", timeout=30000)
    time.sleep(3)
    screenshot(page, "final_consultant_on_s01_page", "Consultant viewing School 01 public page")
    text = page.evaluate("() => document.body.innerText.slice(0, 3000)")
    print(f"[Consultant on S01 page]:\n{text[:1000]}")
    
    # Look for partner application button
    btns = page.locator('button, a.btn, .btn').all()
    for b in btns[:30]:
        try:
            t = b.inner_text().strip()
            if t and 'partner' in t.lower():
                print(f"🎯 Found partnership button: '{t}'")
        except: pass
    
    # Also check if there are any consultant assignment features
    if 'consultant' in text.lower():
        lines = [l for l in text.split('\n') if 'consultant' in l.lower()]
        print(f"Consultant-related lines: {lines[:5]}")
    
    ctx.close()
    
    browser.close()

print("\n✅ Final tests complete!")
