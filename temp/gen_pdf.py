from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Helvetica', 'B', 14)
        self.set_fill_color(26, 82, 118)
        self.set_text_color(255, 255, 255)
        self.cell(0, 10, 'Da Nang + Hoi An Family Trip Itinerary', border=0, align='C', fill=True)
        self.ln(12)
        self.set_text_color(0, 0, 0)

    def footer(self):
        self.set_y(-12)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(128)
        self.cell(0, 8, f'Page {self.page_no()} | A2 Travel Planner', align='C')

pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

pdf.set_fill_color(240, 240, 245)
pdf.set_font('Helvetica', 'B', 11)
pdf.set_text_color(26, 82, 118)
pdf.cell(0, 7, 'Trip Overview', new_x='LMARGIN', new_y='NEXT', fill=True)
pdf.set_font('Helvetica', '', 10)
pdf.set_text_color(0, 0, 0)
for line in ['Destination: Da Nang & Hoi An, Vietnam',
             'Dates: April 5 - April 10, 2026 (6 Days 5 Nights)',
             'Travelers: 2 Adults + 1 Child (7 years old)',
             'Family: Zen, Chloe & Daughter']:
    pdf.cell(0, 6, line, new_x='LMARGIN', new_y='NEXT')
pdf.ln(5)

def day_header(day_name, date_str, theme, accent=False):
    c = (180, 30, 30) if accent else (26, 82, 118)
    pdf.set_fill_color(*c)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font('Helvetica', 'B', 11)
    pdf.cell(0, 7, f'{day_name}  |  {date_str}  |  {theme}', new_x='LMARGIN', new_y='NEXT', fill=True)
    pdf.set_text_color(0, 0, 0)
    pdf.ln(1)

def item(time_str, activity):
    pdf.set_font('Helvetica', 'B', 9.5)
    pdf.set_text_color(26, 82, 118)
    pdf.multi_cell(0, 5.5, f'{time_str}: {activity}')
    pdf.set_text_color(0, 0, 0)

def subitem(activity):
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(0, 0, 0)
    pdf.multi_cell(0, 5.5, f'  {activity}')

def accom(label):
    pdf.set_font('Helvetica', 'I', 9)
    pdf.set_text_color(80, 80, 80)
    pdf.multi_cell(0, 5.5, label)
    pdf.set_text_color(0, 0, 0)

def spacer():
    pdf.ln(3)

# Day 1
day_header('Day 1', 'April 5 (Sunday)', 'Arrival')
item('5:25 PM', 'Arrive at Da Nang International Airport')
subitem('Taxi to Hoi An (~45 min)')
subitem('Check-in: Grand Sunrise Palace Hoian')
accom('Accommodation: Grand Sunrise Palace Hoian (Hoi An)')
spacer()

# Day 2
day_header('Day 2', 'April 6 (Monday)', 'Hoi An Exploration')
item('Morning', 'Cam Thanh Coconut Forest - Bamboo basket boat ride, crab fishing')
subitem('Thu Bon River (秋盤河) - Scenic boat ride through water palms')
item('Afternoon', 'Hoi An Ancient Town - UNESCO-listed old town, lanterns, street life')
subitem('Japanese Covered Bridge (來遠橋) - Iconic 18th-century bridge')
subitem('Quang Chong Association Hall (廣肇會館) - Traditional assembly hall')
subitem('Ancient Houses (會安古老大宅) - Historic merchant residences')
item('Evening', 'Hoi An Night Market - Lanterns, street food, souvenirs')
accom('Accommodation: Grand Sunrise Palace Hoian (Hoi An)')
spacer()

# Day 3
day_header('Day 3', 'April 7 (Tuesday)', 'My Son + Da Nang City')
item('Morning', 'My Son Sanctuary - UNESCO Hindu temple ruins (1.5-2 hrs)')
subitem('Drive back to Da Nang (~1 hr)')
subitem('Check-in: Le Sands Oceanfront Hotel Danang')
item('12:30 PM', "Lunch: Pizza 4P's - Hoang Van Thu (family pizzeria)")
item('Afternoon', 'Da Nang City - Pink Cathedral, Dragon Bridge views, Foot massage')
item('Late PM', 'My Khe Beach (美溪沙灘) - Swimming, sand play, sunset')
item('7:00 PM', 'Dinner: Hai San Moc Quen - Fresh seafood restaurant')
accom('Accommodation: Le Sands Oceanfront Hotel Danang (Da Nang)')
spacer()

# Day 4
day_header('Day 4', 'April 8 (Wednesday)', 'Cooking Class + Sightseeing')
item('Morning', 'Cooking Class (with lunch) - Learn Vietnamese cuisine, hands-on fun for kids!')
item('Afternoon', 'Marble Mountains (五行山) - Cave exploration, pagodas, scenic views')
subitem('Linh Ung Pagoda, Son Tra (山茶半島) - Giant Buddha statue, coastal views')
item('7:00 PM', 'Dinner: GAINN BBQ - Korean-Hanoi style grilled meat')
accom('Accommodation: Le Sands Oceanfront Hotel Danang (Da Nang)')
spacer()

# Day 5
day_header('Day 5', 'April 9 (Thursday)', 'Ba Na Hills Day Trip')
item('All Day', 'Ba Na Hills (巴拿山) - Full day recommended')
subitem("World's longest cable car ride (spectacular mountain views)")
subitem('The Golden Bridge "God\'s Hand" - iconic landmark, great for photos')
subitem('French Hill, Deboud winery, Alpine Garden, Ancient Castle')
subitem('Fantasy Park (室內遊樂城) - Arcade, dinosaurs, mini coaster')
subitem('Buffet Lunch included')
item('Evening', 'Hotel nearby - Relaxation / Foot massage')
item('Dinner', 'Le Comptoir OR Le Petit Chef (fine dining, family-friendly)')
accom('Accommodation: Le Sands Oceanfront Hotel Danang (Da Nang)')
spacer()

# Day 6
day_header('Day 6', 'April 10 (Friday)', 'Shopping & Departure', accent=True)
item('Morning', 'Han Market (漢市場) - Souvenirs, dried seafood, local snacks')
subitem('Vincom / Go Supermarket - Additional souvenir shopping')
subitem('Instagram-worthy cafes - cafe hopping, decor spots')
pdf.set_font('Helvetica', 'B', 10)
pdf.set_text_color(180, 30, 30)
pdf.multi_cell(0, 5.5, '5:50 PM: Arrive Da Nang Airport (8:50 PM departure)')
pdf.set_text_color(0, 0, 0)
pdf.set_font('Helvetica', '', 9.5)
pdf.multi_cell(0, 5.5, 'Check-in: 5:50 PM  |  Gate closes ~8:20 PM  |  Flight: 8:50 PM')
pdf.ln(5)

# Tips page
pdf.add_page()
pdf.set_fill_color(26, 82, 118)
pdf.set_text_color(255, 255, 255)
pdf.set_font('Helvetica', 'B', 13)
pdf.cell(0, 10, 'Kid-Friendly Tips & Recommended Additions', new_x='LMARGIN', new_y='NEXT', align='C', fill=True)
pdf.ln(5)

tips = [
    ('Ba Na Hills is a MUST with kids',
     "World's longest cable car. Fantasy Park has arcade, dinosaurs, mini coaster. Perfect for a 7-year-old. Dress warm at top. Allow full day."),
    ('Dragon Bridge Fire Show (Weekends only)',
     "Sat & Sun 9 PM - dragon breathes fire and water. Free from Han River bank. Bring a towel!"),
    ('Coconut Basket Boat (Cam Thanh)',
     'Bamboo boat spinning through groves - thrilling for kids. Includes crab catching and hat-making. Great photos.'),
    ('My Khe & An Bang Beach',
     'Wide, clean, shallow water. Perfect for kids to swim and play sand. Best late afternoon for sunset.'),
    ('Lantern Making (Hoi An)',
     '15-min classes. Kids make and take home their own silk lantern. A lovely keepsake.'),
    ('VinWonders Nam Hoi An',
     'Huge amusement park + waterpark + animal safari. Full-day with wave pools, tiger/elephant shows. Worth if kids love theme parks.'),
    ('Food Tips for Kids',
     "Pizza 4P's is very kid-friendly. Banh mi and spring rolls are big hits. Vietnamese iced coffee is sweet with milk - kids love it!"),
    ('General Tips',
     'Rent private car with driver Day 2-5 (~$40-60/day). Most attractions free for kids under 1m or 6yo. Pack swim gear, light jacket for Ba Na Hills, mosquito repellent.'),
]

for title, body in tips:
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(26, 82, 118)
    pdf.multi_cell(0, 5.5, title)
    pdf.set_font('Helvetica', '', 9.5)
    pdf.set_text_color(0, 0, 0)
    pdf.multi_cell(0, 5.5, body)
    pdf.ln(2)

pdf.ln(4)
pdf.set_font('Helvetica', 'I', 8.5)
pdf.set_text_color(100, 100, 100)
pdf.multi_cell(0, 5, 'Research: Sassymamasg, Friends Travel Vietnam, TravelynnFamily, Tripadvisor | by A2 Travel Planner')

out_path = '/home/ubuntu/.openclaw/workspace/data/temp/da_nang_itinerary.pdf'
pdf.output(out_path)
print(f'OK: {out_path}')
