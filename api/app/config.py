"""
Configurations for the application
"""

import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

DEBUG = True
SECRET_KEY = os.environ.get('SECRET_KEY')
SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@db:5432/application_tracking_system"
RESUME_FOLDER = "/tmp"
