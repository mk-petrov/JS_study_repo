const isOddOrEven = require('../05_evenOrOdd').isOddOrEven;
const expect = require('chai').expect;

describe("isOddOrEven testing", () => {

    describe("General testing", () => {

        it("should be a function", () => {
            expect(typeof isOddOrEven).to.equal('function');
        });

        describe("testing with other types parameter", () => {

            it("should return undefined with number parameter", () => {
                expect(isOddOrEven(13)).to.be.undefined;
            });

            it("should return undefined with object parameter", () => {
                expect(isOddOrEven({name: 'pesho'})).to.be.undefined;
            });

            it("should return undefined with array parameter", () => {
                expect(isOddOrEven([13, 'seven', {}])).to.be.undefined;
            });

            it("should return undefined with function parameter", () => {
                expect(isOddOrEven( (a)=> {return a;})).to.be.undefined;
            });
        });
    });

    describe("Value testing", () => {
        it("should return odd with an odd length string parameter", () => {
            expect(isOddOrEven('pesho')).to.equal('odd', 'Function did not return the correct result');
        });

        it("should return odd with an odd length string parameter", () => {
            expect(isOddOrEven('alabala')).to.equal('odd', 'Function did not return the correct result');
        });

        it("should return odd with an odd length string parameter", () => {
            expect(isOddOrEven('cat')).to.equal('odd', 'Function did not return the correct result');
        });

        it("should return even with an even length string parameter", () => {
            expect(isOddOrEven('some')).to.equal('even', 'Function did not return the correct result');
        });

        it("should return even with an even length string parameter", () => {
            expect(isOddOrEven('is it even')).to.equal('even', 'Function did not return the correct result');
        });

        it("should return even with an even length string parameter", () => {
            expect(isOddOrEven('father')).to.equal('even', 'Function did not return the correct result');
        });
    });
});