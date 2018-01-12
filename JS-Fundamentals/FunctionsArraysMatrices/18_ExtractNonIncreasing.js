// extract to keep increasing sequence
function extract(args) {
    let biggest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < args.length; i++) {
        let current = args[i];

        if(biggest <= current){
            biggest = current;
        } else {
            args.splice(i, 1);
            i--;
        }

    }

    console.log(args.join(' '));
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([21, 2, 3, 4]);
extract([-21, -2, -3, 4]);
