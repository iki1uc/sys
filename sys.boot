// sys.boot.js

import { SYN_Runtime } from "./SYN/sync.load.js";
import { TeamEngineOverdrive } from "./TeamEngineOverdrive.js";
import { ANKER } from "./ANKER.js";
import { VEC_CORE } from "./VEC_CORE.js";

export function sys_boot() {

    // 1 — SYN Achse aktivieren
    const synState = SYN_Runtime();

    // 2 — VEC weiter (Vektor-Kern aktivieren)
    const vecState = VEC_CORE(synState);

    // 3 — Team-Engine Overdrive
    const teamState = TeamEngineOverdrive(vecState);

    // 4 — ANKER weiter (Stabilisation + Overdrive)
    const anchorState = ANKER(teamState);

    return {
        sys: "BOOT_COMPLETE",
        SYN: synState,
        VEC: vecState,
        TEAM: teamState,
        ANKER: anchorState,
        OVERDRIVE: anchorState.OVERDRIVE
    };
}
