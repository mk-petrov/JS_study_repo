let Suits = {
    SPADES: '♠',
    HEARTS: '♥',
    DIAMONDS: '♣',
    CLUBS: '♦'
};

class Card {
    get face() {
        return this._face;
    }

    set face(value) {
        const validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

        if(!validFaces.includes(value)){
            throw new RangeError('Invalid face value');
        }
        this._face = value;
    }

    get suit() {
        return this._suit;
    }

    set suit(value) {
        if(!Object.keys(Suits).map(k => Suits[k]).includes(value)){
            throw new RangeError('Invalid suit')
        }
        this._suit = value;
    }
    constructor(face, suit){
        this.face = face;
        this.suit = suit;
    }

    toString(){
        return this.face + this.suit;
    }
}

let c1 = new Card('Q', Suits.SPADES);

console.log('' + c1);

//c1.suit = Suits.SHINY; // will throw an exception
console.log('' + c1);

c1._suit = Suits.SHINY; // will work :D and return undefined, because there is not such a key in the Suits object
console.log('' + c1);
