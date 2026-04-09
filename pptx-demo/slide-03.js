// slide-03.js — 公司簡介 (Split Content)
const slideConfig = { type: 'content', index: 3, title: '公司簡介' };

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
  slide.addText('01  公司簡介  ABOUT US', {
    x: 0.4, y: 0, w: 9.2, h: 0.65,
    fontSize: 13, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true,
    valign: 'middle', charSpacing: 1
  });

  // ── Left text block ──
  // Section title
  slide.addText('認識 Area2', {
    x: 0.45, y: 0.9, w: 4.5, h: 0.6,
    fontSize: 26, fontFace: 'Microsoft YaHei',
    color: theme.primary, bold: true
  });

  // Accent underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 1.5, w: 1.2, h: 0.055,
    fill: { color: theme.accent },
    line: { color: theme.accent }
  });

  // Body bullets
  const bullets = [
    'Area2 係一間專注 AI 數碼營銷嘅香港公司',
    '提供 SEO、PPC、社媒營銷、品牌設計等全方位服務',
    '致力幫助企業提升數碼轉型效率，以數據驅動增長',
    '憑藉本地市場深度理解與 AI 技術，為客戶創造實質業務成果',
  ];

  bullets.forEach((text, i) => {
    // bullet dot
    slide.addShape(pres.shapes.OVAL, {
      x: 0.45, y: 1.75 + i * 0.72 + 0.18, w: 0.1, h: 0.1,
      fill: { color: theme.accent },
      line: { color: theme.accent }
    });
    slide.addText(text, {
      x: 0.65, y: 1.75 + i * 0.72, w: 4.0, h: 0.55,
      fontSize: 13, fontFace: 'Microsoft YaHei',
      color: theme.secondary,
      valign: 'middle', wrap: true
    });
  });

  // ── Right visual block ──
  // Main large card with photo
  slide.addImage({
    path: '/home/ubuntu/.openclaw/workspace/data/pptx-demo/imgs/team-meeting.jpg',
    x: 5.2, y: 0.75, w: 4.4, h: 3.1,
    sizing: { type: 'cover', w: 4.4, h: 3.1 }
  });

  // Overlay on photo
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 0.75, w: 4.4, h: 3.1,
    fill: { color: theme.primary, transparency: 30 },
    line: { color: theme.primary, transparency: 100 }
  });

  // Stat card overlay bottom-left of image
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 2.9, w: 1.9, h: 0.8,
    fill: { color: theme.accent },
    line: { color: theme.accent },
    rectRadius: 0.06
  });
  slide.addText('成立 2022\nHong Kong', {
    x: 5.3, y: 2.9, w: 1.9, h: 0.8,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  // Stat card 2 bottom-right
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.5, y: 2.9, w: 1.95, h: 0.8,
    fill: { color: theme.secondary },
    line: { color: theme.secondary },
    rectRadius: 0.06
  });
  slide.addText('AI-First\nDigital Agency', {
    x: 7.5, y: 2.9, w: 1.95, h: 0.8,
    fontSize: 11, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  // Bottom mission strip
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 4.05, w: 4.4, h: 0.85,
    fill: { color: theme.primary },
    line: { color: theme.primary },
    rectRadius: 0.06
  });
  slide.addText('我們的使命：以 AI 科技賦能品牌，精準觸達目標受眾', {
    x: 5.25, y: 4.05, w: 4.3, h: 0.85,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: theme.light,
    align: 'center', valign: 'middle', wrap: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('03', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
