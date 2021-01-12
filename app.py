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


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/job-data")
def getJobsPosgres():
    jobs = db.session.query(emptitle)
    data = []
    for job in jobs:
        item = {
            "Index": job.Index,
            "Title": job.Title,
            "Code": job.Code
        }
        data.append(item)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
