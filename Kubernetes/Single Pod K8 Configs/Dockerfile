# Use the official Node.js image from the Docker Hub
FROM node

# Create and change to the app directory
WORKDIR /myapp

COPY . .

# Install dependencies
RUN npm install


# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "index.js"]