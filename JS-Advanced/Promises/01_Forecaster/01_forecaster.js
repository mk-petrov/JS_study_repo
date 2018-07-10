window.onload = () => {

    const baseURL = 'https://judgetests.firebaseio.com/';

    // DOM elements
    let getWeather = document.querySelector('#submit');
    let locationInput = document.querySelector('#location');
    let forecast = document.querySelector('#forecast');
    let currForecast = $('#current');
    let upcoming = $('#upcoming');


    // Attach event listeners
    getWeather.addEventListener('click', loadLocations);


    //Program logic

    function request(endpoint) {
        return $.ajax({
           url: baseURL + endpoint
        });
    }

    function loadLocations() {
        upcoming.empty();
        currForecast.empty();

        request('locations.json')
            .then((filterData))
            .catch(processError);

    }

    function filterData(data) {
        for (let locationData of data){
            if (locationData.name === locationInput.value){
                loadLocationData(locationData);
            }
        }
    }
    
    function loadLocationData(location) {
        let codeOfLocation = location.code;
        let todayForecast = request(`forecast/today/${codeOfLocation}.json`);
        let upcomingForecast = request(`forecast/upcoming/${codeOfLocation}.json`);

        Promise.all([todayForecast, upcomingForecast])
            .then(displayInfo)
            .catch(processError);

    }

    function displayInfo(locationData) {
        forecast.style.display = 'block';
        let symbolDegrees = '&#176;';

        // UPDATE CURRENT FORECAST
        currForecast.append($('<div class="label">Current conditions</div>'));
        let weatherCondition = locationData[0].forecast.condition;
        currForecast.append($(`<span class="condition symbol">${displaySymbol(weatherCondition)}</span>`));
        let conditions = $('<span class="condition">');
        conditions.append($(`<span class="forecast-data">${locationData[0].name}</span>`));
        conditions.append($(`<span class="forecast-data">${locationData[0].forecast.low}${symbolDegrees}/${locationData[0].forecast.high}${symbolDegrees}</span>`));
        conditions.append($(`<span class="forecast-data">${weatherCondition}</span>`));
        currForecast.append(conditions);

        // UPDATE UPCOMING FORECAST
        upcoming.append($('<div class="label">Three-day forecast</div>'));
        for (let i = 0; i < locationData[1].forecast.length; i++){
            let weatherCondition = locationData[1].forecast[i].condition;
            let upcomingSpan = $('<span class="upcoming">');
            upcomingSpan.append($(`<span class="symbol">${displaySymbol(weatherCondition)}</span>`));
            upcomingSpan.append($(`<span class="forecast-data">${locationData[1].forecast[i].low}${symbolDegrees}/${locationData[1].forecast[i].high}${symbolDegrees}</span>`));
            upcomingSpan.append($(`<span class="forecast-data">${locationData[1].forecast[i].condition}</span>`));
            upcoming.append(upcomingSpan);
        }
    }

    function displaySymbol(condition) {
        let symbol = '';

        switch (condition){
            case 'Sunny': symbol = '&#x2600;'; break;
            case 'Partly sunny': symbol = '&#x26C5;'; break;
            case 'Overcast': symbol = '&#x2601;'; break;
            case 'Rain': symbol = '&#x2614; '; break;
        }

        return symbol;
    }

    function processError(reason) {
        document.body.innerHTML += `<h1>Error: ${reason.statusText}</h1>`;
    }

};