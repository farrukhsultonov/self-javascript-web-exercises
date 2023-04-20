function geocode(search, token) {
    // api url
    let baseUrl = 'https://api.mapbox.com';
    // the endpoint when I request lgn and lat on location name
    let endPoint = '/geocoding/v5/mapbox.places/';
    // this fetch takes in an url endpoint that will return my lng and lat
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}