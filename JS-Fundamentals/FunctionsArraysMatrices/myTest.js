function solve(arr) {
    let [val1, val2, val3] = arr;

    let myVal = (str, n) => (str + '*'.repeat(n));

    for (let i = 1; i <= arr.length; i++) {
        let current = myVal(arr[i], i);

        console.log(current);
    }




}

solve(['Same', 'Some', 'Seed']);