let makeCard = require('./02_cardMaker').makeCard;

function printDeckOfCards(cardsArr) {

    let deck = [];

    for (let cardAsString of cardsArr) {
        let face = cardAsString.substring(0, cardAsString.length - 1);
        let suit = cardAsString[cardAsString.length - 1];

        try {
            deck.push(makeCard(face, suit));
        } catch (err) {
            console.log(`Invalid card: ${cardAsString}`);
            return;  // to stop the further actions
        }
        //console.log(face, suit);
    }

    return deck.join(' ');
}

//printDeckOfCards(['10H', '2S', '1D']);
//console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
console.log(printDeckOfCards(['AS', '10D', 'XH', '2C']));
