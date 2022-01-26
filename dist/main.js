/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const apiKey = '13cff259275e4dfe9a0155838211603';\r\nconst cityName = document.querySelector('h1');\r\nconst temph2 = document.querySelector('h2');\r\nconst conditionh3 = document.querySelector('h3')\r\nconst conditionimg = document.querySelector('img');\r\nconst highLowP = document.getElementById('highLow');\r\nconst moreInfo = document.getElementById('moreInfo');\r\nconst form = document.querySelector('form');\r\nconst button = document.querySelector('button');\r\nconst toggleC = document.getElementById('Cel');\r\nconst toggleF = document.getElementById('Fah');\r\n\r\nlet newCity = \"toronto\";\r\nlet tempType = \"F\";\r\n\r\nform.addEventListener('submit', handlesubmit);\r\nbutton.addEventListener('click', handlesubmit);\r\n\r\ntoggleC.addEventListener('click', function () {\r\n    tempType = \"C\"\r\n    getCity(newCity);\r\n});\r\n\r\ntoggleF.addEventListener('click', function(){\r\n    tempType = \"F\"\r\n    getCity(newCity);\r\n});\r\n\r\nasync function getCity(city) {\r\n    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`, {\r\n        mode: 'cors'\r\n    });\r\n    try {\r\n        const cityInfo = await response.json();\r\n        if (cityInfo.error) {\r\n            alert(cityInfo.error.message);\r\n        }\r\n        console.log(cityInfo + \"gay\");\r\n        displayWeather(cityInfo);\r\n    } catch (error) {\r\n        console.error(\"error\" + error);\r\n    }\r\n}\r\n\r\nfunction displayWeather(data) {\r\n    let city = data.location.name;\r\n    let condition = data.current.condition.text;\r\n    let conditionPNG = data.current.condition.icon;\r\n\r\n    displayTemp(data)\r\n    cityName.innerHTML = city;\r\n    conditionh3.innerHTML = condition;\r\n    conditionimg.src = conditionPNG;\r\n}\r\n\r\nfunction displayTemp(data){\r\n    let humidity = data.current.humidity;\r\n    let sunrise = data.forecast.forecastday[0].astro.sunrise;\r\n    let sunset = data.forecast.forecastday[0].astro.sunset;\r\n    let chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;\r\n    console.log(chanceOfRain)\r\n    let temp = {\r\n        c: data.current.temp_c,\r\n        f: data.current.temp_f\r\n    };\r\n    let highTemp = {\r\n        c: data.forecast.forecastday[0].day.maxtemp_c,\r\n        f: data.forecast.forecastday[0].day.maxtemp_f\r\n    };\r\n    let lowTemp = {\r\n        c: data.forecast.forecastday[0].day.mintemp_c,\r\n        f: data.forecast.forecastday[0].day.mintemp_f\r\n    };\r\n    let feelsLike = {\r\n        c: data.current.feelslike_c,\r\n        f: data.current.feelslike_c\r\n    };\r\n    let windK = {\r\n        k: data.current.wind_kph,\r\n        m: data.current.wind_mph\r\n    };\r\n    let visibility = {\r\n        k: data.current.vis_km,\r\n        m: data.current.vis_miles\r\n    };\r\n\r\n    switch (tempType) {\r\n        case \"C\":\r\n            temph2.innerHTML = `${temp.c}&degC`;\r\n            highLowP.innerHTML = `H:${highTemp.c}&degC | L:${lowTemp.c}&degC`;\r\n            moreInfo.innerHTML = `Feels Like: ${feelsLike.c}&degC | Wind: ${windK.k} km/hr | Humidity: ${humidity}% |\r\n            Visibility: ${visibility.k} km <br> Sunrise: ${sunrise} | Sunset: ${sunset} | Chance of rain: ${chanceOfRain}%`;\r\n            break;\r\n        case \"F\":\r\n            temph2.innerHTML = `${temp.f}&degF`;\r\n            highLowP.innerHTML = `H:${highTemp.f}&degF | L:${lowTemp.f}&degF`;\r\n            moreInfo.innerHTML = `Feels Like: ${feelsLike.f}&degF | Wind: ${windK.m} m/hr | Humidity: ${humidity}% |\r\n            Visibility: ${visibility.m} miles <br> Sunrise: ${sunrise} | Sunset: ${sunset} | Chance of rain: ${chanceOfRain}%`;\r\n    }\r\n}\r\n\r\n\r\nfunction handlesubmit(e) {\r\n    e.preventDefault();\r\n    const input = document.querySelector('input[type=\"text\"]')\r\n    newCity = input.value;\r\n    getCity(newCity);\r\n    form.reset();\r\n}\r\n\r\nwindow.onload = getCity(newCity);\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;