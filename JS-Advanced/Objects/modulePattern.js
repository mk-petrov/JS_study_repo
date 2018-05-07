// MODULE PATTERN
let moduleObj = {
    count: 0,  // public
    increase: function (num) { return this.count += num },
    decrease: function (num) { return this.count -= num },
    value: function() {return this.count}   // value it is not necessary because count is public
};

moduleObj.count = 2;
console.log(moduleObj.count);

moduleObj.increase(3);
console.log(moduleObj);   // count is already 5;

// MODULE PATTERN WITH CLOSURE
let moduleObj2 = (function () {
    let count = 0; // private
    return {
        increase: (num) => count += num,      // the functions will change the variable count not this
        decrease: (num) => count -= num,
        value: () => count                    // value is necessary because count is private, it's not accessible
    };
})();

console.log(moduleObj2.count);   // undefined (not accessible);
moduleObj2.increase(7);
console.log(moduleObj2.value());  // 7

//REVEALING MODULE PATTERN WITH CLOSURE
let revModule = (function () {
    let count = 0; // private
    function change(amount) { return count += amount; }
    function increase(num) { return change(num); }
    function decrease(num) { return change(-num); }
    function value() { return count; }

    return {increase, decrease, value};   // return an object with public properties
})();

console.log(revModule.count);  //undefined (not accessible);
revModule.increase(5);   // count is 5
revModule.decrease(3);   // count is 2
console.log(revModule.value());   //2