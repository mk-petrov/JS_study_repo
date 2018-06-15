//Mixins are used like interfaces in other languages

function greeting(){
    this.sayHi = function() {
        return `Hi, my name is ${this.name}`;
    };

    return this;
}

class Student {
    constructor(name){
        this.name = name;
    }
}

//Expand a Class with additional functionality
greeting.call(Student.prototype);

let student = new Student('John');
console.log(student.sayHi());