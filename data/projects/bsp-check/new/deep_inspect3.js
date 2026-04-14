/**
 * BSP v3 - Deep inspection of Term & Fee pages after proper navigation
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

  // Login
  await page.goto('https://www.britishschoolportal.co.uk/en/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.fill('input[type="email"]', 'demo_school_01@britishschoolportal.co.uk');
  await page.fill('input[type="password"]', 'hschoolport');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(4000);

  // Go to profile page (Vue app loads here)
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);  // Wait for Vue to fully initialize

  // ===== TERM DATES: Navigate via clicking the sidebar link =====
  console.log('\n=== TERM DATES ===');
  // The sidebar link is in a dropdown - find by href
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/en/profile/school#/term"]');
    if (link) link.click();
  });
  await page.waitForTimeout(6000);
  
  console.log('URL:', page.url());
  
  // Get all HTML in section
  const termSection = await page.evaluate(() => {
    const el = document.querySelector('.section .container');
    return el ? el.innerHTML : 'NOT FOUND';
  });
  console.log('Term section HTML:');
  console.log(termSection.substring(0, 8000));
  
  // All inputs
  const termInputs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('input, textarea, select, button, a')).map(el => ({
      tag: el.tagName,
      type: el.type || '',
      id: el.id,
      name: el.name,
      class: (el.className || '').substring(0, 100),
      text: (el.textContent || '').trim().substring(0, 60),
      value: (el.value || '').substring(0, 50),
      placeholder: el.placeholder || '',
      href: el.href || '',
    })).filter(el => 
      el.id || el.name || el.text.length > 1 || el.placeholder
    );
  });
  console.log('\nAll interactive elements:');
  termInputs.forEach(el => console.log(JSON.stringify(el)));

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'v3_term.png'), fullPage: true });

  // ===== FEE SETTING =====
  console.log('\n\n=== FEE SETTING ===');
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/en/profile/school#/fee"]');
    if (link) link.click();
  });
  await page.waitForTimeout(6000);

  const feeSection = await page.evaluate(() => {
    const el = document.querySelector('.section .container');
    return el ? el.innerHTML : 'NOT FOUND';
  });
  console.log('Fee section HTML:');
  console.log(feeSection.substring(0, 8000));
  
  const feeInputs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('input, textarea, select, button, a')).map(el => ({
      tag: el.tagName,
      type: el.type || '',
      id: el.id,
      name: el.name,
      class: (el.className || '').substring(0, 100),
      text: (el.textContent || '').trim().substring(0, 60),
      value: (el.value || '').substring(0, 50),
      placeholder: el.placeholder || '',
    })).filter(el => 
      el.id || el.name || el.text.length > 1 || el.placeholder
    );
  });
  console.log('\nFee elements:');
  feeInputs.forEach(el => console.log(JSON.stringify(el)));

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'v3_fee.png'), fullPage: true });

  await browser.close();
}

run().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
