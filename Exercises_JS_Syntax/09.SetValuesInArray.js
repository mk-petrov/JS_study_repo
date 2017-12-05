function setValues(params) {
    let arrLength = params[0];
    let resultArr = [arrLength];

    for (let i = 1; i < params.length; i++){
        let tokens = params[i].split(' - ');
        let index = Number(tokens[0]);
        let value = Number(tokens[1]);

        resultArr[index] = value;
    }

    for (let i = 0; i < Math.max(resultArr.length, arrLength); i ++){
        if (resultArr[i] === undefined){
            resultArr[i] = 0;
        }
        console.log(resultArr[i]);
    }
}

setValues([
    5,
    '0 - 3',
    '3 - -1',
    '4 - 2'
]);

// setValues([
//     4,
//     '0 - 3',
//     '0 - -1',
//     '0 - 2'
// ]);