import "mocha"
// import { expect } from "chai";
import { should } from "chai"
import { Player } from "./player"
import { Artefacts } from "./artefacts"
import { Collections } from "./collections"
import { Material, Materials } from "./materials"
let itShould = should();
let player: Player;
let artefact = Artefacts.legatusMaximusFigurine;
let collection = Collections.zarosian1;


describe("Player", function () {
    beforeEach( function () {
        player = new Player();
    })

    describe("Damaged Artefacts", function () {
        it("can get count of an artefact you've never used before", function () {
            player.getDamagedCount(artefact).should.equal(0);
        });

        it("can't be repaired if you don't have any", function () {
            itShould.Throw( function () { player.repair(artefact, 1) }, "No " + artefact.name);
            player.getRepairedCount(artefact).should.equal(0);
        });

        it("can add the count of a artefact", function () {
            player.addDamagedArtefact(artefact, 3);
            player.getDamagedCount(artefact).should.equal(3);
        });

        it("can add some more of a artefact", function () {
            player.addDamagedArtefact(artefact, 1);
            player.addDamagedArtefact(artefact, 4);
            player.getDamagedCount(artefact).should.equal(5);
        })

        it("can't subtract more than you have", function () {
            player.subtractDamagedArtefact(artefact, 1);
        });

        it("can't be repaired if don't have enough", function () {
            
            player.addDamagedArtefact(artefact, 1);
            itShould.Throw( function () { player.repair(artefact, 3) }, "Not enough " + artefact.name )
            player.getRepairedCount(artefact).should.equal(0);
        });

        it("can be repaired", function () {
            player.addDamagedArtefact(artefact, 1);
            player.repair(artefact, 1);
            player.getDamagedCount(artefact).should.equal(0);
            player.getRepairedCount(artefact).should.equal(1);
        });
    });

    describe("Repaired Artefacts", function () {
        it("can't subtract more than you have", function () {
            player.addRepairedArtefact(artefact, 2);
            player.subtractRepairedArtefact(artefact, 4);
            player.getRepairedCount(artefact).should.equal(0);
        })
    });

    describe("Calulator", function() {
        it("calculates full requirements if no artefacts are repaired", function() {
            let expectedMaterials = new Map<Material, number>([
                [Materials.thirdAgeIron, 74],
                [Materials.zarosianInsignia, 68],
                [Materials.imperialSteel, 24],
                [Materials.samiteSilk, 32],
                [Materials.whiteOak, 34],
                [Materials.goldrune, 8],
                [Materials.ancientVis, 10],
                [Materials.tyrianPurple, 14]
            ]);
            let requiredMaterials = player.calculateCollectionRepair(collection);
            requiredMaterials.size.should.equal(expectedMaterials.size)
            expectedMaterials.forEach( (quantity, material) => {
                requiredMaterials.has(material).should.equal(true);
                (requiredMaterials.get(material) as number).should.equal(quantity);
            });

        });
        
        it("calculates correct requirements if artefacts are repaired", function() {
            let expectedMaterials = new Map<Material, number>([
                [Materials.thirdAgeIron, 58],
                [Materials.zarosianInsignia, 56],
                [Materials.imperialSteel, 24],
                [Materials.samiteSilk, 32],
                [Materials.whiteOak, 34],
                [Materials.goldrune, 8],
                [Materials.ancientVis, 10],
                [Materials.tyrianPurple, 14]
            ]);
            player.addRepairedArtefact(Artefacts.venatorDagger, 1);
            let requiredMaterials = player.calculateCollectionRepair(collection);
            requiredMaterials.size.should.equal(expectedMaterials.size)
            expectedMaterials.forEach( (quantity, material) => {
                requiredMaterials.has(material).should.equal(true);
                (requiredMaterials.get(material) as number).should.equal(quantity);
            })
        });

        it("calculates correct requirements if all artefacts are repaired", function() {
            let expectedMaterials = new Map<Material, number>();
            collection.artefacts.forEach( (artefact) => {
                player.addRepairedArtefact(artefact, 1);
            });
            let requiredMaterials = player.calculateCollectionRepair(collection);
            requiredMaterials.size.should.equal(expectedMaterials.size)
        })
    });
});