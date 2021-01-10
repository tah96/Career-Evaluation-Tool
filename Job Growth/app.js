const csvtojson = require('csvtojson')

const FileSystem = require("fs");

csvtojson().fromFile("projected_growth.csv").then(source =>{
    console.log(source);

    FileSystem.writeFileSync("jobgrowth.json", JSON.stringify(source), "utf-8",(err) =>{
        if(err) console.log(err)
    })
});

