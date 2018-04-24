function sortArray(inputArray, sortMethod) {

    let ascendingComparator = function (a, b) {
        return a - b;
    };

    let descendingComparator = function (a, b) {
        return b - a;
    };

    /* Now whenever we need a new sorting method, we can just define it as a separate function
     and add it to this object with its corresponding key. No further change will be necessary. */
    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

    return inputArray.sort(sortingStrategies[sortMethod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));