const text = document.getElementById('text');
const submit = document.getElementById('submit');
const display = document.getElementById('display');
const form = document.getElementById('form');

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
  display.innerHTML = `${description}<br>${city}, ${country}<br>${temp}°C <br> Feels like: ${feelsLike}°C<br>Wind: ${wind} Km/h<br>Humidity: ${humidity}%`;
}

function handleSubmit(e) {
  e.preventDefault();
  getWeather(text.value);
}

submit.addEventListener('click', handleSubmit);
form.addEventListener('submit', handleSubmit);

getWeather('Pescantina');
