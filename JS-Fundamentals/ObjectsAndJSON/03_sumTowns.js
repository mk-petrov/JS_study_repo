function sumTowns(strArr) {
    let towns = {};

    for (let i = 0; i < strArr.length; i+=2) {
        let town = strArr[i];
        let value = Number(strArr[i + 1]);

        //if not contains key - create it
        if(!towns.hasOwnProperty(town)){    //if (towns[town] == undefined)
            towns[town] = 0;
        }

        //not towns.town because will try to reach the town property, not the value behind it
        towns[town] += value;
    }

    console.log(JSON.stringify(towns));
}

sumTowns([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);