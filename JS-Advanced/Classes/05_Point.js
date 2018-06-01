class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    //JS has not static properties like C#, and they have to be simulated with closure!

    // static methods are not accessible tru the instances, but only for the class itself
    static distance(a, b){
        const deltaX = a.x - b.x;
        const deltaY = a.y - b.y;

        //sqrt is static method for the Math class
        return Math.sqrt(deltaX ** 2 + deltaY ** 2);
    }
}

/* in JS static methods are not so used because we always can write a function that will do the job done
function distance(a, b){
    const deltaX = a.x - b.x;
    const deltaY = a.y - b.y;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}
*/
let p1 = new Point(1, 3);
let p2 = new Point(5,8);

console.log(p1);
console.log(p2);

console.log(Point.distance(p1, p2));
