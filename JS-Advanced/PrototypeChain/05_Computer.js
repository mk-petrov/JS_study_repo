function createComputerHierarchy() {
    class Device {
        constructor(manufacturer) {
            if(new.target === Device){
                throw new Error("Abstract class cannot be instantiated");
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Device {
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Device {
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery extends Device {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer extends Device {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target === Computer){
                throw new Error("Abstract class cannot be instantiated");
            }
            super(manufacturer);
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer {
        get battery() {
            return this._battery;
        }

        set battery(value) {
            if(value instanceof Battery){
                this._battery = value;
            } else {
                throw new TypeError('Value is not instance of Battery');
            }
        }
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }
    }

    class Desktop extends Computer {
        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if(value instanceof Keyboard){
                this._keyboard = value;
            } else {
                throw new TypeError('Value is not instance of Keyboard');
            }

        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if(value instanceof Monitor){
                this._monitor = value;
            } else {
                throw new TypeError('Value is not instance of Monitor');
            }

        }
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop,
    }
}

module.exports = createComputerHierarchy;