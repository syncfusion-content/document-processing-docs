---
layout: post
title: Save PDF files to Google Drive in React PDF Viewer | Syncfusion
description: Learn how to save PDF files to Google Drive using the Syncfusion React PDF Viewer component with a server-backed web service.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Save PDF files to Google Drive

This article describes how to save a PDF file to Google Drive from the Syncfusion React PDF Viewer using a server-side web service. Follow the steps below.

**Step 1:** Set up the Google Drive API

Create a Google Cloud project, enable the Google Drive API, and obtain OAuth 2.0 credentials. For details, see the [Google Drive](https://developers.google.com/drive/api/guides/enable-sdk) API enable guide.

**Step 2:** Create a PDF Viewer sample in React

Create a simple PDF Viewer sample in React by following the Syncfusion PDF Viewer for React [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide. This establishes the basic application structure required for the integration.

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

6. Open the `appsettings.json` file in the web service project and add the following settings below the existing `AllowedHosts` configuration.

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

**Step 4:** Set the PDF Viewer properties in the React PDF Viewer component

Update the `serviceUrl` property of the PDF Viewer component to the web service URL, replacing `https://localhost:44396/pdfviewer` with the actual server endpoint. Set the `documentPath` property to the PDF file name that exists in the configured Google Drive folder.

{% raw %}

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          documentPath="PDF_Succinctly.pdf"
          // Replace the "localhost:44396" with the actual URL of your server
          serviceUrl="https://localhost:44396/pdfviewer"
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

N> Install the `Google.Apis.Drive.v3` NuGet package in the web service application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-drive).