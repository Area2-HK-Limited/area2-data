// slide-05.js - Core Features
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 5,
  title: '核心功能'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFFFF" };
  
  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  
  slide.addText("核心功能", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });
  
  // Feature grid - 3x2
  const features = [
    { icon: "🔍", title: "60+ 技能", desc: "搜尋、問答、提醒、整理文件" },
    { icon: "🧠", title: "永久記憶系統", desc: "記住你係誰，越用越聰明" },
    { icon: "⏰", title: "排程提醒功能", desc: "自動跟進，永不忘記" },
    { icon: "💬", title: "WhatsApp 群組", desc: "加入群組，集體使用" },
    { icon: "✍️", title: "自動生成文案", desc: "一秒生成專業內容" },
    { icon: "📷", title: "圖片分析", desc: "智能分析，即時回應" }
  ];
  
  for (let i = 0; i < 6; i++) {
    const f = features[i];
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 3.15;
    const y = 1.15 + row * 2.1;
    
    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 3, h: 1.85,
      fill: { color: theme.bg },
      rectRadius: 0.12
    });
    
    // Icon
    slide.addText(f.icon, {
      x: x, y: y + 0.15, w: 3, h: 0.6,
      fontSize: 36, align: "center", valign: "middle"
    });
    
    // Title
    slide.addText(f.title, {
      x: x + 0.15, y: y + 0.85, w: 2.7, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    
    // Description
    slide.addText(f.desc, {
      x: x + 0.15, y: y + 1.3, w: 2.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  }
  
  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide, slideConfig };
