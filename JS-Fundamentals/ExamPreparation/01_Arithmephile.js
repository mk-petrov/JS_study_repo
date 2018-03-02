function solve(args) {
    let biggestNumbers = [];
    let input = [];

    for (let num of args) {
        input.push(Number(num));
    }
    for (let i = 0; i < input.length; i++) {
        let currNum = input[i];
        let currIndex = i;
        let j = i + 1;

        if(currNum >= 0 && currNum <= 9){
            //currentSave = currNum;
            let inputCopy = input.slice();
            let tempArray = inputCopy.splice(j, currNum);

            if(tempArray.length !== 0){
                biggestNumbers.push(tempArray.reduce((a, b) => a * b));
            }
        }
    }

    //Output: max num in array of sequences
    console.log(biggestNumbers.reduce((a, b) => Math.max(a, b)));
}

solve([
    '100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1'
]);

solve([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
]);