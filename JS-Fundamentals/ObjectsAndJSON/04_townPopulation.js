function townPop(strArr) {
    let towns = new Map();
    for (let row of strArr) {
        let [name, pop] = row.split(' <-> ');
        if(!towns.has(name)){
            towns.set(name, 0);
        }

        towns.set(name, towns.get(name) + Number(pop));
    }

    // transforms map to array like: Array.from(map)
    [...towns].forEach(([town, pop]) => console.log(`${town} : ${pop}`));
}

townPop([
    'Varna <-> 40000',
    'Sofia <-> 1200000',
    'Plovdiv <-> 20000',
    'Sofia <-> 100000',
    'Varna <-> 420000',
    'Plovdiv <-> 400000',
    'Plovdiv <-> 50000'
]);