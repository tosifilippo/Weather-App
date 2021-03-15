async function getWeather(location) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=517bdda0ae62f37b25ca4c3e3a3cc910`, { mode: 'cors' });
  const weatherData = await response.json();
  // eslint-disable-next-line no-console
  console.log(weatherData);
}
getWeather('Pescantina');
