from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from os import environ

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = environ.get(
    "DATABASE_URL", "postgres://tbsmkoutvlftbs:78a43d94f5ad0fa28526b8510e9aaae2938aeb27cbf50cfe2cb6235c56aa4d41@ec2-54-159-107-189.compute-1.amazonaws.com:5432/de1p8goqk2oub3")

db = SQLAlchemy(app)


class emptitle(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    Code = db.Column(db.String)


class salaryfinal(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Code = db.Column(db.String)
    Median_Annual_Wage = db.Column(db.String)


class trainingeduationexperience(db.Model):
    Index = db.Column(db.Integer, primary_key=True)
    Title = db.Column(db.String)
    Code = db.Column(db.String)
    Education = db.Column(db.Integer)
    Less_HighSchool = db.Column(db.Integer)
    HighSchool = db.Column(db.Integer)
    Some_College = db.Column(db.Integer)
    Associate_Degree = db.Column(db.Integer)
    Bachelor_Degree = db.Column(db.Integer)
    Master_Degree = db.Column(db.Integer)
    Doctoral_Professional_Degree = db.Column(db.Integer)
    Experience: db.Column(db.String)
    Training: db.Column(db.String)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/emptitle")
def getemptitlesPosgres():
    jobs = db.session.query(emptitle)
    emptitledata = []
    for job in jobs:
        item = {
            "Index": job.Index,
            "Title": job.Title,
            "Code": job.Code
        }
        emptitledata.append(item)
    return jsonify(emptitledata)


@app.route("/api/salaryfinal")
def getsalaryfinalsPosgres():
    salaries = db.session.query(salaryfinal)
    salaryfinaldata = []
    for salary in salaries:
        item = {
            "Index": salary.Index,
            "Code": salary.Code,
            "Median_Annual_Wage": salary.Median_Annual_Wage
        }
        salaryfinaldata.append(item)
    return jsonify(salaryfinaldata)


@app.route("/api/trainingeducationexperience")
def gettrainingeduationexperiencePosgres():
    tredexs = db.session.query(
        trainingeduationexperience)
    trainingeducationexperiencedata = []
    for tredex in tredexs:
        item = {
            "Index": tredex.Index,
            "Code": tredex.Code,
            "Title": tredex.Title,
            "Education": tredex.Education,
            "Less_HighSchool": tredex.Less_HighSchool,
            "HighSchool": tredex.HighSchool,
            "Some_College": tredex.Some_College,
            "Associate_Degree": tredex.Associate_Degree,
            "Bachelor_Degree": tredex.Bachelor_Degree,
            "Master_Degree": tredex.Master_Degree,
            "Doctoral_Professional_Degree": tredex.Doctoral_Professional_Degree,
            "Experience": tredex.Experience,
            "Training": tredex.Training
        }
        trainingeducationexperiencedata.append(item)
    return jsonify(trainingeducationexperiencedata)


if __name__ == "__main__":
    app.run(debug=True)
