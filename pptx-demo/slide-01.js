// slide-01.js — Cover Slide
const slideConfig = { type: 'cover', index: 1, title: 'AREA2' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Full-bleed deep primary background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary },
    line: { color: theme.primary }
  });

  // Right accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.2, y: 0, w: 2.8, h: 5.625,
    fill: { color: theme.secondary },
    line: { color: theme.secondary }
  });

  // Decorative circle top-right
  slide.addShape(pres.shapes.OVAL, {
    x: 7.8, y: -0.8, w: 2.5, h: 2.5,
    fill: { color: theme.accent, transparency: 40 },
    line: { color: theme.accent, transparency: 40 }
  });

  // Decorative circle bottom-right
  slide.addShape(pres.shapes.OVAL, {
    x: 8.2, y: 4.2, w: 1.8, h: 1.8,
    fill: { color: theme.light, transparency: 50 },
    line: { color: theme.light, transparency: 50 }
  });

  // Left thin accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.8, w: 0.08, h: 2.5,
    fill: { color: theme.accent },
    line: { color: theme.accent }
  });

  // Main title
  slide.addText('AREA2', {
    x: 0.65, y: 1.6, w: 6.3, h: 1.4,
    fontSize: 72, fontFace: 'Arial',
    color: 'FFFFFF', bold: true, align: 'left'
  });

  // Subtitle
  slide.addText('AI 數碼營銷合作方案', {
    x: 0.65, y: 3.05, w: 6.3, h: 0.65,
    fontSize: 22, fontFace: 'Microsoft YaHei',
    color: theme.light, bold: false, align: 'left'
  });

  // Date
  slide.addText('2026年4月', {
    x: 0.65, y: 3.75, w: 4, h: 0.45,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: theme.accent, align: 'left'
  });

  // Tagline on right bar
  slide.addText('MARKETING\nRESULTS\nDRIVEN\nBY AI', {
    x: 7.25, y: 1.5, w: 2.5, h: 2.6,
    fontSize: 16, fontFace: 'Arial',
    color: 'FFFFFF', bold: true, align: 'center',
    valign: 'middle', lineSpacingMultiple: 1.3
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
