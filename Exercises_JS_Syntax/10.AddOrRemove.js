function solve(args) {
    let result = [];

    for (let i = 0; i < args.length; i++){
        let tokens = args[i].split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);

        switch (command){
            case 'add':
                result.push(value);
                break;
            case 'remove':
                if (result[value] !== undefined){
                    result.splice([value], 1);
                }
                break;
        }
    }

    console.log(result);
}

solve([
    'add 3',
    'add 5',
    'remove 1',
    'add 2'
]);