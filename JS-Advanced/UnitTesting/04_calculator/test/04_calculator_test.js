const createCalculator = require('../04_calculator').createCalculator;
let expect = require('chai').expect;

describe('Calculator', () => {
    //create new calculator for every test, afterEach is also available
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    it('should be a function', () => {
        // without the parenthesis
        expect(typeof createCalculator).to.equal('function');
    });
    it('should return a object', () => {
       //or (typeof createCalculator())
       expect(typeof calc).to.equal('object');
    });
    it('should have 0 value when created', () => {
        expect(calc.get()).to.equal(0);
    });
    it('should add', () => {
        calc.add(3);
        calc.add(5);
        expect(calc.get()).to.equal(8);
    });
    it('should subtract', () => {
        calc.subtract(3);
        calc.subtract(5);
        expect(calc.get()).to.equal(-8);
    });
    it('should work with fractions', () => {
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01, 0.001);
    });
    it('should work with negative numbers', () => {
        calc.add(-4);
        calc.subtract(-3);
        expect(calc.get()).to.equal(-1);
    });
    it('should not add NaNs', () => {
        calc.add('pesho');
        expect(calc.get()).to.be.NaN;
    });
    it('should work with numbers as string', () => {
        calc.add('7');
        expect(calc.get()).to.equal(7);
    });

});