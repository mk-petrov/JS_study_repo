function multiplyTwoNums(args) {
    let firstNumber = Number(args[0]);
    let secondNumber = Number(args[1]);

    if (firstNumber > secondNumber){
        console.log(firstNumber / secondNumber);
    } else {
        console.log(firstNumber * secondNumber);
    }
}

multiplyTwoNums(['144', '12']);