const text = document.getElementById('text');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const weatherDescriptionPara = document.getElementById('weather-description');
const cityPara = document.getElementById('city');
const temperaturePara = document.getElementById('temperature');
const feelsLikePara = document.getElementById('feels-like');
const windPara = document.getElementById('wind');
const humidityPara = document.getElementById('humidity');
const errorMessage = document.getElementById('error');
const metric = document.getElementById('metric');
const imperial = document.getElementById('imperial');

async function getWeather(location, units) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=517bdda0ae62f37b25ca4c3e3a3cc910&units=${units}`, { mode: 'cors' });
    const weatherData = await response.json();
    errorMessage.hidden = true;
    const description = weatherData.weather[0].description.toUpperCase();
    const city = weatherData.name.toUpperCase();
    const { country } = weatherData.sys;
    const temp = Math.round(weatherData.main.temp);
    const feelsLike = Math.round(weatherData.main.feels_like);
    const wind = Math.round(weatherData.wind.speed);
    const { humidity } = weatherData.main;
    weatherDescriptionPara.innerHTML = description;
    cityPara.innerHTML = `${city}, ${country}`;
    if (metric.checked) {
      temperaturePara.innerHTML = `${temp}°C`;
    } else {
      temperaturePara.innerHTML = `${temp}°F`;
    }
    if (metric.checked) {
      feelsLikePara.innerHTML = `Feels like: ${feelsLike}°C`;
    } else {
      feelsLikePara.innerHTML = `Feels like: ${feelsLike}°F`;
    }
    if (metric.checked) {
      windPara.innerHTML = `Wind: ${wind} Km/h`;
    } else {
      windPara.innerHTML = `Wind: ${wind} Mph`;
    }
    humidityPara.innerHTML = `Humidity: ${humidity}%`;
  } catch (error) {
    errorMessage.hidden = false;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if (metric.checked) {
    getWeather(text.value, metric.id);
  } else {
    getWeather(text.value, imperial.id);
  }
}

function handleRadio() {
  if (metric.checked) {
    getWeather(cityPara.innerHTML, metric.id);
  } else {
    getWeather(cityPara.innerHTML, imperial.id);
  }
}

submit.addEventListener('click', handleSubmit);
form.addEventListener('submit', handleSubmit);
metric.addEventListener('click', handleRadio);
imperial.addEventListener('click', handleRadio);

getWeather('Pescantina', 'metric');
