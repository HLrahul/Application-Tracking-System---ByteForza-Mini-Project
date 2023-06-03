"""
This file is the starting point of the application.

"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)

from app import models

from app.database import create_database
create_database()

from app import routes