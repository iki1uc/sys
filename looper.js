// looper - hat es einfacher zu adressieren mit importmap
const RAMDISKS = [
  "./ram.cpu",
  "./ram.gpu", 
  "./ram.sys",
  "./ram.rom",
  "./ram.x",
  "./ram.y",
  "./ram.z",
  "./ram.disk",
  "./rom.disk"
];

// Looper - ohne importmap: müsste jedes mal .js oder nicht .js raten
// Looper - mit importmap: einfach so:

for (const disk of RAMDISKS) {
  const mod = await import(disk); // Saubermann mappt automatisch auf .js oder raw
  mod.ATOM?.get?.();
  // oder mod.einatmen() bei co2
}

// Und für neue ramdisks: einfach in Array pushen
// RAMDISKS.push("./ram.q") - fertig, looper adressiert sofort
