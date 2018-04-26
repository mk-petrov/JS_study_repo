function solution() {

    let vectorObj = {

        'add': function (vector1, vector2) {

            return [vector1[0] + vector2[0], vector1[1] + vector2[1]];
        },
        'multiply': function (vector1, scalar) {

            return [vector1[0] * scalar, vector1[1] * scalar];
        },
        'length': function (vector) {

            return Math.sqrt((vector[0] * vector[0]) + (vector[1] * vector[1]));
        },
        'dot': function (vector1, vector2) {

            return ((vector1[0] * vector2[0]) + (vector1[1] * vector2[1]));
        },
        'cross': function (vector1, vector2) {

            return ((vector1[0] * vector2[1]) - (vector1[1] * vector2[0]));
        }
    };

    return vectorObj;
}

console.log(solution().add([1, 1], [1, 0]));
console.log(solution().multiply([3.5, -2], 2));
console.log(solution().length([3, -4]));
console.log(solution().dot([1, 0], [0, -1]));
console.log(solution().cross([3, 7], [1, 0]));


//Simple exercise
// function solve() {
//     let kim = {
//         age: 18,
//         name: 'Kim',
//         'say': function () {
//             return (`${this.name} says hi!`);
//         },
//         'bye': function (word) {
//             return 'Good bye ' + word + '!';
//         }
//     };
//     return kim;
// }
//
// console.log(solve().name);
// console.log(solve().age);
// console.log(solve().say());
// console.log(solve().bye('now'));