const Person = require('./02_Person');

function getPeople() {
    //put the class in the function when submitting the problem in the Judge system
    /*
    class Person {
        //let age = 18; can't be written because everything in the class has to be a function!!!!

        constructor(firstName, lastName, age, email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    */

    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'),
    ];
}


//.join will call toString method defined in the Person class file for every element in the collection
console.log(getPeople().join('\n'));