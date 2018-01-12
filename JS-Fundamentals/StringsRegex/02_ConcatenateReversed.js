function reverseArray(args) {
    let reversedArrayAsString = args.join('')  // from Array -> string
        .split('')   // From String -> array
        .reverse()   // Reverse the array
        .join('');   // Convert it again as String

    console.log(reversedArrayAsString);
}

reverseArray(['I', 'am', 'student']);
reverseArray(['race', 'car']);