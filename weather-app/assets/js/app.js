const inputBox = document.querySelector(".input-box");
const searchButton = document.querySelector("button");
const weather_img = document.querySelector(".sun-cloud");
const temperature = document.querySelector(".temperature");
const discripption = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

async function checkWeather(city) {
    const api_key = "3a277e90a743f332915b0088b6568216";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data)

    

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    discripption.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/h`;
    switch (weather_data.weather[0].main) {
        case "Clear":
            weather_img.src = "./assets/image/sun.png"
            break;
        case "Cloud":
            weather_img.src = "./assets/image/suncloud.png"
            break;
        case "Rain":
            weather_img.src = "./assets/image/rain.png"
            break;
        case "Mist":
            weather_img.src = "./assets/image/windspeed.png"
            break;
        case "Snow":
            weather_img.src = "assets/image/thunder.png"
            break;
    }
}

searchButton.onclick = () => {
    let inputValue = inputBox.value;
    checkWeather(inputValue);
};