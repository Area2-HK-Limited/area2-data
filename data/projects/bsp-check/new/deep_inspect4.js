/**
 * BSP v4 - Full page content dump for Term & Fee
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

  // Navigate to term
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/en/profile/school#/term"]');
    if (link) link.click();
  });
  await page.waitForTimeout(6000);

  // FULL body inner HTML dump
  const fullHtml = await page.evaluate(() => document.body.innerHTML);
  
  // Find the Vue app section
  const vueSection = await page.evaluate(() => {
    // Look for div with class "section" which is the Vue-rendered area
    const sections = document.querySelectorAll('.section');
    return Array.from(sections).map(s => ({ class: s.className, html: s.outerHTML }));
  });
  
  console.log('Sections found:', vueSection.length);
  vueSection.forEach((s, i) => {
    console.log(`Section ${i}: class="${s.class}"`);
    console.log(s.html.substring(0, 3000));
    console.log('---');
  });

  // Also get the Vue SPA rendered content by looking at main div
  const mainDiv = await page.evaluate(() => {
    const el = document.querySelector('.main');
    return el ? el.innerHTML : null;
  });
  if (mainDiv) {
    console.log('\n.main div:');
    console.log(mainDiv.substring(0, 5000));
  }

  // Try to find the Vue component root
  const vueRoot = await page.evaluate(() => {
    // BSP uses britishschool.umd.min.js - look for its root mount
    const script = document.querySelector('script[src*="britishschool"]');
    if (script) {
      // Find the div after this script
      let el = script.nextElementSibling;
      while (el) {
        if (el.tagName === 'DIV' && el.children.length > 2) {
          return { found: true, html: el.outerHTML.substring(0, 5000) };
        }
        el = el.nextElementSibling;
      }
    }
    // Try to find element with id="app" or similar
    const app = document.getElementById('app') || document.getElementById('vue-app');
    if (app) return { found: true, html: app.innerHTML.substring(0, 5000) };
    
    // Find large content divs
    const divs = Array.from(document.querySelectorAll('div')).filter(d => d.innerHTML.length > 1000 && d.innerHTML.length < 15000);
    const unique = divs.sort((a, b) => b.innerHTML.length - a.innerHTML.length).slice(0, 3);
    return unique.map(d => ({ class: d.className, id: d.id, length: d.innerHTML.length, html: d.innerHTML.substring(0, 2000) }));
  });
  console.log('\nVue root hunt result:');
  console.log(JSON.stringify(vueRoot, null, 2).substring(0, 3000));

  // Screenshot
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'v4_term.png'), fullPage: true });
  
  await browser.close();
}

run().catch(e => { console.error(e); process.exit(1); });
