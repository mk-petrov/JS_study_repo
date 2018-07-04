//Promises in JS - objects holding a asynchronous operations: a result which may by available now, in the future, or never
// doc:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

let p = new Promise(function (resolve, reject) {
   //Do an async task and then resolve or reject
    if(/*operation successful*/){
        resolve('Success!');
    } else {  /*operation failed*/
        reject('Failure!');
    }
});

p
    .then(function (result) {
    //process the result when the promise is resolved!
    })
    .catch(function (error) {
       //handle the error when the promise is rejected
    });
