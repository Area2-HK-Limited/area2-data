// compile.js — Area2 商業提案 2026
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, 'output');
fs.mkdirSync(outDir, { recursive: true });

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'Area2 商業提案';
pres.author = 'Area2 (HK) Limited';
pres.subject = 'AI 數碼營銷合作方案';

const theme = {
  primary:   '22223b',
  secondary: '4a4e69',
  accent:    '9a8c98',
  light:     'c9ada7',
  bg:        'f2e9e4'
};

const slideFiles = [
  './slide-01.js',
  './slide-02.js',
  './slide-03.js',
  './slide-04.js',
  './slide-05.js',
  './slide-06.js',
];

for (const file of slideFiles) {
  const mod = require(file);
  mod.createSlide(pres, theme);
}

const outPath = path.join(outDir, 'Area2_商業提案_2026.pptx');

pres.writeFile({ fileName: outPath })
  .then(() => console.log('✅ Done:', outPath))
  .catch(err => { console.error('❌ Error:', err); process.exit(1); });
