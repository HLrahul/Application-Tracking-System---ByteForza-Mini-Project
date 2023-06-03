"""
Each function or view of the api for managing the requests.
"""

from flask import jsonify, request
from app import db
from app.models import Candidate

def get_candidates():
    candidates = Candidate.query.all()
    candidates_list = []

    for candidate in candidates:

        resume_link = f"/resume/{candidate.id}"

        candidate_data = {
            'id': candidate.id,
            'name': candidate.name,
            'email': candidate.email,
            'phone': candidate.phone,
            'experience': candidate.experience,
            'skills': candidate.skills,
            'notice_period': candidate.notice_period,
            "ctc": candidate.ctc,
            "expected_ctc": candidate.expected_ctc,
            "location": candidate.location,
            "preferred_location": candidate.preferred_location,
            "source": candidate.source,
            "notes": candidate.notes,
            "resume": resume_link,
        }
        
        candidates_list.append(candidate_data)

    return jsonify(candidates_list), 200


def add_candidate():
    candidate_data = request.json
    
    candidate = Candidate(
        name=candidate_data['name'],
        email=candidate_data['email'],
        phone=candidate_data['phone'],
        experience=candidate_data['experience'],
        skills=candidate_data['skills'],
        notice_period=candidate_data['notice_period'],
        ctc=candidate_data['ctc'],
        expected_ctc=candidate_data['expected_ctc'],
        location=candidate_data['location'],
        preferred_location=candidate_data['preferred_location'],
        source=candidate_data['source'],
        notes=candidate_data['notes'],
    )
    
    if 'resume' in candidate_data:
        candidate.resume = candidate_data['resume']

    try:
        db.session.add(candidate)
        db.session.commit()
        return jsonify({'message': 'Candidate added successfully'}), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500
    

def update_candidate(candidate_id):
    candidate = Candidate.query.get(candidate_id)
    if not candidate:
        return jsonify({'message': 'Candidate not found'}), 404

    candidate_data = request.json

    candidate.name = candidate_data.get('name', candidate.name)
    candidate.email = candidate_data.get('email', candidate.email)
    candidate.phone = candidate_data.get('phone', candidate.phone)
    candidate.experience = candidate_data.get('experience', candidate.experience)
    candidate.skills = candidate_data.get('skills', candidate.skills)
    candidate.notice_period = candidate_data.get('notice_period', candidate.notice_period)
    candidate.ctc = candidate_data.get('ctc', candidate.ctc)
    candidate.expected_ctc = candidate_data.get('expected_ctc', candidate.expected_ctc)
    candidate.location = candidate_data.get('location', candidate.location)
    candidate.preferred_location = candidate_data.get('preferred_location', candidate.preferred_location)
    candidate.source = candidate_data.get('source', candidate.source)
    candidate.notes = candidate_data.get('notes', candidate.notes)
    candidate.candidate_status = candidate_data.get('candidate_status', candidate.candidate_status)
    candidate.interview_panel = candidate_data.get('interview_panel', candidate.interview_panel)
    candidate.interview_date_time = candidate_data.get('interview_date_time', candidate.interview_date_time)
    candidate.requirement_for_project = candidate_data.get('requirement_for_project', candidate.requirement_for_project)

    try:
        db.session.commit()
        return jsonify({'message': 'Candidate updated successfully'}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    

def delete_candidate(candidate_id):
    
    candidate = Candidate.query.get(candidate_id)

    if not candidate:
        return jsonify({'message': 'Candidate not found'}), 404

    try:
        db.session.delete(candidate)
        db.session.commit()
        return jsonify({'message': 'Candidate deleted successfully'}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500