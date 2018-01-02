function solve(args) {
    let sum = 0;
    for (let i of args){
        sum += i;
    }

    console.log(`sum = ${sum.toFixed(2)}`);
    console.log(`VAT = ${(sum * 0.2).toFixed(2)}`);
    console.log(`total = ${(sum * 1.2).toFixed(2)}`);
}

solve([1.20, 2.60, 3.50]);
solve([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);
