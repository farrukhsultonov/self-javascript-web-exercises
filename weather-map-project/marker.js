// --------DRAG MARKER WEATHER UPDATES----------

marker.on("dragend", function () {
    marker.setLngLat([marker.getLngLat().lng, marker.getLngLat().lat]);
    map.flyTo({
        center: [marker.getLngLat().lng, marker.getLngLat().lat],
        zoom: 10,
        speed: 1,
        easing(t) {
            return t;
        }
    });
    getWeatherData().then(data => {
        let weatherObjs = parseWeatherData(data);

        let html = renderWeatherData(weatherObjs);
        document.querySelector('#weather-info').innerHTML = html;

    });
    reverseGeocode(marker.getLngLat(), MAPBOX_KEY).then(function (results) {
        document.querySelector("#current-city").innerText = 'Current Location: ' + results;

    });
});

// ----------SEARCH WEATHER UPDATES-----------

document.querySelector('#search-update').addEventListener("click", function (e) {
    e.preventDefault();
    geocode(document.querySelector('#search-place').value, MAPBOX_KEY).then(function (results) {
        marker.setLngLat(results);
        map.flyTo({
            center: [marker.getLngLat().lng, marker.getLngLat().lat],
            zoom: 13,
            speed: 0.8,
            easing(t) {
                return t;
            }
        });
        reverseGeocode(marker.getLngLat(), MAPBOX_KEY).then(function (results) {
            $('#current-city').html('Current Location: ' + results);
        });
    });
    getWeatherData().then(data => {
        let weatherObjs = parseWeatherData(data);

        let html = renderWeatherData(weatherObjs);
        document.querySelector('#weather-info').innerHTML = html;

    });
});