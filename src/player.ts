import { Relic } from "./relics"

export class Player {
    private damagedRelics = new Map<Relic, number>();
    private repairedRelics = new Map<Relic, number>();

    constructor() { }

    addDamagedRelic(relic: Relic, count: number) {
        if(!this.damagedRelics.has(relic)) {
            this.damagedRelics.set(relic, count);
        }
        else {
            let currentCount = this.damagedRelics.get(relic) as number;
            this.damagedRelics.set(relic, currentCount + count);
        }
    }

    setDamagedRelicCount(relic: Relic, count: number) {
        this.damagedRelics.set(relic, count);
    }

    subtractDamagedRelic(relic: Relic, count: number) {
        if(!this.damagedRelics.has(relic)) {
            this.damagedRelics.set(relic, 0);
        }
        else {
            let currentCount = this.damagedRelics.get(relic) as number;
            let newCount = currentCount - count;
            if(newCount < 0) {
                newCount = 0;
            }
            this.damagedRelics.set(relic, newCount);
        }
    }

    getDamagedCount(relic: Relic): number {
        return this.damagedRelics.get(relic) || 0;
    }

    repair(relic: Relic, count: number) {
        if(!this.damagedRelics.has(relic)) {
            throw "No " + relic.name;
        }
        else if(this.damagedRelics.get(relic) as number < count) {
            throw "Not enough " + relic.name;
        }
        this.subtractDamagedRelic(relic, count);
        this.addRepairedRelic(relic, count);
    }
    addRepairedRelic(relic: Relic, count: number) {
        if(!this.repairedRelics.has(relic)) {
            this.repairedRelics.set(relic, count);
        }
        else {
            let currentCount = this.repairedRelics.get(relic) as number;
            this.repairedRelics.set(relic, currentCount + count);
        }
    }

    setRepairedRelicCount(relic: Relic, count: number) {
        this.repairedRelics.set(relic, count);
    }

    subtractrepairedRelic(relic: Relic, count: number) {
        if(!this.repairedRelics.has(relic)) {
            this.repairedRelics.set(relic, 0);
        }
        else {
            let currentCount = this.repairedRelics.get(relic) as number;
            let newCount = currentCount - count;
            if(newCount < 0) {
                newCount = 0;
            }
            this.repairedRelics.set(relic, newCount);
        }
    }

    getRepaiedCount(relic: Relic) : number {
        return this.repairedRelics.get(relic) || 0;
    }

    
}