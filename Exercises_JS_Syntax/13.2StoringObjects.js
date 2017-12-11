function solve(args) {
    let studentData = args
        .map(studentString => studentString.split(' -> '))
        .map(tokens => {
            return {
              name: tokens[0],
              age: Number(tokens[1]),
              grade: Number(tokens[2])
            };
        });

    studentData.forEach(student => {
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade.toFixed(2)}`);
    })

}

// receive hole input like one string and split it by new line;
solve('Pesho -> 13 -> 6.00\nIvan -> 12 -> 5.57\nToni -> 13 -> 4.90'.split('\n'));