function solve(args) {
    let result = {};
    let command = args[args.length -1];

    for (let i =0; i < args.length - 1; i++){
        let tokens = args[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];

        result[key] = value;
    }

    if (result[command]){
        console.log(result[command]);
    } else {
        console.log('None');
    }
}

// solve([
//     'key value',
//     'key eulav',
//     'test tset',
//     'key'
// ]);
solve([
    '3 test',
    '3 test1',
    '4 test4',
    '4 test5',
    '0'
]);