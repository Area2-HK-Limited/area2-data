/**
 * Deep inspect Fee + Term in view mode + understand structure
 */

const { chromium } = require('/home/openclaw/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');
const path = require('path');

const SCREENSHOT_DIR = '/home/openclaw/.openclaw/workspace/data/projects/bsp-check/new/filled';

async function run() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/home/openclaw/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  await page.goto('https://www.britishschoolportal.co.uk/en/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.fill('input[type="email"]', 'demo_school_01@britishschoolportal.co.uk');
  await page.fill('input[type="password"]', 'hschoolport');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(4000);

  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);

  // ==== FEE PAGE - VIEW MODE ====
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/fee"]');
    if (link) link.click();
  });
  await page.waitForTimeout(4000);

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'fee_view.png'), fullPage: true });

  const feeHtml = await page.evaluate(() => {
    return document.getElementById('tab-fee')?.innerHTML || document.querySelector('.form-fee')?.innerHTML || 'NOT FOUND';
  });
  console.log('=== FEE VIEW HTML ===');
  console.log(feeHtml.substring(0, 10000));

  // Now click Edit and see all inputs
  await page.evaluate(() => {
    const link = document.querySelector('#tab-fee a.inline-link, .form-fee a.inline-link, a.inline-link');
    if (link) link.click();
  });
  await page.waitForTimeout(2000);

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'fee_edit.png'), fullPage: true });

  const feeEditHtml = await page.evaluate(() => {
    return document.getElementById('tab-fee')?.innerHTML || document.querySelector('.form-fee')?.innerHTML || 'NOT FOUND';
  });
  console.log('\n=== FEE EDIT HTML ===');
  console.log(feeEditHtml.substring(0, 8000));

  const feeInputs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('#tab-fee input, #tab-fee select, #tab-fee textarea, .form-fee input, .form-fee select')).map(el => ({
      tag: el.tagName,
      type: el.type || '',
      id: el.id,
      name: el.name,
      value: el.value,
      placeholder: el.placeholder,
      class: el.className.substring(0, 80),
      label: (() => {
        const tr = el.closest('tr');
        if (tr) {
          const label = tr.querySelector('th, td:first-child label, td:first-child');
          return label ? label.textContent.trim().substring(0, 40) : '';
        }
        const parent = el.closest('.form-group');
        if (parent) {
          const label = parent.querySelector('label');
          return label ? label.textContent.trim().substring(0, 40) : '';
        }
        return '';
      })(),
    }));
  });
  console.log('\nFee edit inputs:');
  feeInputs.forEach(inp => console.log(JSON.stringify(inp)));

  // ==== TERM PAGE - Try click calendar icon ====
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/term"]');
    if (link) link.click();
  });
  await page.waitForTimeout(4000);

  // Click Edit
  await page.evaluate(() => {
    const link = document.querySelector('#tab-term a.inline-link');
    if (link) link.click();
  });
  await page.waitForTimeout(2000);

  // Try clicking calendar icon on first date picker
  const calendarIcons = await page.$$('.el-date-editor .el-icon-date');
  console.log(`\nCalendar icons found: ${calendarIcons.length}`);
  
  if (calendarIcons.length > 0) {
    await calendarIcons[0].click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'term_calendar_open.png'), fullPage: false });
    
    // Get the calendar popup HTML
    const calendarHtml = await page.evaluate(() => {
      const popup = document.querySelector('.el-picker-panel, .el-date-picker');
      return popup ? popup.innerHTML.substring(0, 3000) : 'NOT FOUND';
    });
    console.log('\nCalendar popup HTML:');
    console.log(calendarHtml);
  }

  await browser.close();
}

run().catch(e => { console.error(e); process.exit(1); });
