---
layout: post
title: Deploy Docker image to Azure Kubernetes Service (AKS)
description: Deploy the Syncfusion PDF Viewer server Docker image to Azure Kubernetes Service (AKS), expose it with a LoadBalancer, and connect it to a TypeScript (JavaScript ES6) client.
platform: javascript-es6
control: PDF Viewer
documentation: ug
---

# Deploy Docker image to Azure Kubernetes Service (AKS)

## Prerequisites

- Azure account and Azure CLI installed: https://docs.microsoft.com/cli/azure
- Sign in to Azure:

```console
az login
```

**Step 1:** Create a resource group.

```console
az group create --name pdfviewerresourcegroup --location "East US"
```

**Step 2:** Create an AKS cluster.

```console
az aks create --resource-group pdfviewerresourcegroup --name pdfviewercluster --node-count 1
```

**Step 3:** Connect to the cluster.

Install kubectl and configure access.

```console
az aks install-cli
az aks get-credentials --resource-group pdfviewerresourcegroup --name pdfviewercluster
```

**Step 4:** Create services and deployments.

Create a pdfviewer-server.yaml file with a Deployment and a Service.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: pdfviewerserver
  name: pdfviewerserver
spec:
  replicas: 1
  selector:
    matchLabels:
      app: pdfviewerserver
  template:
    metadata:
      labels:
        app: pdfviewerserver
    spec:
      containers:
        - image: syncfusion/pdfviewerserver:latest
          name: pdfviewerserver
          ports:
            - containerPort: 80
          env:
            - name: SYNCFUSION_LICENSE_KEY
              value: "YOUR_LICENSE_KEY"
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: pdfviewerserver
  name: pdfviewerserver
spec:
  ports:
    - port: 80
      targetPort: 80
  selector:
    app: pdfviewerserver
  type: LoadBalancer
```

**Step 5:** Apply the configuration and get the external IP.

```console
kubectl apply -f ./pdfviewer-server.yaml
kubectl get all
```

Browse to http://<external-ip>/api/pdfviewer to verify the default GET response.

**Step 6:** Use the service endpoint (for example, http://<external-ip>/api/pdfviewer) as the client’s serviceUrl. Getting started guide: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/

For production guidance, see Azure Kubernetes Service documentation: https://docs.microsoft.com/azure/aks/kubernetes-walkthrough
