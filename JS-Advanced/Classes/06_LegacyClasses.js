//keyword Class is syntactic sugar before ES6, classes were composed manually

//Constructor function defines a class data
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    //Behavior (methods) is later attached to the prototype
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
}




//Instantiation works the same way
let rect = new Rectangle(3, 5);