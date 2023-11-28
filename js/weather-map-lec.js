// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
//     .then( data => data.json())
//     .then( currentWeather => console.log(currentWeather));
//
// const weatherOutput = document.querySelector("#forecast");
//
// fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` +
//     `&appid=${OPEN_WEATHER_API_KEY}` +
//     `&units=imperial`)
//     .then( data => data.json())
//     .then( forecast => {
//         console.log(forecast);
//         forecast.list.forEach(weather => {
//             const time = document.createElement("p");
//             const temp = document.createElement("p");
//             time.innerText = weather.dt;
//             temp.innerText = weather.main.temp;
//             weatherOutput.appendChild(time);
//             weatherOutput.appendChild(temp);
//         })
//
//
//     });


const currentWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `id=4726206` +
    `&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
    .then( data => data.json())
.then(currentWeather => {
    const date = new Date(currentWeather.dt * 1000);
    console.log(date);
    console.log(currentWeather)
})

