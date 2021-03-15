const text = document.getElementById('text');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const weatherDescriptionPara = document.getElementById('weather-description');
const cityPara = document.getElementById('city');
const temperaturePara = document.getElementById('temperature');
const feelsLikePara = document.getElementById('feels-like');
const windPara = document.getElementById('wind');
const humidityPara = document.getElementById('humidity');

async function getWeather(location) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=517bdda0ae62f37b25ca4c3e3a3cc910&units=metric`, { mode: 'cors' });
  const weatherData = await response.json();
  // eslint-disable-next-line no-console
  console.log(weatherData);
  const description = weatherData.weather[0].description.toUpperCase();
  const city = weatherData.name.toUpperCase();
  const { country } = weatherData.sys;
  const { temp } = weatherData.main;
  const feelsLike = weatherData.main.feels_like;
  const wind = weatherData.wind.speed;
  const { humidity } = weatherData.main;
  weatherDescriptionPara.innerHTML = description;
  cityPara.innerHTML = `${city}, ${country}`;
  temperaturePara.innerHTML = `${temp}°C`;
  feelsLikePara.innerHTML = `Feels like: ${feelsLike}°C`;
  windPara.innerHTML = `Wind: ${wind} Km/h`;
  humidityPara.innerHTML = `Humidity: ${humidity}%`;
}

function handleSubmit(e) {
  e.preventDefault();
  getWeather(text.value);
}

submit.addEventListener('click', handleSubmit);
form.addEventListener('submit', handleSubmit);

getWeather('Pescantina');
