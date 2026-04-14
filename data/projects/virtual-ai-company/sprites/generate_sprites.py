#!/usr/bin/env python3
"""
Pixel Art Sprite Sheet Generator for Virtual AI Company
Generates 5 office characters x 4 directions = 20 sprites
Each sprite: 24x40px, scaled 4x for output
"""

from PIL import Image
import numpy as np

# Color palette
BLACK = (0, 0, 0)
TRANSPARENT = (0, 0, 0, 0)

# Skin tones
SKIN_LIGHT = (255, 224, 189)
SKIN_MEDIUM = (224, 172, 140)

# Hair colors
HAIR_BLACK = (40, 30, 20)
HAIR_BROWN = (101, 67, 33)
HAIR_ORANGE = (255, 140, 0)
HAIR_BLONDE = (255, 220, 100)
HAIR_DARK_BLUE = (20, 30, 60)

# Clothing colors
SUIT_NAVY = (20, 40, 80)
SUIT_DARK = (30, 30, 40)
SHIRT_WHITE = (250, 250, 250)
TIE_RED = (180, 20, 20)
HOODIE_DARK = (60, 60, 80)
PINK_TOP = (255, 180, 200)
PURPLE_SKIRT = (120, 60, 140)
BLUE_SUIT = (40, 60, 120)
ORANGE_TOP = (255, 130, 50)
SKIRT_GRAY = (100, 100, 120)

# Shoes
SHOES_BLACK = (30, 30, 30)
SHOES_BROWN = (80, 50, 30)

# Eye colors
EYE_BROWN = (80, 50, 20)
EYE_BLUE = (50, 80, 150)

def create_pixel_array(width, height):
    """Create transparent pixel array"""
    return np.full((height, width, 4), (0, 0, 0, 0), dtype=np.uint8)

def set_pixel(arr, x, y, color):
    """Set pixel with alpha"""
    if 0 <= y < arr.shape[0] and 0 <= x < arr.shape[1]:
        if len(color) == 3:
            arr[y, x] = list(color) + [255]
        else:
            arr[y, x] = list(color)

def draw_rect(arr, x1, y1, x2, y2, color):
    """Draw filled rectangle"""
    for y in range(y1, y2 + 1):
        for x in range(x1, x2 + 1):
            set_pixel(arr, x, y, color)

# ==================== CEO (Young man, navy suit, red tie) ====================
def draw_ceo_down(arr, ox, oy):
    # Head (8x8)
    draw_rect(arr, ox+3, oy, ox+10, oy+7, BLACK)
    draw_rect(arr, ox+4, oy+1, ox+9, oy+6, SKIN_LIGHT)
    # Hair
    draw_rect(arr, ox+2, oy, ox+11, oy+2, HAIR_BLACK)
    draw_rect(arr, ox+3, oy+2, ox+10, oy+3, HAIR_BLACK)
    # Eyes
    set_pixel(arr, ox+5, oy+3, BLACK)
    set_pixel(arr, ox+8, oy+3, BLACK)
    # Mouth
    set_pixel(arr, ox+6, oy+5, (200, 100, 100))
    # Body
    draw_rect(arr, ox+2, oy+8, ox+11, oy+18, BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, SUIT_NAVY)
    # Shirt
    draw_rect(arr, ox+5, oy+8, ox+8, oy+12, SHIRT_WHITE)
    # Tie
    draw_rect(arr, ox+6, oy+9, ox+7, oy+14, TIE_RED)
    # Arms
    draw_rect(arr, ox+1, oy+10, ox+2, oy+16, SUIT_NAVY)
    draw_rect(arr, ox+11, oy+10, ox+12, oy+16, SUIT_NAVY)
    # Hands
    draw_rect(arr, ox+1, oy+16, ox+2, oy+17, SKIN_LIGHT)
    draw_rect(arr, ox+11, oy+16, ox+12, oy+17, SKIN_LIGHT)
    # Legs
    draw_rect(arr, ox+3, oy+19, ox+5, oy+25, (30, 30, 40))
    draw_rect(arr, ox+8, oy+19, ox+10, oy+25, (30, 30, 40))
    # Shoes
    draw_rect(arr, ox+2, oy+26, ox+5, oy+27, SHOES_BLACK)
    draw_rect(arr, ox+8, oy+26, ox+11, oy+27, SHOES_BLACK)

def draw_ceo_up(arr, ox, oy):
    draw_rect(arr, ox+3, oy, ox+10, oy+7, BLACK)
    draw_rect(arr, ox+4, oy+1, ox+9, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+2, oy-1, ox+11, oy+2, HAIR_BLACK)
    draw_rect(arr, ox+1, oy+1, ox+12, oy+3, HAIR_BLACK)
    draw_rect(arr, ox+2, oy+8, ox+11, oy+18, BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, SUIT_NAVY)
    draw_rect(arr, ox+1, oy+9, ox+2, oy+12, SUIT_NAVY)
    draw_rect(arr, ox+11, oy+9, ox+12, oy+12, SUIT_NAVY)
    draw_rect(arr, ox+1, oy+12, ox+2, oy+17, SUIT_NAVY)
    draw_rect(arr, ox+11, oy+12, ox+12, oy+17, SUIT_NAVY)
    draw_rect(arr, ox+1, oy+17, ox+2, oy+18, SKIN_LIGHT)
    draw_rect(arr, ox+11, oy+17, ox+12, oy+18, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+19, ox+5, oy+25, (30, 30, 40))
    draw_rect(arr, ox+8, oy+19, ox+10, oy+25, (30, 30, 40))
    draw_rect(arr, ox+2, oy+26, ox+5, oy+27, SHOES_BLACK)
    draw_rect(arr, ox+8, oy+26, ox+11, oy+27, SHOES_BLACK)

def draw_ceo_left(arr, ox, oy):
    draw_rect(arr, ox+4, oy, ox+10, oy+7, BLACK)
    draw_rect(arr, ox+5, oy+1, ox+9, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy, ox+9, oy+2, HAIR_BLACK)
    draw_rect(arr, ox+4, oy+2, ox+8, oy+3, HAIR_BLACK)
    set_pixel(arr, ox+6, oy+3, BLACK)
    set_pixel(arr, ox+5, oy+4, SKIN_MEDIUM)
    draw_rect(arr, ox+2, oy+8, ox+11, oy+18, BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, SUIT_NAVY)
    draw_rect(arr, ox+5, oy+8, ox+7, oy+12, SHIRT_WHITE)
    draw_rect(arr, ox+6, oy+9, ox+6, oy+14, TIE_RED)
    draw_rect(arr, ox+10, oy+10, ox+11, oy+16, SUIT_NAVY)
    draw_rect(arr, ox+10, oy+16, ox+11, oy+17, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+19, ox+5, oy+25, (30, 30, 40))
    draw_rect(arr, ox+7, oy+19, ox+9, oy+25, (30, 30, 40))
    draw_rect(arr, ox+2, oy+26, ox+5, oy+27, SHOES_BLACK)
    draw_rect(arr, ox+6, oy+26, ox+9, oy+27, SHOES_BLACK)

def draw_ceo_right(arr, ox, oy):
    draw_rect(arr, ox+3, oy, ox+9, oy+7, BLACK)
    draw_rect(arr, ox+4, oy+1, ox+8, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+4, oy, ox+10, oy+2, HAIR_BLACK)
    draw_rect(arr, ox+5, oy+2, ox+9, oy+3, HAIR_BLACK)
    set_pixel(arr, ox+7, oy+3, BLACK)
    set_pixel(arr, ox+8, oy+4, SKIN_MEDIUM)
    draw_rect(arr, ox+2, oy+8, ox+11, oy+18, BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, SUIT_NAVY)
    draw_rect(arr, ox+6, oy+8, ox+8, oy+12, SHIRT_WHITE)
    draw_rect(arr, ox+7, oy+9, ox+7, oy+14, TIE_RED)
    draw_rect(arr, ox+2, oy+10, ox+3, oy+16, SUIT_NAVY)
    draw_rect(arr, ox+2, oy+16, ox+3, oy+17, SKIN_LIGHT)
    draw_rect(arr, ox+4, oy+19, ox+6, oy+25, (30, 30, 40))
    draw_rect(arr, ox+8, oy+19, ox+10, oy+25, (30, 30, 40))
    draw_rect(arr, ox+4, oy+26, ox+7, oy+27, SHOES_BLACK)
    draw_rect(arr, ox+10, oy+26, ox+11, oy+27, SHOES_BLACK)

# ==================== PROGRAMMER (Young man, dark hoodie) ====================
def draw_programmer_down(arr, ox, oy):
    draw_rect(arr, ox+3, oy, ox+10, oy+7, BLACK)
    draw_rect(arr, ox+4, oy+1, ox+9, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+2, oy, ox+8, oy+1, HAIR_BROWN)
    draw_rect(arr, ox+3, oy+1, ox+9, oy+2, HAIR_BROWN)
    draw_rect(arr, ox+9, oy+1, ox+11, oy+2, HAIR_BROWN)
    set_pixel(arr, ox+5, oy+3, BLACK)
    set_pixel(arr, ox+8, oy+3, BLACK)
    draw_rect(arr, ox+4, oy+2, ox+6, oy+4, (80, 80, 80))
    draw_rect(arr, ox+7, oy+2, ox+9, oy+4, (80, 80, 80))
    set_pixel(arr, ox+6, oy+5, (180, 100, 100))
    draw_rect(arr, ox+2, oy+8, ox+11, oy+18, BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, HOODIE_DARK)
    draw_rect(arr, ox+2, oy+7, ox+3, oy+9, HOODIE_DARK)
    draw_rect(arr, ox+10, oy+7, ox+11, oy+9, HOODIE_DARK)
    draw_rect(arr, ox+1, oy+10, ox+2, oy+16, HOODIE_DARK)
    draw_rect(arr, ox+11, oy+10, ox+12, oy+16, HOODIE_DARK)
    draw_rect(arr, ox+1, oy+16, ox+2, oy+17, SKIN_LIGHT)
    draw_rect(arr, ox+11, oy+16, ox+12, oy+17, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+19, ox+5, oy+25, (40, 50, 80))
    draw_rect(arr, ox+8, oy+19, ox+10, oy+25, (40, 50, 80))
    draw_rect(arr, ox+2, oy+26, ox+5, oy+27, SHOES_BROWN)
    draw_rect(arr, ox+8, oy+26, ox+11, oy+27, SHOES_BROWN)

def draw_programmer_up(arr, ox, oy):
    draw_rect(arr, ox+3, oy, ox+10, oy+7, BLACK)
    draw_rect(arr, ox+4, oy+1, ox+9, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+2, oy, ox+8, oy+1, HAIR_BROWN)
    draw_rect(arr, ox+3, oy+1, ox+9, oy+2, HAIR_BROWN)
    draw_rect(arr, ox+2, oy-1, ox+11, oy+1, HOODIE_DARK)
    draw_rect(arr, ox+1, oy, ox+2, oy+2, HOODIE_DARK)
    draw_rect(arr, ox+11, oy, ox+12, oy+2, HOODIE_DARK)
    draw_rect(arr, ox+2, oy+8, ox+11, oy+18, BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, HOODIE_DARK)
    draw_rect(arr, ox+1, oy+10, ox+2, oy+17, HOODIE_DARK)
    draw_rect(arr, ox+11, oy+10, ox+12, oy+17, HOODIE_DARK)
    draw_rect(arr, ox+1, oy+17, ox+2, oy+18, SKIN_LIGHT)
    draw_rect(arr, ox+11, oy+17, ox+12, oy+18, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+19, ox+5, oy+25, (40, 50, 80))
    draw_rect(arr, ox+8, oy+19, ox+10, oy+25, (40, 50, 80))
    draw_rect(arr, ox+2, oy+26, ox+5, oy+27, SHOES_BROWN)
    draw_rect(arr, ox+8, oy+26, ox+11, oy+27, SHOES_BROWN)

def draw_programmer_left(arr, ox, oy):
    draw_rect(arr, ox+4, oy, ox+10, oy+7, BLACK)
    draw_rect(arr, ox+5, oy+1, ox+9, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy, ox+9, oy+1, HAIR_BROWN)
    draw_rect(arr, ox+4, oy+1, ox+8, oy+2, HAIR_BROWN)
    set_pixel(arr, ox+6, oy+3, BLACK)
    draw_rect(arr, ox+5, oy+2, ox+7, oy+4, (80, 80, 80))
    draw_rect(arr, ox+2, oy+8, ox+11, oy+18, BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, HOODIE_DARK)
    draw_rect(arr, ox+2, oy+7, ox+3, oy+9, HOODIE_DARK)
    draw_rect(arr, ox+10, oy+10, ox+11, oy+16, HOODIE_DARK)
    draw_rect(arr, ox+10, oy+16, ox+11, oy+17, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+19, ox+5, oy+25, (40, 50, 80))
    draw_rect(arr, ox+7, oy+19, ox+9, oy+25, (40, 50, 80))
    draw_rect(arr, ox+2, oy+26, ox+5, oy+27, SHOES_BROWN)
    draw_rect(arr, ox+6, oy+26, ox+9, oy+27, SHOES_BROWN)

def draw_programmer_right(arr, ox, oy):
    draw_rect(arr, ox+3, oy, ox+9, oy+7, BLACK)
    draw_rect(arr, ox+4, oy+1, ox+8, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+4, oy, ox+10, oy+1, HAIR_BROWN)
    draw_rect(arr, ox+5, oy+1, ox+9, oy+2, HAIR_BROWN)
    set_pixel(arr, ox+7, oy+3, BLACK)
    draw_rect(arr, ox+6, oy+2, ox+8, oy+4, (80, 80, 80))
    draw_rect(arr, ox+2, oy+8, ox+11, oy+18, BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, HOODIE_DARK)
    draw_rect(arr, ox+10, oy+7, ox+11, oy+9, HOODIE_DARK)
    draw_rect(arr, ox+2, oy+10, ox+3, oy+16, HOODIE_DARK)
    draw_rect(arr, ox+2, oy+16, ox+3, oy+17, SKIN_LIGHT)
    draw_rect(arr, ox+4, oy+19, ox+6, oy+25, (40, 50, 80))
    draw_rect(arr, ox+8, oy+19, ox+10, oy+25, (40, 50, 80))
    draw_rect(arr, ox+4, oy+26, ox+7, oy+27, SHOES_BROWN)
    draw_rect(arr, ox+10, oy+26, ox+11, oy+27, SHOES_BROWN)

# ==================== DESIGNER (Young woman, pink top, purple skirt, orange hair) ====================
def draw_designer_down(arr, ox, oy):
    draw_rect(arr, ox+4, oy, ox+9, oy+6, BLACK)
    draw_rect(arr, ox+5, oy+1, ox+8, oy+5, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy, ox+10, oy+1, HAIR_ORANGE)
    draw_rect(arr, ox+2, oy+1, ox+11, oy+3, HAIR_ORANGE)
    draw_rect(arr, ox+2, oy+3, ox+3, oy+8, HAIR_ORANGE)
    draw_rect(arr, ox+10, oy+3, ox+11, oy+8, HAIR_ORANGE)
    set_pixel(arr, ox+5, oy+2, EYE_BROWN)
    set_pixel(arr, ox+7, oy+2, EYE_BROWN)
    set_pixel(arr, ox+4, oy+1, BLACK)
    set_pixel(arr, ox+8, oy+1, BLACK)
    draw_rect(arr, ox+6, oy+4, ox+7, oy+4, (200, 80, 100))
    draw_rect(arr, ox+3, oy+7, ox+10, oy+15, BLACK)
    draw_rect(arr, ox+4, oy+7, ox+9, oy+15, PINK_TOP)
    draw_rect(arr, ox+2, oy+8, ox+3, oy+14, PINK_TOP)
    draw_rect(arr, ox+10, oy+8, ox+11, oy+14, PINK_TOP)
    draw_rect(arr, ox+2, oy+14, ox+3, oy+15, SKIN_LIGHT)
    draw_rect(arr, ox+10, oy+14, ox+11, oy+15, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+16, ox+10, oy+21, BLACK)
    draw_rect(arr, ox+4, oy+16, ox+9, oy+21, PURPLE_SKIRT)
    draw_rect(arr, ox+2, oy+20, ox+3, oy+22, PURPLE_SKIRT)
    draw_rect(arr, ox+10, oy+20, ox+11, oy+22, PURPLE_SKIRT)
    draw_rect(arr, ox+4, oy+22, ox+5, oy+26, SKIN_LIGHT)
    draw_rect(arr, ox+8, oy+22, ox+9, oy+26, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+27, ox+5, oy+28, (200, 100, 150))
    draw_rect(arr, ox+8, oy+27, ox+10, oy+28, (200, 100, 150))

def draw_designer_up(arr, ox, oy):
    draw_rect(arr, ox+4, oy, ox+9, oy+6, BLACK)
    draw_rect(arr, ox+5, oy+1, ox+8, oy+5, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy-1, ox+10, oy+2, HAIR_ORANGE)
    draw_rect(arr, ox+1, oy+1, ox+3, oy+12, HAIR_ORANGE)
    draw_rect(arr, ox+10, oy+1, ox+12, oy+12, HAIR_ORANGE)
    draw_rect(arr, ox+3, oy+7, ox+10, oy+15, BLACK)
    draw_rect(arr, ox+4, oy+7, ox+9, oy+15, PINK_TOP)
    draw_rect(arr, ox+2, oy+8, ox+3, oy+14, PINK_TOP)
    draw_rect(arr, ox+10, oy+8, ox+11, oy+14, PINK_TOP)
    draw_rect(arr, ox+2, oy+14, ox+3, oy+15, SKIN_LIGHT)
    draw_rect(arr, ox+10, oy+14, ox+11, oy+15, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+16, ox+10, oy+21, BLACK)
    draw_rect(arr, ox+4, oy+16, ox+9, oy+21, PURPLE_SKIRT)
    draw_rect(arr, ox+2, oy+20, ox+3, oy+22, PURPLE_SKIRT)
    draw_rect(arr, ox+10, oy+20, ox+11, oy+22, PURPLE_SKIRT)
    draw_rect(arr, ox+4, oy+22, ox+5, oy+26, SKIN_LIGHT)
    draw_rect(arr, ox+8, oy+22, ox+9, oy+26, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+27, ox+5, oy+28, (200, 100, 150))
    draw_rect(arr, ox+8, oy+27, ox+10, oy+28, (200, 100, 150))

def draw_designer_left(arr, ox, oy):
    draw_rect(arr, ox+4, oy, ox+9, oy+6, BLACK)
    draw_rect(arr, ox+5, oy+1, ox+8, oy+5, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy, ox+8, oy+1, HAIR_ORANGE)
    draw_rect(arr, ox+4, oy+1, ox+8, oy+2, HAIR_ORANGE)
    draw_rect(arr, ox+2, oy+2, ox+4, oy+10, HAIR_ORANGE)
    set_pixel(arr, ox+6, oy+2, EYE_BROWN)
    set_pixel(arr, ox+5, oy+1, BLACK)
    set_pixel(arr, ox+6, oy+4, (200, 80, 100))
    draw_rect(arr, ox+3, oy+7, ox+10, oy+15, BLACK)
    draw_rect(arr, ox+4, oy+7, ox+9, oy+15, PINK_TOP)
    draw_rect(arr, ox+9, oy+8, ox+10, oy+14, PINK_TOP)
    draw_rect(arr, ox+9, oy+14, ox+10, oy+15, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+16, ox+9, oy+21, BLACK)
    draw_rect(arr, ox+4, oy+16, ox+8, oy+21, PURPLE_SKIRT)
    draw_rect(arr, ox+2, oy+19, ox+3, oy+22, PURPLE_SKIRT)
    draw_rect(arr, ox+4, oy+22, ox+5, oy+26, SKIN_LIGHT)
    draw_rect(arr, ox+7, oy+22, ox+8, oy+26, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy+27, ox+5, oy+28, (200, 100, 150))
    draw_rect(arr, ox+6, oy+27, ox+8, oy+28, (200, 100, 150))

def draw_designer_right(arr, ox, oy):
    draw_rect(arr, ox+4, oy, ox+9, oy+6, BLACK)
    draw_rect(arr, ox+5, oy+1, ox+8, oy+5, SKIN_LIGHT)
    draw_rect(arr, ox+5, oy, ox+10, oy+1, HAIR_ORANGE)
    draw_rect(arr, ox+5, oy+1, ox+9, oy+2, HAIR_ORANGE)
    draw_rect(arr, ox+9, oy+2, ox+11, oy+10, HAIR_ORANGE)
    set_pixel(arr, ox+7, oy+2, EYE_BROWN)
    set_pixel(arr, ox+8, oy+1, BLACK)
    set_pixel(arr, ox+7, oy+4, (200, 80, 100))
    draw_rect(arr, ox+3, oy+7, ox+10, oy+15, BLACK)
    draw_rect(arr, ox+4, oy+7, ox+9, oy+15, PINK_TOP)
    draw_rect(arr, ox+3, oy+8, ox+4, oy+14, PINK_TOP)
    draw_rect(arr, ox+3, oy+14, ox+4, oy+15, SKIN_LIGHT)
    draw_rect(arr, ox+4, oy+16, ox+10, oy+21, BLACK)
    draw_rect(arr, ox+5, oy+16, ox+9, oy+21, PURPLE_SKIRT)
    draw_rect(arr, ox+10, oy+19, ox+11, oy+22, PURPLE_SKIRT)
    draw_rect(arr, ox+5, oy+22, ox+6, oy+26, SKIN_LIGHT)
    draw_rect(arr, ox+8, oy+22, ox+9, oy+26, SKIN_LIGHT)
    draw_rect(arr, ox+4, oy+27, ox+6, oy+28, (200, 100, 150))
    draw_rect(arr, ox+7, oy+27, ox+9, oy+28, (200, 100, 150))

# ==================== ACCOUNTANT (Young woman, navy suit, bun) ====================
def draw_accountant_down(arr, ox, oy):
    draw_rect(arr, ox+4, oy+1, ox+9, oy+7, BLACK)
    draw_rect(arr, ox+5, oy+2, ox+8, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy, ox+10, oy+2, HAIR_BLACK)
    draw_rect(arr, ox+2, oy+1, ox+3, oy+4, HAIR_BLACK)
    draw_rect(arr, ox+10, oy+1, ox+11, oy+4, HAIR_BLACK)
    draw_rect(arr, ox+4, oy-1, ox+9, oy+1, HAIR_BLACK)
    set_pixel(arr, ox+5, oy+3, BLACK)
    set_pixel(arr, ox+8, oy+3, BLACK)
    set_pixel(arr, ox+6, oy+5, (180, 80, 80))
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, BLACK)
    draw_rect(arr, ox+4, oy+8, ox+9, oy+18, BLUE_SUIT)
    draw_rect(arr, ox+5, oy+8, ox+8, oy+12, SHIRT_WHITE)
    draw_rect(arr, ox+6, oy+9, ox+7, oy+14, (80, 80, 100))
    draw_rect(arr, ox+2, oy+9, ox+3, oy+15, BLUE_SUIT)
    draw_rect(arr, ox+10, oy+9, ox+11, oy+15, BLUE_SUIT)
    draw_rect(arr, ox+2, oy+15, ox+3, oy+16, SKIN_LIGHT)
    draw_rect(arr, ox+10, oy+15, ox+11, oy+16, SKIN_LIGHT)
    draw_rect(arr, ox+4, oy+19, ox+5, oy+25, (40, 40, 50))
    draw_rect(arr, ox+8, oy+19, ox+9, oy+25, (40, 40, 50))
    draw_rect(arr, ox+3, oy+26, ox+5, oy+27, SHOES_BLACK)
    draw_rect(arr, ox+8, oy+26, ox+10, oy+27, SHOES_BLACK)

def draw_accountant_up(arr, ox, oy):
    draw_rect(arr, ox+4, oy+1, ox+9, oy+7, BLACK)
    draw_rect(arr, ox+5, oy+2, ox+8, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy-1, ox+10, oy+1, HAIR_BLACK)
    draw_rect(arr, ox+2, oy, ox+3, oy+3, HAIR_BLACK)
    draw_rect(arr, ox+10, oy, ox+11, oy+3, HAIR_BLACK)
    draw_rect(arr, ox+4, oy-2, ox+9, oy, HAIR_BLACK)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, BLACK)
    draw_rect(arr, ox+4, oy+8, ox+9, oy+18, BLUE_SUIT)
    draw_rect(arr, ox+2, oy+9, ox+3, oy+15, BLUE_SUIT)
    draw_rect(arr, ox+10, oy+9, ox+11, oy+15, BLUE_SUIT)
    draw_rect(arr, ox+2, oy+15, ox+3, oy+16, SKIN_LIGHT)
    draw_rect(arr, ox+10, oy+15, ox+11, oy+16, SKIN_LIGHT)
    draw_rect(arr, ox+4, oy+19, ox+5, oy+25, (40, 40, 50))
    draw_rect(arr, ox+8, oy+19, ox+9, oy+25, (40, 40, 50))
    draw_rect(arr, ox+3, oy+26, ox+5, oy+27, SHOES_BLACK)
    draw_rect(arr, ox+8, oy+26, ox+10, oy+27, SHOES_BLACK)

def draw_accountant_left(arr, ox, oy):
    draw_rect(arr, ox+4, oy+1, ox+9, oy+7, BLACK)
    draw_rect(arr, ox+5, oy+2, ox+8, oy+6, SKIN_LIGHT)
    draw_rect(arr, ox+3, oy, ox+9, oy+1, HAIR_BLACK)
    draw_rect(arr, ox+2, oy+1, ox+3, oy+3, HAIR_BLACK)
    draw_rect(arr, ox+4, oy-1, ox+8, oy+1, HAIR_BLACK)
    set_pixel(arr, ox+6, oy+3, BLACK)
    set_pixel(arr, ox+5, oy+4, SKIN_MEDIUM)
    draw_rect(arr, ox+3, oy+8, ox+10, oy+18, BLACK)
    draw_rect(arr, ox+4, oy+8, ox+9, oy+18, BLUE_SUIT)
    draw_rect(arr, ox+5, oy+8, ox+7, oy+12, SHIRT_WHITE)
    draw_rect(arr, ox+6, oy+9, ox+6, oy+13, (80, 80, 100))
    draw_rect(arr, ox+9, oy+9, ox+10