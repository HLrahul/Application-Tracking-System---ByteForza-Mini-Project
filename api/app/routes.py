"""
The routes in this API are initiated here
"""

from flask import request

from app import app
from app.views import get_candidates, get_candidate, add_candidate, update_candidate, delete_candidate, get_candidate_feedback, update_candidate_feedback, get_resume

@app.route('/', methods=['GET', 'POST', 'PUT'])
def root_methods():

    if request.method == "GET":
        return get_candidates()
    
    if request.method == "POST":
        return add_candidate()

    if request.method == 'PUT':
        candidate_id = request.json.get('id')
        return update_candidate(candidate_id)

        

@app.route('/<int:candidate_id>', methods=['GET', 'DELETE'])
def get_delete_candidate_by_id(candidate_id):
    
    if request.method == 'GET':
        return get_candidate(candidate_id)

    if request.method == 'DELETE':
        return delete_candidate(candidate_id)
    


@app.route('/resume/<int:candidate_id>', methods=['GET'])
def candidate_resume(candidate_id):
    return get_resume(candidate_id)

@app.route('/candidate-feedback/<int:candidate_id>', methods=['GET', 'PUT'])
def candidate_feedback_methods(candidate_id):

    if request.method == 'GET':
        return get_candidate_feedback(candidate_id)
    
    if request.method == 'PUT':
        return update_candidate_feedback(candidate_id)