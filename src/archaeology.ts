import { Collections } from "./collections";
import { Materials, Material } from "./materials"
import { Player } from "./player";

let player = new Player();
let collection = Collections.zarosian1;
let totals = player.calculateCollectionRepair(collection)

console.log(collection.name + " requires:")
collection.artefacts.forEach( (artefact) => {
    console.log("- " + artefact.name);
});
console.log("\nIn total, these require: ")
totals.forEach( (quantity, material) => {
    console.log("- " + quantity + "x " + material.name)
});
