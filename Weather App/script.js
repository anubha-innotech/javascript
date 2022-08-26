const key = 'ec8639d405fa1d6b4627be380c748341';
let icon = document.getElementById("icon");
let weather = document.getElementById("weather");
let temp = document.getElementById("temp");
let unit = document.getElementById("unit");
let area = document.getElementById("location");
let result = document.querySelector(".result");
let spinner = document.querySelector("#spinner");
// const baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;

function onPositionUpdate(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // document.write("Current position: " + lat + " " + lng);
    spinner.setAttribute("style","display:flex")
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
    .then((data) => {
        return data.json();
        // console.log(data.json());
        
    })
    .then((data) => {
            spinner.setAttribute("style","display:none")

            console.log(data);
            icon.setAttribute('src',`img/${data.weather[0].icon}.png`)
            weather.innerHTML = data.weather[0].description ;
            temp.innerHTML = Math.trunc(data.main.temp - 273) + "&#176";
            unit.innerHTML = "C";
            area.innerHTML = data.name +", "+ data.sys.country;
        })
}
if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(onPositionUpdate);
// else
//     alert("navigator.geolocation is not available");


