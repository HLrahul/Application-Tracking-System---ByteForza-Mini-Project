"""
The routes in this API are initiated here
"""

from app import app
from app.views import get_candidates

@app.route('/', methods=['GET'])
def get_method():
    return get_candidates()