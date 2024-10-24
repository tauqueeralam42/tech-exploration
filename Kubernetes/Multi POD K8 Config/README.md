## Project Overview
This project demonstrates running a multi-container setup in a Kubernetes cluster, featuring a Node.js application and a MongoDB database. The application and database run in separate pods. When a pod is forcefully stopped using the `/exit` route, the data stored in the MongoDB pod remains intact, highlighting the advantage of running the application and database in separate pods.

## Prerequisites

Before you begin, ensure you have the following installed:
- Docker
- Node.js
- kubectl
- Minikube

## Endpoints

The application provides the following endpoints:

- `GET /`: Home route
- `GET /exit`: Stop the application forcefully
- `POST /add-email`: Add an email address to the MongoDB database
- `GET /email`: Retrieve stored email addresses

![Screenshot 2024-10-24 203215](https://github.com/user-attachments/assets/81df8d69-edd1-45ae-abc3-232f4af8de72)
![Screenshot 2024-10-24 203151](https://github.com/user-attachments/assets/5b228c89-58ef-4a60-91e2-5bb803b12935)

## Docker Image

The Docker image for this application is available on Docker Hub:
- `tauqueer/my-nodejs:multi-pod-v1`

## Kubernetes Deployment

To deploy the application on your local Kubernetes cluster using Minikube, follow these steps:

1. Start Minikube:
    ```sh
    minikube start
    ```

2. Apply the MongoDB configuration manifest:
    ```sh
    kubectl apply -f mongo-config.yml
    ```

3. Apply the MongoDB deployment manifest:
    ```sh
    kubectl apply -f mongo-db.yml
    ```

4. Apply the Node.js application deployment manifest:
    ```sh
    kubectl apply -f node-app.yml
    ```

## Manifests

- **MongoDB Configuration Manifest**: `mongo-config.yml`
- **MongoDB Deployment Manifest**: `mongo-db.yml`
- **Node.js Application Deployment Manifest**: `node-app.yml`

![Screenshot 2024-10-24 212839](https://github.com/user-attachments/assets/769875e4-bdb3-4da1-bb92-fa6de26bb053)


![Screenshot 2024-10-24 213030](https://github.com/user-attachments/assets/adba7f8b-926d-4b60-b545-da72a8918060)



You can easily run the application on your Kubernetes cluster using the provided manifest files and the `kubectl` command.

## Conclusion

This project showcases how to containerize a Node.js application, push the Docker image to Docker Hub, and deploy it on a local Kubernetes cluster using Minikube. The application and database run in separate pods, ensuring data persistence even if the application pod is stopped. Follow the steps above to get the application up and running on your own setup.
