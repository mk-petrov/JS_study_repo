let Record = (function () {
    let id = 0;
    return class Record {
        constructor(temp, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = temp;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        get status() {
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25){
                return 'Stormy';
            }

            return 'Not stormy';
        }

        toString(){
            let result = `Reading ID: ${this.id}\n`;
            result += `Temperature: ${this.temperature}*C\n`;
            result += `Relative Humidity: ${this.humidity}%\n`;
            result += `Pressure: ${this.pressure}hpa\n`;
            result += `Wind Speed: ${this.windSpeed}m/s\n`;
            result += `Weather: ${this.status}`;
            return result;
        }
    }
})();

let record1 = new Record(32, 62, 760, 12);
console.log(record1.toString());