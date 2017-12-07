function solve(args) {
    let result = {};
    let command = args[args.length -1];

    for (let i =0; i < args.length - 1; i++){
        let tokens = args[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];

        if (!result[key]){
            result[key] = new Array();
        }
        result[key].push(value);
    }

    // if truth then join by new line else, print "None"
    console.log(result[command] ? result[command].join('\n') : 'None');

    // Second way:
    // if (result[command]){
    //
    //     for (let value of result[command]){
    //         console.log(value);
    //     }
    // } else {
    //     console.log('None');
    // }
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
    '4 test3',
    '4 test4',
    '4 test5',
    '4'
]);