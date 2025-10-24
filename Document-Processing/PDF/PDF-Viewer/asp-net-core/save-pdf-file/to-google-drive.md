---
layout: post
title: Save PDF files to Google Drive in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to save PDF files to Google Drive using the Syncfusion ASP.NET Core PDF Viewer component with a server-backed web service.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Save PDF files to Google Drive

To save a PDF file to Google Drive using the ASP.NET Core PDF Viewer, follow the steps below. This approach uses a server-backed web service.

**Step 1:** Set up the Google Drive API

Create a project in the Google Cloud Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, see the official [guide](https://developers.google.com/drive/api/guides/enable-sdk)

**Step 2:** Create an ASP.NET Core PDF Viewer sample

Follow the instructions in this [Getting Started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET Core.

**Step 3:** Modify the `Index.cshtml.cs` file in the project

1. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Util.Store;
```

2. Add the following private fields and constructor parameters to the `Index.cshtml.cs` class. In the constructor, assign the values from the configuration to the corresponding fields.

```csharp
string[] Scopes = { DriveService.Scope.Drive };
private IConfiguration _configuration;
public readonly string folderId;
private readonly string applicationName;
public readonly string credentialPath;

public IndexModel(Microsoft.AspNetCore.Hosting.IHostingEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
    _hostingEnvironment = hostingEnvironment;
    _cache = cache;
    _configuration = configuration;
    folderId = _configuration.GetValue<string>("FolderId");
    credentialPath = _configuration.GetValue<string>("CredentialPath");
    applicationName = _configuration.GetValue<string>("ApplicationName");
}
```

3. Modify the `OnPostDownloadAsync()` method to save the downloaded PDF files to the Google Drive folder.

```csharp
public async Task<IActionResult> OnPostDownloadAsync([FromBody] jsonObjects responseData)
{
    PdfRenderer pdfviewer = new PdfRenderer(_cache);
    var jsonObject = JsonConverterstring(responseData);
    string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
    byte[] documentBytes = Convert.FromBase64String(documentBase.Split(",")[1]);
    string documentId = jsonObject["documentId"];
    string result = Path.GetFileNameWithoutExtension(documentId);
    string fileName = result + "_downloaded.pdf";

    UserCredential credential;

    using (var memStream = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
    {
        string credPath = "token.json";
        credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
            GoogleClientSecrets.Load(memStream).Secrets,
            Scopes,
            "user",
            CancellationToken.None,
            new FileDataStore(credPath, true));
    }

    // Create the Drive API service.
    var service = new DriveService(new BaseClientService.Initializer()
    {
        HttpClientInitializer = credential,
        ApplicationName = applicationName,
    });
    var fileMetadata = new Google.Apis.Drive.v3.Data.File()
    {
        Name = fileName,
        Parents = new List<string> { folderId }
    };
    FilesResource.CreateMediaUpload request;
    using (var stream = new MemoryStream(documentBytes))
    {
        request = service.Files.Create(fileMetadata, stream, "application/pdf");
        request.Fields = "id";
        object value = await request.UploadAsync();
    }
    return Content(documentBase);
}
```

4. Open the `appsettings.json` file in the project and add the following lines below the existing "`AllowedHosts`" configuration.

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "FolderId": "Your Google Drive Folder ID",
  "CredentialPath": "Your Path to the OAuth 2.0 Client IDs json file",
  "ApplicationName": "Your Application name"
}
```

N> Replace the placeholders with the actual Google Drive folder ID, application name, and the path to the OAuth 2.0 Client IDs JSON file. The folder ID is the unique identifier in the folder URL. For example, in `https://drive.google.com/drive/folders/abc123xyz456`, the ID is `abc123xyz456`.

**Step 4:** Set the PDF Viewer properties in the ASP.NET Core PDF Viewer component

Set the `documentPath` property of the PDF Viewer component to the desired PDF file name that you wish to load from Google Drive. Ensure that the document exists in the target folder.

```csharp
@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" serviceUrl="/Index" documentPath="PDF_Succinctly.pdf">
    </ejs-pdfviewer>
</div>
```

N> Install the **Google.Apis.Drive.v3** NuGet package in the application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-drive)
