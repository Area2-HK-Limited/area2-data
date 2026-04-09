/**
 * Deep DOM inspector v2 - direct navigation
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
  console.log('Logged in. URL:', page.url());

  // ===== TERM DATES - navigate directly and wait for Vue =====
  console.log('\n\n===== TERM DATES =====');
  // First go to base profile page
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  // Now change hash via JS to trigger Vue router
  await page.evaluate(() => { window.location.hash = '/term'; });
  await page.waitForTimeout(6000);
  
  // Wait for content to load
  await page.waitForSelector('.section', { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(3000);
  
  const termUrl = page.url();
  console.log('Term URL:', termUrl);
  
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'deep_term2.png'), fullPage: true });
  
  // Get the section/main content
  const termContent = await page.evaluate(() => {
    const section = document.querySelector('.section');
    if (section) return section.innerHTML;
    const main = document.querySelector('.main');
    if (main) return main.innerHTML;
    return document.body.innerHTML.substring(3000, 12000);
  });
  console.log('Term dates content:');
  console.log(termContent.substring(0, 6000));

  // ===== FEE SETTING =====
  console.log('\n\n===== FEE SETTING =====');
  await page.evaluate(() => { window.location.hash = '/fee'; });
  await page.waitForTimeout(6000);
  await page.waitForSelector('.section', { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'deep_fee2.png'), fullPage: true });
  
  const feeContent = await page.evaluate(() => {
    const section = document.querySelector('.section');
    if (section) return section.innerHTML;
    const main = document.querySelector('.main');
    if (main) return main.innerHTML;
    return document.body.innerHTML.substring(3000, 12000);
  });
  console.log('Fee setting content:');
  console.log(feeContent.substring(0, 6000));

  // All inputs on fee page
  const feeInputs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('input, textarea, select, button')).map(el => ({
      tag: el.tagName,
      type: el.type || '',
      id: el.id,
      name: el.name,
      placeholder: el.placeholder,
      value: el.value ? el.value.substring(0, 50) : '',
      text: el.textContent ? el.textContent.trim().substring(0, 60) : '',
      class: el.className ? el.className.substring(0, 80) : '',
    }));
  });
  console.log('Fee page all inputs/buttons:');
  feeInputs.forEach(el => {
    if (el.name || el.id || el.text || el.placeholder) console.log(JSON.stringify(el));
  });

  // ===== PROFILE EDIT MODE =====
  console.log('\n\n===== PROFILE EDIT =====');
  await page.evaluate(() => { window.location.hash = '/profile'; });
  await page.waitForTimeout(5000);
  await page.waitForSelector('form', { timeout: 10000 }).catch(() => {});
  
  // Find and click Edit link
  const allLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a')).map(a => ({
      href: a.href,
      text: a.textContent.trim(),
    })).filter(a => a.text);
  });
  console.log('All links on profile page:');
  allLinks.forEach(a => {
    if (a.text.length < 30) console.log(JSON.stringify(a));
  });

  // Look for Edit button/link near the form
  const editInfo = await page.evaluate(() => {
    const candidates = Array.from(document.querySelectorAll('a, button')).filter(el => {
      const text = el.textContent.trim().toLowerCase();
      return text.includes('edit') || text.includes('save') || text.includes('update') || text.includes('submit');
    });
    return candidates.map(el => ({
      tag: el.tagName,
      text: el.textContent.trim(),
      href: el.href || '',
      class: el.className,
      id: el.id,
    }));
  });
  console.log('\nEdit/Save buttons:');
  editInfo.forEach(b => console.log(JSON.stringify(b)));

  await browser.close();
}

run().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
