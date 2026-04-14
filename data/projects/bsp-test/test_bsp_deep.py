#!/usr/bin/env python3
"""BSP Deep Dive - Explore Profile Sections for Schools and Consultant"""

import time
import os
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
    return path

def wait_for_spa(page, timeout=3):
    """Wait for SPA navigation to settle"""
    time.sleep(timeout)

def login(page, email, password, label=""):
    page.goto(f"{BASE_URL}/login", wait_until="domcontentloaded", timeout=30000)
    time.sleep(2)
    page.fill('input[type="email"], input[name="email"]', email)
    page.fill('input[type="password"]', password)
    # Submit
    for sel in ['button[type="submit"]', 'input[type="submit"]', 'button:has-text("Login")', 'button:has-text("Sign")']:
        if page.locator(sel).count() > 0:
            page.click(sel)
            break
    time.sleep(3)
    print(f"✅ Logged in as {label}: {page.url}")

def explore_hash_section(page, hash_path, name, label):
    """Navigate to a hash-based SPA section and screenshot"""
    url = f"{BASE_URL}/en/profile/{label}#{hash_path}"
    page.goto(url, wait_until="domcontentloaded", timeout=30000)
    wait_for_spa(page, 3)
    screenshot(page, name, f"{label} - {hash_path}")
    text = page.evaluate("() => document.body.innerText.slice(0, 3000)")
    print(f"\n--- {name} ---\n{text[:600]}")
    return text


print("=" * 60)
print("BSP DEEP DIVE — Profile Sections")
print("=" * 60)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--no-sandbox', '--disable-setuid-sandbox'])
    
    # =============================================================
    # SCHOOL 01 — Deep Explore
    # =============================================================
    print("\n🏫 SCHOOL 01 — Exploring key sections")
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    login(page, SCHOOL01_EMAIL, SCHOOL01_PASS, "School01")
    
    sections = [
        ("school_admission_list", "s01_admission_list"),
        ("school_admission_setting", "s01_admission_setting"),
        ("enquiry", "s01_enquiry"),
        ("partnered", "s01_partnered"),
        ("report", "s01_report"),
    ]
    
    school01_texts = {}
    for hash_path, name in sections:
        t = explore_hash_section(page, hash_path, name, "school")
        school01_texts[hash_path] = t
    
    # Try clicking into a specific admission entry if any exist
    page.goto(f"{BASE_URL}/en/profile/school#/school_admission_list", wait_until="domcontentloaded", timeout=30000)
    wait_for_spa(page, 4)
    screenshot(page, "s01_admission_list_2", "School 01 admission list fresh load")
    
    # Check for entries in the table
    rows = page.locator('tr, .list-row, .admission-row, [data-id]').all()
    print(f"\n[School01] Table rows found: {len(rows)}")
    
    # Look for any action buttons or "assign" features
    btns = page.locator('button, a.btn, .btn').all()
    btn_texts = []
    for b in btns[:30]:
        try:
            t = b.inner_text().strip()
            h = b.get_attribute('href') or b.get_attribute('data-target') or ''
            if t:
                btn_texts.append(f"'{t}' -> {h}")
        except: pass
    print(f"[School01] Buttons: {btn_texts[:20]}")
    
    # Check for "assign" keyword in page
    full_text = page.evaluate("() => document.body.innerText")
    assign_lines = [l.strip() for l in full_text.split('\n') if 'assign' in l.lower() or 'consultant' in l.lower()]
    print(f"[School01] Assign/Consultant lines: {assign_lines[:10]}")
    
    ctx.close()
    
    # =============================================================
    # SCHOOL 02 — Deep Explore
    # =============================================================
    print("\n🏫 SCHOOL 02 — Exploring key sections")
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    login(page, SCHOOL02_EMAIL, SCHOOL02_PASS, "School02")
    
    sections = [
        ("school_admission_list", "s02_admission_list"),
        ("enquiry", "s02_enquiry"),
        ("partnered", "s02_partnered"),
    ]
    
    school02_texts = {}
    for hash_path, name in sections:
        t = explore_hash_section(page, hash_path, name, "school")
        school02_texts[hash_path] = t
    
    # Try to access School 01's admission list from School 02 session (security test)
    print("\n🔐 PRIVACY TEST: Accessing School01 admission list from School02 session")
    
    # Try to access school 01 profile page directly
    page.goto(f"{BASE_URL}/en/profile/school#/school_admission_list", wait_until="domcontentloaded", timeout=30000)
    wait_for_spa(page, 3)
    screenshot(page, "s02_accessing_s01_profile", "School 02 session accessing school profile admission list")
    text_privacy = page.evaluate("() => document.body.innerText.slice(0, 2000)")
    print(f"[PRIVACY] School02 accessing school profile: {text_privacy[:400]}")
    
    ctx.close()
    
    # =============================================================
    # CONSULTANT — Deep Explore
    # =============================================================
    print("\n👤 CONSULTANT — Exploring all sections")
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    login(page, CONSULTANT_EMAIL, CONSULTANT_PASS, "Consultant")
    
    consultant_sections = [
        ("school_admission_list", "cons_admission_list"),
        ("enquiry", "cons_enquiry"),
        ("partner_applies", "cons_partner_applies"),
        ("partner", "cons_partner"),
        ("report", "cons_report"),
        ("faq", "cons_faq"),
    ]
    
    consultant_texts = {}
    for hash_path, name in consultant_sections:
        t = explore_hash_section(page, hash_path, name, "consultant")
        consultant_texts[hash_path] = t
    
    # Check school_admission_list for multi-school content
    page.goto(f"{BASE_URL}/en/profile/consultant#/school_admission_list", wait_until="domcontentloaded", timeout=30000)
    wait_for_spa(page, 4)
    screenshot(page, "cons_admission_list_2", "Consultant admission list - fresh load")
    
    full_text = page.evaluate("() => document.body.innerText")
    print(f"\n[CONSULTANT] Full admission list text:\n{full_text[:2000]}")
    
    # Check partner section
    page.goto(f"{BASE_URL}/en/profile/consultant#/partner", wait_until="domcontentloaded", timeout=30000)
    wait_for_spa(page, 4)
    screenshot(page, "cons_partner_2", "Consultant partner schools - fresh load")
    partner_text = page.evaluate("() => document.body.innerText")
    print(f"\n[CONSULTANT] Partner schools:\n{partner_text[:1500]}")
    
    # Check if School 01 and School 02 appear as partners
    if 'demo school 01' in partner_text.lower() or 'demo_school_01' in partner_text.lower():
        print("✅ School 01 appears as partner")
    else:
        print("❌ School 01 NOT found as partner")
    
    if 'demo school 02' in partner_text.lower() or 'demo_school_02' in partner_text.lower():
        print("✅ School 02 appears as partner")
    else:
        print("❌ School 02 NOT found as partner")
    
    ctx.close()
    
    # =============================================================
    # API EXPLORATION — Try direct API calls to understand data model
    # =============================================================
    print("\n🔍 Exploring API endpoints")
    ctx_api = browser.new_context(viewport={"width": 1440, "height": 900})
    page_api = ctx_api.new_page()
    
    # Intercept API calls while navigating
    api_calls = []
    def capture_request(request):
        if '/api/' in request.url or request.resource_type == 'fetch' or request.resource_type == 'xhr':
            api_calls.append({'url': request.url, 'method': request.method})
    
    def capture_response(response):
        if '/api/' in response.url:
            api_calls.append({'url': response.url, 'status': response.status})
    
    page_api.on('request', capture_request)
    page_api.on('response', capture_response)
    
    login(page_api, SCHOOL01_EMAIL, SCHOOL01_PASS, "School01-API")
    page_api.goto(f"{BASE_URL}/en/profile/school#/school_admission_list", wait_until="domcontentloaded", timeout=30000)
    wait_for_spa(page_api, 5)
    
    print(f"\n[API] Captured API calls (first 20):")
    for call in api_calls[:20]:
        print(f"  {call}")
    
    ctx_api.close()
    
    browser.close()

print("\n✅ Deep dive complete!")
print(f"Screenshots: {SCREENSHOTS_DIR}")
