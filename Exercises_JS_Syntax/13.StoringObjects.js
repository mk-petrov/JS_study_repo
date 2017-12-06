function solve(args) {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    let result = [];

    for (let i = 0; i < args.length; i ++){
        let tokens = args[i].split('->').map(x => x.trim());   // remove no needed spaces
        let name = tokens[0];
        let age = Number(tokens[1]);
        let grade = Number(tokens[2]);

        result.push(parseStudent(name, age, grade));

        function parseStudent(name, age, grade) {

            return new Student(
                Student.name = name,
                Student.age = age,
                Student.grade = grade
            );
        }

    }

    for (let kvp of result){
        console.log(`Name: ${kvp.name} \nAge: ${kvp.age} \nGrade: ${kvp.grade.toFixed(2)} \n`);
    }

    //console.log(result);
};

solve([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90'
]);