function isMagic(matrix) {
    let isMagic = true;

    // each value will contains the rows/cols sums
    let sumRow = [];
    let sumCol = [];

    // collect all values by rows and cols;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentValue = matrix[row][col];
            if(sumCol[col] === undefined){
                sumCol[col] = 0;
            }
            sumCol[col] += currentValue;
        }

        sumRow[row] = matrix[row].reduce((a, b) => a + b);

    }

    //check all values
    for (let i = 0; i < sumRow.length; i++) {
        let valueRow = sumRow[i];
        let valueCol = sumCol[i];

        if (sumRow[0] !== valueRow || sumRow[0] !== valueCol){
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);

}

isMagic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

isMagic([
    [4, 5, 6],
    [6, 4, 4],
    [4, 5, 5]
]);
isMagic([
    [4, 5, 6, 5],
    [6, 4, 5, 5],
    [4, 6, 5, 5],
    [6, 5, 4, 5]
]);