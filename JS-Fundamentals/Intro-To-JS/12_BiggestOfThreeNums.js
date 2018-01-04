function solve(args) {
    if(args.length === 3){
        console.log(Math.max(args[0], args[1], args[2]));
    } else {
        console.log('Invalid input!');
    }
}

solve([2, 8, -89]);
solve([0, -8, -89]);
solve([-2, -8, -89]);
solve([2.2, 2.1, 2]);
solve([2.2, ]);