// compile.js - Compile all slides into final PPTX
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();

// Set presentation layout
pres.layout = 'LAYOUT_16x9';
pres.title = 'SecrexAI 介紹';
pres.author = 'Area2';
pres.company = 'Area2 Limited';

// Theme: Pure Tech Blue (#15)
const theme = {
  primary: "03045e",    // deep navy - titles, headers
  secondary: "0077b6",  // medium blue
  accent: "00b4d8",     // bright teal
  light: "90e0ef",      // light teal
  bg: "caf0f8"          // very light blue background
};

// Load and create all slides
const slideCount = 8;
for (let i = 1; i <= slideCount; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
    console.log(`✅ Slide ${num} added: ${slideModule.slideConfig.title}`);
  } catch (err) {
    console.error(`❌ Error loading slide-${num}.js:`, err.message);
  }
}

// Save presentation
pres.writeFile({ fileName: './output/SecrexAI_Introduction.pptx' })
  .then(() => {
    console.log('\n✅ Presentation saved to: ./output/SecrexAI_Introduction.pptx');
  })
  .catch(err => {
    console.error('❌ Error saving presentation:', err);
  });
