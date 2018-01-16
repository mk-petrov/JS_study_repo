//JS function that extracts and prints only the text that’s surrounded by parentheses.

function extract(text) {
    let result = [];
    let open = text.indexOf('(');

    while (open !== -1){
        let close = text.indexOf(')', open + 1);
        if(close === -1) break;
        result.push(text.substring(open + 1, close));

        open = text.indexOf('(', close + 1);
    }

    return result.join(', ');
}

console.log(extract('Rakiya (Bulgarian brandy) is self-made ) liquor (alcoholic drink)'));