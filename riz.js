// ============================================================
// RIZ · DOOR · DOO · SHELL
// ============================================================

export const RIZ = {
    DOOR: { name: 'DOOR', role: 'Öffnung', drive: '-T' },
    DOO: { name: 'DOO', role: 'Abfluss', drive: '-T' },
    SHELL: { name: 'SHELL', role: 'Stabilisierung', drive: '-T' },
    status: 'aktiv',

    get(name) {
        return this[name] || null;
    },

    status() {
        return {
            door: this.DOOR,
            doo: this.DOO,
            shell: this.SHELL,
            status: this.status
        };
    }
};
