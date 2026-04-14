#!/usr/bin/env python3
"""
Pixel Art Character Sprite Sheet Generator
5 characters x 4 directions on one image with transparent background
"""
from PIL import Image, ImageDraw
import os

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
SPRITE_W, SPRITE_H = 32, 48  # Each character cell
COLS = 4  # directions: down, up, left, right
ROWS = 5  # characters

# Colors
def c(hex_str):
    h = hex_str.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

# ---- Character Palettes ----
CHARS = {
    "CEO": {
        "hair": c("1a1a2e"),
        "skin": c("f4c08b"),
        "top": c("1e3a5f"),    # navy suit
        "bottom": c("1e3a5f"),
        "shoes": c("1a1a1a"),
        "tie": c("c0392b"),
        "sex": "m",
        "hair_style": "short_dark",
    },
    "Programmer": {
        "hair": c("2c1810"),
        "skin": c("f4d090"),
        "top": c("3a3a3a"),    # dark hoodie
        "bottom": c("1a1a2e"),
        "shoes": c("4a3728"),
        "tie": None,
        "sex": "m",
        "hair_style": "messy",
    },
    "Designer": {
        "hair": c("e67e22"),   # auburn
        "skin": c("f9c897"),
        "top": c("e91e8c"),    # fashion pink top
        "bottom": c("6c3483"),
        "shoes": c("e91e8c"),
        "accent": c("ffffff"),
        "sex": "f",
        "hair_style": "medium_fashion",
    },
    "Accountant": {
        "hair": c("2c2c2c"),   # dark
        "skin": c("f4c08b"),
        "top": c("2e4a3e"),    # professional dark green
        "bottom": c("1a2e3a"),
        "shoes": c("1a1a1a"),
        "tie": None,
        "sex": "f",
        "hair_style": "bun",
    },
    "Marketer": {
        "hair": c("c8a96e"),   # golden blonde long
        "skin": c("f9c897"),
        "top": c("ff6b35"),    # vibrant orange
        "bottom": c("2c3e50"),
        "shoes": c("c0392b"),
        "tie": None,
        "sex": "f",
        "hair_style": "long_wavy",
    },
}

CHAR_ORDER = ["CEO", "Programmer", "Designer", "Accountant", "Marketer"]

def draw_male(draw, ox, oy, palette, direction, frame=0):
    """Draw male character at offset (ox,oy)"""
    skin = palette["skin"]
    hair = palette["hair"]
    top  = palette["top"]
    bot  = palette["bottom"]
    shoe = palette["shoes"]
    tie  = palette.get("tie")
    style = palette.get("hair_style", "short_dark")
    outline = c("000000")

    # ---- Body (common shape, direction-agnostic outlines) ----
    # Legs (3+3 wide, separated)
    # Left leg
    draw.rectangle([ox+11, oy+32, ox+16, oy+43], fill=bot, outline=outline)
    # Right leg
    draw.rectangle([ox+17, oy+32, ox+22, oy+43], fill=bot, outline=outline)
    # Shoes
    if direction == 0:  # down
        draw.rectangle([ox+10, oy+43, ox+16, oy+46], fill=shoe, outline=outline)
        draw.rectangle([ox+17, oy+43, ox+23, oy+46], fill=shoe, outline=outline)
    elif direction == 1:  # up
        draw.rectangle([ox+10, oy+43, ox+16, oy+46], fill=shoe, outline=outline)
        draw.rectangle([ox+17, oy+43, ox+23, oy+46], fill=shoe, outline=outline)
    elif direction == 2:  # left
        draw.rectangle([ox+8,  oy+43, ox+15, oy+46], fill=shoe, outline=outline)
        draw.rectangle([ox+16, oy+43, ox+21, oy+46], fill=shoe, outline=outline)
    elif direction == 3:  # right
        draw.rectangle([ox+12, oy+43, ox+17, oy+46], fill=shoe, outline=outline)
        draw.rectangle([ox+18, oy+43, ox+25, oy+46], fill=shoe, outline=outline)

    # Torso
    draw.rectangle([ox+10, oy+20, ox+22, oy+32], fill=top, outline=outline)
    # Collar/tie
    if tie:
        draw.rectangle([ox+15, oy+21, ox+17, oy+30], fill=tie)
        draw.polygon([ox+14, oy+21, ox+18, oy+21, ox+16, oy+24], fill=tie)

    # Arms
    if direction == 0:  # facing down
        draw.rectangle([ox+7,  oy+20, ox+10, oy+31], fill=top, outline=outline)
        draw.rectangle([ox+22, oy+20, ox+25, oy+31], fill=top, outline=outline)
        # Hands
        draw.ellipse([ox+6,  oy+29, ox+11, oy+34], fill=skin, outline=outline)
        draw.ellipse([ox+21, oy+29, ox+26, oy+34], fill=skin, outline=outline)
    elif direction == 1:  # facing up
        draw.rectangle([ox+7,  oy+20, ox+10, oy+31], fill=top, outline=outline)
        draw.rectangle([ox+22, oy+20, ox+25, oy+31], fill=top, outline=outline)
        draw.ellipse([ox+6,  oy+29, ox+11, oy+34], fill=skin, outline=outline)
        draw.ellipse([ox+21, oy+29, ox+26, oy+34], fill=skin, outline=outline)
    elif direction == 2:  # facing left
        draw.rectangle([ox+6,  oy+20, ox+10, oy+28], fill=top, outline=outline)
        draw.rectangle([ox+22, oy+20, ox+26, oy+28], fill=top, outline=outline)
        draw.ellipse([ox+4,  oy+26, ox+9,  oy+31], fill=skin, outline=outline)
        draw.ellipse([ox+21, oy+26, ox+26, oy+31], fill=skin, outline=outline)
    elif direction == 3:  # facing right
        draw.rectangle([ox+6,  oy+20, ox+10, oy+28], fill=top, outline=outline)
        draw.rectangle([ox+22, oy+20, ox+26, oy+28], fill=top, outline=outline)
        draw.ellipse([ox+6,  oy+26, ox+11, oy+31], fill=skin, outline=outline)
        draw.ellipse([ox+23, oy+26, ox+28, oy+31], fill=skin, outline=outline)

    # Head
    draw.rectangle([ox+11, oy+8, ox+22, oy+20], fill=skin, outline=outline)

    # Hair
    if direction in [0, 2, 3]:
        # Front-facing or side: top hair
        draw.rectangle([ox+10, oy+6, ox+23, oy+12], fill=hair, outline=outline)
        if style == "messy":
            draw.rectangle([ox+12, oy+4, ox+22, oy+9], fill=hair)
            draw.rectangle([ox+9,  oy+7, ox+12, oy+11], fill=hair)
    elif direction == 1:
        # Back: full hair
        draw.rectangle([ox+10, oy+6, ox+23, oy+20], fill=hair, outline=outline)

    # Face (only for front/side views)
    if direction == 0:  # down (front)
        draw.point([ox+14, oy+14], fill=outline)  # left eye
        draw.point([ox+19, oy+14], fill=outline)  # right eye
        draw.point([ox+17, oy+17], fill=c("c07050"))  # nose dot
        draw.line([ox+14, oy+18, ox+19, oy+18], fill=c("a05030"), width=1)  # mouth
    elif direction == 2:  # left
        draw.point([ox+13, oy+14], fill=outline)  # eye
        draw.point([ox+12, oy+17], fill=c("c07050"))  # nose
    elif direction == 3:  # right
        draw.point([ox+20, oy+14], fill=outline)  # eye
        draw.point([ox+21, oy+17], fill=c("c07050"))  # nose


def draw_female(draw, ox, oy, palette, direction, frame=0):
    """Draw female character at offset (ox,oy)"""
    skin   = palette["skin"]
    hair   = palette["hair"]
    top    = palette["top"]
    bot    = palette["bottom"]
    shoe   = palette["shoes"]
    style  = palette.get("hair_style", "medium_fashion")
    outline = c("000000")

    # Skirt / trousers
    if style in ["medium_fashion", "long_wavy"]:
        # Skirt for designer / marketer
        draw.polygon([
            ox+10, oy+28,
            ox+22, oy+28,
            ox+24, oy+43,
            ox+8,  oy+43
        ], fill=bot, outline=outline)
    else:
        # Trousers for accountant
        draw.rectangle([ox+11, oy+30, ox+16, oy+43], fill=bot, outline=outline)
        draw.rectangle([ox+17, oy+30, ox+22, oy+43], fill=bot, outline=outline)

    # Shoes
    if direction == 0 or direction == 1:
        draw.rectangle([ox+10, oy+43, ox+16, oy+46], fill=shoe, outline=outline)
        draw.rectangle([ox+17, oy+43, ox+23, oy+46], fill=shoe, outline=outline)
    elif direction == 2:
        draw.rectangle([ox+8,  oy+43, ox+15, oy+46], fill=shoe, outline=outline)
    elif direction == 3:
        draw.rectangle([ox+18, oy+43, ox+25, oy+46], fill=shoe, outline=outline)

    # Torso (slightly slimmer than male)
    draw.rectangle([ox+11, oy+20, ox+21, oy+30], fill=top, outline=outline)
    # Collar detail
    draw.rectangle([ox+14, oy+20, ox+18, oy+23], fill=skin)

    # Arms
    if direction == 0:
        draw.rectangle([ox+8,  oy+20, ox+11, oy+30], fill=top, outline=outline)
        draw.rectangle([ox+21, oy+20, ox+24, oy+30], fill=top, outline=outline)
        draw.ellipse([ox+7,  oy+28, ox+12, oy+33], fill=skin, outline=outline)
        draw.ellipse([ox+20, oy+28, ox+25, oy+33], fill=skin, outline=outline)
    elif direction == 1:
        draw.rectangle([ox+8,  oy+20, ox+11, oy+30], fill=top, outline=outline)
        draw.rectangle([ox+21, oy+20, ox+24, oy+30], fill=top, outline=outline)
        draw.ellipse([ox+7,  oy+28, ox+12, oy+33], fill=skin, outline=outline)
        draw.ellipse([ox+20, oy+28, ox+25, oy+33], fill=skin, outline=outline)
    elif direction == 2:
        draw.rectangle([ox+7,  oy+20, ox+11, oy+28], fill=top, outline=outline)
        draw.rectangle([ox+21, oy+20, ox+24, oy+28], fill=top, outline=outline)
        draw.ellipse([ox+5,  oy+25, ox+10, oy+30], fill=skin, outline=outline)
    elif direction == 3:
        draw.rectangle([ox+7,  oy+20, ox+11, oy+28], fill=top, outline=outline)
        draw.rectangle([ox+21, oy+20, ox+24, oy+28], fill=top, outline=outline)
        draw.ellipse([ox+22, oy+25, ox+27, oy+30], fill=skin, outline=outline)

    # Head
    draw.rectangle([ox+12, oy+8, ox+21, oy+20], fill=skin, outline=outline)

    # Hair by style
    if style == "bun":
        # Accountant: clean bun
        if direction == 1:  # back
            draw.rectangle([ox+11, oy+6, ox+22, oy+20], fill=hair, outline=outline)
        else:
            draw.rectangle([ox+11, oy+5, ox+22, oy+12], fill=hair, outline=outline)
            draw.ellipse([ox+14, oy+2, ox+20, oy+8], fill=hair, outline=outline)  # bun
            draw.rectangle([ox+11, oy+8, ox+14, oy+16], fill=hair)   # side
            draw.rectangle([ox+20, oy+8, ox+23, oy+16], fill=hair)

    elif style == "medium_fashion":
        # Designer: medium wavy, side-swept
        if direction == 1:
            draw.rectangle([ox+10, oy+5, ox+23, oy+20], fill=hair, outline=outline)
        else:
            draw.rectangle([ox+10, oy+5, ox+23, oy+13], fill=hair, outline=outline)
            draw.rectangle([ox+9,  oy+8, ox+13, oy+22], fill=hair)   # left side
            draw.rectangle([ox+21, oy+8, ox+24, oy+18], fill=hair)   # right side
            # Highlight
            draw.point([ox+15, oy+7], fill=c("f0c060"))
            draw.point([ox+17, oy+6], fill=c("f0c060"))

    elif style == "long_wavy":
        # Marketer: long golden hair
        if direction == 1:
            draw.rectangle([ox+9, oy+5, ox+24, oy+32], fill=hair, outline=outline)
        else:
            draw.rectangle([ox+9, oy+5, ox+24, oy+13], fill=hair, outline=outline)
            draw.rectangle([ox+8, oy+8, ox+13, oy+35], fill=hair)    # long left
            draw.rectangle([ox+21, oy+8, ox+25, oy+32], fill=hair)   # long right
            # Wave detail
            for i in range(3):
                draw.point([ox+9,  oy+18+i*5], fill=c("b89050"))
                draw.point([ox+24, oy+20+i*5], fill=c("b89050"))

    # Face
    if direction == 0:
        draw.point([ox+15, oy+13], fill=outline)  # left eye
        draw.point([ox+19, oy+13], fill=outline)  # right eye
        draw.point([ox+17, oy+16], fill=c("d08070"))  # nose
        draw.line([ox+15, oy+17, ox+19, oy+17], fill=c("c06060"), width=1)  # lips
        # Eyelashes
        draw.point([ox+14, oy+12], fill=outline)
        draw.point([ox+20, oy+12], fill=outline)
    elif direction == 2:
        draw.point([ox+14, oy+13], fill=outline)
        draw.point([ox+13, oy+16], fill=c("d08070"))
    elif direction == 3:
        draw.point([ox+19, oy+13], fill=outline)
        draw.point([ox+20, oy+16], fill=c("d08070"))


def draw_label(draw, ox, oy, text, W, H):
    """Draw a tiny label above the sprite column"""
    # Simple pixel text - just a bar with color coding
    pass


def generate_spritesheet():
    PAD = 4
    LABEL_H = 10
    SCALE = 3  # scale up for visibility

    total_w = (SPRITE_W * COLS + PAD * (COLS + 1)) * SCALE
    total_h = (SPRITE_H * ROWS + PAD * (ROWS + 1) + LABEL_H * ROWS) * SCALE

    img = Image.new("RGBA", (total_w, total_h), (0, 0, 0, 0))

    DIRECTIONS = ["Down ↓", "Up ↑", "Left ←", "Right →"]
    DIR_COLORS = [c("4a90d9"), c("7ed321"), c("f5a623"), c("d0021b")]

    for row, name in enumerate(CHAR_ORDER):
        palette = CHARS[name]
        is_female = palette["sex"] == "f"

        for col in range(COLS):
            # Position in the scaled image
            px = (PAD + col * (SPRITE_W + PAD)) * SCALE
            py = (PAD + row * (SPRITE_H + PAD + LABEL_H)) * SCALE

            # Draw into a temporary unscaled sprite
            sprite = Image.new("RGBA", (SPRITE_W, SPRITE_H), (0, 0, 0, 0))
            d = ImageDraw.Draw(sprite)

            if is_female:
                draw_female(d, 0, 0, palette, col)
            else:
                draw_male(d, 0, 0, palette, col)

            # Scale up
            sprite_big = sprite.resize(
                (SPRITE_W * SCALE, SPRITE_H * SCALE),
                Image.NEAREST
            )
            img.paste(sprite_big, (px, py + LABEL_H * SCALE), sprite_big)

            # Direction indicator bar
            bar_layer = Image.new("RGBA", (SPRITE_W * SCALE, LABEL_H * SCALE), (0,0,0,0))
            bd = ImageDraw.Draw(bar_layer)
            bar_color = DIR_COLORS[col] + (180,)
            bd.rectangle([0, 2*SCALE, SPRITE_W*SCALE-1, (LABEL_H-2)*SCALE], fill=bar_color)
            img.paste(bar_layer, (px, py), bar_layer)

    # Save
    out_path = os.path.join(OUTPUT_DIR, "characters_spritesheet.png")
    img.save(out_path, "PNG")
    print(f"Saved: {out_path}")
    print(f"Image size: {img.size[0]}x{img.size[1]}px")
    print(f"Sprite size (scaled): {SPRITE_W*SCALE}x{SPRITE_H*SCALE}px per character")
    print(f"Layout: {ROWS} chars x {COLS} directions")
    return out_path

if __name__ == "__main__":
    generate_spritesheet()
