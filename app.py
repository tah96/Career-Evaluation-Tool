from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from os import environ

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = environ.get(
    "DATABASE_URL", "postgres://tbsmkoutvlftbs:78a43d94f5ad0fa28526b8510e9aaae2938aeb27cbf50cfe2cb6235c56aa4d41@ec2-54-159-107-189.compute-1.amazonaws.com:5432/de1p8goqk2oub3")

db = SQLAlchemy(app)

@app.route("/")
def index():
    return render_template("index.html")

class emptitle(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    Code = db.Column(db.String)

@app.route("/api/emptitle")
def getemptitlesPosgres():
    emptitles = db.session.query(emptitle)
    emptitledata = []
    for emptitle in emptitles:
        item = {
            "Index": emptitle.Index,
            "Title": emptitle.Title,
            "Code": emptitle.Code
        }
        emptitledata.append(item)
    return jsonify(emptitledata)

class employment_occupation(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    2019_employment = db.Column(db.Integer)
    2029_employment = db.Column(db.Integer)
    2019-2029_Change = db.Column(db.Integer)
    2019-2029_Percent_Change = db.Column(db.Integer)

@app.route("/api/employment_occupation")
def getemployment_occupationsPosgres():
    employment_occupations = db.session.query(employment_occupation)
    employment_occupationdata = []
    for employment_occupation in employment_occupations:
        item = {
            "Index": employment_occupation.Index,
            "Title": employment_occupation.Title,
            "2019_employment": employment_occupation.2019_employment,
            "2029_employment": employment_occupation.2029_employment,
            "2019-2029_Change": employment_occupation.2019-2029_Change,
            "2019-2029_Percent_Change": employment_occupation.2019-2029_Percent_Change
        }
        employment_occupationdata.append(item)
    return jsonify(employment_occupationdata)

class fastest_decline(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    Code = db.Column(db.String)
    2029_employment = db.Column(db.Integer)
    2019-2029_Change = db.Column(db.Integer)
    2019-2029_Percent_Change = db.Column(db.Integer)

@app.route("/api/fastest_decline")
def getfastest_declinesPosgres():
    fastest_declines = db.session.query(fastest_decline)
    fastest_declinedata = []
    for fastest_decline in fastest_declines:
        item = {
            "Index": fastest_decline.Index,
            "Title": fastest_decline.Title,
            "Code": fastest_decline.Code,
            "2019_Employment": fastest_decline.2019_Employment,
            "2029_Employment": fastest_decline.2029_Employment,
            "2019-2029_Change": fastest_decline.2019-2029_Change,
            "2019-2029_Percent_Change": fastest_decline.2019-2029_Percent_Change
        }
        fastest_declinedata.append(item)
    return jsonify(fastest_declinedata)

class fastest_growing(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    Code = db.Column(db.String)
    2029_employment = db.Column(db.Integer)
    2019-2029_Change = db.Column(db.Integer)
    2019-2029_Percent_Change = db.Column(db.Integer)

@app.route("/api/fastest_growing")
def getfastest_growingsPosgres():
    fastest_growings = db.session.query(fastest_growing)
    fastest_growingdata = []
    for fastest_growing in fastest_growing:
        item = {
            "Index": fastest_growing.Index,
            "Title": fastest_growing.Title,
            "Code": fastest_growing.Code,
            "2019_Employment": fastest_growing.2019_Employment,
            "2029_Employment": fastest_growing.2029_Employment,
            "2019-2029_Change": fastest_growing.2019-2029_Change,
            "2019-2029_Percent_Change": fastest_growing.2019-2029_Percent_Change
        }
        fastest_growingdata.append(item)
    return jsonify(fastest_growingdata)

class projected_growth(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    Code = db.Column(db.String)
    Occupation_Type = db.Column(db.String)
    2019_employment = db.Column(db.Integer)
    2029_employment = db.Column(db.Integer)
    2019-2029_Change = db.Column(db.Integer)
    2019-2029_Percent_Change = db.Column(db.Integer)
    Percent_self_employed_2019 = db.Column(db.Integer)
    Occupational_openings_2019_29_annual_average = db.Column(db.Integer)

@app.route("/api/projected_growth")
def getprojected_growthsPosgres():
    projected_growths = db.session.query(projected_growth)
    projected_growthdata = []
    for projected_growth in projected_growths:
        item = {
            "Index": job.Index,
            "Title": job.Title,
            "Code": job.Code,
            "Occupation_Type": job.Occupation_Type
            "2019_Employment": job.2019_employment,
            "2029_Employment": job.2029_employment,
            "2019-2029_Change": job.2019-2029_Change,
            "2019-2029_Percent_Change": job.2019-2029_Percent_Change,
            "Percent_self_employed_2019": job.Percent_self_employed_2019,
            "Occupational_openings_2019_29_annual_average": job.Occupational_openings_2019_29_annual_average
        }
        projected_growthdata.append(item)
    return jsonify(projected_growthdata)

class salaryfinal(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Code = db.Column(db.String)
    Median_Annual_Wage = db.Column(db.String)
    
@app.route("/api/salaryfinal")
def getsalaryfinalsPosgres():
    salaryfinals = db.session.query(salaryfinal)
    salaryfinaldata = []
    for salaryfinal in salaryfinals:
        item = {
            "Index": salaryfinal.Index,
            "Code": salaryfinal.Code,
            "Median_Annual_Wage": salaryfinal.Occupation_Type
        }
        salaryfinaldata.append(item)
    return jsonify(salaryfinaldata)

class trainingeducationexperience(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    Code = db.Column(db.String)
    Education = db.Column(db.String).
    Less_HighSchool = db.Column(db.String)
    HighSchool = db.Column(db.String)
    SomeCollege = db.Column(db.String)
    Associate_Degree = db.Column(db.String)
    Bachelor_Degree: trainingeducationexperience.Bachelor_Degree(db.String)
    Master_Degree: trainingeducationexperience.Master_Degree(db.String)
    Experience: trainingeducationexperience.Experience(db.String)
    Training: trainingeducationexperience.Training(db.String)
    
@app.route("/api/trainingeducationexperience")
def gettrainingeducationexperiencesPosgres():
    trainingeducationexperiences = db.session.query(trainingeducationexperience)
    trainingeducationexperiencedata = []
    for trainingeducationexperience in trainingeducationexperiences:
        item = {
            "Index": trainingeducationexperience.Index,
            "Code": trainingeducationexperience.Code,
            "Title": trainingeducationexperience.Title,
            "Education": trainingeducationexperience.Education,
            "Less_HighSchool": trainingeducationexperience.Less_HighSchool,
            "HighSchool": trainingeducationexperience.HighSchool,
            "Associate_Degree": trainingeducationexperience.Associate_Degree,
            "Bachelor_Degree": trainingeducationexperience.Bachelor_Degree,
            "Master_Degree": trainingeducationexperience.Master_Degree,
            "Doctoral_Professional_Degree": trainingeducationexperience.Doctoral_Professional_Degree,
            "Experience": trainingeducationexperience.Experience(db.String),
            "Training": trainingeducationexperience.Training(db.String)
        }
        trainingeducationexperiencedata.append(item)
    return jsonify(trainingeducationexperiencedata)

if __name__ == "__main__":
    app.run(debug=True)

