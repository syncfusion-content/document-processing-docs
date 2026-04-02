---
layout: post
title: Web Services using ASP.NET Core in React Spreadsheet | Syncfusion
description: Learn here all about web services using ASP.NET Core in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Web Services 
platform: document-processing
documentation: ug
---

# Connecting Web Services for Spreadsheet Open and Save in ASP.NET Core

This guide explains how to set up and connect local web services for open and save operations in the Syncfusion Spreadsheet component using ASP.NET Core.

## Overview

By default, the Syncfusion Spreadsheet component uses Syncfusion-hosted endpoints for file operations:

```ts
openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
```

For better control and performance, we recommend that you configure and run your own Open and Save services locally or on your preferred hosting environment.

### What is a Local Service?

A local service is a web API running on your local machine (or internal network) that handles file operations for the Spreadsheet component. Instead of relying on external hosted endpoints, you control the service directly, giving you greater security, reliability, and customization options.

### Why Use a Local Service Instead of Demo Services?

**Limitations of demo/hosted services:**
- Intended solely for demonstration purposes
- Not recommended for production or development environments
- Limited by external service availability and performance
- Potential security concerns with uploading files to third-party servers
- No direct control over the processing logic or file handling

**Benefits of a local service:**
- **Security**: Files are processed on your own infrastructure
- **Performance**: Reduced latency with local processing
- **Customization**: Implement custom business logic for file operations
- **Reliability**: Direct control over service availability and uptime
- **Compliance**: Meet regulatory requirements by keeping data on-premises

## How-To Guide: Create a Local ASP.NET Core Web API

### Create a New ASP.NET Core Web API Project

Follow the official Microsoft tutorial to create a controller-based Web API project:

[Tutorial: Create a controller-based web API with ASP.NET Core | Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-10.0&source=recommendations&tabs=visual-studio#create-a-web-api-project)

### Install Required Dependencies

For spreadsheet open and save operations, install the following NuGet packages:

| Platform      | Assembly                                 | NuGet Package |
|---------------|------------------------------------------|---------------|
| ASP.NET Core  | Syncfusion.EJ2.Spreadsheet.AspNet.Core <br> Syncfusion.EJ2.AspNet.Core <br/> Syncfusion.XlsIORenderer.Net.Core | [Syncfusion.EJ2.Spreadsheet.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core) <br>[Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core) <br/> [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) |

For more details, see the [dependencies section on nuget.org](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core#dependencies-body-tab).

### Add Open and Save Controllers

Add the following controller actions to enable open and save functionality:

```csharp
// Open action
[HttpPost]
[Route("Open")]
public IActionResult Open([FromForm] IFormCollection openRequest)
{
    OpenRequest open = new OpenRequest();
    if (openRequest.Files && openRequest.Files.Count > 0) {
        open.File = openRequest.Files[0];
        return Content(Workbook.Open(open));
    }
    return BadRequest("No file uploaded.");
}

// Save action
[HttpPost]
[Route("Save")]
public IActionResult Save([FromForm] SaveSettings saveSettings)
{
    if(saveSettings && saveSettings.JSONData) {
        return Workbook.Save(saveSettings);
    }
}
```

### Configure File Size Limits

By default, ASP.NET Core and web servers impose size limits on incoming HTTP requests to prevent abuse and protect server resources. When uploading large Excel files, these requests can exceed the default limits, causing upload failures. To support large Excel files, you need to configure file size limits in your server settings to allow receiving large payloads over HTTP requests.

**web.config**
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
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

**Program.cs**
```csharp
// Configure FormOptions to allow large file uploads by setting multipart body and value length limits
// This enables the server to accept large Excel files in form submissions without rejecting them
builder.Services.Configure<FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = int.MaxValue;
    options.ValueLengthLimit = int.MaxValue;
});

// Configure Kestrel web server to allow large request bodies for handling large Excel file uploads
// This removes the default size restriction at the server level, enabling it to process large files
builder.WebHost.ConfigureKestrel(options =>
{
    options.Limits.MaxRequestBodySize = int.MaxValue;
});
```

### Enable CORS (Cross-Origin Resource Sharing)

CORS (Cross-Origin Resource Sharing) is a security feature that allows web applications from different origins (domains, protocols, or ports) to communicate with your API. By default, browsers block cross-origin requests for security reasons. Since the React Spreadsheet component runs in the client browser and needs to communicate with your ASP.NET Core API for open and save operations, you must configure CORS to allow these requests. The following configuration enables cross-origin requests from any origin, which is suitable for development environments.

Edit `Program.cs` to allow cross-origin requests:

```csharp
// Configure CORS to allow the React Spreadsheet component to communicate with the API from any origin
// This is necessary for the browser to permit cross-origin requests for file open and save operations
var MyAllowSpecificOrigins = "AllowAllOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins, builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);
```

### Run the Web API Project

Build and run your Web API project. For detailed instructions, refer to:

[Run the ASP.NET Core Web API project](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-10.0&source=recommendations&tabs=visual-studio#run-the-project)

### Configuring the Client-Side URLs

Once your local service is launched, configure the openUrl and saveUrl properties in your client application to use the local endpoints for import and export operations

```js
<SpreadsheetComponent
    openUrl="https://localhost:5173/api/spreadsheet/open"
    saveUrl="https://localhost:5173/api/spreadsheet/save"
/>
```

For more information, refer to the following [blog post](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).

## See Also

* [Docker Image Overview](../server-deployment/spreadsheet-server-docker-image-overview)
* [Open Excel Files](../open-excel-files)
* [Save Excel Files](../save-excel-files)