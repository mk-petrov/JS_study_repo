const createComputerHierarchy = require('./05_Computer');
const Laptop = createComputerHierarchy().Laptop;
const Battery = createComputerHierarchy().Battery;


function createMixins() {
    function computerQualityMixin(classToExtend) {
        
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        
        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram * 4);
        };

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    //testing the code
    // computerQualityMixin(Laptop);
    // let batt = new Battery('HP', 1500);
    // let laptop = new Laptop('manufacturer', 2500, 8, 120, 2, 'color', batt);
    // console.log(laptop.__proto__);

    return {
        computerQualityMixin
    }
}

createMixins();
