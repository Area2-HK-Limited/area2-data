/**
 * Verify all 3 schools: check what's actually saved
 */

const { chromium } = require('/home/openclaw/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');
const path = require('path');

const SCREENSHOT_DIR = '/home/openclaw/.openclaw/workspace/data/projects/bsp-check/new/filled';

const SCHOOLS = [
  { name: 'School 01', slug: 'school_01', email: 'demo_school_01@britishschoolportal.co.uk', password: 'hschoolport' },
  { name: 'School 02', slug: 'school_02', email: 'demo_school_02@britishschoolportal.co.uk', password: 'ishschoolport' },
  { name: 'BS Portal Demo School', slug: 'bsp_demo', email: 'demo_school@britishschoolportal.co.uk', password: '24cTFqxesd' },
];

async function verify(page, school) {
  // Login
  await page.goto('https://www.britishschoolportal.co.uk/en/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.fill('input[type="email"]', school.email);
  await page.fill('input[type="password"]', school.password);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(4000);

  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);

  const results = {};

  // Check Profile
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/profile"]');
    if (link) link.click();
  });
  await page.waitForTimeout(3000);

  results.profile = await page.evaluate(() => ({
    display_email: document.getElementById('display_email')?.value,
    school_phone: document.getElementById('school_phone')?.value,
    accountName: document.getElementById('school_accountNameInput')?.value,
    contact1Email: document.getElementById('school_1_personEmailInput')?.value,
    textareas: Array.from(document.querySelectorAll('textarea.form-control')).map(t => t.value.substring(0, 30)),
  }));

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, `verify_${school.slug}_profile.png`), fullPage: false });

  // Check Term Dates (view mode - should show values if saved)
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/term"]');
    if (link) link.click();
  });
  await page.waitForTimeout(4000);

  // In view mode, dates appear as text (not in inputs)
  results.termDates = await page.evaluate(() => {
    const dateInputs = Array.from(document.querySelectorAll('.el-input__inner[placeholder="Select Date"]'));
    const tableCells = Array.from(document.querySelectorAll('.form-term td, #tab-term td'));
    const textContent = document.getElementById('tab-term')?.textContent || '';
    
    return {
      dateInputValues: dateInputs.map((el, i) => ({ i, val: el.value })).filter(v => v.val),
      tableCellCount: tableCells.length,
      // Look for date patterns in text
      datesFound: (textContent.match(/\d{2}\/\d{2}\/\d{4}/g) || []).slice(0, 20),
      fullText: textContent.replace(/\s+/g, ' ').substring(0, 500),
    };
  });

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, `verify_${school.slug}_term.png`), fullPage: false });

  // Check Fee
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/fee"]');
    if (link) link.click();
  });
  await page.waitForTimeout(3000);

  results.fees = await page.evaluate(() => {
    const feeSection = document.getElementById('tab-fee') || document.querySelector('.form-fee') || document.body;
    return {
      localValue: document.getElementById('local')?.value,
      overseaValue: document.getElementById('oversea')?.value,
      sectionText: feeSection.textContent?.replace(/\s+/g, ' ').substring(0, 300),
    };
  });

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, `verify_${school.slug}_fee.png`), fullPage: false });

  return results;
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/home/openclaw/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
  });

  for (const school of SCHOOLS) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🏫 Verifying: ${school.name}`);

    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      viewport: { width: 1440, height: 900 },
    });
    const page = await context.newPage();

    try {
      const results = await verify(page, school);
      console.log('\nProfile:', JSON.stringify(results.profile, null, 2));
      console.log('\nTerm Dates:', JSON.stringify(results.termDates, null, 2));
      console.log('\nFees:', JSON.stringify(results.fees, null, 2));
    } catch (e) {
      console.log('Error:', e.message);
    }

    await context.close();
  }

  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
