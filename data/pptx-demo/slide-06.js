// slide-06.js — 聯繫我們 (CTA / Contact)
const slideConfig = { type: 'summary', index: 6, title: '聯繫我們' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Full background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg },
    line: { color: theme.bg }
  });

  // Right image panel
  slide.addImage({
    path: '/home/ubuntu/.openclaw/workspace/data/pptx-demo/imgs/digital-marketing.jpg',
    x: 5.5, y: 0, w: 4.5, h: 5.625,
    sizing: { type: 'cover', w: 4.5, h: 5.625 }
  });

  // Overlay on image
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 0, w: 4.5, h: 5.625,
    fill: { color: theme.primary, transparency: 25 },
    line: { color: theme.primary, transparency: 100 }
  });

  // Left background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 5.5, h: 5.625,
    fill: { color: theme.primary },
    line: { color: theme.primary }
  });

  // Decorative circle
  slide.addShape(pres.shapes.OVAL, {
    x: -0.8, y: 3.5, w: 3.0, h: 3.0,
    fill: { color: theme.secondary, transparency: 60 },
    line: { color: theme.secondary, transparency: 100 }
  });

  // Small tag
  slide.addText('04  CONTACT US', {
    x: 0.45, y: 0.35, w: 4.6, h: 0.4,
    fontSize: 11, fontFace: 'Arial',
    color: theme.accent, bold: true,
    charSpacing: 3
  });

  // Main CTA text
  slide.addText('我們期待\n與您合作', {
    x: 0.45, y: 0.8, w: 4.8, h: 1.8,
    fontSize: 42, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true,
    lineSpacingMultiple: 1.15
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.45, y: 2.62, w: 2.0, h: 0.055,
    fill: { color: theme.accent },
    line: { color: theme.accent }
  });

  // Contact details
  const contacts = [
    { icon: '📞', label: '+852 9565 1459' },
    { icon: '✉️', label: 'info@area2.com' },
    { icon: '📍', label: '旺角荷李活商業中心 18樓' },
    { icon: '🌐', label: 'www.area2.com' },
  ];

  contacts.forEach((c, i) => {
    const y = 2.82 + i * 0.58;

    // Row pill
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.45, y: y, w: 4.6, h: 0.46,
      fill: { color: theme.secondary, transparency: 40 },
      line: { color: theme.accent, transparency: 70 },
      rectRadius: 0.08
    });

    // Icon
    slide.addText(c.icon, {
      x: 0.5, y: y, w: 0.5, h: 0.46,
      fontSize: 15, align: 'center', valign: 'middle'
    });

    // Text
    slide.addText(c.label, {
      x: 1.05, y: y, w: 3.9, h: 0.46,
      fontSize: 13, fontFace: 'Microsoft YaHei',
      color: 'FFFFFF',
      valign: 'middle'
    });
  });

  // Page badge on dark bg
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('06', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
