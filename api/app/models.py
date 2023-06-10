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
    resume_filename = db.Column(db.String(255), nullable=True)
    resume = db.Column(db.LargeBinary, nullable=True)
    candidate_status = db.Column(db.String(20))
    interview_panel = db.Column(db.String(100))
    interview_date_time = db.Column(db.DateTime)
    requirement_for_project = db.Column(db.Text)


class CandidateFeedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    candidate_id = db.Column(db.Integer, db.ForeignKey('candidate.id'), unique=True, nullable=False)

    oops_experience = db.Column(db.Integer, nullable=True)
    oops_rating = db.Column(db.Integer, nullable=True)
    oops_comments = db.Column(db.Text)
    logical_thinking_experience = db.Column(db.Integer, nullable=True)
    logical_thinking_rating = db.Column(db.Integer, nullable=True)
    logical_thinking_comments = db.Column(db.Text)
    programming_experience = db.Column(db.Integer, nullable=True)
    programming_rating = db.Column(db.Integer, nullable=True)
    programming_comments = db.Column(db.Text)
    interview_status = db.Column(db.String(50), nullable=True)
    interviewer_comments =db.Column(db.Text, nullable=True)
    
    # one-to-one relationship with the Candidate table
    candidate = db.relationship('Candidate', backref=db.backref('feedback', uselist=False))
