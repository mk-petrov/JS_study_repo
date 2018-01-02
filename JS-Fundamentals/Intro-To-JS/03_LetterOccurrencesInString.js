function solve(word, letter) {
    let count = 0;
    for (let i of word){
        if (i === letter){
            count++;
        }
    }
    console.log(count);
}

solve('hellllo', 'l');

