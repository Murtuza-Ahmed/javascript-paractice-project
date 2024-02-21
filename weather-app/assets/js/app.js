const inputBox = document.querySelector(".input-box");
const searchButton = document.querySelector("button");
const weatherImage = document.querySelector(".sun-cloud");
const temperature = document.querySelector(".temperature");
const discripption = document.querySelector(".discription");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

async function checkWeather(city) {
    const api_key = "3a277e90a743f332915b0088b6568216";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    

}

searchButton.onclick = () => {
    let inputValue = inputBox.value;
    checkWeather(inputValue);
};