function multiplyTwoNums(args) {
    let firstNumber = Number(args[0]);
    let secondNumber = Number(args[1]);
    let thirdNumber = Number(args[2]);
    let negativeCount = 0;
    let isPositive = false;

    for (let i = 0; i < args.length; i++){
        if (args[i] < 0){
            negativeCount++;
        } else if (args[i] == 0){
            isPositive = true;
            break;
        }
    }
    //console.log();
    if (isPositive || negativeCount % 2 === 0){
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

multiplyTwoNums(['150', '-12', '0']);