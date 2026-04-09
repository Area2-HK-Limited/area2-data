// compile.js — Electricity Scrapbook PPTX Compiler
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Electricity Scrapbook - Unit 10";
pres.subject = "Renewable & Non-Renewable Energy";
pres.author = "Primary School Student";

const theme = {
  primary:   "1A237E",   // deep blue — main text
  secondary: "1565C0",   // medium blue — accent
  accent:    "F5A623",   // orange — highlights
  light:     "E8F4FD",   // light blue — backgrounds
  bg:        "FFFFFF"    // white — base background
};

const slideFiles = [
  "./slide-01.js",
  "./slide-02.js",
  "./slide-03.js",
  "./slide-04.js",
  "./slide-05.js"
];

for (const file of slideFiles) {
  try {
    const mod = require(file);
    mod.createSlide(pres, theme);
    console.log(`✅  Added: ${file}`);
  } catch (err) {
    console.error(`❌  Error in ${file}:`, err.message);
    process.exit(1);
  }
}

const outputPath = "/home/ubuntu/.openclaw/workspace/data/temp/electricity-scrapbook.pptx";

pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\n🎉  PPTX successfully generated!`);
    console.log(`📁  Output: ${outputPath}`);
  })
  .catch(err => {
    console.error("❌  Failed to write PPTX:", err.message);
    process.exit(1);
  });
