// slide-05.js — Q5: My Recommendation
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 5, title: 'Best Energy for Our School' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFDE7" };

  // Title bar (deep blue)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: "0277BD" },
    line: { color: "0277BD" }
  });
  slide.addText("🏫  Q5: Best Energy for Our School", {
    x: 0.3, y: 0, w: 9.4, h: 0.85,
    fontSize: 24, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // "My Choice" banner
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.5, y: 0.95, w: 5, h: 0.65,
    fill: { color: "F57F17" },
    line: { color: "E65100", width: 2 },
    rectRadius: 0.2
  });
  slide.addText("⭐  My Choice: Solar Energy  ☀️", {
    x: 2.5, y: 0.95, w: 5, h: 0.65,
    fontSize: 18, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // ============ LEFT: Illustration icons (2x2 grid) ============
  const iconItems = [
    { emoji: "🏫", label: "Our School", color: "E3F2FD", border: "42A5F5", x: 0.25, y: 1.75 },
    { emoji: "☀️", label: "Solar Energy", color: "FFFDE7", border: "FDD835", x: 2.1, y: 1.75 },
    { emoji: "💰", label: "Saves Money", color: "E8F5E9", border: "66BB6A", x: 0.25, y: 3.2 },
    { emoji: "🌍", label: "Happy Earth", color: "F3E5F5", border: "AB47BC", x: 2.1, y: 3.2 }
  ];

  iconItems.forEach(item => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: item.x, y: item.y, w: 1.75, h: 1.3,
      fill: { color: item.color },
      line: { color: item.border, width: 2 },
      rectRadius: 0.18
    });
    slide.addText(item.emoji, {
      x: item.x, y: item.y + 0.05, w: 1.75, h: 0.8,
      fontSize: 28, align: "center", valign: "middle"
    });
    slide.addText(item.label, {
      x: item.x, y: item.y + 0.85, w: 1.75, h: 0.38,
      fontSize: 11, fontFace: "Arial", bold: true,
      color: "424242", align: "center", valign: "middle"
    });
  });

  // Solar panel visual (rectangle array)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: 4.6, w: 3.6, h: 0.45,
    fill: { color: "1565C0" },
    line: { color: "0D47A1", width: 1 }
  });
  slide.addText("🔋  Solar Panels on Rooftop", {
    x: 0.25, y: 4.6, w: 3.6, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // ============ RIGHT: Writing content box ============
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.05, y: 0.95, w: 5.7, h: 3.55,
    fill: { color: "FFFFFF" },
    line: { color: "FDD835", width: 3 },
    rectRadius: 0.2
  });

  // Lined paper effect
  for (let i = 0; i < 4; i++) {
    slide.addShape(pres.shapes.LINE, {
      x: 4.2, y: 1.55 + i * 0.65, w: 5.4, h: 0,
      line: { color: "E0E0E0", width: 1 }
    });
  }

  slide.addText("✏️  My Answer:", {
    x: 4.2, y: 1.0, w: 5.3, h: 0.4,
    fontSize: 14, fontFace: "Arial", bold: true,
    color: "E65100", align: "left", valign: "middle"
  });

  slide.addText(
    "I think solar energy is the best renewable energy source for our school to use. " +
    "Solar panels can be placed on the school rooftop to collect sunlight and generate electricity. " +
    "It is clean, quiet, and saves money on electricity bills. " +
    "Hong Kong has plenty of sunshine, so it is a very smart and practical choice for our school.",
    {
      x: 4.2, y: 1.45, w: 5.4, h: 2.9,
      fontSize: 13, fontFace: "Arial",
      color: "212121", align: "left", valign: "top",
      paraSpaceAfter: 4
    }
  );

  // Word count badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.05, y: 4.6, w: 2.5, h: 0.45,
    fill: { color: "4CAF50" },
    line: { color: "388E3C", width: 1 },
    rectRadius: 0.15
  });
  slide.addText("📝  Word count: ~60 words  ✅", {
    x: 4.05, y: 4.6, w: 2.5, h: 0.45,
    fontSize: 11, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // End emoji row
  slide.addText("🌞  🏫  💡  🌱  ♻️", {
    x: 6.8, y: 4.6, w: 3.0, h: 0.45,
    fontSize: 18, align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: "0277BD" }, line: { color: "0277BD" } });
  slide.addText("5", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A237E", secondary: "1565C0", accent: "F5A623", light: "E8F4FD", bg: "FFFDE7" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "/home/ubuntu/.openclaw/workspace/data/temp/slides/slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
