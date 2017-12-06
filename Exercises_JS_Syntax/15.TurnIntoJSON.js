function solve(args) {
    let object = {};
    //object['name'] = 'Kiro';

    for (let i = 0; i < args.length; i++){
        let tokens = args[i].split('->').map(x => x.trim());
        let key = tokens[0];
        let value = tokens[1];

        object[key] = value;
    }

    console.log(JSON.stringify(object));
}

solve([
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
]);