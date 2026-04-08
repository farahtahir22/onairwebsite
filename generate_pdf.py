from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

ORANGE = HexColor("#D43528")
NAVY   = HexColor("#081531")
LIGHT_ORANGE = HexColor("#FFF4F3")
LIGHT_GRAY   = HexColor("#F5F5F5")
MID_GRAY     = HexColor("#888888")
DARK         = HexColor("#1a1a1a")

doc = SimpleDocTemplate(
    "/Users/user1/Documents/OnAirWebsite/OnAir_Website_Data.pdf",
    pagesize=letter,
    leftMargin=0.85*inch, rightMargin=0.85*inch,
    topMargin=0.85*inch, bottomMargin=0.85*inch,
)

styles = getSampleStyleSheet()

def S(name, **kw):
    return ParagraphStyle(name, **kw)

title_style    = S("Title",    fontSize=28, textColor=ORANGE, leading=36, spaceAfter=4, fontName="Helvetica-Bold")
subtitle_style = S("Subtitle", fontSize=13, textColor=NAVY,   leading=18, spaceAfter=20, fontName="Helvetica")
h1_style       = S("H1",       fontSize=17, textColor=white,  leading=22, spaceAfter=0, fontName="Helvetica-Bold")
h2_style       = S("H2",       fontSize=13, textColor=ORANGE, leading=18, spaceBefore=14, spaceAfter=4, fontName="Helvetica-Bold")
h3_style       = S("H3",       fontSize=11, textColor=NAVY,   leading=15, spaceBefore=10, spaceAfter=3, fontName="Helvetica-Bold")
body_style     = S("Body",     fontSize=10, textColor=DARK,   leading=15, spaceAfter=3,  fontName="Helvetica")
label_style    = S("Label",    fontSize=8,  textColor=MID_GRAY, leading=12, spaceAfter=1, fontName="Helvetica-Bold")
value_style    = S("Value",    fontSize=10, textColor=DARK,   leading=14, spaceAfter=2,  fontName="Helvetica")
caption_style  = S("Caption",  fontSize=8,  textColor=MID_GRAY, leading=11, spaceAfter=2, fontName="Helvetica", alignment=TA_CENTER)

def section_header(title):
    """Orange banner header for each section."""
    tbl = Table(
        [[Paragraph(title, h1_style)]],
        colWidths=[6.8*inch],
    )
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), ORANGE),
        ("TOPPADDING",    (0,0), (-1,-1), 8),
        ("BOTTOMPADDING", (0,0), (-1,-1), 8),
        ("LEFTPADDING",   (0,0), (-1,-1), 14),
        ("RIGHTPADDING",  (0,0), (-1,-1), 14),
        ("ROUNDEDCORNERS", [4]),
    ]))
    return tbl

def divider():
    return HRFlowable(width="100%", thickness=1, color=HexColor("#EAEAEA"), spaceAfter=8, spaceBefore=4)

def bullet_table(items, label=None):
    """Compact bullet list rendered as a table."""
    rows = [[Paragraph(f"• {i}", body_style)] for i in items]
    tbl = Table(rows, colWidths=[6.8*inch])
    tbl.setStyle(TableStyle([
        ("TOPPADDING",    (0,0), (-1,-1), 3),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
    ]))
    return tbl

def kv_row(label, value):
    tbl = Table(
        [[Paragraph(label.upper(), label_style), Paragraph(value, value_style)]],
        colWidths=[1.4*inch, 5.4*inch],
    )
    tbl.setStyle(TableStyle([
        ("TOPPADDING",    (0,0), (-1,-1), 4),
        ("BOTTOMPADDING", (0,0), (-1,-1), 4),
        ("LEFTPADDING",   (0,0), (-1,-1), 0),
        ("RIGHTPADDING",  (0,0), (-1,-1), 0),
    ]))
    return tbl

story = []

# ── Cover / Title ───────────────────────────────────────────────────────────
story.append(Spacer(1, 0.4*inch))
story.append(Paragraph("OnAir Telecom Solutions", title_style))
story.append(Paragraph("Website Content Data Reference", subtitle_style))
story.append(divider())
story.append(Paragraph(
    "This document contains all structured content from the OnAir Telecom Solutions website. "
    "It is intended for review, modification, and content management purposes.",
    body_style
))
story.append(Spacer(1, 0.3*inch))

# ── Company Overview ─────────────────────────────────────────────────────────
story.append(section_header("01 — Company Overview"))
story.append(Spacer(1, 8))
story.append(kv_row("Company", "OnAir Telecom Solutions"))
story.append(kv_row("Location", "Pakistan"))
story.append(kv_row("Email", "helpline@onair.com.pk"))
story.append(kv_row("Tagline", "Professional Telecom Solutions Across Pakistan"))
story.append(kv_row("Description",
    "Expert repair, refurbishment, and maintenance for power systems, network equipment, "
    "and environmental systems — trusted by Pakistan's leading telecom operators."))
story.append(Spacer(1, 10))

# ── Key Stats ────────────────────────────────────────────────────────────────
story.append(section_header("02 — Key Stats"))
story.append(Spacer(1, 8))
stats = [
    ("17+",    "Global Brand Partners",       "ZTE, ELTEK, Huawei, Ericsson & more"),
    ("3",      "Equipment Specializations",   "Power, Network & Environmental"),
    ("100%",   "Nationwide Coverage",         "Serving operators across Pakistan"),
    ("Fast",   "Turnaround Guarantee",        "Minimizing your network downtime"),
]
data = [["Value", "Label", "Description"]] + [[v, l, d] for v, l, d in stats]
stat_tbl = Table(data, colWidths=[1.0*inch, 2.4*inch, 3.4*inch])
stat_tbl.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), NAVY),
    ("TEXTCOLOR",     (0,0), (-1,0), white),
    ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE",      (0,0), (-1,-1), 9),
    ("FONTNAME",      (0,1), (0,-1), "Helvetica-Bold"),
    ("TEXTCOLOR",     (0,1), (0,-1), ORANGE),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [LIGHT_ORANGE, white]),
    ("GRID",          (0,0), (-1,-1), 0.5, HexColor("#DDDDDD")),
    ("TOPPADDING",    (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
    ("LEFTPADDING",   (0,0), (-1,-1), 8),
]))
story.append(stat_tbl)
story.append(Spacer(1, 10))

# ── Services ─────────────────────────────────────────────────────────────────
story.append(section_header("03 — Services"))
story.append(Spacer(1, 8))
services = [
    ("01", "Equipment Repair",
     "Professional diagnosis and repair of all major telecom equipment brands with quick turnaround times."),
    ("02", "Refurbishment",
     "Extend the life of your equipment with our professional refurbishment and upgrading services."),
    ("03", "Maintenance",
     "Regular maintenance services to ensure optimal performance and prevent equipment failures."),
]
for num, title, desc in services:
    row = Table(
        [[Paragraph(num, S("n", fontSize=20, textColor=ORANGE, fontName="Helvetica-Bold", leading=24)),
          [Paragraph(title, h3_style), Paragraph(desc, body_style)]]],
        colWidths=[0.55*inch, 6.25*inch],
    )
    row.setStyle(TableStyle([
        ("VALIGN",        (0,0), (-1,-1), "TOP"),
        ("TOPPADDING",    (0,0), (-1,-1), 4),
        ("BOTTOMPADDING", (0,0), (-1,-1), 4),
        ("LEFTPADDING",   (0,0), (-1,-1), 0),
    ]))
    story.append(row)
    story.append(divider())
story.append(Spacer(1, 6))

# ── Equipment Categories ──────────────────────────────────────────────────────
story.append(section_header("04 — Equipment Categories"))
story.append(Spacer(1, 8))

categories = [
    {
        "title": "Power Systems",
        "description": "Build your telecom infrastructure with reliable power systems and get optimal performance with our certified repair services.",
        "items": [
            "Rectifiers (ZTE, ELTEK, EMERSON, VERTIV)",
            "UPS up to 30KVA",
            "AVRs & ATS",
            "Panels",
            "Power Modules (Delta, DPC, EATON)",
        ],
        "brands": ["ZTE", "ELTEK", "EMERSON", "VERTIV", "DELTA", "DPC", "EATON"],
    },
    {
        "title": "Network Equipment",
        "description": "Ensure seamless connectivity with our expert repair and maintenance services for all network equipment.",
        "items": [
            "Microwave Links (NEC, HARRIS STRATEX)",
            "Switching Modules",
            "RF Repeaters",
            "VSAT Equipment",
        ],
        "brands": ["NEC", "HARRIS STRATEX", "SIEMENS", "NOKIA", "ALCATEL LUCENT"],
    },
    {
        "title": "Environmental Systems",
        "description": "Maintain optimal operating conditions with our comprehensive environmental systems repair services.",
        "items": [
            "BTS Fan Trays & Fan Modules",
            "Environment Modules",
            "Heat Exchangers",
            "Climate Units",
        ],
        "brands": ["ZTE", "ELTEK", "EMERSON", "VERTIV", "DELTA", "DPC", "EATON",
                   "NEC", "HARRIS STRATEX", "SIEMENS", "NOKIA"],
    },
]

for i, cat in enumerate(categories):
    story.append(KeepTogether([
        Paragraph(f"4.{i+1}  {cat['title']}", h2_style),
        Paragraph(cat["description"], body_style),
        Spacer(1, 4),
        Paragraph("Equipment Types:", label_style),
        bullet_table(cat["items"]),
        Spacer(1, 4),
        Paragraph("Trusted Brands:", label_style),
        Paragraph("  " + "   |   ".join(cat["brands"]),
                  S("brands", fontSize=9, textColor=NAVY, fontName="Helvetica-Bold", leading=13, spaceAfter=8)),
        Spacer(1, 4),
    ]))
    if i < len(categories) - 1:
        story.append(divider())

story.append(Spacer(1, 6))

# ── Expertise ─────────────────────────────────────────────────────────────────
story.append(section_header("05 — Expertise"))
story.append(Spacer(1, 8))

expertise = [
    ("Transmission Equipment", [
        "NEC PASSOLINK", "HARRIS STRATEX", "SIEMENS & NOKIA",
        "SAF PRO NET", "NERA", "INTRACOM", "ALCATEL LUCENT",
    ]),
    ("Switching Modules", [
        "ZTE", "ALCATEL LUCENT", "ERICSSON", "HUAWEI", "EMERSON",
    ]),
    ("Specialized Repair", [
        "Climate Modules", "ZTE Power Cards", "BTS Site Repair",
        "Rectifier Modules", "ATS Panels",
    ]),
]

exp_data = [["#", "Expertise Area", "Brands / Specializations"]]
for i, (title, items) in enumerate(expertise):
    exp_data.append([
        Paragraph(f"0{i+1}", S("num", fontSize=10, textColor=ORANGE, fontName="Helvetica-Bold")),
        Paragraph(title, h3_style),
        Paragraph("\n".join(f"• {item}" for item in items),
                  S("exp", fontSize=9, textColor=DARK, fontName="Helvetica", leading=14)),
    ])

exp_tbl = Table(exp_data, colWidths=[0.45*inch, 2.0*inch, 4.35*inch])
exp_tbl.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), NAVY),
    ("TEXTCOLOR",     (0,0), (-1,0), white),
    ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE",      (0,0), (-1,0), 9),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [LIGHT_ORANGE, white]),
    ("GRID",          (0,0), (-1,-1), 0.5, HexColor("#DDDDDD")),
    ("VALIGN",        (0,0), (-1,-1), "TOP"),
    ("TOPPADDING",    (0,0), (-1,-1), 8),
    ("BOTTOMPADDING", (0,0), (-1,-1), 8),
    ("LEFTPADDING",   (0,0), (-1,-1), 8),
]))
story.append(exp_tbl)
story.append(Spacer(1, 10))

# ── Why Choose Us ─────────────────────────────────────────────────────────────
story.append(section_header("06 — Why Choose OnAir"))
story.append(Spacer(1, 8))

why = [
    ("Comprehensive Services",
     "Comprehensive repair services for multiple segments of the telecom industry."),
    ("Warranty Protection",
     "Sufficient warranty period for your peace of mind."),
    ("Quality Standards",
     "Minimum risk due to our high-quality repair standards."),
    ("Cost Effective",
     "Extraordinary reduction in network operations cost and equipment replacement."),
]
why_data = [["Feature", "Description"]] + [[Paragraph(t, h3_style), Paragraph(d, body_style)] for t, d in why]
why_tbl = Table(why_data, colWidths=[2.2*inch, 4.6*inch])
why_tbl.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), NAVY),
    ("TEXTCOLOR",     (0,0), (-1,0), white),
    ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE",      (0,0), (-1,0), 9),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [LIGHT_ORANGE, white]),
    ("GRID",          (0,0), (-1,-1), 0.5, HexColor("#DDDDDD")),
    ("VALIGN",        (0,0), (-1,-1), "TOP"),
    ("TOPPADDING",    (0,0), (-1,-1), 8),
    ("BOTTOMPADDING", (0,0), (-1,-1), 8),
    ("LEFTPADDING",   (0,0), (-1,-1), 8),
]))
story.append(why_tbl)
story.append(Spacer(1, 10))

# ── Additional Benefits ───────────────────────────────────────────────────────
story.append(section_header("07 — Additional Benefits"))
story.append(Spacer(1, 8))
benefits = [
    "Nationwide coverage across Pakistan",
    "Expert technical team",
    "Quick turnaround times",
    "Quality assured services",
]
story.append(bullet_table(benefits))
story.append(Spacer(1, 10))

# ── Navigation / Pages ───────────────────────────────────────────────────────
story.append(section_header("08 — Website Navigation"))
story.append(Spacer(1, 8))
nav = [
    ("Home",    "/"),
    ("Services","/#services"),
    ("About",   "/#about"),
    ("Contact", "/#contact"),
]
nav_data = [["Page", "URL"]] + nav
nav_tbl = Table(nav_data, colWidths=[2.0*inch, 4.8*inch])
nav_tbl.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), NAVY),
    ("TEXTCOLOR",     (0,0), (-1,0), white),
    ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE",      (0,0), (-1,-1), 9),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [LIGHT_ORANGE, white]),
    ("GRID",          (0,0), (-1,-1), 0.5, HexColor("#DDDDDD")),
    ("TOPPADDING",    (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
    ("LEFTPADDING",   (0,0), (-1,-1), 8),
]))
story.append(nav_tbl)
story.append(Spacer(1, 10))

# ── All Brands Master List ────────────────────────────────────────────────────
story.append(section_header("09 — All Brand Partners"))
story.append(Spacer(1, 8))
all_brands = [
    ("ZTE",            "Power Systems"),
    ("ELTEK",          "Power Systems"),
    ("EMERSON",        "Power Systems"),
    ("VERTIV",         "Power Systems"),
    ("DELTA",          "Power Systems"),
    ("DPC",            "Power Systems"),
    ("EATON",          "Power Systems"),
    ("NEC",            "Network Equipment"),
    ("HARRIS STRATEX", "Network Equipment"),
    ("SIEMENS",        "Network Equipment"),
    ("NOKIA",          "Network Equipment"),
    ("ALCATEL LUCENT", "Network Equipment"),
    ("ERICSSON",       "Switching"),
    ("HUAWEI",         "Switching"),
    ("SAF PRO NET",    "Transmission"),
    ("NERA",           "Transmission"),
    ("INTRACOM",       "Transmission"),
]
brand_data = [["Brand", "Category"]] + list(all_brands)
brand_tbl = Table(brand_data, colWidths=[3.4*inch, 3.4*inch])
brand_tbl.setStyle(TableStyle([
    ("BACKGROUND",    (0,0), (-1,0), NAVY),
    ("TEXTCOLOR",     (0,0), (-1,0), white),
    ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE",      (0,0), (-1,-1), 9),
    ("FONTNAME",      (0,1), (0,-1), "Helvetica-Bold"),
    ("ROWBACKGROUNDS",(0,1), (-1,-1), [LIGHT_ORANGE, white]),
    ("GRID",          (0,0), (-1,-1), 0.5, HexColor("#DDDDDD")),
    ("TOPPADDING",    (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
    ("LEFTPADDING",   (0,0), (-1,-1), 8),
]))
story.append(brand_tbl)
story.append(Spacer(1, 10))

# ── Contact ───────────────────────────────────────────────────────────────────
story.append(section_header("10 — Contact Information"))
story.append(Spacer(1, 8))
story.append(kv_row("Company",       "OnAir Telecom Solutions"))
story.append(kv_row("Email",         "helpline@onair.com.pk"))
story.append(kv_row("Location",      "Pakistan"))
story.append(kv_row("Response Time", "Within 24 hours"))
story.append(Spacer(1, 6))
story.append(Paragraph("Contact Form Fields:", label_style))
story.append(bullet_table(["Name", "Email", "Service Needed (dropdown)", "Message"]))
story.append(Spacer(1, 6))
story.append(Paragraph("Service Dropdown Options:", label_style))
story.append(bullet_table(["Equipment Repair", "Refurbishment", "Maintenance", "General Inquiry"]))
story.append(Spacer(1, 20))

# ── Footer note ───────────────────────────────────────────────────────────────
story.append(divider())
story.append(Paragraph(
    "Generated from OnAir Telecom Solutions website data  •  onair.com.pk  •  helpline@onair.com.pk",
    caption_style
))

doc.build(story)
print("PDF generated successfully.")
