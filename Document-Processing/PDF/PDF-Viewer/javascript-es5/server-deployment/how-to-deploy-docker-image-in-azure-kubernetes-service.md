---
layout: post
title: Deploy Docker image to Azure Kubernetes Service (AKS) in JavaScript PDF Viewer | Syncfusion
description: Deploy the Syncfusion PDF Viewer server Docker image to Azure Kubernetes Service (AKS), expose it with a LoadBalancer, and connect it to a JavaScript client.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Deploy Docker image to Azure Kubernetes Service (AKS)

## Prerequisites

- [Azure account](https://azure.microsoft.com/) and [Azure CLI](https://docs.microsoft.com/cli/azure/?view=azure-cli-latest) installed.
- Sign in to [Azure](https://azure.microsoft.com/)

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

Install [kubectl](https://kubernetes.io/docs/reference/kubectl/kubectl/) and configure access.

```console
az aks install-cli
az aks get-credentials --resource-group pdfviewerresourcegroup --name pdfviewercluster
```

**Step 4:** Create services and deployments.

Create a pdfviewer-server.yaml file with a [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and a [Service](https://kubernetes.io/docs/concepts/services-networking/service/).

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
  strategy: {}
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
kubectl create -f ./pdfviewer-server.yaml
kubectl get all
```

Browse to http://<external-ip>/api/pdfviewer to verify the default GET response.

**Step 6:** Use the service endpoint (for example, `https://<external-ip>/api/pdfviewer`) as the client's `serviceUrl`. See the PDF Viewer getting-started guide for client configuration: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/

For guidance on production deployments and AKS configuration, see the Azure Kubernetes Service walkthrough: https://docs.microsoft.com/azure/aks/kubernetes-walkthrough