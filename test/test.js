import Mocha from 'mocha';
import { expect } from 'chai';
import { startTimeRate, bedTimeRate } from '../src/index';

describe("Canary test", () => {
    it("true to equal true", () => {
        expect(true).to.be.true;
    })
})

describe("Babysitter Kata", () => {

    describe("StartTimeRate", () => {
        it("Calculate $12/hour for 1 hour", () => {
            expect(startTimeRate(5, 6)).to.equal(12);
        })
        it("Calculate $12/hour for multiple hours", () => {
            expect(startTimeRate(5, 8)).to.equal(36);
        })
        it("Limit start time to 5pm", () => {
            expect(startTimeRate(4, 6)).to.equal(12);
        })
    })

    describe("bedTimeRate", () => {
        it("Calculate $8/hour for 1 hour", () => {
            expect(bedTimeRate(11, 12)).to.equal(8);
        })
        it("Calculate $8/hour for multiple hours", () => {
            expect(bedTimeRate(8, 12)).to.equal(32);
        })
    })
})

