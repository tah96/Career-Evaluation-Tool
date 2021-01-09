from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from os import environ

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = environ.get(
    "DATABASE_URL", "sqlite:///jobs.sqlite")

db = SQLAlchemy(app)

class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String)

@app.route("/")
def index():
    return "This is our employment data API for Project 2 of the UNC Data Analytics Bootcamp"

@app.route("/api/job-data")
def getJobsPosgres():
    jobs = db.session.query(Job)
    data = []

    for job in jobs:
        item = {
            "id": job.id,
            "description": job.description
        }
        data.append(item)

    return jsonify(item)

if __name__ == "__main__":
    app.run(debug=True)