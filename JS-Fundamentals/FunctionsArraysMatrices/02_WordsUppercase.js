// Make all uppercase and order by ascending length
function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '').sort((a, b) => (a.length - b.length));

    return words.join(', ');

    function extractWords() {
        return strUpper.split(/\W+/);  // regex non words
    }
}

console.log(wordsUppercase('Hello, my name is Petko.'));
