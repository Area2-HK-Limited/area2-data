// slide-02.js — Table of Contents
const slideConfig = { type: 'toc', index: 2, title: '目錄' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg },
    line: { color: theme.bg }
  });

  // Left dark panel
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.2, h: 5.625,
    fill: { color: theme.primary },
    line: { color: theme.primary }
  });

  // Decorative circle on left panel
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 3.8, w: 2.2, h: 2.2,
    fill: { color: theme.secondary, transparency: 50 },
    line: { color: theme.secondary, transparency: 50 }
  });

  // "CONTENTS" label
  slide.addText('CONTENTS', {
    x: 0.3, y: 0.35, w: 2.6, h: 0.45,
    fontSize: 11, fontFace: 'Arial',
    color: theme.accent, bold: true, align: 'left',
    charSpacing: 3
  });

  // Title on left panel
  slide.addText('目\n錄', {
    x: 0.3, y: 0.85, w: 2.6, h: 2.0,
    fontSize: 52, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true, align: 'left'
  });

  // TOC items
  const items = [
    { num: '01', label: '公司簡介' },
    { num: '02', label: '核心服務' },
    { num: '03', label: '成功案例' },
    { num: '04', label: '聯繫我們' },
  ];

  const startX = 3.7;
  const startY = 0.8;
  const rowH = 0.95;

  items.forEach((item, i) => {
    const y = startY + i * rowH;

    // Row background card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: startX, y: y, w: 5.8, h: 0.75,
      fill: { color: i % 2 === 0 ? theme.secondary : theme.primary, transparency: i % 2 === 0 ? 88 : 92 },
      line: { color: theme.accent, transparency: 60 },
      rectRadius: 0.06
    });

    // Number badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: startX + 0.12, y: y + 0.13, w: 0.5, h: 0.5,
      fill: { color: theme.accent },
      line: { color: theme.accent },
      rectRadius: 0.06
    });
    slide.addText(item.num, {
      x: startX + 0.12, y: y + 0.13, w: 0.5, h: 0.5,
      fontSize: 13, fontFace: 'Arial',
      color: 'FFFFFF', bold: true,
      align: 'center', valign: 'middle'
    });

    // Label
    slide.addText(item.label, {
      x: startX + 0.78, y: y + 0.13, w: 4.7, h: 0.5,
      fontSize: 18, fontFace: 'Microsoft YaHei',
      color: theme.primary, bold: i === 0,
      valign: 'middle'
    });

    // Right arrow
    slide.addText('›', {
      x: startX + 5.3, y: y + 0.12, w: 0.4, h: 0.5,
      fontSize: 20, fontFace: 'Arial',
      color: theme.accent, bold: true,
      align: 'center', valign: 'middle'
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText('02', {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
