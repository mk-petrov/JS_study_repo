class Melon{
    constructor(weight, melonSort){
        if(new.target === Melon){
            throw new TypeError("Abstract class cannot be instantiated");
        }

        this.weight = Number(weight);
        this.melonSort = melonSort;
        this.element = '';
        this._elementIndex = this.weight * this.melonSort.length;
    }

    get elementIndex(){
        return this._elementIndex;
    }

    toString(){
        let result = `Element: ${this.element}\n`;
        result += `Sort: ${this.melonSort}\n`;
        result += `Element Index: ${this.elementIndex}`;

        return result;
    }
}

class Watermelon extends Melon {
    constructor(weight, melonSort){
        super(weight, melonSort);
        this.element = 'Water';
    }
}

class Firemelon extends Melon {
    constructor(weight, melonSort){
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

class Earthmelon extends Melon {
    constructor(weight, melonSort){
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

class Airmelon extends Melon {
    constructor(weight, melonSort){
        super(weight, melonSort);
        this.element = 'Air';
    }
}

class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort){
        super(weight, melonSort);
        this.element = 'Water';
        this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        this.elIndex = 0;
    }

    morph(){
        //increment the elIndex and divided with '%' by 4(array.length), to stay in array boundaries
        this.element = this.elements[this.elIndex++ % 4];
    }
}

let strangeMelon = new Melolemonmelon(150, 'Strange');
strangeMelon.morph();
console.log(strangeMelon.toString());
strangeMelon.morph();
console.log(strangeMelon.toString());
strangeMelon.morph();
console.log(strangeMelon.toString());