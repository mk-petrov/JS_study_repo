let sum = require('../01_sum').sum;

//referencing chai and because we don't need the hole library '.expect';
let expect = require('chai').expect;

//'describe' and 'it' are keywords in Mocha
describe("Test summator", function () {
    //for the first case
    it("Should return 3 for [1, 2]", function () {

        //using chai
        expect(sum([1, 2])).to.equal(3);

        //this is without using chai
        // if(expected !== actual)
        //     throw new Error ("3 != 1 + 2");
    });
    //for the second case
    it("Should return 0 for []", function () {
        let expected = 0;
        let actual = sum([]);
        if(expected !== actual)
            throw new Error ("0 != 0");
    });

    //this is the syntax for NaN testing
    it("Should return NaN", function () {
        expect(sum(['pesho', 2, 3])).to.be.NaN;
    });

    //with precision till the 4-th sign
    it("Should return 3.3", function () {
        expect(sum([1.1, 1.1, 1.1])).to.be.closeTo(3.3, 0.0001);
    });
});

//it's better if we use a nested structure like below for the tests to have more clarity
/*describe("Test summator", function () {
    describe("Group 1", function () {
        it("Should return 3 for [1, 2]", function () {
            expect(sum([1, 2])).to.equal(3);
        });
        it("Should return 3 for [1, 2]", function () {
            expect(sum([1, 2])).to.equal(3);
        });
        it("Should return 3 for [1, 2]", function () {
            expect(sum([1, 2])).to.equal(3);
        });
    });

    describe("Group 1", function () {
        it("Should return 3 for [1, 2]", function () {
            expect(sum([1, 2])).to.equal(3);
        });
        it("Should return 3 for [1, 2]", function () {
            expect(sum([1, 2])).to.equal(3);
        });
        it("Should return 3 for [1, 2]", function () {
            expect(sum([1, 2])).to.equal(3);
        });
    });
});*/

