// Use the D3 libary to read in emptitles route.  
//  Add list of job titles to drop down menu.

d3.json("/api/emptitle").then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var option = d3.select("#jobDataset").append("option").text(data[i].Title);
        console.log(option);
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

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: "pk.eyJ1IjoiYWp3dTEwMCIsImEiOiJja2lzMzhnb3YwZHViMnVyeGZpNHJiMTZwIn0.MKIMiQD8yXZeE5y2Y2Xnpg"
}).addTo(myMap);


d3.selectAll("#jobDataset").on("change", optionChanged);
d3.selectAll(".location-filter").on("change", optionChanged).on("submit", optionChanged);

function optionChanged() {
    //d3.event.preventDefault();
    var dropdownoptions = d3.select("#jobDataset");
    var title = dropdownoptions.property("value");
    var locationElement = d3.select("#location-input");
    var locationValue = locationElement.property("value")
    console.log(title);
    console.log(locationValue)

    search_code = [];
    //Filter for the respective code for the title using the jobtitles.json file.
    d3.json("/api/emptitle").then(function (data) {
        var jobs = data
        //console.log(jobs)
        var search = jobs.filter(job => job.Title == title);
        //console.log(search);
        var code = search[0].Code;
        search_code.push(code);
        console.log(code);
    });

    console.log(search_code)

    //Filter using the code for training, education & experience info using the train_edu_exp.json file.
    //Display in Career Snapshot panel.
    //Display as a donut graph 
    d3.json("/api/traineduexp").then(function (data2) {
        var edu_tra_exp = data2;
        //console.log(edu_tra_exp);
        var ete = edu_tra_exp.filter(info => info.Code == search_code);
        var ete_info = ete[0];
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

    //Filter using the code for Salary info using the Salary.json file.
    //Display Median Salary in Career Snapshot panel.

    d3.json("/api/salaryfinal").then(function (data3) {
        //console.log(data3);
        var salary = data3;
        //console.log(salary);
        var median = salary.filter(info2 => info2.Code == search_code);
        var median_salary = median[0];
        //console.log(median_salary);
        var median_salary_info = d3.select("ul");
        var salary = d3.select('ul').append('li').text(`Median Annual Salary: $${median_salary.Median_Annual_Wage}`);
        //console.log(median_salary.Median_Annual_Wage);
    });

    d3.json("/api/national_emp_data").then(function (data4) {
        console.log(data4);
        var salary_range = data4;
        var range = salary_range.filter(info3 => info3.Code == search_code);
        var final_salary = range[0];

        //Graphed select Avg National Salary Data as a box plot.
        var boxchart = [{
            y: [final_salary.Annual_10th_Percentile, final_salary.Annual_25th_Percentile, final_salary.Median_Annual_Income, final_salary.Annual_75th_Percentile, final_salary.Annual_90th_Percentile],
            labels: ["10th Percentile", "25th Percentile", "Median", "75th Percentile", "90th Percentile"],
            hoverinfo: "label",
            type: "box",
            automargin: true
        }];
        var layout2 = {
            height: 300,
            width: 300,
            title: "Salary Range",
            margin: { "t": 30, "b": 30, "l": 0, "r": 0 },
            yaxis: { title: "Salary ($)", tickmode: "linear" },
            zeroline: true
        };
        Plotly.newPlot('box', boxchart, layout2);
    });

    //d3.json("/api/projected_growth").then(function (data5) {
    //console.log(data5);
    //var growth = data5;
    //var percent = growth.filter(info4 => info4.code == search_code);
    //var percentage_change = percent[0];
    //var percentage_change_info = d3.select("ul");
    //var percent_growth = d3.select('ul').append('li').text(`% Employment Change (2019-29): ${percentage_change.percent_employment_changes}`);
    //});

    d3.json("/api/all_states").then(function (data6) {
        console.log(data6);
        // console.log(search_code); 
        var jobData = data6.filter(info5 => info5.Occupation_Code == search_code)
        // console.log(jobData);

        //for (var i = 0; i < jobData.length; i++) {
        //var meanHourly = jobData[i].Mean_Hourly_Income;
        //console.log(meanHourly);
        //}

        for (var i = 0; i < jobData.length; i++) {
            var d = jobData[i];
            const lng = d.Longitude;
            const lat = d.Latitude;
            const lnglat = { lon: lng, lat: lat };
            L.marker(lnglat)
                .bindPopup("<h3> Salary Statistics for <strong>" + d.Occupation_Title + "</strong> in " + d.State + "</h3> <hr> <h6> Mean Hourly Income: " + d.Mean_Hourly_Income + "</h6> <hr> <h6> Mean Annual Income: " + d.Mean_Annual_Income + "</h6> <hr> <h6> Mean Hourly Income: " + d.Median_Hourly_Income + "</h6> <hr> <h6> Mean Annual Income: " + d.Median_Annual_Income + "</h6>")
                .addTo(myMap);
            //console.log(d.Mean_Hourly_Income);
        }
    });


    var api_url = `https://api.careeronestop.org/v1/jobsearch/wuRO5lcrwDHuOce/${title}/${locationValue}/10/0/0/1/5/30`
    console.log(api_url)

    d3.json(api_url, {
        headers: new Headers({
            "Authorization": `Bearer blHjSxjGR1HbqZLw4GecmPnE+VuFzxX/zJmndSPV9JxvS8InRefDueufUtVCnUs2tH6n/sJDNFBhw+1dgM5oSA==`
        })
    }).then(function (cos_data) {
        var job_listings = cos_data.Jobs;
        var cos_html = d3.select("#cos-api")
        cos_html.html("")
        job_listings.forEach(job => {
            var job_title = job.JobTitle;
            var job_company = job.Company;
            var job_posting_date = job.AccquisitionDate;
            var job_url = job.URL;
            var job_location = job.Location;
            var job_box = cos_html.append('ul').html(`<b><u>${job_title}</u></b>`);
            job_box.append('li').text(`Company: ${job_company}`);
            job_box.append('li').text(`Location: ${job_location}`);
            job_box.append('li').text(`Posting Date: ${job_posting_date}`);
            job_box.append('li').html(`<a href=${job_url}>${job_url}</a>`);
        });
    });
};

function init() {
    d3.json("/api/emptitle").then(function (data) {
        for (var i = 0; i < data.length; i++) {
            var option = d3.select("#jobDataset").append("option").text(data[i].Title);
        }
        var loading_job = data[0].Title
        console.log(loading_job)
        optionChanged(loading_job)
    });
}

init()

