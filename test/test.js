import Mocha from 'mocha';
import { expect } from 'chai';
import { startTimeRate } from '../src/index'

describe("Canary test", () => {
    it("true to equal true", () => {
        expect(true).to.be.true;
    })
})

describe("Babysitter Kata", () => {
    it("Calculate $12/hour for 1 hour", () => {
        expect(startTimeRate(5, 6)).to.equal(12);
    })
    it("Calculate $12/hour for multiple hours", () => {
        expect(startTimeRate(5, 8)).to.equal(36);
    })
})

