// slide-07.js - Who is it for
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 7,
  title: '適合邊類人?'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFFFF" };
  
  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  
  slide.addText("適合邊類人?", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });
  
  // Audience cards - 3x2 grid
  const audiences = [
    { icon: "🏢", title: "中小企老闆", desc: "零售、餐飲、服務行業" },
    { icon: "🏪", title: "零售店東主", desc: "多店管理、庫存追蹤" },
    { icon: "🍽️", title: "餐廳東主", desc: "餐牌更新、訂位管理" },
    { icon: "💅", title: "美容院", desc: "預約提醒、客戶管理" },
    { icon: "🏠", title: "地產代理", desc: "放盤文案、客戶跟進" },
    { icon: "📊", title: "會計/物流", desc: "單據追蹤、派送更新" }
  ];
  
  for (let i = 0; i < 6; i++) {
    const a = audiences[i];
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 3.15;
    const y = 1.15 + row * 2.1;
    
    // Card with teal background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 3, h: 1.85,
      fill: { color: theme.secondary },
      rectRadius: 0.12
    });
    
    // Icon
    slide.addText(a.icon, {
      x: x, y: y + 0.15, w: 3, h: 0.6,
      fontSize: 36, align: "center", valign: "middle"
    });
    
    // Title
    slide.addText(a.title, {
      x: x + 0.15, y: y + 0.85, w: 2.7, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    
    // Description
    slide.addText(a.desc, {
      x: x + 0.15, y: y + 1.3, w: 2.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, align: "center"
    });
  }
  
  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("7", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide, slideConfig };
