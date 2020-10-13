let now = new Date();
let h2 = document.querySelector("h2");
let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours <10) {
 hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
 minutes = `0${minutes}`;
}

h2.innerHTML = `${day}, ${hours}:${minutes}`;

function displayWeatherCondition(response) {
 event.preventDefault();
 document.querySelector("#city").innerHTML = response.data.name;
 document.querySelector("#temperature").innerHTML = Math.round(
     response.data.main.temp
 );
document.querySelector("#description").innerHTML =
 response.data.weather[0].main;
document.querySelector("#humidity").innerHTML =
 response.data.main.humidity;
document.querySelector("#wind").innerHTML = Math.round(
 response.data.wind.speed   
);
}

function searchCity(city) {
    let apiKey = "09e17948a820fd836c62a5a99739be66";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSumbit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSumbit);
function searchLocation(position) {
    let apiKey = "09e17948a820fd836c62a5a99739be66";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector(
    "#current-location-button"
);
currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity("Dallas");