# Use an official Node.js runtime as the base image
FROM node:18 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the build output
FROM nginx:alpine as production-stage

# Copy the build files from the previous stage to the Nginx web server's directory
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
