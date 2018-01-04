function printDollars(num) {
    let result = '';
    for (let i = 1; i <= num; i++){
        result += '$';
        console.log(result);
        //console.log('$'.repeat(num));
    }
}

printDollars(8);