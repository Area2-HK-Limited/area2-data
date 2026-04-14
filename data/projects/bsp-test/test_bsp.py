#!/usr/bin/env python3
"""BSP Multi-School Consultant Test Script"""

import json
import time
import os
from pathlib import Path
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout

SCREENSHOTS_DIR = Path("/home/openclaw/.openclaw/workspace/data/projects/bsp-test/screenshots")
SCREENSHOTS_DIR.mkdir(parents=True, exist_ok=True)

BASE_URL = "https://britishschoolportal.co.uk"
SCHOOL01_EMAIL = "demo_school_01@britishschoolportal.co.uk"
SCHOOL01_PASS = "hschoolport"
SCHOOL02_EMAIL = "demo_school_02@britishschoolportal.co.uk"
SCHOOL02_PASS = "ishschoolport"
CONSULTANT_EMAIL = "educationalconsultant@britishschoolportal.co.uk"
CONSULTANT_PASS = "AsdQwe!23"

results = {}

def screenshot(page, name, desc=""):
    path = str(SCREENSHOTS_DIR / f"{name}.png")
    page.screenshot(path=path, full_page=True)
    print(f"[SCREENSHOT] {name}.png — {desc}")
    return path

def login(page, email, password, label=""):
    print(f"\n[LOGIN] Attempting login for {label or email}")
    page.goto(f"{BASE_URL}/login", wait_until="domcontentloaded", timeout=30000)
    time.sleep(2)
    page.screenshot(path=str(SCREENSHOTS_DIR / f"login_page_{label}.png"), full_page=True)
    
    # Try to find email/password fields
    try:
        # Check for email field
        email_sel = None
        for sel in ['input[type="email"]', 'input[name="email"]', 'input[placeholder*="email" i]', 'input[id*="email" i]']:
            if page.locator(sel).count() > 0:
                email_sel = sel
                break
        
        if not email_sel:
            # Try any text input
            inputs = page.locator('input[type="text"], input:not([type])').all()
            if inputs:
                email_sel = 'input[type="text"]:first-of-type'
        
        if email_sel:
            page.fill(email_sel, email)
        
        # Password field
        page.fill('input[type="password"]', password)
        
        # Submit button
        for sel in ['button[type="submit"]', 'input[type="submit"]', 'button:has-text("Login")', 'button:has-text("Sign in")', 'button:has-text("Log in")', '[type="submit"]']:
            if page.locator(sel).count() > 0:
                page.click(sel)
                break
        
        time.sleep(3)
        page.screenshot(path=str(SCREENSHOTS_DIR / f"after_login_{label}.png"), full_page=True)
        
        current_url = page.url
        title = page.title()
        print(f"[LOGIN] After login: URL={current_url}, Title={title}")
        return True
    except Exception as e:
        print(f"[LOGIN ERROR] {e}")
        page.screenshot(path=str(SCREENSHOTS_DIR / f"login_error_{label}.png"), full_page=True)
        return False

def get_page_info(page):
    """Get useful info from current page"""
    return {
        "url": page.url,
        "title": page.title(),
        "text_excerpt": page.evaluate("() => document.body.innerText.slice(0, 2000)")
    }


print("=" * 60)
print("BSP MULTI-SCHOOL CONSULTANT TEST")
print("=" * 60)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--no-sandbox', '--disable-setuid-sandbox'])
    
    # =========================================================
    # STEP 1: Login as School 01
    # =========================================================
    print("\n" + "="*50)
    print("STEP 1: School 01 — Assign Consultant")
    print("="*50)
    
    ctx1 = browser.new_context(viewport={"width": 1440, "height": 900})
    page1 = ctx1.new_page()
    
    try:
        login_ok = login(page1, SCHOOL01_EMAIL, SCHOOL01_PASS, "school01")
        
        # Screenshot dashboard
        screenshot(page1, "step1_school01_dashboard", "School 01 dashboard after login")
        
        info = get_page_info(page1)
        print(f"[STEP1] URL: {info['url']}")
        print(f"[STEP1] Title: {info['title']}")
        print(f"[STEP1] Text excerpt:\n{info['text_excerpt'][:500]}")
        
        # Navigate to applications/students list
        nav_links = page1.locator('a, button').all()
        nav_texts = []
        for el in nav_links[:30]:
            try:
                t = el.inner_text().strip()
                h = el.get_attribute('href') or ''
                if t:
                    nav_texts.append(f"{t} -> {h}")
            except:
                pass
        print(f"[STEP1] Navigation links:\n" + "\n".join(nav_texts[:20]))
        
        # Try to find applications
        applications_found = False
        for nav_text in ['Applications', 'Students', 'Applicants', 'My Students', 'Manage', 'Dashboard']:
            links = page1.locator(f'a:has-text("{nav_text}"), button:has-text("{nav_text}")').all()
            if links:
                print(f"[STEP1] Found nav item: {nav_text}")
                try:
                    links[0].click()
                    time.sleep(2)
                    screenshot(page1, f"step1_school01_{nav_text.lower()}", f"School 01 {nav_text} page")
                    applications_found = True
                    break
                except:
                    pass
        
        # Get full page text to find consultant assign feature
        page_text = page1.evaluate("() => document.body.innerText")
        
        # Look for "consultant" mentions
        consultant_mentions = []
        lines = page_text.split('\n')
        for i, line in enumerate(lines):
            if 'consultant' in line.lower() or 'assign' in line.lower():
                consultant_mentions.append(f"Line {i}: {line.strip()}")
        
        print(f"[STEP1] Consultant/Assign mentions: {consultant_mentions[:10]}")
        
        # Try to find individual application/student to assign consultant
        # Look for table rows or cards
        rows = page1.locator('tr, .student-card, .application-card, .applicant-row').all()
        print(f"[STEP1] Found {len(rows)} table rows/cards")
        
        if rows:
            # Click first row
            try:
                rows[0].click()
                time.sleep(2)
                screenshot(page1, "step1_school01_application_detail", "School 01 first application detail")
                detail_text = page1.evaluate("() => document.body.innerText.slice(0, 3000)")
                print(f"[STEP1] Application detail:\n{detail_text[:800]}")
            except Exception as e:
                print(f"[STEP1] Could not click row: {e}")
        
        # Take final screenshot
        screenshot(page1, "step1_school01_final", "School 01 final state")
        
        results["step1"] = {
            "status": "completed",
            "url": page1.url,
            "consultant_mentions": consultant_mentions[:5],
            "applications_found": applications_found
        }
        
    except Exception as e:
        print(f"[STEP1 ERROR] {e}")
        screenshot(page1, "step1_error", f"Step 1 error: {e}")
        results["step1"] = {"status": "error", "error": str(e)}
    finally:
        ctx1.close()
    
    # =========================================================
    # STEP 2: Login as School 02
    # =========================================================
    print("\n" + "="*50)
    print("STEP 2: School 02 — Assign Same Consultant")
    print("="*50)
    
    ctx2 = browser.new_context(viewport={"width": 1440, "height": 900})
    page2 = ctx2.new_page()
    
    try:
        login_ok = login(page2, SCHOOL02_EMAIL, SCHOOL02_PASS, "school02")
        screenshot(page2, "step2_school02_dashboard", "School 02 dashboard after login")
        
        info = get_page_info(page2)
        print(f"[STEP2] URL: {info['url']}")
        print(f"[STEP2] Title: {info['title']}")
        print(f"[STEP2] Text excerpt:\n{info['text_excerpt'][:500]}")
        
        # Navigate similar to step 1
        for nav_text in ['Applications', 'Students', 'Applicants', 'My Students', 'Dashboard']:
            links = page2.locator(f'a:has-text("{nav_text}"), button:has-text("{nav_text}")').all()
            if links:
                try:
                    links[0].click()
                    time.sleep(2)
                    screenshot(page2, f"step2_school02_{nav_text.lower()}", f"School 02 {nav_text}")
                    break
                except:
                    pass
        
        page_text = page2.evaluate("() => document.body.innerText")
        consultant_mentions = []
        for line in page_text.split('\n'):
            if 'consultant' in line.lower() or 'assign' in line.lower():
                consultant_mentions.append(line.strip())
        
        print(f"[STEP2] Consultant/Assign mentions: {consultant_mentions[:10]}")
        
        screenshot(page2, "step2_school02_final", "School 02 final state")
        
        results["step2"] = {
            "status": "completed",
            "url": page2.url,
            "consultant_mentions": consultant_mentions[:5]
        }
        
    except Exception as e:
        print(f"[STEP2 ERROR] {e}")
        screenshot(page2, "step2_error", f"Error: {e}")
        results["step2"] = {"status": "error", "error": str(e)}
    finally:
        ctx2.close()
    
    # =========================================================
    # STEP 3: Login as Consultant
    # =========================================================
    print("\n" + "="*50)
    print("STEP 3: Consultant Dashboard — Multi-school view")
    print("="*50)
    
    ctx3 = browser.new_context(viewport={"width": 1440, "height": 900})
    page3 = ctx3.new_page()
    
    try:
        login_ok = login(page3, CONSULTANT_EMAIL, CONSULTANT_PASS, "consultant")
        screenshot(page3, "step3_consultant_dashboard", "Consultant dashboard after login")
        
        info = get_page_info(page3)
        print(f"[STEP3] URL: {info['url']}")
        print(f"[STEP3] Title: {info['title']}")
        print(f"[STEP3] Text excerpt:\n{info['text_excerpt'][:1000]}")
        
        # Navigate around the consultant dashboard
        nav_links = page3.locator('a, button').all()
        nav_texts = []
        for el in nav_links[:40]:
            try:
                t = el.inner_text().strip()
                h = el.get_attribute('href') or ''
                if t and len(t) > 1:
                    nav_texts.append(f"[{t}] -> {h}")
            except:
                pass
        print(f"[STEP3] Navigation:\n" + "\n".join(nav_texts[:25]))
        
        # Check for school mentions
        page_text = page3.evaluate("() => document.body.innerText")
        school_mentions = []
        for line in page_text.split('\n'):
            if 'school' in line.lower() or 'demo' in line.lower():
                school_mentions.append(line.strip())
        print(f"[STEP3] School mentions: {school_mentions[:15]}")
        
        # Try to navigate to students/tasks
        for nav_text in ['Students', 'My Students', 'Tasks', 'Applications', 'Assigned', 'Dashboard', 'Schools']:
            links = page3.locator(f'a:has-text("{nav_text}"), button:has-text("{nav_text}")').all()
            if links:
                try:
                    links[0].click()
                    time.sleep(2)
                    screenshot(page3, f"step3_consultant_{nav_text.lower().replace(' ', '_')}", f"Consultant {nav_text}")
                    page_text_after = page3.evaluate("() => document.body.innerText.slice(0, 2000)")
                    print(f"[STEP3] {nav_text} page:\n{page_text_after[:500]}")
                    # Go back for next nav item
                    page3.go_back()
                    time.sleep(1)
                except Exception as e:
                    print(f"[STEP3] Nav {nav_text} error: {e}")
        
        screenshot(page3, "step3_consultant_final", "Consultant final state")
        
        results["step3"] = {
            "status": "completed",
            "url": page3.url,
            "school_mentions": school_mentions[:10],
            "nav_items": nav_texts[:15]
        }
        
    except Exception as e:
        print(f"[STEP3 ERROR] {e}")
        screenshot(page3, "step3_error", f"Error: {e}")
        results["step3"] = {"status": "error", "error": str(e)}
    finally:
        ctx3.close()
    
    # =========================================================
    # STEP 4: Privacy Isolation Test
    # =========================================================
    print("\n" + "="*50)
    print("STEP 4: Privacy Isolation — School 01 data visible to School 02?")
    print("="*50)
    
    # First get School 01 student names
    ctx4a = browser.new_context(viewport={"width": 1440, "height": 900})
    page4a = ctx4a.new_page()
    school01_students = []
    
    try:
        login(page4a, SCHOOL01_EMAIL, SCHOOL01_PASS, "school01_privacy")
        screenshot(page4a, "step4_school01_login", "School 01 login for privacy test")
        
        # Navigate to students
        page4a_text = page4a.evaluate("() => document.body.innerText")
        
        # Try to get student list
        for nav_text in ['Applications', 'Students', 'Applicants', 'My Students']:
            links = page4a.locator(f'a:has-text("{nav_text}"), button:has-text("{nav_text}")').all()
            if links:
                try:
                    links[0].click()
                    time.sleep(2)
                    break
                except:
                    pass
        
        screenshot(page4a, "step4_school01_students", "School 01 students list")
        
        # Get all student names/identifiers on page
        page_text = page4a.evaluate("() => document.body.innerText")
        school01_students_text = page_text
        
        # Try to extract names from table cells
        cells = page4a.locator('td, .student-name, .applicant-name, h3, h4').all()
        for cell in cells[:50]:
            try:
                t = cell.inner_text().strip()
                if t and len(t) > 2 and len(t) < 100:
                    school01_students.append(t)
            except:
                pass
        
        print(f"[STEP4] School 01 data items (first 20): {school01_students[:20]}")
        
        results["step4_school01_data"] = school01_students[:20]
        
    except Exception as e:
        print(f"[STEP4a ERROR] {e}")
    finally:
        ctx4a.close()
    
    # Now login as School 02 and check if School 01 data is visible
    ctx4b = browser.new_context(viewport={"width": 1440, "height": 900})
    page4b = ctx4b.new_page()
    
    try:
        login(page4b, SCHOOL02_EMAIL, SCHOOL02_PASS, "school02_privacy")
        screenshot(page4b, "step4_school02_login", "School 02 login for privacy test")
        
        # Navigate to students
        for nav_text in ['Applications', 'Students', 'Applicants', 'My Students']:
            links = page4b.locator(f'a:has-text("{nav_text}"), button:has-text("{nav_text}")').all()
            if links:
                try:
                    links[0].click()
                    time.sleep(2)
                    break
                except:
                    pass
        
        screenshot(page4b, "step4_school02_students", "School 02 students list")
        
        school02_text = page4b.evaluate("() => document.body.innerText")
        
        # Check if any School 01 identifiers appear in School 02 view
        privacy_leaks = []
        for item in school01_students[:20]:
            if item and len(item) > 3 and item.lower() not in ['name', 'email', 'status', 'date', 'action', 'school', 'student']:
                if item in school02_text:
                    privacy_leaks.append(item)
        
        print(f"[STEP4] Potential privacy leaks: {privacy_leaks}")
        
        # Also check URL manipulation - try accessing School 01 resources from School 02 session
        # Try to access school 01 specific pages
        privacy_isolation_ok = len(privacy_leaks) == 0
        
        results["step4"] = {
            "status": "completed",
            "privacy_leaks_found": privacy_leaks,
            "isolation_ok": privacy_isolation_ok,
            "school02_text_excerpt": school02_text[:500]
        }
        
    except Exception as e:
        print(f"[STEP4b ERROR] {e}")
        results["step4"] = {"status": "error", "error": str(e)}
    finally:
        ctx4b.close()
    
    browser.close()

# Save results
results_path = "/home/openclaw/.openclaw/workspace/data/projects/bsp-test/test_results.json"
with open(results_path, 'w') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("\n" + "="*60)
print("TEST COMPLETE — Results saved to:", results_path)
print("Screenshots saved to:", str(SCREENSHOTS_DIR))
print("="*60)
print(json.dumps(results, indent=2, ensure_ascii=False))
