//In JS there is no abstract keyword!!
//Simulation of abstract Class, Vehicle can't be instantiated, but child classes can

class Vehicle {
    constructor(motor){
        if(new.target === Vehicle){
            throw new Error("Cannot instantiate directly.");
        }
        this.motor = motor;
        this.wheels = 4;
    }

    //Needed for purpose of copying data to child class
    getWheels(){
        return this.wheels;
    }
}

class Car extends Vehicle {
    constructor(motor, make, doors){
        super(motor);
        this.make = make;
        this.doors = doors;
        //to copy property from the parent class, has to be like a function that returns this property
        this.wheels = super.getWheels();
    }

    toString(){
        return `${this.make} with ${this.wheels} tires, ${this.doors} doors and ${this.motor} engine`;
    }
}

let car = new Car('benzin', 'BMW', 2);
console.log('' + car);