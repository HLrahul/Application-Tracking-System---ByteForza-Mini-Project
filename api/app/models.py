"""
Models for the Table in the database.
"""

from app import db

class Candidate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    phone = db.Column(db.String(15), nullable=False)
    experience = db.Column(db.Integer, nullable=False)
    skills = db.Column(db.String(200), nullable=False)
    notice_period = db.Column(db.String(20), nullable=False)
    ctc = db.Column(db.Float, nullable=False)
    expected_ctc = db.Column(db.Float, nullable=False)
    location = db.Column(db.String(50), nullable=False)
    preferred_location = db.Column(db.String(50), nullable=False)
    source = db.Column(db.String(20), nullable=False)
    notes = db.Column(db.Text)
    resume = db.Column(db.LargeBinary, nullable=True)
    candidate_status = db.Column(db.String(20))
    interview_panel = db.Column(db.String(100))
    interview_date_time = db.Column(db.DateTime)
    requirement_for_project = db.Column(db.Text)
