class Rat {
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
        if(otherRat.constructor.name !== 'Rat') return;   //if(otherRat instanceof Rat)
        this.unitedRats.push(otherRat);
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        if(this.unitedRats.length === 0){
            return this.name;
        } else {
            return `${this.name}\n##${this.unitedRats.join('\n##')}`;
        }
         //\n${this.unitedRats}
    }
}

let test = new Rat('Pesho');
console.log('' + test);
console.log(test.getRats());
test.unite(new Rat('Gosho'));
test.unite(new Rat('Sasho'));
test.unite(new Function('Emo')); // it's not a Rat class will be ignored
console.log(test.getRats());
console.log(test.toString());