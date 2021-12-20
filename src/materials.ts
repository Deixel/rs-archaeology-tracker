import { Artefact } from "./artefacts"
class Material {
    name: string;
    private link?: string;
    artefacts: Artefact[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addArtefact(artefact: Artefact) {
        this.artefacts.push(artefact);
    }
}

let Materials: {[name: string]: Material} = {
    
    // Generic
    thirdAgeIron: new Material("Third Age Iron"),
    samiteSilk: new Material("Samite Silk"),
    whiteOak: new Material("White Oak"),
    goldrune: new Material("Goldrune"),
    orthenglass: new Material("Orthenglass"),
    vellum: new Material("Vellum"),
    leatherScraps: new Material("Leather Scraps"),
    soapstone: new Material("Soapstone"),

    // Zaros
    zarosianInsignia: new Material("Zarosian Insignia"),
    tyrianPurple: new Material("Tyrian Purple"), 
    imperialSteel: new Material("Imperial Steel"), 
    ancientVis: new Material("Ancient Vis"), 

    // Zamorak

    // Bandos

    // Dragonkin

    // Saradomin
}

export {Materials, Material}