// slide-03.js — Q2: Types of Energy Sources
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 3, title: 'Types of Energy Sources' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "F9FBF9" };

  // Title bar (orange)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: "E65100" },
    line: { color: "E65100" }
  });
  slide.addText("Q2: Types of Energy Sources", {
    x: 0.3, y: 0, w: 9.4, h: 0.85,
    fontSize: 24, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // ============ LEFT HALF — Renewable (Green) ============
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.2, y: 1.0, w: 4.6, h: 4.3,
    fill: { color: "E8F5E9" },
    line: { color: "4CAF50", width: 3 },
    rectRadius: 0.2
  });

  // Renewable header
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.2, y: 1.0, w: 4.6, h: 0.65,
    fill: { color: "388E3C" },
    line: { color: "388E3C" },
    rectRadius: 0.15
  });
  slide.addText("♻️  Renewable Energy", {
    x: 0.2, y: 1.0, w: 4.6, h: 0.65,
    fontSize: 17, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Solar card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 1.75, w: 4.1, h: 1.15,
    fill: { color: "FFFDE7" },
    line: { color: "FDD835", width: 2 },
    rectRadius: 0.15
  });
  slide.addText("☀️", {
    x: 0.55, y: 1.82, w: 0.9, h: 0.9,
    fontSize: 32, align: "center", valign: "middle"
  });
  slide.addText("Solar Energy", {
    x: 1.55, y: 1.85, w: 2.8, h: 0.45,
    fontSize: 16, fontFace: "Arial", bold: true,
    color: "F57F17", align: "left", valign: "middle"
  });
  slide.addText("Energy from the sun ☀️", {
    x: 1.55, y: 2.3, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "795548", align: "left", valign: "middle"
  });

  // Wind card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: 3.0, w: 4.1, h: 1.15,
    fill: { color: "E3F2FD" },
    line: { color: "42A5F5", width: 2 },
    rectRadius: 0.15
  });
  slide.addText("💨", {
    x: 0.55, y: 3.07, w: 0.9, h: 0.9,
    fontSize: 32, align: "center", valign: "middle"
  });
  slide.addText("Wind Energy", {
    x: 1.55, y: 3.1, w: 2.8, h: 0.45,
    fontSize: 16, fontFace: "Arial", bold: true,
    color: "1565C0", align: "left", valign: "middle"
  });
  slide.addText("Energy from the wind 🌬️", {
    x: 1.55, y: 3.55, w: 2.8, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "795548", align: "left", valign: "middle"
  });

  // ============ RIGHT HALF — Non-Renewable (Grey/Dark) ============
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.0, w: 4.6, h: 4.3,
    fill: { color: "F5F5F5" },
    line: { color: "9E9E9E", width: 3 },
    rectRadius: 0.2
  });

  // Non-renewable header
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.0, w: 4.6, h: 0.65,
    fill: { color: "616161" },
    line: { color: "616161" },
    rectRadius: 0.15
  });
  slide.addText("🔥  Non-Renewable Energy", {
    x: 5.2, y: 1.0, w: 4.6, h: 0.65,
    fontSize: 17, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Oil card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.45, y: 1.75, w: 4.1, h: 1.15,
    fill: { color: "FFF8E1" },
    line: { color: "FF8F00", width: 2 },
    rectRadius: 0.15
  });
  slide.addText("⛽", {
    x: 5.55, y: 1.82, w: 0.9, h: 0.9,
    fontSize: 32, align: "center", valign: "middle"
  });
  slide.addText("Oil / Petrol", {
    x: 6.55, y: 1.85, w: 2.9, h: 0.45,
    fontSize: 16, fontFace: "Arial", bold: true,
    color: "E65100", align: "left", valign: "middle"
  });
  slide.addText("Fossil fuel from underground 🌍", {
    x: 6.55, y: 2.3, w: 2.9, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "795548", align: "left", valign: "middle"
  });

  // Coal card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.45, y: 3.0, w: 4.1, h: 1.15,
    fill: { color: "EEEEEE" },
    line: { color: "616161", width: 2 },
    rectRadius: 0.15
  });
  slide.addText("🪨", {
    x: 5.55, y: 3.07, w: 0.9, h: 0.9,
    fontSize: 32, align: "center", valign: "middle"
  });
  slide.addText("Coal", {
    x: 6.55, y: 3.1, w: 2.9, h: 0.45,
    fontSize: 16, fontFace: "Arial", bold: true,
    color: "424242", align: "left", valign: "middle"
  });
  slide.addText("Burnt to make electricity 🏭", {
    x: 6.55, y: 3.55, w: 2.9, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "795548", align: "left", valign: "middle"
  });

  // Bottom note
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.2, y: 4.98, w: 9.6, h: 0.42,
    fill: { color: "E3F2FD" },
    line: { color: "42A5F5", width: 1 },
    rectRadius: 0.1
  });
  slide.addText("💡  Tip: Renewable = forever!  🌱  Non-Renewable = will run out one day!", {
    x: 0.4, y: 4.98, w: 9.2, h: 0.42,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "0D47A1", align: "center", valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: "E65100" }, line: { color: "E65100" } });
  slide.addText("3", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A237E", secondary: "1565C0", accent: "F5A623", light: "E8F4FD", bg: "F9FBF9" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "/home/ubuntu/.openclaw/workspace/data/temp/slides/slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
