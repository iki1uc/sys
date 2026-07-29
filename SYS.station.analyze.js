import { SYS_MODE } from "./SYS.mode";

export const SYS_STATION_ANALYZE = {

    score(station){
        const zugriff = station.zugriff ?? 0;
        const speed = station.speed ?? 0;
        const transfer = station.transfer ?? 0;
        const zuver = station.zuver ?? 0;

        return Math.max(0, Math.min(100,
            zugriff * 0.25 +
            speed * 0.30 +
            transfer * 0.25 +
            zuver * 0.20
        ));
    },

    modeFromScore(score){
        if(score >= 80) return SYS_MODE.GREEN;
        if(score >= 40) return SYS_MODE.YELLOW;
        return SYS_MODE.RED;
    },

    evaluate(station){
        const score = this.score(station);
        const mode = this.modeFromScore(score);

        return {
            score,
            color: mode === SYS_MODE.GREEN ? "green" :
                   mode === SYS_MODE.YELLOW ? "yellow" : "red",
            speed: mode.speed,
            desc: mode.desc,
            mode
        };
    }
};
