function daysInMonth(args) {
    let year = args[2];
    let month = args[1] - 1;       // needed the month before
    return new Date(year, month, 0).getDate();
}

console.log(daysInMonth([17, 3, 2002]));
console.log(daysInMonth([13, 12, 2004]));
console.log(daysInMonth([13, 1, 2004]));