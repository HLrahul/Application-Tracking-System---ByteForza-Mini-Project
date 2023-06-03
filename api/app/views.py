"""
Each function or view of the api for managing the requests.
"""

from flask import jsonify
from app.models import Candidate

def get_candidates():
    candidates = Candidate.query.all()
    candidates_list = []

    for candidate in candidates:
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
        }
        
        candidates_list.append(candidate_data)

    return jsonify(candidates_list), 200