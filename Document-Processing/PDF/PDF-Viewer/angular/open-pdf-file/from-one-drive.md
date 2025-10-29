---
layout: post
title: Open PDF files from One Drive in Angular PDF Viewer Component | Syncfusion
description: Learn here all about how to Open PDF files from One Drive in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open PDF files from One Drive
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from OneDrive

Follow these steps to load a PDF from OneDrive using the server-backed PDF Viewer.

**Step 1:** Create a Microsoft Graph API application

Create a Microsoft Graph API application and obtain the application ID and tenant ID. Follow this guide: [link](https://learn.microsoft.com/en-us/training/modules/msgraph-access-file-data/3-exercise-access-files-onedrive)

**Step 2:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

**Step 3:** Modify the PdfViewerController.cs file in the web service project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using Helpers;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

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

5. Modify the `Load()` method to load the PDF files from One Drive.

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

6. Open appsettings.json in the web service project and add the following keys below the existing AllowedHosts configuration

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

Set the serviceUrl to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from OneDrive. Ensure the document name exists in your OneDrive folder.

```typescript
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                                [serviceUrl]='service'
                                [documentPath]='documentPath'
                                style="height:640px;display:block">
                  </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,ThumbnailViewService,
               ToolbarService, NavigationService, AnnotationService, TextSearchService,
                TextSelectionService, PrintService, FormDesignerService, FormFieldsService]
   })
  export class AppComponent implements OnInit {
    // Replace the "localhost:44396" with the actual URL of your server
    public service = 'https://localhost:44396/pdfviewer';
    public documentPath = 'PDF_Succinctly.pdf';
  }
```

N> The following NuGet packages are required to use the previous code example
* **Microsoft.Identity.Client**
* **Microsoft.Graph**
* **Microsoft.Extensions.Configuration**
* **Microsoft.Extensions.Configuration.FileExtensions**
* **Microsoft.Extensions.Configuration.Json**

You can install these packages using the NuGet Package Manager in Visual Studio or Visual Studio Code.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-one-drive)