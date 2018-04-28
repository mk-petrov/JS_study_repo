let manager = (function () {
    let stockIngredients = {
        protein: 0,
        carbohydrate: 0,
        fat:0,
        flavour: 0
    };

    let menu = {
        apple: { carbohydrate: 1, flavour: 2},
        coke: { carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function solution(input) {
        let inputTokens = input.split(' ');
        if(inputTokens.length === 1 && inputTokens[0] === 'report'){
            return `protein=${stockIngredients.protein} carbohydrate=${stockIngredients.carbohydrate} ` +
            `fat=${stockIngredients.fat} flavour=${stockIngredients.flavour}`;
        } else {
            let cmd = inputTokens[0];
            let meal = inputTokens[1];
            let quantity = Number(inputTokens[2]);

            switch (cmd) {
                case 'restock':
                    stockIngredients[meal] += quantity;
                    //console.log('Success');
                    return 'Success';
                    break;

                case 'prepare':
                    let isEnoughIngredients = true;
                    let mealToPrepare = menu[meal];

                    //CHECK IF ALL INGREDIENTS ARE ENOUGH
                    for (let microElement in mealToPrepare) {
                        if (mealToPrepare.hasOwnProperty(microElement)) {
                            let microElementQuantity = mealToPrepare[microElement];
                            if (stockIngredients[microElement] < microElementQuantity * quantity) {
                                isEnoughIngredients = false;
                                //console.log(`Error: not enough ${microElement} in stock`);
                                return `Error: not enough ${microElement} in stock`;
                            }
                        }
                    }

                    //SUBTRACT THE NEEDED INGREDIENTS FROM THE STOCK
                    if (isEnoughIngredients) {
                        for (let microElement in mealToPrepare) {
                            if (mealToPrepare.hasOwnProperty(microElement)) {
                                let microElementQuantity = mealToPrepare[microElement];
                                stockIngredients[microElement] -= (microElementQuantity * quantity);
                            }
                        }
                        //console.log('Success');
                        return 'Success';
                    }
                    //return stockIngredients;
                    break;
            }
        }
    }
})();

console.log(manager("restock flavour 50"));
console.log(manager("restock fat 60"));
console.log(manager("restock carbohydrate 80"));
console.log(manager("restock protein 70"));
console.log(manager("prepare cheverme 4"));
console.log(manager("prepare cheverme 2"));
console.log(manager("report"));