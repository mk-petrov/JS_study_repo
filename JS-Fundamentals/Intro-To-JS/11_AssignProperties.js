function solve(args) {
    if(args.length === 6){

        let obj = {
            prop1: args[0],
            value1: args[1],
            prop2: args[2],
            value2: args[3],
            prop3: args[4],
            value3: args[5]
        };

        let result = '{\n' +
            `  ${obj.prop1}: '${obj.value1}',\n  ${obj.prop2}: '${obj.value2}',\n  ${obj.prop3}: '${obj.value3}',\n`
            + '}';

        console.log(result);

    } else {
        console.log('Invalid input!')
    }

}

solve(['name', 'Pesho', 'age', '23', 'gender', 'male']);
solve(['ssid', '90127461', 'status', 'admin', 'expires', '600']);