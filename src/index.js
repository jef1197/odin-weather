const apiKey = '13cff259275e4dfe9a0155838211603';

const cityName = document.getElementById('cityName');
const temphValue = document.getElementById('temp');
const conditionhValue = document.getElementById('condition')
const conditionimg = document.querySelector('img');

const tempHighValue = document.getElementById('tempHigh')
const tempLowValue = document.getElementById('tempLow');
const windValue = document.getElementById('wind');

const moreInfo = document.getElementById('moreInfo');
const feelsLikeValue = document.getElementById('feelsLike')
const humidityValue = document.getElementById('humidity');
const rainValue = document.getElementById('rain');

const sunsetValue = document.getElementById('sunset')
const sunriseValue = document.getElementById('sunrise');
const visibilityValue = document.getElementById('visibility');

const form = document.querySelector('form');
const button = document.querySelector('button');
const toggleC = document.getElementById('Cel');
const toggleF = document.getElementById('Fah');

let newCity = "toronto";
let tempType = "C";
toggleC.style.fontWeight = "700"
toggleF.style.fontWeight = "300"

form.addEventListener('submit', handlesubmit);
button.addEventListener('click', handlesubmit);

toggleC.addEventListener('click', function () {
    tempType = "C"
    toggleC.style.fontWeight = "700"
    toggleF.style.fontWeight = "300"
    getCity(newCity);
});

toggleF.addEventListener('click', function(){
    tempType = "F"
    toggleC.style.fontWeight = "300"
    toggleF.style.fontWeight = "700"
    getCity(newCity);
});

async function getCity(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`, {
        mode: 'cors'
    });
    try {
        const cityInfo = await response.json();
        if (cityInfo.error) {
            alert(cityInfo.error.message);
        }
        displayWeather(cityInfo);
    } catch (error) {
        console.error("error" + error);
    }
}

function displayWeather(data) {
    let city = data.location.name +" Weather";
    let condition = data.current.condition.text;
    let conditionPNG = data.current.condition.icon;

    displayTemp(data)
    cityName.innerHTML = city;
    conditionhValue.innerHTML = condition;
    conditionimg.src = conditionPNG;
}

function displayTemp(data){
    let humidity = data.current.humidity;
    let sunrise = data.forecast.forecastday[0].astro.sunrise;
    let sunset = data.forecast.forecastday[0].astro.sunset;
    let chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
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
        f: data.current.feelslike_f
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
            temphValue.innerHTML = `${temp.c}&degC`;

            tempHighValue.innerHTML = `<b>High: </b> ${highTemp.c}&degC`;
            tempLowValue.innerHTML = `<b>Low: </b> ${lowTemp.c}&degC`;
            windValue.innerHTML = `<b>Wind: </b> ${windK.k} km/hr`;

            feelsLikeValue.innerHTML = `${feelsLike.c}&degC`
            humidityValue.innerHTML = `${humidity}%`
            rainValue.innerHTML = `${chanceOfRain}%`

            sunriseValue.innerHTML = sunrise
            sunsetValue.innerHTML = sunset
            visibilityValue.innerHTML = `${visibility.k} km `

            break;
        case "F":
            temphValue.innerHTML = `${temp.f}&degF`;

            tempHighValue.innerHTML = `<b>High: </b> ${highTemp.f}&degF`;
            tempLowValue.innerHTML = `<b>Low: </b> ${lowTemp.f}&degF`;
            windValue.innerHTML = `<b>Wind: </b> ${windK.m} mi/hr`;

            feelsLikeValue.innerHTML = `${feelsLike.f}&degF`
            humidityValue.innerHTML = `${humidity}%`
            rainValue.innerHTML = `${chanceOfRain}%`

            sunriseValue.innerHTML = sunrise
            sunsetValue.innerHTML = sunset
            visibilityValue.innerHTML = `${visibility.m} mi `

            break;
    }
}


function handlesubmit(e) {
    e.preventDefault();
    const input = document.querySelector('input[type="text"]')

    if(input.value){
        newCity = input.value;
        getCity(newCity);
        form.reset();
    }else {
        alert("Please Enter a City Name")
    }

}

window.onload = getCity(newCity);