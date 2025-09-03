# Project: actions-cicd

This project is a simple Node.js application that serves as a demonstration for setting up a CI/CD pipeline using GitHub Actions.

### Application

The application is built with Express.js and exposes a single endpoint `/`. When accessed, it returns a JSON response.

- **`server.js`**: The main entry point of the application. It starts a server on port 8080.
- **`package.json`**: Defines the project's dependencies. The only dependency is `express`.
- **`Dockerfile`**: Contains instructions to build a Docker image for the application.

### Workflow

The typical workflow for this application is as follows:

1.  **Local Development**: A developer clones the repository and makes changes to the application. They can run the application locally for testing.
2.  **Push to GitHub**: Once the changes are ready, the developer pushes them to the GitHub repository.
3.  **CI/CD Pipeline**: A GitHub Actions workflow is triggered on every push to the `main` branch. This workflow uses GitHub-hosted runners and would typically:
    - Build the Docker image using the `Dockerfile`.
    - Push the Docker image to a container registry (like Docker Hub).
    - Deploy the application to AWS by running a container from the image.

### How to Run

#### Locally

To run the application locally, you need to have Node.js and npm installed.

1.  Clone the repository:
    ```bash
    git clone https://github.com/sharvil-lade/actions-cicd.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd actions-cicd
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the server:
    ```bash
    node server.js
    ```
    The server will be running on `http://localhost:8080`.

#### Using Docker

To run the application using Docker:

1.  Build the Docker image:
    ```bash
    docker build -t actions-cicd .
    ```
2.  Run the Docker container:
    ```bash
    docker run -p 8080:8080 actions-cicd
    ```
    The server will be running on `http://localhost:8080`.
