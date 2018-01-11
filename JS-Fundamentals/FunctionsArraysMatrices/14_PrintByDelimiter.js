function solve(args) {
    let delimiter = args.splice(-1, 1);

    console.log(args.join(delimiter));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);