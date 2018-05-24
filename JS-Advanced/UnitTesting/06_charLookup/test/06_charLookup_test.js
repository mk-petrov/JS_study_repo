const lookupChar = require('../06_charLookup').lookupChar;
const expect = require('chai').expect;

describe("General testing", () => {
    describe("Testing input params", () => {
        it("Should be a function", () => {
            expect(typeof lookupChar).to.equal('function', 'not a function');
        });

        it("Should return undefined with other then string param", () => {
            expect(lookupChar({}, 0)).to.equal(undefined, 'not a string');
        });

        it("Should return undefined with other then string param", () => {
            expect(lookupChar(13, 0)).to.equal(undefined, 'not a string');
        });

        it("Should return undefined with other then integer param", () => {
            expect(lookupChar(13, 0)).to.equal(undefined, 'not a string');
        });

        it("Should be a integer", () => {
            expect(lookupChar('pesho', 3.14)).to.be.undefined;
        });
    });

    describe("Incorrect index", () => {
        it("Should return incorrect index when index is above strings length", () => {
            expect(lookupChar('pesho', 13)).to.equal("Incorrect index",
                "The function did not return the correct value!");
        });

        it("Should return incorrect index when index is below 0", () => {
            expect(lookupChar('pesho', -4)).to.equal("Incorrect index",
                "The function did not return the correct value!");
        });
    });

    describe("Expected input", () => {
        it("Should return correct value whit correct params", () => {
            expect(lookupChar('pesho', 0)).to.equal("p",
                "The function did not return the correct result!");
        });

        it("Should return correct value whit correct params", () => {
            expect(lookupChar('pesho', 4)).to.equal("o",
                "The function did not return the correct result!");
        });

        it("Should return correct value whit correct params", () => {
            expect(lookupChar('peter', 4)).to.equal("r",
                "The function did not return the correct result!");
        });
    });
});

