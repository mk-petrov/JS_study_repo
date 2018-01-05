function createTable(n) {
    let result = '<table border="1">\n';

    for(let col = 0; col <= n; col++){
        let number = col == 0 ? 'x' : col;

        result += `  <tr><td>${number}</td>`;

        for (let row = 1; row <= n; row ++){
            let value = col == 0 ? row : row * col;

            result += `<td>${value}</td>`;
        }

        result += '</tr>\n';
    }

    result += '</table>';

    return(result);
}


