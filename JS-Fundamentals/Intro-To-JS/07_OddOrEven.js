function oddEven(num) {
    if(num % 2 == 0){
        console.log('even');
    } else if (num == Math.round(num)){
        console.log('odd');
    } else {
        console.log('invalid');
    }
}

oddEven(5.0);
oddEven(6);
oddEven(5.1);

// some Math rounding
function diff(n) {
    let a = Math.ceil(n);
    let b = Math.floor(n);
    let c = Math.round(n);

    console.log(`${a} | ${b} | ${c}`);
}
diff(5.1);
diff(5.5);
diff(5.6);