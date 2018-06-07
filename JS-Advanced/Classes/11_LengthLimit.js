class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        if(innerLength < 0){
            this.innerLength = 0;
        } else {
            this.innerLength = innerLength;
        }
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        if(this.innerLength <= length){
            this.innerLength = 0;
            return;
        }
        this.innerLength -= length;
    }

    toString(){
        let dynamicStr = this.innerString.substring(0,this.innerLength);
        return dynamicStr.length === this.innerString.length ? this.innerString : dynamicStr + '...';
    }
}

let str = new Stringer('pesho', -5);
console.log(str);
str.increase(5);
console.log(str);
str.decrease(8);
str.increase(11);
console.log(str);
console.log(str.toString());

/*
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
*/