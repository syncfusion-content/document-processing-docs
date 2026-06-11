---
layout: post
title: Save PDF files to Google Drive in TypeScript PDF Viewer | Syncfusion
description: Learn how to save PDF files to Google Drive using the Syncfusion TypeScript PDF Viewer component with a server-backed web service.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Save PDF files to Google Drive in TypeScript

This article describes how to save a PDF file to Google Drive from the Syncfusion JavaScript PDF Viewer using a server-side web service. Follow the steps below.

**Step 1:** Set up the Google Drive API

Create a Google Cloud project, enable the Google Drive API, and obtain OAuth 2.0 credentials. For details, see the [Google Drive](https://developers.google.com/drive/api/guides/enable-sdk) API enable guide.

**Step 2:** Create a PDF Viewer sample in TypeScript

Create a simple PDF Viewer sample in TypeScript by following the Syncfusion PDF Viewer for TypeScript [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/JavaScript-es6/getting-started) guide. This establishes the basic application structure required for the integration.

**Step 3:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a [web service](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) project targeting .NET Core 3.0 or later. For guidance, see the Syncfusion knowledge base article on creating a PDF Viewer web service in .NET Core.

2. Open the `PdfViewerController.cs` file in the web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Util.Store;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign configuration values to the corresponding fields.

```csharp
private IConfiguration _configuration;
public readonly string folderId;
public readonly string applicationName;
public readonly string credentialPath;
private static readonly string[] Scopes = { DriveService.Scope.DriveFile, DriveService.Scope.DriveReadonly};

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  folderId = _configuration.GetValue<string>("FolderId");
  credentialPath = _configuration.GetValue<string>("CredentialPath");
  applicationName = _configuration.GetValue<string>("ApplicationName");
}
```

5. Modify the `Download()` method to save the downloaded PDF file to the configured Google Drive folder.

```csharp
[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public async Task<IActionResult> Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);

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

6. Open the `appsettings.json` file in the web service project and add the following settings below the existing `"AllowedHosts"` configuration.

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

N> Replace the placeholders with the actual Google Drive folder ID, application name, and the path to the OAuth 2.0 Client IDs JSON file.

N> The folder ID is the unique identifier in the folder URL. For example, in `https://drive.google.com/drive/folders/abc123xyz456`, the ID is `abc123xyz456`.

N> Use a valid `client_id` from the JSON file to authenticate with the Google Drive API and save files securely.

**Step 4:** Set the PDF Viewer properties in the TypeScript PDF Viewer component

Update the `serviceUrl` property of the PDF Viewer component to the web service URL, replacing `https://localhost:44396/pdfviewer` with the actual server endpoint. Set the `documentPath` property to the PDF file name that exists in the configured Google Drive folder.

```typescript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,
         BookmarkView, TextSelection, Annotation, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
// Replace the "localhost:44396" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');
viewer.load('PDF_Succinctly.pdf', null);

```

N> Install the `Google.Apis.Drive.v3` NuGet package in the web service application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-drive).