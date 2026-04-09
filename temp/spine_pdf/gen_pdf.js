const fs = require('fs');
const path = require('path');

const imgDir = '/home/ubuntu/.openclaw/workspace/data/temp/spine_selected';
const outDir = '/home/ubuntu/.openclaw/workspace/data/temp/spine_pdf';

// Get all images sorted
const images = fs.readdirSync(imgDir)
  .filter(f => f.endsWith('.jpg'))
  .sort((a, b) => {
    const na = parseInt(a.split('_')[0]);
    const nb = parseInt(b.split('_')[0]);
    return na - nb;
  });

console.log('Total images:', images.length);

// Build HTML
let html = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, sans-serif; }
  .header {
    width: 210mm; padding: 5mm 10mm;
    background: #1a4a7a; color: white;
    display: flex; align-items: center; justify-content: space-between;
    font-size: 9pt; font-weight: bold;
  }
  .page {
    width: 210mm; min-height: 297mm;
    page-break-after: always;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3mm;
    padding: 5mm;
  }
  .page:last-child { page-break-after: avoid; }
  .img-cell {
    border: 1px solid #ccc;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 3mm; background: #fafafa;
  }
  .img-cell img {
    max-width: 95mm; max-height: 130mm;
    object-fit: contain;
  }
  .img-cell .label {
    font-size: 7pt; color: #555; margin-top: 2mm; text-align: center;
    font-family: Arial, sans-serif;
  }
  @media print {
    .page { page-break-inside: avoid; }
    body { -webkit-print-color-adjust: exact; }
  }
</style>
</head>
<body>
<div class="header">
  <span>Patient: YUAN YU CHAN | MR Whole Spine | 2026-03-31</span>
  <span>脊椎 MRI 精選 (共${images.length}張)</span>
</div>
`;

// 4 images per page
const perPage = 4;
for (let i = 0; i < images.length; i += perPage) {
  html += '<div class="page">\n';
  for (let j = 0; j < perPage; j++) {
    const idx = i + j;
    if (idx < images.length) {
      const img = images[idx];
      const num = img.split('_')[0];
      const label = img.replace('.jpg', '').replace(/^\d+_/, '');
      const imgPath = path.join(imgDir, img).replace(/'/g, "\\'");
      html += `  <div class="img-cell">
    <img src="file://${imgPath}" />
    <div class="label">圖 ${num} — ${label}</div>
  </div>\n`;
    } else {
      html += '  <div class="img-cell"></div>\n';
    }
  }
  html += '</div>\n';
}

html += '</body></html>';

fs.writeFileSync(path.join(outDir, 'spine_report.html'), 'utf8');
console.log('HTML written to', path.join(outDir, 'spine_report.html'));

// Now generate PDF using Playwright
const { chromium } = require('/home/ubuntu/.npm-global/lib/node_modules/openclaw/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  
  const htmlPath = 'file://' + path.join(outDir, 'spine_report.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  const pdfPath = path.join(outDir, 'YUAN_YU_CHAN_MRI_Spine_Selected.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  
  console.log('PDF saved to', pdfPath);
  await browser.close();
})().catch(err => {
  console.error('PDF generation failed:', err.message);
  process.exit(1);
});
