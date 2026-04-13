---
layout: post
title: Web Services using ASP.NET MVC in React Spreadsheet | Syncfusion
description: Learn here all about web services using ASP.NET MVC in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Web Services 
platform: document-processing
documentation: ug
---


# Connecting Web Services for Spreadsheet Open and Save in ASP.NET MVC

This guide explains how to set up and connect local web services for open and save operations in the Syncfusion Spreadsheet component using **ASP.NET MVC**.

## Purpose

This platform-specific guide provides step-by-step configuration and code examples for implementing Open and Save endpoints using ASP.NET MVC. High-level explanations and benefits live in the shared overview; this document focuses on concrete implementation, configuration, and troubleshooting for ASP.NET MVC apps.

## Quick Start

1. Create or open your ASP.NET MVC 5 project.
2. Install the Syncfusion MVC server packages listed below.
3. Add `Open` and `Save` controller actions (see sample code).
4. Configure `web.config` and `Global.asax` for CORS and request limits; run and test.

## How-To Guide: Create a Local ASP.NET MVC Web Service

### Create a New ASP.NET MVC Project

Follow the official Microsoft tutorial to create an ASP.NET MVC 5 project:

[Getting Started with ASP.NET MVC 5 | Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started)

### Install Required Dependencies

For spreadsheet open and save operations, install the following NuGet packages:

| Platform      | Assembly                                 | NuGet Package |
|---------------|------------------------------------------|---------------|
| ASP.NET MVC5  | Syncfusion.XlsIO.AspNet.Mvc5<br/>Syncfusion.ExcelToPdfConverter.AspNet.Mvc5<br/>Syncfusion.Pdf.AspNet.Mvc5<br/>Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5<br/>Syncfusion.EJ2.MVC5 | [Syncfusion.XlsIO.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.XlsIO.AspNet.Mvc5)<br/>[Syncfusion.ExcelToPdfConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.AspNet.Mvc5)<br/>[Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/)<br/>[Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5)<br/>[Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5) |

### Add Open and Save Actions in Controller

Add the following action methods to your controller (e.g., `SpreadsheetController`) to enable open and save functionality:

```csharp
using System.Web;
using System.Web.Mvc;
using Syncfusion.EJ2.Spreadsheet;

public class SpreadsheetController : Controller
{
    // Open action
    [HttpPost]
    public ActionResult Open(OpenRequest openRequest)
    {
        if (openRequest != null && openRequest.File != null)
        {
            var result = Workbook.Open(openRequest);
            return Content(result);
        }
        return new HttpStatusCodeResult(400, "No file uploaded.");
    }

    // Save action
    [HttpPost]
    public void Save(SaveSettings saveSettings)
    {
        if (saveSettings != null && saveSettings.JSONData != null)
        {
            Workbook.Save(saveSettings);
        }
    }
}
```

### Configure File Size Limits

By default, ASP.NET MVC and web servers impose size limits on incoming HTTP requests to prevent abuse and protect server resources. When uploading large Excel files, these requests can exceed the default limits, causing upload failures. To support large Excel files, you need to configure file size limits in your server settings to allow receiving large payloads over HTTP requests.


**web.config**
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <system.web>
        <httpRuntime maxRequestLength="2097151" executionTimeout="3600" />
    </system.web>
    <system.webServer>
        <security>
            <requestFiltering>
                <requestLimits maxAllowedContentLength="2147483647"></requestLimits>
            </requestFiltering>
        </security>
        <directoryBrowse enabled="true" />
    </system.webServer>
</configuration>
```

### Enable CORS (Cross-Origin Resource Sharing)

CORS (Cross-Origin Resource Sharing) is a security feature that allows web applications from different origins (domains, protocols, or ports) to communicate with your API. By default, browsers block cross-origin requests for security reasons. Since the React Spreadsheet component runs in the client browser and needs to communicate with your ASP.NET MVC web service for open and save operations, you must configure CORS to allow these requests. The following configuration enables cross-origin requests from any origin, which is suitable for development environme

**How to Enable CORS in ASP.NET MVC**

1. Open `Global.asax.cs` in your project.
2. Add the following code to the `Application_BeginRequest` method:

```csharp
// Configure CORS to allow the React Spreadsheet component to communicate with the API from any origin
// This is necessary for the browser to permit cross-origin requests for file open and save operations
protected void Application_BeginRequest()
{
    // Allow all origins. For production, specify allowed origins instead of '*'.
    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

    // Handle preflight requests
    if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
    {
        HttpContext.Current.Response.End();
    }
}
```

### Run the MVC Project

After adding the controller codes and above mentioned configurations, build and run the MVC project (F5 or Ctrl+F5 in Visual Studio).

---

### Configuring the Client-Side URLs

Once your local service is launched, configure the openUrl and saveUrl properties in client application to use the local endpoints to perform import and export operation.

```js
<SpreadsheetComponent
    openUrl="https://localhost:44300/Spreadsheet/Open"
    saveUrl="https://localhost:44300/Spreadsheet/Save"
/>
```

For more information, refer to the following [blog post](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## See Also

* [Docker Image Overview](../server-deployment/spreadsheet-server-docker-image-overview)
* [Open Excel Files](../open-excel-files)
* [Save Excel Files](../save-excel-files)