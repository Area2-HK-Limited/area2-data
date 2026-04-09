// slide-02.js — Q1: Renewable vs Non-Renewable Energy
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 2, title: 'Renewable vs Non-Renewable Energy' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FAFFFE" };

  // Title bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: "1565C0" },
    line: { color: "1565C0" }
  });
  slide.addText("Q1: Renewable vs Non-Renewable Energy", {
    x: 0.3, y: 0, w: 9.4, h: 0.85,
    fontSize: 22, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // --- LEFT COLUMN (Renewable / Green) ---
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.25, y: 0.95, w: 4.5, h: 2.8,
    fill: { color: "E8F5E9" },
    line: { color: "4CAF50", width: 3 },
    rectRadius: 0.18
  });

  // Left header
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.25, y: 0.95, w: 4.5, h: 0.6,
    fill: { color: "4CAF50" },
    line: { color: "4CAF50" },
    rectRadius: 0.15
  });
  slide.addText("♻️  Renewable Energy", {
    x: 0.25, y: 0.95, w: 4.5, h: 0.6,
    fontSize: 16, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Left icons
  const leftIcons = ["☀️", "💨", "🌊"];
  leftIcons.forEach((ic, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7 + i * 1.2, y: 1.65, w: 0.7, h: 0.7,
      fill: { color: "C8E6C9" },
      line: { color: "4CAF50", width: 2 }
    });
    slide.addText(ic, {
      x: 0.7 + i * 1.2, y: 1.65, w: 0.7, h: 0.7,
      fontSize: 20, align: "center", valign: "middle"
    });
  });

  slide.addText("From natural sources like sunlight\nand wind that never run out.", {
    x: 0.4, y: 2.45, w: 4.1, h: 1.2,
    fontSize: 13, fontFace: "Arial",
    color: "2E7D32", align: "left", valign: "top"
  });

  // --- RIGHT COLUMN (Non-Renewable / Red) ---
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.25, y: 0.95, w: 4.5, h: 2.8,
    fill: { color: "FFEBEE" },
    line: { color: "F44336", width: 3 },
    rectRadius: 0.18
  });

  // Right header
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.25, y: 0.95, w: 4.5, h: 0.6,
    fill: { color: "F44336" },
    line: { color: "F44336" },
    rectRadius: 0.15
  });
  slide.addText("🏭  Non-Renewable Energy", {
    x: 5.25, y: 0.95, w: 4.5, h: 0.6,
    fontSize: 16, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Right icons
  const rightIcons = ["🪨", "⛽", "🏭"];
  rightIcons.forEach((ic, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 5.7 + i * 1.2, y: 1.65, w: 0.7, h: 0.7,
      fill: { color: "FFCDD2" },
      line: { color: "F44336", width: 2 }
    });
    slide.addText(ic, {
      x: 5.7 + i * 1.2, y: 1.65, w: 0.7, h: 0.7,
      fontSize: 20, align: "center", valign: "middle"
    });
  });

  slide.addText("From fossil fuels like coal and oil\nthat will eventually run out\nand cause pollution.", {
    x: 5.4, y: 2.45, w: 4.1, h: 1.2,
    fontSize: 13, fontFace: "Arial",
    color: "C62828", align: "left", valign: "top"
  });

  // VS badge in the middle
  slide.addShape(pres.shapes.OVAL, {
    x: 4.62, y: 1.75, w: 0.75, h: 0.75,
    fill: { color: "FF9800" },
    line: { color: "E65100", width: 2 }
  });
  slide.addText("VS", {
    x: 4.62, y: 1.75, w: 0.75, h: 0.75,
    fontSize: 14, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Summary box at bottom
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.25, y: 3.85, w: 9.5, h: 1.55,
    fill: { color: "FFF8E1" },
    line: { color: "FFB300", width: 2 },
    rectRadius: 0.15
  });
  slide.addText("📝  Summary:", {
    x: 0.45, y: 3.9, w: 9.1, h: 0.35,
    fontSize: 13, fontFace: "Arial", bold: true,
    color: "E65100", align: "left", valign: "middle"
  });
  slide.addText(
    "Renewable energy comes from natural sources that never run out, such as sunlight and wind. " +
    "Non-renewable energy comes from fossil fuels like coal and oil, which will eventually run out and cause pollution.",
    {
      x: 0.45, y: 4.25, w: 9.1, h: 1.1,
      fontSize: 12, fontFace: "Arial",
      color: "4E342E", align: "left", valign: "top"
    }
  );

  // Page badge
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: "1565C0" }, line: { color: "1565C0" } });
  slide.addText("2", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A237E", secondary: "1565C0", accent: "F5A623", light: "E8F4FD", bg: "FAFFFE" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "/home/ubuntu/.openclaw/workspace/data/temp/slides/slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
