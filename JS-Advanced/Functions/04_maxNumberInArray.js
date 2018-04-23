function solve(arr) {
    //Old way
    let max = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) max = arr[i];
    }

    console.log(max);

    //New way
    console.log(Math.max.apply(null, arr));  //Math.max no needs context, so null or {} or undefined are also solutions
}

solve([3, -2, 10, 4]);