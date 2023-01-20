let apiKey = '*API KEY*';

function fetchWeather(city) {
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='
  + city 
  + '&units=imperial&appid=' 
  + apiKey, true)

  xhr.onload = function() {
    if(xhr.status == 200) {
      let cityWeather = JSON.parse(this.response)
      const name = cityWeather.name;
      const temp = cityWeather.main.temp;
      const humidity = cityWeather.main.humidity;
      const wind = cityWeather.wind.speed;
      const description = cityWeather.weather[0].description;
      const icon = cityWeather.weather[0].icon;
      document.querySelector(".city").innerHTML = "Weather in " + name;
      document.querySelector(".temp").innerHTML = Math.round(temp) + "°F";
      document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerHTML = "Wind Speed: " + wind + " mph";
      document.querySelector(".description").innerHTML = description;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
   }
  }
  xhr.send()
}

btn.addEventListener('click', () => {
  fetchWeather(document.querySelector(".search-bar").value)
});

document.querySelector(".search-bar").addEventListener('keyup', function(event) {
  if (event.key == "Enter") {
    fetchWeather(document.querySelector(".search-bar").value);
  }});

fetchWeather("Houston");

