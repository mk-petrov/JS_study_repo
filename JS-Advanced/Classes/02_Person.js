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

// let girl = new Person('Anna', 'Shmith', 29, 'as@yahoo.com');
//
// console.log(girl);
// console.log('' + girl);

module.exports = Person;