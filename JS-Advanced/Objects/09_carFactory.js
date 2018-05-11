function makeCar(clientOrder) {
    let car = {};
    let engine;

    if(clientOrder.power <= 90){
        engine = {
            power: 90,
            volume: 1800
        }
    } else if(clientOrder.power <= 120){
        engine = {
            power: 120,
            volume: 2400
        }
    } else if(clientOrder.power <= 200){
        engine = {
            power: 200,
            volume: 3500
        }
    }

    let wheels = [];
    if(clientOrder.wheelsize % 2 === 0){
        clientOrder.wheelsize--;
    }

    for (let i = 0; i < 4; i++) {
        wheels.push(clientOrder.wheelsize);
    }

    car.model = clientOrder.model;
    car.engine = engine;
    car.carriage = {
        type: clientOrder.carriage,
        color: clientOrder.color
    };
    car.wheels = wheels;

    return car;
}

console.log(makeCar({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(makeCar({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));