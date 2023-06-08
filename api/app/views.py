"""
Each function or view of the api for managing the requests.
"""

from flask import jsonify, request
from app import db
from app.models import Candidate, CandidateFeedback

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
            "candidate_status": candidate.candidate_status,
            "interview_panel": candidate.interview_panel,
            "interview_date_time": candidate.interview_date_time,
            "requirement_for_project": candidate.requirement_for_project,
        }
        
        candidates_list.append(candidate_data)

    return jsonify(candidates_list), 200


def get_candidate(candidate_id):
    candidate = Candidate.query.get(candidate_id)

    if candidate:
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
            "candidate_status": candidate.candidate_status,
            "interview_panel": candidate.interview_panel,
            "interview_date_time": candidate.interview_date_time,
            "requirement_for_project": candidate.requirement_for_project,
        }

        return jsonify(candidate_data), 200
    
    else:
        return jsonify({'error': 'Candidate not found'}), 404



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
        resume=candidate_data.get('resume'),
        candidate_status=candidate_data.get('candidate_status'),
        interview_panel=candidate_data.get('interview_panel'),
        interview_date_time=candidate_data.get('interview_date_time'),
        requirement_for_project=candidate_data.get('requirement_for_project')
    )

    feedback = CandidateFeedback(
        oops_experience=None,
        oops_rating=None,
        oops_comments='',
        logical_thinking_experience=None,
        logical_thinking_rating=None,
        logical_thinking_comments='',
        programming_experience=None,
        programming_rating=None,
        programming_comments=''
    )

    try:
        candidate.feedback = feedback  # Associate the feedback with the candidate
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
        # Delete the candidate feedback associated with the candidate
        CandidateFeedback.query.filter_by(candidate_id=candidate.id).delete()

        db.session.delete(candidate)
        db.session.commit()

        return jsonify({'message': 'Candidate and associated feedback deleted successfully'}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500
    

def update_candidate_feedback(candidate_id):
    candidate = Candidate.query.get(candidate_id)

    if not candidate:
        return jsonify({'message': 'Candidate not found'}), 404

    candidate_feedback = candidate.feedback

    if not candidate_feedback:
        return jsonify({'message': 'Candidate feedback not found'}), 404

    feedback_data = request.json

    candidate_feedback.oops_experience = feedback_data.get('oops_experience')
    candidate_feedback.oops_rating = feedback_data.get('oops_rating')
    candidate_feedback.oops_comments = feedback_data.get('oops_comments')
    candidate_feedback.logical_thinking_experience = feedback_data.get('logical_thinking_experience')
    candidate_feedback.logical_thinking_rating = feedback_data.get('logical_thinking_rating')
    candidate_feedback.logical_thinking_comments = feedback_data.get('logical_thinking_comments')
    candidate_feedback.programming_experience = feedback_data.get('programming_experience')
    candidate_feedback.programming_rating = feedback_data.get('programming_rating')
    candidate_feedback.programming_comments = feedback_data.get('programming_comments')

    try:
        db.session.commit()
        return jsonify({'message': 'Candidate feedback updated successfully'}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500
    

def get_candidate_feedback(candidate_id):
    candidate = Candidate.query.get(candidate_id)

    if not candidate:
        return jsonify({'message': 'Candidate not found'}), 404

    candidate_feedback = candidate.feedback

    if not candidate_feedback:
        return jsonify({'message': 'Candidate feedback not found'}), 404

    feedback_data = {
        'oops_experience': candidate_feedback.oops_experience,
        'oops_rating': candidate_feedback.oops_rating,
        'oops_comments': candidate_feedback.oops_comments,
        'logical_thinking_experience': candidate_feedback.logical_thinking_experience,
        'logical_thinking_rating': candidate_feedback.logical_thinking_rating,
        'logical_thinking_comments': candidate_feedback.logical_thinking_comments,
        'programming_experience': candidate_feedback.programming_experience,
        'programming_rating': candidate_feedback.programming_rating,
        'programming_comments': candidate_feedback.programming_comments
    }

    return jsonify(feedback_data), 200