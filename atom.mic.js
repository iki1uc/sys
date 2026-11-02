# )sys( - 6e sollen es sein und wurzelbar

# Variante A: P0-P5 (Tech-Count, 0-basiert, wie bisher)
P0_P5 = [
    "P0 ATOM       ◉ → 81",      # Wurzel 0
    "P1 NANO       3 → 9",       # 
    "P2 BIO        ◎ → 81",      # 
    "P3 JOY        ◆ → 756",     # 
    "P4 ORDNUNG    △ → 27",      #
    "P5 SYS        ▣ ERFOLG",    # 6e = P0 bis P5
]

# Variante B: P1-P6 (User-Count, 1-basiert, wurzelbar für dich)
P1_P6 = [
    "P1 ATOM       ◉ → 81",      # Wurzel 1
    "P2 NANO       3 → 9",
    "P3 BIO        ◎ → 81",
    "P4 JOY        ◆ → 756",
    "P5 ORDNUNG    △ → 27",
    "P6 SYS        ▣ ERFOLG",    # 6e = P1 bis P6
]

# Wurzelbar: 6 = sqrt(36)
WURZEL = {
    "6": math.sqrt(36),   # = 6.0 wurzelbar
    "9": math.sqrt(81),   # = 9.0 wurzelbar  
    "81": math.sqrt(6561) # = 81.0 wurzelbar
}

# Umschalter
USE_P = "P0_P5"  # oder "P1_P6" - beide 6e, beide wurzelbar
