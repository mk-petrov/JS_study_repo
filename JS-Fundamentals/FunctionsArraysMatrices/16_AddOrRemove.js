function solve(args) {
    let count = 0;
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        let command = args[i];
        count++;
        switch (command){
            case 'add':
                arr.push(count);
                break;
            case 'remove':
                arr.pop();
                break;
        }
    }
    if(arr.length === 0){
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);