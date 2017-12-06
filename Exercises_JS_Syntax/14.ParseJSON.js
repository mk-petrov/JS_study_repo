function solve(params) {
    for (let i = 0; i < params.length; i++){
        let object = JSON.parse(params[i]);

        console.log(`${object.name} \n${object.age} \n${object.date}`);
    }
}

solve([
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
]);

