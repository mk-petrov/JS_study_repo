let arr = [1, 2, 3];
let name = 'Ina Jones';
arr.push(4);

console.log(arr.join('%'));   // 1%2%3%4

console.log(name.split(' '));   // ['Ina', 'Jones']

let lastElement = arr.pop();

console.log(lastElement);
console.log(arr);

arr.unshift(0);                // 0, 1, 2, 3
console.log(arr);

let firstElement = arr.shift();    // 0
console.log(arr);              // 1, 2, 3

arr.splice(2, 1, 'Pesho', 8);   // from the 2 element, delete 1 and add 'Pesho' and 8
console.log(arr);      // 1, 2, 'Pesho', 8

// RETURNS the deleted elements
let removed = arr.splice(2,2);   // can be used only to delete from X-index Y-elemetns

console.log(arr);   // 1, 2
console.log(removed);   // 'Pesho', 8