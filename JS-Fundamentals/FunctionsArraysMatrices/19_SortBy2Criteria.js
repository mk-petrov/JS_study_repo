function sortByTwo(args) {
    args.sort().sort((a, b) => a.length - b.length);
   //(a, b) => a.toLowerCase() - b.toLowerCase()
    // console.log(a.toLowerCase().length);
    // console.log(a.toUpperCase().length);

    console.log(args.join(' '));
}

sortByTwo(['alpha', 'beta', 'gamma']);
sortByTwo(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George', 'Za', 'Zaazaaazaaaa']);
sortByTwo(['test', 'Deny', 'omen', 'Default']);

