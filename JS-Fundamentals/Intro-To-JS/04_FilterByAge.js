function solve(ageLimit, name1, age1, name2, age2) {
    let personOne = {name: name1, age: age1 };
    let personTwo = {name: name2, age: age2 };

    if(ageLimit <= personOne.age){
        console.log(personOne);
    }
    if(ageLimit <= personTwo.age){
        console.log(personTwo);
    }
}

solve(19, 'Kiro', 18, 'Sasho', 25);