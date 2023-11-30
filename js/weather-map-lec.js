// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
//     .then( data => data.json())
//     .then( currentWeather => console.log(currentWeather));
//
const weatherOutput = document.querySelector("#forecast");

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API_KEY}` +
    `&units=imperial`)
    .then( data => data.json())
    .then( forecast => {
        console.log(forecast);

        // forecast.list.forEach(weather => {
        //     const date = new Date(weather.dt * 1000);
        //     console.log(date.getFullYear);
        //     const time = document.createElement("p");
        //     const temp = document.createElement("p");
        //     time.innerText = date.toLocaleDateString();
        //     temp.innerText = weather.main.temp;
        //     weatherOutput.appendChild(time);
        //     weatherOutput.appendChild(temp);
        // })


        // how to render 5 days of forecast
        const day = forecast.list;

        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i];
            const date = new Date(weather.dt * 1000);
            const time = document.createElement("p");
            const temp = document.createElement("p");
            const humidity = document.createElement("p");
            time.innerText = `the date is ${date.toLocaleDateString()}`;
            temp.innerText = `Temperature ${weather.main.temp}`;
            humidity.innerText = `Humidity ${weather.main.humidity}`;
            weatherOutput.appendChild(time);
            weatherOutput.appendChild(temp);
            weatherOutput.appendChild(humidity);
        }
    });