---
layout: post
title: Deploy TypeScript PDF Viewer server to Azure Kubernetes Service (AKS)
description: Deploy the Syncfusion PDF Viewer server Docker image to Azure Kubernetes Service (AKS), expose it securely, and connect it to the TypeScript PDF Viewer client.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Deploy Docker image to Azure Kubernetes Service (AKS)

Host the Syncfusion PDF Viewer server container on Azure Kubernetes Service (AKS) to deliver PDFs to the TypeScript PDF Viewer client at scale. The following workflow provisions the infrastructure, deploys the published image from Docker Hub, and exposes a public endpoint for the component’s `serviceUrl`.

## Prerequisites

- Azure subscription and Azure CLI installed. See the [Install the Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli) guide.
- Sign in to Azure before you create resources.

```console
az login
```

Ensure the AKS nodes can pull the `syncfusion/pdfviewerserver:latest` image from Docker Hub or from a private registry mirror if outbound internet access is restricted.

## Deploy the PDF Viewer server

The following steps create the resource group, cluster, and networking assets used by the PDF Viewer server. Replace resource names if you deploy to an existing namespace or use regional naming conventions.

**Step 1:** Create a resource group for AKS resources.

```console
az group create --name pdfviewerresourcegroup --location "East US"
```

**Step 2:** Create an AKS cluster in the default namespace.

```console
az aks create --resource-group pdfviewerresourcegroup --name pdfviewercluster --node-count 1
```

**Step 3:** Connect to the cluster.

Install kubectl and download the credentials for the resource group. If you use a custom namespace, append `--namespace <name>` to subsequent `kubectl` commands.

```console
az aks install-cli
az aks get-credentials --resource-group pdfviewerresourcegroup --name pdfviewercluster
```

**Step 4:** Create services and deployments.

Create a `pdfviewer-server.yaml` file that defines the Deployment and Service required to expose the container by using a public LoadBalancer.

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

> **Security note:** Store `SYNCFUSION_LICENSE_KEY` in an Azure Key Vault secret or Kubernetes Secret and reference it from the pod manifest instead of hard-coding the value in source control.

**Step 5:** Apply the configuration and get the external IP.

```console
kubectl apply -f ./pdfviewer-server.yaml
kubectl get all
```

It can take several minutes for Azure to provision the LoadBalancer  IP. When the external IP is available, browse to `http://<external-ip>/api/pdfviewer` to verify the default GET response. Enable HTTPS with an ingress controller or Azure Front Door for production workloads.

**Step 6:** Connect the client to the server endpoint.

Use the service endpoint (for example, `https://<external-ip-or-dns>/api/pdfviewer`) as the client's `serviceUrl`. See the PDF Viewer getting-started guide for client configuration: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/

For guidance on production deployments and AKS configuration, see the Azure Kubernetes Service walkthrough: https://docs.microsoft.com/azure/aks/kubernetes-walkthrough
