---
layout: post
title: Publish Spreadsheet Server to Azure App Service from Visual Studio
description: Learn how to publish the Syncfusion Spreadsheet Server Web API to Azure App Service using Visual Studio.
control: How to publish Spreadsheet Server in Azure App Service using Visual Studio
platform: document-processing
documentation: ug
---

# Publish ASP.NET Core Spreadsheet Server to Azure App Service from Visual Studio in React Spreadsheet Editor component

## Prerequisites

* `Visual Studio 2022` or later is installed.
* [`.NET 8.0 SDK`](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later installed.
* An active [`Azure subscription`](https://azure.microsoft.com/en-gb) with App Services access.
* The [`Spreadsheet Web API project`](https://github.com/SyncfusionExamples/EJ2-Spreadsheet-WebServices/tree/main/WebAPI) repository cloned locally.

Make sure you build the project using the Build > Build Solution menu command before following the deployment steps.

## Publish to Azure App Service

**Step 1:** In Solution Explorer, right-click the project and click Publish (or use the Build > Publish menu item).

![azure publish ](../images/azure_publish.png)

**Step 2:** In the Pick a publish target dialog box, select Azure as deployment target.

![azure target ](../images/azure_target.png)

**Step 3:** After selecting Azure, choose Azure App Service under the target options.

![azure app service](../images/azure_app_service.png)

**Step 4:** Select Publish. The Create App Service dialog box appears. Sign in with your Azure account, if necessary, and then the default app service settings populate the fields.

![azure credentials](../images/azure_credentials.png)

**Step 5:** Select Create. Visual Studio deploys the app to your Azure App Service, and the web app loads in your browser with the app name at `http://<app_name>.azurewebsites.net`.

![azure_published_window](../images/azure_published_window.png)

**Step 6:** Once the deployment process is complete, The deployed API will be live at the following URL:
https://XXXXXXXXXX.azurewebsites.net

**Step 7:** With your server running, verify that it supports import and export operations by testing the following endpoints:
```
openUrl="https://XXXXXXXXXX.azurewebsites.net/api/spreadsheet/open"
saveUrl="https://XXXXXXXXXX.azurewebsites.net/api/spreadsheet/save
```
Append the App Service running URL to the service URL in the client‑side Spreadsheet Editor component. For more information about how to get started with the Spreadsheet Editor component, refer to this [`getting started page`](../getting-started.md)

For more information about the app container service, please look deeper into the [`Microsoft Azure App Service`](https://docs.microsoft.com/en-us/visualstudio/deployment/) for a production-ready setup.