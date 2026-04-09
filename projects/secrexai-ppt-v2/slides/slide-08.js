// slide-08.js - CTA / Closing
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'closing',
  index: 8,
  title: '立即開始'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  
  // Full background - primary color
  slide.background = { color: theme.primary };
  
  // Decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: -1, y: -1, w: 4, h: 4,
    fill: { color: theme.secondary, transparency: 50 }
  });
  
  slide.addShape(pres.shapes.OVAL, {
    x: 7, y: 3, w: 5, h: 5,
    fill: { color: theme.accent, transparency: 70 }
  });
  
  // Main CTA text
  slide.addText("立即開始", {
    x: 0, y: 1.5, w: 10, h: 1,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  
  slide.addText("14 日免費試用", {
    x: 0, y: 2.6, w: 10, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });
  
  slide.addText("無需信用卡，直接 WhatsApp 開始", {
    x: 0, y: 3.4, w: 10, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });
  
  // Contact info box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.5, y: 4.1, w: 5, h: 1.1,
    fill: { color: theme.secondary },
    rectRadius: 0.15
  });
  
  slide.addText("聯絡 Area2 獲取更多資訊", {
    x: 2.5, y: 4.2, w: 5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  
  slide.addText("WhatsApp: 9565 1459  |  info@area2.com", {
    x: 2.5, y: 4.65, w: 5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center"
  });
  
  // Area2 branding
  slide.addText("Area2", {
    x: 0.5, y: 5.3, w: 2, h: 0.3,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true
  });
  
  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("8", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide, slideConfig };
