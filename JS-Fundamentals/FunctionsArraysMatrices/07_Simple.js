let maxValue = 2 ** 54;
let maxV = Number.MAX_SAFE_INTEGER;
let maxVal = Number.MAX_VALUE;
console.log(maxValue);
console.log(maxV);
console.log(maxVal);

let arr = [10, 20, 30];
let bigArr = arr.concat([-1, 4]); // if i want to switch both of them: [-1, 4].concat(arr);
let bigArr2 = [-1, 4].concat(arr);
console.log(bigArr);
console.log(bigArr2);

console.log(arr.slice(1, 2));   // return 20, because 2 param is optional and is - 1
console.log(arr.slice(1, arr.length));   // return 20, 30
console.log(arr.slice(-1));  // return 30, with negative index starts from the end
console.log(arr.slice(-2));  // return 20, 30