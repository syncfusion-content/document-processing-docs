---
layout: post
title: Deploy TypeScript PDF Viewer server to Azure App Service for Containers
description: Deploy the Syncfusion PDF Viewer server Docker image to Azure App Service for Containers and connect it to the TypeScript PDF Viewer client.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Deploy Docker image to Azure App Service for Containers

Deploy the Syncfusion PDF Viewer server container to Azure App Service for Containers to host the backend for the TypeScript PDF Viewer client without managing infrastructure. The steps below provision platform resources, configure the Docker image, and expose the service endpoint required for the component’s `serviceUrl`.

## Prerequisites

- Azure subscription and Azure CLI installed. See the [Install the Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli) article.
- Sign in to Azure before you create resources.

```console
az login
```

Ensure the web app can pull the `syncfusion/pdfviewerserver:latest` image from Docker Hub. Mirror the image to a private registry if outbound internet access is restricted.

## Deploy the PDF Viewer server

Follow these steps to provision the App Service plan and multi-container web app that hosts the PDF Viewer server container.

**Step 1:** Create a resource group.

```console
az group create --name pdfviewerresourcegroup --location "East US"
```

**Step 2:** Create an Azure App Service plan.

```console
az appservice plan create --name pdfviewerappservice --resource-group pdfviewerresourcegroup --sku S1 --is-linux
```

**Step 3:** Create a Docker Compose app.

Create a multi-container web app in the plan by using your Docker Compose file. Ensure it references `syncfusion/pdfviewerserver:latest` and sets the `SYNCFUSION_LICENSE_KEY` environment variable via App Service application settings or Azure Key Vault secrets.

```console
az webapp create --resource-group pdfviewerresourcegroup --plan pdfviewerappservice --name pdfviewer-server --multicontainer-config-type compose --multicontainer-config-file pdfviewer-server-compose.yml
```

**Step 4:** Browse to the app.

Open the app at `https://<app_name>.azurewebsites.net` (for example, `https://pdfviewerappservice.azurewebsites.net`). Use HTTPS in production. Verify the server API returns a default response at `https://<app_name>.azurewebsites.net/api/pdfviewer`.

Append the service endpoint (for example, `https://pdfviewerappservice.azurewebsites.net/api/pdfviewer`) to the PDF Viewer client's `serviceUrl`.

See the PDF Viewer getting started guide for client configuration: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started/

For guidance on deploying multi-container apps to Azure App Service for Containers, see the Azure quickstart: https://docs.microsoft.com/azure/app-service/containers/quickstart-multi-container
