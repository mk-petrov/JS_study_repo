function uniqueWords(strArr) {
    let unique = new Set();
    let text = strArr.join('\n');
    let words = text.split(/\W+/)
        .filter(e => e !== '')
        .map(e => e.toLowerCase())
        .forEach(e => unique.add(e));

    console.log([...unique].join(', '));
}

uniqueWords([
    'JS devs use Node.js for server-side JS.',
    'JS devs use JS.',
    '-- JS for devs --'
    ]);