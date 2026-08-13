---
layout: post
title: How to deploy word processor server docker container in azure kubernetes service in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about How to deploy word processor server docker container in azure kubernetes service in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to deploy word processor server docker container in azure kubernetes service 
documentation: ug
domainurl: ##DomainURL##
---
# How to deploy word processor server docker container in azure kubernetes service in JavaScript (ES5) Document editor control

## Prerequisites

* Ensure you have an [`Azure account`](https://azure.microsoft.com/en-gb/) and the [`Azure CLI`](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest) installed in your environment.

* Run the following command to open the Azure login page. Sign in to your [`Microsoft Azure account`](https://azure.microsoft.com/en-gb/).

```
az login
```

**Step 1:** Create a resource group.

Create a resource group using the [`az group create`](https://docs.microsoft.com/en-us/cli/azure/group#az-group-create) command.

The following example creates a resource group named `documenteditorresourcegroup` in the **East US** location.

```
az group create --name documenteditorresourcegroup --location "East US"
```

**Step 2:** Create an AKS cluster.

Use the [`az aks create`](https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az-aks-create) command to create an AKS cluster. The following example creates a cluster named `documenteditorcluster` with one node.

```
az aks create --resource-group documenteditorresourcegroup --name documenteditorcluster --node-count 1
```

**Step 3:** Connect to the cluster.

Install [`kubectl`](https://kubernetes.io/docs/reference/kubectl/kubectl/) in your workspace using the following command.

```
az aks install-cli
```

To configure kubectl to connect to your Kubernetes cluster, use the [`az aks get-credentials`](https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az-aks-get-credentials) command. This command downloads credentials and configures the Kubernetes CLI to use them.

```
az aks get-credentials --resource-group documenteditorresourcegroup --name documenteditorcluster
```

**Step 4:** Create the Kubernetes Service and Deployment

[`Kubernetes Services`](https://kubernetes.io/docs/concepts/services-networking/service/) and [`Deployments`](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) can be configured in a file. To run the Document Editor server, you must define a Service and a Deployment named `documenteditorserver`. To do this, create the `documenteditor-server.yml` file in the current directory using the following code.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: documenteditorserver
  name: documenteditorserver
spec:
  replicas: 1
  selector:
    matchLabels:
      app: documenteditorserver
  template:
    metadata:
      labels:
        app: documenteditorserver
    spec:
      containers:
      - image: syncfusion/word-processor-server:latest
        name: documenteditorserver
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
    app: documenteditorserver
  name: documenteditorserver
spec:
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: documenteditorserver
  type: LoadBalancer
```

**Step 5:** To create all Services and Deployments needed to run the Document Editor server, run the following command.

```console
kubectl create -f ./documenteditor-server.yml
```

Run the following command to get the deployed Kubernetes Service details and copy the external IP address of the Document Editor Service.

```console
kubectl get all
```

Browse to the copied external IP address and navigate to the Document Editor Web API at `http://<external-ip>/api/documenteditor/`. It returns the default GET-method response.

**Step 6:** Append the running Kubernetes Service URL `http://<external-ip>/api/documenteditor/` to the `serviceUrl` in the client-side Document Editor control. For more information about the Document Editor control, refer to the [`Getting Started` page](../getting-started).

For more details about the Azure Kubernetes Service, see [`Microsoft Azure Kubernetes Service`](https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough) for a production-ready setup.
