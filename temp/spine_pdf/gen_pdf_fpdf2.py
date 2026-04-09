#!/usr/bin/env python3
"""Generate PDF with 4 images per page (2x2 grid) for spine MRI"""
import os
import re
from fpdf import FPDF

IMG_DIR = '/home/ubuntu/.openclaw/workspace/data/temp/spine_selected'
OUT_PDF = '/home/ubuntu/.openclaw/workspace/data/temp/spine_pdf/YUAN_YU_CHAN_MRI_Spine_Selected.pdf'

images = sorted([f for f in os.listdir(IMG_DIR) if f.endswith('.jpg')],
                 key=lambda x: int(x.split('_')[0]))
print(f"Total images: {len(images)}")

# A4 in mm
PW, PH = 210, 297
ML = 10  # left margin
MR = 10  # right margin
MT = 10  # top margin
GAP = 5
HEADER_H = 10

CELL_W = (PW - ML - MR - GAP) / 2
CELL_H = 125  # fixed height per image cell

pdf = FPDF(orientation='P', unit='mm', format='A4')
pdf.set_auto_page_break(auto=False)

def draw_page_header(pdf, page_num, total_pages):
    pdf.set_fill_color(26, 74, 122)
    pdf.rect(0, 0, PW, HEADER_H, 'F')
    pdf.set_font('Helvetica', 'B', 8)
    pdf.set_text_color(255, 255, 255)
    pdf.set_xy(ML, 3)
    pdf.cell(PW - ML - MR, 5,
             f'Patient: YUAN YU CHAN  |  MR Whole Spine  |  2026-03-31  |  Page {page_num}/{total_pages}',
             align='C')

total_pages = (len(images) + 3) // 4

for i, img_name in enumerate(images):
    if i % 4 == 0:
        pdf.add_page()
        draw_page_header(pdf, i // 4 + 1, total_pages)

    pos = i % 4
    col = pos % 2
    row = pos // 2

    x = ML + col * (CELL_W + GAP)
    y = MT + HEADER_H + row * (CELL_H + GAP)

    img_path = os.path.join(IMG_DIR, img_name)
    label = re.sub(r'^\d+_', '', img_name).replace('.jpg', '')

    # Draw border
    pdf.set_draw_color(200, 200, 200)
    pdf.set_line_width(0.3)
    pdf.rect(x, y, CELL_W, CELL_H, 'D')

    # Insert image (only specify width, height auto-calculated to preserve aspect ratio)
    pad = 3
    try:
        pdf.image(img_path, x + pad, y + pad, CELL_W - 2*pad)
    except Exception as e:
        print(f"  Warning [{img_name}]: {e}")

    # Label
    pdf.set_xy(x, y + CELL_H + 0.3)
    pdf.set_font('Helvetica', '', 5.5)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(CELL_W, 3.5, f'  {i+1}. {label}', align='L')

    print(f"  [{i+1:02d}] {img_name}")

pdf.output(OUT_PDF)
print(f"\n✅ PDF saved: {OUT_PDF}")
print(f"   Pages: {pdf.page_no()}")