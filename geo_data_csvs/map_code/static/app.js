// Use the D3 libary to read in "jobtitles.json" file.  
//  Add list of job titles to drop down menu.
d3.json("jobtitles.json").then(function (data) {
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
        var option = d3.select("#jobDataset").append("option").text(data[i].Title);
        // console.log(option);
    }
});

function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index];
    });
}

// Set map to geographic center of USA
const centerLatLng = [39.8283, -98.5795]

// Create base map in Leaflet
var myMap = L.map("map", {
    center: centerLatLng,
    zoom: 5,
});

// Create base tile layer and add to map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

d3.selectAll("#jobDataset").on("change", optionChanged);

function optionChanged() {
    d3.event.preventDefault();

    var dropdownoptions = d3.select("#jobDataset");
    var title = dropdownoptions.property("value");
    console.log(title);

    search_code = [];
    //Filter for the respective code for the title using the jobtitles.json file.
    d3.json("jobtitles.json").then(function (data) {
        var jobs = data
        // console.log(jobs)
        var search = jobs.filter(job => job.Title == title);
        // console.log(search);
        var code = search[0].Code;
        search_code.push(code);
        // console.log(code);
    });
    // console.log(search_code);

    //Filter using the code for training, education & experience info using the train_edu_exp.json file.
    //Display in Education, Training & Experience panel.
    d3.json("train_edu_exp.json").then(function (data2) {
        // console.log(data2);
        var edu_tra_exp = data2;
        var ete = edu_tra_exp.filter(info => info.Code == search_code);
        var ete_info = ete[0];
        // console.log(ete_info);
        var eteinfo = d3.select("ul");
        eteinfo.html("");
        var education = d3.select('ul').append('li').text(`Typical education needed for entry: ${ete_info.Education}`);
        var experience = d3.select('ul').append('li').text(`Work experience in a related occupation: ${ete_info.Experience}`);
        var training = d3.select('ul').append('li').text(`Typical on the job training: ${ete_info.Training}`);

        //Graphed select Education Data as a pie chart.

        var piechart = [{
            values: [ete_info.Less_HighSchool, ete_info.HighSchool, ete_info.Some_College, ete_info.Associate_Degree, ete_info.Bachelor_Degree, ete_info.Master_Degree, ete_info.Doctoral_Professional_Degree],
            labels: ["Less than High School Diploma", "High School Diploma or Equivalent", "Some College, No Degree", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctoral or Professional Degree"],
            hole: .4,
            type: "pie",
            hoverinfo: "label+percent",
            automargin: true
        }];
        var layout = {
            height: 300,
            width: 300,
            title: "Educational Attainment",
            margin: { "t": 30, "b": 0, "l": 0, "r": 0 },
            showlegend: false,
        };
        Plotly.newPlot('pie', piechart, layout);
    });

    d3.json("all_state_data.json").then(function (data3) {
        // console.log(data3)
        // console.log(search_code[0])
        // var 
        // var jobData = data3.filter(job => job.Occupation_Code == search_code)
        // console.log(jobData)

        // for (var i = 0; i < jobData.length; i++) {
        //     var meanHourly = jobData.Mean_Hourly_Income
        //     console.log(meanHourly)
        // }
        // console.log(jobData);

        for (var i = 0; i < data3.length; i++) {
            var d = data3[i];
            const lng = d.Longitude;
            const lat = d.Latitude;
            const lnglat = {lon: lng, lat: lat};
            L.marker(lnglat)
            .bindPopup("<h1>" + d.State + "</h1> <hr> <h3> Mean Hourly" + d.Mean_Hourly_Income + "</h3>")
            .addTo(myMap);
            // console.log(d.Mean_Hourly_Income)
        }
    });
};
