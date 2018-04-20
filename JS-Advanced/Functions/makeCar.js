function makeCars(engine, cm3, coupe, model) {
    return `Your favorite car is ${model} ${coupe} with ${cm3}cm3 ${engine} engine`;
}

function makeBMW(characteristics) {
    return function (model) {
        return characteristics('benzin', 2500, 'cabrio', model);
    }
}

let bmw = makeBMW(makeCars);
console.log(bmw('6 serie'));