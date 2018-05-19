let isSymmetric = require('../02_arraySymmetry').isSymmetric;
let expect = require('chai').expect;

describe("Check symmetry", () => {
    describe("General tests", () => {
        it("Should be a function", () => {
            expect(typeof isSymmetric).to.equal('function');
        });
    });

    describe("Value tests", () => {
        it("it should return true for [1, 2, 3, 3, 2, 1]", () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        });
        it("it should return false for [1, 2, 3, 4, 2, 1]", () => {
            expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.false;
        });
        it("it should return true for [1, 2, 3, 2, 1]", () => {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        });
        it("it should return false for [1, 2, 3, 4, 1]", () => {
            expect(isSymmetric([1, 2, 3, 4, 1])).to.be.false;
        });
        it("it should return false for [1, 2]", () => {
            expect(isSymmetric([1, 2])).to.be.false;
        });
        it("it should return false for [1]", () => {
            expect(isSymmetric([1])).to.be.true;
        });
        it("it should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.be.true;
        });
        it("it should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.false;
        });
        it("it should return false for 1, 2, 1", () => {
            expect(isSymmetric(1, 2, 1)).to.be.false;
        });
    });
});
