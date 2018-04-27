function solve(name, age, weight, height) {
    let bmi = Math.round(weight / Math.pow(height / 100, 2));
    let status ='';

    function calculateStatus(data) {
        if(data < 18.5){
            status = 'underweight';
        } else if(data < 25){
            status = 'normal';
        } else if(data < 30){
            status = 'overweight';
        } else {
            status = 'obese';
        }

        return status;
    }

    status = calculateStatus(bmi);

    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        // Body Mass Index
        BMI: bmi,
        status:status
    };

    if(status === 'obese'){
        patient['recommendation'] = 'admission required'
    }

    return patient;
}

console.log(solve('Peter', 29, 74, 175));
console.log(solve('Kremena', 27, 60, 172));
console.log(solve('Peter', 12, 57, 137));
