"""
This file is the starting point of the application.

"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from app.config import DEBUG, SECRET_KEY, SQLALCHEMY_DATABASE_URI, RESUME_FOLDER

app = Flask(__name__)

app.config['DEBUG'] = DEBUG
app.config['SECRET_KEY'] = SECRET_KEY
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['RESUME_FOLDER'] = RESUME_FOLDER

db = SQLAlchemy(app)
from app import models
from app.database import create_database
create_database()

CORS(app, resources={
    r"/*": {
        "origins": "http://localhost:5173"
}})
app.config['CORS_ORIGINS'] = ['http://*']
app.config['CORS_ALLOW_HEADERS'] = ['Content-Type', 'Authorization']
app.config['CORS_METHODS'] = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
app.config['CORS_SUPPORTS_CREDENTIALS'] = True

@app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

from app import routes