// // Set map to geographic center of USA
// const centerLatLng = [39.8283, -98.5795]

// // Create base map in Leaflet
// var myMap = L.map("map", {
//     center: centerLatLng,
//     zoom: 5,
// });

// // Create base tile layer and add to map
// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   }).addTo(myMap);

// Use d3 library to read in json files, add markers to the geographic center of each state, and filter on occ_code to create pop-ups that display state name and salary statistics.
d3.json("state_job_data.json").then(function (data) {
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
        var option = d3.select("#jobDataset").append("option").text(data[i].Occupation_Title);
        // console.log(option);
    }
});

d3.selectAll("#jobDataset").on("change", optionChanged);

function optionChanged() {
    console.log("end of function")
    d3.event.preventDefault();

    var dropdownoptions = d3.select("#jobDataset");
    var title = dropdownoptions.property("value");

    search_code = []

    var state_data = d3.json("state_job_data.json").then(function(state_job_data) {
        console.log(state_job_data)

        var search = state_job_data.filter(job => job.Occupation_Title == title);
        console.log(search);
        var code = search[0].Occupation_Code;
        search_code.push(code);
        console.log(code);

            for (var i = 0; i < state_job_data.length; i++) {
                var mean_hourly = state_job_data[i].Mean_Hourly_Income
                console.log(mean_hourly)
            }
});

d3.json("state_coords.json").then(function(coord_data) {
    console.log(coord_data);
    for (var i = 0; i < coord_data.length; i++) {
        var state = coord_data[i];
        const lng = state.Longitude;
        const lat = state.Latitude;
        const lnglat = {lon: lng, lat: lat};
        L.marker(lnglat)
        .bindPopup("<h1>" + state.State + "</h1> <hr> <h3> Mean Hourly" + state_data.Mean_Hourly_Income + "</h3>")
        .addTo(myMap);
        console.log(state_data)
    }
});
    // coord_data.forEach((state) => {
    //     const lng = state.Longitude;
    //     const lat = state.Latitude;
    //     const lnglat = {lon: lng, lat: lat};
    //     L.marker(lnglat)
    //     .addTo(myMap);
    //     console.log(lnglat)
    // }





// filter by search_code from app.js

// for (var i = 0; i < stateCoords.length; i++) {
//     var state = stateCoords[i];
//     // var state_salary = state_data[i];
//     L.marker((state.Latitude, state.Longitude))
//     .bindPopup("<h1>" + state.State + "</h1> <hr> <h3> Mean Hourly </h3>")
//     .addTo(myMap);
// }
}