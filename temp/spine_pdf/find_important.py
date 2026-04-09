#!/usr/bin/env python3
"""Fuzzy search for the 2 important images from the Carestream screenshot"""
import os
import numpy as np
from PIL import Image

REF_PATH = '/home/ubuntu/.openclaw/media/inbound/511831d4-9407-48dc-bd5a-79d702e7b368.jpg'
STUDY_DIR = '/home/ubuntu/.openclaw/workspace/data/temp/mri_spine/Patient-YUAN_YU_CHAN/Study-M26031103920-MR-whole-spine^SZ[20260331]'
OUT_DIR = '/home/ubuntu/.openclaw/workspace/data/temp/spine_pdf/important_2'
os.makedirs(OUT_DIR, exist_ok=True)

# Load reference image
ref = Image.open(REF_PATH).convert('RGB')
ref_np = np.array(ref)
h, w = ref_np.shape[:2]

# Split left (sagittal) and right (axial) halves
left_ref = ref_np[:, :w//2]
right_ref = ref_np[:, w//2:]
print(f'Left (sagittal): {left_ref.shape}, Right (axial): {right_ref.shape}')

# Resize each reference half to a common target size for comparison
TARGET = (256, 256)
left_256 = np.array(Image.fromarray(left_ref).resize(TARGET, Image.LANCZOS))
right_256 = np.array(Image.fromarray(right_ref).resize(TARGET, Image.LANCZOS))
print(f'References resized to {TARGET}')

def compute_features(img_np):
    """Compute structural + histogram features for fuzzy matching"""
    # Resize to common size
    img_256 = np.array(Image.fromarray(img_np).resize(TARGET, Image.LANCZOS))
    gray = np.array(Image.fromarray(img_256).convert('L')).astype(np.float32)

    # Feature 1: 1D projection profile (vertical - sum along columns)
    v_profile = gray.sum(axis=0)  # 256 values
    v_profile = (v_profile - v_profile.mean()) / (v_profile.std() + 1e-8)

    # Feature 2: Histogram (64 bins)
    hist, _ = np.histogram(gray, bins=64, range=(0, 256))
    hist = hist.astype(np.float32)
    hist /= (hist.sum() + 1e-8)

    # Feature 3: Brightness distribution (bright pixels ratio)
    bright_ratio = (gray > 150).mean()

    return v_profile, hist, bright_ratio, gray

def img_similarity(img_np, ref_v, ref_h):
    """Compare image to reference using projection profile + histogram"""
    img_256 = np.array(Image.fromarray(img_np).resize(TARGET, Image.LANCZOS))
    gray = np.array(Image.fromarray(img_256).convert('L')).astype(np.float32)

    # Vertical projection profile
    v_profile = gray.sum(axis=0)
    v_profile = (v_profile - v_profile.mean()) / (v_profile.std() + 1e-8)
    proj_corr = max(0, np.corrcoef(v_profile, ref_v)[0, 1])

    # Histogram
    hist, _ = np.histogram(gray, bins=64, range=(0, 256))
    hist = hist.astype(np.float32)
    hist /= (hist.sum() + 1e-8)
    hist_sim = 1 - np.sum(np.abs(hist - ref_h))

    return proj_corr * 0.6 + hist_sim * 0.4, proj_corr, hist_sim

# Pre-compute reference features
ref_v_left, ref_h_left, _ = compute_features(left_256)
ref_v_right, ref_h_right, _ = compute_features(right_256)

print('\nSearching all series...')
results = []

series_dirs = sorted([s for s in os.listdir(STUDY_DIR) if s.startswith('Series')])
total = 0
for series_name in series_dirs:
    series_path = os.path.join(STUDY_DIR, series_name)
    images = sorted([f for f in os.listdir(series_path) if f.endswith('.jpg')])

    for img_name in images:
        total += 1
        img_path = os.path.join(series_path, img_name)
        img = np.array(Image.open(img_path).convert('RGB'))

        score_left, corr_left, hist_left = img_similarity(img, ref_v_left, ref_h_left)
        score_right, corr_right, hist_right = img_similarity(img, ref_v_right, ref_h_right)

        best_score = max(score_left, score_right)
        which = 'L' if score_left > score_right else 'R'

        if best_score > 0.25:
            results.append({
                'series': series_name,
                'file': img_name,
                'path': img_path,
                'score': best_score,
                'side': which,
                'corr': max(corr_left, corr_right),
                'hist': max(hist_left, hist_right)
            })

print(f'Searched {total} images across {len(series_dirs)} series')
results.sort(key=lambda x: x['score'], reverse=True)

print(f'\nTop 20 matches (score > 0.25):')
for r in results[:20]:
    print(f"  [{r['side']}] {r['series']}/{r['file']} score:{r['score']:.3f} (corr:{r['corr']:.3f} hist:{r['hist']:.3f})")

print('\n--- Top 10 by side ---')
left_matches = sorted([r for r in results if r['side'] == 'L'], key=lambda x: x['score'], reverse=True)[:5]
right_matches = sorted([r for r in results if r['side'] == 'R'], key=lambda x: x['score'], reverse=True)[:5]

print('\nBest SAGITTAL (left) matches:')
for r in left_matches:
    print(f"  {r['series']}/{r['file']} score:{r['score']:.3f}")

print('\nBest AXIAL (right) matches:')
for r in right_matches:
    print(f"  {r['series']}/{r['file']} score:{r['score']:.3f}")