function numbersAsString(number) {
    let n = Number(number);
    let result = '';

    for(let i = 1; i <= n; i++){
        result += i;
    }

    return result;
}

console.log(numbersAsString(19));