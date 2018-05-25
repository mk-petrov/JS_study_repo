const mathEnforcer = require('../07_mathEnforcer').mathEnforcer;
//const otherObj = require('../07_mathEnforcer').otherObj;
const expect = require('chai').expect;

describe("Testing mathEnforcer", () => {

    describe("General testing", () => {
        it("Should be an object", () => {
            expect(typeof mathEnforcer).to.equal('object', "It's not an object");
        });

        it("Object should have the methods: addFive, subtractTen, sum", () => {
            expect(JSON.stringify(Object.keys(mathEnforcer))).to.equal("[\"addFive\",\"subtractTen\",\"sum\"]",
                "The object has not the methods required!");
        });
    });

    describe("testing addFive function", () => {
        it("Should be a function", () => {
            expect(typeof mathEnforcer.addFive).to.equal('function', "It's not a function");
        });

        it("Should return undefined with not a number param", () => {
            expect(mathEnforcer.addFive('pesho')).to.be.undefined;
            expect(mathEnforcer.addFive([12, 15])).to.be.undefined;
            expect(mathEnforcer.addFive({num: 15})).to.be.undefined;
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it("With correct param, should return correct value", () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(-7)).to.equal(-2);
            expect(mathEnforcer.addFive(15)).to.equal(20);
            expect(mathEnforcer.addFive(17.27)).to.be.closeTo(22.27, 0.01);
            expect(mathEnforcer.addFive(15.27891234)).to.be.closeTo(20.279, 0.01);
        });
    });

    describe("testing subtractTen function", () => {
        it("Should be a function", () => {
            expect(typeof mathEnforcer.subtractTen).to.equal('function', "It's not a function");
        });

        it("Should return undefined with not a number param", () => {
            expect(mathEnforcer.subtractTen('pesho')).to.be.undefined;
            expect(mathEnforcer.subtractTen([12, 15])).to.be.undefined;
            expect(mathEnforcer.subtractTen({num: 15})).to.be.undefined;
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });

        it("With correct param, should return correct value", () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(-14)).to.equal(-24);
            expect(mathEnforcer.subtractTen(-6)).to.equal(-16);
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(17.27)).to.be.closeTo(7.27, 0.01);
            expect(mathEnforcer.subtractTen(15.27891234)).to.be.closeTo(5.279, 0.01);
        });
    });

    describe("testing sum function", () => {
        it("Should be a function", () => {
            expect(typeof mathEnforcer.sum).to.equal('function', "It's not a function");
        });

        it("Should return undefined with not a numbers parameters", () => {
            expect(mathEnforcer.sum('pesho', 'gosho')).to.be.undefined;
            expect(mathEnforcer.sum([12, 15], 'john')).to.be.undefined;
            expect(mathEnforcer.sum({num: 15}, {add: 2})).to.be.undefined;
            expect(mathEnforcer.sum('5', '89')).to.be.undefined;
        });

        it("With correct param, should return correct value", () => {
            expect(mathEnforcer.sum(5, -10)).to.equal(-5);
            expect(mathEnforcer.sum(-14, -10)).to.equal(-24);
            expect(mathEnforcer.sum(-6, -10)).to.equal(-16);
            expect(mathEnforcer.sum(15, -10)).to.equal(5);
            expect(mathEnforcer.sum(17.27, -10.11)).to.be.closeTo(7.16, 0.01);
            expect(mathEnforcer.sum(-15.27891234, 10.278)).to.be.closeTo(-5, 0.01);
        });
    });
});