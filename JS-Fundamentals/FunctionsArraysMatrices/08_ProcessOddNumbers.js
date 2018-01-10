//Print the odd numbers, doubled and reversed

function solve(args) {
    let arr = args.filter((e, i) => i % 2 !==0).map(e => e *2).sort((a, b) => b - a);
    console.log(arr);
}

solve([10, 15, 20, 25]);