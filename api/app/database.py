"""
Creates the Tables for the relevant Models in the Database.
"""

from app import app, db

def create_database():
    with app.app_context():
        db.create_all()