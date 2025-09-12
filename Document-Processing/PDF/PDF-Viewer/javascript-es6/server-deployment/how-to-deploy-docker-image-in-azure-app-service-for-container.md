---
layout: post
title: How to deploy docker image in azure app service for container in Typescript Pdfviewer control | Syncfusion
description: Learn here all about How to deploy docker image in azure app service for container in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to deploy docker image in azure app service for container
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# How to deploy docker image in azure app service for container in Typescript Pdfviewer control

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

**Step 2:** Create an Azure App Service plan.

Create an App Service plan in the resource group with the [`az appservice plan create`](https://docs.microsoft.com/en-us/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-create) command.

The following example creates an App Service plan named pdfviewerappservice in the Standard pricing tier (--sku S1) and in a Linux container (--is-linux).

```
az appservice plan create --name pdfviewerappservice --resource-group pdfviewerresourcegroup --sku S1 --is-linux
```

**Step 3:** Create a Docker Compose app.

Create a multi-container [`web app`](https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro) in the pdfviewerappservice App Service plan with the [`az webapp create`](https://docs.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az-webapp-create) command. The following command creates the web app using the provided Docker compose file. Please look into the section for getting started with Docker compose to create the Docker compose file for the PDF Viewer server and use the created Docker compose file here.

```
az webapp create --resource-group pdfviewerappservice --plan pdfviewerappservice --name pdfviewer-server --multicontainer-config-type compose --multicontainer-config-file pdfviewer-server-compose.yml
```

**Step 4:** Browse to the app.

Browse to the deployed app at `http://<app_name>.azurewebsites.net`,. i.e. `http://pdfviewerappservice.azurewebsites.net`. Open this link in a browser and navigate to the PDF Viewer Web API control `http://pdfviewerappservice.azurewebsites.net/api/pdfviewer`. It returns the default get method response.

Append the app service running the URL `http://pdfviewerappservice.azurewebsites.net/api/pdfviewer` to the service URL in the client-side PDF Viewer control. For more information about how to get started with the PDF Viewer control, refer to this [`getting started page`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/?).

For more information about the app container service, please look deeper into the [`Microsoft Azure Container Service`](https://docs.microsoft.com/en-us/azure/app-service/containers/quickstart-multi-container) for a production-ready setup.