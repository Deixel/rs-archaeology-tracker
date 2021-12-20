import { Material, Materials } from "./materials";

class Artefact {
    readonly name: string = "";
    readonly materialList: MaterialList[] = [];

    constructor(name: string, materials: MaterialList[]) {
        this.name = name;
        this.materialList = materials;
    }
}

interface MaterialList {
    material: Material,
    quantity: number
}


let Artefacts = {
    venatorDagger : new Artefact("Venator Dagger", [
            {
                material : Materials.thirdAgeIron,
                quantity : 16
            },
            {
                material : Materials.zarosianInsignia,
                quantity : 12
            }
        ])
    ,
    venatorLightCrossbow : new Artefact("Venator Light Crossbow",[
            {
                material : Materials.thirdAgeIron,
                quantity : 12
            },
            {
                material : Materials.zarosianInsignia,
                quantity : 16
            }
        ])
    ,
    legionaryGladius : new Artefact("Legionary Gladius", [
            {
                material : Materials.thirdAgeIron,
                quantity : 10
            },
            {
                material : Materials.zarosianInsignia,
                quantity : 6
            },
            {
                material : Materials.imperialSteel,
                quantity : 12
            }
        ])
    ,
    legionarySquareShield : new Artefact("Legionary Square Shield", [
            {
                material : Materials.thirdAgeIron,
                quantity : 8
            },
            {
                material : Materials.zarosianInsignia,
                quantity : 8
            },
            {
                material : Materials.imperialSteel,
                quantity : 12
            }
        ])
    ,
    primisElementisStandard : new Artefact("Primis Elementis Standard", [
            {
                material : Materials.samiteSilk,
                quantity : 16
            },
            {
                material : Materials.thirdAgeIron,
                quantity : 12
            }
        ])
    ,
    zarosEffigy : new Artefact("Zaros Effigy", [
            {
                material : Materials.samiteSilk,
                quantity : 8
            },
            {
                material : Materials.whiteOak,
                quantity : 10
            },
            {
                material : Materials.zarosianInsignia,
                quantity : 12
            }
        ])
    ,
    zarosianTrainingDummy : new Artefact("Zarosian Training Dummy", [
            {
                material : Materials.thirdAgeIron,
                quantity : 16
            },
            {
                material : Materials.whiteOak,
                quantity : 14
            }
        ])
    ,
    legatusMaximusFigurine : new Artefact("Legatus Maximus Figurine", [
            {
                material : Materials.goldrune,
                quantity : 8
            },
            {
                material : Materials.zarosianInsignia,
                quantity : 14
            },
            {
                material : Materials.ancientVis,
                quantity : 10
            }
        ])
    ,
    solemInUmbraPainting : new Artefact("'Solem in Umbra' Painting", [
            {
                material : Materials.samiteSilk,
                quantity : 8
            },
            {
                material : Materials.whiteOak,
                quantity : 10
            },
            {
                material : Materials.tyrianPurple,
                quantity : 14
            }
        ])
}

export {Artefact, Artefacts}
