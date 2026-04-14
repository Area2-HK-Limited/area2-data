// slide-05.js — 數據展示 (Data Dashboard / KPI)
const slideConfig = { type: 'content', index: 5, title: '數據展示' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background — dark for drama
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary },
    line: { color: theme.primary }
  });

  // Subtle decorative large circle background
  slide.addShape(pres.shapes.OVAL, {
    x: -1.5, y: -1.5, w: 5, h: 5,
    fill: { color: theme.secondary, transparency: 70 },
    line: { color: theme.secondary, transparency: 100 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 7, y: 2.5, w: 4, h: 4,
    fill: { color: theme.secondary, transparency: 75 },
    line: { color: theme.secondary, transparency: 100 }
  });

  // Header
  slide.addText('03  成功案例數據  KEY METRICS', {
    x: 0.4, y: 0.2, w: 9.2, h: 0.5,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.accent, bold: true,
    valign: 'middle', charSpacing: 2
  });

  // Section title
  slide.addText('數字背後的實力', {
    x: 0.4, y: 0.72, w: 9.2, h: 0.7,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true,
    align: 'center'
  });

  // Accent underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 1.42, w: 2.0, h: 0.055,
    fill: { color: theme.accent },
    line: { color: theme.accent }
  });

  // 3 KPI cards
  const kpis = [
    { big: '100+', label: '成功項目', sub: 'Successful Projects' },
    { big: '500+萬', label: '廣告消費管理', sub: 'Ad Spend Managed (HKD)' },
    { big: '95%', label: '客戶續約率', sub: 'Client Retention Rate' },
  ];

  const cardW = 2.7;
  const cardH = 2.9;
  const startX = 0.65;
  const gap = 0.25;
  const cardY = 1.65;

  kpis.forEach((kpi, i) => {
    const x = startX + i * (cardW + gap);

    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: cardY, w: cardW, h: cardH,
      fill: { color: theme.secondary },
      line: { color: theme.accent, transparency: 60 },
      rectRadius: 0.1
    });

    // Top accent bar on card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: cardY, w: cardW, h: 0.08,
      fill: { color: theme.accent },
      line: { color: theme.accent },
      rectRadius: 0.08
    });

    // Big number
    slide.addText(kpi.big, {
      x: x + 0.1, y: cardY + 0.25, w: cardW - 0.2, h: 1.3,
      fontSize: kpi.big.length > 4 ? 52 : 64,
      fontFace: 'Arial',
      color: 'FFFFFF', bold: true,
      align: 'center', valign: 'middle'
    });

    // Label (Chinese)
    slide.addText(kpi.label, {
      x: x + 0.1, y: cardY + 1.6, w: cardW - 0.2, h: 0.6,
      fontSize: 16, fontFace: 'Microsoft YaHei',
      color: theme.light, bold: true,
      align: 'center', valign: 'middle'
    });

    // Sub label (English)
    slide.addText(kpi.sub, {
      x: x + 0.1, y: cardY + 2.2, w: cardW - 0.2, h: 0.5,
      fontSize: 10, fontFace: 'Arial',
      color: theme.accent,
      align: 'center', valign: 'middle',
      transparency: 20
    });
  });

  // Bottom tagline
  slide.addText('數據會說話 — 每一個數字背後都係真實嘅客戶成果', {
    x: 0.4, y: 4.75, w: 9.2, h: 0.45,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.accent, align: 'center',
    italic: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('05', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
