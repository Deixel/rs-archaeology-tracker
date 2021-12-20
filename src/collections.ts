import { Relic, Relics } from "./relics"

interface Collection {
    name: string,
    relics: Relic[]
}

let collectionsList: {[name: string]: Collection} = {
    zarosian1 : {
        name: "Zarosian I",
        relics: [
            Relics.venatorDagger,
            Relics.venatorLightCrossbow,
            Relics.legionaryGladius,
            Relics.legionarySquareShield,
            Relics.primisElementisStandard,
            Relics.zarosEffigy,
            Relics.zarosianTrainingDummy,
            Relics.legatusMaximusFigurine,
            Relics.solemInUmbraPainting
        ]
    }
}

export default collectionsList;