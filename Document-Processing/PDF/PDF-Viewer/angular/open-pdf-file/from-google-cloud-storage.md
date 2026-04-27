---
layout: post
title: Open PDF from Google Cloud Storage in Angular PDF Viewer | Syncfusion
description: Learn how to load PDF files from Google Cloud Storage in the Syncfusion Angular PDF Viewer component
platform: document-processing
control: Open PDF files from Google Cloud Storage
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Google Cloud Storage in Angular PDF Viewer

Follow these steps to load a PDF from Google Cloud Storage using the server-backed PDF Viewer.

**Step 1:** Create a Simple PDF Viewer sample in Angular

Start by following the steps in this guide to create a simple [PDF viewer sample](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) in Angular. This establishes a basic PDF Viewer component and its dependencies.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or above. See this background article for the PDF Viewer [web service pattern](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above)

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

4. Add the following private fields and constructor parameters to PdfViewerController. In the constructor, assign values from configuration to the corresponding fields.

```csharp
// Private readonly object _storageClient
private readonly StorageClient _storageClient;

private IConfiguration _configuration;

public readonly string _bucketName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;

  // The key file is used to authenticate with Google Cloud Storage.
  string keyFilePath = "path/to/service-account-key.json";

  // Load the service account credentials from the key file.
  var credentials = GoogleCredential.FromFile(keyFilePath);

  // Create a storage client with Application Default Credentials
  _storageClient = StorageClient.Create(credentials);

   _configuration = configuration;

   _bucketName = _configuration.GetValue<string>("BucketName");
}
```

5. Modify the Load() method to load the PDF files from Google Cloud Storage.

```csharp
[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents  

public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)
{
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      string bucketName = _bucketName;
      string objectName = jsonObject["document"];
      _storageClient.DownloadObject(bucketName, objectName, stream);
      stream.Position = 0;
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
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N> Replace the placeholder with the actual Google Cloud Storage bucket name.

N> Replace `path/to/service-account-key.json` with the configured file path or provide credentials through a secure mechanism (environment variable or secrets manager). Do not store service account keys in source control.

**Step 3:** Configure the PDF Viewer component

Set the serviceUrl to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from Google Cloud Storage. Ensure the document name exists in your bucket.

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

N> The `Google.Cloud.Storage.V1` NuGet package must be installed in the web service project to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-cloud-storage)