# React To-Do App

This is a simple React To-Do application. The app is dockerized for ease of development, testing, and deployment. Follow the instructions below to get started with cloning, running, testing, and deploying the app.

## Getting Started

### Prerequisites

Before you begin, make sure you have Docker and Docker Compose installed on your machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Cloning the Repository

To clone the repository, run the following command in your terminal:

```bash
git clone git@github.com:ark13da/to-do-ts.git
cd to-do-ts
```

### Running the App Locally with Docker

```bash
docker-compose up react-app
```

This will:

Build the Docker image.
Start the app in development mode.
Expose the app on http://localhost:3000.
Access the app:

Open your browser and navigate to http://localhost:3000.

Stopping the app:

To stop the app, press Ctrl + C in the terminal where Docker is running, or run:

### Testing

Run tests:

```bash
docker-compose run --rm react-test
```

This will run the tests once and display the results in the terminal.

### Building for Production

1.Build the Docker image:

```bash
docker build -t react-todo-app .
```

This will:

Use the Dockerfile to create a production-ready Docker image.
Minify and optimize the app for deployment.

2.Run the production build:

```bash
docker run -p 80:80 react-todo-app

```

This will:

Start the app in a Docker container using Nginx.
Expose the app on http://localhost.
