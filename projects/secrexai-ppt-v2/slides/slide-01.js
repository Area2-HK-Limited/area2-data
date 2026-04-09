// slide-01.js - Cover Page
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: 'SecrexAI 介紹'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  
  // Background - deep navy
  slide.background = { color: theme.primary };
  
  // Decorative gradient bar at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.5, w: 10, h: 1.125,
    fill: { color: theme.secondary }
  });
  
  // Accent circle - top right decorative
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: -1, w: 4, h: 4,
    fill: { color: theme.accent, transparency: 70 }
  });
  
  // Another decorative circle
  slide.addShape(pres.shapes.OVAL, {
    x: 8.5, y: 0.5, w: 2, h: 2,
    fill: { color: theme.light, transparency: 80 }
  });
  
  // WhatsApp-style icon representation (rounded rectangle)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.2, y: 1.8, w: 1.8, h: 2.4,
    fill: { color: "FFFFFF" },
    rectRadius: 0.2
  });
  
  // Chat bubble inside
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.4, y: 2.3, w: 1.2, h: 0.6,
    fill: { color: theme.accent },
    rectRadius: 0.15
  });
  
  // AI indicator dot
  slide.addShape(pres.shapes.OVAL, {
    x: 8.5, y: 3.2, w: 0.3, h: 0.3,
    fill: { color: theme.secondary }
  });
  
  // Main Title
  slide.addText("SecrexAI 介紹", {
    x: 0.5, y: 1.8, w: 6.5, h: 1.2,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left"
  });
  
  // Subtitle
  slide.addText("香港 SME 專屬 WhatsApp AI 助手", {
    x: 0.5, y: 3.0, w: 6.5, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.light, align: "left"
  });
  
  // Tagline
  slide.addText("24小時 AI 助手 · 廣東話原生 · 60+ 技能", {
    x: 0.5, y: 3.7, w: 6.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "left"
  });
  
  // Bottom bar with Area2 branding
  slide.addText("Area2 呈獻", {
    x: 0.5, y: 4.75, w: 3, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left"
  });
  
  slide.addText("AI 數碼營銷方案專家", {
    x: 6.5, y: 4.75, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, align: "right"
  });
  
  return slide;
}

module.exports = { createSlide, slideConfig };
