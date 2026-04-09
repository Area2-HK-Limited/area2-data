// slide-03.js - What is SecrexAI
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 3,
  title: '什麼是 SecrexAI?'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFFFF" };
  
  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  
  slide.addText("什麼是 SecrexAI?", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });
  
  // Feature cards - 2x2 grid with icons
  const features = [
    { icon: "⏰", title: "24小時 AI 助手", desc: "住喺你 WhatsApp，隨時隨地幫你做嘢" },
    { icon: "💬", title: "廣東話原生", desc: "零學習成本，直接廣東話對話" },
    { icon: "🧠", title: "永久記憶", desc: "越用越就手，記住你嘅工作習慣" },
    { icon: "⚡", title: "60+ 技能", desc: "一個平台解決所有需求" }
  ];
  
  for (let i = 0; i < 4; i++) {
    const f = features[i];
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.2 + row * 2.0;
    
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.7,
      fill: { color: theme.bg },
      rectRadius: 0.15
    });
    
    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.35, w: 1, h: 1,
      fill: { color: theme.accent }
    });
    
    // Icon text (emoji)
    slide.addText(f.icon, {
      x: x + 0.2, y: y + 0.35, w: 1, h: 1,
      fontSize: 32, align: "center", valign: "middle"
    });
    
    // Title
    slide.addText(f.title, {
      x: x + 1.4, y: y + 0.3, w: 2.8, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    
    // Description
    slide.addText(f.desc, {
      x: x + 1.4, y: y + 0.85, w: 2.8, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  }
  
  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("3", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide, slideConfig };
