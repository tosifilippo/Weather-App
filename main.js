(()=>{const e=document.getElementById("text"),t=document.getElementById("submit"),n=document.getElementById("display");async function a(e){const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e},&APPID=517bdda0ae62f37b25ca4c3e3a3cc910&units=metric`,{mode:"cors"}),a=await t.json();console.log(a);const i=a.weather[0].description.toUpperCase(),c=a.name.toUpperCase(),{temp:d}=a.main,m=a.main.feels_like,o=a.wind.speed,{humidity:s}=a.main;n.innerHTML=`${i}<br>${c}<br>${d}°C <br> Feels like: ${m}°C<br>Wind: ${o} Km/h<br>Humidity: ${s}%`}t.addEventListener("click",(()=>{a(e.value)})),a("Pescantina")})();