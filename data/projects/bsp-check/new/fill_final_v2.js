/**
 * BSP FINAL v2 - Term Dates via calendar click + Full Fee Settings
 */

const { chromium } = require('/home/openclaw/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');
const path = require('path');
const fs = require('fs');

const SCREENSHOT_DIR = '/home/openclaw/.openclaw/workspace/data/projects/bsp-check/new/filled';

const SCHOOLS = [
  {
    name: 'School 01', slug: 'school_01',
    email: 'demo_school_01@britishschoolportal.co.uk', password: 'hschoolport',
    fees: { perTerm: '5500', annual: '16500', registrationFee: '150', depositLocal: '1000', depositOversea: '2000' },
  },
  {
    name: 'School 02', slug: 'school_02',
    email: 'demo_school_02@britishschoolportal.co.uk', password: 'ishschoolport',
    fees: { perTerm: '4800', annual: '14400', registrationFee: '100', depositLocal: '800', depositOversea: '1500' },
  },
  {
    name: 'BS Portal Demo School', slug: 'bsp_demo',
    email: 'demo_school@britishschoolportal.co.uk', password: '24cTFqxesd',
    fees: { perTerm: '6200', annual: '18600', registrationFee: '200', depositLocal: '1200', depositOversea: '2500' },
  },
];

// Dates: need month/day/year
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

// Navigate calendar to target year/month and click the day
async function selectCalendarDate(page, targetYear, targetMonth, targetDay) {
  try {
    // Wait for calendar to appear
    await page.waitForSelector('.el-picker-panel', { timeout: 3000 });
    
    // Get current displayed year/month
    const navigateToMonth = async () => {
      for (let attempt = 0; attempt < 30; attempt++) {
        const headerInfo = await page.evaluate(() => {
          const yearEl = document.querySelector('.el-date-picker__header-label:first-of-type, .el-date-picker__header .el-date-picker__header-label');
          const labels = document.querySelectorAll('.el-date-picker__header-label');
          if (labels.length >= 2) {
            return { year: parseInt(labels[0].textContent), month: parseInt(labels[1].textContent) };
          }
          return null;
        });
        
        if (!headerInfo) return false;
        
        if (headerInfo.year === targetYear && headerInfo.month === targetMonth) {
          return true; // Already at correct month
        }
        
        // Calculate direction
        const currentDate = new Date(headerInfo.year, headerInfo.month - 1, 1);
        const targetDate = new Date(targetYear, targetMonth - 1, 1);
        
        if (targetDate > currentDate) {
          // Click next month
          const nextBtn = await page.$('.el-date-picker__next-btn.el-icon-arrow-right');
          if (nextBtn) await nextBtn.click();
        } else {
          // Click prev month
          const prevBtn = await page.$('.el-date-picker__prev-btn.el-icon-arrow-left');
          if (prevBtn) await prevBtn.click();
        }
        await page.waitForTimeout(200);
      }
      return false;
    };
    
    const navigated = await navigateToMonth();
    if (!navigated) {
      console.log(`    ⚠️ Could not navigate to ${targetYear}/${targetMonth}`);
      return false;
    }
    
    // Click the day
    const clicked = await page.evaluate((day) => {
      const cells = document.querySelectorAll('.el-date-table td.available span, .el-date-table td:not(.disabled):not(.prev-month):not(.next-month) span');
      for (const cell of cells) {
        if (parseInt(cell.textContent.trim()) === day) {
          cell.click();
          return true;
        }
      }
      // Try clicking cell directly
      const allCells = document.querySelectorAll('.el-date-table td');
      for (const cell of allCells) {
        const span = cell.querySelector('span');
        if (span && parseInt(span.textContent.trim()) === day && !cell.classList.contains('prev-month') && !cell.classList.contains('next-month')) {
          cell.click();
          return true;
        }
      }
      return false;
    }, targetDay);
    
    if (clicked) {
      await page.waitForTimeout(400);
      return true;
    } else {
      console.log(`    ⚠️ Day ${targetDay} not found in calendar`);
      return false;
    }
  } catch (e) {
    console.log(`    ⚠️ Calendar error: ${e.message.substring(0, 80)}`);
    return false;
  }
}

// Fill a date picker by index using calendar
async function fillDateViaCalendar(page, inputIndex, dateObj, label) {
  try {
    const icons = await page.$$('.el-date-editor .el-icon-date');
    if (!icons[inputIndex]) {
      console.log(`    ⚠️ No calendar icon at index ${inputIndex}`);
      return false;
    }
    
    await icons[inputIndex].click();
    await page.waitForTimeout(500);
    
    const result = await selectCalendarDate(page, dateObj.y, dateObj.m, dateObj.d);
    if (result) {
      // Verify the value was set
      const inputs = await page.$$('.el-input__inner[placeholder="Select Date"]');
      const val = inputs[inputIndex] ? await inputs[inputIndex].inputValue() : '';
      console.log(`    ✅ ${label}: ${val || 'set (no verify)'}`);
      return true;
    }
    return false;
  } catch (e) {
    console.log(`    ⚠️ ${label} failed: ${e.message.substring(0, 80)}`);
    return false;
  }
}

async function fillTermDates(page, slug) {
  console.log(`\n  📅 Term Dates...`);

  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/term"]');
    if (link) link.click();
  });
  await page.waitForTimeout(4000);

  const results = {};
  const TERM_YEARS = ['2025/2026', '2026/2027', '2027/2028'];
  const TERM_NAMES = ['Autumn', 'Spring', 'Summer'];

  for (let yearIdx = 0; yearIdx < TERM_YEARS.length; yearIdx++) {
    const yearLabel = TERM_YEARS[yearIdx];
    console.log(`\n  📆 ${yearLabel}`);
    results[yearLabel] = {};

    // Click Edit
    await page.evaluate(() => {
      const link = document.querySelector('#tab-term a.inline-link');
      if (link) link.click();
    });
    await page.waitForTimeout(1500);

    // Click year tab
    const tabs = await page.$$('.tab-bar .tab');
    if (tabs[yearIdx]) {
      await tabs[yearIdx].click();
      await page.waitForTimeout(1000);
    }

    const yearDates = TERM_DATES[yearLabel];

    for (let termIdx = 0; termIdx < TERM_NAMES.length; termIdx++) {
      const termName = TERM_NAMES[termIdx];
      const termData = yearDates[termName];
      const baseIdx = termIdx * 4;

      results[yearLabel][termName] = {};
      results[yearLabel][termName].start = await fillDateViaCalendar(page, baseIdx, termData.start, `${termName} Start`);
      results[yearLabel][termName].end = await fillDateViaCalendar(page, baseIdx + 1, termData.end, `${termName} End`);
      results[yearLabel][termName].halfStart = await fillDateViaCalendar(page, baseIdx + 2, termData.halfStart, `${termName} Half Start`);
      results[yearLabel][termName].halfEnd = await fillDateViaCalendar(page, baseIdx + 3, termData.halfEnd, `${termName} Half End`);
    }

    // Verify values filled
    const vals = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.el-input__inner[placeholder="Select Date"]')).map((el, i) => ({ i, val: el.value })).filter(v => v.val);
    });
    console.log(`  Values: ${vals.length}/12 filled`);
    vals.forEach(v => console.log(`    [${v.i}] = ${v.val}`));

    // Save
    await page.evaluate(() => {
      const saveBtn = document.querySelector('a.cs-button');
      if (saveBtn) saveBtn.click();
    });
    await page.waitForTimeout(3000);
    console.log(`  ✅ Saved ${yearLabel}`);

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${slug}_term_${yearIdx}.png`), fullPage: false });
    results[yearLabel].saved = true;
  }

  return results;
}

async function fillFees(page, school) {
  console.log(`\n  💰 Fee Settings...`);

  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/fee"]');
    if (link) link.click();
  });
  await page.waitForTimeout(4000);

  // Click Edit
  await page.evaluate(() => {
    const link = document.querySelector('#tab-fee a.inline-link, .form-fee a.inline-link, a.inline-link');
    if (link) link.click();
  });
  await page.waitForTimeout(1500);

  const results = {};

  // ==== Per Terms Tab ====
  const tabs = await page.$$('.tab-bar .tab');
  console.log(`  Fee tabs: ${tabs.length}`);
  if (tabs[1]) { // "Per Terms" tab
    await tabs[1].click();
    await page.waitForTimeout(1000);

    const perTermInputs = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('.tab-body input.form-control'));
      return inputs.map((el, i) => ({ i, id: el.id, value: el.value }));
    });
    console.log(`  Per Terms inputs: ${JSON.stringify(perTermInputs)}`);

    // Fill all per-term inputs with the value
    const filled = await page.evaluate((perTerm) => {
      const inputs = document.querySelectorAll('.tab-body input.form-control');
      let count = 0;
      inputs.forEach(inp => {
        inp.value = perTerm;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
        inp.dispatchEvent(new Event('change', { bubbles: true }));
        count++;
      });
      return count;
    }, school.fees.perTerm);
    console.log(`  Filled ${filled} per-term inputs with ${school.fees.perTerm}`);
    results.perTerm = filled;
  }

  // ==== Annual Tab ====
  if (tabs[2]) {
    await tabs[2].click();
    await page.waitForTimeout(1000);

    const filled = await page.evaluate((annual) => {
      const inputs = document.querySelectorAll('.tab-body input.form-control');
      let count = 0;
      inputs.forEach(inp => {
        inp.value = annual;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
        inp.dispatchEvent(new Event('change', { bubbles: true }));
        count++;
      });
      return count;
    }, school.fees.annual);
    console.log(`  Filled ${filled} annual inputs with ${school.fees.annual}`);
    results.annual = filled;
  }

  // ==== Registration Fee ====
  try {
    // The registration fee input has no id, but is after the radio buttons
    await page.evaluate((regFee) => {
      // Find the registration fee text input (no id, after radio buttons)
      const regSection = document.querySelector('.d-flex.flex-wrap');
      if (regSection) {
        const inp = regSection.querySelector('input.form-control');
        if (inp) {
          inp.value = regFee;
          inp.dispatchEvent(new Event('input', { bubbles: true }));
          inp.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }, school.fees.registrationFee);
    console.log(`  ✅ Registration Fee: ${school.fees.registrationFee}`);
    results.registrationFee = true;

    // Set non-refundable radio
    await page.evaluate(() => {
      const radio = document.querySelector('input[name="application"][value="false"]');
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event('change', { bubbles: true }));
        radio.click();
      }
    });
  } catch (e) { console.log(`  ⚠️ Registration fee: ${e.message.substring(0, 60)}`); }

  // ==== Deposit ====
  try {
    await page.fill('#local', school.fees.depositLocal);
    console.log(`  ✅ Deposit Local: ${school.fees.depositLocal}`);
    results.depositLocal = true;
  } catch (e) { console.log(`  ⚠️ Deposit Local: ${e.message.substring(0, 60)}`); }

  try {
    await page.fill('#oversea', school.fees.depositOversea);
    console.log(`  ✅ Deposit Overseas: ${school.fees.depositOversea}`);
    results.depositOversea = true;
  } catch (e) { console.log(`  ⚠️ Deposit Overseas: ${e.message.substring(0, 60)}`); }

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${school.slug}_fees_v2.png`), fullPage: false });

  // Save
  await page.evaluate(() => {
    const saveBtn = document.querySelector('a.cs-button');
    if (saveBtn) saveBtn.click();
  });
  await page.waitForTimeout(3000);
  console.log(`  ✅ Fees saved`);
  results.saved = true;

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${school.slug}_fees_v2_saved.png`), fullPage: false });

  return results;
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

    results.termDates = await fillTermDates(page, school.slug);
    results.fees = await fillFees(page, school);

  } catch (e) {
    console.log(`❌ Fatal: ${e.message}`);
    results.error = e.message;
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${school.slug}_error.png`), fullPage: false });
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

  console.log('\n\n=== FINAL SUMMARY ===');
  console.log(JSON.stringify(all, null, 2));
  fs.writeFileSync(path.join(SCREENSHOT_DIR, 'final_v2.json'), JSON.stringify(all, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
