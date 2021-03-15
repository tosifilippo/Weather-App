const text = document.getElementById('text');
const submit = document.getElementById('submit');
const display = document.getElementById('display');

async function getWeather(location) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=517bdda0ae62f37b25ca4c3e3a3cc910&units=metric`, { mode: 'cors' });
  const weatherData = await response.json();
  // eslint-disable-next-line no-console
  console.log(weatherData);
  display.innerHTML = `${weatherData.weather[0].description.toUpperCase()}<br>${weatherData.name.toUpperCase()}<br>${weatherData.main.temp}°C <br> Feels like: ${weatherData.main.feels_like}°C<br>Wind: ${weatherData.wind.speed} Km/h<br>Humidity: ${weatherData.main.humidity}%`;
}

submit.addEventListener('click', () => {
  getWeather(text.value);
});

getWeather('Pescantina');
