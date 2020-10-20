function displayTemperature(response) {
console.log(response.data);
    let temperatureElement= document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");



    cityElement.innerHTML=response.data.name;
    temperatureElement.innerHTML= Math.round (response.data.main.temp);
    descriptionElement.innerHTML= response.data.weather[0].description;
    humidityElement.innerHTML= response.data.main.humidity;
    windElement.innerHTML= Math.round (response.data.wind.speed);

}

let apiKey ="ca4ff62b82ce5d50cb085203c2cfa005";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);