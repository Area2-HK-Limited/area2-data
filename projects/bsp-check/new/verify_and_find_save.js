/**
 * Find Term Dates save button and verify data was saved
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

  // Go to term
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

  // Get ALL buttons and links in #tab-term
  const termButtons = await page.evaluate(() => {
    const container = document.getElementById('tab-term') || document.querySelector('.form-term') || document.body;
    return Array.from(container.querySelectorAll('button, a, input[type="submit"]')).map(el => ({
      tag: el.tagName,
      type: el.type || '',
      id: el.id,
      class: el.className,
      text: el.textContent.trim().substring(0, 60),
      href: el.href || '',
      visible: el.offsetParent !== null,
      disabled: el.disabled,
    }));
  });
  console.log('All buttons in term section:');
  termButtons.forEach(b => console.log(JSON.stringify(b)));

  // Get the full form HTML after edit
  const termHtml = await page.evaluate(() => {
    const container = document.getElementById('tab-term') || document.querySelector('.form-term');
    return container ? container.innerHTML : 'NOT FOUND';
  });
  console.log('\n\nTerm form HTML in EDIT mode:');
  console.log(termHtml.substring(0, 8000));

  // Check currently filled values
  const currentValues = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.el-input__inner[placeholder="Select Date"]')).map((el, i) => ({
      index: i,
      value: el.value,
      readonly: el.readOnly,
    }));
  });
  console.log('\nCurrent date input values:');
  currentValues.forEach(v => console.log(JSON.stringify(v)));

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'term_edit_mode.png'), fullPage: true });

  // ===== VERIFY PROFILE WAS SAVED =====
  console.log('\n\n=== VERIFY PROFILE ===');
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/profile"]');
    if (link) link.click();
  });
  await page.waitForTimeout(3000);

  const profileValues = await page.evaluate(() => {
    return {
      display_email: document.getElementById('display_email')?.value,
      school_phone: document.getElementById('school_phone')?.value,
      school_web: document.getElementById('school_web')?.value,
      school_fb: document.getElementById('school_fb')?.value,
      accountName: document.getElementById('school_accountNameInput')?.value,
      contact1Email: document.getElementById('school_1_personEmailInput')?.value,
    };
  });
  console.log('Profile values currently in DOM:', JSON.stringify(profileValues, null, 2));

  // ===== VERIFY FEE =====
  console.log('\n\n=== VERIFY FEE ===');
  await page.evaluate(() => {
    const link = document.querySelector('a[href="#/fee"]');
    if (link) link.click();
  });
  await page.waitForTimeout(3000);

  const feeValues = await page.evaluate(() => {
    return {
      local: document.getElementById('local')?.value,
      oversea: document.getElementById('oversea')?.value,
    };
  });
  console.log('Fee values currently in DOM:', JSON.stringify(feeValues, null, 2));

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'verify_fee.png'), fullPage: true });

  await browser.close();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
