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

let Collections: {[name: string]: Collection} = {
    zarosian1 : new Collection("Zarosian I", [
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
    )
}

export { Collections, Collection };