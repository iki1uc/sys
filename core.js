// ============================================================
// SYS3 · IN · CORE · OUT
// ============================================================

export const SYS3 = {
    IN: 'SYS-IN',
    CORE: 'SYS-CORE',
    OUT: 'SYS-OUT',
    status: 'aktiv',

    flow() {
        return {
            in: this.IN,
            core: this.CORE,
            out: this.OUT,
            status: 'fließend'
        };
    },

    status() {
        return {
            in: this.IN,
            core: this.CORE,
            out: this.OUT,
            status: this.status
        };
    }
};
