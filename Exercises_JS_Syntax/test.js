// the last line of the array will be the needed key from sentence

function solve(args){
    let keyword = args[args.length - 1];

    for (let i = 0; i < args.length - 1; i++) {
        let currentLine = args[i];
        let tokens = currentLine.split(' ');

        for (let i = 0; i < tokens.length; i++) {
            let currentWord = tokens[i];

            if (keyword === currentWord) {
                console.log(currentLine);
            }
        }

    }
}

solve([
    'same thing',
    'some new files',
    'add new content',
    'content'
]);
