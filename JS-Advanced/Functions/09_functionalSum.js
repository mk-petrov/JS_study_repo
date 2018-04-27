let add = (function() {
    let sum = 0;

    return function solve(number) {
        sum += number;

        //Overwrite toString func to return the sum when i call it later on;
        add.toString = function () {
            return sum;
        };

        return add;       //without invoking the function, no '()' needed;
    }
})();

console.log(add(1)(6)(-3).toString());