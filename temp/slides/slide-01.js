// slide-01.js — Cover Page
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'cover', index: 1, title: '⚡ Electricity Scrapbook' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Sky blue gradient background
  slide.background = { color: "E8F4FD" };

  // Top decorative banner
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: "F5A623" },
    line: { color: "F5A623" }
  });

  // Bottom banner
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.7, w: 10, h: 0.925,
    fill: { color: "4CAF50" },
    line: { color: "4CAF50" }
  });

  // Lightning bolt shape (yellow diamond decoration)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.2, y: 0.3, w: 1.6, h: 0.5,
    fill: { color: "FFF176" },
    line: { color: "F5A623", width: 2 },
    rectRadius: 0.15
  });
  slide.addText("⚡ ELECTRICITY", {
    x: 4.2, y: 0.3, w: 1.6, h: 0.5,
    fontSize: 11, fontFace: "Arial", bold: true,
    color: "7B3F00", align: "center", valign: "middle"
  });

  // Main title
  slide.addText("⚡ Electricity Scrapbook", {
    x: 0.5, y: 1.2, w: 9, h: 1.1,
    fontSize: 40, fontFace: "Arial", bold: true,
    color: "1A237E", align: "center", valign: "middle",
    fit: "shrink"
  });

  // Subtitle banner
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: 2.35, w: 7, h: 0.7,
    fill: { color: "1565C0" },
    line: { color: "1565C0" },
    rectRadius: 0.2
  });
  slide.addText("Unit 10 — Renewable & Non-Renewable Energy", {
    x: 1.5, y: 2.35, w: 7, h: 0.7,
    fontSize: 16, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Emoji icons row (sun, wind, lightning, earth)
  const icons = [
    { emoji: "☀️", x: 1.2, color: "FFF9C4", border: "FFC107" },
    { emoji: "🌬️", x: 3.3, color: "E3F2FD", border: "42A5F5" },
    { emoji: "⚡", x: 5.4, color: "FFFDE7", border: "FFD54F" },
    { emoji: "🌍", x: 7.5, color: "E8F5E9", border: "66BB6A" }
  ];

  icons.forEach(ic => {
    slide.addShape(pres.shapes.OVAL, {
      x: ic.x, y: 3.15, w: 1.1, h: 1.1,
      fill: { color: ic.color },
      line: { color: ic.border, width: 3 }
    });
    slide.addText(ic.emoji, {
      x: ic.x, y: 3.15, w: 1.1, h: 1.1,
      fontSize: 28, align: "center", valign: "middle"
    });
  });

  // Name line
  slide.addText("Name: ___________________________", {
    x: 1.5, y: 4.25, w: 5, h: 0.38,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", align: "left", valign: "middle",
    bold: false
  });

  // Date
  slide.addText("April 2026", {
    x: 7, y: 4.25, w: 2.5, h: 0.38,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", align: "right", valign: "middle"
  });

  // Bottom label
  slide.addText("🌱 Going Green with Clean Energy!", {
    x: 0, y: 4.72, w: 10, h: 0.5,
    fontSize: 14, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A237E", secondary: "1565C0", accent: "F5A623", light: "E8F4FD", bg: "E8F4FD" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "/home/ubuntu/.openclaw/workspace/data/temp/slides/slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
