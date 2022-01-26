const apiKey = '13cff259275e4dfe9a0155838211603';
const cityName = document.querySelector('h1');
const temph2 = document.querySelector('h2');
const conditionh3 = document.querySelector('h3')
const conditionimg = document.querySelector('img');
const highLowP = document.getElementById('highLow');
const moreInfo = document.getElementById('moreInfo');
const form = document.querySelector('form');
const button = document.querySelector('button');
const toggleC = document.getElementById('Cel');
const toggleF = document.getElementById('Fah');

let newCity = "toronto";
let tempType = "F";

form.addEventListener('submit', handlesubmit);
button.addEventListener('click', handlesubmit);

toggleC.addEventListener('click', function () {
    tempType = "C"
    getCity(newCity);
});

toggleF.addEventListener('click', function(){
    tempType = "F"
    getCity(newCity);
});

async function getCity(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`, {
        mode: 'cors'
    });
    try {
        const cityInfo = await response.json();
        if (cityInfo.error) {
            alert(cityInfo.error.message);
        }
        console.log(cityInfo + "gay");
        displayWeather(cityInfo);
    } catch (error) {
        console.error("error" + error);
    }
}

function displayWeather(data) {
    let city = data.location.name;
    let condition = data.current.condition.text;
    let conditionPNG = data.current.condition.icon;

    displayTemp(data)
    cityName.innerHTML = city;
    conditionh3.innerHTML = condition;
    conditionimg.src = conditionPNG;
}

function displayTemp(data){
    let humidity = data.current.humidity;
    let sunrise = data.forecast.forecastday[0].astro.sunrise;
    let sunset = data.forecast.forecastday[0].astro.sunset;
    let chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
    console.log(chanceOfRain)
    let temp = {
        c: data.current.temp_c,
        f: data.current.temp_f
    };
    let highTemp = {
        c: data.forecast.forecastday[0].day.maxtemp_c,
        f: data.forecast.forecastday[0].day.maxtemp_f
    };
    let lowTemp = {
        c: data.forecast.forecastday[0].day.mintemp_c,
        f: data.forecast.forecastday[0].day.mintemp_f
    };
    let feelsLike = {
        c: data.current.feelslike_c,
        f: data.current.feelslike_c
    };
    let windK = {
        k: data.current.wind_kph,
        m: data.current.wind_mph
    };
    let visibility = {
        k: data.current.vis_km,
        m: data.current.vis_miles
    };

    switch (tempType) {
        case "C":
            temph2.innerHTML = `${temp.c}&degC`;
            highLowP.innerHTML = `H:${highTemp.c}&degC | L:${lowTemp.c}&degC`;
            moreInfo.innerHTML = `Feels Like: ${feelsLike.c}&degC | Wind: ${windK.k} km/hr | Humidity: ${humidity}% |
            Visibility: ${visibility.k} km <br> Sunrise: ${sunrise} | Sunset: ${sunset} | Chance of rain: ${chanceOfRain}%`;
            break;
        case "F":
            temph2.innerHTML = `${temp.f}&degF`;
            highLowP.innerHTML = `H:${highTemp.f}&degF | L:${lowTemp.f}&degF`;
            moreInfo.innerHTML = `Feels Like: ${feelsLike.f}&degF | Wind: ${windK.m} m/hr | Humidity: ${humidity}% |
            Visibility: ${visibility.m} miles <br> Sunrise: ${sunrise} | Sunset: ${sunset} | Chance of rain: ${chanceOfRain}%`;
    }
}


function handlesubmit(e) {
    e.preventDefault();
    const input = document.querySelector('input[type="text"]')
    newCity = input.value;
    getCity(newCity);
    form.reset();
}

window.onload = getCity(newCity);