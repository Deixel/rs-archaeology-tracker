require('JSON');

let materials = {
    thirdAgeIron : "Third Age Iron",
    zarosianInsignia : "Zarosian Insignia",
    samiteSilk : "Samite Silk",
    tyrianPurple : "Tyrian Purple", 
    goldrune : "Goldrune", 
    imperialSteel : "Imperial Steel", 
    ancientVis : "Ancient Vis", 
    whiteOak : "White Oak",
}

let relics = {
    venatorDagger : {
        name : "Venator Dagger",
        materials : [
            {
                material : materials.thirdAgeIron,
                quantity : 16
            },
            {
                material : materials.zarosianInsignia,
                quantity : 12
            }
        ]
    },
    venatorLightCrossbow : {
        name : "Venator Light Crossbow",
        materials : [
            {
                material : materials.thirdAgeIron,
                quantity : 12
            },
            {
                material : materials.zarosianInsignia,
                quantity : 16
            }
        ]
    },
    legionaryGladius : {
        name : "Legionary Gladius",
        materials : [
            {
                material : materials.thirdAgeIron,
                quantity : 10
            },
            {
                material : materials.zarosianInsignia,
                quantity : 6
            },
            {
                material : materials.imperialSteel,
                quantity : 12
            }
        ]
    },
    legionarySquareShield : {
        name : "Legionary Square Shield",
        materials : [
            {
                material : materials.thirdAgeIron,
                quantity : 8
            },
            {
                material : materials.zarosianInsignia,
                quantity : 8
            },
            {
                material : materials.imperialSteel,
                quantity : 12
            }
        ]
    },
    primisElementisStandard : {
        name : "Primis Elementis Standard",
        materials : [
            {
                material : materials.samiteSilk,
                quantity : 16
            },
            {
                material : materials.thirdAgeIron,
                quantity : 12
            }
        ]
    },
    zarosEffigy : {
        name : "Zaros Effigy",
        materials : [
            {
                material : materials.samiteSilk,
                quantity : 8
            },
            {
                material : materials.whiteOak,
                quantity : 10
            },
            {
                material : materials.zarosianInsignia,
                quantity : 12
            }
        ]
    },
    zarosianTrainingDummy : {
        name : "Zarosian Training Dummy",
        materials : [
            {
                material : materials.thirdAgeIron,
                quantity : 16
            },
            {
                material : materials.whiteOak,
                quantity : 14
            }
        ]
    },
    legatusMaximusFigurine : {
        name : "Legatus Maximus Figurine",
        materials : [
            {
                material : materials.goldrune,
                quantity : 8
            },
            {
                material : materials.zarosianInsignia,
                quantity : 14
            },
            {
                material : materials.ancientVis,
                quantity : 10
            }
        ]
    },
    solemInUmbraPainting : {
        name : "'Solem in Umbra' Painting",
        materials : [
            {
                material : materials.samiteSilk,
                quantity : 8
            },
            {
                material : materials.whiteOak,
                quantity : 10
            },
            {
                material : materials.tyrianPurple,
                quantity : 14
            }
        ]
    }
}

let collections = {
    zarosian1 : {
        name: "Zarosian I",
        relics: [
            relics.venatorDagger,
            relics.venatorLightCrossbow,
            relics.legionaryGladius,
            relics.legionarySquareShield,
            relics.primisElementisStandard,
            relics.zarosEffigy,
            relics.zarosianTrainingDummy,
            relics.legatusMaximusFigurine,
            relics.solemInUmbraPainting
        ]
    }
}

let totals = {};
console.log(collections.zarosian1.name + " requires:")
collections.zarosian1.relics.forEach( (relic) => {
    console.log(relic.name);
    relic.materials.forEach( (material) => {
        if(totals[material.material] == null) {
            totals[material.material] = material.quantity;
        }
        else {
            totals[material.material] += material.quantity
        }
    })
})
console.log("\nIn total, these require: ")
for(let material of Object.keys(totals)) {
    console.log(totals[material] + "x " + material)
}

// let collectors = {
//     velucia = {
//         name = "Velucia", 
//         collect
//     }
// }