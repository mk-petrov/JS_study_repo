//Accessor properties
class Circle {
    //the constructor will call setter function that will apply the value for the object
    constructor(radius){
        this.radius = radius;
    }

    get radius(){
        return this._radius;
    }

    set radius(radius){
        if(radius <= 0){
            throw new RangeError('Radius must be positive value')
        }
        this._radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter){
        return this.radius / 2;
    }

    get area(){
        return Math.PI * this.radius ** 2;  //** is exponential operator that means 'power of';
    }
}

let c = new Circle(5);
console.log(c.area);