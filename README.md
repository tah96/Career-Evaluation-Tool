# GROUP-5-PROJECT-2
By: Tyler Hunt, Autumn Demonet, David Marobella, Mikael Hall, Joseph Pegram, & Ai-Jiuan Wu

UNC Data Analytics Bootcamp

LINK: https://group-5-project-2.herokuapp.com/

"Group-5-Project-2" contains the following folders and the respective files:

DM folder (by David Marobella): Contains the supporting SQL files and jupyter notebook code to format and to upload to Postgres.

Salary_MH (by Mikael Hall): Contains the occupations.csv file (with median salary) that was uploaded to the jupyter notebooks (Salary.ipynb and final Salary_MH_AJ.ipynb) to transform the data. SalaryFINAL.csv is the final revised data file.

geo_data_csvs (by Autumn Demonet):Contains the source csv files that was uploaded to the jupyter notebook (csv_cleaner.ipynb) to transform the data. The final 7 cleaned csv files are stored in cleaned_data.

Job Growth (by Joseph Pegram):

TraEdExp_AJ (by Ai-Jiuan Wu): a. Resources sub-folder:

Contains the jupyter notebbok file (TrainingEdExp.ipynb) that extracted and transformed the csv data for training, education and experience, resulting in the final 5 csv files.
The 5 csv files include TrainingEdExp1FINAL.csv, TrainingEdExp2FINAL.csv, TrainingEducationExperience.csv, EmpTitle_Code.csv and
national_emp_data_v2.csv. b. Dashboard sub-folder:
Contains the supporting files that was used to create the app dashboard (outside Heroku and without api routes) using json files that we
converted from the final csv files.
We used the web based app (https://csvjson.com/csv2json) to make the csv to json convertions. The converted json files included
all_state_data.json, jobgrowth.json (generated independently by Joseph using a JSON conversion library in JS), jobtitles.json,
national_emp_data.json, Salary.json and train_edu_exp.json.
contig.js (API code for Leaflet), index.html, app.js and style.css (app.html and style.css are in the static folder) are the supporting files that were used to create the data visualization.
The app.js includes the supporting code to extract the job opportunities data from Career One Stop by Tyler Hunt and displayed in our
dashboard.
These files are to be used to run the local server version of the app.
app.py: Final app.py with json files defined routes for different tables in Heroku postgres.

jobs.sqlite

requirements.txt: Heroku requirement file.

static folder:

Final main2th.js (replaced json file links with API routes) and style.css for visualization in Heroku site (LINK shown above).
main.js is a draft in which the snapshop view still need to be improved.
templates folder: Final contig.js (API key) and index.html for visualization in Heroku site.
