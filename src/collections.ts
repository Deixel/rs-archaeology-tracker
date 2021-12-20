import { Artefact, Artefacts } from "./artefacts"

interface Collection {
    name: string,
    relics: Artefact[]
}

let collectionsList: {[name: string]: Collection} = {
    zarosian1 : {
        name: "Zarosian I",
        relics: [
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
    }
}

export default collectionsList;