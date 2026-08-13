---
layout: post
title: How to deploy word processor server docker container in azure app service in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about How to deploy word processor server docker container in azure app service in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to deploy word processor server docker container in azure app service 
documentation: ug
domainurl: ##DomainURL##
---
# How to deploy word processor server docker container in azure app service in JavaScript (ES5) Document editor control

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

**Step 2:** Create an Azure App Service plan.

Create an App Service plan in the resource group with the [`az appservice plan create`](https://docs.microsoft.com/en-us/cli/azure/appservice/plan?view=azure-cli-latest#az-appservice-plan-create) command.

The following example creates an App Service plan named documenteditorappservice in the Standard pricing tier (--sku S1) and in a Linux container (--is-linux).

```
az appservice plan create --name documenteditorappservice --resource-group documenteditorresourcegroup --sku S1 --is-linux
```

**Step 3:** Create a Docker Compose app.

Create a multi-container [`web app`](https://docs.microsoft.com/en-us/azure/app-service/containers/app-service-linux-intro) in the `documenteditorappservice` App Service plan with the [`az webapp create`](https://docs.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az-webapp-create) command. The following command creates the web app using the provided Docker Compose file. **Step 4:** Create the `documenteditor-server-compose.yml` file before running this command. **Step 5:** Use the created Docker Compose file in this command.

```
az webapp create --resource-group documenteditorresourcegroup --plan documenteditorappservice --name documenteditor-server --multicontainer-config-type compose --multicontainer-config-file documenteditor-server-compose.yml
```

**Step 6:** Browse to the app.

Browse to the deployed app at `http://<app_name>.azurewebsites.net` (for example, `http://documenteditor-server.azurewebsites.net`). Navigating to this link opens the Document Editor Web API at `http://documenteditor-server.azurewebsites.net/api/documenteditor/`, which returns the default GET-method response.

Append the running App Service URL `http://documenteditor-server.azurewebsites.net/api/documenteditor/` to the `serviceUrl` in the client-side Document Editor control. For more information about the Document Editor control, refer to the [`Getting Started` page](../getting-started).

For more information about the app container service, see the [`Microsoft Azure Container Service`](https://docs.microsoft.com/en-us/azure/app-service/containers/quickstart-multi-container) for a production-ready setup.
