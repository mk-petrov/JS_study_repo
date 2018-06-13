function solve() {
    class Person {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, age: ${this.age})`;
        }
    }

    class Teacher extends Person {
        constructor(name, age, subject){
            super(name, age);   //super is like keyword 'this', but it points to the parent context
            this.subject = subject;
        }

        //override the parent method, but no need to rewrite the code again
        toString(){
            //take the method from the parent and remove the last bracket from the returned string
            let base = super.toString().slice(0, -1);
            return `${base}, subject: ${this.subject}`;
        }
    }

    return {
        Person,
        Teacher
    }
}

let Person = solve().Person;
let Teacher = solve().Teacher;

let person = new Person('Pesho', 29);
let teacher = new Teacher('Ivan', 24, 'History');

console.log(person);
console.log(teacher);