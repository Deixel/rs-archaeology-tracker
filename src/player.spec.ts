import "mocha"
// import { expect } from "chai";
import { should } from "chai"
import { Player } from "./player"
import { Relics, Relic } from "./relics"
let itShould = should();
let player: Player;
let relic = Relics.legatusMaximusFigurine;


describe("Player", function () {
    beforeEach( function () {
        player = new Player();
    })

    describe("Damaged Relics", function () {
        it("can get non-existent relics", function () {
            player.getDamagedCount(Relics.legatusMaximusFigurine).should.equal(0);
        });

        it("can't be repaired if it doesn't exist", function () {
            itShould.Throw( function () { player.repair(Relics.legatusMaximusFigurine, 1) }, "No " + relic.name);
            player.getRepaiedCount(relic).should.equal(0);
        });

        it("can add some of a relic", function () {
            player.addDamagedRelic(Relics.legatusMaximusFigurine, 3);
            player.getDamagedCount(Relics.legatusMaximusFigurine).should.equal(3);
        });

        it("can add some more of a relic", function () {
            player.addDamagedRelic(relic, 1);
            player.addDamagedRelic(relic, 4);
            player.getDamagedCount(relic).should.equal(5);
        })

        it("can subtract some that doesn't exist", function () {
            player.subtractDamagedRelic(relic, 1);
        });

        it("can't be repaired if don't have enough", function () {
            
            player.addDamagedRelic(Relics.legatusMaximusFigurine, 1);
            itShould.Throw( function () { player.repair(Relics.legatusMaximusFigurine, 3) }, "Not enough " + relic.name )
            player.getRepaiedCount(relic).should.equal(0);
        });

        it("can be repaired", function () {
            player.addDamagedRelic(relic, 1);
            player.repair(relic, 1);
            player.getDamagedCount(relic).should.equal(0);
            player.getRepaiedCount(relic).should.equal(1);
        });
    });
})