let myf = {
    name: 'NAME',
    func: (string) =>{console.log('Some ' + string);}

};
let myf2 = Object.create(myf);
myf2.name = 'noName';

myf.func('text');
myf2.func('test');

myf2.__proto__.func = (string) => {console.log('My text | ' + string)};


myf.func('text1');
myf2.func('test1');
console.log('----------------');

let arr = [1, 2, 3];
//overrides objects method
arr.toString = function () {return this.join('\n')};

console.log('' + arr); // or console.log(arr.toString());

