function solve(input) {
    switch (input){
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('Fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('Vegetable');
            break;
        default:
            console.log('unknown');
            break;
    }
}

solve('banana');
solve('pizza');
solve('pepper');
solve('parsley');
solve('grapes');