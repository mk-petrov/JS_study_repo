function solve(args) {
    let controlNum = Number(args[0]);
    let templateMatrix = [];
    let messageMatrix = args.slice(controlNum + 1)//.split('\n').map(e => Number(e));

    for (let i = 1; i <= controlNum; i++) {
        templateMatrix.push(args[i].split(' ').map(e => Number(e)));
    }
    // TO DO

    console.log(controlNum);
    console.log(templateMatrix);
    console.log(messageMatrix);
    console.log(String.fromCharCode(26));

}

solve([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);