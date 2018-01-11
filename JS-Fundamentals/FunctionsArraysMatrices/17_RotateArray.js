function rotateArray(args) {
    let n = Number(args.splice(-1, 1));
    // to protect cases like: 150000000000 times rotation
    if(n > args.length){
        n = n % args.length;
    }

    for (let i = 0; i < n; i++) {
        let value = args.splice(-1, 1);
        args.unshift(value);
    }

    console.log(args.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);