function solve() {
    let argumentsArray = arguments;
    let argsObj = {};

    for (let i = 0; i < argumentsArray.length; i++) {
        let arg = argumentsArray[i];
        let argType =typeof arg;

        console.log(`${argType}: ${arg}`);

        if(!argsObj[argType]){
            argsObj[argType] = 1;
        } else {
            argsObj[argType]++;
        }
    }
    //Order by descending value and than by appear order 
    function customSort(a, b) {
        return b[1] - a[1];
    }

    let sortedTypes = [];
    for (let currentType in argsObj){
        sortedTypes.push([currentType, argsObj[currentType]]);
    }
    sortedTypes.sort(customSort);

    for (let i = 0; i < sortedTypes.length; i++) {
        console.log(`${sortedTypes[i][0]} = ${sortedTypes[i][1]}`);
    }
}
solve('cat', 42, function () { console.log('Hello world!'); });
//solve('cat', 42, 55, function () { console.log('Hello world!'); });