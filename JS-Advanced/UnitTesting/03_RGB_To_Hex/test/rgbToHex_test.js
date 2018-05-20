const rgbToHexColor = require('../rgbToHex').rgbToHexColor;
let expect = require('chai').expect;

describe("RGB to Hex Color", () => {
    it("Should return #FF9EAA for (255, 158, 170)", ()=> {
       expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });
    it("Should pad values with zeroes", ()=> {
        expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
    });
    it("Should work at lower limit", ()=> {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it("Should work at upper limit", ()=> {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it("Should return undefined for negative values", ()=> {
        expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
    });
    it("Should return undefined for values greater than 255", ()=> {
        expect(rgbToHexColor(256, 15, 15)).to.be.undefined;
    });
    it("Should return undefined for values greater than 255", ()=> {
        expect(rgbToHexColor(15, 256, 15)).to.be.undefined;
    });
    it("Should return undefined for values greater than 255", ()=> {
        expect(rgbToHexColor(15, 15, 256)).to.be.undefined;
    });
    it("Should return undefined for fractions", ()=> {
        expect(rgbToHexColor(3.14, 2.71, 3.14)).to.be.undefined;
    });
    it("Should return undefined for invalid data", ()=> {
        expect(rgbToHexColor('pesho', {name: 'gosho'}, [])).to.be.undefined;
    });
});