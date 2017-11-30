function calculate() {
    //debugger;
    let firstNumber = Number(document.getElementById("first-num").value);
    let secondNumber = Number(document.getElementById("second-num").value);

    document.getElementById('result').innerHTML = firstNumber + secondNumber;

}

function solve(args) {

    // like: .Select(int.Parse).Sort(ByDescending);
    args = args.map(Number).sort((a, b) => b - a);   // a - b will sort them in ascending order
    let total = Math.min(args.length, 3);            // will take the smallest number from both

    for (let i = 0; i < total; i++){
        console.log(args[i]);
    }

}

solve([
    '10',
    '5',
    '20',
    '50',
    '100'
]);

function onlyCapitalLetters(args) {
    let words = args
        .join(' ').split(/\W+/).filter(w => w.length > 0)
        .filter(w => w === w.toUpperCase()).join(', ');

    console.log(words);
}

onlyCapitalLetters([
    'PHP is great',
    'JS is greater',
    'CSHARP FoReVer'
]);