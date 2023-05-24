# Base image
FROM python:3.10

# Set working directory
WORKDIR /api

# Copy requirements file
COPY requirements.txt .

# Install project dependencies
RUN pip install -r requirements.txt

# Copy the Flask app code
COPY . .

# Expose the Flask app port
EXPOSE 5000

# Define the command to run the Flask app
CMD ["python", "run.py"]
