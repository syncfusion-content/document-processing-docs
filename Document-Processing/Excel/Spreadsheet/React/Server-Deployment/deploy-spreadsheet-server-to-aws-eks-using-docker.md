---
layout: post
title: Deploy spreadsheet server to AWS EKS using Docker in React Spreadsheet component | Syncfusion
description: Learn how to deploy the Syncfusion Spreadsheet server Docker image to AWS EKS and connect it to the React Spreadsheet component.
control: How to deploy spreadsheet server to AWS EKS using Docker
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to deploy spreadsheet server to AWS EKS using Docker in React Spreadsheet component

## Prerequisites

* `AWS account` and [`AWS CLI`](https://aws.amazon.com/cli/) installed and configured.
* [`kubectl`](https://kubernetes.io/docs/tasks/tools/) installed and configured.
* Access to an existing EKS cluster, or you can create one via the AWS console or CLI.
* Docker installed if you plan to build and push a custom image.

**Step 1:** Configure your environment
* Open a terminal and authenticate to AWS

```bash

aws configure # enter your Access Key, Secret Key, region, and output format (e.g., json)

```
* Update your kubectl context to point to the EKS cluster:

```bash

aws eks update-kubeconfig --region <region> --name <cluster-name>

```
* After updating the [`kubeconfig`](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/) with the EKS cluster, you can verify the node’s state.

```bash

kubectl get nodes # verify that your cluster nodes are ready

```

**Step 2:** Create the Deployment
Create a file named spreadsheet-deployment.yaml defining a deployment for the Syncfusion® container. The container listens on port `8080`:

```yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: spreadsheet-server
  labels:
    app: spreadsheet-server
spec:
  replicas: 1 # Increase to 2 or more for higher availability
  selector:
    matchLabels:
      app: spreadsheet-server
  template:
    metadata:
      labels:
        app: spreadsheet-server
    spec:
      containers:
      - name: spreadsheet-server
        image: syncfusion/spreadsheet-server:latest
        ports:
        - containerPort: 8080
        env:
            - name: SYNCFUSION_LICENSE_KEY
              value: "YOUR_LICENSE_KEY"

```

N> If you build a custom image, push it to Docker Hub or AWS ECR and update `image:` field accordingly.

**Step 3:** Expose the Service
Create a `spreadsheet-service.yaml` to define a Service of type `LoadBalancer` that forwards traffic to the container. Customize the external port (5000) as needed; the internal `targetPort` should remain 8080 because the container listens on that port.

```yaml

apiVersion: v1
kind: Service
metadata:
  name: spreadsheet-server-service
spec:
  selector:
    app: spreadsheet-server
  type: LoadBalancer
  ports:
    - protocol: TCP
      port: 5000 # External port exposed by the load balancer
      targetPort: 8080 # Internal container port

```

**Step 4:** Deploy to EKS
* Apply the manifests:

```bash

kubectl apply -f spreadsheet-deployment.yaml
kubectl apply -f spreadsheet-service.yaml

```

* Use the kubectl get pods command to monitor pod status. To retrieve the external address, run:

```bash

kubectl get svc spreadsheet-server-service

```

* Retrieve the external address from the Service output. Use `https://` only if the Load Balancer is configured with TLS (use ACM for certificates).

**Step 5:** Configure the React client

Start by following the steps provided in this [link](../getting-started.md) to create a simple Spreadsheet sample in React. This will give you a basic setup of the Spreadsheet component. Once the Service reports an external address (e.g., a1b2c3d4e5f6-1234567890.us-east-1.elb.amazonaws.com), update the [`openUrl`](https://helpej2.syncfusion.com/react/documentation/api/spreadsheet/#openurl) and [`saveUrl`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#saveurl) properties of your React Spreadsheet component:

```jsx

<SpreadsheetComponent
	openUrl={`http://${serviceDNS}:5000/api/spreadsheet/open`}
	saveUrl={`http://${serviceDNS}:5000/api/spreadsheet/save`}
/>

```

N> Use `https://` if your Load Balancer has TLS configured.

**Step 6:** Scaling and customization
- `Scale replicas:` To handle a higher workload, you can scale your deployment by increasing the replicas count in your `spreadsheet-deployment.yaml` file and then run `kubectl apply -f spreadsheet-deployment.yaml` to apply the changes. Kubernetes will automatically manage the distribution of traffic across the pods.
- `Resource limits:` Define `resources.requests`, and `resources.limits` in the container spec to allocate CPU and memory appropriately.
- `Environment variables:` In addition to SYNCFUSION_LICENSE_KEY, you can set other configuration keys (e.g., culture) using the env: section in the deployment manifest without modifying the docker image.

For more information on deploying Spreadsheet docker image in Amazon EKS kindly refer to this [`Blog`](https://www.syncfusion.com/blogs/post/spreadsheet-server-eks-deployment)