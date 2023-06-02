# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the React app code
COPY . .

# Expose the React app port
EXPOSE 3000

# Define the command to run the React app
CMD ["npm", "start"]
