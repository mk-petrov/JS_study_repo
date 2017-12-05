function solved(x, y) {
    let result = multiply(x, y);

    console.log(result);
}
function multiply(a, b) {
    a = a || 1;
    b = b || 1;    // to prevent case 0 and NaN result

    return a * b;
}

solved(6, 10);

