//the definitions of the Classes are functions, and the instances are objects

class Rectangle {
    constructor(width, height, color = 'white'){
        this.width = width || 1;    //same thing is to define the default values: (width = 1, height = 1, color = 'white')
        this.height = height;
        this.color = color;
    }

    //no function keyword needed.
    //Methods perform operations over the class data
    calcArea(){
        return this.width * this.height;
    }
}

console.log(Rectangle);   //[Function: Rectangle]
console.log(typeof Rectangle);   // function

let rect = new Rectangle(20, 35, 'green');
let rect2 = new Rectangle(10, 18);  // color prop is missing by the declaration, but by default is set to white

//in JS the instances of a class can be modify unlike C# or JAVA
rect.name = 'pesho';

//calcArea will be not displayed because is bind to the prototype, and every instance of that class will use the same function, not a copy of it
console.log(rect);  //the name property with 'pesho' value will be there
console.log(rect.calcArea());
