//JS program that prints a DNA helix with length, specified by the user.
// The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG.

function printDNA(number) {
    let sequence = 'ATCGTTAGGG';
    let timesToPrint = Math.floor(number / 5);
    let rowsToPrint = number % 5 === 0 ? 5 : number % 5;
    //console.log(rowsToPrint);
    //console.log(timesToPrint);
    let result = '';
    let count = 0;
    for (let i = 1; i <= rowsToPrint; i++) {
        let firstSym = sequence[count];
        let secondSym = sequence[count + 1];
        let form = '*'.repeat(2);
        let middle = '-'.repeat(count / 2);


        result += `${form}${firstSym}${middle}${secondSym}${form}\n`;
        count +=2;
    }

    console.log(result);
}

//printDNA(26);
printDNA(15);
//printDNA(10);