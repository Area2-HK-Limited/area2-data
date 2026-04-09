#!/usr/bin/env python3
"""Generate PDF with HIGH QUALITY resized spine MRI images"""
import os
import re
from PIL import Image
from fpdf import FPDF

IMG_DIR = '/home/ubuntu/.openclaw/workspace/data/temp/spine_selected'
OUT_PDF = '/home/ubuntu/.openclaw/workspace/data/temp/spine_pdf/YUAN_YU_CHAN_MRI_Spine_Selected.pdf'
RESIZED_DIR = '/home/ubuntu/.openclaw/workspace/data/temp/spine_pdf/resized'

images = sorted([f for f in os.listdir(IMG_DIR) if f.endswith('.jpg')],
                 key=lambda x: int(x.split('_')[0]))
print(f"Total images: {len(images)}")

# Create output dirs
os.makedirs(RESIZED_DIR, exist_ok=True)

# Pre-resize ALL images to target size using high-quality LANCZOS
# Target: width that fits cell (95mm at 150dpi ~= 562px)
TARGET_W = 800   # pixels - good for print
TARGET_H = 800   # square aspect ratio for uniformity

resized_images = []
for img_name in images:
    src = os.path.join(IMG_DIR, img_name)
    dst = os.path.join(RESIZED_DIR, img_name)
    if not os.path.exists(dst):
        img = Image.open(src).convert('RGB')
        # High-quality resize using LANCZOS (Image.LANCZOS = 1, alias for RESAMPLING_LANCZOS)
        img_resized = img.resize((TARGET_W, TARGET_H), Image.LANCZOS)
        img_resized.save(dst, 'JPEG', quality=95, optimize=False)
    resized_images.append(dst)

print(f"Resized images saved to {RESIZED_DIR}")

# A4 in mm
PW, PH = 210, 297
ML = 10
MR = 10
GAP = 5
HEADER_H = 10

avail_w = PW - ML - MR
CELL_W = (avail_w - GAP) / 2
CELL_H = 125

pdf = FPDF(orientation='P', unit='mm', format='A4')
pdf.set_auto_page_break(auto=False)

def draw_header(pdf, page_num, total_pages):
    pdf.set_fill_color(26, 74, 122)
    pdf.rect(0, 0, PW, HEADER_H, 'F')
    pdf.set_font('Helvetica', 'B', 8)
    pdf.set_text_color(255, 255, 255)
    pdf.set_xy(ML, 3)
    pdf.cell(avail_w, 5, f'Patient: YUAN YU CHAN  |  MR Whole Spine  |  2026-03-31  |  Page {page_num}/{total_pages}', align='C')

total_pages = (len(images) + 3) // 4

for i, img_name in enumerate(images):
    if i % 4 == 0:
        pdf.add_page()
        draw_header(pdf, i // 4 + 1, total_pages)

    pos = i % 4
    col = pos % 2
    row = pos // 2
    x = ML + col * (CELL_W + GAP)
    y = HEADER_H + 5 + row * (CELL_H + GAP)

    img_path = resized_images[i]
    label = re.sub(r'^\d+_', '', img_name).replace('.jpg', '')

    pdf.set_draw_color(200, 200, 200)
    pdf.set_line_width(0.3)
    pdf.rect(x, y, CELL_W, CELL_H, 'D')

    # Embed pre-resized image (only width, height auto from aspect ratio)
    try:
        pdf.image(img_path, x + 2, y + 2, CELL_W - 4)
    except Exception as e:
        print(f"  Warning [{img_name}]: {e}")

    # Label
    pdf.set_xy(x, y + CELL_H + 0.3)
    pdf.set_font('Helvetica', '', 5.5)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(CELL_W, 3.5, f'  {i+1}. {label}', align='L')

    print(f"  [{i+1:02d}] {img_name} -> embedded")

pdf.output(OUT_PDF)
print(f"\n✅ PDF saved: {OUT_PDF}")
print(f"   Pages: {pdf.page_no()}")