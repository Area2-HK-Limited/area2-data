// slide-04.js — 核心服務 (2x2 Grid)
const slideConfig = { type: 'content', index: 4, title: '核心服務' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg },
    line: { color: theme.bg }
  });

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.65,
    fill: { color: theme.primary },
    line: { color: theme.primary }
  });
  slide.addText('02  核心服務  OUR SERVICES', {
    x: 0.4, y: 0, w: 9.2, h: 0.65,
    fontSize: 13, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true,
    valign: 'middle', charSpacing: 1
  });

  const services = [
    {
      icon: '🔍',
      title: 'SEO 搜尋引擎優化',
      desc: '關鍵詞研究、技術 SEO、內容優化，\n持續提升網站自然流量與排名',
      color: theme.primary,
      textColor: 'FFFFFF'
    },
    {
      icon: '💰',
      title: 'Paid Media 付費廣告',
      desc: 'Google Ads / Facebook Ads 精準投放，\n最大化廣告回報率 (ROAS)',
      color: theme.secondary,
      textColor: 'FFFFFF'
    },
    {
      icon: '📱',
      title: '社交媒體營銷',
      desc: '內容策略制定、帳戶管理、KOL 合作，\n提升品牌社群影響力',
      color: theme.accent,
      textColor: 'FFFFFF'
    },
    {
      icon: '🎨',
      title: '品牌與設計管理',
      desc: 'VI 視覺系統建立、品牌定位策略，\n打造專業一致的品牌 Identity',
      color: theme.light,
      textColor: theme.primary
    },
  ];

  // 2x2 grid: margin 0.4, gap 0.18
  const cols = 2;
  const rows = 2;
  const marginX = 0.4;
  const marginY = 0.82;
  const gapX = 0.2;
  const gapY = 0.2;
  const cardW = (10 - marginX * 2 - gapX) / cols;
  const cardH = (5.625 - marginY - 0.25 - gapY) / rows;

  services.forEach((svc, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = marginX + col * (cardW + gapX);
    const y = marginY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y, w: cardW, h: cardH,
      fill: { color: svc.color },
      line: { color: svc.color },
      rectRadius: 0.08
    });

    // Decorative circle top-right of card
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardW - 0.75, y: y - 0.15, w: 0.9, h: 0.9,
      fill: { color: 'FFFFFF', transparency: 85 },
      line: { color: 'FFFFFF', transparency: 85 }
    });

    // Icon
    slide.addText(svc.icon, {
      x: x + 0.2, y: y + 0.18, w: 0.7, h: 0.6,
      fontSize: 26, align: 'center', valign: 'middle'
    });

    // Title
    slide.addText(svc.title, {
      x: x + 0.95, y: y + 0.18, w: cardW - 1.15, h: 0.5,
      fontSize: 15, fontFace: 'Microsoft YaHei',
      color: svc.textColor, bold: true,
      valign: 'middle'
    });

    // Divider line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: y + 0.75, w: cardW - 0.4, h: 0.025,
      fill: { color: 'FFFFFF', transparency: 60 },
      line: { color: 'FFFFFF', transparency: 100 }
    });

    // Description
    slide.addText(svc.desc, {
      x: x + 0.2, y: y + 0.85, w: cardW - 0.4, h: cardH - 1.05,
      fontSize: 12, fontFace: 'Microsoft YaHei',
      color: svc.textColor,
      wrap: true, valign: 'top',
      lineSpacingMultiple: 1.25,
      transparency: svc.textColor === 'FFFFFF' ? 15 : 0
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('04', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
