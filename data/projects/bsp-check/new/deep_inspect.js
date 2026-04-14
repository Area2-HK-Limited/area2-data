/**
 * Deep DOM inspector for Term Dates and Fee pages
 */

const { chromium } = require('/home/openclaw/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = '/home/openclaw/.openclaw/workspace/data/projects/bsp-check/new/filled';

async function waitForVueRender(page, maxWait = 8000) {
  // Wait for Vue app to render by checking if content changes
  let lastHtml = '';
  let stableCount = 0;
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    const html = await page.evaluate(() => document.body.innerHTML.length);
    if (html === lastHtml) {
      stableCount++;
      if (stableCount >= 3) break;
    } else {
      stableCount = 0;
      lastHtml = html;
    }
    await page.waitForTimeout(500);
  }
}

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

  // Go to profile page and click on Term Dates from menu
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school#/profile', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Click "Term Dates Setting" from sidebar menu
  console.log('Clicking Term Dates Setting from menu...');
  await page.click('a[href*="term"]');
  await page.waitForTimeout(5000);
  await waitForVueRender(page);

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'deep_termdates.png'), fullPage: true });
  
  const termHtml = await page.evaluate(() => {
    return document.querySelector('.main, main, #app')?.innerHTML || document.body.innerHTML.substring(0, 15000);
  });
  console.log('\n=== TERM DATES FULL HTML ===');
  console.log(termHtml.substring(0, 8000));
  
  // All inputs and buttons
  const termElements = await page.evaluate(() => {
    const els = [];
    document.querySelectorAll('input, textarea, select, button, a.btn, .btn').forEach(el => {
      els.push({
        tag: el.tagName,
        type: el.type || '',
        id: el.id || '',
        name: el.name || '',
        class: el.className ? el.className.substring(0, 100) : '',
        text: el.textContent ? el.textContent.trim().substring(0, 80) : '',
        placeholder: el.placeholder || '',
        href: el.href || '',
        visible: el.offsetParent !== null,
      });
    });
    return els.filter(el => el.visible || el.tag === 'INPUT');
  });
  console.log('\nTerm dates visible elements:');
  termElements.forEach(el => console.log(JSON.stringify(el)));

  // Now go to Fee Setting
  console.log('\n\nClicking Fee Setting from menu...');
  await page.click('a[href*="fee"]');
  await page.waitForTimeout(5000);
  await waitForVueRender(page);

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'deep_fees.png'), fullPage: true });
  
  const feeHtml = await page.evaluate(() => {
    return document.querySelector('.main, main, #app')?.innerHTML || document.body.innerHTML.substring(0, 15000);
  });
  console.log('\n=== FEE SETTING FULL HTML ===');
  console.log(feeHtml.substring(0, 8000));

  const feeElements = await page.evaluate(() => {
    const els = [];
    document.querySelectorAll('input, textarea, select, button, a.btn, .btn').forEach(el => {
      els.push({
        tag: el.tagName,
        type: el.type || '',
        id: el.id || '',
        name: el.name || '',
        class: el.className ? el.className.substring(0, 100) : '',
        text: el.textContent ? el.textContent.trim().substring(0, 80) : '',
        placeholder: el.placeholder || '',
        value: el.value ? el.value.substring(0, 50) : '',
        visible: el.offsetParent !== null,
      });
    });
    return els.filter(el => el.visible || el.tag === 'INPUT');
  });
  console.log('\nFee setting visible elements:');
  feeElements.forEach(el => console.log(JSON.stringify(el)));

  // ===== Profile Edit Mode =====
  console.log('\n\nGoing to Profile and clicking Edit...');
  await page.click('a[href*="profile"]');
  await page.waitForTimeout(3000);
  
  // Click Edit link
  const editLink = await page.$('a:has-text("Edit")');
  if (editLink) {
    await editLink.click();
    await page.waitForTimeout(3000);
    await waitForVueRender(page);
    console.log('Clicked Edit link');
    
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'deep_profile_edit.png'), fullPage: true });
    
    const editInputs = await page.evaluate(() => {
      const els = [];
      document.querySelectorAll('input:not([disabled]), textarea:not([disabled]), select:not([disabled])').forEach(el => {
        els.push({
          tag: el.tagName,
          type: el.type || '',
          id: el.id || '',
          name: el.name || '',
          placeholder: el.placeholder || '',
          value: el.value ? el.value.substring(0, 50) : '',
          readonly: el.readOnly,
          disabled: el.disabled,
        });
      });
      return els;
    });
    console.log('\nProfile EDIT mode - editable inputs:');
    editInputs.forEach(inp => console.log(JSON.stringify(inp)));
  } else {
    console.log('No Edit link found!');
  }

  await browser.close();
}

run().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
