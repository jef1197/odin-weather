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

eval("const apiKey = '13cff259275e4dfe9a0155838211603';\r\n\r\nconst cityName = document.getElementById('cityName');\r\nconst temphValue = document.getElementById('temp');\r\nconst conditionhValue = document.getElementById('condition')\r\nconst conditionimg = document.querySelector('img');\r\n\r\nconst tempHighValue = document.getElementById('tempHigh')\r\nconst tempLowValue = document.getElementById('tempLow');\r\nconst windValue = document.getElementById('wind');\r\n\r\nconst moreInfo = document.getElementById('moreInfo');\r\nconst feelsLikeValue = document.getElementById('feelsLike')\r\nconst humidityValue = document.getElementById('humidity');\r\nconst rainValue = document.getElementById('rain');\r\n\r\nconst sunsetValue = document.getElementById('sunset')\r\nconst sunriseValue = document.getElementById('sunrise');\r\nconst visibilityValue = document.getElementById('visibility');\r\n\r\nconst form = document.querySelector('form');\r\nconst button = document.querySelector('button');\r\nconst toggleC = document.getElementById('Cel');\r\nconst toggleF = document.getElementById('Fah');\r\n\r\nlet newCity = \"toronto\";\r\nlet tempType = \"C\";\r\ntoggleC.style.fontWeight = \"700\"\r\ntoggleF.style.fontWeight = \"300\"\r\n\r\nform.addEventListener('submit', handlesubmit);\r\nbutton.addEventListener('click', handlesubmit);\r\n\r\ntoggleC.addEventListener('click', function () {\r\n    tempType = \"C\"\r\n    toggleC.style.fontWeight = \"700\"\r\n    toggleF.style.fontWeight = \"300\"\r\n    getCity(newCity);\r\n});\r\n\r\ntoggleF.addEventListener('click', function(){\r\n    tempType = \"F\"\r\n    toggleC.style.fontWeight = \"300\"\r\n    toggleF.style.fontWeight = \"700\"\r\n    getCity(newCity);\r\n});\r\n\r\nasync function getCity(city) {\r\n    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`, {\r\n        mode: 'cors'\r\n    });\r\n    try {\r\n        const cityInfo = await response.json();\r\n        if (cityInfo.error) {\r\n            alert(cityInfo.error.message);\r\n        }\r\n        displayWeather(cityInfo);\r\n    } catch (error) {\r\n        console.error(\"error\" + error);\r\n    }\r\n}\r\n\r\nfunction displayWeather(data) {\r\n    let city = data.location.name +\" Weather\";\r\n    let condition = data.current.condition.text;\r\n    let conditionPNG = data.current.condition.icon;\r\n\r\n    displayTemp(data)\r\n    cityName.innerHTML = city;\r\n    conditionhValue.innerHTML = condition;\r\n    conditionimg.src = conditionPNG;\r\n}\r\n\r\nfunction displayTemp(data){\r\n    let humidity = data.current.humidity;\r\n    let sunrise = data.forecast.forecastday[0].astro.sunrise;\r\n    let sunset = data.forecast.forecastday[0].astro.sunset;\r\n    let chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;\r\n    let temp = {\r\n        c: data.current.temp_c,\r\n        f: data.current.temp_f\r\n    };\r\n    let highTemp = {\r\n        c: data.forecast.forecastday[0].day.maxtemp_c,\r\n        f: data.forecast.forecastday[0].day.maxtemp_f\r\n    };\r\n    let lowTemp = {\r\n        c: data.forecast.forecastday[0].day.mintemp_c,\r\n        f: data.forecast.forecastday[0].day.mintemp_f\r\n    };\r\n    let feelsLike = {\r\n        c: data.current.feelslike_c,\r\n        f: data.current.feelslike_f\r\n    };\r\n    let windK = {\r\n        k: data.current.wind_kph,\r\n        m: data.current.wind_mph\r\n    };\r\n    let visibility = {\r\n        k: data.current.vis_km,\r\n        m: data.current.vis_miles\r\n    };\r\n\r\n    switch (tempType) {\r\n        case \"C\":\r\n            temphValue.innerHTML = `${temp.c}&degC`;\r\n\r\n            tempHighValue.innerHTML = `<b>High: </b> ${highTemp.c}&degC`;\r\n            tempLowValue.innerHTML = `<b>Low: </b> ${lowTemp.c}&degC`;\r\n            windValue.innerHTML = `<b>Wind: </b> ${windK.k} km/hr`;\r\n\r\n            feelsLikeValue.innerHTML = `${feelsLike.c}&degC`\r\n            humidityValue.innerHTML = `${humidity}%`\r\n            rainValue.innerHTML = `${chanceOfRain}%`\r\n\r\n            sunriseValue.innerHTML = sunrise\r\n            sunsetValue.innerHTML = sunset\r\n            visibilityValue.innerHTML = `${visibility.k} km `\r\n\r\n            break;\r\n        case \"F\":\r\n            temphValue.innerHTML = `${temp.f}&degF`;\r\n\r\n            tempHighValue.innerHTML = `<b>High: </b> ${highTemp.f}&degF`;\r\n            tempLowValue.innerHTML = `<b>Low: </b> ${lowTemp.f}&degF`;\r\n            windValue.innerHTML = `<b>Wind: </b> ${windK.m} mi/hr`;\r\n\r\n            feelsLikeValue.innerHTML = `${feelsLike.f}&degF`\r\n            humidityValue.innerHTML = `${humidity}%`\r\n            rainValue.innerHTML = `${chanceOfRain}%`\r\n\r\n            sunriseValue.innerHTML = sunrise\r\n            sunsetValue.innerHTML = sunset\r\n            visibilityValue.innerHTML = `${visibility.m} mi `\r\n\r\n            break;\r\n    }\r\n}\r\n\r\n\r\nfunction handlesubmit(e) {\r\n    e.preventDefault();\r\n    const input = document.querySelector('input[type=\"text\"]')\r\n\r\n    if(input.value){\r\n        newCity = input.value;\r\n        getCity(newCity);\r\n        form.reset();\r\n    }else {\r\n        alert(\"Please Enter a City Name\")\r\n    }\r\n\r\n}\r\n\r\nwindow.onload = getCity(newCity);\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

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