---
layout: post
title: Save PDF files to Google Cloud Storage in TypeScript PDF Viewer | Syncfusion
description: Learn how to save PDF files to Google Cloud Storage using the Syncfusion TypeScript PDF Viewer component with a server-backed web service.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Save PDF files to Google Cloud Storage

To save a PDF file to Google Cloud Storage, follow the steps below.

**Step 1:** Create a PDF Viewer sample in TypeScript

Follow the Syncfusion getting-started instructions for the JavaScript PDF Viewer: [JavaScript PDF Viewer getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started). This sets up the basic PDF Viewer application structure.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. Refer to the Syncfusion knowledge base article on creating a PDF Viewer web service: [Create a PDF Viewer web service in .NET Core 3.0 and above](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above).

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign the configuration values to the corresponding fields.

```csharp
// Private readonly object _storageClient
private readonly StorageClient _storageClient;

private IConfiguration _configuration;

public readonly string _bucketName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;

  // The key file is used to authenticate with Google Cloud Storage. Replace the path with the actual
  // service account key JSON file provided by Google Cloud.
  string keyFilePath = "path/to/service-account-key.json";

  // Load the service account credentials from the key file.
  var credentials = GoogleCredential.FromFile(keyFilePath);

    // Create a storage client using the service account credentials.
  _storageClient = StorageClient.Create(credentials);

   _configuration = configuration;
}

```

5. Modify the `Download()` method to save the downloaded PDF file to the Google Cloud Storage bucket.

```csharp
[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents
public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  string bucketName = _bucketName;
  string fileName = jsonObject["documentId"];

  // Convert the base64 string back to bytes
  string result = Path.GetFileNameWithoutExtension(fileName);
  byte[] documentBytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  // Upload the document to Google Cloud Storage
  using (var memoryStream = new MemoryStream(documentBytes))
  {
    _storageClient.UploadObject(bucketName, result + "_downloaded.pdf", null, memoryStream);
  }
  return Content(documentBase);
}
```

6. Open the `appsettings.json` file in the web service project and add the following entries below the existing `"AllowedHosts"` configuration.

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

N> Replace **Your Bucket name from Google Cloud Storage** with the actual name of the Google Cloud Storage bucket.

N> Replace **path/to/service-account-key.json** with the actual file path to the service account key JSON file. Provide the correct path and filename.

**Step 3:** Set the PDF Viewer properties in the TypeScript PDF Viewer component

Modify the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) property of the PDF Viewer component with the accurate URL of the web service, replacing `https://localhost:44396/pdfviewer` with the actual server URL. Set the `documentPath` property to the desired PDF file name to load from Google Cloud Storage, and ensure that the document exists in the target bucket.

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
  
N> Install the `Google.Cloud.Storage.V1` NuGet package in the web service application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-cloud-storage)