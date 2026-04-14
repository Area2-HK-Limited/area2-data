// slide-04.js - Comparison
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'comparison',
  index: 4,
  title: '同一般 AI 助手比較'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFFFF" };
  
  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  
  slide.addText("同一般 AI 助手比較", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });
  
  // Left column - General AI (red/warning tones)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: "FFF0F0" },
    rectRadius: 0.15
  });
  
  slide.addText("一般 AI 助理", {
    x: 0.4, y: 1.25, w: 4.4, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "CC3333", bold: true, align: "center"
  });
  
  const generalItems = [
    "✗ 你問佢點做，佢淨係答你",
    "✗ 要你自己複製貼上郁手做",
    "✗ 每次對話都係獨立，無記憶",
    "✗ 你唔記得跟進，佢唔會主動提醒",
    "✗ 無替你預訂、寫電郵、查資料"
  ];
  
  for (let i = 0; i < generalItems.length; i++) {
    slide.addText(generalItems[i], {
      x: 0.7, y: 1.9 + i * 0.6, w: 4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "AA3333"
    });
  }
  
  // Right column - SecrexAI (teal/success tones)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.1, w: 4.4, h: 4.2,
    fill: { color: theme.bg },
    rectRadius: 0.15
  });
  
  slide.addText("SecrexAI", {
    x: 5.2, y: 1.25, w: 4.4, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });
  
  const secrexItems = [
    "✓ 你叫佢做，佢真係郁手幫你完成",
    "✓ 自動預訂、寫電郵、整理文件",
    "✓ 永久記憶，越用越就手",
    "✓ 佢有電腦喺手，隨時幫你做嘢",
    "✓ 24/7 standby，有手機就得"
  ];
  
  for (let i = 0; i < secrexItems.length; i++) {
    slide.addText(secrexItems[i], {
      x: 5.5, y: 1.9 + i * 0.6, w: 4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  }
  
  // VS badge in center
  slide.addShape(pres.shapes.OVAL, {
    x: 4.5, y: 2.8, w: 1, h: 1,
    fill: { color: theme.primary }
  });
  slide.addText("VS", {
    x: 4.5, y: 2.8, w: 1, h: 1,
    fontSize: 18, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("4", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide, slideConfig };
