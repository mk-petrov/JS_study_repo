function printRectangle(count = 5) {
    function printStarts(n = count) {
        console.log('*' + ' *'.repeat(n - 1));
    }
    
    for (let i = 1; i <= count; i++) {
        printStarts();
    }
}

printRectangle(3);
printRectangle();
printRectangle(7);