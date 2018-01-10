function diagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainDiagonalSum += matrix[row][row];
        secondaryDiagonalSum += matrix[row][matrix[row].length - 1 - row];
        //console.log(secondaryDiagonalSum);
    }
    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
    //console.log(mainDiagonalSum);
}

diagonalSums([
   [10, 5, 15],
   [5, 15, 20],
   [20, 10, 25]
]);
diagonalSums([
    [20, 40],
    [10, 60]
]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);