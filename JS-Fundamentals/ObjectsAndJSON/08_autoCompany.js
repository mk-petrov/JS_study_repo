function solve(args) {
    let register = new Map();

    for (let rows of args) {
        let [brand, model, numberProduced] = rows.split(/\s+\|\s+/);

        numberProduced = Number(numberProduced);

        if(!register.has(brand)){
            register.set(brand, new Map());
        }
        let oldValue = register.get(brand).get(model);
        if(oldValue) {
            numberProduced += oldValue;
        }
        register.get(brand).set(model, numberProduced);

    }
    for (let [brand, models] of register) {
        console.log(brand);

        for (let [model, value] of models) {
            console.log(`###${model} -> ${value}`);
        }
    }

}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);