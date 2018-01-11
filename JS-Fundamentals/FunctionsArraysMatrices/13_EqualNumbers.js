function solve(matrix) {
    let count = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let current = matrix[row][col];

            if(current == matrix[row + 1][col]){
                count++;
            } else if(current == matrix[row][col + 1]){
                count ++;
            }

        }
    }


    return count;
}

console.log(solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));

console.log(solve([
    ['ss', 'ss', 'aa', 'bb'],
    ['ss', 'aa', 'aa', 'ss'],
    ['aa', 'ss', 'ss', 'aa']
]));