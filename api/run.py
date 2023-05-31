"""
File to run the flask api in one command

"""

from app import app

if __name__ == '__main__':
    app.run(debug=True)
    