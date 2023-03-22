import { Artefact, Artefacts } from "./artefacts"
import { Collector } from "./collector";


class Collection {
    name: string;
    artefacts: Artefact[];
    collectors: Collector[] = [];

    constructor(name: string, artefacts: Artefact[]) {
        this.name = name;
        this.artefacts = artefacts;
        
        // For reverse-lookup
        this.artefacts.forEach( (artefact) => {
            artefact.collections.push(this);
        })
    }
}

let Collections: {[name: string]: Collection} = {};
Collections.zarosian1 = new Collection("Zarosian I", [
        Artefacts.venatorDagger,
        Artefacts.venatorLightCrossbow,
        Artefacts.legionaryGladius,
        Artefacts.legionarySquareShield,
        Artefacts.primisElementisStandard,
        Artefacts.zarosEffigy,
        Artefacts.zarosianTrainingDummy,
        Artefacts.legatusMaximusFigurine,
        Artefacts.solemInUmbraPainting
    ]
);
Collections.museumZarosian1 = new Collection("Museum - Zarosian I", Collections.zarosian1.artefacts);
Collections.zamorakian1 = new Collection("Zamorakian I", [
    Artefacts.hookahPipe,
    Artefacts.opulentWineGoblet,
    Artefacts.crestOfDagon,
    Artefacts.disorderPainting,
    Artefacts.impMask,
    Artefacts.lesserDemonMask,
    Artefacts.greaterDemonMask,
    Artefacts.orderOfDisRobes,
    Artefacts.ritualDagger
]);
Collections.museumZamorakian1 = new Collection("Museum - Zamorakian I", Collections.zamorakian1.artefacts);
Collections.saradominist1 = new Collection("Saradominist I", [
    Artefacts.fryingPan,
    Artefacts.hallowedLantern,
    Artefacts.ceremonialUnicornOrnament,
    Artefacts.ceremonialUnicornSaddle,
    Artefacts.everlightHarp,
    Artefacts.everlightTrumpet,
    Artefacts.everlightViolin,
    Artefacts.foldedArmFigurineFemale,
    Artefacts.foldedArmFigurineMale
]);
Collections.museumSaradominist1 = new Collection("Museum - Saradominist I", Collections.saradominist1.artefacts);


export { Collections, Collection };