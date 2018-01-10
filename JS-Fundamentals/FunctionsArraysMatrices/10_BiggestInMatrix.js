function solve(matrix) {
    let biggest = Number.NEGATIVE_INFINITY; // the smallest num in JS

    matrix.forEach(row =>
        row.forEach(e => {
            if(e > biggest){
                biggest = e;
            }
        })

    );

    return biggest;
}

console.log(solve([
    [1, 8, 9],
    [15, -8, 6],
    [89, 89.4, 9]
]));