//the definitions of the Classes are functions, and the instances are objects

class Rectangle {
    constructor(width, height, color = 'white'){
        this.width = width || 1;    //same thing is to define the default values: (width = 1, height = 1, color = 'white')
        this.height = height;
        this.color = color;
    }
}

console.log(Rectangle);   //[Function: Rectangle]
console.log(typeof Rectangle);   // function

let rect = new Rectangle(20, 35, 'green');
let rect2 = new Rectangle(10, 18);  // color prop is missing by the declaration, but by default is set to white
