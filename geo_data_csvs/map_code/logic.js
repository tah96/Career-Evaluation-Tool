var national_data = "national_data.json"
var state_codes =  "state_codes.json"
var state_coords =  "state_coords.json"
var state_data = "state_job_data.json"

const centerLatLng = [39.8283, -98.5795]

var myMap = L.map("map", {
    center: centerLatLng,
    zoom: 5,
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

const lng = []
const lat = []
const state_name = []

d3.json(state_coords, function(coord_data) {
    var stateCoords = coord_data;
    stateCoords.forEach((state) => {
        const long = state.Longitude;
        const lt = state.Latitude;
        const states = state.State
        lng.append(long)
        lat.append(lt)
        state_name.append(states)

    })
});

const lnglat = { lon: lng, lat: lat};

L.marker(lnglat)
    .bindPopup("<h1>" + state_name + "</h1>")
    .addTo(myMap);
    console.log(lnglat)

// filter by search_code from app.js

// for (var i = 0; i < stateCoords.length; i++) {
//     var state = stateCoords[i];
//     // var state_salary = state_data[i];
//     L.marker((state.Latitude, state.Longitude))
//     .bindPopup("<h1>" + state.State + "</h1> <hr> <h3> Mean Hourly </h3>")
//     .addTo(myMap);
// }

