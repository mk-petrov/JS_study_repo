//first way is with IIFE
//second way is with static function
class Record {
    constructor(temp, humidity, pressure, windSpeed) {
        this.id = Record.getId();
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
    }

    //static functions are not related with the instances, only with the class itself
    static getId() {
        if(!this.id){
            this.id = 0;
        }

        return this.id++;
    }

    get status() {
        if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
            return 'Stormy';
        }

        return 'Not stormy';
    }

    toString() {
        let result = `Reading ID: ${this.id}\n`;
        result += `Temperature: ${this.temperature}*C\n`;
        result += `Relative Humidity: ${this.humidity}%\n`;
        result += `Pressure: ${this.pressure}hpa\n`;
        result += `Wind Speed: ${this.windSpeed}m/s\n`;
        result += `Weather: ${this.status}`;
        return result;
    }
}


let record1 = new Record(32, 62, 760, 12);
console.log(record1.toString());
let record2 = new Record(32, 62, 760, 25);
console.log(record2.toString());
let record3 = new Record(32, 62, 900, 12);
console.log(record3.toString());