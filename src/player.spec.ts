import "mocha"
// import { expect } from "chai";
import { should } from "chai"
import { Player } from "./player"
import { Artefacts } from "./artefacts"
import { arch } from "os";
let itShould = should();
let player: Player;
let artefact = Artefacts.legatusMaximusFigurine;


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
})