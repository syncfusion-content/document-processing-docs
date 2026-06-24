---
layout: post
title: Deploy Docker image to Azure App Service for Containers in JavaScript PDF Viewer | Syncfusion
description: Step-by-step guide to deploy the Syncfusion PDF Viewer server Docker image to Azure App Service for Containers and connect it to a JavaScript client.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Deploy Docker image to Azure App Service for Containers

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

**Step 2:** Create an Azure App Service plan.

```console
az appservice plan create --name pdfviewerappservice --resource-group pdfviewerresourcegroup --sku S1 --is-linux
```

**Step 3:** Create a Docker Compose app.

Create a multi-container web app in the plan using your docker-compose file (ensure it references syncfusion/pdfviewer-server:latest and sets SYNCFUSION_LICENSE_KEY).

```console
az webapp create --resource-group pdfviewerresourcegroup --plan pdfviewerappservice --name pdfviewer-server --multicontainer-config-type compose --multicontainer-config-file pdfviewer-server-compose.yml
```

**Step 4:** Browse to the app.

Open the app at `https://<app_name>.azurewebsites.net` (for example, `https://pdfviewerappservice.azurewebsites.net`). Use HTTPS in production. Verify the server API returns a default response at `https://<app_name>.azurewebsites.net/api/pdfviewer`.

Append the service endpoint (for example, `https://pdfviewerappservice.azurewebsites.net/api/pdfviewer`) to the PDF Viewer client's `serviceUrl`.

See the PDF Viewer getting started guide for client configuration: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/

For guidance on deploying multi-container apps to Azure App Service for Containers, see the Azure quickstart: https://docs.microsoft.com/azure/app-service/containers/quickstart-multi-container