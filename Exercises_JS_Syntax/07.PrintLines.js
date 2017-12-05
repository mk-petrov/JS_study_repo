function solve(lines) {
    for (let i = 0; i < lines.length; i++){
        let currentLine = lines[i];
        if (currentLine === 'Stop'){
            break;
        }
        console.log(currentLine);
    }
}

solve([
    'Line 1',
    'Line 2',
    'Line 3',
    '6',
    'Some other text',
    'Stop',
    'Line 5',
    '3'
]);