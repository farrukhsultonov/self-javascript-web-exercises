"use strict";
// ------MAPBOX MANIPULATION------
mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 8,
    center: [-98.4916, 29.4252]
});

let marker = new mapboxgl.Marker();
marker
    .setLngLat([-98.4936, 29.4241])
    .addTo(map)
    .setDraggable(true);


// -------OPEN WEATHER MANIPULATION-------

const getWeatherData = () => {
    let lat = marker.getLngLat().lat;
    let lon = marker.getLngLat().lng;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`;
    return fetch(weatherUrl).then(res => res.json());
}

const getWeek = () => {
    let weekArray = []
    let today = new Date().toDateString();
    weekArray.push(today);
}

const parseWeatherData = (weatherData) => {
    let data = [];
    data.push(weatherData.list[0]);
    data.push(weatherData.list[8]);
    data.push(weatherData.list[15]);
    data.push(weatherData.list[22]);
    data.push(weatherData.list[30]);
    return data;
}

// ------FUNCTION TO RENDER WEATHER INFO------

const renderWeatherData = (weatherData) => {
    let cardHtml = [];
    for (let weatherObj of weatherData) {
        let html = `<div class="card p-2"><h5 class="text-center">${new Date(weatherObj.dt_txt).toDateString()}</h5><p>High: ${weatherObj.main.temp_max}</p><p>Low: ${weatherObj.main.temp_min}</p><p>Description: ${weatherObj.weather[0].description}</p></div>`
        cardHtml.push(html);
    }
    return cardHtml.join(" ");
}

getWeatherData().then(data => {
    let weatherObjs = parseWeatherData(data);

    let html = renderWeatherData(weatherObjs);
    document.querySelector('#weather-info').innerHTML = html;

});