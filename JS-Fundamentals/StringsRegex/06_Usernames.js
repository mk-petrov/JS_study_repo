function solve(arr) {
    let result = arr.map(s => s.split('@'));
    result = result.map(([user, domain]) => user + '.' + domain.split('.').map(s => s[0]).join(''));

    console.log(result);
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);