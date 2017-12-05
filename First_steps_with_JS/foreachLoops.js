function solve() {
    let arr = [10, 20, 30];

    // returns the index of the elements
    for (let num in arr){
        console.log(num);
    }

    // returns the values
    for (let num in arr){
        console.log(arr[num]);
    }

    // returns the values in array
    for (let num of arr){
        console.log(num);
    }

    let obj = {
        name: 'Stanko',
        age: 42
    }

    for (let key in obj){
        console.log(key);        // returns the keys in object
        console.log(obj[key]);   // returns the values in object
    }
}

solve();