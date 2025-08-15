// app.js

const apiKey = "8bfb4cc29e3c8ea2cab18f5e2cbe0ffb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function weatherCheck (city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    if(data.weather[0].main == "clouds") {
        weatherIcon.src = "rainy-day.png";
    }
    else if(data.weather[0].main == "clear") {
        weatherIcon.src = "sun.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "rainy-day.png";
    }

    else if (data.weather[0] == "Drizzle") {
        weatherIcon.src = "cloudy.png";
    }

    else if (data.weather[0] == "Mist") {
        weatherIcon.src = "cloud(1).png"
    }
}
searchBtn.addEventListener("click", () =>{
weatherCheck(searchBox.value);
})
