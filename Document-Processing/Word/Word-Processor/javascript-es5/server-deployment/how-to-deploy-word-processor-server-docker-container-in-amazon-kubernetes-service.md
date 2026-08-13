---
layout: post
title: Deploy Syncfusion Word Processor in Amazon Kubernetes Service
description: Learn here all about How to deploy word processor server docker container in amazon kubernetes service in Syncfusion Document editor.
platform: document-processing
control: How to deploy word processor server docker container in amazon kubernetes service 
documentation: ug
domainurl: ##DomainURL##
---
# How to deploy Word Processor server in Amazon Kubernetes Service

## Prerequisites

* `AWS Account`: Have an Amazon Web Services (AWS) account.
* `AWS CLI`: Install the AWS Command Line Interface (CLI) on your local machine.
* `Kubectl`: Install the Kubernetes command-line tool `kubectl` on your local machine.
* `Docker`: Install Docker on your local machine.
* `Word Processor Docker Image`: Have a Docker image of the Word Processor server ready to deploy.

To deploy the Word Processor server Docker image, you need to follow the process below:

* Push Docker Image to Registry (Amazon Elastic Container Registry)
* Deploy Docker Image on Amazon Kubernetes Service

Let us briefly discuss each process.

## Push the Docker image to the Amazon Elastic Container Registry

**Step 1:** Dockerize the Word Processor Server application using the [syncfusion/word-processor-server](https://hub.docker.com/r/syncfusion/word-processor-server) image.

```
docker build -t <your-image-name> .
```

**Step 2:** Create a private repository name ‘documenteditor’ in Amazon Elastic Container Registry (ECR) using the AWS CLI or AWS Console to push the docker image

```
aws ecr create-repository --repository-name <repository-name>
```

**Step 3:** Tag the image to push to ECR

```
docker tag <your-image-name>:latest <your_ECR_registry_URI>/<your_repository_name>:latest
```
Refer to the following example to tag the image:
   
```
docker tag syncfusion/word-processor-server:latest 123456.dkr.ecr.us-east-1.amazonaws.com/documenteditor:latest
```

N> Get the ECR registry URI from the AWS console or with the following AWS CLI command:

```
aws ecr describe-repositories --repository-names <repository-name> --query 'repositories[*].repositoryUri' --output text
```

**Step 4:** Login to the ECR registry using the AWS CLI to push the docker image

```   
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <your_ECR_registry_URI>
```

Replace `<region>` with your AWS region and `<your_ECR_registry_URI>` with your ECR registry URI.

**Step 5:** Push the tagged image to ECR

```
docker push <your_ECR_registry_URI>/<your_repository_name>:latest
```

## Deploy Docker Image on Amazon Kubernetes Service

Follow the steps below to deploy the Docker image from the Amazon Elastic Container Registry (ECR) to Amazon Kubernetes Service (EKS).

**Step 1:** Create an Amazon EKS cluster using the AWS console.
  
**Step 2:** Authenticate with AWS ECR
You need to authenticate with AWS ECR to pull the image from the registry.

```
aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com
```

**Step 3:** Configure Kubernetes to communicate with the cluster

```
aws eks --region <region> update-kubeconfig --name <cluster-name>
```

**Step 4:** Tag the Docker Image to the created cluster

```   
docker tag <your-aws-account-id>.dkr.ecr.<your-region>.amazonaws.com/<repository-name>:<tag> <your-eks-cluster-id>.dkr.ecr.<your-region>.amazonaws.com/<repository-name>:<tag>
```

Refer to the following example
```   
docker tag 12345.dkr.ecr.us-east-1.amazonaws.com/documenteditor:latest 98765ABCD.dkr.ecr.us-east-1.amazonaws.com/documenteditor:latest
```

In this command:
* <your-eks-cluster-id> should be replaced with your EKS cluster ID, which is the base part of your EKS cluster endpoint (e.g., abcd1234).
* <your-region> should be replaced with your AWS region.


**Step 5:** To create a Kubernetes deployment, write a Kubernetes manifest.

**i.** Create a Kubernetes Deployment manifest (`deployment.yaml`) for your application. Specify the Docker image location.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: your-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: your-app
  template:
    metadata:
      labels:
        app: your-app
    spec:
      containers:
      - name: your-container
        image: <account-id>.dkr.ecr.<region>.amazonaws.com/your-repository-name:tag
        ports:
        - containerPort: 80
```
**ii.** Apply the Deployment manifest to create the deployment in your EKS cluster.

```   
kubectl apply -f deployment.yaml
```
  
**iii.** Use port-forwarding to access the Word Processor Server application locally and verify its functionality.

```   
kubectl port-forward <pod-name> <local-port>:<container-port>
```

N> Get the pod names from the AWS console or with the following AWS CLI command:

```   
kubectl get pods
```

Finally, you can access the sample at `http://localhost:<local-port>/api/documenteditor/`.