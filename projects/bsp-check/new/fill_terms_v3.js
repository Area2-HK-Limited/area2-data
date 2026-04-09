/**
 * BSP Term Dates v3 - Fixed calendar flow with proper wait after each selection
 */

const { chromium } = require('/home/openclaw/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');
const path = require('path');
const fs = require('fs');

const SCREENSHOT_DIR = '/home/openclaw/.openclaw/workspace/data/projects/bsp-check/new/filled';

const SCHOOLS = [
  { name: 'School 01', slug: 'school_01', email: 'demo_school_01@britishschoolportal.co.uk', password: 'hschoolport' },
  { name: 'School 02', slug: 'school_02', email: 'demo_school_02@britishschoolportal.co.uk', password: 'ishschoolport' },
  { name: 'BS Portal Demo School', slug: 'bsp_demo', email: 'demo_school@britishschoolportal.co.uk', password: '24cTFqxesd' },
];

const TERM_YEARS = ['2025/2026', '2026/2027', '2027/2028'];
const TERM_NAMES = ['Autumn', 'Spring', 'Summer'];

const TERM_DATES = {
  '2025/2026': {
    Autumn: { start: { y: 2025, m: 9, d: 3 }, end: { y: 2025, m: 12, d: 12 }, halfStart: { y: 2025, m: 10, d: 27 }, halfEnd: { y: 2025, m: 10, d: 31 } },
    Spring: { start: { y: 2026, m: 1, d: 7 }, end: { y: 2026, m: 3, d: 27 }, halfStart: { y: 2026, m: 2, d: 16 }, halfEnd: { y: 2026, m: 2, d: 20 } },
    Summer: { start: { y: 2026, m: 4, d: 17 }, end: { y: 2026, m: 7, d: 10 }, halfStart: { y: 2026, m: 5, d: 25 }, halfEnd: { y: 2026, m: 5, d: 29 } },
  },
  '2026/2027': {
    Autumn: { start: { y: 2026, m: 9, d: 2 }, end: { y: 2026, m: 12, d: 11 }, halfStart: { y: 2026, m: 10, d: 26 }, halfEnd: { y: 2026, m: 10, d: 30 } },
    Spring: { start: { y: 2027, m: 1, d: 6 }, end: { y: 2027, m: 3, d: 26 }, halfStart: { y: 2027, m: 2, d: 15 }, halfEnd: { y: 2027, m: 2, d: 19 } },
    Summer: { start: { y: 2027, m: 4, d: 16 }, end: { y: 2027, m: 7, d: 9 }, halfStart: { y: 2027, m: 5, d: 31 }, halfEnd: { y: 2027, m: 6, d: 4 } },
  },
  '2027/2028': {
    Autumn: { start: { y: 2027, m: 9, d: 1 }, end: { y: 2027, m: 12, d: 10 }, halfStart: { y: 2027, m: 10, d: 25 }, halfEnd: { y: 2027, m: 10, d: 29 } },
    Spring: { start: { y: 2028, m: 1, d: 5 }, end: { y: 2028, m: 3, d: 24 }, halfStart: { y: 2028, m: 2, d: 14 }, halfEnd: { y: 2028, m: 2, d: 18 } },
    Summer: { start: { y: 2028, m: 4, d: 14 }, end: { y: 2028, m: 7, d: 7 }, halfStart: { y: 2028, m: 5, d: 29 }, halfEnd: { y: 2028, m: 6, d: 2 } },
  },
};

// Wait for calendar panel to be visible
async function waitForCalendar(page, timeoutMs = 5000) {
  try {
    await page.waitForSelector('.el-picker-panel', { state: 'visible', timeout: timeoutMs });
    return true;
  } catch {
    return false;
  }
}

// Wait for calendar panel to close
async function waitForCalendarClose(page, timeoutMs = 3000) {
  try {
    await page.waitForSelector('.el-picker-panel', { state: 'hidden', timeout: timeoutMs });
  } catch {
    // If it doesn't close, press Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
  }
}

async function navigateCalendarToMonth(page, targetYear, targetMonth, maxSteps = 40) {
  for (let step = 0; step < maxSteps; step++) {
    const headerInfo = await page.evaluate(() => {
      const labels = document.querySelectorAll('.el-picker-panel .el-date-picker__header-label');
      if (labels.length >= 2) {
        return {
          year: parseInt(labels[0].textContent),
          month: parseInt(labels[1].textContent),
        };
      }
      return null;
    });

    if (!headerInfo) return false;
    if (headerInfo.year === targetYear && headerInfo.month === targetMonth) return true;

    const currentDate = new Date(headerInfo.year, headerInfo.month - 1, 1);
    const targetDate = new Date(targetYear, targetMonth - 1, 1);

    // If more than 1 year away, use year navigation
    const monthsDiff = (targetDate.getFullYear() - currentDate.getFullYear()) * 12 + (targetDate.getMonth() - currentDate.getMonth());
    
    if (Math.abs(monthsDiff) > 6) {
      // Use year arrows
      if (monthsDiff > 0) {
        const btn = await page.$('.el-picker-panel .el-date-picker__prev-btn.el-icon-d-arrow-right, .el-picker-panel .el-date-picker__next-btn.el-icon-d-arrow-right');
        if (btn) await btn.click();
      } else {
        const btn = await page.$('.el-picker-panel .el-date-picker__prev-btn.el-icon-d-arrow-left');
        if (btn) await btn.click();
      }
    } else if (monthsDiff > 0) {
      const btn = await page.$('.el-picker-panel .el-date-picker__next-btn.el-icon-arrow-right');
      if (btn) await btn.click();
    } else {
      const btn = await page.$('.el-picker-panel .el-date-picker__prev-btn.el-icon-arrow-left');
      if (btn) await btn.click();
    }
    await page.waitForTimeout(300);
  }
  return false;
}

async function clickDayInCalendar(page, targetDay) {
  return await page.evaluate((day) => {
    const rows = document.querySelectorAll('.el-picker-panel .el-date-table__row');
    for (const row of rows) {
      const cells = row.querySelectorAll('td');
      for (const cell of cells) {
        if (cell.classList.contains('prev-month') || cell.classList.contains('next-month')) continue;
        const span = cell.querySelector('span');
        if (span && parseInt(span.textContent.trim()) === day) {
          // Try clicking the div inside first
          const innerDiv = cell.querySelector('div');
          if (innerDiv) { innerDiv.click(); return true; }
          cell.click();
          return true;
        }
      }
    }
    return false;
  }, targetDay);
}

async function fillSingleDate(page, inputIndex, dateObj, label) {
  // First ensure no calendar is open
  const isOpen = await page.$('.el-picker-panel');
  if (isOpen) {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  }

  // Re-get the calendar icon at the specified index
  const icons = await page.$$('.el-date-editor .el-icon-date');
  if (!icons[inputIndex]) {
    console.log(`    ⚠️ No icon[${inputIndex}]`);
    return false;
  }

  // Click the calendar icon
  await icons[inputIndex].click();
  await page.waitForTimeout(600);

  // Wait for calendar to appear
  const appeared = await waitForCalendar(page, 4000);
  if (!appeared) {
    // Try clicking the input directly
    const inputs = await page.$$('.el-input__inner[placeholder="Select Date"]');
    if (inputs[inputIndex]) {
      await inputs[inputIndex].click();
      await page.waitForTimeout(600);
      const appeared2 = await waitForCalendar(page, 3000);
      if (!appeared2) {
        console.log(`    ⚠️ Calendar did not appear for [${inputIndex}]`);
        return false;
      }
    } else {
      return false;
    }
  }

  // Navigate to target month
  const navigated = await navigateCalendarToMonth(page, dateObj.y, dateObj.m);
  if (!navigated) {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    console.log(`    ⚠️ Could not navigate to ${dateObj.y}/${dateObj.m}`);
    return false;
  }

  // Click the day
  const clicked = await clickDayInCalendar(page, dateObj.d);
  if (!clicked) {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    console.log(`    ⚠️ Day ${dateObj.d} not clickable`);
    return false;
  }

  // Wait for calendar to close after selection
  await page.waitForTimeout(500);
  await waitForCalendarClose(page, 2000);

  // Verify
  const inputs = await page.$$('.el-input__inner[placeholder="Select Date"]');
  const val = inputs[inputIndex] ? await inputs[inputIndex].inputValue() : '';
  if (val) {
    console.log(`    ✅ ${label}: ${val}`);
    return true;
  } else {
    console.log(`    ⚠️ ${label}: value empty after selection`);
    return false;
  }
}

async function fillTermDatesForSchool(page, slug) {
  console.log(`\n  📅 Term Dates...`);

  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/term"]');
    if (link) link.click();
  });
  await page.waitForTimeout(4000);

  const yearResults = {};

  for (let yearIdx = 0; yearIdx < TERM_YEARS.length; yearIdx++) {
    const yearLabel = TERM_YEARS[yearIdx];
    console.log(`\n  📆 ${yearLabel} (Year ${yearIdx + 1}/3)`);
    yearResults[yearLabel] = {};

    // Click Edit (always click Edit before starting a year)
    await page.evaluate(() => {
      const link = document.querySelector('#tab-term a.inline-link');
      if (link && link.textContent.includes('Edit')) link.click();
    });
    await page.waitForTimeout(1500);

    // Click year tab
    const tabs = await page.$$('.tab-bar .tab');
    if (tabs[yearIdx]) {
      await tabs[yearIdx].click();
      await page.waitForTimeout(1000);
    }

    const yearDates = TERM_DATES[yearLabel];
    let successCount = 0;

    for (let termIdx = 0; termIdx < TERM_NAMES.length; termIdx++) {
      const termName = TERM_NAMES[termIdx];
      const termData = yearDates[termName];
      const baseIdx = termIdx * 4;

      yearResults[yearLabel][termName] = {};

      const r1 = await fillSingleDate(page, baseIdx, termData.start, `${termName} Start`);
      yearResults[yearLabel][termName].start = r1;
      if (r1) successCount++;

      const r2 = await fillSingleDate(page, baseIdx + 1, termData.end, `${termName} End`);
      yearResults[yearLabel][termName].end = r2;
      if (r2) successCount++;

      const r3 = await fillSingleDate(page, baseIdx + 2, termData.halfStart, `${termName} Half Start`);
      yearResults[yearLabel][termName].halfStart = r3;
      if (r3) successCount++;

      const r4 = await fillSingleDate(page, baseIdx + 3, termData.halfEnd, `${termName} Half End`);
      yearResults[yearLabel][termName].halfEnd = r4;
      if (r4) successCount++;
    }

    // Final check of values
    const vals = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.el-input__inner[placeholder="Select Date"]')).map((el, i) => ({ i, val: el.value })).filter(v => v.val);
    });
    console.log(`  Verified: ${vals.length}/12 dates in DOM`);

    // Click SAVE
    await page.evaluate(() => {
      const saveBtn = document.querySelector('a.cs-button');
      if (saveBtn) saveBtn.click();
    });
    await page.waitForTimeout(3000);

    // Check for success
    const msgVisible = await page.evaluate(() => {
      const alerts = document.querySelectorAll('.alert-success, .swal2-popup');
      return alerts.length > 0;
    });
    console.log(`  Save clicked. Success alert: ${msgVisible}. Dates filled: ${successCount}/12`);
    yearResults[yearLabel].saved = true;
    yearResults[yearLabel].datesFilledInDOM = vals.length;

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${slug}_term_y${yearIdx + 1}.png`), fullPage: false });
  }

  return yearResults;
}

async function processSchool(browser, school) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🏫 ${school.name}`);

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  const results = {};

  try {
    await page.goto('https://www.britishschoolportal.co.uk/en/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    await page.fill('input[type="email"]', school.email);
    await page.fill('input[type="password"]', school.password);
    await page.click('button[type="submit"]');
    await page.waitForTimeout(4000);

    await page.goto('https://www.britishschoolportal.co.uk/en/profile/school', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(5000);

    results.termDates = await fillTermDatesForSchool(page, school.slug);
  } catch (e) {
    console.log(`❌ Fatal: ${e.message}`);
    results.error = e.message;
  }

  await context.close();
  return results;
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/home/openclaw/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
  });

  const all = {};
  for (const school of SCHOOLS) {
    all[school.name] = await processSchool(browser, school);
  }

  await browser.close();

  console.log('\n\n=== TERM DATES SUMMARY ===');
  console.log(JSON.stringify(all, null, 2));
  fs.writeFileSync(path.join(SCREENSHOT_DIR, 'term_v3.json'), JSON.stringify(all, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
