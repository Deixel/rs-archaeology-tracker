import { Collections } from "./collections";
import { Materials, Material } from "./materials"

let totals = new Map<String, number>();
let collection = Collections.zarosian1;
// console.log(collection.name + " requires:")
collection.artefacts.forEach( (artefact) => {
    // console.log("- " + artefact.name);
    artefact.materialList.forEach( (materialListItem) => {
        let material = materialListItem.material;
        let materialName = material.name;
        if(!totals.has(materialName)) {
            totals.set(materialName, materialListItem.quantity);
        }
        else {
            let currentValue = totals.get(materialName) as number;
            totals.set(materialName, currentValue + materialListItem.quantity);
        }
    })
})
// console.log("\nIn total, these require: ")
// totals.forEach( (quantity, material) => {
//     console.log("- " + quantity + "x " + material)
// });

for(let key in Materials) {
    let material = Materials[key];
    console.log(material.name + " is used to repair: ");
    material.artefacts.forEach( artefact => {
        let collections = artefact.collections.map( coll => coll.name).join(", ")
        console.log("- " + artefact.name + " (" + collections + ")");
        
    })
}