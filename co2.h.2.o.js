// co2.h.2.o.js - meine Herren - CHARMEUR - macht was wir BRAUCHEN
import { ATOM } from './atom.js';

export const einatmen = () => { 
  // CO2 rein - Idee rein - d e i n o r s u w - Nutzgebiet
  return {
    co2: "CO2",
    gebiet: ["d","e","i","n","o","r","s","u","w"],
    pos: ATOM.pos_alt,
    aktion: "Idee reinziehen"
  }
}

export const ausatmen = () => {
  // H2O raus - Werk raus - y x q Verteilgebiet - nur hier
  return {
    h2o: "H2O",
    gebiet: ["y","x","q"],
    pos: ATOM.pos_neu,
    aktion: "Werk rausgeben"
  }
}

export const kreislauf = () => {
  // dazwischen: 4 ist der Zustimmer, gibt frei für auto autonom
  // nicht Schlange stehen für nix tun, sondern tanzen für was
  const ein = einatmen();
  const aus = ausatmen();
  return {
    zustimmer: 4,
    freigabe: "USE USER FÜHRUNG TMP RÄR AUTO AUTONOM",
    pos: ATOM.pos, // alt + neu vereint
    pos_81: ATOM.pos_81,
    payout: "SCHLUMMERT=0, MINIMAL_KOMPETENT=100+BONUS",
    tanz: `${ein.gebiet.join('')} → ${aus.gebiet.join('')} → autonom`,
    atmet: true
  }
}

export default { einatmen, ausatmen, kreislauf };
// atom.js — P1 ATOM — 0° NANO — 81.tmp — SEED — NEU NIMMT ALT + NEU POS
export const ATOM = {
  type: "atom.js",
  id: "ATOM",
  p: "P1 ATOM 81.tmp",
  ecke: "0° NANO",
  sym: "◉",
  
  pos_alt: [0.12, 0.18],
  pos_neu: [0.33, 0.44],
  pos: [0.12, 0.18, 0.33, 0.44],
  
  name: "ATOM — SEED — Ursprung — kleinste Einheit — NEU NIMMT ALT+NEU",
  wert: 1,
  kette: "ATOM (1) → 3 → 9 → 81 → 2268 → 756 → 27 → ▣",
  calc: "1×3=3, 3×3=9, 9×9=81",
  erfolg: "◉ → 3 → 9 → ◎ → 81 → ◆ → △ → ▣ — ATOM weiß ▣",
  chair: "a = ◉ = ATOM = erster Stuhl = SEED",
  gate: "GATE VIRTUAL holds no data, only pointers",

  pos_81: Array.from({ length: 81 }, (_, i) => ({
    id: `ATOM-${i+1}`,
    pos: [ (i % 9)/9, Math.floor(i/9)/9 ],
    alt_neu: [0.12, 0.18, (i % 9)/9, Math.floor(i/9)/9]
  })),

  get: () => ATOM
};
export default ATOM;
