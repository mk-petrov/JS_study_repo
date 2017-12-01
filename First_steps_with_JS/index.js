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

function sumOfTwoNum(params) {
    let firstNum = Number(params[0]);
    let secondNum = Number(params[1]);

    let sum = firstNum + secondNum;
    document.getElementById('sum').innerHTML = sum;
}

sumOfTwoNum(['50', '-25']);

function threeIntegersSum(params) {
    params = params.map(Number);   // like .Select(int.Parse)

    console.log(
        checkForSum(params[0], params[1], params[2]) ||
        checkForSum(params[1], params[2], params[0]) ||
        checkForSum(params[0], params[2], params[1]) ||
        'No'
    );


    function checkForSum(first, second, sum) {
        if(first + second !== sum){
            return false;
        }

        if(first > second){
            [first, second] = [second, first];   //swaps the two numbers
        }

        return `${first} + ${second} = ${sum}`;
    }
}

threeIntegersSum(['8', '15', '7']);

