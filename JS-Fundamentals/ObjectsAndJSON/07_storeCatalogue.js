function orderProducts(args) {
    let products = [];
    for (let input of args) {
        let tokens = input.split(' : ').filter(e => e !== '');
        let prodName = tokens[0];
        let prodPrice = Number(tokens[1]);

        let obj = {
            name: prodName,
            price: prodPrice
        };

        products.push(obj);
        products.sort((a, b) => b.name < a.name);
    }
    let initials = [];

    for (let obj of products) {
        let separator = obj.name[0];

        if(!initials.includes(separator)){
            console.log(separator);
        }
        console.log(`  ${obj.name}: ${obj.price}`);

        initials.push(separator);
    }
    console.log(initials.join('|'));
}

orderProducts([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);