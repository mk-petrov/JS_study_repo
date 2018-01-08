// JS does not support overloading, but it can be simulated :)
function printName(firstName, lastName) {
    let name = firstName;

    if(lastName != undefined){
        name += ' ' + lastName;
    }

    console.log(name);
}

printName('John', 'Dow');
printName('John');
