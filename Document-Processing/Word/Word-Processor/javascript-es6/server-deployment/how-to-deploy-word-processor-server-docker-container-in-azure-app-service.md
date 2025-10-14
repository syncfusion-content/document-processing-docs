---
layout: post
title: How to deploy word processor server docker container in azure app service in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about How to deploy word processor server docker container in azure app service in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to deploy word processor server docker container in azure app service 
documentation: ug
domainurl: ##DomainURL##
---
# How to deploy word processor server docker container in azure app service in JavaScript (ES6) Document editor control

## Prerequisites

* Have [`Azure account`](https://azure.microsoft.com/en-gb/) and [`Azure CLI`](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest) setup in your environment.

* Run the following command to open the Azure login page. Sign into your [`Microsoft Azure account`](https://azure.microsoft.com/en-gb/).

```
az login
```

**Step 1:** Create a resource group.

Create a resource group using the [`az group create`](https://docs.microsoft.com/en-us/cli/azure/group#az-group-create) command.

The following example creates a resource group named documenteditorresourcegroup in the eastus location.

```
az group create --name documenteditorresourcegroup --location "East US"
```

**Step 2:** Create an Azure App Service plan.

Create an App Service plan in the resource group with the [`az appservice plan create`](https://docs.microsoft.com/en-us/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-create) command.

The following example creates an App Service plan named documenteditorappservice in the Standard pricing tier (--sku S1) and in a Linux container (--is-linux).

```
az appservice plan create --name documenteditorappservice --resource-group documenteditorresourcegroup --sku S1 --is-linux
```

**Step 3:** Create a Docker Compose app.

Create a multi-container [`web app`](https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro) in the documenteditorappservice App Service plan with the [`az webapp create`](https://docs.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az-webapp-create) command. The following command creates the web app using the provided Docker compose file. Please look into the section for getting started with Docker compose to create the Docker compose file for the Document Editor server and use the created Docker compose file here.

```
az webapp create --resource-group documenteditorresourcegroup --plan documenteditorappservice --name documenteditor-server --multicontainer-config-type compose --multicontainer-config-file documenteditor-server-compose.yml
```

**Step 4:** Browse to the app.

Browse to the deployed app at `http://<app_name>.azurewebsites.net`, i.e. `http://documenteditor-server.azurewebsites.net`. Browse this link and navigate to the Document Editor Web API control `http://documenteditor-server.azurewebsites.net/api/documenteditor`. It returns the default get method response.

Append the app service running the URL `http://documenteditor-server.azurewebsites.net/api/documenteditor/` to the service URL in the client-side Document Editor control. For more information about the Document Editor control, refer to this [`getting started page`](../getting-started).

For more information about the app container service, please look deeper into the [`Microsoft Azure Container Service`](https://docs.microsoft.com/en-us/azure/app-service/containers/quickstart-multi-container) for a production-ready setup.
