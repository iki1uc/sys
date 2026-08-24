// ============================================================
// SYS9 · 9×9 NC-Engine
// ============================================================

export const SYS9 = {
    grid: [],
    mode: 'RESPO-WHIRL-NC',
    selectable: true,
    status: 'initialisiert',

    init() {
        this.grid = [];
        for (let row = 0; row < 9; row++) {
            this.grid[row] = [];
            for (let col = 0; col < 9; col++) {
                this.grid[row][col] = `NC(${row+1},${col+1})`;
            }
        }
        this.status = 'aktiv';
        return this;
    },

    get(row, col) {
        return this.grid[row]?.[col] || null;
    },

    status() {
        return {
            size: '9×9',
            mode: this.mode,
            status: this.status,
            grid: this.grid
        };
    }
};
