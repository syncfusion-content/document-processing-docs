---
layout: post
title: Open PDF from OneDrive in React PDF Viewer | Syncfusion
description: Learn how to load PDFs from OneDrive in the Syncfusion React PDF Viewer component using a server-backed approach.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Open PDF from OneDrive

These steps describe how to load a PDF stored in OneDrive into the Syncfusion React PDF Viewer using a server-backed web service.

**Step 1:** Register a Microsoft Graph application

Create a Microsoft Graph API application and obtain the application ID and tenant ID. Follow this guide: https://learn.microsoft.com/en-us/training/modules/msgraph-access-file-data/3-exercise-access-files-onedrive

**Step 2:** Create a PDF Viewer sample in React

Start by following the Syncfusion React PDF Viewer 'Getting started' guide to create a basic PDF viewer sample. This establishes the client-side component that requests document data from the server-backed service.

**Step 3:** Modify the PdfViewerController.cs file in the web service project

1. Create a web service project in .NET Core 3.0 or above. Ensure the project runs over HTTPS in production and configure CORS to allow requests from the client origin. You can refer to this [guide](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on creating the web service project. Install the required NuGet packages (for example `Microsoft.Graph` and `Microsoft.Identity.Client`).

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using Helpers;
```

4. Add the following private fields and constructor parameters to PdfViewerController. In the constructor, assign values from configuration to the corresponding fields.

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

5. Modify the `Load()` method to load the PDF from One Drive.

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 

public async Task<IActionResult> Load([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();
  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      string objectName = jsonObject["document"];
      var config = LoadAppSettings();
      var client = GetAuthenticatedGraphClient(config);

      var request = client.Me.Drive.Root.Children.Request();
      string folderIdToSearch = string.Empty;
      var results = await request.GetAsync();

      var folder = results.FirstOrDefault(f => f.Name == folderName && f.Folder != null);
      if (folder != null)
      {
        // Save the matching folderId
        folderIdToSearch = folder.Id;
      }

      var folderRequest = client.Me.Drive.Items[folderIdToSearch].Children.Request();
      var folderContents = await folderRequest.GetAsync();

      string fileIdToDownload = string.Empty;
      var file = folderContents.FirstOrDefault(f => f.File != null && f.Name == objectName);
      if (file != null)
      {
        // Save the matching fileId
        fileIdToDownload = file.Id;
      }

      string fileIds = fileIdToDownload;
      var fileRequest = client.Me.Drive.Items[fileIdToDownload].Content.Request();

      using (var streamResponse = await fileRequest.GetAsync())
      {
        if (streamResponse != null)
        {
          streamResponse.Seek(0, SeekOrigin.Begin);
          await streamResponse.CopyToAsync(stream);
        }
      }
    }
    else
    {
      byte[] bytes = Convert.FromBase64String(jsonObject["document"]);
       stream = new MemoryStream(bytes);
    }
  }
  jsonResult = pdfviewer.Load(stream, jsonObject);
  return Content(JsonConvert.SerializeObject(jsonResult));
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

N> Replace the placeholders with your actual values: Tenant ID, Application ID, and OneDrive folder name.

**Step 4:** Configure the PDF Viewer component

Set the [serviceUrl](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#serviceurl) to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from OneDrive. Ensure the document name exists in your OneDrive folder.

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

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />

        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

N> The following NuGet packages are commonly required by the example and can be installed with the CLI:
* **Microsoft.Identity.Client**
* **Microsoft.Graph**
* **Microsoft.Extensions.Configuration**
* **Microsoft.Extensions.Configuration.FileExtensions**
* **Microsoft.Extensions.Configuration.Json**

N> Install packages using the NuGet Package Manager or `dotnet` CLI and confirm package versions match target framework compatibility.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-one-drive)