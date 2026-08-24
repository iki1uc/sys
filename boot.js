// ============================================================
// SYS.boot · Meta-Betriebssystem · 3-6-9 Engine
// ============================================================

import { SYS3 } from './core.js';
import { TEM6 } from './tem.js';
import { SYS9 } from './nc.js';
import { RIZ } from './riz.js';
import { FLUSS } from './fluss.js';

export const SYS = {
    name: 'SYS',
    version: '1.0',
    status: 'initialisiert',
    layer: 'META',
    fluss: FLUSS,
    nc: SYS9,
    tem: TEM6,
    core: SYS3,
    riz: RIZ,
    log: []
};

// ─── SYS.boot() ──────────────────────────────────────────────
SYS.boot = function() {
    this.log('🚀 SYS: Meta-Betriebssystem startet...');
    this.log('◈ SYS3: IN · CORE · OUT');
    this.log('🌀 TEM6: TET (+T) · RIZ (-T)');
    this.log('▣ SYS9: 9×9 NC-Engine');
    this.log('⚡ RIZ: DOOR · DOO · SHELL');
    this.log('🌊 FLUSS: kontinuierlicher Fluss aktiv');

    // NC-Engine initialisieren
    this.nc.init();

    // TEM initialisieren
    this.tem.init();

    // FLUSS starten
    this.fluss.start();

    this.status = 'aktiv';
    this.log('✅ SYS: Meta-System bereit');
    return this.status;
};

// ─── SYS.log() ──────────────────────────────────────────────
SYS.log = function(entry) {
    const zeit = new Date().toISOString();
    this.log.push({ zeit, entry });
    console.log(`[SYS] ${entry}`);
};

// ─── SYS.status() ────────────────────────────────────────────
SYS.status = function() {
    return {
        name: this.name,
        status: this.status,
        layer: this.layer,
        fluss: this.fluss.status(),
        nc: this.nc.status(),
        tem: this.tem.status(),
        core: this.core,
        riz: this.riz
    };
};

// ─── AUTO-BOOT ──────────────────────────────────────────────
SYS.boot();

export { SYS };
