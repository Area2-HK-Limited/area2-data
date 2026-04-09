const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const imgDir = '/home/ubuntu/.openclaw/workspace/data/temp/spine_selected';
const outDir = '/home/ubuntu/.openclaw/workspace/data/temp/spine_pdf';

const images = fs.readdirSync(imgDir)
  .filter(f => f.endsWith('.jpg'))
  .sort((a, b) => parseInt(a.split('_')[0]) - parseInt(b.split('_')[0]));

console.log('Total images:', images.length);

// Read and resize images using canvas, then create PDF pages
// Use pdfkit if available, else use html approach with embedded images

// Check for pdfkit
try {
  const PDFDocument = require('pdfkit');
  console.log('pdfkit available');
} catch(e) {
  console.log('pdfkit not available:', e.message);
}

// Try jspdf
try {
  const { jsPDF } = require('jspdf');
  console.log('jspdf available');
} catch(e) {
  console.log('jspdf not available:', e.message);
}

// List available npm packages
const npmDir = '/home/ubuntu/.npm-global/lib/node_modules';
const mods = fs.readdirSync(npmDir).filter(m => m.includes('pdf') || m.includes('doc') || m.includes('image'));
console.log('PDF-related modules:', mods);
