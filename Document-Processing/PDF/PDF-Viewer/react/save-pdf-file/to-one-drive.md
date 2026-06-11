---
layout: post
title: Save PDF files to OneDrive in React PDF Viewer | Syncfusion
description: Learn how to save PDF files to OneDrive using the Syncfusion React PDF Viewer component with a server-backed web service.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Save PDF files to OneDrive

This article describes how to save a PDF file to OneDrive from the Syncfusion React PDF Viewer using a server-side web service. Follow the steps below.

**Step 1:** Create a Microsoft Graph API application

Create a Microsoft Graph API application, and obtain the application (client) ID and tenant ID. For details, see the [Microsoft Graph guide](https://learn.microsoft.com/en-us/training/modules/msgraph-access-file-data/3-exercise-access-files-onedrive) for accessing files in OneDrive.

**Step 2:** Create a PDF Viewer sample in React

Create a simple PDF Viewer sample in React by following the Syncfusion PDF Viewer for React [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide. This establishes the application structure required for the integration

**Step 3:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project targeting .NET Core 3.0 or later. For guidance, see the Syncfusion knowledge base article on creating a PDF Viewer web service in .NET Core.

2. Open the `PdfViewerController.cs` file in the web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using Helpers;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign configuration values to the corresponding fields.

```csharp
private IConfiguration _configuration;
public readonly string folderName;
public readonly string applicationId;
public readonly string tenantId;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  folderName = _configuration.GetValue<string>("FolderName");
  tenantId = _configuration.GetValue<string>("TenantId");
  applicationId = _configuration.GetValue<string>("ApplicationId");
}
```

5. Modify the `Download()` method to save the downloaded PDF file to the configured OneDrive folder.

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

  // Save the PDF as a stream
  Stream stream = new MemoryStream(documentBytes);

  string documentId = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentId);
  string fileName = result + "_downloaded.pdf";

  var config = LoadAppSettings();
  var client = GetAuthenticatedGraphClient(config);

  var request = client.Me.Drive.Root.Children.Request();
  string folderId = string.Empty;
  var results = await request.GetAsync();

  var folder = results.FirstOrDefault(f => f.Name == folderName && f.Folder != null);
  if (folder != null)
  {
    // Save the matching folderId
    folderId = folder.Id;
  }

  var uploadedFile = client.Me.Drive.Items[folderId]
                     .ItemWithPath(fileName)
                     .Content
                     .Request()
                     .PutAsync<DriveItem>(stream)
                     .Result;

  return Content(documentBase);
}
```

6. Open `appsettings.json` in the web service project and add the following keys below the existing `AllowedHosts` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "TenantId": "Your_Tenant_ID",
  "applApplicationIdicationId": "Your_Application_ID",
  "FolderName": "Your_Folder_Name_To_Access_The_Files_In_Onedrive"
}

```

N> Replace the placeholders with actual values for the Tenant ID, Application ID, and OneDrive folder name.

**Step 4:** Set the PDF Viewer properties in the React PDF Viewer component

Update the `serviceUrl` property with the web service endpoint and set `documentPath` to the PDF file name stored in OneDrive. Ensure the document exists in the target OneDrive folder.

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

N> Install the following NuGet packages in the web service application when required:
- `Microsoft.Identity.Client`
- `Microsoft.Graph`
- `Microsoft.Extensions.Configuration`
- `Microsoft.Extensions.Configuration.FileExtensions`
- `Microsoft.Extensions.Configuration.Json`

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-one-drive)