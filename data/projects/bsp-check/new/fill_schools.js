/**
 * BSP Demo School Profile Filler
 * Fills Profile, Term Dates (3 years), and Fee Settings for 3 demo schools
 */

const { chromium } = require('/home/openclaw/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = '/home/openclaw/.openclaw/workspace/data/projects/bsp-check/new/filled';

const SCHOOLS = [
  {
    name: 'School 01',
    email: 'demo_school_01@britishschoolportal.co.uk',
    password: 'hschoolport',
    profile: {
      displayEmail: 'info@demoschool01.co.uk',
      mainPhone: '02071230001',
      headOfSchool: 'Dr. James Harrison',
      postCode: 'SW1A 1AA',
      address: '1 Demo Academy Road, London',
      genderGroup: 'Mixed',
      residencyType: ['Day School', 'Full Boarding'],
      religiousAffiliation: 'Non-denominational',
      tier4Visa: true,
      exams: ['GCSE', 'A Level', 'IB'],
      scholarships: ['Academic scholarships', 'Art scholarships'],
      schoolWebsite: 'https://www.demoschool01.co.uk',
      facebook: 'https://www.facebook.com/demoschool01',
      description: 'Demo School 01 is a leading independent school located in the heart of London, offering world-class education for students aged 11-18. With a rich history spanning over 100 years, we pride ourselves on academic excellence, creative thinking, and holistic development. Our dedicated faculty and state-of-the-art facilities provide an inspiring environment where every student can thrive.',
      sizeBoys: '350',
      sizeGirls: '320',
      principalMessage: "Welcome to Demo School 01. We believe every student has unique potential, and our mission is to nurture that potential in a supportive, challenging environment. Our school community is built on values of respect, curiosity, and ambition. We look forward to welcoming you.",
      extracurricular: 'Drama Club, Debate Society, Football, Swimming, Chess Club, Music Orchestra, Art Workshop, Science Club',
      achievements: 'National Science Competition Winners 2023, Model United Nations Champions 2024, 98% A-Level pass rate, Top 50 UK Independent Schools ranking',
      establishmentType: 'Independent School',
      openEvent: 'Annual Open Day - October & February',
      accountName: 'Sarah Thompson',
      accountPhoneOffice: '02071230001',
      accountPhoneMobile: '07700900001',
      mainContactName: 'Michael Chen',
      mainContactPhoneOffice: '02071230002',
      mainContactPhoneMobile: '07700900002',
      mainContactEmail: 'admissions@demoschool01.co.uk',
    },
    fees: {
      perTermLocal: '5500',
      perTermOverseas: '8000',
      annualLocal: '16500',
      annualOverseas: '24000',
      registrationFee: '150',
      depositLocal: '1000',
      depositOverseas: '2000',
    },
  },
  {
    name: 'School 02',
    email: 'demo_school_02@britishschoolportal.co.uk',
    password: 'ishschoolport',
    profile: {
      displayEmail: 'info@demoschool02.co.uk',
      mainPhone: '01865120002',
      headOfSchool: 'Prof. Eleanor Wright',
      postCode: 'OX1 2AB',
      address: '2 Greenfield Lane, Oxford',
      genderGroup: 'Mixed',
      residencyType: ['Day School', 'Half Boarding'],
      religiousAffiliation: 'Church of England',
      tier4Visa: true,
      exams: ['GCSE', 'IGCSE', 'A Level'],
      scholarships: ['Academic scholarships', 'Drama scholarships', 'All Rounder awards'],
      schoolWebsite: 'https://www.demoschool02.co.uk',
      facebook: 'https://www.facebook.com/demoschool02',
      description: 'Situated in the historic city of Oxford, Demo School 02 offers an exceptional educational experience combining traditional values with modern teaching methods. Founded in 1920, our school has produced countless graduates who have gone on to attend leading universities worldwide. We offer a broad curriculum with particular strengths in STEM subjects and the arts.',
      sizeBoys: '280',
      sizeGirls: '290',
      principalMessage: 'At Demo School 02, we cultivate a love of learning that lasts a lifetime. Our vibrant school community encourages students to explore their passions, develop critical thinking skills, and become confident global citizens. Join us and discover your full potential.',
      extracurricular: 'Rowing Club, Theatre Productions, Basketball, Tennis, Photography Club, Coding Club, Environmental Society, Model Parliament',
      achievements: 'Cambridge University Admissions Rate 35% 2024, UK Mathematics Trust Gold Award, Outstanding ISI Inspection Report 2023, International Science Olympiad Participants',
      establishmentType: 'Independent School',
      openEvent: 'Open Morning - November & March',
      accountName: 'Robert Davies',
      accountPhoneOffice: '01865120002',
      accountPhoneMobile: '07700900003',
      mainContactName: 'Amanda Foster',
      mainContactPhoneOffice: '01865120003',
      mainContactPhoneMobile: '07700900004',
      mainContactEmail: 'admissions@demoschool02.co.uk',
    },
    fees: {
      perTermLocal: '4800',
      perTermOverseas: '7500',
      annualLocal: '14400',
      annualOverseas: '22500',
      registrationFee: '100',
      depositLocal: '800',
      depositOverseas: '1500',
    },
  },
  {
    name: 'BS Portal Demo School',
    email: 'demo_school@britishschoolportal.co.uk',
    password: '24cTFqxesd',
    profile: {
      displayEmail: 'info@bspdemoschool.co.uk',
      mainPhone: '01133450003',
      headOfSchool: 'Dr. William Foster',
      postCode: 'LS1 3AB',
      address: '3 Parkview Avenue, Leeds',
      genderGroup: 'Boys',
      residencyType: ['Full Boarding', 'Day School'],
      religiousAffiliation: 'Non-denominational',
      tier4Visa: true,
      exams: ['GCSE', 'A Level', 'Pre-U', 'IB'],
      scholarships: ['Academic scholarships', 'Choral scholarships', 'Design scholarships'],
      schoolWebsite: 'https://www.bspdemoschool.co.uk',
      facebook: 'https://www.facebook.com/bspdemoschool',
      description: "BS Portal Demo School is a prestigious boys' boarding school in Leeds with over 150 years of educational excellence. Our rigorous academic programme, combined with an extensive co-curricular offering, prepares students for success at the world's finest universities. With students from over 40 countries, we foster a truly global community.",
      sizeBoys: '420',
      sizeGirls: '0',
      principalMessage: 'BS Portal Demo School has a proud tradition of shaping the leaders of tomorrow. We challenge our students academically, nurture their character, and inspire them to make a positive difference in the world. Our boarding community creates lifelong friendships and invaluable life skills.',
      extracurricular: 'Rugby, Cricket, Fencing, Astronomy Club, Investment Society, Film Club, Robotics Team, Choir',
      achievements: 'Sunday Times Independent School of the Year Finalist 2023, 100% University Placement Rate, Olympiad Medal Winners in Physics and Chemistry, National Debating Champions 2024',
      establishmentType: 'Independent School',
      openEvent: 'Prospectus Day - September & January',
      accountName: 'Catherine Blake',
      accountPhoneOffice: '01133450003',
      accountPhoneMobile: '07700900005',
      mainContactName: 'Jonathan Mills',
      mainContactPhoneOffice: '01133450004',
      mainContactPhoneMobile: '07700900006',
      mainContactEmail: 'admissions@bspdemoschool.co.uk',
    },
    fees: {
      perTermLocal: '6200',
      perTermOverseas: '9500',
      annualLocal: '18600',
      annualOverseas: '28500',
      registrationFee: '200',
      depositLocal: '1200',
      depositOverseas: '2500',
    },
  },
];

const TERM_DATES = [
  {
    year: '2025/26',
    terms: [
      { name: 'Autumn', start: '03/09/2025', end: '12/12/2025' },
      { name: 'Spring', start: '07/01/2026', end: '27/03/2026' },
      { name: 'Summer', start: '17/04/2026', end: '10/07/2026' },
    ],
  },
  {
    year: '2026/27',
    terms: [
      { name: 'Autumn', start: '02/09/2026', end: '11/12/2026' },
      { name: 'Spring', start: '06/01/2027', end: '26/03/2027' },
      { name: 'Summer', start: '16/04/2027', end: '09/07/2027' },
    ],
  },
  {
    year: '2027/28',
    terms: [
      { name: 'Autumn', start: '01/09/2027', end: '10/12/2027' },
      { name: 'Spring', start: '05/01/2028', end: '24/03/2028' },
      { name: 'Summer', start: '14/04/2028', end: '07/07/2028' },
    ],
  },
];

async function screenshot(page, name) {
  const filepath = path.join(SCREENSHOT_DIR, `${name}.png`);
  await page.screenshot({ path: filepath, fullPage: false });
  console.log(`  📸 Screenshot: ${filepath}`);
}

async function login(page, email, password) {
  console.log(`  🔐 Logging in as ${email}...`);
  await page.goto('https://www.britishschoolportal.co.uk/en/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.fill('input[type="email"]', email);
  await page.fill('input[type="password"]', password);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(3000);
  const url = page.url();
  console.log(`  → After login URL: ${url}`);
  return url;
}

async function logout(page) {
  console.log('  🚪 Logging out...');
  try {
    await page.goto('https://www.britishschoolportal.co.uk/en/logout', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(1500);
  } catch (e) {
    console.log(`  ⚠️ Logout error: ${e.message}`);
  }
}

async function safeClick(page, selectors, description) {
  for (const sel of selectors) {
    try {
      const el = await page.$(sel);
      if (el) {
        await el.click();
        console.log(`  ✅ Clicked: ${description} (${sel})`);
        return true;
      }
    } catch (e) {}
  }
  console.log(`  ⚠️ Could not click: ${description}`);
  return false;
}

async function safeFill(page, selectors, value, description) {
  for (const sel of selectors) {
    try {
      const el = await page.$(sel);
      if (el) {
        await el.fill('');
        await el.fill(value);
        console.log(`  ✅ Filled: ${description} = ${value.substring(0, 50)}`);
        return true;
      }
    } catch (e) {}
  }
  console.log(`  ⚠️ Could not fill: ${description}`);
  return false;
}

// Try to fill a field by its label text
async function fillByLabel(page, labelText, value) {
  try {
    const result = await page.evaluate((args) => {
      const { labelText, value } = args;
      // Find label with matching text
      const labels = Array.from(document.querySelectorAll('label'));
      for (const label of labels) {
        if (label.textContent.trim().toLowerCase().includes(labelText.toLowerCase())) {
          const forAttr = label.getAttribute('for');
          let input = null;
          if (forAttr) {
            input = document.getElementById(forAttr);
          } else {
            input = label.querySelector('input, textarea, select');
            if (!input) {
              const parent = label.closest('.form-group, .field, div');
              if (parent) input = parent.querySelector('input, textarea, select');
            }
          }
          if (input) {
            input.focus();
            input.value = '';
            input.value = value;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            return { found: true, tag: input.tagName, id: input.id, name: input.name };
          }
        }
      }
      return { found: false };
    }, { labelText, value });
    if (result.found) {
      console.log(`  ✅ fillByLabel: "${labelText}" = "${value.substring(0, 40)}"`);
      return true;
    }
  } catch (e) {}
  console.log(`  ⚠️ fillByLabel failed: "${labelText}"`);
  return false;
}

// Get page structure info
async function inspectPage(page) {
  const info = await page.evaluate(() => {
    const inputs = Array.from(document.querySelectorAll('input, textarea, select')).map(el => ({
      tag: el.tagName,
      type: el.type,
      id: el.id,
      name: el.name,
      placeholder: el.placeholder,
      value: el.value ? el.value.substring(0, 30) : '',
      'aria-label': el.getAttribute('aria-label'),
    }));
    const buttons = Array.from(document.querySelectorAll('button, [role="button"]')).map(el => ({
      text: el.textContent.trim().substring(0, 50),
      id: el.id,
      class: el.className.substring(0, 50),
    }));
    return { inputs, buttons };
  });
  return info;
}

async function fillProfile(page, profile, schoolSlug) {
  console.log('\n  📝 Filling Profile...');
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school#/profile', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(4000);

  // Take screenshot of initial state
  await screenshot(page, `${schoolSlug}_profile_before`);

  // Inspect the page to understand structure
  const pageInfo = await inspectPage(page);
  console.log(`  📊 Found ${pageInfo.inputs.length} inputs, ${pageInfo.buttons.length} buttons`);
  console.log('  Buttons:', pageInfo.buttons.map(b => b.text).filter(t => t).join(', ').substring(0, 200));
  
  // Log all inputs for debugging
  if (pageInfo.inputs.length > 0) {
    console.log('  First 10 inputs:');
    pageInfo.inputs.slice(0, 10).forEach(inp => {
      console.log(`    - ${inp.tag}[${inp.type}] id="${inp.id}" name="${inp.name}" placeholder="${inp.placeholder}"`);
    });
  }

  // Try clicking Edit button first if present
  const editClicked = await safeClick(page, [
    'button:has-text("EDIT PROFILE")',
    'button:has-text("Edit Profile")',
    'button:has-text("Edit")',
    '.edit-btn',
    '[data-action="edit"]',
    'a:has-text("Edit")',
  ], 'Edit Profile button');
  
  if (editClicked) {
    await page.waitForTimeout(2000);
    await screenshot(page, `${schoolSlug}_profile_edit_mode`);
  }

  // Get HTML structure of main content area
  const htmlSample = await page.evaluate(() => {
    const main = document.querySelector('main, .main-content, #app, .container') || document.body;
    return main.innerHTML.substring(0, 3000);
  });
  console.log('  HTML sample (first 1500 chars):');
  console.log(htmlSample.substring(0, 1500));

  // Try various approaches to fill fields
  const results = {
    filled: [],
    failed: [],
  };

  // Helper
  const tryFill = async (selectors, value, label) => {
    for (const sel of selectors) {
      try {
        const el = await page.$(sel);
        if (el) {
          await el.fill('');
          await el.fill(value);
          await page.waitForTimeout(200);
          results.filled.push(label);
          console.log(`  ✅ ${label}: filled`);
          return true;
        }
      } catch (e) {}
    }
    // Try by label
    if (await fillByLabel(page, label, value)) {
      results.filled.push(label);
      return true;
    }
    results.failed.push(label);
    return false;
  };

  // Fill text fields
  await tryFill(['input[name="display_email"]', 'input[placeholder*="email" i]', '#display_email'], profile.displayEmail, 'Display Email');
  await tryFill(['input[name="phone"]', 'input[name="main_phone"]', 'input[placeholder*="phone" i]', '#phone'], profile.mainPhone, 'Main Phone');
  await tryFill(['input[name="head_of_school"]', 'input[name="headmaster"]', 'input[placeholder*="head" i]'], profile.headOfSchool, 'Head of School');
  await tryFill(['input[name="postcode"]', 'input[name="post_code"]', 'input[placeholder*="post" i]'], profile.postCode, 'PostCode');
  await tryFill(['input[name="address"]', 'input[placeholder*="address" i]', 'textarea[name="address"]'], profile.address, 'Address');
  await tryFill(['input[name="website"]', 'input[name="school_website"]', 'input[placeholder*="website" i]'], profile.schoolWebsite, 'School Website');
  await tryFill(['input[name="facebook"]', 'input[placeholder*="facebook" i]'], profile.facebook, 'Facebook');
  await tryFill(['textarea[name="description"]', 'textarea[name="school_description"]', 'textarea[placeholder*="description" i]'], profile.description, 'School Description');
  await tryFill(['input[name="boys"]', 'input[name="size_boys"]', 'input[placeholder*="boy" i]'], profile.sizeBoys, 'Size Boys');
  await tryFill(['input[name="girls"]', 'input[name="size_girls"]', 'input[placeholder*="girl" i]'], profile.sizeGirls, 'Size Girls');
  await tryFill(['textarea[name="principal_message"]', 'textarea[name="principals_message"]'], profile.principalMessage, "Principal's Message");
  await tryFill(['textarea[name="extracurricular"]', 'textarea[name="extra_curricular"]'], profile.extracurricular, 'Extracurricular');
  await tryFill(['textarea[name="achievements"]', 'textarea[name="notable_achievements"]'], profile.achievements, 'Notable Achievements');
  await tryFill(['input[name="open_event"]', 'textarea[name="open_event"]'], profile.openEvent, 'Open Event');

  // Account in-charge
  await tryFill(['input[name="account_name"]', 'input[placeholder*="account" i]'], profile.accountName, 'Account Name');
  await tryFill(['input[name="account_phone_office"]'], profile.accountPhoneOffice, 'Account Phone Office');
  await tryFill(['input[name="account_phone_mobile"]'], profile.accountPhoneMobile, 'Account Phone Mobile');

  // Main contact
  await tryFill(['input[name="main_contact_name"]', 'input[placeholder*="contact name" i]'], profile.mainContactName, 'Main Contact Name');
  await tryFill(['input[name="main_contact_phone_office"]'], profile.mainContactPhoneOffice, 'Main Contact Phone Office');
  await tryFill(['input[name="main_contact_phone_mobile"]'], profile.mainContactPhoneMobile, 'Main Contact Phone Mobile');
  await tryFill(['input[name="main_contact_email"]', 'input[placeholder*="contact email" i]'], profile.mainContactEmail, 'Main Contact Email');

  await screenshot(page, `${schoolSlug}_profile_filled`);

  // Try to save
  const saved = await safeClick(page, [
    'button[type="submit"]',
    'button:has-text("SAVE")',
    'button:has-text("Save")',
    'button:has-text("UPDATE")',
    'button:has-text("Update")',
    'input[type="submit"]',
  ], 'Save button');
  
  if (saved) {
    await page.waitForTimeout(2000);
    await screenshot(page, `${schoolSlug}_profile_saved`);
  }

  return results;
}

async function fillTermDates(page, schoolSlug) {
  console.log('\n  📅 Filling Term Dates (3 years)...');
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school#/term_dates_setting', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(4000);
  await screenshot(page, `${schoolSlug}_termdates_before`);

  // Inspect page
  const pageInfo = await inspectPage(page);
  console.log(`  📊 Found ${pageInfo.inputs.length} inputs, ${pageInfo.buttons.length} buttons`);
  console.log('  Buttons:', pageInfo.buttons.map(b => b.text).filter(t => t).join(', ').substring(0, 300));

  const htmlSample = await page.evaluate(() => {
    const main = document.querySelector('main, .main-content, #app, .container') || document.body;
    return main.innerHTML.substring(0, 4000);
  });
  console.log('  Term Dates HTML (first 2000):');
  console.log(htmlSample.substring(0, 2000));

  const results = [];

  for (const academicYear of TERM_DATES) {
    console.log(`\n  📆 Processing ${academicYear.year}...`);
    
    for (const term of academicYear.terms) {
      console.log(`    🗓️ ${term.name} Term: ${term.start} - ${term.end}`);
      
      // Try to find/click "Add Term" or year selector
      // First check if there's a year selector
      const yearSelectors = [
        `[data-year="${academicYear.year}"]`,
        `button:has-text("${academicYear.year}")`,
        `a:has-text("${academicYear.year}")`,
        `select option[value="${academicYear.year}"]`,
      ];
      
      // Check for "Add Term Date" button
      const addClicked = await safeClick(page, [
        'button:has-text("ADD TERM DATE")',
        'button:has-text("Add Term Date")',
        'button:has-text("Add Term")',
        'button:has-text("ADD")',
        '.add-term-btn',
        '[data-action="add-term"]',
      ], `Add Term button for ${term.name}`);

      if (addClicked) {
        await page.waitForTimeout(1500);
        
        // Fill the term form
        await safeFill(page, [
          'input[name="academic_year"]',
          'input[placeholder*="academic" i]',
          'select[name="academic_year"]',
        ], academicYear.year, 'Academic Year');

        await safeFill(page, [
          'select[name="term"]',
          'input[name="term"]',
          'select[name="term_name"]',
        ], term.name, 'Term Name');

        await safeFill(page, [
          'input[name="start_date"]',
          'input[type="date"][name*="start"]',
          'input[placeholder*="start" i]',
        ], term.start, 'Start Date');

        await safeFill(page, [
          'input[name="end_date"]',
          'input[type="date"][name*="end"]',
          'input[placeholder*="end" i]',
        ], term.end, 'End Date');

        // Save this term
        const termSaved = await safeClick(page, [
          'button[type="submit"]',
          'button:has-text("SAVE")',
          'button:has-text("Save")',
          'button:has-text("CONFIRM")',
          '.modal button:has-text("Save")',
          '.modal button[type="submit"]',
        ], `Save ${term.name} term`);

        if (termSaved) {
          await page.waitForTimeout(1500);
          results.push({ year: academicYear.year, term: term.name, status: 'saved' });
        } else {
          results.push({ year: academicYear.year, term: term.name, status: 'save_failed' });
        }
      } else {
        results.push({ year: academicYear.year, term: term.name, status: 'add_failed' });
      }
    }
  }

  await screenshot(page, `${schoolSlug}_termdates_after`);
  return results;
}

async function fillFees(page, fees, schoolSlug) {
  console.log('\n  💰 Filling Fee Settings...');
  await page.goto('https://www.britishschoolportal.co.uk/en/profile/school#/fee_setting', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(4000);
  await screenshot(page, `${schoolSlug}_fees_before`);

  // Inspect
  const pageInfo = await inspectPage(page);
  console.log(`  📊 Found ${pageInfo.inputs.length} inputs, ${pageInfo.buttons.length} buttons`);
  
  const htmlSample = await page.evaluate(() => {
    const main = document.querySelector('main, .main-content, #app, .container') || document.body;
    return main.innerHTML.substring(0, 3000);
  });
  console.log('  Fees HTML (first 1500):');
  console.log(htmlSample.substring(0, 1500));

  // Log inputs
  console.log('  Inputs:');
  pageInfo.inputs.forEach(inp => {
    console.log(`    - ${inp.tag}[${inp.type}] id="${inp.id}" name="${inp.name}" placeholder="${inp.placeholder}" value="${inp.value}"`);
  });

  const results = { filled: [], failed: [] };

  const tryFill = async (selectors, value, label) => {
    for (const sel of selectors) {
      try {
        const el = await page.$(sel);
        if (el) {
          await el.fill('');
          await el.fill(value);
          await page.waitForTimeout(200);
          results.filled.push(label);
          console.log(`  ✅ ${label}: ${value}`);
          return true;
        }
      } catch (e) {}
    }
    if (await fillByLabel(page, label, value)) {
      results.filled.push(label);
      return true;
    }
    results.failed.push(label);
    console.log(`  ⚠️ Failed: ${label}`);
    return false;
  };

  await tryFill(['input[name="per_term_local"]', 'input[placeholder*="per term" i]'], fees.perTermLocal, 'Per Term Local');
  await tryFill(['input[name="per_term_overseas"]', 'input[placeholder*="overseas" i]'], fees.perTermOverseas, 'Per Term Overseas');
  await tryFill(['input[name="annual_local"]', 'input[name="annual"]'], fees.annualLocal, 'Annual Local');
  await tryFill(['input[name="annual_overseas"]'], fees.annualOverseas, 'Annual Overseas');
  await tryFill(['input[name="registration_fee"]', 'input[placeholder*="registration" i]'], fees.registrationFee, 'Registration Fee');
  await tryFill(['input[name="deposit_local"]', 'input[placeholder*="deposit" i]'], fees.depositLocal, 'Deposit Local');
  await tryFill(['input[name="deposit_overseas"]'], fees.depositOverseas, 'Deposit Overseas');

  await screenshot(page, `${schoolSlug}_fees_filled`);

  const saved = await safeClick(page, [
    'button[type="submit"]',
    'button:has-text("SAVE")',
    'button:has-text("Save")',
    'button:has-text("UPDATE")',
  ], 'Save Fees button');

  if (saved) {
    await page.waitForTimeout(2000);
    await screenshot(page, `${schoolSlug}_fees_saved`);
    results.saved = true;
  }

  return results;
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/home/openclaw/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
  });

  const overallResults = [];

  for (const school of SCHOOLS) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🏫 Processing: ${school.name}`);
    console.log('='.repeat(60));

    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });
    const page = await context.newPage();
    
    const schoolSlug = school.name.toLowerCase().replace(/\s+/g, '_');
    const schoolResult = { name: school.name, profile: null, termDates: null, fees: null };

    try {
      // Login
      const loginUrl = await login(page, school.email, school.password);
      await screenshot(page, `${schoolSlug}_login`);
      
      if (loginUrl.includes('login') && !loginUrl.includes('msg=login-success')) {
        console.log('  ❌ Login may have failed - still on login page');
        schoolResult.error = 'Login failed';
      } else {
        console.log('  ✅ Login successful');

        // Fill Profile
        try {
          schoolResult.profile = await fillProfile(page, school.profile, schoolSlug);
        } catch (e) {
          console.log(`  ❌ Profile error: ${e.message}`);
          schoolResult.profileError = e.message;
        }

        // Fill Term Dates
        try {
          schoolResult.termDates = await fillTermDates(page, schoolSlug);
        } catch (e) {
          console.log(`  ❌ Term Dates error: ${e.message}`);
          schoolResult.termDatesError = e.message;
        }

        // Fill Fees
        try {
          schoolResult.fees = await fillFees(page, school.fees, schoolSlug);
        } catch (e) {
          console.log(`  ❌ Fees error: ${e.message}`);
          schoolResult.feesError = e.message;
        }
      }
    } catch (e) {
      console.log(`  ❌ Fatal error for ${school.name}: ${e.message}`);
      schoolResult.fatalError = e.message;
    }

    overallResults.push(schoolResult);
    
    await logout(page);
    await context.close();
  }

  await browser.close();

  // Save results
  const resultsPath = path.join(SCREENSHOT_DIR, 'results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(overallResults, null, 2));
  console.log(`\n\n${'='.repeat(60)}`);
  console.log('📊 FINAL RESULTS:');
  console.log('='.repeat(60));
  console.log(JSON.stringify(overallResults, null, 2));
  console.log(`\nResults saved to: ${resultsPath}`);
}

main().catch(e => {
  console.error('Fatal:', e);
  process.exit(1);
});
