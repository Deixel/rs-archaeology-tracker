import { maxHeaderSize } from "http";
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

    // Misc
    ruby: new Material("Ruby"),
    dragonstone: new Material("Dragonstone"),
    whiteCandle: new Material("White Candle"),

    // Generic
    thirdAgeIron: new Material("Third Age Iron"),
    samiteSilk: new Material("Samite Silk"),
    whiteOak: new Material("White Oak"),
    goldrune: new Material("Goldrune"),
    orthenglass: new Material("Orthenglass"),
    vellum: new Material("Vellum"),
    leatherScraps: new Material("Leather Scraps"),
    soapstone: new Material("Soapstone"),
    animalFurs: new Material("Animal Furs"),
    fossilisedBone: new Material("Fossilied Bone"),

    // Armadyl
    stormguardSteel: new Material("Stormguard Steel"),
    wingsofWar: new Material("Wings of War"),
    armadyleanYellow: new Material("Armadylean Yellow"),
    aetheriumAlloy: new Material("Aetherium Allow"),
    quintessence: new Material("Quintessence"),

    // Bandos
    malachiteGreen: new Material("Malachite Green"),
    markOfTheKyzaj: new Material("Mark of the Kyzaj"),
    vulcanisedRubber: new Material("Vulcanised Rubber"),
    warforgedBronze: new Material("Warforged Bronze"),
    yubiuskClay: new Material("Yu'biusk Clay"),

    // Dragonkin
    compassRose: new Material("Compass Rose"),
    felt: new Material("Felt"),
    dragonMetal: new Material("Dragon Metal"),
    carbonBlack: new Material("Carbon Black"),
    orgone: new Material("Orgone"),

    // Saradomin
    keramos: new Material("Keramos"),
    whiteMarble: new Material("White Marble"),
    cobaltBlue: new Material("Cobalt Blue"),
    everlightSilvthril: new Material("Everlight Silvthril"),
    starOfSaradomin: new Material("Star of Saradomin"),

    // Zamorak
    cadmiumRed: new Material("Cadmium Red"),
    chaoticBrimstone: new Material("Chaotic Brimstone"),
    demonhide: new Material("Demonhide"),
    eyeOfDagon: new Material("Eye of Dagon"),
    hellfireMetal: new Material("Hellfire Metal"),

    // Zaros
    zarosianInsignia: new Material("Zarosian Insignia"),
    tyrianPurple: new Material("Tyrian Purple"),
    imperialSteel: new Material("Imperial Steel"),
    ancientVis: new Material("Ancient Vis"),
    bloodOfOrcus: new Material("Blood of Orcus"),
}

export {Materials, Material}
