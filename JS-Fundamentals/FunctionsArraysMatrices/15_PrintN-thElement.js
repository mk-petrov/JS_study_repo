function printElememt(args) {
    let n = Number(args.splice(-1, 1));
    for (let i = 0; i < args.length; i+=n) {
        console.log(args[i]);
    }
    //console.log(typeof(n));

}

printElememt(['5', '20', '31', '4', '20', '2']);
printElememt(['dsa', 'asd', 'test', 'tset', '2']);
printElememt(['1', '2', '3', '4', '5', '6']);