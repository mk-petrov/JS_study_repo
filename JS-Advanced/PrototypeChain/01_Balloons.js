function solve(){
    class Balloon {
        constructor (color, gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight);
            this._ribbon = {
                ribbonColor: ribbonColor,
                ribbonLength: ribbonLength
            };
        }

        get ribbon(){
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text(){
            return this._text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}
let Baloon = solve().Balloon;
let PartyBalloon = solve().PartyBalloon;
let BirthdayBalloon = solve().BirthdayBalloon;



let partyBalloon = new PartyBalloon('green', 180, 'purple', 2);
console.log(partyBalloon);
let birthdayBalloon = new BirthdayBalloon('blue', 145, 'yellow', 3, 'Happy Birthday!');
console.log(birthdayBalloon);
console.log(birthdayBalloon.ribbon.ribbonColor);