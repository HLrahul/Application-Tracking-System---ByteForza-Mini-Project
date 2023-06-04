"""
The routes in this API are initiated here
"""

from flask import request

from app import app
from app.views import get_candidates, get_candidate, add_candidate, update_candidate, delete_candidate

@app.route('/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def root_methods():

    if request.method == "GET":
        return get_candidates()
    
    if request.method == "POST":
        return add_candidate()

    if request.method == 'PUT':
        candidate_id = request.json.get('id')
        return update_candidate(candidate_id)

    if request.method == 'DELETE':
        candidate_id = request.json.get('id')
        return delete_candidate(candidate_id)


@app.route('/<int:candidate_id>', methods=['GET'])
def get_candidate_by_id(candidate_id):
    return get_candidate(candidate_id)