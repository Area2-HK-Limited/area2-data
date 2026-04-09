// slide-04.js — Q3 & Q4: Advantages & Disadvantages
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 4, title: 'Advantages & Disadvantages' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FEFEFE" };

  // Title bar (deep green)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: "2E7D32" },
    line: { color: "2E7D32" }
  });
  slide.addText("Q3 & Q4: Advantages & Disadvantages ⚖️", {
    x: 0.3, y: 0, w: 9.4, h: 0.85,
    fontSize: 22, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // ============ LEFT — Advantages (Green) ============
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.2, y: 0.95, w: 4.6, h: 4.45,
    fill: { color: "F1F8E9" },
    line: { color: "7CB342", width: 3 },
    rectRadius: 0.2
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.2, y: 0.95, w: 4.6, h: 0.65,
    fill: { color: "7CB342" },
    line: { color: "7CB342" },
    rectRadius: 0.15
  });
  slide.addText("✅  Advantages of Renewable Energy", {
    x: 0.2, y: 0.95, w: 4.6, h: 0.65,
    fontSize: 14, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // 3 advantage cards
  const advantages = [
    { emoji: "🌿", title: "Clean Energy", desc: "Does not pollute the air" },
    { emoji: "♾️", title: "Endless Supply", desc: "Will never run out" },
    { emoji: "💰", title: "Saves Money", desc: "Cheaper in the long run" }
  ];

  advantages.forEach((item, i) => {
    const yPos = 1.7 + i * 1.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.4, y: yPos, w: 4.2, h: 0.95,
      fill: { color: "FFFFFF" },
      line: { color: "AED581", width: 2 },
      rectRadius: 0.12
    });
    slide.addText(item.emoji, {
      x: 0.5, y: yPos + 0.1, w: 0.75, h: 0.75,
      fontSize: 26, align: "center", valign: "middle"
    });
    slide.addText(`${i + 1}. ${item.title}`, {
      x: 1.35, y: yPos + 0.05, w: 3.1, h: 0.38,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: "33691E", align: "left", valign: "middle"
    });
    slide.addText(item.desc, {
      x: 1.35, y: yPos + 0.45, w: 3.1, h: 0.38,
      fontSize: 12, fontFace: "Arial",
      color: "558B2F", align: "left", valign: "middle"
    });
  });

  // Earth + clean air icons at bottom
  slide.addText("🌍  😊  🌤️", {
    x: 0.4, y: 4.9, w: 4.2, h: 0.4,
    fontSize: 20, align: "center", valign: "middle"
  });

  // ============ RIGHT — Disadvantages (Red) ============
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 0.95, w: 4.6, h: 4.45,
    fill: { color: "FFF3E0" },
    line: { color: "EF6C00", width: 3 },
    rectRadius: 0.2
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 0.95, w: 4.6, h: 0.65,
    fill: { color: "E53935" },
    line: { color: "E53935" },
    rectRadius: 0.15
  });
  slide.addText("❌  Disadvantages of Non-Renewable", {
    x: 5.2, y: 0.95, w: 4.6, h: 0.65,
    fontSize: 14, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // 3 disadvantage cards
  const disadvantages = [
    { emoji: "🌫️", title: "Air Pollution", desc: "Causes pollution & global warming" },
    { emoji: "📉", title: "Will Run Out", desc: "Supply is limited on Earth" },
    { emoji: "🐻", title: "Harms Nature", desc: "Mining damages wildlife & habitat" }
  ];

  disadvantages.forEach((item, i) => {
    const yPos = 1.7 + i * 1.1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.4, y: yPos, w: 4.2, h: 0.95,
      fill: { color: "FFFFFF" },
      line: { color: "EF9A9A", width: 2 },
      rectRadius: 0.12
    });
    slide.addText(item.emoji, {
      x: 5.5, y: yPos + 0.1, w: 0.75, h: 0.75,
      fontSize: 26, align: "center", valign: "middle"
    });
    slide.addText(`${i + 1}. ${item.title}`, {
      x: 6.35, y: yPos + 0.05, w: 3.1, h: 0.38,
      fontSize: 14, fontFace: "Arial", bold: true,
      color: "B71C1C", align: "left", valign: "middle"
    });
    slide.addText(item.desc, {
      x: 6.35, y: yPos + 0.45, w: 3.1, h: 0.38,
      fontSize: 12, fontFace: "Arial",
      color: "C62828", align: "left", valign: "middle"
    });
  });

  // Sad icons at bottom
  slide.addText("🏭  💨  😢", {
    x: 5.4, y: 4.9, w: 4.2, h: 0.4,
    fontSize: 20, align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: "2E7D32" }, line: { color: "2E7D32" } });
  slide.addText("4", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A237E", secondary: "1565C0", accent: "F5A623", light: "E8F4FD", bg: "FEFEFE" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "/home/ubuntu/.openclaw/workspace/data/temp/slides/slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
