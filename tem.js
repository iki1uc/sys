// ============================================================
// TEM6 · TET (+T) · RIZ (-T)
// ============================================================

export const TEM6 = {
    TET: ['ESSO', 'ROLLER', 'KASSE'],
    RIZ: ['DOOR', 'DOO', 'SHELL'],
    status: 'aktiv',

    init() {
        this.status = 'initialisiert';
        return this;
    },

    status() {
        return {
            tet: this.TET,
            riz: this.RIZ,
            status: this.status
        };
    }
};
