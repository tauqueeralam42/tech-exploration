## Project Overview
This project demonstrates running a multi-container setup in a single pod, featuring a Node.js application and a MongoDB database. Each pod contains its own application and database. When a pod is forcefully stopped using the `/exit` route, the data stored in that pod is lost. This highlights a drawback of running the application and database in the same pod.

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
- `tauqueer/my-nodejs:single-pod-v1`

## Kubernetes Deployment

To deploy the application on your local Kubernetes cluster using Minikube, follow these steps:

1. Start Minikube:
    ```sh
    minikube start
    ```

2. Apply the deployment manifest:
    ```sh
    kubectl apply -f deployement-node-app.yml
    ```

3. Apply the service manifest:
    ```sh
    kubectl apply -f service-node-app.yml
    ```

## Manifests

- **Deployment Manifest**: `deployement-node-app.yml`
- **Service Manifest**: `service-node-app.yml`

![Screenshot 2024-10-24 203001](https://github.com/user-attachments/assets/7cdcdd72-9b80-44b3-8449-9eb4007cc7a8)
![Screenshot 2024-10-24 203417](https://github.com/user-attachments/assets/2c44da66-48bf-4382-81c5-7870f16991a7)


You can easily run the application on your Kubernetes cluster using the provided manifest files and the `kubectl` command.

## Conclusion

This project showcases how to containerize a Node.js application, push the Docker image to Docker Hub, and deploy it on a local Kubernetes cluster using Minikube. Follow the steps above to get the application up and running on your own setup.
