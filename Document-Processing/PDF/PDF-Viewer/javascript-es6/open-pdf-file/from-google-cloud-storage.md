---
layout: post
title: Open PDF from Google Cloud Storage in TypeScript PDF Viewer | Syncfusion
description: Learn how to load PDFs from Google Cloud Storage in the Syncfusion TypeScript PDF Viewer component using a server-backed approach.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Open PDF from Google Cloud Storage in TypeScript

Follow these steps to load a PDF from Google Cloud Storage using the server-backed PDF Viewer.

**Step 1:** Create a Simple PDF Viewer Sample in TypeScript

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample in TypeScript. This will give you a basic setup of the PDF Viewer component.

**Step 2:** Modify the PdfViewerController.cs file in the web service project

1. Create a web service project in .NET Core 3.0 or above (NET 6 LTS or later recommended). You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

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


```

5. Modify the [Load()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#load) method to load the PDF files from Google Cloud Storage.

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

N> Replace the placeholder with the actual Google Cloud Storage bucket name. Store any configuration values and credentials securely (for example, using environment variables or a secrets manager).

N> Replace `path/to/service-account-key.json` with the actual file path to your service account key JSON file when testing locally. For production, prefer Application Default Credentials or secure key management rather than embedding file paths in source code.

**Step 3:** Configure the PDF Viewer component

Set the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from Google Cloud Storage. Ensure the document name exists in your bucket.

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

N> Install the `Google.Cloud.Storage.V1` NuGet package in the server project to use the Google Cloud Storage client APIs shown above.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-cloud-storage)