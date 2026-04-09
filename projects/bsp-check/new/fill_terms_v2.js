/**
 * BSP Term Dates - Proper ElUI datepicker input via click + keyboard
 * and find the SAVE button (a.cs-button)
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

// Dates in MM/DD/YYYY format (US format for El-UI datepicker which uses this)
const TERM_DATES_BY_YEAR = {
  '2025/2026': {
    Autumn: { start: '09/03/2025', end: '12/12/2025', halfStart: '10/27/2025', halfEnd: '10/31/2025' },
    Spring: { start: '01/07/2026', end: '03/27/2026', halfStart: '02/16/2026', halfEnd: '02/20/2026' },
    Summer: { start: '04/17/2026', end: '07/10/2026', halfStart: '05/25/2026', halfEnd: '05/29/2026' },
  },
  '2026/2027': {
    Autumn: { start: '09/02/2026', end: '12/11/2026', halfStart: '10/26/2026', halfEnd: '10/30/2026' },
    Spring: { start: '01/06/2027', end: '03/26/2027', halfStart: '02/15/2027', halfEnd: '02/19/2027' },
    Summer: { start: '04/16/2027', end: '07/09/2027', halfStart: '05/31/2027', halfEnd: '06/04/2027' },
  },
  '2027/2028': {
    Autumn: { start: '09/01/2027', end: '12/10/2027', halfStart: '10/25/2027', halfEnd: '10/29/2027' },
    Spring: { start: '01/05/2028', end: '03/24/2028', halfStart: '02/14/2028', halfEnd: '02/18/2028' },
    Summer: { start: '04/14/2028', end: '07/07/2028', halfStart: '05/29/2028', halfEnd: '06/02/2028' },
  },
};

// Fill an Element UI datepicker by clicking it, typing the date, pressing Enter
async function fillElDatepicker(page, inputIndex, dateStr, label) {
  try {
    // Get all date inputs
    const inputs = await page.$$('.el-input__inner[placeholder="Select Date"]');
    if (!inputs[inputIndex]) {
      console.log(`    ⚠️ Input[${inputIndex}] not found`);
      return false;
    }
    
    const input = inputs[inputIndex];
    
    // Click to focus and open datepicker
    await input.click();
    await page.waitForTimeout(300);
    
    // Clear and type the date
    await input.fill('');
    await input.type(dateStr, { delay: 30 });
    await page.waitForTimeout(300);
    
    // Press Enter to confirm
    await input.press('Enter');
    await page.waitForTimeout(300);
    
    // Check if value was set
    const value = await input.inputValue();
    if (value) {
      console.log(`    ✅ ${label}: ${value}`);
      return true;
    } else {
      // Try pressing Tab to confirm
      await input.press('Tab');
      await page.waitForTimeout(200);
      const value2 = await input.inputValue();
      if (value2) {
        console.log(`    ✅ ${label} (via Tab): ${value2}`);
        return true;
      }
      
      // Last resort: use keyboard shortcut or direct Vue assignment
      // Try using the calendar popup if it appeared
      const pickerPanel = await page.$('.el-picker-panel');
      if (pickerPanel) {
        // Close it and try again with Escape
        await page.keyboard.press('Escape');
        await page.waitForTimeout(200);
      }
      
      console.log(`    ⚠️ ${label}: failed to set (got empty after typing ${dateStr})`);
      return false;
    }
  } catch (e) {
    console.log(`    ⚠️ ${label} error: ${e.message.substring(0, 80)}`);
    return false;
  }
}

async function fillTermDatesForSchool(page, schoolSlug) {
  console.log(`\n  📅 Term Dates for ${schoolSlug}...`);
  
  // Navigate to term page
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/term"]');
    if (link) link.click();
  });
  await page.waitForTimeout(4000);

  // Click Edit
  await page.evaluate(() => {
    const link = document.querySelector('#tab-term a.inline-link, .form-term a.inline-link');
    if (link) link.click();
  });
  await page.waitForTimeout(2000);

  // Get tabs
  const tabs = await page.$$('.tab-bar .tab');
  console.log(`  Found ${tabs.length} year tabs`);

  const results = {};

  for (let yearIdx = 0; yearIdx < TERM_YEARS.length; yearIdx++) {
    const yearLabel = TERM_YEARS[yearIdx];
    console.log(`\n  📆 Year: ${yearLabel} (tab ${yearIdx})`);
    results[yearLabel] = {};

    // Click year tab
    if (tabs[yearIdx]) {
      await tabs[yearIdx].click();
      await page.waitForTimeout(1500);
    }

    const dates = TERM_DATES_BY_YEAR[yearLabel];
    const termNames = ['Autumn', 'Spring', 'Summer'];

    // Fill term dates (4 inputs per term, 3 terms = 12 total)
    for (let termIdx = 0; termIdx < termNames.length; termIdx++) {
      const termName = termNames[termIdx];
      const termData = dates[termName];
      const baseIdx = termIdx * 4;

      results[yearLabel][termName] = {};
      results[yearLabel][termName].start = await fillElDatepicker(page, baseIdx, termData.start, `${termName} Starts`);
      results[yearLabel][termName].end = await fillElDatepicker(page, baseIdx + 1, termData.end, `${termName} Ends`);
      results[yearLabel][termName].halfStart = await fillElDatepicker(page, baseIdx + 2, termData.halfStart, `${termName} Half Starts`);
      results[yearLabel][termName].halfEnd = await fillElDatepicker(page, baseIdx + 3, termData.halfEnd, `${termName} Half Ends`);
    }

    // Check values are filled
    const filledValues = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.el-input__inner[placeholder="Select Date"]')).map((el, i) => ({
        index: i,
        value: el.value,
      })).filter(v => v.value);
    });
    console.log(`  Values filled for ${yearLabel}: ${filledValues.length}/12`);
    filledValues.forEach(v => console.log(`    [${v.index}] = ${v.value}`));

    // SAVE - use a.cs-button
    try {
      await page.evaluate(() => {
        const saveBtn = document.querySelector('a.cs-button');
        if (saveBtn) saveBtn.click();
      });
      await page.waitForTimeout(3000);
      
      // Check for success message
      const successMsg = await page.$('.alert-success, .swal2-success, .success-message, [class*="success"]');
      if (successMsg) {
        const msgText = await successMsg.textContent();
        console.log(`  ✅ Year ${yearLabel} SAVED: ${msgText.trim().substring(0, 60)}`);
        results[yearLabel].saved = true;
      } else {
        console.log(`  ℹ️ Year ${yearLabel} - SAVE clicked (checking page state)`);
        // Take screenshot
        await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${schoolSlug}_term_${yearIdx}_saved.png`), fullPage: false });
        results[yearLabel].saved = 'clicked';
      }
    } catch (e) {
      console.log(`  ⚠️ Save error: ${e.message.substring(0, 80)}`);
      results[yearLabel].saved = false;
    }

    // Re-click Edit for next year
    if (yearIdx < TERM_YEARS.length - 1) {
      await page.evaluate(() => {
        const link = document.querySelector('#tab-term a.inline-link, .form-term a.inline-link');
        if (link) link.click();
      });
      await page.waitForTimeout(2000);
      
      // Re-fetch tabs after edit click
      const newTabs = await page.$$('.tab-bar .tab');
      if (newTabs[yearIdx + 1]) {
        // Click next tab
        await newTabs[yearIdx + 1].click();
        await page.waitForTimeout(1500);
      }
    }
  }

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${schoolSlug}_term_final.png`), fullPage: false });
  return results;
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/home/openclaw/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
  });

  const allResults = {};

  for (const school of SCHOOLS) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🏫 ${school.name}`);
    
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      viewport: { width: 1440, height: 900 },
    });
    const page = await context.newPage();

    try {
      // Login
      await page.goto('https://www.britishschoolportal.co.uk/en/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(1500);
      await page.fill('input[type="email"]', school.email);
      await page.fill('input[type="password"]', school.password);
      await page.click('button[type="submit"]');
      await page.waitForTimeout(4000);

      await page.goto('https://www.britishschoolportal.co.uk/en/profile/school', { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(5000);

      allResults[school.name] = await fillTermDatesForSchool(page, school.slug);
    } catch (e) {
      console.log(`  ❌ Fatal: ${e.message}`);
      allResults[school.name] = { error: e.message };
    }

    await context.close();
  }

  await browser.close();

  console.log('\n\n=== SUMMARY ===');
  console.log(JSON.stringify(allResults, null, 2));

  fs.writeFileSync(path.join(SCREENSHOT_DIR, 'term_results.json'), JSON.stringify(allResults, null, 2));
}

main().catch(e => {
  console.error('Fatal:', e);
  process.exit(1);
});
