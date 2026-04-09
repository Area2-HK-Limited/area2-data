/**
 * BSP Page Inspector - Understand the actual DOM structure
 */

const { chromium } = require('/home/openclaw/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');
const fs = require('fs');
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
  });
  const page = await context.newPage();

  // Login
  console.log('Logging in...');
  await page.goto('https://www.britishschoolportal.co.uk/en/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.fill('input[type="email"]', 'demo_school_01@britishschoolportal.co.uk');
  await page.fill('input[type="password"]', 'hschoolport');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(4000);
  console.log('URL after login:', page.url());

  // ===== PROFILE PAGE =====
  console.log('\n\n===== PROFILE PAGE =====');
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school#/profile', { waitUntil: 'domcontentloaded', timeout: 30000 });
  // Wait for Vue to render
  await page.waitForTimeout(5000);
  
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'inspect_profile.png'), fullPage: true });
  
  // Get all inputs with names
  const profileInputs = await page.evaluate(() => {
    const all = [];
    document.querySelectorAll('input, textarea, select').forEach(el => {
      all.push({
        tag: el.tagName,
        type: el.type || '',
        id: el.id || '',
        name: el.name || '',
        placeholder: el.placeholder || '',
        value: el.value ? el.value.substring(0, 50) : '',
        'v-model': el.getAttribute('v-model') || '',
        'data-field': el.getAttribute('data-field') || '',
        class: el.className ? el.className.substring(0, 80) : '',
      });
    });
    return all;
  });
  console.log('All inputs on profile page:');
  profileInputs.forEach(inp => {
    if (inp.name || inp.id || inp.placeholder) {
      console.log(JSON.stringify(inp));
    }
  });

  // Get full page inner HTML of the profile form area
  const profileHtml = await page.evaluate(() => {
    // Try to find the form or main content
    const selectors = [
      '.profile-form',
      '.school-profile',
      'form',
      '.profile-content',
      '.edit-profile',
      '#profile-form',
      '.container .row',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) return { selector: sel, html: el.innerHTML.substring(0, 5000) };
    }
    return { selector: 'body', html: document.body.innerHTML.substring(0, 5000) };
  });
  console.log(`\nProfile form found at: ${profileHtml.selector}`);
  console.log(profileHtml.html);

  // ===== TERM DATES PAGE =====
  console.log('\n\n===== TERM DATES PAGE =====');
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school#/term_dates_setting', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'inspect_termdates.png'), fullPage: true });
  
  const termInputs = await page.evaluate(() => {
    const all = [];
    document.querySelectorAll('input, textarea, select, button, a').forEach(el => {
      const text = el.textContent ? el.textContent.trim().substring(0, 50) : '';
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
        all.push({ type: 'input', tag: el.tagName, id: el.id, name: el.name, placeholder: el.placeholder });
      } else if (text) {
        all.push({ type: 'clickable', tag: el.tagName, text, id: el.id, class: el.className.substring(0, 50) });
      }
    });
    return all;
  });
  console.log('Term dates page elements:');
  termInputs.forEach(el => console.log(JSON.stringify(el)));

  const termHtml = await page.evaluate(() => {
    const selectors = ['.term-dates', '.term-setting', '#term-dates', 'main', '.main-content', '.content-area'];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) return { selector: sel, html: el.innerHTML.substring(0, 8000) };
    }
    return { selector: 'body', html: document.body.innerHTML.substring(2000, 7000) };
  });
  console.log(`\nTerm dates section: ${termHtml.selector}`);
  console.log(termHtml.html);

  // ===== FEE SETTING PAGE =====
  console.log('\n\n===== FEE SETTING PAGE =====');
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school#/fee_setting', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'inspect_fees.png'), fullPage: true });
  
  const feeHtml = await page.evaluate(() => {
    const selectors = ['.fee-setting', '.fee-form', '#fee-setting', 'main', '.main-content'];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) return { selector: sel, html: el.innerHTML.substring(0, 8000) };
    }
    return { selector: 'body', html: document.body.innerHTML.substring(2000, 8000) };
  });
  console.log(`\nFee section: ${feeHtml.selector}`);
  console.log(feeHtml.html);

  await browser.close();
}

run().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
