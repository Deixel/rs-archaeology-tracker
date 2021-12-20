import collections from "./collections";

let totals = new Map<String, number>();
console.log(collections.zarosian1.name + " requires:")
collections.zarosian1.relics.forEach( (relic) => {
    console.log("- " + relic.name);
    relic.materialList.forEach( (materialListItem) => {
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
console.log("\nIn total, these require: ")
totals.forEach( (quantity, material) => {
    console.log("- " + quantity + "x " + material)
});