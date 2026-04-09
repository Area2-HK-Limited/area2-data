// slide-02.js - Table of Contents
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '目錄'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFFFF" };
  
  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  
  slide.addText("目錄", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });
  
  // TOC items
  const tocItems = [
    { num: "01", title: "什麼是 SecrexAI?" },
    { num: "02", title: "同一般 AI 助手比較" },
    { num: "03", title: "核心功能" },
    { num: "04", title: "定價方案" },
    { num: "05", title: "適合邊類人?" },
    { num: "06", title: "為什麼選擇 SecrexAI?" }
  ];
  
  // Left column (items 1-3)
  for (let i = 0; i < 3; i++) {
    const item = tocItems[i];
    const y = 1.3 + i * 1.3;
    
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.8, y: y, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    
    // Title
    slide.addText(item.title, {
      x: 1.7, y: y + 0.1, w: 3, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false
    });
  }
  
  // Right column (items 4-6)
  for (let i = 0; i < 3; i++) {
    const item = tocItems[i + 3];
    const y = 1.3 + i * 1.3;
    
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 5.3, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText(item.num, {
      x: 5.3, y: y, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    
    // Title
    slide.addText(item.title, {
      x: 6.2, y: y + 0.1, w: 3.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false
    });
  }
  
  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide, slideConfig };
