function counterClosure(parameter) {
    let counter = 0;
    let increment = parameter ? parameter : 1;

    // if(!parameter){
    //     parameter = 1;
    // }

    return function(){
        console.log(counter += increment);  // counter += parameter
    }
}
//Every reference from this function has own scope and instance of counter
let c = counterClosure(1);
c();
c();
c();
c();
console.log('---------');

let c1 = counterClosure();
c1();
c1();
c1();
c1();
console.log('---------');

//initialize new counter;
let c2 = counterClosure(5);
c2();
c2();
c2();
c2();
console.log('---------');

let c4 = counterClosure();
c4();
c4();
c1();   // example of counter scope;
c2();   // example of counter scope;
c4();
c4();