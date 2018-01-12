function printBill(args) {
    let products = args.filter((e, i) => i % 2 == 0);
    let prices = args.filter((e, i) => i % 2 == 1).map(Number);
    console.log(`You purchased ${products.join(', ')} for a total sum of ${prices.reduce((a, b) => a + b)}`);
}

printBill(['Cola', '1.35', 'Pancakes', '2.88']);