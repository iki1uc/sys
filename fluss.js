// ============================================================
// FLUSS · Kontinuierlicher Fluss · 3-6-9
// ============================================================

export const FLUSS = {
    status: 'inaktiv',
    cycle: 0,
    layers: ['SYS3', 'TEM6', 'SYS9'],

    start() {
        this.status = 'aktiv';
        this.cycle = 0;
        return this;
    },

    step() {
        this.cycle++;
        const layer = this.layers[this.cycle % 3];
        return { cycle: this.cycle, layer };
    },

    status() {
        return {
            status: this.status,
            cycle: this.cycle,
            layers: this.layers
        };
    }
};
