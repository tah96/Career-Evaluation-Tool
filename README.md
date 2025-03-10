# Career Evaluation Tool
Career Evaluation Tool
By: Tyler Hunt, Autumn Demonet, David Marobella, Mikael Hall, Joseph Pegram, & Ai-Jiuan Wu

UNC Data Analytics Bootcamp

LINK: https://group-5-project-2.herokuapp.com/

## Project goals:
- Clean and filter career data for targeted industries.
- Create an app that dynamically searches by job title.

## Organization:
"Group-5-Project-2" contains the following folders and the respective files:

1. DM folder (by David Marobella): Contains the supporting SQL files and jupyter notebook code to format and to upload to Postgres.

2. Salary_MH (by Mikael Hall): Contains the occupations.csv file (with median salary) that was uploaded to the jupyter notebooks (Salary.ipynb and final Salary_MH_AJ.ipynb) to transform the data. SalaryFINAL.csv is the final revised data file.

3. geo_data_csvs (by Autumn Demonet):Contains the source csv files that was uploaded to the jupyter notebook (csv_cleaner.ipynb) to transform the data. The final 7 cleaned csv files are stored in cleaned_data.

4. Job Growth (by Joseph Pegram): Contains the following CSV's (Employment By Major Occupational group, Fastest Declining Occupation, Fastest Growing Occupation and Occupational Projections) and transformed to (employment_occupation, fastest_decline, fastest_growing and projected_growth). The app.js and package-lock.json was apart of the Node.js module and CSVTOJSON was used to transform projected_growth.csv to jobgrowth.json.

5. TraEdExp_AJ (by Ai-Jiuan Wu):
   a. Resources sub-folder:
    - Contains the jupyter notebbok file (TrainingEdExp.ipynb) that extracted and transformed the csv data for training, education and experience, resulting in the final 5 csv files.
    - The 5 csv files include TrainingEdExp1FINAL.csv, TrainingEdExp2FINAL.csv, TrainingEducationExperience.csv, EmpTitle_Code.csv and national_emp_data_v2.csv.
   b. Dashboard sub-folder:
    - Contains the supporting files that was used to create the app dashboard (outside Heroku and without api routes) using json files that we converted from the final csv files.
    - We used the web based app (https://csvjson.com/csv2json) to make the csv to json convertions. The converted json files included all_state_data.json, jobtitles.json, national_emp_data.json, Salary.json, train_edu_exp.json, and jobgrowth.json (generated independently by Joseph using a JSON conversion library in JS). 
    - config.js (API code for Leaflet), index.html, app.js and style.css (app.html and style.css are in the static folder) are the supporting files that were used to create the data visualization.
    - The app.js includes the supporting code to extract the job opportunities data from Career One Stop by Tyler Hunt and displayed in our dashboard.
    - These files are to be used to run the local server version of the app.

6. app.py: Final app.py with json files defined routes for different tables in Heroku postgres.

7. jobs.sqlite

8. requirements.txt: Heroku requirement file.

9. static folder:
      - Final main2th.js (replaced json file links with API routes) and style.css for visualization in Heroku site (LINK shown above).
      - main.js is a draft in which the snapshop view still need to be improved.

10. templates folder: Final config.js (API key) and index.html for visualization in Heroku site.

## Project accomplishments: 
- Filtered data on occupations in computer, math, legal, education, healthcare, and sales-related industries
- Created an app that serves up visuals describing:
   - typical education level required
   - expected salary (nationally and by state)
   - projected job growth over the next 10 years
   - current opportunities
