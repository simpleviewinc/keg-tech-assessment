# Use the official Node.js 18 image as the base image
FROM node:18.17.1

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the ports the app runs on
EXPOSE 3000
EXPOSE 5005

# Command to start the app
CMD ["yarn", "start"]