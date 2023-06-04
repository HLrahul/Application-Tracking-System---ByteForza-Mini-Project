"""
Configurations for the application
"""

import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

DEBUG = True
SECRET_KEY = os.environ.get('SECRET_KEY')
SQLALCHEMY_DATABASE_URI = f"postgresql://{os.environ.get('DB_USER')}:{os.environ.get('DB_PASSWORD')}@localhost/{os.environ.get('DB_NAME')}"