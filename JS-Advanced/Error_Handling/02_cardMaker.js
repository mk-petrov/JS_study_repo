function makeCard(face, suit) {
    const validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    if(!validFaces.includes(face)){
        throw new Error('Invalid face');
    }
    if(!validSuits.includes(suit)){
        throw new Error('Invalid suit');
    }
    
    let card = {
        face: face,
        suit: suit,
        toString: () => {
            let suitToChar = {
                'S': "\u2660",
                'H': "\u2665",
                'D': "\u2666",
                'C': "\u2663"
            };
            return `${card.face}${suitToChar[card.suit]}`
        }
    };

    return card;
}

/*let card = makeCard('A', 'S');
let card1 = makeCard('J', 'H');
let card2 = makeCard('2', 'D');
console.log('' + card);
console.log('' + card1);
console.log('' + card2);

try {
    let card3 = makeCard('1', 'S');
    console.log('' + card3)
} catch (err) {
    console.error('Message: ' + err.message);
    console.error('Name: ' + err.name);
    console.error('Stack: ' + err.stack);
} finally {
    // in try block - open a socket for communication and other logic
    // in catch block - handles error
    // in finally block close the socket to prevent resource leaking
}*/

module.exports = {makeCard};