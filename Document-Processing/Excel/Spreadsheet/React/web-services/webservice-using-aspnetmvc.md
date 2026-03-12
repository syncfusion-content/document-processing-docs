# Connecting Local Web Services for Spreadsheet Open and Save in ASP.NET MVC

This guide demonstrates how to prepare and connect local web services for spreadsheet open and save operations using **ASP.NET MVC**.

By default, the Syncfusion Spreadsheet component uses Syncfusion hosted endpoints for file operations:

```ts
openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
```

However, these demo services are intended only for **demonstration purposes** and are not recommended for **production or development environments**.

**Benefits of hosting your own service:**
- **Full Control** – Manage your data and processes locally.
- **Better Performance** – Reduce latency with local or private hosting.
- **Security** – Keep sensitive files within your infrastructure.
- **Reliability** – Remain independent of Syncfusion's service availability.
- **Customization** – Add custom business logic and workflows.
- **Compliance** – Meet regulatory and data residency requirements.

## Create a New ASP.NET MVC Project

To create a new ASP.NET MVC project follow the steps mentioned in the link below.

[Getting Started with ASP.NET MVC 5 | Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started)

## Dependencies

Following list of dependencies required for Spreadsheet open and save operations.

| **Platforms** | **Assembly** | **Nuget Package** |
| ----- | ----- | ----- |
| ASP.NET MVC5 | Syncfusion.EJ2.MVC5 <br/>Syncfusion.EJ2.Spreadsheet.AspNet.MVC5 <br/> Syncfusion.Compression.Base <br/> Syncfusion.XlsIO.AspNet.Mvc5 <br/> Syncfusion.ExcelToPdfConverter.AspNet.Mvc5 <br/> | [Syncfusion.EJ2.Spreadsheet.AspNet.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.MVC5) <br/> [Syncfusion.ExcelToPdfConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.AspNet.Mvc5) |

## Add Open and Save Actions in Controller

Once the MVC project is created, add the following Open and Save action methods to your controller (e.g., `SpreadsheetController`) to enable open and save actions:

```csharp
using System.Web;
using System.Web.Mvc;
using Syncfusion.EJ2.Spreadsheet;

public class SpreadsheetController : Controller
{
    // Open action
    [HttpPost]
    public ActionResult Open()
    {
        OpenRequest open = new OpenRequest();
        open.File = Request.Files[0];
        return Content(Workbook.Open(open));
    }

    // Save action
    [HttpPost]
    public ActionResult Save(SaveSettings saveSettings)
    {
        return Workbook.Save(saveSettings);
    }
}
```

## Run the MVC Project

After adding the controller code, build and run the MVC project (F5 or Ctrl+F5 in Visual Studio).

## Configuring the Client-Side URLs

Once your local service is running, configure your client app to use the local endpoints:

```jsx
<SpreadsheetComponent
    openUrl="https://localhost:44300/Spreadsheet/Open"
    saveUrl="https://localhost:44300/Spreadsheet/Save"
/>
```

## Configuring File Size Limits

When working with large Excel files, it is important to configure file size limits to prevent server-side exceptions.

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

## Configure CORS (Cross-Origin Resource Sharing)

Cross-Origin Resource Sharing (CORS) allows your ASP.NET MVC application to accept requests from other domains (such as when your client app and server are running on different ports or hosts).

**How to Enable CORS in ASP.NET MVC**

1. Open `Global.asax.cs` in your project.
2. Add the following code to the `Application_BeginRequest` method.

```csharp
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