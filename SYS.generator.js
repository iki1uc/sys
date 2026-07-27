export async function SYS_GENERATE(respoKey, respoValue) {

    const host = window.SYS?.host || "UNKNOWN";
    const vector = window.vectorEXP;

    const qi = vector.qi(respoKey.length);
    const iqq = vector.iqq(respoKey.length);
    const octa = vector.octa(respoKey.length);

    return {
        SYS: {
            id: `SYS-RESPO-${respoKey}`,
            respo: respoValue,
            vector: {
                qi,
                iqq,
                octa,
                pipe: `pipe${(respoKey.length % 12) || 12}`
            },
            nc: "NC-chain",
            station: `S${(qi + 1)}`,
            host,
            valid: true,
            timestamp: new Date().toISOString()
        }
    };
}
