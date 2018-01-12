function printLetters(str) {
    for (let s in str) {
        console.log(`str${s} -> ${str[s]}`);
    }
}

printLetters('Hello, World!');