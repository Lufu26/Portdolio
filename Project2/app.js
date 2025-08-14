const apiKey = "8bfb4cc29e3c8ea2cab18f5e2cbe0ffb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?qunits=metric&q=nairobi";
async function checkWeather() {
       const response = await fetch(apiUrl + `&appid = ${apiKey}`);
       var data = await response.json();

        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = data.main.temp + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.temp').innerHTML = data.wind.speed + "km/h";
                }
checkWeather();