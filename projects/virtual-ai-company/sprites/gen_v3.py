#!/usr/bin/env python3
"""
Pixel Art Sprite Sheet — Virtual AI Company
5 chars x 4 directions, 16x32px each, scale 4x → 64x128px output per sprite
Transparent PNG, RPG Maker style
"""
from PIL import Image, ImageDraw

OUT = "/home/openclaw/.openclaw/workspace/data/projects/virtual-ai-company/sprites/spritesheet_v3.png"

# ---- Palette helper ----
def c(h): return tuple(int(h[i:i+2], 16) for i in (0,2,4))

T = (0,0,0,0)       # Transparent
BK = c("0d0d0d")    # Outline black

# Skin tones
SKIN_L = c("ffdbac")
SKIN_M = c("f4a261")

# ── Pixel map keys ──────────────────────────────────────────────────
# Each sprite is 16 wide × 32 tall
# Key: ' '=transparent, 'O'=outline, 'H'=hair, 'S'=skin,
#      'T'=shirt/top, 'B'=pants, 'K'=shoe, 'R'=tie/accent,
#      'E'=eye, 'X'=blush, 'M'=mouth dot, 'A'=skirt alt

# ──────────────────────────────────────────────────────────────────────
# MALE FRONT (facing down)
MALE_FRONT = [
    "   OHHHHHO  ",    # 0  hair top
    "  OHSSSSSSHO ",   # 1
    "  OHSEESSSHO ",   # 2  eyes
    "  OHSSMSSSHO ",   # 3  mouth
    "  OHSSSSSSHO ",   # 4
    "   OHHHHHHO  ",   # 5  hair bottom / chin
    "    OSSSSO  ",    # 6  neck
    "  OTTTTTTTTO ",   # 7  shoulders
    " OTTRTTTTTO  ",   # 8  body + tie
    " OTTRTTTTTTO ",   # 9
    " OTTTTTTTTO  ",   # 10
    " OTTTTTTTTTO ",   # 11
    "  OBBBBOBBBO ",   # 12 waist
    "  OBBBOOBBO  ",   # 13 legs
    "  OBBBOOBBO  ",   # 14
    "  OBBBOOBBO  ",   # 15
    "  OBBBOOBBO  ",   # 16
    "  OKKKOKKKO  ",   # 17 shoes
]

MALE_BACK = [
    "   OHHHHHO  ",
    "  OHHHHHHHHO ",
    "  OHHHHHHHHO ",
    "  OHHHHHHHHO ",
    "  OHHHHHHHHO ",
    "   OHHHHHHO  ",
    "    OSSSSO  ",
    "  OTTTTTTTTO ",
    " OTTTTTTTTTO ",
    " OTTTTTTTTTO ",
    " OTTTTTTTTTO ",
    " OTTTTTTTTTO ",
    "  OBBBBOBBBO ",
    "  OBBBOOBBO  ",
    "  OBBBOOBBO  ",
    "  OBBBOOBBO  ",
    "  OBBBOOBBO  ",
    "  OKKKOKKKO  ",
]

MALE_LEFT = [
    "   OHHHOO   ",
    "  OHHSSOO   ",
    "  OHSESOO   ",
    "  OHSSSOO   ",
    "  OHSSSHHO  ",
    "   OHHHHHO  ",
    "    OSSSO   ",
    "  OTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTO  ",
    " OBBBBBBBO  ",
    "  OBBBOO    ",
    "  OBBBOO    ",
    "  OBBBOO    ",
    "  OBBBOO    ",
    "  OKKKOO    ",
]

MALE_RIGHT = [
    "    OOHHHO  ",
    "   OOSSHHHO ",
    "   OOSESHHO ",
    "   OOSSSHHHO ",
    "  OHHSSSHHO  ",
    "   OHHHHHO  ",
    "    OSSSO   ",
    "  OTTTTTTO  ",
    "  OTTTTTTTTO",
    "  OTTTTTTTTO",
    "  OTTTTTTTTO",
    "  OTTTTTTTTO",
    "  OBBBBBBBBO",
    "    OOBBBO  ",
    "    OOBBBO  ",
    "    OOBBBO  ",
    "    OOBBBO  ",
    "    OOKKKO  ",
]

FEMALE_FRONT = [
    "  OHHHHHHHO ",
    " OHHSSSSSSHO",
    " OHSEESSSHO ",
    " OHSSMSSSHO ",
    " OHSSSSSSHO ",
    "  OHHHHHHO  ",
    "    OSSSSO  ",
    "  OTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTTO ",
    "  OAAAAAAAO ",
    "  OAAAAAAAO ",
    "  OAAOAOAO  ",
    "  OAAOAOAO  ",
    "  OAAOAOAO  ",
    "  OAAOAOAO  ",
    "  OKKOOKKKO ",
]

FEMALE_BACK = [
    " OHHHHHHHHHO",
    " OHHHHHHHHHO",
    " OHHHHHHHHHO",
    " OHHHHHHHHHO",
    " OHHHHHHHHHO",
    "  OHHHHHHO  ",
    "    OSSSSO  ",
    "  OTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTTO ",
    "  OAAAAAAAO ",
    "  OAAAAAAAO ",
    "  OAAOAOAO  ",
    "  OAAOAOAO  ",
    "  OAAOAOAO  ",
    "  OAAOAOAO  ",
    "  OKKOOKKKO ",
]

FEMALE_LEFT = [
    "   OHHHOO   ",
    " OHHHSSOO   ",
    " OHHSESOO   ",
    " OHHSSSOO   ",
    " OHHSSHHHO  ",
    "   OHHHHHO  ",
    "    OSSSO   ",
    "  OTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTO  ",
    " OTTTTTTTO  ",
    " OAAAAAO    ",
    " OAAAAAO    ",
    "  OAAO      ",
    "  OAAO      ",
    "  OAAO      ",
    "  OAAO      ",
    "  OKKO      ",
]

FEMALE_RIGHT = [
    "    OOHHHO  ",
    "   OOSSHHHO ",
    "   OOSESHHHO",
    "   OOSSSHHO ",
    "  OHHSSSHHO ",
    "   OHHHHHO  ",
    "    OSSSO   ",
    "  OTTTTTTO  ",
    "  OTTTTTTTTO",
    "  OTTTTTTTTO",
    "  OTTTTTTTTO",
    "    OAAAAAO ",
    "    OAAAAAO ",
    "      OAAO  ",
    "      OAAO  ",
    "      OAAO  ",
    "      OAAO  ",
    "      OKKO  ",
]

# Character definitions: palette + which template
CHARS = {
    "CEO": {
        "sex": "m",
        "hair": c("1a1a2e"),
        "skin": SKIN_L,
        "top":  c("1a365d"),
        "bot":  c("1e3a5f"),
        "shoe": c("111111"),
        "tie":  c("c53030"),
        "skirt": c("1e3a5f"),
    },
    "Programmer": {
        "sex": "m",
        "hair": c("111111"),
        "skin": SKIN_L,
        "top":  c("2d3748"),
        "bot":  c("1a202c"),
        "shoe": c("4a5568"),
        "tie":  None,
        "skirt": c("1a202c"),
    },
    "Designer": {
        "sex": "f",
        "hair": c("d69e2e"),
        "skin": SKIN_L,
        "top":  c("ed64a6"),
        "bot":  c("9f7aea"),
        "shoe": c("d53f8c"),
        "tie":  None,
        "skirt": c("9f7aea"),
    },
    "Accountant": {
        "sex": "f",
        "hair": c("1a202c"),
        "skin": SKIN_L,
        "top":  c("2b6cb0"),
        "bot":  c("2c5282"),
        "shoe": c("1a1a1a"),
        "tie":  None,
        "skirt": c("2c5282"),
    },
    "Marketer": {
        "sex": "f",
        "hair": c("f6ad55"),
        "skin": SKIN_L,
        "top":  c("fc4444"),
        "bot":  c("4a5568"),
        "shoe": c("c53030"),
        "tie":  None,
        "skirt": c("4a5568"),
    },
}

ORDER = ["CEO", "Programmer", "Designer", "Accountant", "Marketer"]
DIRS  = ["DOWN", "UP", "LEFT", "RIGHT"]   # col order

def key_to_color(ch, pal):
    m = {
        'O': BK + (255,),
        'H': pal["hair"] + (255,),
        'S': pal["skin"] + (255,),
        'T': pal["top"]  + (255,),
        'B': pal["bot"]  + (255,),
        'K': pal["shoe"] + (255,),
        'A': pal["skirt"] + (255,),
        'R': (pal.get("tie") or pal["top"]) + (255,),
        'E': c("2d3748") + (255,),
        'M': c("c0535f") + (255,),
        'X': c("ffb6c1") + (255,),
        ' ': (0,0,0,0),
    }
    return m.get(ch, (0,0,0,0))

def render(pixel_rows, pal, W=16, H=18):
    """Render a list of pixel row strings → RGBA PIL image (W x H)"""
    img = Image.new("RGBA", (W, H), (0,0,0,0))
    for y, row in enumerate(pixel_rows[:H]):
        # Pad or trim to width W
        row = row.ljust(W)[:W]
        for x, ch in enumerate(row):
            col = key_to_color(ch, pal)
            img.putpixel((x, y), col)
    return img

def get_templates(sex):
    if sex == "m":
        return [MALE_FRONT, MALE_BACK, MALE_LEFT, MALE_RIGHT]
    else:
        return [FEMALE_FRONT, FEMALE_BACK, FEMALE_LEFT, FEMALE_RIGHT]

# ── Layout ───────────────────────────────────────────────────────────
SPW, SPH = 16, 18     # sprite pixel size
SCALE    = 5          # scale factor → 80x90 per sprite cell
PAD      = 6          # padding between cells (pixels before scaling)
LABEL_H  = 18         # height for text label area (pixels before scaling)

n_rows = len(ORDER)
n_cols = len(DIRS)

cell_w = SPW * SCALE + PAD
cell_h = SPH * SCALE + PAD + LABEL_H

canvas_w = n_cols * cell_w + PAD
canvas_h = n_rows * cell_h + PAD

canvas = Image.new("RGBA", (canvas_w, canvas_h), (0,0,0,0))

# Optional: faint background grid so you can see the transparent areas
from PIL import ImageDraw as ID
bg = Image.new("RGBA", (canvas_w, canvas_h), (240, 240, 240, 30))
canvas.alpha_composite(bg)

for r, name in enumerate(ORDER):
    pal = CHARS[name]
    templates = get_templates(pal["sex"])

    for c_idx, tmpl in enumerate(templates):
        sprite = render(tmpl, pal, W=SPW, H=SPH)
        # Scale up with nearest-neighbor (pixel art)
        big = sprite.resize((SPW * SCALE, SPH * SCALE), Image.NEAREST)

        x0 = PAD + c_idx * cell_w
        y0 = PAD + r * cell_h + LABEL_H

        canvas.alpha_composite(big, dest=(x0, y0))

        # Draw direction label bar
        dir_colors = [
            c("4299e1") + (210,),
            c("48bb78") + (210,),
            c("ed8936") + (210,),
            c("fc8181") + (210,),
        ]
        label_img = Image.new("RGBA", (SPW * SCALE, LABEL_H), (0,0,0,0))
        ld = ID.Draw(label_img)
        ld.rectangle([0, 0, SPW*SCALE-1, LABEL_H-1], fill=dir_colors[c_idx])
        canvas.alpha_composite(label_img, dest=(x0, PAD + r * cell_h))

# Draw character name bars on the left (column header on row)
# (just print info; keep image clean)

canvas.save(OUT, "PNG")
print(f"✅ Saved: {OUT}")
print(f"   Canvas size : {canvas_w} × {canvas_h} px")
print(f"   Sprite size : {SPW*SCALE} × {SPH*SCALE} px each")
print(f"   Layout      : {n_rows} chars × {n_cols} directions")
print(f"   Characters  : {', '.join(ORDER)}")
print(f"   Directions  : {', '.join(DIRS)}")
