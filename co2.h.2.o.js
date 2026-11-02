// umstand.js — MOND SONNE ODER MIR EGAL — beide Fälle möglich

import { ATOM } from './atom.js';
import CO2 from './co2.h.2.o.js';

// BEIDE als mögliche Fälle
export const FAELLE = {
  MOND: {
    umstand: "MOND — Nacht — Ruhe — alt pos",
    fall: ATOM,
    pos: ATOM.pos_alt,          // [0.12, 0.18]
    aktiv: "atom.js",
    co2: "schläft"
  },
  SONNE: {
    umstand: "SONNE — Tag — Werk — neu pos",
    fall: CO2,
    pos: ATOM.pos_neu,          // [0.33, 0.44]
    aktiv: "co2.h.2.o.js",
    h2o: "atmet"
  },
  EGAL: {
    umstand: "MIR EGAL — Mond Sonne egal — beide — alt+neu pos",
    fall: { atom: ATOM, co2: CO2 },
    pos: ATOM.pos,              // [0.12, 0.18, 0.33, 0.44] — vereint
    aktiv: "beide",
    kreislauf: true
  }
};

export const umstand_waehlen = (umstand = "EGAL") => {
  const key = umstand.toUpperCase();
  return FAELLE[key] || FAELLE.EGAL;
};

// So nutzt du es:
 // Mond: nur alt
 // Sonne: nur neu  
 // Egal: beide, alt+neu
