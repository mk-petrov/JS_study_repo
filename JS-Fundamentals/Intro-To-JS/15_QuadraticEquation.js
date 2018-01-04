function solve(a, b, c){
    let d = (b * b) - (4 * a *c);

    if(d > 0){
        let result1 = (-b + Math.sqrt(d)) / (2 * a);
        let result2 = (-b - Math.sqrt(d)) / (2 * a);

        console.log(Math.min(result1, result2));
        console.log(Math.max(result1, result2));

    } else if(d == 0){
        let result = -b / (2 * a);
        console.log(result);
    } else {
        console.log('The equation has no real roots');
    }
}

solve(1, -12, 36);
solve(6, 11, -35);
solve(5, 2, 1);