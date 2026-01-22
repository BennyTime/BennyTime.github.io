#!/usr/bin/env python3
"""
Script to generate Docusaurus markdown files from The Grand Divide PDF content
"""

# World Regions content
regions = {
    "03-aquaris": {
        "title": "Aquaris, the Rideborn Empire",
        "shard": "Water Shard",
        "parallel": "Ancient China and the Tang Dynasty",
        "position": 3
    },
    "04-frosthelm-reach": {
        "title": "Frosthelm Reach",
        "shard": "Ice Shard",
        "parallel": "Nordic + Russian kingdoms",
        "position": 4
    },
    "05-kaen-no-kuni": {
        "title": "Kaen no Kuni",
        "shard": "Fire Shard",
        "parallel": "Feudal Japan",
        "position": 5
    },
    "06-viridalis-expanse": {
        "title": "Viridalis Expanse",
        "shard": "Nature Shard",
        "parallel": "Rural Alentejo Portugal + Mesoamerican ritual culture",
        "position": 6
    },
    "07-umbra-court": {
        "title": "The Umbra Court",
        "shard": "Shadow Shard",
        "parallel": "Aristocratic France (1600s–1700s)",
        "position": 7
    },
    "08-lumineth-sanctum": {
        "title": "Lumineth Sanctum",
        "shard": "Light Shard",
        "parallel": "Italy / Vatican",
        "position": 8
    },
    "09-aerion-skydrift": {
        "title": "Aerion Skydrift",
        "shard": "Air Shard",
        "parallel": "Zelda: Skyward Sword + Tibetan mountaintop temples",
        "position": 9
    },
    "10-thundarkar-range": {
        "title": "Thundarkar Range",
        "shard": "Earth Shard",
        "parallel": "Swiss Alps + Tibetan verticality + Mongolian resolve",
        "position": 10
    },
    "11-spirit-realm": {
        "title": "Spirit Realm",
        "shard": None,
        "parallel": "Spiritual dimension",
        "position": 11
    }
}

# Races
races = [
    "Aelvar", "Dravari", "Durakken", "Eldari", "Erekar", "Gravahlren",
    "Halvyr", "Hyran", "Korveth", "Nerai", "Plasari", "Sylvari",
    "Therian", "Vaelari", "Valken", "Vanyr"
]

# Gods
gods_creators = ["Aionyx, the Still Axis", "Vaelthra, the Infinite Womb"]
gods_divinities = [
    "Nyssara, the Final Quiet (Goddess of Finality - Aelvar)",
    "Veridan, the Returning Bloom (God of Renewal – Sylvari)",
    "Kaelor, the Full Measure (God of Abundance –Therian)",
    "Varkuun, the Iron Trial (God of Strife – Korveth)",
    "Lirienne, the Farbound (Goddess of Travels – Nerai)",
    "Marthisa, the Golden Accord (Goddess of Commerce – Hyran)",
    "Brannok, the Joyous Roar (God of Festivities – Gravahlren)",
    "Saelyth, the Veiled Mind (Goddess of Knowledge – Vaelari)",
    "Dhoram, the First Hand (God of Arts – Durakken)",
    "Halcion, the Unbroken Line (God of Order – Halvyr)",
    "Eryndra, the Burning Pulse (Goddess of Passion – Erekar)",
    "Somnyr, the Sleepless Star (Goddess of Dreams – Dravari)"
]

print("Template ready for generating markdown files")
print(f"Regions: {len(regions)}")
print(f"Races: {len(races)}")
print(f"Gods: {len(gods_creators + gods_divinities)}")
