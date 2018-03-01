function solve(args) {
    let userdata = new Set();

    for (let user of args) {
        userdata.add(user);
    }

    userdata = [...userdata].sort((e, i) => i < e).sort((a, b) => a.length - b.length);
    console.log(userdata);

}

solve([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);