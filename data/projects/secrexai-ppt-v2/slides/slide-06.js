// slide-06.js - Pricing
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '定價方案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFFFF" };
  
  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  
  slide.addText("定價方案", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });
  
  // Three pricing cards
  const plans = [
    { name: "Starter", subtitle: "個人版", price: "HK$298", period: "/月", features: ["基本用量", "60+ 技能完整使用", "廣東話原生對話", "永久記憶系統"], popular: false },
    { name: "Business", subtitle: "商務版", price: "HK$688", period: "/月", features: ["Starter 所有功能", "5倍商業用量", "WhatsApp 群組", "優先技術支援"], popular: true },
    { name: "Enterprise", subtitle: "企業版", price: "度身訂造", period: "", features: ["Business 所有功能", "無限成員使用", "自訂 AI 個性", "專屬客戶經理"], popular: false }
  ];
  
  const cardWidth = 2.9;
  const cardGap = 0.35;
  const startX = (10 - 3 * cardWidth - 2 * cardGap) / 2;
  
  for (let i = 0; i < 3; i++) {
    const plan = plans[i];
    const x = startX + i * (cardWidth + cardGap);
    const cardFill = plan.popular ? theme.secondary : theme.bg;
    const textColor = plan.popular ? "FFFFFF" : theme.primary;
    const descColor = plan.popular ? theme.light : theme.secondary;
    
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 1.1, w: cardWidth, h: 4.3,
      fill: { color: cardFill },
      rectRadius: 0.15
    });
    
    // Popular badge
    if (plan.popular) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x + 0.5, y: 0.95, w: 1.9, h: 0.35,
        fill: { color: "FF6600" },
        rectRadius: 0.15
      });
      slide.addText("最受歡迎", {
        x: x + 0.5, y: 0.95, w: 1.9, h: 0.35,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: "FFFFFF", bold: true,
        align: "center", valign: "middle"
      });
    }
    
    // Plan name
    slide.addText(plan.name, {
      x: x, y: 1.4, w: cardWidth, h: 0.5,
      fontSize: 22, fontFace: "Arial",
      color: textColor, bold: true, align: "center"
    });
    
    // Subtitle
    slide.addText(plan.subtitle, {
      x: x, y: 1.9, w: cardWidth, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: descColor, align: "center"
    });
    
    // Price
    slide.addText(plan.price, {
      x: x, y: 2.4, w: cardWidth, h: 0.6,
      fontSize: plan.price.length > 6 ? 24 : 32, fontFace: "Arial",
      color: textColor, bold: true, align: "center"
    });
    
    // Period
    if (plan.period) {
      slide.addText(plan.period, {
        x: x, y: 3.0, w: cardWidth, h: 0.3,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: descColor, align: "center"
      });
    }
    
    // Features
    let featureY = 3.5;
    for (const feat of plan.features) {
      slide.addText("• " + feat, {
        x: x + 0.2, y: featureY, w: cardWidth - 0.4, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: textColor, align: "center"
      });
      featureY += 0.45;
    }
  }
  
  // Free trial note
  slide.addText("所有方案：14日免費試用，無需信用卡", {
    x: 0, y: 5.45, w: 10, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FF6600", bold: true, align: "center"
  });
  
  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("6", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide, slideConfig };
