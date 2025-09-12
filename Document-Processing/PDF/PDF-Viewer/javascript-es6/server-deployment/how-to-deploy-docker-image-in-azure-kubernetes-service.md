---
layout: post
title: How to deploy docker image in azure kubernetes service in Typescript Pdfviewer control | Syncfusion
description: Learn here all about How to deploy docker image in azure kubernetes service in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to deploy docker image in azure kubernetes service
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# How to deploy docker image in azure kubernetes service in Typescript Pdfviewer control

## Prerequisites

* Have [`Azure account`](https://azure.microsoft.com/en-gb/) and [`Azure CLI`](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest) setup in your environment.

* Run the following command to open the Azure login page. Sign into your [`Microsoft Azure account`](https://azure.microsoft.com/en-gb/).

```
az login
```

**Step 1:** Create a resource group.

Create a resource group using the [`az group create`](https://docs.microsoft.com/en-us/cli/azure/group#az-group-create) command.

The following example creates a resource group named pdfviewerresourcegroup in the eastus location.

```
az group create --name pdfviewerresourcegroup --location "East US"
```

**Step 2:** Create AKS cluster.

Use the [`az aks create`](https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az-aks-create) command to create an AKS cluster. The following example creates a cluster named pdfviewercluster with one node.

```
az aks create --resource-group pdfviewerresourcegroup --name pdfviewercluster --node-count 1
```

**Step 3:** Connect to the cluster.

Install the [`kubectl`](https://kubernetes.io/docs/reference/kubectl/kubectl/) into the workspace using the following command.

```
az aks install-cli
```

To configure kubectl to connect to your Kubernetes cluster, use the [`az aks get-credentials`](https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az-aks-get-credentials) command. This command downloads credentials and configures the Kubernetes CLI to use them.

```
az aks get-credentials --resource-group pdfviewerresourcegroup --name pdfviewercluster
```

**Step 4:** Create services and deployments.

[`Kubernetes Services`](https://kubernetes.io/docs/concepts/services-networking/service/) and [`Deployments`](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) can be configured in a file. To run the PDF Viewer server, you have to define a Service and a Deployment pdfviewerserver. To do this, create the pdfviewer-server.yaml file in the current directory using the following code.

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

**Step 5:** To create all Services and Deployments needed to run the PDF Viewer server, execute the following.

```console
kubectl create -f ./pdfviewer-server.yaml
```

Run the following command to get the Kubernetes cluster deployed with service details and copy the external IP address of the PDF Viewer service.

```console
kubectl get all
```

Browse the copied external IP address and navigate to the PDF Viewer Web API control `http://<external-ip>/api/pdfviewer`. It returns the default get method response.

**Step 6:** Append the Kubernetes service running the URL `http://<external-ip>/api/pdfviewer` to the service URL in the client-side PDF Viewer control. For more information about how to get started with the PDF Viewer control, refer to this [`getting started page`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/?).

For more details about the Azure Kubernetes service, please look deeper into [`Microsoft Azure Kubernetes Service`](https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough) for a production-ready setup.