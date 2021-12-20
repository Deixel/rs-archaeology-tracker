import { Artefact } from "./artefacts"

export class Player {
    private damagedArtefacts = new Map<Artefact, number>();
    private repairedArtefacts = new Map<Artefact, number>();

    constructor() { }

    // DAMAGED

    addDamagedArtefact(artefact: Artefact, count: number) {
        let currentCount = this.getDamagedCount(artefact);
        this.setDamagedCount(artefact, currentCount + count);
    }

    setDamagedCount(artefact: Artefact, count: number) {
        if(count < 0) { 
            count = 0;
        }
        this.damagedArtefacts.set(artefact, count);
    }

    subtractDamagedArtefact(artefact: Artefact, count: number) {
        let currentCount = this.getDamagedCount(artefact);
        this.setDamagedCount(artefact, currentCount - count);
    }

    getDamagedCount(artefact: Artefact): number {
        return this.damagedArtefacts.get(artefact) || 0;
    }

    // REPAIR

    repair(artefact: Artefact, count: number) {
        if(this.getDamagedCount(artefact) == 0) {
            throw "No " + artefact.name;
        }
        else if(this.getDamagedCount(artefact) < count) {
            throw "Not enough " + artefact.name;
        }
        this.subtractDamagedArtefact(artefact, count);
        this.addRepairedArtefact(artefact, count);
    }

    // REPAIRED

    addRepairedArtefact(artefact: Artefact, count: number) {
        let currentCount = this.getRepairedCount(artefact);
        this.setRepairedCount(artefact, currentCount + count);
    }

    setRepairedCount(artefact: Artefact, count: number) {
        if(count < 0) {
            count = 0;
        }
        this.repairedArtefacts.set(artefact, count);
    }

    subtractRepairedArtefact(artefact: Artefact, count: number) {
        let currentCount = this.getRepairedCount(artefact);
        this.setRepairedCount(artefact, currentCount - count);
    }

    getRepairedCount(artefact: Artefact) : number {
        return this.repairedArtefacts.get(artefact) || 0;
    }

    
}