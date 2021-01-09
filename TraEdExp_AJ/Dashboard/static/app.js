// Use the D3 libary to read in "jobtitles.json" file.  
//  Add list of job titles to drop down menu.
d3.json("jobtitles.json").then(function (data) {
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
        var search = jobs.filter(job => job.Title == title);
        console.log(search);
        var code = search[0].Code;
        search_code.push(code);
        console.log(code);
    });
    console.log(search_code);

    //Filter using the code for training, education & experience info using the train_edu_exp.json file.
    //Display in Career Snapshot panel.
    //Display as a donut graph 
    d3.json("train_edu_exp.json").then(function (data2) {
        console.log(data2);
        var edu_tra_exp = data2;
        var ete = edu_tra_exp.filter(info => info.Code == search_code);
        var ete_info = ete[0];
        console.log(ete_info);
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

    d3.json("Salary.json").then(function (data3) {
        console.log(data3);
        var salary = data3;
        var median = salary.filter(info2 => info2.Code == search_code);
        var median_salary = median[0];
        console.log(median_salary);
        var median_salary_info = d3.select("ul");
        //median_salary_info.html("");
        var salary = d3.select('ul').append('li').text(`Median Annual Salary: $${median_salary.Median_Annual_Wage}`);
    });

};

