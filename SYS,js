export function SYS_FIND_KOOP_POOK(respoList) {

    const capability = {
        "RESPO_CORE": 100,
        "RESPO_SCAN9": 50,
        "RESPO_AXIS7": 20,
        "RESPO_LINE2": 10,
        "RESPO_GHOST": 5,
        "nc-check": 1
    };

    const best = respoList.reduce((a, b) =>
        capability[a.key] > capability[b.key] ? a : b
    );

    return {
        koop: best.key === "RESPO_CORE",
        pook: best.key === "RESPO_CORE",
        selected: best,
        reason: "Nur RESPO_CORE ist vollständig VECTOR+ kompatibel."
    };
}
