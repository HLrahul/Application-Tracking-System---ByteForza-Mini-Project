"""
The routes in this API are initiated here
"""

from app import app

@app.route('/')
def home() :
    return("Hello There!")