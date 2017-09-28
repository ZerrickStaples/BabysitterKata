import Mocha from 'mocha';
import { expect } from 'chai';
import { startTime } from '../src/index'

describe("Canary test", () => {
    it("true to equal true", () => {
        expect(true).to.be.true;
    })
})

describe("Babysitter Kata", () => {
    it("Calculate $12/hour for 1 hour", () => {
        expect(startTime()).to.equal(12);
    })
    it("Calculate $12/hour for multiple hours", () => {
        expect(startTime(5, 8)).to.equal(36);
    })
})

