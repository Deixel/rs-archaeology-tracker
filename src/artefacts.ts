import { Material, Materials } from "./materials";
import { Collection } from "./collections"

class Artefact {
    readonly name: string = "";
    readonly materialList: MaterialList[] = [];
    collections: Collection[] = [];


    constructor(name: string, materials: MaterialList[]) {
        this.name = name;
        this.materialList = materials;


        // For reverse-lookup
        this.materialList.forEach( (materialListItem) => {
            let material = materialListItem.material;
            material.addArtefact(this);
        });
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
    centurionsSeal: new Artefact("Centurian's Seal", [
        {material: Materials.thirdAgeIron, quantity: 6
        }
    ]),
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
    hookahPipe: new Artefact("Hookah Pipe", [
        {material: Materials.thirdAgeIron, quantity: 10,},
        {material: Materials.goldrune, quantity: 12},
        {material: Materials.orthenglass, quantity: 8}
    ]),
    opulentWineGoblet: new Artefact("Opulent Wine Goblet", [
        {material: Materials.thirdAgeIron, quantity:14 },
        {material: Materials.goldrune, quantity: 14},
    ]),
    crestOfDagon: new Artefact("Crest of Dagon", [
        {material: Materials.goldrune, quantity: 14},
        {material: Materials.orthenglass, quantity:18}
    ]),
    disorderPainting: new Artefact("'Disorder' Painting", [
        {material: Materials.samiteSilk, quantity: 6},
        {material: Materials.whiteOak, quantity: 6},
        {material: Materials.vellum, quantity: 6},
        {material: Materials.cadmiumRed, quantity: 14 }
    ]),
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
        ]),
    impMask: new Artefact("Imp Mask", [
        {material: Materials.leatherScraps, quantity: 10},
        {material: Materials.chaoticBrimstone, quantity: 10},
        {material: Materials.demonhide, quantity: 12},
    ]),
    lesserDemonMask: new Artefact("Lesser Demon Mask", [
        {material: Materials.leatherScraps, quantity: 6},
        {material: Materials.chaoticBrimstone, quantity: 8},
        {material: Materials.demonhide, quantity: 12},
        {material: Materials.cadmiumRed, quantity: 6},
    ]),
    greaterDemonMask: new Artefact("Greater Demon Mask", [
        {material: Materials.thirdAgeIron, quantity: 6},
        {material: Materials.leatherScraps, quantity: 6},
        {material: Materials.chaoticBrimstone, quantity: 8},
        {material: Materials.demonhide, quantity: 12}
    ]),
    orderOfDisRobes: new Artefact("Order of Dis Robes", [
        {material: Materials.samiteSilk, quantity: 16},
        {material: Materials.cadmiumRed, quantity: 10},
        {material: Materials.eyeOfDagon, quantity: 14},
    ]),
    ritualDagger: new Artefact("Ritual Dagger", [
        {material: Materials.goldrune, quantity: 16},
        {material: Materials.hellfireMetal, quantity: 24},
        {material: Materials.ruby, quantity: 1}
    ]),
    fryingPan: new Artefact("'Frying Pan'", [
        {material: Materials.thirdAgeIron, quantity: 20},
        {material: Materials.whiteMarble, quantity: 24},
    ]),
    hallowedLantern: new Artefact("Hallowed Lantern", [
        {material: Materials.thirdAgeIron, quantity: 20},
        {material: Materials.keramos, quantity: 24},
        {material: Materials.whiteCandle, quantity: 1}
    ])

}

export {Artefact, Artefacts}
