// Immediately-invoked function expression

(function increment(n) {
    console.log(n + 1);
}) (5);


//here i don't have access to this function, it's out of scope
//increment(5);


//assign to a variable function that returns another function, the nested function is a local variable to the main one
//Closure: function closed in another function
// this can be used like encapsulation in C#
let f = (function (counter) {
    return function () {
        console.log(++counter);
    };
}) (5);

// each time i call the f, the nested function is declared and defined and use new memory if it's not in a closure
f();
f();
f();
f();