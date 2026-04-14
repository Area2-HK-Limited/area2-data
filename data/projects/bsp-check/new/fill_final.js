/**
 * BSP FINAL Script - Fill Profile, Term Dates (3 years), Fee Settings
 * Based on actual DOM structure discovered
 */

const { chromium } = require('/home/openclaw/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');
const path = require('path');
const fs = require('fs');

const SCREENSHOT_DIR = '/home/openclaw/.openclaw/workspace/data/projects/bsp-check/new/filled';

// ===== SCHOOL DATA =====
const SCHOOLS = [
  {
    name: 'School 01',
    slug: 'school_01',
    email: 'demo_school_01@britishschoolportal.co.uk',
    password: 'hschoolport',
    profile: {
      display_email: 'info@demoschool01.co.uk',
      phone: '02071230001',
      school_web: 'https://www.demoschool01.co.uk',
      school_fb: 'https://www.facebook.com/demoschool01',
      accountName: 'Sarah Thompson',
      accountPhoneOffice: '02071230001',
      accountPhoneMobile: '07700900001',
      contact1Name: 'Michael Chen',
      contact1PhoneOffice: '02071230002',
      contact1PhoneMobile: '07700900002',
      contact1Email: 'admissions@demoschool01.co.uk',
      // Textareas (no id, by position)
      description: 'Demo School 01 is a leading independent school located in the heart of London, offering world-class education for students aged 11-18. With a rich history spanning over 100 years, we pride ourselves on academic excellence, creative thinking, and holistic development. Our dedicated faculty and state-of-the-art facilities provide an inspiring environment where every student can thrive.',
      principalMessage: 'Welcome to Demo School 01. We believe every student has unique potential, and our mission is to nurture that potential in a supportive, challenging environment. Our school community is built on values of respect, curiosity, and ambition. We look forward to welcoming you.',
      extracurricular: 'Drama Club, Debate Society, Football, Swimming, Chess Club, Music Orchestra, Art Workshop, Science Club',
      achievements: 'National Science Competition Winners 2023, Model United Nations Champions 2024, 98% A-Level pass rate, Top 50 UK Independent Schools ranking',
      // Gender: Mixed = option value 1 (typically)
      genderValue: '1',
      // Religious: Non-denominational
      religiousValue: 'Non-denominational',
      // Checkboxes for Residency: Day School=0, Full Boarding=2
      residencyChecks: [0, 2],
      // Exams: GCSE, A Level, IB (need to find by label)
      examLabels: ['GCSE', 'A Level', 'IB'],
      // Scholarships: Academic, Art
      scholarshipLabels: ['Academic', 'Art'],
    },
    fees: {
      local: '5500',
      oversea: '8000',
    },
  },
  {
    name: 'School 02',
    slug: 'school_02',
    email: 'demo_school_02@britishschoolportal.co.uk',
    password: 'ishschoolport',
    profile: {
      display_email: 'info@demoschool02.co.uk',
      phone: '01865120002',
      school_web: 'https://www.demoschool02.co.uk',
      school_fb: 'https://www.facebook.com/demoschool02',
      accountName: 'Robert Davies',
      accountPhoneOffice: '01865120002',
      accountPhoneMobile: '07700900003',
      contact1Name: 'Amanda Foster',
      contact1PhoneOffice: '01865120003',
      contact1PhoneMobile: '07700900004',
      contact1Email: 'admissions@demoschool02.co.uk',
      description: 'Situated in the historic city of Oxford, Demo School 02 offers an exceptional educational experience combining traditional values with modern teaching methods. Founded in 1920, our school has produced countless graduates who have gone on to attend leading universities worldwide. We offer a broad curriculum with particular strengths in STEM subjects and the arts.',
      principalMessage: 'At Demo School 02, we cultivate a love of learning that lasts a lifetime. Our vibrant school community encourages students to explore their passions, develop critical thinking skills, and become confident global citizens. Join us and discover your full potential.',
      extracurricular: 'Rowing Club, Theatre Productions, Basketball, Tennis, Photography Club, Coding Club, Environmental Society, Model Parliament',
      achievements: 'Cambridge University Admissions Rate 35% 2024, UK Mathematics Trust Gold Award, Outstanding ISI Inspection Report 2023, International Science Olympiad Participants',
      genderValue: '1',
      religiousValue: 'Church of England',
      residencyChecks: [0, 1], // Day School=0, Half Boarding=1
      examLabels: ['GCSE', 'IGCSE', 'A Level'],
      scholarshipLabels: ['Academic', 'Drama', 'All Rounder'],
    },
    fees: {
      local: '4800',
      oversea: '7500',
    },
  },
  {
    name: 'BS Portal Demo School',
    slug: 'bsp_demo',
    email: 'demo_school@britishschoolportal.co.uk',
    password: '24cTFqxesd',
    profile: {
      display_email: 'info@bspdemoschool.co.uk',
      phone: '01133450003',
      school_web: 'https://www.bspdemoschool.co.uk',
      school_fb: 'https://www.facebook.com/bspdemoschool',
      accountName: 'Catherine Blake',
      accountPhoneOffice: '01133450003',
      accountPhoneMobile: '07700900005',
      contact1Name: 'Jonathan Mills',
      contact1PhoneOffice: '01133450004',
      contact1PhoneMobile: '07700900006',
      contact1Email: 'admissions@bspdemoschool.co.uk',
      description: "BS Portal Demo School is a prestigious boys' boarding school in Leeds with over 150 years of educational excellence. Our rigorous academic programme, combined with an extensive co-curricular offering, prepares students for success at the world's finest universities. With students from over 40 countries, we foster a truly global community.",
      principalMessage: 'BS Portal Demo School has a proud tradition of shaping the leaders of tomorrow. We challenge our students academically, nurture their character, and inspire them to make a positive difference in the world. Our boarding community creates lifelong friendships and invaluable life skills.',
      extracurricular: 'Rugby, Cricket, Fencing, Astronomy Club, Investment Society, Film Club, Robotics Team, Choir',
      achievements: 'Sunday Times Independent School of the Year Finalist 2023, 100% University Placement Rate, Olympiad Medal Winners in Physics and Chemistry, National Debating Champions 2024',
      genderValue: '0', // Boys
      religiousValue: 'Non-denominational',
      residencyChecks: [2, 0], // Full Boarding=2, Day School=0
      examLabels: ['GCSE', 'A Level', 'Pre-U', 'IB'],
      scholarshipLabels: ['Academic', 'Choral', 'Design'],
    },
    fees: {
      local: '6200',
      oversea: '9500',
    },
  },
];

// Term dates: 3 years x 3 terms
// Each term has: [Starts, Ends, Half Term Starts, Half Term Ends]
// We'll fill Starts & Ends; Half Term can be blank or approximate
const TERM_YEARS = ['2025/2026', '2026/2027', '2027/2028'];

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

// ===== HELPERS =====

async function login(page, email, password) {
  await page.goto('https://www.britishschoolportal.co.uk/en/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.fill('input[type="email"]', email);
  await page.fill('input[type="password"]', password);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(4000);
  console.log(`  Login URL: ${page.url()}`);
}

async function screenshot(page, name) {
  const p = path.join(SCREENSHOT_DIR, `${name}.png`);
  await page.screenshot({ path: p, fullPage: false });
  console.log(`  📸 ${name}.png`);
}

// Fill a text input by id
async function fillById(page, id, value, label) {
  try {
    await page.fill(`#${id}`, value);
    console.log(`  ✅ ${label} (#${id}): ${value.substring(0, 40)}`);
    return true;
  } catch (e) {
    console.log(`  ⚠️ ${label} (#${id}) failed: ${e.message.substring(0, 80)}`);
    return false;
  }
}

// Set an El-UI datepicker input (readonly - need to use JS)
async function setElDatepicker(page, inputEl, dateStr) {
  // Use JavaScript to set value and trigger events
  await page.evaluate(({ selector, value }) => {
    const inputs = document.querySelectorAll('.el-input__inner[placeholder="Select Date"]');
    // selector is the index
    const input = inputs[selector];
    if (!input) return false;
    // Simulate typing into the input
    input.removeAttribute('readonly');
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.dispatchEvent(new Event('blur', { bubbles: true }));
    return true;
  }, { selector: inputEl, value: dateStr });
}

// ===== PROFILE FILLING =====

async function fillProfile(page, school, slug) {
  console.log('\n  📝 Filling Profile...');
  
  // Already on profile page with Vue loaded
  // Click Edit Profile
  await page.evaluate(() => {
    const link = document.querySelector('a.btn-edit, a.inline-link');
    if (link) link.click();
  });
  await page.waitForTimeout(2000);

  // Remove readonly from all inputs
  await page.evaluate(() => {
    document.querySelectorAll('input[readonly], textarea[readonly]').forEach(el => {
      el.removeAttribute('readonly');
    });
  });
  await page.waitForTimeout(500);

  const p = school.profile;

  // Fill by ID
  await fillById(page, 'display_email', p.display_email, 'Display Email');
  await fillById(page, 'school_phone', p.phone, 'Main Phone');
  await fillById(page, 'school_web', p.school_web, 'School Website');
  await fillById(page, 'school_fb', p.school_fb, 'Facebook');
  await fillById(page, 'school_accountNameInput', p.accountName, 'Account Name');
  await fillById(page, 'school_inCharge_officeNumInput', p.accountPhoneOffice, 'Account Phone Office');
  await fillById(page, 'school_inCharge_mobileNumInput', p.accountPhoneMobile, 'Account Phone Mobile');
  await fillById(page, 'school_1_personNameInput', p.contact1Name, 'Main Contact Name');
  await fillById(page, 'school_1_personOfficeNumtInput', p.contact1PhoneOffice, 'Main Contact Phone Office');
  await fillById(page, 'school_1_personMobileNumInput', p.contact1PhoneMobile, 'Main Contact Phone Mobile');
  await fillById(page, 'school_1_personEmailInput', p.contact1Email, 'Main Contact Email');

  // Fill textarea#abstract (description)
  try {
    await page.fill('#abstract', p.description);
    console.log(`  ✅ Description: filled`);
  } catch (e) { console.log(`  ⚠️ Description failed`); }

  // Fill textareas without id (by position: [0]=abstract, [1]=principal, [2]=extra, [3]=achievements)
  const textareas = await page.$$('textarea.form-control');
  if (textareas.length > 0) {
    try { await textareas[0].fill(p.description); console.log(`  ✅ Description textarea[0]`); } catch (e) {}
  }
  if (textareas.length > 1) {
    try { await textareas[1].fill(p.principalMessage); console.log(`  ✅ Principal Message textarea[1]`); } catch (e) {}
  }
  if (textareas.length > 2) {
    try { await textareas[2].fill(p.extracurricular); console.log(`  ✅ Extracurricular textarea[2]`); } catch (e) {}
  }
  if (textareas.length > 3) {
    try { await textareas[3].fill(p.achievements); console.log(`  ✅ Achievements textarea[3]`); } catch (e) {}
  }

  // Gender select
  try {
    await page.selectOption('select[name="school_gender"]', { index: parseInt(p.genderValue) });
    console.log(`  ✅ Gender: set`);
  } catch (e) { console.log(`  ⚠️ Gender failed`); }

  // Religious affiliation
  try {
    await page.selectOption('select[name="school_religious"]', { label: p.religiousValue });
    console.log(`  ✅ Religious: ${p.religiousValue}`);
  } catch (e) {
    try {
      await page.selectOption('select[name="school_religious"]', { value: p.religiousValue });
      console.log(`  ✅ Religious by value: ${p.religiousValue}`);
    } catch (e2) { console.log(`  ⚠️ Religious failed`); }
  }

  // Exams - find checkboxes by their label text
  const examResult = await page.evaluate((examLabels) => {
    const results = [];
    document.querySelectorAll('input[name="school_exam[]"]').forEach(cb => {
      const label = document.querySelector(`label[for="${cb.id}"]`);
      const text = label ? label.textContent.trim() : '';
      const shouldCheck = examLabels.some(exam => text.toLowerCase().includes(exam.toLowerCase()));
      if (shouldCheck && !cb.disabled) {
        cb.checked = true;
        cb.dispatchEvent(new Event('change', { bubbles: true }));
        results.push({ id: cb.id, text, checked: true });
      }
    });
    return results;
  }, p.examLabels);
  console.log(`  ✅ Exams set: ${examResult.map(e => e.text).join(', ')}`);

  // Scholarships
  const scholarResult = await page.evaluate((scholarLabels) => {
    const results = [];
    document.querySelectorAll('input[name="school_scholarship[]"]').forEach(cb => {
      const label = document.querySelector(`label[for="${cb.id}"]`);
      const text = label ? label.textContent.trim() : '';
      const shouldCheck = scholarLabels.some(s => text.toLowerCase().includes(s.toLowerCase()));
      if (shouldCheck && !cb.disabled) {
        cb.checked = true;
        cb.dispatchEvent(new Event('change', { bubbles: true }));
        results.push({ id: cb.id, text, checked: true });
      }
    });
    return results;
  }, p.scholarshipLabels);
  console.log(`  ✅ Scholarships set: ${scholarResult.map(s => s.text).join(', ')}`);

  await screenshot(page, `${slug}_profile_filled`);

  // SAVE - click the SAVE link
  try {
    await page.evaluate(() => {
      const saveLink = document.querySelector('a.button.bound');
      if (saveLink) saveLink.click();
    });
    await page.waitForTimeout(3000);
    console.log(`  ✅ Profile SAVE clicked`);
    await screenshot(page, `${slug}_profile_saved`);
  } catch (e) { console.log(`  ⚠️ Save failed: ${e.message.substring(0, 80)}`); }
}

// ===== TERM DATES FILLING =====

async function fillTermDates(page, slug) {
  console.log('\n  📅 Filling Term Dates...');

  // Click Edit link on term page
  await page.evaluate(() => {
    const link = document.querySelector('#tab-term a.inline-link');
    if (link) link.click();
  });
  await page.waitForTimeout(2000);

  // Get all tab-year divs
  const tabs = await page.$$('.tab-bar .tab');
  console.log(`  Found ${tabs.length} year tabs`);

  for (let yearIdx = 0; yearIdx < TERM_YEARS.length; yearIdx++) {
    const yearLabel = TERM_YEARS[yearIdx];
    console.log(`  📆 Year: ${yearLabel}`);

    // Click the year tab
    if (tabs[yearIdx]) {
      await tabs[yearIdx].click();
      await page.waitForTimeout(1500);
    }

    const dates = TERM_DATES_BY_YEAR[yearLabel];
    const termNames = ['Autumn', 'Spring', 'Summer'];

    // Get all visible el-input__inner inputs in the active tab body
    // Each term section has 4 inputs: Starts, Ends, Half Starts, Half Ends
    const allDateInputs = await page.$$('.tab-body .el-input__inner[placeholder="Select Date"]');
    console.log(`  Found ${allDateInputs.length} date inputs for year ${yearLabel}`);

    for (let termIdx = 0; termIdx < termNames.length; termIdx++) {
      const termName = termNames[termIdx];
      const termData = dates[termName];
      const baseIdx = termIdx * 4; // 4 inputs per term

      const fillDateInput = async (inputIdx, dateStr, label) => {
        if (allDateInputs[inputIdx]) {
          try {
            await page.evaluate(({ el, value }) => {
              // Remove readonly and set value
              el.removeAttribute('readonly');
              el.value = value;
              el.dispatchEvent(new Event('input', { bubbles: true }));
              el.dispatchEvent(new Event('change', { bubbles: true }));
              // Also trigger Vue reactivity
              const event = new Event('blur', { bubbles: true });
              el.dispatchEvent(event);
            }, { el: allDateInputs[inputIdx], value: dateStr });
            
            // Also try using Playwright fill after removing readonly
            await allDateInputs[inputIdx].fill(dateStr);
            await page.waitForTimeout(300);
            console.log(`    ✅ ${termName} ${label}: ${dateStr}`);
          } catch (e) {
            console.log(`    ⚠️ ${termName} ${label} failed: ${e.message.substring(0, 60)}`);
          }
        }
      };

      await fillDateInput(baseIdx, termData.start, 'Starts');
      await fillDateInput(baseIdx + 1, termData.end, 'Ends');
      await fillDateInput(baseIdx + 2, termData.halfStart, 'Half Term Starts');
      await fillDateInput(baseIdx + 3, termData.halfEnd, 'Half Term Ends');
    }

    // Find and click Save for this year
    const saveBtn = await page.$('#tab-term button[type="submit"], #tab-term .btn-save, #tab-term input[type="submit"]');
    if (saveBtn) {
      await saveBtn.click();
      await page.waitForTimeout(2000);
      console.log(`  ✅ Year ${yearLabel} saved`);
    } else {
      // Try any submit button within the form
      const anySubmit = await page.$('.form-term button[type="submit"], .form-term input[type="submit"]');
      if (anySubmit) {
        await anySubmit.click();
        await page.waitForTimeout(2000);
        console.log(`  ✅ Year ${yearLabel} saved (alternate)`);
      } else {
        console.log(`  ⚠️ No save button found for year ${yearLabel}`);
      }
    }
  }

  await screenshot(page, `${slug}_termdates_filled`);
}

// ===== FEE FILLING =====

async function fillFees(page, school, slug) {
  console.log('\n  💰 Filling Fee Settings...');

  // Navigate to fee page
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

  // Fill local and oversea
  try {
    await page.fill('#local', school.fees.local);
    console.log(`  ✅ Local fee: ${school.fees.local}`);
  } catch (e) { console.log(`  ⚠️ Local fee failed`); }

  try {
    await page.fill('#oversea', school.fees.oversea);
    console.log(`  ✅ Overseas fee: ${school.fees.oversea}`);
  } catch (e) { console.log(`  ⚠️ Overseas fee failed`); }

  await screenshot(page, `${slug}_fees_filled`);

  // Save
  try {
    await page.evaluate(() => {
      const save = document.querySelector('a.button.bound, button[type="submit"], a.btn-save');
      if (save) save.click();
    });
    await page.waitForTimeout(2000);
    console.log(`  ✅ Fees saved`);
    await screenshot(page, `${slug}_fees_saved`);
  } catch (e) { console.log(`  ⚠️ Fee save failed`); }
}

// ===== MAIN =====

async function processSchool(browser, school) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🏫 ${school.name}`);
  console.log('='.repeat(60));

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  const results = { name: school.name };

  try {
    await login(page, school.email, school.password);

    // Navigate to profile (Vue app mount point)
    await page.goto('https://www.britishschoolportal.co.uk/en/profile/school', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(5000); // Wait for Vue to fully load

    // ===== PROFILE =====
    await page.evaluate(() => {
      const link = document.querySelector('a[href="#/profile"]');
      if (link) link.click();
    });
    await page.waitForTimeout(3000);

    try {
      await fillProfile(page, school, school.slug);
      results.profile = 'filled';
    } catch (e) {
      console.log(`  ❌ Profile error: ${e.message.substring(0, 100)}`);
      results.profile = `error: ${e.message.substring(0, 80)}`;
      await screenshot(page, `${school.slug}_profile_error`);
    }

    // ===== TERM DATES =====
    // Navigate to term page
    await page.evaluate(() => {
      const link = document.querySelector('a[href="#/term"]');
      if (link) link.click();
    });
    await page.waitForTimeout(4000);

    try {
      await fillTermDates(page, school.slug);
      results.termDates = 'filled';
    } catch (e) {
      console.log(`  ❌ Term Dates error: ${e.message.substring(0, 100)}`);
      results.termDates = `error: ${e.message.substring(0, 80)}`;
      await screenshot(page, `${school.slug}_term_error`);
    }

    // ===== FEE SETTINGS =====
    try {
      await fillFees(page, school, school.slug);
      results.fees = 'filled';
    } catch (e) {
      console.log(`  ❌ Fee error: ${e.message.substring(0, 100)}`);
      results.fees = `error: ${e.message.substring(0, 80)}`;
      await screenshot(page, `${school.slug}_fee_error`);
    }

  } catch (e) {
    console.log(`  ❌ Fatal: ${e.message}`);
    results.fatal = e.message;
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

  const allResults = [];
  for (const school of SCHOOLS) {
    const r = await processSchool(browser, school);
    allResults.push(r);
  }

  await browser.close();

  const resultsPath = path.join(SCREENSHOT_DIR, 'final_results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(allResults, null, 2));

  console.log('\n\n' + '='.repeat(60));
  console.log('📊 FINAL RESULTS:');
  console.log('='.repeat(60));
  console.log(JSON.stringify(allResults, null, 2));
}

main().catch(e => {
  console.error('Fatal:', e);
  process.exit(1);
});
