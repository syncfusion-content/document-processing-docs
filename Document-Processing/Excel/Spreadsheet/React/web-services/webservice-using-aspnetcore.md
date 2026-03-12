# Connecting Local Web Services for Spreadsheet Open and Save in ASP.NET Core

This guide demonstrates how to prepare and connect local web services for spreadsheet open and save operations using ASP.NET Core.

By default, the Syncfusion Spreadsheet component uses Syncfusion®-hosted endpoints for file operations:

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

## Create a New ASP.NET Core Web API Project

To create a new ASP.NET Core Web API project, follow the steps in the link below:

[Tutorial: Create a controller-based web API with ASP.NET Core | Microsoft Learn](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-10.0&source=recommendations&tabs=visual-studio#create-a-web-api-project)

## Dependencies

Open and save helper functions are provided in the
[`Syncfusion.EJ2.Spreadsheet.AspNet.Core`](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core#dependencies-body-tab) package, which is available in Essential Studio and on [nuget.org](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core#readme-body-tab).

## Add Open and Save Controllers

Once the Web API is created, add the following Open and Save controller code to your controller file to enable open and save actions:

```csharp
// Open action
[HttpPost]
[Route("Open")]
public IActionResult Open([FromForm] IFormCollection openRequest)
{
        OpenRequest open = new OpenRequest();
        open.File = openRequest.Files[0];
        return Content(Workbook.Open(open));
}

// Save action
[HttpPost]
[Route("Save")]
public IActionResult Save([FromForm] SaveSettings saveSettings)
{
        return Workbook.Save(saveSettings);
}
```

## Run the Web API Project

After adding the controller code, build and run the Web API project by following the instructions in the link below:

[Run the ASP.NET Core Web API project](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-10.0&source=recommendations&tabs=visual-studio#run-the-project)

## Configuring the Client-Side URLs

Once your local service is running, configure your client app to use the local endpoints:

```jsx
<SpreadsheetComponent
    openUrl="https://localhost:5173/api/spreadsheet/open"
    saveUrl="https://localhost:5173/api/spreadsheet/save"
/>
```

## Configuring File Size Limits

When working with large Excel files, it is important to configure file size limits to prevent server-side exceptions.

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

**Program.cs:**
```csharp
builder.Services.Configure<FormOptions>(options =>
{
        options.MultipartBodyLengthLimit = int.MaxValue;
        options.ValueLengthLimit = int.MaxValue;
});
```

## Configure CORS (Cross-Origin Resource Sharing)

Edit `Program.cs` to enable CORS for your application:

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