let obj = {};
//add properties to an object
obj['name'] = 'Ivan';
obj.salary = 10000;

// delete the property
delete obj.salary;

let obj2 = {};
obj2.lastName = 'Ivanov';

//create an object
let obj3 = {
    name: 'Saimon',
    sayHello: function(){
        return 'Hello my name is ' + this.name;
    }
};

//create an array
let arr = [1, 2, 3];

console.log(obj.name + ' ' + obj2.lastName);
console.log(obj3.sayHello());

let object = {
    name: 'Stefan',
    age: 19,
    favColors: [
        'blue',
        'green',
        'yellow'
    ],
    favDrink: 'bier'
};

// coverts the obj as string
let objectAsString = JSON.stringify(object);

console.log(objectAsString);

// from string to object again
let parsedObject = JSON.parse(objectAsString);

console.log(parsedObject.name);
