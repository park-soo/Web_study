// const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:last-child");

const weather = $("#weather span").first();
const city = $("#weather span").last();

const API_KEY = "38e86f0e539257fe1dde4d32b1aa2281";

navigator.geolocation.getCurrentPosition(goeOk, geoErr);

function goeOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // city.innerText = data.name;
            // weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
            let todayWeather = data.weather[0].main;
            let weImg = "sunny.jpg";
            if (todayWeather == "Clouds") {
                weImg = "cloud1.jpg";
            } else if (todayWeather == "Rain") {
                weImg = "rainny.jpg";
            }
            $("#weather").prepend(`<img src = "img/${weImg}" alt="weather" style="width:30px; height:30px;">`);
            city.text(data.name);
            weather.text(`${data.weather[0].main}/${data.main.temp}`);
        });
}

function geoErr() {
    alert("can't find you. No weather info");
}
