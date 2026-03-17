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

These demo services are intended solely for demonstration purposes and are not recommended for production or development environments.

## How-To Guide: Create a Local ASP.NET Core Web API

### Create a New ASP.NET Core Web API Project

Follow the official Microsoft tutorial to create a controller-based Web API project:

[Tutorial: Create a controller-based web API with ASP.NET Core | Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-10.0&source=recommendations&tabs=visual-studio#create-a-web-api-project)

### Install Required Dependencies

For spreadsheet open and save operations, install the following NuGet packages:

| Platform      | Assembly                                 | NuGet Package |
|---------------|------------------------------------------|---------------|
| ASP.NET Core  | Syncfusion.EJ2.AspNet.Core <br/> Syncfusion.XlsIORenderer.Net.Core | [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core) <br/> [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) |

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
    if (openRequest.Files.Count > 0) {
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
    return Workbook.Save(saveSettings);
}
```

### Configure File Size Limits

To support large Excel files, configure file size limits in your server settings.

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
builder.Services.Configure<FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = int.MaxValue;
    options.ValueLengthLimit = int.MaxValue;
});

builder.WebHost.ConfigureKestrel(options =>
{
    options.Limits.MaxRequestBodySize = int.MaxValue;
});
```

### Enable CORS (Cross-Origin Resource Sharing)

Edit `Program.cs` to allow cross-origin requests:

```csharp
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

###  Run the Web API Project

Build and run your Web API project. For detailed instructions, refer to:

[Run the ASP.NET Core Web API project](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-10.0&source=recommendations&tabs=visual-studio#run-the-project)

---

### Configuring the Client-Side URLs

After your local service is running, configure your client application to use the local endpoints:

```js
<SpreadsheetComponent
    openUrl="https://localhost:5173/api/spreadsheet/open"
    saveUrl="https://localhost:5173/api/spreadsheet/save"
/>
```

For more information, refer to the following [blog post](https://www.syncfusion.com/blogs/post/host-spreadsheet-open-and-save-services).